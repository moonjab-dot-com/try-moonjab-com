import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, Instagram, Compass,
  FileText, Target, TrendingUp,
  Users, ChevronRight, Sparkles, Rocket,
  Eye, Check, Mic, Menu,
  Youtube, Linkedin, Twitter,
  BarChart3, Shield, Zap
} from 'lucide-react';
import { OfficialLogo } from '@/components/OfficialLogo';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '@/components/LanguageToggle';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.55, ease }
  })
};

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
        <nav className="flex flex-col gap-1">
          {[
            { href: '#features', label: t('nav.features') },
            { href: '#how', label: t('nav.howItWorks') },
            { href: '#pricing', label: t('nav.pricing') },
          ].map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2.5 border-b border-border/30 last:border-0">
              {label}
            </a>
          ))}
          <div className="pt-5 space-y-2.5">
            <Link to="/login" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full h-10 text-sm">{t('nav.login')}</Button>
            </Link>
            <Link to="/registro" onClick={() => setOpen(false)}>
              <Button className="w-full h-10 text-sm font-semibold">{t('nav.start')}</Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const Landing = () => <LandingContent />;

const LandingContent = () => {
  const { t } = useTranslation();

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

  const avatarInitials = ['A', 'M', 'S', 'C', 'L'];

  const companyLogos = [
    { src: '/integrations/mckinsey-logo.png', alt: 'McKinsey' },
    { src: '/integrations/deloitte-logo.png', alt: 'Deloitte' },
    { src: '/integrations/microsoft-logo.png', alt: 'Microsoft' },
    { src: '/integrations/amazon-logo.png', alt: 'Amazon' },
    { src: '/integrations/kpmg-logo.png', alt: 'KPMG' },
    { src: '/integrations/pwc-logo.png', alt: 'PwC' },
    { src: '/integrations/ey-logo.png', alt: 'EY' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Skip link — WCAG 2.1 AA */}
      <a href="#landing-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:shadow-lg">
        Saltar al contenido principal
      </a>

      <SEOHead
        title="MoonJab — CV Builder con IA y Simulador de Entrevistas LATAM"
        description="Crea tu CV optimizado para ATS con IA y practica entrevistas laborales reales. Plataforma de carrera #1 para estudiantes en Perú, México y Colombia."
        path="/"
        keywords="CV builder con IA, simulador de entrevistas, career platform estudiantes LATAM, hacer curriculum vitae ATS, preparar entrevista trabajo, primer empleo estudiantes"
        breadcrumbs={[]}
      />

      {/* ── Navbar ── */}
      <MobileNavMenu />
      <nav aria-label="Navegación principal"
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/25 supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <OfficialLogo size="md" to="/" />
          <div className="hidden md:flex items-center gap-7">
            {[
              { href: '#features', label: t('nav.features') },
              { href: '#how', label: t('nav.howItWorks') },
              { href: '#pricing', label: t('nav.pricing') },
            ].map(({ href, label }) => (
              <a key={href} href={href}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
            <Link to="/login" className="hidden sm:inline-flex">
              <Button variant="ghost" size="sm" className="text-[13px] h-8 px-3">{t('nav.login')}</Button>
            </Link>
            <Link to="/registro" className="hidden sm:inline-flex">
              <Button size="sm" className="text-[13px] h-8 px-4 font-semibold">{t('nav.start')}</Button>
            </Link>
            <Button variant="ghost" size="icon" aria-label="Abrir menú"
              className="md:hidden h-9 w-9"
              onClick={() => document.dispatchEvent(new CustomEvent('toggle-mobile-nav'))}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        id="landing-main"
        className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">

        {/* Dot grid background */}
        <div className="absolute inset-0 hero-dot-grid pointer-events-none" />
        {/* Centered radial glow */}
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        {/* Soft ambient orbs */}
        <div className="absolute -top-32 right-[10%] w-[480px] h-[480px] rounded-full bg-primary/[0.05] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-[320px] h-[320px] rounded-full bg-primary/[0.04] blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">

          {/* Badge with live pulse */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/[0.07] text-xs font-semibold text-primary mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t('landing.badge')} · 10,000+ estudiantes activos
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-[clamp(2.1rem,5.8vw,3.75rem)] font-bold leading-[1.06] tracking-tight mb-6">
            {t('landing.heroTitle1')}
            <span className="block gradient-text mt-0.5">{t('landing.heroHighlight')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-[1.0625rem] sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            {t('landing.heroSubtitle')}
          </motion.p>

          {/* CTA row */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 text-sm font-semibold gap-2 shadow-clovely-lg">
                {t('landing.ctaStart')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/guest-start">
              <Button variant="outline" size="lg" className="h-12 px-8 text-sm font-medium gap-2">
                <Eye className="h-4 w-4" />
                {t('landing.ctaTry')}
              </Button>
            </Link>
          </motion.div>

          {/* Trust signal: avatar stack + rating */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatarInitials.map((letter, i) => (
                  <div key={i} style={{ zIndex: avatarInitials.length - i }}
                    className="w-8 h-8 rounded-full bg-primary/15 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary relative">
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-0.5 mb-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">4.9/5</span> · 10,000+ estudiantes
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/50" />
            <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" /> {t('landing.checkGuest')}
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" /> {t('landing.checkCancel')}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Product Preview ── */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-b from-primary/[0.08] to-transparent blur-3xl opacity-70 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-clovely-xl bg-card">
              {/* Browser chrome */}
              <div className="bg-muted/50 px-4 py-3 border-b border-border/30 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-1.5 px-4 py-1 rounded-md bg-muted/80 text-[11px] text-muted-foreground font-mono">
                    <Shield className="h-3 w-3 text-primary/60" />
                    moonjab.com
                  </div>
                </div>
                <div className="w-16" />
              </div>
              <video autoPlay loop muted playsInline preload="auto" className="w-full h-auto block">
                <source src="/moonjab-hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="py-14 border-y border-border/25 bg-muted/20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex flex-col items-center gap-1.5 group">
                <stat.icon className="h-4 w-4 text-primary/50 mb-0.5 group-hover:text-primary transition-colors duration-300" />
                <p className="text-[2rem] sm:text-4xl font-bold tracking-tight stat-number">{stat.value}</p>
                <p className="text-[11px] text-muted-foreground leading-snug max-w-[120px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Logos ── */}
      <section className="py-14 border-b border-border/25">
        <div className="mx-auto max-w-5xl px-6 overflow-hidden">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[10px] text-center text-muted-foreground/50 uppercase tracking-[0.22em] font-semibold mb-8">
            Estudiantes de MoonJab trabajan en
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="overflow-hidden">
              <div className="marquee-track">
                {[...companyLogos, ...companyLogos].map((logo, i) => (
                  <img key={i} src={logo.src} alt={logo.alt}
                    className="h-5 sm:h-6 object-contain opacity-35 grayscale hover:opacity-65 hover:grayscale-0 transition-all duration-400 flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES BENTO
      ═══════════════════════════════════════ */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16">
            <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-3">{t('landing.features.label')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t('landing.features.title')}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-[0.9375rem]">
              {t('landing.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">

            {/* CV Builder — wide card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 hover:border-primary/25 hover:shadow-clovely-lg transition-all duration-400 card-premium">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
              <div className="relative h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/18 group-hover:scale-105 transition-all duration-300">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('landing.features.cv.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
                  {t('landing.features.cv.description')}
                </p>

                {/* CV visual preview */}
                <div className="mt-auto rounded-xl bg-muted/40 border border-border/30 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                      <div className="h-2 w-28 rounded-full bg-foreground/10" />
                      <div className="h-1.5 w-20 rounded-full bg-foreground/07" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/12 border border-primary/15">
                      <Sparkles className="h-3 w-3 text-primary" />
                      <span className="text-[11px] font-bold text-primary">ATS 94%</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="ui-preview-bar">
                      <motion.div className="ui-preview-bar-fill"
                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ width: '94%' }} />
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-foreground/06" />
                    <div className="h-1.5 w-4/5 rounded-full bg-foreground/06" />
                    <div className="h-1.5 w-3/5 rounded-full bg-foreground/06" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {Array.isArray(cvTags) && cvTags.map((tag) => (
                      <span key={tag}
                        className="px-2.5 py-1 text-[10px] rounded-md bg-primary/[0.08] text-primary font-semibold border border-primary/12">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Diagnóstico vocacional */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 hover:border-primary/25 hover:shadow-clovely-lg transition-all duration-400 card-premium">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/[0.04] rounded-full blur-2xl pointer-events-none" />
              <div className="relative h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/18 group-hover:scale-105 transition-all duration-300">
                  <Compass className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t('landing.features.diagnostic.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {t('landing.features.diagnostic.description')}
                </p>

                {/* RIASEC visual */}
                <div className="mt-auto space-y-2">
                  {[
                    { label: 'Investigador', pct: 82 },
                    { label: 'Social', pct: 68 },
                    { label: 'Emprendedor', pct: 55 },
                  ].map(({ label, pct }) => (
                    <div key={label} className="space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-semibold text-primary">{pct}%</span>
                      </div>
                      <div className="ui-preview-bar">
                        <motion.div className="ui-preview-bar-fill"
                          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
                          style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                  <p className="text-[10px] text-muted-foreground/70 pt-1">Modelo RIASEC · Análisis con IA</p>
                </div>
              </div>
            </motion.div>

            {/* Simulador de entrevistas — full width */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="md:col-span-3 group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-primary/25 hover:shadow-clovely-lg transition-all duration-400 card-premium">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.025] to-transparent pointer-events-none" />
              <div className="relative p-8 flex flex-col md:flex-row md:items-center gap-8">

                <div className="flex-1">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/18 group-hover:scale-105 transition-all duration-300">
                    <Mic className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t('landing.features.interview.title')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-6">
                    {t('landing.features.interview.description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Método STAR', 'Feedback IA', 'Voz + Texto', 'Análisis en tiempo real'].map((tag) => (
                      <span key={tag}
                        className="px-2.5 py-1 text-[11px] rounded-md bg-primary/[0.07] text-primary font-semibold border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chat preview */}
                <div className="md:w-72 shrink-0 rounded-xl bg-muted/40 border border-border/30 p-4 space-y-3">
                  <div className="flex items-center gap-2 mb-2 pb-3 border-b border-border/25">
                    <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                      <Mic className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-[11px] font-semibold text-foreground/70">IA Entrevistadora</span>
                    <span className="ml-auto flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                  </div>

                  {/* AI message */}
                  <div className="bg-background/70 rounded-xl rounded-tl-none px-3 py-2.5 max-w-[88%] border border-border/20">
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-foreground/10" />
                      <div className="h-1.5 w-5/6 rounded-full bg-foreground/10" />
                      <div className="h-1.5 w-3/4 rounded-full bg-foreground/10" />
                    </div>
                  </div>

                  {/* User message */}
                  <div className="bg-primary/[0.1] rounded-xl rounded-tr-none px-3 py-2.5 max-w-[78%] ml-auto border border-primary/10">
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-primary/25" />
                      <div className="h-1.5 w-2/3 rounded-full bg-primary/25" />
                    </div>
                  </div>

                  {/* Feedback score */}
                  <div className="pt-1 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Confianza en respuesta</span>
                      <span className="font-bold text-primary">78%</span>
                    </div>
                    <div className="ui-preview-bar">
                      <motion.div className="ui-preview-bar-fill"
                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                        style={{ width: '78%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════ */}
      <section id="how" className="py-24 sm:py-32 bg-muted/25 border-y border-border/25">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16">
            <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-3">{t('landing.how.label')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t('landing.how.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-[3.25rem] left-[22%] right-[22%] h-px">
              <div className="h-full bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
            </div>

            {steps.map((step, i) => (
              <motion.div key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="relative text-center group">
                <div className="relative z-10 w-[3.5rem] h-[3.5rem] rounded-2xl bg-card border border-border/50 shadow-clovely-sm flex items-center justify-center mx-auto mb-5 group-hover:border-primary/25 group-hover:shadow-clovely-md transition-all duration-300">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-[10px] font-mono font-bold text-primary/50 uppercase tracking-[0.22em]">{step.num}</span>
                <h3 className="font-bold text-[1.0625rem] mt-2 mb-2.5">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURE DEEP DIVES
      ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 space-y-28">

          {/* CV Deep Dive */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold text-primary uppercase tracking-[0.18em]">
                <FileText className="h-3.5 w-3.5" />
                {t('landing.deepDive.cvLabel')}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                {t('landing.deepDive.cvTitle')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{t('landing.deepDive.cvDesc')}</p>
              <ul className="space-y-3 pt-1">
                {Array.isArray(cvPoints) && cvPoints.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link to="/cv-builder">
                  <Button variant="outline" size="sm" className="gap-2 text-sm">
                    Crear mi CV gratis <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* CV visual mockup */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-card to-muted/40 border border-border/40 p-6 flex flex-col justify-between shadow-clovely-md">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1.5">
                    <div className="h-3 w-32 rounded bg-primary/15" />
                    <div className="h-2 w-20 rounded bg-primary/08" />
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-primary/12 border border-primary/15 flex items-center gap-1">
                    <Zap className="h-2.5 w-2.5 text-primary" />
                    <span className="text-[9px] font-bold text-primary">ATS: 94%</span>
                  </div>
                </div>
                <div className="ui-preview-bar">
                  <div className="ui-preview-bar-fill" style={{ width: '94%' }} />
                </div>
                <div className="h-px bg-border/40" />
                <div className="space-y-1.5">
                  <div className="h-2 w-24 rounded bg-foreground/10" />
                  <div className="h-1.5 w-full rounded bg-muted" />
                  <div className="h-1.5 w-full rounded bg-muted" />
                  <div className="h-1.5 w-4/5 rounded bg-muted" />
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="h-2 w-20 rounded bg-primary/20" />
                <div className="space-y-1">
                  <div className="h-1.5 w-full rounded bg-muted/80" />
                  <div className="h-1.5 w-3/4 rounded bg-muted/80" />
                </div>
                <div className="flex gap-2 pt-1">
                  <div className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/12 text-[10px] text-primary font-semibold">Descargar PDF</div>
                  <div className="px-2.5 py-1 rounded-md bg-muted border border-border/40 text-[10px] text-muted-foreground">Compartir</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interview Deep Dive */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-5 md:order-2">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold text-primary uppercase tracking-[0.18em]">
                <Mic className="h-3.5 w-3.5" />
                {t('landing.deepDive.interviewLabel')}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                {t('landing.deepDive.interviewTitle')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{t('landing.deepDive.interviewDesc')}</p>
              <ul className="space-y-3 pt-1">
                {Array.isArray(interviewPoints) && interviewPoints.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link to="/interview-prep">
                  <Button variant="outline" size="sm" className="gap-2 text-sm">
                    Practicar entrevistas <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Interview visual mockup */}
            <div className="md:order-1 aspect-[4/3] rounded-2xl bg-gradient-to-br from-card to-muted/40 border border-border/40 p-5 flex flex-col gap-3 shadow-clovely-md">
              <div className="flex items-center gap-2 pb-3 border-b border-border/30">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                  <Mic className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-foreground/80">{t('landing.deepDive.interviewerAI')}</p>
                  <p className="text-[9px] text-muted-foreground">Activo · Entrevista conductual</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} style={{ height: `${10 + i * 4}px`, animationDelay: `${i * 0.1}s` }}
                      className="w-1 bg-primary/40 rounded-full animate-pulse" />
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-2.5 overflow-hidden">
                <div className="bg-muted/60 rounded-xl rounded-tl-none p-3 max-w-[82%] border border-border/20">
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-foreground/10" />
                    <div className="h-1.5 w-4/5 rounded-full bg-foreground/10" />
                    <div className="h-1.5 w-3/5 rounded-full bg-foreground/10" />
                  </div>
                </div>
                <div className="bg-primary/[0.09] rounded-xl rounded-tr-none p-3 max-w-[75%] ml-auto border border-primary/10">
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-primary/22" />
                    <div className="h-1.5 w-2/3 rounded-full bg-primary/22" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-muted-foreground">Puntuación STAR</span>
                  <span className="font-bold text-primary">75/100</span>
                </div>
                <div className="ui-preview-bar">
                  <div className="ui-preview-bar-fill" style={{ width: '75%' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-muted/25 border-y border-border/25">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14">
            <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-3">{t('landing.testimonials.label')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('landing.testimonials.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((tt, i) => (
              <motion.div key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group p-7 rounded-2xl border border-border/40 bg-card hover:border-primary/20 hover:shadow-clovely-lg transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[0.875rem] leading-relaxed text-foreground/80 mb-7 relative">
                  <span className="text-3xl leading-none text-primary/20 font-serif mr-0.5 relative top-1">"</span>
                  {tt.text}
                  <span className="text-3xl leading-none text-primary/20 font-serif ml-0.5">"</span>
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                    {tt.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[0.875rem]">{tt.name}</p>
                    <p className="text-[11px] text-muted-foreground">{tt.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mt-10">
            <Link to="/testimonios">
              <Button variant="ghost" size="sm" className="text-sm gap-2 text-muted-foreground hover:text-foreground">
                Ver todas las historias <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING
      ═══════════════════════════════════════ */}
      <section id="pricing" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14">
            <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-3">{t('landing.pricing.label')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('landing.pricing.title')}</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-[0.9375rem]">{t('landing.pricing.subtitle')}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {/* Free / Guest */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="rounded-2xl border border-border/40 bg-card p-7">
              <p className="text-sm font-bold mb-1">{t('landing.pricing.guestMode')}</p>
              <p className="text-xs text-muted-foreground mb-5">{t('landing.pricing.guestDesc')}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <p className="text-4xl font-bold tracking-tight">$0</p>
              </div>
              <p className="text-xs text-muted-foreground mb-7">{t('landing.pricing.forever')}</p>
              <ul className="space-y-3 mb-8">
                {Array.isArray(guestFeatures) && guestFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-muted-foreground/60 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/guest-start" className="block">
                <Button variant="outline" className="w-full h-10 text-sm">{t('landing.pricing.tryFree')}</Button>
              </Link>
            </motion.div>

            {/* Pro */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="relative rounded-2xl border-gradient-pro p-7">
              <div className="absolute -top-3.5 left-7 px-3.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wide shadow-clovely-sm">
                {t('landing.pricing.recommended')}
              </div>
              <p className="text-sm font-bold mb-1">Pro</p>
              <p className="text-xs text-muted-foreground mb-5">{t('landing.pricing.proDesc')}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <p className="text-4xl font-bold tracking-tight">$5</p>
                <span className="text-sm text-muted-foreground font-medium">/mes</span>
              </div>
              <p className="text-xs text-muted-foreground mb-7">{t('landing.pricing.billedMonthly')}</p>
              <ul className="space-y-3 mb-8">
                {Array.isArray(proFeatures) && proFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <div className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/registro" className="block">
                <Button className="w-full h-10 text-sm font-bold gap-2 shadow-clovely-md">
                  {t('landing.pricing.startNow')}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-wrap justify-center gap-6 mt-10 text-xs text-muted-foreground">
            {[
              { icon: Shield, text: 'Pago 100% seguro' },
              { icon: Zap, text: 'Cancela cuando quieras' },
              { icon: BarChart3, text: 'Sin compromisos' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-primary/60" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section id="faq" className="py-24 sm:py-32 bg-muted/25 border-t border-border/25">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14">
            <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('landing.faq.title')}</h2>
          </motion.div>
          <div className="space-y-2">
            {Array.isArray(faqItems) && faqItems.map((item, i) => (
              <motion.details key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group rounded-xl border border-border/40 bg-card overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-[0.875rem] hover:bg-muted/40 transition-colors list-none rounded-xl select-none">
                  {item.q}
                  <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0 group-open:rotate-90 transition-transform duration-200" />
                </summary>
                <div className="px-5 pb-5 border-t border-border/25">
                  <p className="pt-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOUNDER TRUST SIGNAL
      ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 border-t border-border/25">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border/40 bg-card p-8 sm:p-10 text-center shadow-clovely-sm">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-lg font-bold text-primary">S</span>
            </div>
            <blockquote className="text-lg sm:text-xl font-medium leading-relaxed mb-6 max-w-xl mx-auto text-foreground/90">
              "Vi cómo compañeros brillantes perdían oportunidades por no tener un CV que los
              representara o por bloquearse en entrevistas. MoonJab es la herramienta que yo
              hubiera querido tener."
            </blockquote>
            <div>
              <p className="font-bold text-sm">Salvador</p>
              <p className="text-xs text-muted-foreground mt-0.5">CEO & Co-Founder de MoonJab · Lima, Perú</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 relative overflow-hidden border-t border-border/25">
        <div className="absolute inset-0 hero-dot-grid pointer-events-none opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/12 border border-primary/15 flex items-center justify-center mx-auto">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t('landing.cta.title')}
            </h2>
            <p className="text-muted-foreground text-[1.0625rem] max-w-md mx-auto leading-relaxed">
              {t('landing.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link to="/registro">
                <Button size="lg" className="h-12 px-8 text-sm font-bold gap-2 shadow-clovely-lg">
                  {t('landing.cta.createAccount')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/guest-start">
                <Button variant="outline" size="lg" className="h-12 px-8 text-sm gap-2">
                  <Eye className="h-4 w-4" />
                  {t('landing.cta.tryAndPass')}
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              Sin tarjeta de crédito · Gratis para siempre en plan básico
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="border-t border-border/25 bg-muted/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-4">
              <OfficialLogo size="md" animated={false} />
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                {t('landing.footer.tagline')}
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a href="https://www.instagram.com/trymoonjab" target="_blank" rel="nofollow noopener noreferrer"
                  aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.youtube.com/@TryMoonJab" target="_blank" rel="nofollow noopener noreferrer"
                  aria-label="YouTube" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/moonjab" target="_blank" rel="nofollow noopener noreferrer"
                  aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://x.com/MoonJabdotcom" target="_blank" rel="nofollow noopener noreferrer"
                  aria-label="X / Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <p className="text-xs font-bold text-foreground uppercase tracking-[0.12em]">Producto</p>
              <ul className="space-y-2.5">
                {[
                  { to: '/cv-builder', label: 'CV Builder con IA' },
                  { to: '/interview-prep', label: 'Simulador de Entrevistas' },
                  { to: '/verificador-ats', label: 'Verificador ATS' },
                  { to: '/salario', label: 'Guía de Salarios' },
                  { to: '/pricing', label: t('landing.footer.pricing') },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <p className="text-xs font-bold text-foreground uppercase tracking-[0.12em]">Compañía</p>
              <ul className="space-y-2.5">
                {[
                  { to: '/about', label: t('landing.footer.about') },
                  { to: '/blog', label: t('landing.footer.blog') },
                  { to: '/testimonios', label: 'Testimonios' },
                  { to: '/prensa', label: 'Prensa' },
                  { to: '/help', label: t('landing.footer.help') },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <p className="text-xs font-bold text-foreground uppercase tracking-[0.12em]">Legal</p>
              <ul className="space-y-2.5">
                {[
                  { to: '/privacy', label: t('landing.footer.privacy') },
                  { to: '/terms', label: t('landing.footer.terms') },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section-divider mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
            <p>{t('landing.footer.rights')}</p>
            <p>Hecho con ❤️ para estudiantes de LATAM</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
