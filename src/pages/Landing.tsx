import { SEOHead } from '@/components/SEOHead';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link, Navigate } from 'react-router-dom';
import {
  ArrowRight, Star, Instagram, CheckCircle, Compass, BarChart3,
  FileText, MessageSquare, Target, TrendingUp, Shield,
  Users, ChevronRight, Zap, ArrowUpRight, Layers, Award,
  GraduationCap, Sparkles, LineChart, Rocket,
  Eye, BookOpen, Check, Mic, Menu, X } from
'lucide-react';
import { OfficialLogo } from '@/components/OfficialLogo';
import { useRef, useState, useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '@/components/LanguageToggle';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease }
  })
};

// ── SEO data ─────────────────────────────────────────────────────────────────

const LANDING_FAQS = [
  {
    question: '¿Es gratis MoonJab?',
    answer:
      'Sí. MoonJab tiene un plan gratuito con acceso al diagnóstico de empleabilidad, una simulación de entrevista y una plantilla de CV. El plan Pro cuesta $5 USD/mes e incluye CVs ilimitados, entrevistas ilimitadas con feedback de IA y más.',
  },
  {
    question: '¿MoonJab funciona para conseguir mi primer trabajo?',
    answer:
      'Absolutamente. MoonJab está diseñado específicamente para estudiantes universitarios y recién egresados que buscan su primer empleo o práctica profesional en LATAM.',
  },
  {
    question: '¿Los CVs creados son compatibles con sistemas ATS?',
    answer:
      'Sí. Nuestra inteligencia artificial analiza y optimiza tu CV para superar los filtros ATS (Applicant Tracking Systems) utilizados por las principales empresas de LATAM.',
  },
  {
    question: '¿En qué países de LATAM está disponible MoonJab?',
    answer:
      'MoonJab está disponible en toda América Latina: Perú, México, Colombia, Argentina, Chile, Ecuador, Bolivia, Paraguay, Uruguay y Venezuela.',
  },
  {
    question: '¿Cómo funciona el simulador de entrevistas con IA?',
    answer:
      'Nuestro simulador de entrevistas usa inteligencia artificial para hacerte preguntas reales de entrevistas laborales, analizar tus respuestas y darte feedback instantáneo sobre cómo mejorar. Puedes practicar entrevistas técnicas, de comportamiento y de casos.',
  },
  {
    question: '¿Puedo usar MoonJab sin crear una cuenta?',
    answer:
      'Sí. El modo invitado te permite probar el CV builder y una simulación de entrevista sin necesidad de registrarte. Para guardar tu progreso y acceder a todas las funciones, crea una cuenta gratuita.',
  },
];

const LANDING_BREADCRUMBS = [{ name: 'Inicio', item: '/' }];

// ─────────────────────────────────────────────────────────────────────────────

const MobileNavMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const handler = () => setOpen(prev => !prev);
    document.addEventListener('toggle-mobile-nav', handler);
    return () => document.removeEventListener('toggle-mobile-nav', handler);
  }, []);

  return (
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
  );
};

const Landing = () => {
  return <LandingContent />;
};

