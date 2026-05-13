import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
import {
  FileText, ArrowRight, Sparkles, RotateCcw, Mic,
  ChevronRight, Crown, Lock, Eye, Loader2, Compass,
  Sun, Sunset, Moon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { getDashboardBasePath } from '@/lib/authRouting';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const getRoleDisplayName = (role: string) => {
  const roleNames: Record<string, string> = {
    ux_designer: 'UX Designer',
    ui_designer: 'UI Designer',
    product_designer: 'Product Designer',
    developer_frontend: 'Frontend Developer',
    developer_backend: 'Backend Developer',
    developer_fullstack: 'Fullstack Developer',
    product_manager: 'Product Manager',
    data_analyst: 'Data Analyst',
    other: 'Sin definir',
  };
  return roleNames[role] || role;
};

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return 'Buenos días';
  if (h < 18) return 'Buenas tardes';
  return 'Buenas noches';
};

const Dashboard = () => {
  const { user, isGuestMode } = useAuthStore();
  const { profile } = useProfileStore();
  const { cvs } = useCVStore();
  const { sessions } = useInterviewStore();
  // useAuthSync already loaded user.name and user.email — no extra fetch needed
  const identityLoading = !isGuestMode && !user?.name;

  const dashboardBasePath = getDashboardBasePath(
    user?.accessRole || (isGuestMode ? 'trial_user' : 'free_user'),
  );
  const userCV = cvs.find((cv) => cv.userId === user?.id);
  const cvCompletionScore = userCV?.score?.overall || 0;
  const userSessions = sessions.filter((s) => s.userId === user?.id);
  const interviewsPracticed = userSessions.length;

  const userPlan = isGuestMode ? 'trial' : user?.plan || 'free';
  const isTrial = userPlan === 'trial';
  const isFree = userPlan === 'free';
  const isPremium = userPlan === 'premium';

  const displayName = isTrial ? 'Usuario de Prueba' : user?.name || 'Usuario';
  const displayEmail = isTrial ? '' : user?.email || '';
  const firstName = displayName.split(' ')[0];
  const hasRole = !!profile?.rolActual && profile.rolActual !== 'other';

  const initials = displayName
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Buenos días' : hour < 19 ? 'Buenas tardes' : 'Buenas noches';
  const GreetingIcon = hour < 12 ? Sun : hour < 19 ? Sunset : Moon;

  if (identityLoading && !isGuestMode) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead title="Dashboard" description="Tu panel de control MoonJab." path="/dashboard" noindex />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <span className="text-sm">Cargando tu dashboard...</span>
        </div>
      </div>
    );
  }

  const quickActions = [
    {
      icon: FileText,
      label: 'CV Builder',
      desc: isTrial ? 'Plantilla Creativo' : isFree ? 'Plantilla Creativo · Pro: todas' : 'Todas las plantillas',
      path: `${dashboardBasePath}/cvs`,
      locked: false,
      badge: null as string | null,
    },
    {
      icon: Mic,
      label: 'Entrevistas IA',
      desc: isTrial ? 'No disponible en prueba' : 'Practica con IA ahora',
      path: `${dashboardBasePath}/interviews`,
      locked: isTrial,
      badge: 'IA',
    },
    {
      icon: Compass,
      label: 'Diagnóstico',
      desc: hasRole ? 'Actualizar mi perfil RIASEC' : 'Descubre tu carrera ideal',
      path: '/onboarding',
      locked: isTrial,
      badge: hasRole ? null : 'Gratis',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Dashboard" description="Tu panel de control MoonJab. Gestiona tu CV y entrevistas." path="/dashboard" noindex />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 pt-14 sm:pt-10 space-y-6">

        {/* ── Welcome header ── */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3.5">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-xl bg-primary/12 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary select-none">
                {initials}
              </div>
              {isPremium && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center border-2 border-background">
                  <Crown className="h-2 w-2 text-primary-foreground" />
                </div>
              )}
            </div>
            {/* Name + context */}
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <GreetingIcon className="h-4 w-4 text-primary/60 flex-shrink-0" />
                <h1 className="text-xl font-semibold tracking-tight">
                  {greeting}{firstName !== 'Usuario' ? `, ${firstName}` : ''}
                </h1>
                <Badge
                  variant="outline"
                  className={`text-[10px] px-1.5 py-0 h-5 font-semibold border ${
                    isPremium
                      ? 'bg-primary/10 text-primary border-primary/20'
                      : isTrial
                        ? 'bg-primary/8 text-primary border-primary/15'
                        : 'bg-muted text-muted-foreground border-transparent'
                  }`}
                >
                  {isPremium ? 'Pro' : isTrial ? 'Prueba' : 'Free'}
                </Badge>
              </div>
              {!!displayEmail && <p className="text-xs text-muted-foreground">{displayEmail}</p>}
              <p className="text-xs text-muted-foreground">
                {isTrial
                  ? 'Entorno de prueba · tus datos son temporales'
                  : hasRole
                    ? getRoleDisplayName(profile.rolActual!)
                    : 'Completa tu diagnóstico para personalizar tu experiencia'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Trial banner ── */}
        {isTrial && (
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Modo de prueba activo</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Estás explorando la plataforma. Crea una cuenta gratis para guardar tu progreso.
                  </p>
                  <div className="mt-2.5">
                    <Link to="/registro">
                      <Button size="sm" className="h-7 text-xs gap-1.5">
                        <Sparkles className="h-3 w-3" /> Crear cuenta gratis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Next action CTA ── */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
          <NextActionCard
            hasCV={!!userCV}
            cvId={userCV?.id}
            cvScore={cvCompletionScore}
            isPremium={isPremium}
            isTrial={isTrial}
            dashboardBasePath={dashboardBasePath}
          />
        </motion.div>

        {/* ── Diagnostic CTA (user hasn't done it yet) ── */}
        {!hasRole && !isTrial && (
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2.5}>
            <Link to="/onboarding">
              <div className="relative flex items-center gap-4 p-5 rounded-xl border border-primary/25 bg-primary/[0.04] hover:border-primary/40 hover:shadow-mj-md transition-all duration-200 group overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.06] rounded-full blur-2xl pointer-events-none" />
                <div className="w-10 h-10 rounded-xl bg-primary/12 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Compass className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 relative">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-semibold">Hacer mi diagnóstico vocacional</p>
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-primary/10 text-primary border border-primary/15 uppercase tracking-wide">
                      Gratis
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Descubre tu perfil RIASEC y las carreras donde vas a brillar — 10 min
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
            </Link>
          </motion.div>
        )}

        {/* ── Quick actions ── */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp} custom={4}
          className="grid sm:grid-cols-3 gap-3"
        >
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.path}
                to={action.locked ? '#' : action.path}
                className={action.locked ? 'pointer-events-none' : 'group'}
              >
                <div className={`relative flex items-center gap-3.5 p-4 rounded-xl border transition-all duration-200 overflow-hidden ${
                  action.locked
                    ? 'border-border/25 bg-muted/20 opacity-50 cursor-not-allowed'
                    : 'border-border/40 bg-card hover:border-primary/25 hover:shadow-mj-md hover:-translate-y-[1px]'
                }`}>
                  {/* Subtle bg glow on hover */}
                  {!action.locked && (
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/[0.04] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  )}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    action.locked
                      ? 'bg-muted'
                      : 'bg-primary/10 group-hover:bg-primary/15'
                  }`}>
                    {action.locked
                      ? <Lock className="h-4 w-4 text-muted-foreground" />
                      : <Icon className="h-4 w-4 text-primary" />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`text-sm font-medium transition-colors ${
                        !action.locked && 'group-hover:text-primary'
                      }`}>
                        {action.label}
                      </p>
                      {action.badge && !action.locked && (
                        <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-primary/10 text-primary border border-primary/15 uppercase tracking-wide">
                          {action.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{action.desc}</p>
                  </div>
                  {!action.locked && (
                    <ChevronRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary/50 flex-shrink-0 transition-colors group-hover:translate-x-0.5 duration-200" />
                  )}
                </div>
              </Link>
            );
          })}
        </motion.div>

        {/* ── Upgrade banner — shown contextually below quick actions, dismissible ── */}
        {isFree && (
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4.5}>
            <UpgradeBanner />
          </motion.div>
        )}

        {/* ── Analytics (authenticated, non-trial) ── */}
        {!isTrial && !isGuestMode && (
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5}>
            <AnalyticsPanel dashboardBasePath={dashboardBasePath} />
          </motion.div>
        )}

        {/* ── Bottom grid: diagnostic + sidebar cards ── */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-5">
          <div className="space-y-4">
            {hasRole && (
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={6}>
                <div className="flex items-center justify-between p-4 rounded-xl border border-border/40 bg-card hover:border-border/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <RotateCcw className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Actualizar diagnóstico vocacional</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Rol actual: <span className="font-medium text-foreground/70">{getRoleDisplayName(profile?.rolActual!)}</span>
                      </p>
                    </div>
                  </div>
                  <Link to="/onboarding">
                    <Button variant="ghost" size="sm" className="h-8 text-xs gap-1 text-primary hover:text-primary flex-shrink-0">
                      Rehacer <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}

          </div>

          {/* Sidebar cards */}
          <div className="space-y-4">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={6}>
              <ProgressBar cvCompleted={cvCompletionScore} interviewsPracticed={interviewsPracticed} />
            </motion.div>
            {!isGuestMode && (
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={7}>
                <BillingStatusCard />
              </motion.div>
            )}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={8}>
              <RecommendedResources role={profile?.rolActual} />
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
