import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/useAuthStore';
import { useProfileStore } from '@/store/useProfileStore';
import { useCVStore } from '@/store/useCVStore';
import { ProgressBar } from '@/components/dashboard/ProgressBar';
import { NotificationsBell } from '@/components/dashboard/NotificationsBell';
import { BillingStatusCard } from '@/components/dashboard/BillingStatusCard';
import { UpgradeBanner } from '@/components/UpgradeBanner';
import { UpgradeModal } from '@/components/UpgradeModal';
import {
  FileText,
  ArrowRight,
  Sparkles,
  Mic,
  ChevronRight,
  Crown,
  Eye,
  Loader2,
  Plus,
  Download,
  Wand2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { getDashboardBasePath } from '@/lib/authRouting';
import { supabase } from '@/integrations/supabase/client';

const Dashboard = () => {
  const { user, isGuestMode } = useAuthStore();
  const { profile } = useProfileStore();
  const { cvs } = useCVStore();
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [identityLoading, setIdentityLoading] = useState(!isGuestMode);
  const [identity, setIdentity] = useState<{ name: string; email: string } | null>(null);
  const [stats, setStats] = useState({ cvCount: 0, interviewCount: 0, lastUpdated: null as string | null });

  useEffect(() => {
    let isMounted = true;
    const loadIdentity = async () => {
      if (isGuestMode) {
        setIdentity({ name: 'Usuario de Prueba', email: '' });
        setIdentityLoading(false);
        return;
      }
      setIdentityLoading(true);
      const { data, error } = await supabase.auth.getUser();
      const authUser = data.user;
      if (!isMounted) return;
      if (error || !authUser) {
        setIdentityLoading(false);
        return;
      }
      const fallbackName =
        authUser.user_metadata?.nombre ||
        authUser.user_metadata?.name ||
        authUser.email?.split('@')[0] ||
        'Usuario';
      const { data: profileData } = await supabase
        .from('profiles')
        .select('nombre, email')
        .eq('id', authUser.id)
        .maybeSingle();
      if (!isMounted) return;
      setIdentity({
        name: profileData?.nombre || fallbackName,
        email: profileData?.email || authUser.email || '',
      });
      setIdentityLoading(false);

      // Real stats
      const [{ count: cvCount }, { count: interviewCount }, { data: lastCv }] = await Promise.all([
        supabase.from('cvs').select('id', { count: 'exact', head: true }).eq('user_id', authUser.id),
        supabase.from('interview_sessions').select('id', { count: 'exact', head: true }).eq('user_id', authUser.id),
        supabase.from('cvs').select('updated_at').eq('user_id', authUser.id).order('updated_at', { ascending: false }).limit(1).maybeSingle(),
      ]);
      if (!isMounted) return;
      setStats({
        cvCount: cvCount || 0,
        interviewCount: interviewCount || 0,
        lastUpdated: lastCv?.updated_at || null,
      });
    };
    void loadIdentity();
    return () => { isMounted = false; };
  }, [isGuestMode, user?.id]);

  const dashboardBasePath = getDashboardBasePath(
    user?.accessRole || (isGuestMode ? 'trial_user' : 'free_user'),
  );

  const userCV = cvs.find((cv) => cv.userId === user?.id) || cvs[0];
  const cvCompletionScore = useMemo(() => {
    if (!userCV) return 0;
    let score = 0;
    if (userCV.personal?.fullName) score += 20;
    if (userCV.summary) score += 15;
    if ((userCV.experience || []).length > 0) score += 25;
    if ((userCV.education || []).length > 0) score += 15;
    if ((userCV.skills || []).length > 0) score += 15;
    if ((userCV.languages || []).length > 0) score += 10;
    return score;
  }, [userCV]);

  const userPlan = isGuestMode ? 'trial' : user?.plan || 'free';
  const isTrial = userPlan === 'trial';
  const isFree = userPlan === 'free';
  const isPremium = userPlan === 'premium';

  const displayName = isTrial ? 'Usuario de Prueba' : identity?.name || user?.name || 'Usuario';
  const displayEmail = isTrial ? '' : identity?.email || user?.email || '';
  const firstName = displayName.split(' ')[0];
  const planLabel = isTrial ? 'Prueba' : isFree ? 'Free' : 'Pro';
  const planColor = isPremium
    ? 'bg-primary text-primary-foreground'
    : isTrial
      ? 'bg-primary/10 text-primary border-primary/20'
      : 'bg-muted text-muted-foreground';

  // Next action
  const nextAction = useMemo(() => {
    if (stats.cvCount === 0) return { label: 'Crea tu primer CV en 2 minutos', cta: 'Crear mi CV', icon: Plus, path: `${dashboardBasePath}/cvs` };
    if (cvCompletionScore < 80) return { label: `Tu CV está al ${cvCompletionScore}%. Termínalo y descárgalo.`, cta: 'Completar mi CV', icon: Wand2, path: `${dashboardBasePath}/cvs` };
    return { label: '¡Tu CV está listo! Descárgalo o practica una entrevista.', cta: 'Descargar CV', icon: Download, path: `${dashboardBasePath}/cvs` };
  }, [stats.cvCount, cvCompletionScore, dashboardBasePath]);

  if (identityLoading && !isGuestMode) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead title="Dashboard" description="Tu panel de control MoonJab. Gestiona tu CV y entrevistas." path="/dashboard" noindex />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <span className="text-sm">Cargando tu dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Dashboard" description="Tu panel de control MoonJab. Gestiona tu CV y prepárate para entrevistas." path="/dashboard" noindex />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 pt-14 sm:pt-10">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold tracking-tight">Hola, {firstName}</h1>
              <Badge variant="outline" className={`text-[10px] px-1.5 py-0 h-5 font-medium ${planColor}`}>
                {isPremium && <Crown className="h-2.5 w-2.5 mr-0.5" />}
                {planLabel}
              </Badge>
            </div>
            {!!displayEmail && <p className="text-xs text-muted-foreground mt-0.5">{displayEmail}</p>}
          </div>
          <NotificationsBell />
        </motion.div>

        {isTrial && (
          <div className="mb-6 rounded-xl border-2 border-primary/20 bg-primary/5 p-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Eye className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Estás en modo de prueba</p>
                <p className="text-xs text-muted-foreground mt-0.5">Crea una cuenta para guardar tu progreso.</p>
                <Link to="/registro"><Button size="sm" className="h-7 text-xs gap-1 mt-2"><Sparkles className="h-3 w-3" /> Crear cuenta gratis</Button></Link>
              </div>
            </div>
          </div>
        )}

        {isFree && <div className="mb-6"><UpgradeBanner onUpgrade={() => setUpgradeModalOpen(true)} /></div>}

        {/* Next action card */}
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05 }} className="mb-6">
          <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] p-5">
            <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">Tu próximo paso</p>
            <h2 className="text-base font-semibold mb-3">{nextAction.label}</h2>
            <Link to={nextAction.path}>
              <Button size="sm" className="gap-2"><nextAction.icon className="h-4 w-4" />{nextAction.cta}</Button>
            </Link>
          </div>
        </motion.div>

        {/* KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'CV completado', value: `${cvCompletionScore}%`, icon: Wand2 },
            { label: 'CVs creados', value: stats.cvCount, icon: FileText },
            { label: 'Entrevistas', value: stats.interviewCount, icon: Mic },
            { label: 'Listo para enviar', value: cvCompletionScore >= 80 ? 'Sí' : 'No', icon: Sparkles },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-border/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <kpi.icon className="h-4 w-4 text-primary" />
              </div>
              <p className="text-2xl font-semibold">{kpi.value}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{kpi.label}</p>
            </div>
          ))}
        </div>

        {/* CV progress */}
        {userCV && (
          <div className="mb-6 rounded-xl border border-border/50 p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium">Progreso de tu CV</p>
              <span className="text-xs text-muted-foreground">{cvCompletionScore}%</span>
            </div>
            <Progress value={cvCompletionScore} className="h-2 mb-3" />
            <Link to={`${dashboardBasePath}/cvs`}>
              <Button variant="ghost" size="sm" className="h-8 text-xs gap-1 text-primary">Continuar editando <ArrowRight className="h-3 w-3" /></Button>
            </Link>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            { icon: FileText, label: 'CV Builder', desc: 'Crea y mejora tu CV', path: `${dashboardBasePath}/cvs` },
            { icon: Mic, label: 'Entrevistas', desc: 'Practica con IA', path: `${dashboardBasePath}/interviews`, locked: isTrial },
          ].map((action) => (
            <Link key={action.path} to={action.locked ? '#' : action.path} className="group">
              <div className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${action.locked ? 'opacity-60 cursor-not-allowed' : 'hover:border-primary/30 hover:bg-primary/[0.02]'}`}>
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"><action.icon className="h-4 w-4 text-primary" /></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{action.label}</p>
                  <p className="text-[11px] text-muted-foreground">{action.desc}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground/40" />
              </div>
            </Link>
          ))}
        </div>

        {!isGuestMode && <BillingStatusCard />}

        <UpgradeModal open={upgradeModalOpen} onClose={() => setUpgradeModalOpen(false)} onStartTrial={async () => {}} />
      </div>
    </div>
  );
};

export default Dashboard;