const LandingContent = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="MoonJab — CV Builder con IA y Preparación de Entrevistas para Estudiantes en LATAM"
        description="Crea tu CV profesional optimizado para ATS con inteligencia artificial en minutos y practica entrevistas reales. La plataforma de carrera #1 para estudiantes en LATAM. Gratis para empezar."
        path="/"
        faqs={LANDING_FAQS}
        breadcrumbs={LANDING_BREADCRUMBS}
      />

      {/* ── Navbar ── */}
      <MobileNavMenu />
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/30">
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
              <Button size="sm" className="text-[13px] h-8 px-4">{t('nav.start')}</Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden h-9 w-9" onClick={() => document.dispatchEvent(new CustomEvent('toggle-mobile-nav'))}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-medium text-primary mb-8">
              <Sparkles className="h-3 w-3" />
              {t('landing.badge')}
            </div>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            {t('landing.heroTitle')}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
          >
            {t('landing.heroSubtitle')}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 text-sm font-semibold gap-2 shadow-clovely-md w-full sm:w-auto">
                {t('landing.heroCTA')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/guest-start">
              <Button variant="outline" size="lg" className="h-12 px-8 text-sm gap-2 w-full sm:w-auto">
                {t('landing.heroSecondaryCTA')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Stats ── */}
      <section aria-label="Estadísticas de MoonJab" className="py-16 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" aria-label="Características de MoonJab" className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">{t('landing.features.label')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('landing.features.title')}</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">{t('landing.features.subtitle')}</p>
          </motion.div>

          {/* CV Feature */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-2xl border border-border/40 bg-card p-8 md:p-12 mb-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-medium mb-6">
                  <FileText className="h-3 w-3" />
                  {t('landing.features.cv.tag')}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{t('landing.features.cv.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t('landing.features.cv.desc')}</p>
                <ul className="space-y-2.5">
                  {cvPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {cvTags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-muted text-[11px] text-muted-foreground font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="bg-muted/50 rounded-xl aspect-video flex items-center justify-center">
                <FileText className="h-16 w-16 text-muted-foreground/30" />
              </div>
            </div>
          </motion.div>

          {/* Interview Feature */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-2xl border border-border/40 bg-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-medium mb-6">
                  <Mic className="h-3 w-3" />
                  {t('landing.features.interview.tag')}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{t('landing.features.interview.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t('landing.features.interview.desc')}</p>
                <ul className="space-y-2.5">
                  {interviewPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:order-1 bg-muted/50 rounded-xl aspect-video flex items-center justify-center">
                <Mic className="h-16 w-16 text-muted-foreground/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" aria-label="Cómo funciona MoonJab" className="py-24 sm:py-32 bg-muted/20 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">{t('landing.how.label')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('landing.how.title')}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl border border-border/40 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary/20">{step.num}</span>
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section aria-label="Testimonios de usuarios de MoonJab" className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">{t('landing.testimonials.label')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('landing.testimonials.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((tt, i) =>
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl border border-border/40 bg-card hover:shadow-clovely-md transition-all duration-300 group">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) =>
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  )}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80 mb-6">&ldquo;{tt.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{tt.name[0]}</div>
                  <div>
                    <p className="font-medium text-sm">{tt.name}</p>
                    <p className="text-xs text-muted-foreground">{tt.role}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" aria-label="Precios de MoonJab" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">{t('landing.pricing.label')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('landing.pricing.title')}</h2>
            <p className="text-muted-foreground max-w-md mx-auto">{t('landing.pricing.subtitle')}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {/* Free / Guest */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="rounded-2xl border border-border/40 bg-card p-7">
              <p className="text-sm font-semibold mb-1">{t('landing.pricing.guestMode')}</p>
              <p className="text-xs text-muted-foreground mb-5">{t('landing.pricing.guestDesc')}</p>
              <p className="text-3xl font-bold mb-1">$0</p>
              <p className="text-xs text-muted-foreground mb-6">{t('landing.pricing.forever')}</p>
              <ul className="space-y-2.5 mb-7">
                {guestFeatures.map((f) =>
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-muted-foreground/60 flex-shrink-0" />
                    {f}
                  </li>
                )}
              </ul>
              <Link to="/guest-start" className="block">
                <Button variant="outline" className="w-full h-10 text-sm">{t('landing.pricing.tryFree')}</Button>
              </Link>
            </motion.div>

            {/* Pro */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="rounded-2xl border-2 border-primary/30 bg-card p-7 relative shadow-clovely-md">
              <div className="absolute -top-3 left-7 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold">
                {t('landing.pricing.recommended')}
              </div>
              <p className="text-sm font-semibold mb-1">Pro</p>
              <p className="text-xs text-muted-foreground mb-5">{t('landing.pricing.proDesc')}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <p className="text-3xl font-bold">$5</p>
                <span className="text-sm text-muted-foreground">/mes</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">{t('landing.pricing.billedMonthly')}</p>
              <ul className="space-y-2.5 mb-7">
                {proFeatures.map((f) =>
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    {f}
                  </li>
                )}
              </ul>
              <Link to="/registro" className="block">
                <Button className="w-full h-10 text-sm font-semibold gap-2 shadow-clovely-sm">
                  {t('landing.pricing.startNow')}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ visible (doubles as schema) ── */}
      <section aria-label="Preguntas frecuentes sobre MoonJab" className="py-24 sm:py-32 bg-muted/20 border-t border-border/30">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Preguntas frecuentes</h2>
            <p className="text-muted-foreground">Todo lo que necesitas saber sobre MoonJab.</p>
          </motion.div>
          <div className="space-y-4">
            {LANDING_FAQS.map((faq, i) => (
              <motion.details
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group p-5 rounded-xl border border-border/40 bg-card cursor-pointer"
              >
                <summary className="font-medium text-sm list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 sm:py-32 border-t border-border/30">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t('landing.cta.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">{t('landing.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link to="/registro">
                <Button size="lg" className="h-12 px-8 text-sm font-semibold gap-2 shadow-clovely-md">
                  {t('landing.cta.createAccount')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/guest-start">
                <Button variant="outline" size="lg" className="h-12 px-8 text-sm gap-2">
                  {t('landing.cta.tryAndPass')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <OfficialLogo size="md" animated={false} />
              <p className="text-xs text-muted-foreground">{t('landing.footer.tagline')}</p>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <Link to="/pricing" className="hover:text-foreground transition-colors">{t('landing.footer.pricing')}</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">{t('landing.footer.about')}</Link>
              <Link to="/blog" className="hover:text-foreground transition-colors">{t('landing.footer.blog')}</Link>
              <Link to="/help" className="hover:text-foreground transition-colors">{t('landing.footer.help')}</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">{t('landing.footer.privacy')}</Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">{t('landing.footer.terms')}</Link>
            </nav>
          </div>
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/20">
            <p className="text-[11px] text-muted-foreground">{t('landing.footer.rights')}</p>
            <a href="https://www.instagram.com/trymoonjab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram de MoonJab">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
