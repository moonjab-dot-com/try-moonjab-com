import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuthStore } from '@/store/useAuthStore';
import { useProfileStore } from '@/store/useProfileStore';
import { useCVStore } from '@/store/useCVStore';
import { useInterviewStore } from '@/store/useInterviewStore';
import { toast } from 'sonner';
import type { CVData, InterviewSession, Profile, ProfessionalRole } from '@/types';

function clearUserScopedStores() {
  useCVStore.setState({ cvs: [], currentCV: null });
  useInterviewStore.setState({ sessions: [], currentSession: null, questionBank: [], currentQuestionIndex: 0 });
  useProfileStore.setState({ profile: null });
}

export function useDataPersistence() {
  const { session } = useAuthStore();

  useEffect(() => {
    if (!session?.user) {
      clearUserScopedStores();
      return;
    }
    clearUserScopedStores();
    void loadUserData(session.user.id);
  }, [session?.user?.id]);

  async function loadUserData(userId: string) {
    try {
      const [cvsResult, sessionsResult, profileResult, studentProfileResult] = await Promise.all([
        supabase.from('cvs').select('*').eq('user_id', userId),
        supabase.from('interview_sessions').select('*').eq('user_id', userId),
        supabase.from('profiles').select('*').eq('id', userId).single(),
        supabase.from('student_profiles').select('*').eq('user_id', userId).single(),
      ]);

      // ── CVs ──────────────────────────────────────────────────────────
      if (!cvsResult.error) {
        const calculateScore = useCVStore.getState().calculateScore;
        const transformedCVs: CVData[] = (cvsResult.data || []).map((cv) => {
          const cvData: CVData = {
            id: cv.id,
            userId: cv.user_id,
            title: cv.nombre_cv,
            template: (cv.template as any) || 'creative',
            language: 'es',
            personal: (cv.info_personal as any) || {},
            summary: cv.resumen || '',
            education: (cv.educacion as any) || [],
            experience: (cv.experiencia as any) || [],
            research: [],
            projects: (cv.proyectos as any) || [],
            teaching: [],
            skills: (cv.habilidades as any) || [],
            certifications: (cv.certificaciones as any) || [],
            languages: (cv.idiomas as any) || [],
            awards: [],
            references: [],
            createdAt: cv.created_at,
            updatedAt: cv.updated_at,
            versions: [],
            score: { overall: 0, clarity: 0, impact: 0, keywords: 0, format: 0 },
            metadata: { industryTags: [], targetKeywords: [] },
          };
          return { ...cvData, score: calculateScore(cvData) };
        });
        useCVStore.setState({ cvs: transformedCVs, currentCV: null });
      }

      // ── Interview sessions ────────────────────────────────────────────
      if (!sessionsResult.error) {
        const transformedSessions: InterviewSession[] = (sessionsResult.data || []).map((s) => ({
          id: s.id,
          userId: s.user_id,
          role: s.rol,
          level: 'junior' as any,
          interviewType: 'behavioral' as any,
          tone: 'balanced' as any,
          jobDescription: s.industria || undefined,
          responses: (s.respuestas as any) || [],
          feedback: (s.feedback as any) || {},
          finalScore: s.puntuacion || 0,
          breakdown: { clarity: 0, structure: 0, evidence: 0, language: 0, culture: 0 },
          recommendations: [],
          startedAt: s.created_at,
          completedAt: s.created_at,
          saved: true,
          privacy: 'private' as any,
        }));
        useInterviewStore.setState({ sessions: transformedSessions, currentSession: null });
      }

      // ── Profile ───────────────────────────────────────────────────────
      // Extract RIASEC data from both the profiles table (preferencias_laborales)
      // and the student_profiles table (riasec_code, riasec_scores).
      const profileRow = profileResult.data;
      const studentRow = studentProfileResult.data;

      const prefLaborales = (profileRow?.preferencias_laborales as any) ?? {};
      const riasecCode: string | undefined =
        studentRow?.riasec_code ||
        prefLaborales?.hollandCode ||
        undefined;

      const riasecScores = studentRow?.riasec_scores || prefLaborales?.riasecScores || undefined;

      const rolActual: ProfessionalRole =
        (profileRow?.rol_profesional as ProfessionalRole) || 'student';

      const profile: Profile = {
        userId,
        interests: studentRow?.interests || [],
        values: studentRow?.values || [],
        workStyle: { modality: '', schedule: '', companySize: '' },
        skills: { technical: [], soft: [], languages: [], tools: [] },
        experience: (profileRow?.experiencia as any) || 'student',
        situation: '',
        challenge: '',
        diagnosticResults: {
          topCareers: [],
          profileType: riasecCode || '',
          insights: [],
          radarData: [],
        },
        rolActual,
        rolesSugeridos: [],
        preferencias: {
          intereses: studentRow?.interests || [],
          objetivos: [],
          herramientas: [],
          nivelExperiencia: 'junior',
        },
        historialRol: [],
        riasecCode,
        riasecScores: riasecScores as any,
      };

      useProfileStore.setState({ profile });
    } catch (error) {
      console.error('Error loading user data:', error);
      toast.error('No se pudieron cargar tus datos. Verifica tu conexión.', {
        duration: 4000,
      });
    }
  }

  return { loadUserData };
}
