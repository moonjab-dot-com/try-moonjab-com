import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuthStore } from '@/store/useAuthStore';
import { useProfileStore } from '@/store/useProfileStore';
import { useCVStore } from '@/store/useCVStore';
import { useInterviewStore } from '@/store/useInterviewStore';
import { ProgressBar } from '@/components/dashboard/ProgressBar';
import { RecommendedResources } from '@/components/dashboard/RecommendedResources';
import { BillingStatusCard } from '@/components/dashboard/BillingStatusCard';
import { AnalyticsPanel } from '@/components/dashboard/AnalyticsPanel';
import { NextActionCard } from '@/components/dashboard/NextActionCard';
import { UpgradeBanner } from '@/components/UpgradeBanner';
import { UpgradeModal } from '@/components/UpgradeModal';
import {
  FileText, ArrowRight, Sparkles, RotateCcw, Mic,
  ChevronRight, Crown, Lock, Eye, Loader2,
  Compass, TrendingUp, Target, Zap, CheckCircle2,
  Plus, Play,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getDashboardBasePath } from '@/lib/authRouting';
import { supabase } from '@/integrations/supabase/client';

const RIASEC_LABELS: Record<string, { label: string; color: string; desc: string }> = {
  R: { label: 'Realista', color: 'text-orange-500', desc: 'Práctico, técnico, analítico' },
  I: { label: 'Investigador', color: 'text-blue-500', desc: 'Curioso, científico, analítico' },
  A: { label: 'Artístico', color: 'text-purple-500', desc: 'Creativo, expresivo, original' },
  S: { label: 'Social', color: 'text-green-500', desc: 'Comunicativo, empático, colaborativo' },
  E: { label: 'Emprendedor', color: 'text-primary', desc: 'Líder, persuasivo, ambicioso' },
  C: { label: 'Convencional', color: 'text-sky-500', desc: 'Organizado, metódico, detallista' },
};

const getRoleDisplayName = (role: string): string => {
  const roleNames: Record<string, string> = {
    ux_designer: 'UX Designer', ui_designer: 'UI Designer',
    product_designer: 'Product Designer', developer_frontend: 'Frontend Developer',
    developer_backend: 'Backend Developer', developer_fullstack: 'Fullstack Developer',
    product_manager: 'Product Manager', data_analyst: 'Data Analyst',
    marketing_manager: 'Marketing Manager', entrepreneur: 'Entrepreneur',
    business_analyst: 'Business Analyst', data_scientist: 'Data Scientist',
    software_engineer: 'Software Engineer', other: 'Sin definir',
  };
  return roleNames[role] || role.replace(/_/g, ' ');
};

