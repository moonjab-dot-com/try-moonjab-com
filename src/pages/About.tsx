import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, Heart, Zap, Users,
  Globe, Sparkles, MapPin, Calendar, TrendingUp,
  BookOpen, Award, ChevronRight,
} from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre MoonJab',
  description: 'Conoce la misión, historia y equipo detrás de MoonJab — la plataforma de empleabilidad con IA para estudiantes en LATAM.',
  url: 'https://moonjab.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'MoonJab',
    foundingDate: '2025-12',
    founder: {
      '@type': 'Person',
      name: 'Salvador',
      jobTitle: 'CEO & Co-Founder',
    },
    description: 'Career platform con IA para estudiantes universitarios en LATAM.',
    url: 'https://moonjab.com',
    logo: 'https://moonjab.com/moonjab-logo.png',
  },
};

const values = [
  {
    icon: Target,
    title: 'Claridad',
    desc: 'Cada persona merece saber exactamente cuál es su camino. Eliminamos el ruido y la confusión del proceso de empleabilidad con herramientas que dan dirección real.',
  },
  {
    icon: Heart,
    title: 'Empatía',
    desc: 'Construimos para estudiantes reales, con miedos reales. Cada función nació de escuchar a cientos de universitarios en Perú, México y Colombia.',
  },
  {
    icon: Zap,
    title: 'Velocidad',
    desc: 'El mercado laboral no espera. Te damos las herramientas para pasar de "¿qué hago con mi carrera?" a tu primera oferta en semanas, no meses.',
  },
  {
    icon: Users,
    title: 'Democratización',
    desc: 'Los estudiantes de Stanford tienen mentores, coaches y redes. Los de LATAM merecen lo mismo. Eso construimos.',
  },
];

const milestones = [
  { date: 'Dic 2025', event: 'MoonJab fundado en Lima, Perú' },
  { date: 'Ene 2026', event: 'Primer CV builder con IA lanzado en beta privada' },
  { date: 'Feb 2026', event: 'Simulador de entrevistas lanzado para beta testers' },
  { date: 'Mar 2026', event: '1,000 estudiantes en plataforma en Perú, México y Colombia' },
  { date: 'Abr 2026', event: 'Plan Pro lanzado · Diagnóstico vocacional RIASEC disponible' },
  { date: 'May 2026', event: '10,000+ estudiantes · Expansión a Argentina, Chile y Ecuador' },
];

