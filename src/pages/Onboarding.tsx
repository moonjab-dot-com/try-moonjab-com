import { SEOHead } from '@/components/SEOHead';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { WelcomeStep } from '@/components/onboarding/WelcomeStep';
import { RIASECQuizStep } from '@/components/onboarding/RIASECQuizStep';
import { ResultsStep } from '@/components/onboarding/ResultsStep';
import { useAuthStore } from '@/store/useAuthStore';
import { useProfileStore } from '@/store/useProfileStore';
import { useAnalytics } from '@/hooks/useAnalytics';
import { AnswerValue, analyzeRIASECResults, RIASECResult } from '@/lib/riasecScoring';
import { getDashboardBasePath } from '@/lib/authRouting';
import type { ProfessionalRole } from '@/types';

const Onboarding = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuthStore();
  const { updateProfile } = useProfileStore();
  const { trackEvent } = useAnalytics();
  const [currentStep, setCurrentStep] = useState(0);
  const [riasecAnswers, setRiasecAnswers] = useState<Record<string, AnswerValue>>({});
  const [riasecResult, setRiasecResult] = useState<RIASECResult | null>(null);

  const handleNext = () => setCurrentStep(prev => prev + 1);

  const handleRIASECComplete = async (answers: Record<string, AnswerValue>) => {
    setRiasecAnswers(answers);
    const result = analyzeRIASECResults(answers);
    setRiasecResult(result);

    await trackEvent('role_detected', {
      hollandCode: result.hollandCode,
      topTypes: result.topTypes.slice(0, 3).map(t => t.type),
    });

    setCurrentStep(2);
  };

  const handleComplete = () => {
    updateUser({ onboardingCompleted: true });
    navigate(getDashboardBasePath(user?.accessRole || 'free_user'));

    const isGuest = user?.id?.startsWith('guest_');
    if (user?.id && riasecResult && !isGuest) {
      const topRole = (riasecResult.compatibleRoles[0]?.role || 'other') as ProfessionalRole;

      // Update Zustand profile store immediately
      updateProfile({
        rolActual: topRole,
        riasecCode: riasecResult.hollandCode,
        riasecScores: riasecResult.percentages,
      });

      (async () => {
        try {
          await trackEvent('onboarding_completed', {
            hollandCode: riasecResult.hollandCode,
            topRole,
            completedAt: new Date().toISOString(),
          });

          // Save to profiles table
          await supabase
            .from('profiles')
            .update({
              rol_profesional: topRole,
              preferencias_laborales: {
                riasecScores: { ...riasecResult.percentages },
                hollandCode: riasecResult.hollandCode,
                compatibleRoles: riasecResult.compatibleRoles.slice(0, 5).map(r => r.role),
              },
              progreso: {
                cv_completado: false,
                entrevistas_realizadas: 0,
                onboarding_completado: true,
              },
            })
            .eq('id', user.id);

          // Save to student_profiles table (upsert)
          await supabase
            .from('student_profiles')
            .upsert(
              {
                user_id: user.id,
                riasec_code: riasecResult.hollandCode,
                riasec_scores: riasecResult.percentages as any,
                diagnostic_results: {
                  compatibleRoles: riasecResult.compatibleRoles,
                  interpretation: riasecResult.interpretation,
                  strengths: riasecResult.strengths,
                  workEnvironment: riasecResult.workEnvironment,
                  industries: riasecResult.industries,
                } as any,
              },
              { onConflict: 'user_id' },
            );
        } catch (error) {
          console.error('Error saving onboarding profile:', error);
        }
      })();
    }
  };

  const steps = [
    <WelcomeStep key="welcome" onStart={handleNext} userName={user?.name || 'Usuario'} />,
    <RIASECQuizStep
      key="riasec"
      onComplete={handleRIASECComplete}
      initialAnswers={riasecAnswers}
    />,
    <ResultsStep
      key="results"
      onComplete={handleComplete}
      riasecResult={riasecResult}
    />,
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Diagnóstico vocacional"
        description="Descubre tu perfil profesional con el diagnóstico RIASEC de MoonJab."
        path="/onboarding"
        noindex
      />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {steps[currentStep]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