const fade = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Dashboard = () => {
  const { user, isGuestMode } = useAuthStore();
  const { profile } = useProfileStore();
  const { cvs } = useCVStore();
  const { sessions } = useInterviewStore();
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [identityLoading, setIdentityLoading] = useState(!isGuestMode);
  const [identity, setIdentity] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (isGuestMode) {
        setIdentity({ name: 'Usuario de Prueba', email: '' });
        setIdentityLoading(false);
        return;
      }
      setIdentityLoading(true);
      const { data } = await supabase.auth.getUser();
      const u = data.user;
      if (!mounted || !u) { setIdentityLoading(false); return; }
      const fallback = u.user_metadata?.nombre || u.user_metadata?.name || u.email?.split('@')[0] || 'Usuario';
      const { data: p } = await supabase.from('profiles').select('nombre, email').eq('id', u.id).maybeSingle();
      if (!mounted) return;
      setIdentity({ name: p?.nombre || fallback, email: p?.email || u.email || '' });
      setIdentityLoading(false);
    };
    void load();
    return () => { mounted = false; };
  }, [isGuestMode, user?.id]);

  const dashboardBasePath = getDashboardBasePath(user?.accessRole || (isGuestMode ? 'trial_user' : 'free_user'));
  const userCV = cvs.find((cv) => cv.userId === user?.id);
  const cvScore = userCV?.score?.overall || 0;
  const userSessions = sessions.filter((s) => s.userId === user?.id);
  const interviewsPracticed = userSessions.length;

  const userPlan = isGuestMode ? 'trial' : user?.plan || 'free';
  const isTrial = userPlan === 'trial';
  const isFree = userPlan === 'free';
  const isPremium = userPlan === 'premium';

  const firstName = isTrial ? 'Explorador' : (identity?.name || user?.name || 'Usuario').split(' ')[0];
  const displayEmail = isTrial ? '' : identity?.email || user?.email || '';
  const hasRole = !!profile?.rolActual && profile.rolActual !== 'other';
  const hasRiasec = !!profile?.riasecCode && !!profile?.riasecScores;
  const hasCV = !!userCV;
  const hasInterviews = interviewsPracticed > 0;

  const planLabel = isPremium ? 'Pro' : isTrial ? 'Prueba' : 'Free';
  const planColor = isPremium
    ? 'bg-primary text-primary-foreground'
    : isTrial
      ? 'bg-amber-500/10 text-amber-600 border-amber-500/20'
      : 'bg-muted text-muted-foreground';

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return 'Buenos días';
    if (h < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  if (identityLoading && !isGuestMode) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead title="Dashboard" description="Tu panel de control MoonJab." path="/dashboard" noindex />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
          <span className="text-sm">Cargando tu panel...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Dashboard" description="Tu panel de control MoonJab. Gestiona tu CV y entrevistas." path="/dashboard" noindex />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 pt-14 sm:pt-10">

        {/* ── Header ── */}
        <motion.div
          initial="hidden" animate="visible" variants={fade} custom={0}
          className="flex items-start justify-between mb-8"
        >
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">{getGreeting()},</p>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold tracking-tight">{firstName}</h1>
              <Badge variant="outline" className={`text-[10px] px-1.5 py-0 h-5 font-medium ${planColor}`}>
                {isPremium && <Crown className="h-2.5 w-2.5 mr-0.5" />}
                {planLabel}
              </Badge>
            </div>
            {!!displayEmail && <p className="text-xs text-muted-foreground mt-0.5">{displayEmail}</p>}
            {!isTrial && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {hasRole ? getRoleDisplayName(profile.rolActual!) : 'Completa tu diagnóstico para comenzar'}
              </p>
            )}
          </div>
          {!isTrial && !isFree && (
            <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
              <Zap className="h-3.5 w-3.5" />
              <span>Pro activo</span>
            </div>
          )}
        </motion.div>

        {/* ── Trial Banner ── */}
        {isTrial && (
          <motion.div initial="hidden" animate="visible" variants={fade} custom={1} className="mb-6">
            <div className="rounded-xl border-2 border-amber-500/20 bg-amber-500/[0.04] p-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-4 w-4 text-amber-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Modo de prueba</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Explora libremente. Tus datos no se guardan.
                  </p>
                  <div className="flex gap-2 mt-2.5">
                    <Link to="/registro">
                      <Button size="sm" className="h-7 text-xs gap-1">
                        <Sparkles className="h-3 w-3" /> Crear cuenta gratis
                      </Button>
                    </Link>
                    <Link to="/pricing">
                      <Button variant="outline" size="sm" className="h-7 text-xs">Ver planes</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Free Upgrade Banner ── */}
        {isFree && (
          <motion.div initial="hidden" animate="visible" variants={fade} custom={1} className="mb-6">
            <UpgradeBanner onUpgrade={() => setUpgradeModalOpen(true)} />
          </motion.div>
        )}

        {/* ── Next Action ── */}
        <motion.div initial="hidden" animate="visible" variants={fade} custom={2} className="mb-6">
          <NextActionCard
            hasCV={hasCV}
            cvId={userCV?.id}
            cvScore={cvScore}
            isPremium={isPremium}
            isTrial={isTrial}
            dashboardBasePath={dashboardBasePath}
            onUpgrade={() => setUpgradeModalOpen(true)}
          />
        </motion.div>

        {/* ── Quick Actions Grid ── */}
        <motion.div initial="hidden" animate="visible" variants={fade} custom={3} className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            {
              icon: FileText,
              label: 'CV Builder con IA',
              desc: isTrial ? '1 plantilla disponible' : isFree ? 'Plantilla Creativo · Pro: todas' : 'Todas las plantillas',
              path: `${dashboardBasePath}/cvs`,
              locked: false,
              badge: hasCV ? `Score ${cvScore}%` : 'Nuevo',
              badgeColor: hasCV && cvScore > 70 ? 'text-primary' : 'text-muted-foreground',
            },
            {
              icon: Mic,
              label: 'Simulador de Entrevistas',
              desc: isTrial ? 'No disponible en prueba' : hasInterviews ? `${interviewsPracticed} sesión${interviewsPracticed > 1 ? 'es' : ''} completada${interviewsPracticed > 1 ? 's' : ''}` : 'Practica con IA ahora',
              path: `${dashboardBasePath}/interviews`,
              locked: isTrial,
              badge: isTrial ? 'Bloqueado' : null,
              badgeColor: 'text-muted-foreground',
            },
          ].map((action) => (
            <Link key={action.path} to={action.locked ? '#' : action.path} className="group">
              <div className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                action.locked
                  ? 'border-border/30 bg-muted/20 opacity-50 cursor-not-allowed'
                  : 'border-border/50 hover:border-primary/20 hover:bg-primary/[0.02] hover:shadow-clovely-sm'
              }`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                  action.locked ? 'bg-muted' : 'bg-primary/10 group-hover:bg-primary/15'
                }`}>
                  {action.locked ? <Lock className="h-4 w-4 text-muted-foreground" /> : <action.icon className="h-4 w-4 text-primary" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${action.locked ? '' : 'group-hover:text-primary'} transition-colors`}>
                    {action.label}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">{action.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {action.badge && (
                    <span className={`text-[10px] font-medium ${action.badgeColor}`}>{action.badge}</span>
                  )}
                  {!action.locked && (
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* ── RIASEC Diagnostic Card ── */}
        {!isTrial && (
          <motion.div initial="hidden" animate="visible" variants={fade} custom={4} className="mb-6">
            {hasRiasec ? (
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Compass className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Tu diagnóstico vocacional</p>
                      <p className="text-[11px] text-muted-foreground">Modelo RIASEC · Holland Code</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-sm font-bold tracking-widest">
                      {profile?.riasecCode}
                    </span>
                    <Link to="/onboarding">
                      <Button variant="ghost" size="sm" className="h-7 text-[11px] text-muted-foreground gap-1 hover:text-primary">
                        <RotateCcw className="h-3 w-3" /> Rehacer
                      </Button>
                    </Link>
                  </div>
                </div>

                {profile?.riasecCode && (
                  <div className="grid grid-cols-3 gap-2">
                    {profile.riasecCode.split('').slice(0, 3).map((letter) => {
                      const info = RIASEC_LABELS[letter];
                      const score = profile.riasecScores?.[letter as keyof typeof profile.riasecScores] ?? 0;
                      return (
                        <div key={letter} className="rounded-lg bg-muted/40 p-3">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`text-xs font-bold ${info?.color ?? 'text-foreground'}`}>{letter}</span>
                            <span className="text-[10px] text-muted-foreground">{Math.round(score)}%</span>
                          </div>
                          <div className="h-1 rounded-full bg-border overflow-hidden mb-1">
                            <div
                              className="h-full rounded-full bg-primary/60 transition-all"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                          <p className="text-[10px] text-muted-foreground">{info?.label}</p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {profile?.diagnosticResults?.topCareers?.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border/30">
                    <p className="text-[11px] text-muted-foreground mb-2">Carreras con mayor afinidad</p>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.diagnosticResults.topCareers.slice(0, 3).map((career) => (
                        <span key={career.title} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/[0.06] text-primary text-[11px] font-medium border border-primary/10">
                          <Target className="h-2.5 w-2.5" />
                          {career.title}
                          <span className="text-primary/60">{career.match}%</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border/60 bg-muted/20 p-5 text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Compass className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium mb-1">Descubre tu perfil vocacional</p>
                <p className="text-xs text-muted-foreground mb-3 max-w-xs mx-auto">
                  El diagnóstico RIASEC identifica tus carreras con mayor afinidad en 10 minutos.
                </p>
                <Link to="/onboarding">
                  <Button size="sm" variant="outline" className="h-8 text-xs gap-1.5">
                    <Play className="h-3 w-3" />
                    Hacer diagnóstico gratis
                  </Button>
                </Link>
                {isFree && (
                  <p className="text-[10px] text-muted-foreground mt-2">
                    Diagnóstico completo disponible en{' '}
                    <button onClick={() => setUpgradeModalOpen(true)} className="text-primary underline-offset-2 hover:underline">
                      plan Pro
                    </button>
                  </p>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* ── Analytics (non-trial, non-guest) ── */}
        {!isTrial && !isGuestMode && (
          <motion.div initial="hidden" animate="visible" variants={fade} custom={5} className="mb-6">
            <AnalyticsPanel dashboardBasePath={dashboardBasePath} />
          </motion.div>
        )}

        {/* ── Bottom Grid ── */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-5">
          <div className="space-y-5">
            {/* CV Empty State */}
            {!isTrial && !hasCV && (
              <motion.div initial="hidden" animate="visible" variants={fade} custom={6}>
                <div className="rounded-xl border border-dashed border-border/60 bg-muted/20 p-6 text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium mb-1">Crea tu primer CV con IA</p>
                  <p className="text-xs text-muted-foreground mb-3 max-w-xs mx-auto">
                    El builder con IA optimiza tu CV para pasar filtros ATS en minutos.
                  </p>
                  <Link to={`${dashboardBasePath}/cvs`}>
                    <Button size="sm" className="h-8 text-xs gap-1.5">
                      <Plus className="h-3 w-3" /> Crear CV ahora
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Interview Empty State */}
            {!isTrial && !hasInterviews && (
              <motion.div initial="hidden" animate="visible" variants={fade} custom={7}>
                <div className="rounded-xl border border-dashed border-border/60 bg-muted/20 p-6 text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Mic className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium mb-1">Practica tu primera entrevista</p>
                  <p className="text-xs text-muted-foreground mb-3 max-w-xs mx-auto">
                    El 87% de candidatos que practica con IA obtiene entrevistas reales.
                  </p>
                  <Link to={`${dashboardBasePath}/interviews`}>
                    <Button size="sm" variant="outline" className="h-8 text-xs gap-1.5">
                      <Play className="h-3 w-3" /> Practicar ahora
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Role Update Card */}
            {hasRole && (hasCV || hasInterviews) && (
              <motion.div initial="hidden" animate="visible" variants={fade} custom={6}>
                <div className="rounded-xl border border-border/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <RotateCcw className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Actualizar diagnóstico</p>
                        <p className="text-[11px] text-muted-foreground">
                          Rol: {getRoleDisplayName(profile?.rolActual!)}
                        </p>
                      </div>
                    </div>
                    <Link to="/onboarding">
                      <Button variant="ghost" size="sm" className="h-8 text-xs gap-1 text-primary hover:text-primary">
                        Rehacer <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Quick Tips */}
            {!isTrial && (
              <motion.div initial="hidden" animate="visible" variants={fade} custom={8}>
                <div className="rounded-xl border border-border/40 bg-card p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-3">
                    Próximos pasos
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { done: hasRiasec, text: 'Completar diagnóstico vocacional RIASEC', link: '/onboarding' },
                      { done: hasCV, text: 'Crear tu CV optimizado para ATS', link: `${dashboardBasePath}/cvs` },
                      { done: hasInterviews, text: 'Practicar tu primera entrevista con IA', link: `${dashboardBasePath}/interviews` },
                      { done: isPremium, text: 'Activar plan Pro para funciones avanzadas', link: '/pricing', action: () => setUpgradeModalOpen(true) },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.done ? 'bg-primary/10' : 'border border-border'
                        }`}>
                          {step.done && <CheckCircle2 className="h-3 w-3 text-primary" />}
                        </div>
                        {step.done ? (
                          <span className="text-xs text-muted-foreground/60 line-through">{step.text}</span>
                        ) : step.action ? (
                          <button onClick={step.action} className="text-xs text-foreground hover:text-primary transition-colors text-left">
                            {step.text}
                          </button>
                        ) : (
                          <Link to={step.link} className="text-xs text-foreground hover:text-primary transition-colors">
                            {step.text}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="space-y-5">
            <motion.div initial="hidden" animate="visible" variants={fade} custom={6}>
              <ProgressBar cvCompleted={cvScore} interviewsPracticed={interviewsPracticed} />
            </motion.div>
            {!isGuestMode && (
              <motion.div initial="hidden" animate="visible" variants={fade} custom={7}>
                <BillingStatusCard />
              </motion.div>
            )}
            <motion.div initial="hidden" animate="visible" variants={fade} custom={8}>
              <RecommendedResources role={profile?.rolActual} />
            </motion.div>
          </div>
        </div>

        <UpgradeModal open={upgradeModalOpen} onClose={() => setUpgradeModalOpen(false)} onStartTrial={async () => {}} />
      </div>
    </div>
  );
};

export default Dashboard;