const stats = [
  { number: '10K+', label: 'Estudiantes activos', icon: Users },
  { number: '50K+', label: 'CVs generados con IA', icon: BookOpen },
  { number: '87%', label: 'Obtienen entrevistas', icon: TrendingUp },
  { number: '6', label: 'Países en LATAM', icon: Globe },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="Sobre MoonJab — Nuestra Misión y Equipo"
        description="MoonJab nació en Lima en diciembre de 2025 con una misión: democratizar la empleabilidad en LATAM. Conoce la historia, el equipo y los valores detrás de la plataforma."
        path="/about"
        schema={aboutSchema}
        breadcrumbs={[{ name: 'Sobre MoonJab', url: 'https://moonjab.com/about' }]}
      />

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/30">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <OfficialLogo size="md" to="/" />
          <div className="flex items-center gap-3">
            <Link to="/pricing">
              <Button variant="ghost" size="sm" className="text-[13px] h-8">Precios</Button>
            </Link>
            <Link to="/registro">
              <Button size="sm" className="text-[13px] h-8 px-4 gap-1.5">
                Empezar gratis <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fade} custom={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-medium text-primary mb-8">
              <Sparkles className="h-3 w-3" />
              Fundada en Lima · Diciembre 2025
            </div>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fade} custom={1}
            className="text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.07] tracking-tight mb-6"
          >
            Construimos el puente entre{' '}
            <span className="gradient-text">quién eres</span>{' '}
            y{' '}
            <span className="gradient-text">quién puedes ser</span>
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fade} custom={2}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            MoonJab es la plataforma de empleabilidad con IA construida específicamente para
            estudiantes universitarios en LATAM. Nacimos de una convicción: cada estudiante
            merece las mismas herramientas que tienen los de Harvard o Stanford.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fade} custom={i}
                className="text-center"
              >
                <stat.icon className="h-4 w-4 text-primary/50 mx-auto mb-2" />
                <p className="text-3xl font-bold tracking-tight">{stat.number}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                <Calendar className="h-3.5 w-3.5" />
                La historia
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                Por qué construimos MoonJab
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En diciembre de 2025, Salvador se encontraba con el mismo problema que millones
                  de estudiantes en LATAM: las herramientas de carrera disponibles eran genéricas,
                  caras o simplemente no existían en español.
                </p>
                <p>
                  Los estudiantes de universidades top en EEUU tienen acceso a coaches de carrera,
                  mentores, simulaciones de entrevistas y feedback de IA. Los estudiantes en Lima,
                  Ciudad de México o Bogotá no. Esa brecha es inaceptable.
                </p>
                <p>
                  MoonJab nació para cerrarla. Construimos la primera plataforma de empleabilidad
                  con IA diseñada desde cero para el contexto latinoamericano: el idioma, las
                  empresas, los procesos de selección y las aspiraciones de los estudiantes de la región.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-border/50 bg-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.04] rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">S</span>
                  </div>
                  <div className="mb-3">
                    <p className="font-semibold text-lg">Salvador</p>
                    <p className="text-sm text-muted-foreground">CEO & Co-Founder · MoonJab</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin className="h-3 w-3 text-muted-foreground/60" />
                      <span className="text-xs text-muted-foreground/60">Lima, Perú</span>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">
                    "Vi cómo compañeros brillantes no conseguían trabajo por no saber hacer un CV
                    o quedar bloqueados en entrevistas. El talento estaba ahí — las herramientas,
                    no. Decidimos construirlas."
                  </blockquote>
                </div>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-3">
                  Reconocimientos
                </p>
                <div className="space-y-2">
                  {[
                    'Startup del mes — Comunidad YC LATAM',
                    'Top 10 EdTech startups — LATAM 2026',
                    'Producto del día — ProductHunt',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Award className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <Globe className="h-10 w-10 text-primary mx-auto mb-6" />
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Nuestra misión
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight max-w-3xl mx-auto">
              "Democratizar el acceso a herramientas de desarrollo profesional de clase mundial,
              para que cada estudiante en LATAM pueda descubrir y alcanzar su máximo potencial."
            </p>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
              No es solo una frase. Es el criterio con el que tomamos cada decisión de producto,
              cada feature que construimos y cada país al que expandimos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">
              Lo que nos define
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Cuatro principios que guían cada decisión
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fade} custom={i}
                className="group p-7 rounded-2xl border border-border/40 bg-card hover:border-primary/20 hover:shadow-clovely-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">
              Hitos
            </p>
            <h2 className="text-3xl font-bold tracking-tight">5 meses. 10,000 estudiantes.</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/50" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fade} custom={i}
                  className="flex gap-5 items-start pl-8 relative"
                >
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background" />
                  <div>
                    <p className="text-[11px] font-mono text-primary/70 mb-0.5">{m.date}</p>
                    <p className="text-sm text-foreground">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">
              El equipo
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Construido por fundadores que lo vivieron</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Un equipo compacto y obcecado con resolver el problema de empleabilidad
              estudiantil en LATAM.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="group w-full max-w-sm p-7 rounded-2xl border border-border/40 bg-card hover:border-primary/20 hover:shadow-clovely-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors">
                <span className="text-2xl font-bold text-primary">S</span>
              </div>
              <p className="font-bold text-lg">Salvador</p>
              <p className="text-sm text-muted-foreground mt-0.5">CEO & Co-Founder</p>
              <div className="flex items-center justify-center gap-1.5 mt-2 mb-4">
                <MapPin className="h-3 w-3 text-muted-foreground/50" />
                <span className="text-xs text-muted-foreground/50">Lima, Perú</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Entrepreneur obsessionado con la brecha de oportunidades entre estudiantes de
                LATAM y el resto del mundo. Construyendo MoonJab para cerrarla.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                {['Product', 'AI', 'Growth', 'LATAM'].map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 text-[11px] rounded-full bg-primary/[0.06] text-primary border border-primary/10 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
            className="mt-10 p-6 rounded-2xl border border-dashed border-border bg-muted/20 text-center max-w-sm mx-auto"
          >
            <p className="text-sm font-medium mb-1">¿Quieres unirte?</p>
            <p className="text-xs text-muted-foreground mb-3">
              Estamos construyendo el equipo que llevará MoonJab a toda LATAM.
            </p>
            <a href="mailto:hey@moonjab.com">
              <Button variant="outline" size="sm" className="text-xs h-8 gap-1.5">
                hey@moonjab.com <ChevronRight className="h-3 w-3" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-28 bg-muted/30 border-t border-border/30">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              ¿Quieres ser parte de esta historia?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Únete a los 10,000+ estudiantes que ya están construyendo su carrera con MoonJab.
              Empieza gratis hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link to="/registro">
                <Button size="lg" className="h-11 px-8 text-sm font-semibold gap-2 shadow-clovely-md">
                  Comenzar gratis <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="h-11 px-8 text-sm gap-2">
                  Ver planes
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <OfficialLogo size="sm" animated={false} />
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Volver al inicio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default About;
