import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, FileText, Zap, Shield, Download, Star, Users } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const cvBuilderSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://moonjab.com/cv-builder#app',
  name: 'MoonJab CV Builder con IA',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Resume Builder',
  url: 'https://moonjab.com/cv-builder',
  description: 'Crea tu currículum vitae optimizado para ATS con inteligencia artificial. Plantillas profesionales, análisis de keywords y descarga en PDF.',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': 'https://moonjab.com/#organization' },
  inLanguage: 'es',
  featureList: [
    'CV builder optimizado para ATS con IA',
    'Análisis automático de palabras clave',
    'Plantillas profesionales para LATAM',
    'Descarga en PDF de alta calidad',
    'Adaptación del CV por vacante',
    'Sugerencias de mejora en tiempo real',
  ],
};

const FEATURES = [
  { icon: Zap, title: 'IA que optimiza por ti', desc: 'La inteligencia artificial analiza tu información y sugiere mejoras de redacción, keywords y estructura para maximizar tu ATS score.' },
  { icon: Shield, title: 'Optimizado para ATS', desc: 'El 75% de los CVs son rechazados por software antes de llegar a un humano. Nuestro formato garantiza que el tuyo pase todos los filtros.' },
  { icon: Download, title: 'PDF profesional listo', desc: 'Descarga tu CV en PDF de alta calidad, listo para enviar. Formatos compatibles con todos los portales de empleo de LATAM.' },
  { icon: FileText, title: 'Plantillas para LATAM', desc: 'Diseñadas específicamente para el mercado laboral latinoamericano: Perú, México, Colombia, Argentina, Chile y más.' },
];

const STEPS = [
  { n: '01', title: 'Ingresa tu información', desc: 'Completa tu perfil con educación, experiencias, habilidades y logros. La IA te guía en cada sección.' },
  { n: '02', title: 'La IA optimiza tu CV', desc: 'Análisis automático de keywords, mejoras de redacción y optimización ATS en tiempo real.' },
  { n: '03', title: 'Adapta por vacante', desc: 'Pega el anuncio de trabajo y la IA ajusta automáticamente tu CV para maximizar compatibilidad.' },
  { n: '04', title: 'Descarga y postula', desc: 'Exporta tu CV en PDF profesional y empieza a postular con confianza.' },
];

const COUNTRIES = [
  { slug: 'peru', name: 'Perú', flag: '🇵🇪' },
  { slug: 'mexico', name: 'México', flag: '🇲🇽' },
  { slug: 'colombia', name: 'Colombia', flag: '🇨🇴' },
  { slug: 'argentina', name: 'Argentina', flag: '🇦🇷' },
  { slug: 'chile', name: 'Chile', flag: '🇨🇱' },
];

const CVBuilderLanding = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEOHead
      title="CV Builder con IA — Crea tu Currículum Optimizado para ATS"
      description="Crea tu currículum vitae profesional con inteligencia artificial en minutos. Optimizado para ATS, con plantillas para LATAM y descarga en PDF. Gratis para estudiantes en Perú, México, Colombia, Argentina y Chile."
      path="/cv-builder"
      keywords="CV builder con IA, crear currículum vitae ATS, resume builder LATAM, hacer curriculum con inteligencia artificial, optimizar CV ATS, plantillas CV profesional"
      breadcrumbs={[{ name: 'CV Builder', url: 'https://moonjab.com/cv-builder' }]}
      schema={cvBuilderSchema}
    />

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <OfficialLogo size="md" to="/" />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/login"><Button variant="ghost" size="sm" className="h-8 text-sm">Iniciar sesión</Button></Link>
          <Link to="/registro"><Button size="sm" className="h-8 text-sm px-4">Empezar gratis</Button></Link>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={fade}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-medium text-primary mb-6">
            <Zap className="h-3 w-3" />
            Impulsado por inteligencia artificial
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Crea tu CV profesional<br />
            <span className="text-primary">con IA en minutos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            El CV builder que optimiza tu currículum para pasar filtros ATS automáticamente.
            Diseñado para estudiantes y recién egresados en Perú, México, Colombia, Argentina y Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 text-sm font-semibold gap-2">
                Crear mi CV gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/guest-start">
              <Button variant="outline" size="lg" className="h-12 px-8 text-sm">
                Ver demo sin registro
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Sin tarjeta de crédito</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Plan gratuito disponible</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Descarga en PDF</span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Social proof */}
    <section className="py-10 border-y border-border/30">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[{ v: '10K+', l: 'CVs creados' }, { v: '87%', l: 'pasan el ATS' }, { v: '4.9', l: 'valoración media' }].map((s, i) => (
            <div key={i}>
              <p className="text-2xl sm:text-3xl font-bold">{s.v}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Todo lo que necesita tu CV para destacar
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No es solo un editor de texto. Es un sistema de optimización de carreras con IA.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="p-6 rounded-2xl border border-border/40 bg-card hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 bg-muted/30 border-y border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight">¿Cómo funciona el CV builder?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center">
              <div className="text-3xl font-bold text-primary/20 mb-3">{s.n}</div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Country-specific pages */}
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Optimizado para el mercado laboral de tu país
          </h2>
          <p className="text-muted-foreground">Guías y consejos específicos para cada país de LATAM</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {COUNTRIES.map(c => (
            <Link key={c.slug} to={`/cv-builder/${c.slug}`}>
              <Button variant="outline" className="gap-2 h-10 px-5">
                <span>{c.flag}</span> CV Builder para {c.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Tu próximo trabajo empieza con un mejor CV</h2>
        <p className="opacity-90 mb-8 text-lg">Únete a los 10,000+ estudiantes en LATAM que ya crearon su CV con MoonJab</p>
        <Link to="/registro">
          <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold gap-2">
            Crear mi CV gratis <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>

    {/* Blog internal links */}
    <section className="py-16 border-t border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-xl font-bold mb-6 text-center">Guías relacionadas</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { path: '/blog/como-hacer-un-cv-sin-experiencia', title: 'CV sin experiencia laboral', desc: 'Guía paso a paso para estudiantes' },
            { path: '/blog/que-es-ats-y-como-optimizar-tu-cv', title: '¿Qué es ATS?', desc: 'Cómo pasar los filtros automáticos' },
            { path: '/blog/10-errores-en-tu-cv', title: '10 errores en tu CV', desc: 'Que te están costando entrevistas' },
          ].map((a, i) => (
            <Link key={i} to={a.path} className="block p-4 rounded-xl border border-border/40 hover:border-primary/30 hover:bg-muted/40 transition-all">
              <p className="font-semibold text-sm mb-1">{a.title}</p>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <footer className="py-8 border-t border-border/30">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
          <Link to="/terms" className="hover:text-foreground">Términos</Link>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
        </div>
      </div>
    </footer>
  </div>
);

export default CVBuilderLanding;
