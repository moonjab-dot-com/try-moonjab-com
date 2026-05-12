import { SEOHead } from '@/components/SEOHead';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, Instagram, CheckCircle, Compass,
  FileText, MessageSquare, Target, TrendingUp,
  Users, ChevronRight, Sparkles, Rocket,
  Eye, Check, Mic, Menu,
  Youtube, Linkedin, Twitter, Brain, Cpu,
} from 'lucide-react';
import { OfficialLogo } from '@/components/OfficialLogo';
import { useRef, useState } from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '@/components/LanguageToggle';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease },
  }),
};

const MobileNavMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden h-9 w-9"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[280px] p-6 pt-12">
          <nav className="flex flex-col gap-4">
            <a href="#features" onClick={() => setOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">{t('nav.features')}</a>
            <a href="#how" onClick={() => setOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">{t('nav.howItWorks')}</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">{t('nav.pricing')}</a>
            <div className="border-t border-border/40 pt-4 mt-2 space-y-3">
              <Link to="/login" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full h-10 text-sm">{t('nav.login')}</Button>
              </Link>
              <Link to="/registro" onClick={() => setOpen(false)}>
                <Button className="w-full h-10 text-sm">{t('nav.start')}</Button>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

/* ─── Mini CV skeleton used in the features card ─── */
const CVMockup = () => (
  <div className="w-full rounded-lg bg-background border border-border/50 p-4 space-y-3 text-left shadow-sm">
    <div className="flex items-center gap-3 pb-2 border-b border-border/40">
      <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-[10px] font-bold text-primary">AK</div>
      <div className="space-y-1 flex-1">
        <div className="h-2.5 w-28 rounded-full bg-foreground/15" />
        <div className="h-1.5 w-20 rounded-full bg-muted-foreground/20" />
      </div>
      <div className="px-2 py-0.5 rounded-md bg-primary/10 text-[9px] font-semibold text-primary">ATS 94%</div>
    </div>
    <div className="space-y-1.5">
      <div className="h-1.5 w-16 rounded-full bg-primary/30" />
      <div className="space-y-1">
        <div className="h-1.5 w-full rounded-full bg-muted/70" />
        <div className="h-1.5 w-5/6 rounded-full bg-muted/70" />
        <div className="h-1.5 w-3/4 rounded-full bg-muted/60" />
      </div>
    </div>
    <div className="space-y-1.5">
      <div className="h-1.5 w-16 rounded-full bg-primary/30" />
      <div className="flex flex-wrap gap-1">
        {['React', 'Node.js', 'Python', 'SQL'].map((s) => (
          <span key={s} className="px-1.5 py-0.5 text-[9px] rounded bg-primary/[0.08] text-primary border border-primary/10">{s}</span>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-2 pt-1">
      <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: '94%' }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
      <span className="text-[10px] text-primary font-semibold">94%</span>
    </div>
  </div>
);

/* ─── Chat mock used in the interview card ─── */
const ChatMockup = () => (
  <div className="w-full rounded-lg bg-background border border-border/50 p-3.5 space-y-2.5 shadow-sm">
    <div className="flex items-center gap-2 pb-2 border-b border-border/40">
      <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
        <Cpu className="h-3 w-3 text-primary" />
      </div>
      <span className="text-[10px] font-semibold text-foreground/70">IA Entrevistadora</span>
      <span className="ml-auto flex h-1.5 w-1.5 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary/70" />
      </span>
    </div>
    <div className="bg-muted/60 rounded-lg rounded-tl-none px-3 py-2 max-w-[85%]">
      <p className="text-[10px] leading-relaxed text-foreground/80">
        Cuéntame sobre un proyecto desafiante y cómo lo resolviste.
      </p>
    </div>
    <div className="bg-primary/[0.08] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] ml-auto">
      <p className="text-[10px] leading-relaxed text-foreground/80">
        En mi último trabajo optimicé una API que tardaba 8s y la reduje a 400ms...
      </p>
    </div>
    <div className="flex items-center gap-1.5 pt-1">
      <Brain className="h-3 w-3 text-primary/60" />
      <div className="flex-1 h-1 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary/60"
          initial={{ width: 0 }}
          whileInView={{ width: '78%' }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
      <span className="text-[9px] text-primary font-medium">78% STAR</span>
    </div>
  </div>
);

/* ─── RIASEC bars for Diagnostic card ─── */
const DiagnosticMockup = () => {
  const bars = [
    { label: 'Realista', pct: 45, color: 'bg-blue-500/70' },
    { label: 'Investigador', pct: 82, color: 'bg-primary' },
    { label: 'Artístico', pct: 68, color: 'bg-violet-500/70' },
    { label: 'Social', pct: 73, color: 'bg-amber-500/70' },
    { label: 'Emprendedor', pct: 55, color: 'bg-red-500/70' },
    { label: 'Convencional', pct: 38, color: 'bg-slate-400/70' },
  ];
  return (
    <div className="w-full rounded-lg bg-background border border-border/50 p-3.5 space-y-2 shadow-sm">
      <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-widest mb-2">Perfil RIASEC</p>
      {bars.map(({ label, pct, color }) => (
        <div key={label} className="flex items-center gap-2">
          <span className="text-[9px] text-muted-foreground w-20 flex-shrink-0">{label}</span>
          <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${color}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
          <span className="text-[9px] text-muted-foreground w-6 text-right">{pct}%</span>
        </div>
      ))}
    </div>
  );
};

const Landing = () => <LandingContent />;

const LandingContent = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  const stats = [
    { value: '10K+', label: t('landing.stats.professionals'), icon: Users },
    { value: '87%', label: t('landing.stats.getJobs'), icon: TrendingUp },
    { value: '4.9', label: t('landing.stats.satisfaction'), icon: Star },
    { value: '15+', label: t('landing.stats.countries'), icon: Compass },
  ];

  const steps = [
    { num: '01', icon: Compass, title: t('landing.how.step1Title'), desc: t('landing.how.step1Desc') },
    { num: '02', icon: FileText, title: t('landing.how.step2Title'), desc: t('landing.how.step2Desc') },
    { num: '03', icon: Target, title: t('landing.how.step3Title'), desc: t('landing.how.step3Desc') },
  ];

  const testimonials = [
    { name: t('landing.testimonials.t1Name'), role: t('landing.testimonials.t1Role'), text: t('landing.testimonials.t1Text') },
    { name: t('landing.testimonials.t2Name'), role: t('landing.testimonials.t2Role'), text: t('landing.testimonials.t2Text') },
    { name: t('landing.testimonials.t3Name'), role: t('landing.testimonials.t3Role'), text: t('landing.testimonials.t3Text') },
  ];

  const cvTags = t('landing.features.cv.tags', { returnObjects: true }) as string[];
  const cvPoints = t('landing.deepDive.cvPoints', { returnObjects: true }) as string[];
  const interviewPoints = t('landing.deepDive.interviewPoints', { returnObjects: true }) as string[];
  const guestFeatures = t('landing.pricing.guestFeatures', { returnObjects: true }) as string[];
  const proFeatures = t('landing.pricing.proFeatures', { returnObjects: true }) as string[];
  const faqItems = t('landing.faq.items', { returnObjects: true }) as { q: string; a: string }[];

  /* Avatar initials for hero social proof */
  const avatarColors = [
    'bg-emerald-500', 'bg-blue-500', 'bg-violet-500', 'bg-amber-500', 'bg-rose-500',
  ];
  const avatarInitials = ['M', 'C', 'A', 'L', 'P'];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="MoonJab — CV Builder con IA y Simulador de Entrevistas LATAM"
        description="Crea tu CV optimizado para ATS con IA, practica entrevistas y descubre tu diagnóstico vocacional. Career platform #1 para estudiantes en LATAM."
        path="/"
        keywords="CV builder con IA, simulador de entrevistas, diagnóstico vocacional, ATS curriculum, career platform estudiantes LATAM, hacer curriculum vitae ATS, preparar entrevista trabajo, primer empleo estudiantes"
        breadcrumbs={[]}
      />

      {/* ── Navbar ── */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/30 transition-all duration-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <OfficialLogo size="md" to="/" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">{t('nav.features')}</a>
            <a href="#how" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">{t('nav.howItWorks')}</a>
            <a href="#pricing" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">{t('nav.pricing')}</a>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Link to="/login" className="hidden sm:inline-flex">
              <Button variant="ghost" size="sm" className="text-[13px] h-8">{t('nav.login')}</Button>
            </Link>
            <Link to="/registro" className="hidden sm:inline-flex">
              <Button size="sm" className="text-[13px] h-8 px-4 shadow-sm">{t('nav.start')}</Button>
            </Link>
            <MobileNavMenu />
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
      >
        {/* Dot grid background */}
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />
        {/* Gradient orbs */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-primary/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          {/* Badge */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/[0.07] text-xs font-semibold text-primary mb-8">
              <Sparkles className="h-3 w-3" />
              {t('landing.badge')}
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-balance text-[clamp(2.4rem,5.5vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.03em] mb-6"
          >
            {t('landing.heroTitle1')}
            <br />
            <span className="relative inline-block">
              <span className="gradient-text">{t('landing.heroHighlight')}</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 240 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6C60 2 180 2 238 6"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-pretty text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8"
          >
            {t('landing.heroSubtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
          >
            <Link to="/registro">
              <Button size="lg" className="h-12 px-7 text-sm font-semibold gap-2 shadow-mj-md">
                {t('landing.ctaStart')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/guest-start">
              <Button variant="outline" size="lg" className="h-12 px-7 text-sm font-medium gap-2">
                <Eye className="h-4 w-4" />
                {t('landing.ctaTry')}
              </Button>
            </Link>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="flex items-center justify-center gap-4"
          >
            {/* Avatar stack */}
            <div className="flex items-center -space-x-2">
              {avatarInitials.map((initial, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${avatarColors[i]} border-2 border-background flex items-center justify-center text-[10px] font-bold text-white ring-0`}
                >
                  {initial}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground">
                <span className="font-semibold text-foreground">10,000+</span> profesionales de LATAM
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Product Preview ── */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-b from-primary/8 via-primary/4 to-transparent blur-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-mj-xl bg-card">
              {/* Browser chrome */}
              <div className="bg-muted/50 px-4 py-3 border-b border-border/30 flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background/60 border border-border/30 text-[11px] text-muted-foreground font-mono">
                    moonjab.com/cvs
                  </div>
                </div>
                <div className="w-14" />
              </div>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/og-image.png"
                className="w-full h-auto"
              >
                <source src="/moonjab-hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Social Proof Stats ── */}
      <section className="py-14 border-y border-border/30 bg-muted/20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-[11px] text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Bento ── */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="section-label mb-3">{t('landing.features.label')}</p>
            <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t('landing.features.title')}
            </h2>
            <p className="text-pretty text-muted-foreground max-w-lg mx-auto">
              {t('landing.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* ── Card 1: CV Builder (2-col wide) ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="feature-card shimmer-on-hover md:col-span-2 p-8"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
              <div className="relative h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('landing.features.cv.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
                  {t('landing.features.cv.description')}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cvTags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[11px] rounded-md bg-primary/[0.07] text-primary font-medium border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* CV mockup preview */}
                <div className="mt-auto max-w-xs">
                  <CVMockup />
                </div>
              </div>
            </motion.div>

            {/* ── Card 2: Diagnóstico vocacional ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="feature-card shimmer-on-hover p-8"
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/[0.04] rounded-full blur-2xl pointer-events-none" />
              <div className="relative h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Compass className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t('landing.features.diagnostic.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {t('landing.features.diagnostic.description')}
                </p>
                <div className="mt-auto">
                  <DiagnosticMockup />
                </div>
              </div>
            </motion.div>

            {/* ── Card 3: Interview Simulator (3-col full) ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="feature-card shimmer-on-hover md:col-span-3 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] to-transparent pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Mic className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t('landing.features.interview.title')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-5">
                    {t('landing.features.interview.description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Método STAR', 'Feedback en tiempo real', 'Voz + texto', 'IA adaptativa'].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[11px] rounded-md bg-primary/[0.07] text-primary font-medium border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-72 shrink-0">
                  <ChatMockup />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="py-24 sm:py-32 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="section-label mb-3">{t('landing.how.label')}</p>
            <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight">
              {t('landing.how.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[26px] left-[22%] right-[22%] h-px">
              <div className="gradient-divider w-full h-full" />
            </div>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative text-center"
              >
                <div className="relative z-10 w-13 h-13 rounded-2xl bg-card border border-border/50 shadow-mj-sm flex items-center justify-center mx-auto mb-5 w-[52px] h-[52px]">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.25em]">{step.num}</span>
                <h3 className="font-bold text-lg mt-1.5 mb-2.5 tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Deep Dives ── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 space-y-28">
          {/* CV Deep Dive */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 section-label">
                <FileText className="h-3.5 w-3.5" />
                {t('landing.deepDive.cvLabel')}
              </div>
              <h3 className="text-balance text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                {t('landing.deepDive.cvTitle')}
              </h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">
                {t('landing.deepDive.cvDesc')}
              </p>
              <ul className="space-y-3 pt-1">
                {cvPoints.map((point, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/registro">
                <Button variant="outline" size="sm" className="h-9 text-xs gap-1.5 mt-2">
                  Probar gratis <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
            <div className="order-first md:order-last">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-card to-muted/50 border border-border/40 p-6 flex flex-col justify-center shadow-mj-sm">
                <CVMockup />
              </div>
            </div>
          </motion.div>

          {/* Interview Deep Dive */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="space-y-5 md:order-2">
              <div className="inline-flex items-center gap-2 section-label">
                <MessageSquare className="h-3.5 w-3.5" />
                {t('landing.deepDive.interviewLabel')}
              </div>
              <h3 className="text-balance text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                {t('landing.deepDive.interviewTitle')}
              </h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">
                {t('landing.deepDive.interviewDesc')}
              </p>
              <ul className="space-y-3 pt-1">
                {interviewPoints.map((point, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/registro">
                <Button variant="outline" size="sm" className="h-9 text-xs gap-1.5 mt-2">
                  Practicar ahora <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
            <div className="md:order-1">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-card to-muted/50 border border-border/40 p-6 flex flex-col justify-center shadow-mj-sm">
                <ChatMockup />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Conversion: De la duda al empleo ── */}
      <section className="py-24 sm:py-32 border-t border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Header */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/[0.07] text-xs font-semibold text-primary mb-6">
              <Rocket className="h-3 w-3" />
              {t('landing.conversion.badge')}
            </div>
            <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t('landing.conversion.title')}{' '}
              <span className="gradient-text">{t('landing.conversion.titleHighlight')}</span>
            </h2>
            <p className="text-pretty text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {t('landing.conversion.subtitle')}
            </p>
          </motion.div>

          {/* Journey strip */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap"
          >
            {[
              { label: t('landing.conversion.step1'), icon: Compass },
              { label: t('landing.conversion.step2'), icon: FileText },
              { label: t('landing.conversion.step3'), icon: Mic },
              { label: t('landing.conversion.step4'), icon: Rocket },
            ].map(({ label, icon: Icon }, i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                <div className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold ${
                  i === 0
                    ? 'bg-primary/[0.1] border-primary/30 text-primary'
                    : 'bg-card border-border/50 text-muted-foreground'
                }`}>
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </div>
                {i < 3 && <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30 hidden sm:block flex-shrink-0" />}
              </div>
            ))}
          </motion.div>

          {/* Outcome cards */}
          <div className="grid md:grid-cols-3 gap-5">

            {/* Card 1: CV ATS — spans 2 cols */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="feature-card shimmer-on-hover group p-8 flex flex-col md:col-span-2"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="section-label">{t('landing.conversion.card1Label')}</span>
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="mb-5">
                  <span className="text-5xl font-black text-primary leading-none">{t('landing.conversion.card1Stat')}</span>
                  <p className="text-xs text-muted-foreground mt-1">{t('landing.conversion.card1StatDesc')}</p>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3 leading-snug">
                  {t('landing.conversion.card1Title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {t('landing.conversion.card1Text')}
                </p>
                <div className="mt-6">
                  <Link to="/registro">
                    <Button size="sm" className="h-9 text-xs gap-1.5 shadow-mj-sm">
                      {t('landing.conversion.card1Cta')} <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Diagnostic */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
              className="feature-card shimmer-on-hover group p-8 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-amber-500/[0.06] rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-4 right-4 z-10">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
                  {t('landing.conversion.card2Badge')}
                </span>
              </div>
              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="section-label">{t('landing.conversion.card2Label')}</span>
                </div>
                <div className="mb-5">
                  <span className="text-5xl font-black text-amber-500 leading-none">{t('landing.conversion.card2Stat')}</span>
                  <p className="text-xs text-muted-foreground mt-1">{t('landing.conversion.card2StatDesc')}</p>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3 leading-snug">
                  {t('landing.conversion.card2Title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {t('landing.conversion.card2Text')}
                </p>
                <div className="mt-6">
                  <Link to="/diagnostico-vocacional">
                    <Button variant="outline" size="sm" className="h-9 text-xs gap-1.5 w-full">
                      {t('landing.conversion.card2Cta')} <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Interviews — full width */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
              className="feature-card shimmer-on-hover group md:col-span-3 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-violet-500/[0.02] pointer-events-none rounded-2xl" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                {/* Stat */}
                <div className="md:w-52 shrink-0 text-center md:text-left md:border-r md:border-border/40 md:pr-8">
                  <div className="text-6xl font-black text-primary leading-none">{t('landing.conversion.card3Stat')}</div>
                  <p className="text-xs text-muted-foreground mt-2 max-w-[140px] mx-auto md:mx-0 leading-relaxed">{t('landing.conversion.card3StatDesc')}</p>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <span className="section-label mb-3 block">{t('landing.conversion.card3Label')}</span>
                  <h3 className="text-xl font-bold tracking-tight mb-2 leading-snug">
                    {t('landing.conversion.card3Title')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {t('landing.conversion.card3Text')}
                  </p>
                </div>
                {/* CTA */}
                <div className="md:w-44 shrink-0 flex justify-center md:justify-end">
                  <Link to="/registro">
                    <Button size="sm" className="h-9 text-xs gap-1.5 shadow-mj-sm whitespace-nowrap">
                      {t('landing.conversion.card3Cta')} <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Trust bar */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
            className="flex items-center justify-center gap-6 sm:gap-10 mt-10 flex-wrap"
          >
            {[
              { icon: Check, text: t('landing.conversion.trustFree') },
              { icon: Rocket, text: t('landing.conversion.trustTime') },
              { icon: Users, text: t('landing.conversion.trustCountries') },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon className="h-3.5 w-3.5 text-primary/60" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 sm:py-32 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="section-label mb-3">{t('landing.testimonials.label')}</p>
            <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight">
              {t('landing.testimonials.title')}
            </h2>
          </motion.div>

          {/* Testimonial grid — uniform 3-col */}
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((tt, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex flex-col p-6 rounded-2xl border border-border/40 bg-card hover:border-primary/20 hover:shadow-mj-md transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80 mb-5 flex-1">&ldquo;{tt.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border/30">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                    {tt.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{tt.name}</p>
                    <p className="text-xs text-muted-foreground">{tt.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="section-label mb-3">{t('landing.pricing.label')}</p>
            <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t('landing.pricing.title')}
            </h2>
            <p className="text-pretty text-muted-foreground max-w-md mx-auto">
              {t('landing.pricing.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {/* Free */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="rounded-2xl border border-border/50 bg-card p-7"
            >
              <p className="text-sm font-semibold mb-1">{t('landing.pricing.guestMode')}</p>
              <p className="text-xs text-muted-foreground mb-5">{t('landing.pricing.guestDesc')}</p>
              <div className="mb-5">
                <span className="text-3xl font-bold">$0</span>
                <p className="text-xs text-muted-foreground mt-0.5">{t('landing.pricing.forever')}</p>
              </div>
              <ul className="space-y-2.5 mb-7">
                {guestFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-muted-foreground/50 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/guest-start" className="block">
                <Button variant="outline" className="w-full h-10 text-sm">
                  {t('landing.pricing.tryFree')}
                </Button>
              </Link>
            </motion.div>

            {/* Pro — premium treatment */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="rounded-2xl p-[2px] relative shadow-mj-lg"
              style={{ background: 'linear-gradient(135deg, hsl(160 84% 39%), hsl(142 71% 45%))' }}
            >
              {/* Badge sits on the outer wrapper so overflow-hidden doesn't clip it */}
              <div className="absolute -top-3.5 left-6 z-20">
                <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wide uppercase shadow-sm">
                  {t('landing.pricing.recommended')}
                </div>
              </div>
              <div className="rounded-[14px] bg-card h-full p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.06] rounded-full blur-2xl pointer-events-none" />
                <div className="relative pt-4">
                  <p className="text-sm font-bold mb-1">Pro</p>
                  <p className="text-xs text-muted-foreground mb-5">{t('landing.pricing.proDesc')}</p>
                  <div className="mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$5</span>
                      <span className="text-sm text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{t('landing.pricing.billedMonthly')}</p>
                  </div>
                  <ul className="space-y-2.5 mb-7">
                    {proFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/registro" className="block">
                    <Button className="w-full h-10 text-sm font-semibold gap-2 shadow-mj-sm">
                      {t('landing.pricing.startNow')}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 sm:py-32 bg-muted/20 border-t border-border/30">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="section-label mb-3">FAQ</p>
            <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight">
              {t('landing.faq.title')}
            </h2>
          </motion.div>
          <div className="space-y-2">
            {Array.isArray(faqItems) && faqItems.map((item, i) => (
              <motion.details
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group rounded-xl border border-border/40 bg-card overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium text-sm hover:bg-muted/40 transition-colors list-none">
                  {item.q}
                  <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0 group-open:rotate-90 transition-transform duration-200" />
                </summary>
                <p className="px-5 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border/30">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA — full bleed gradient ── */}
      <section className="relative py-28 sm:py-36 overflow-hidden cta-gradient">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.08] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white/90">
              <Rocket className="h-3.5 w-3.5" />
              Gratis para siempre en el plan básico
            </div>
            <h2 className="text-balance text-3xl sm:text-[2.75rem] font-bold tracking-tight text-white leading-[1.1]">
              {t('landing.cta.title')}
            </h2>
            <p className="text-pretty text-white/70 text-lg max-w-md mx-auto leading-relaxed">
              {t('landing.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link to="/registro">
                <Button
                  size="lg"
                  className="h-13 px-8 text-sm font-semibold gap-2 bg-white text-primary hover:bg-white/90 shadow-xl border-0"
                  style={{ height: '52px' }}
                >
                  {t('landing.cta.createAccount')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/guest-start">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-13 px-8 text-sm gap-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent"
                  style={{ height: '52px' }}
                >
                  {t('landing.cta.tryAndPass')}
                </Button>
              </Link>
            </div>
            {/* Social proof below CTA */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="flex items-center -space-x-1.5">
                {avatarInitials.map((initial, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-full ${avatarColors[i]} border-2 border-primary/30 flex items-center justify-center text-[9px] font-bold text-white`}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-xs">
                Únete a <span className="text-white/90 font-semibold">10,000+</span> profesionales de LATAM
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-14 border-t border-border/30 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1 space-y-3">
              <OfficialLogo size="md" animated={false} />
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                {t('landing.footer.tagline')}
              </p>
              <p className="text-[10px] text-muted-foreground/60">Fundada en diciembre 2025</p>
              <div className="flex items-center gap-3 pt-1">
                <a href="https://www.instagram.com/trymoonjab" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.youtube.com/@TryMoonJab" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/moonjab" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://x.com/MoonJabdotcom" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
            {/* Product */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Producto</p>
              <ul className="space-y-2.5">
                {[
                  { label: t('landing.footer.pricing'), to: '/pricing' },
                  { label: 'CV Builder IA', to: '/cv-builder' },
                  { label: 'Simulador de Entrevistas', to: '/interview-prep' },
                  { label: 'Plantillas CV', to: '/plantillas-cv' },
                  { label: 'Diagnóstico Vocacional', to: '/#features' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Compañía</p>
              <ul className="space-y-2.5">
                {[
                  { label: t('landing.footer.about'), to: '/about' },
                  { label: t('landing.footer.blog'), to: '/blog' },
                  { label: 'Testimonios', to: '/testimonios' },
                  { label: 'Prensa', to: '/prensa' },
                  { label: t('landing.footer.help'), to: '/help' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Legal</p>
              <ul className="space-y-2.5">
                {[
                  { label: t('landing.footer.privacy'), to: '/privacy' },
                  { label: t('landing.footer.terms'), to: '/terms' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="gradient-divider" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
            <p className="text-[11px] text-muted-foreground">{t('landing.footer.rights')}</p>
            <p className="text-[11px] text-muted-foreground">
              Hecho con ❤️ para LATAM · Perú, México, Colombia y más
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
