import { SEOHead } from '@/components/SEOHead';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, FileText, Zap, Shield, Download, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CVBuilderLanding = () => {
  const features = [
    { icon: Zap, title: 'Optimización ATS automática', desc: 'La IA analiza tu CV y lo optimiza para pasar los filtros automáticos de las empresas más grandes de LATAM.' },
    { icon: FileText, title: 'Plantillas profesionales', desc: 'Elige entre Harvard, Modern, Minimal, Professional y más. Diseñadas por expertos en RRHH.' },
    { icon: Star, title: 'Sugerencias con IA', desc: 'Recibe sugerencias inteligentes de palabras clave, redacción y estructura para cada sección de tu CV.' },
    { icon: Download, title: 'Exporta en PDF', desc: 'Descarga tu currículum en PDF de alta calidad, listo para postular. Compatible con todos los portales de empleo.' },
    { icon: Shield, title: 'Diseñado para estudiantes', desc: 'Funciona incluso si no tienes experiencia laboral. Resalta logros académicos, proyectos y habilidades.' },
    { icon: ChevronRight, title: 'Listo en minutos', desc: 'Crea tu CV profesional en menos de 10 minutos. Sin plantillas genéricas. Sin complicaciones.' },
  ];

  const steps = [
    { num: '01', title: 'Ingresa tu información', desc: 'Completa tu perfil con tu formación, habilidades, proyectos y experiencias. Sin formularios complicados.' },
    { num: '02', title: 'La IA optimiza tu CV', desc: 'Nuestro motor de inteligencia artificial analiza tu información y genera sugerencias para maximizar tu score ATS.' },
    { num: '03', title: 'Elige tu plantilla y descarga', desc: 'Selecciona la plantilla que mejor se adapte a tu industria y descarga tu CV en PDF profesional.' },
  ];

  const faqs = [
    { q: '¿Qué es un CV optimizado para ATS?', a: 'Un CV optimizado para ATS (Applicant Tracking System) está diseñado para superar los filtros automáticos que usan las empresas para preseleccionar candidatos. El CV builder de MoonJab usa IA para asegurarse de que tu currículum tenga las palabras clave correctas, el formato adecuado y la estructura que los sistemas ATS pueden leer.' },
    { q: '¿Puedo crear un CV sin experiencia laboral?', a: 'Absolutamente. El CV builder de MoonJab está especialmente diseñado para estudiantes universitarios y recién egresados sin experiencia. Te ayuda a destacar tus logros académicos, proyectos, habilidades y actividades extracurriculares para crear un CV competitivo.' },
    { q: '¿Cuánto cuesta crear un CV con MoonJab?', a: 'MoonJab tiene un plan gratuito que incluye acceso al CV builder con la plantilla Creativo. El Plan Premium ($5 USD/mes) incluye todas las plantillas, análisis IA ilimitado y exportación PDF sin límites.' },
    { q: '¿El CV se puede personalizar para cada trabajo?', a: 'Sí. Puedes crear múltiples versiones de tu CV y adaptar cada una a diferentes ofertas laborales. La IA de MoonJab analiza la descripción del puesto y sugiere ajustes para maximizar tu compatibilidad.' },
    { q: '¿En qué formatos puedo descargar mi CV?', a: 'Puedes descargar tu CV en PDF de alta calidad. El formato PDF es el más aceptado por sistemas ATS y reclutadores en toda Latinoamérica.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MoonJab CV Builder',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://moonjab.com/cv-builder',
    description: 'Constructor de currículum con IA optimizado para ATS para estudiantes universitarios en LATAM.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@id': 'https://moonjab.com/#organization' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="CV Builder con IA — Crear Currículum ATS para Estudiantes"
        description="Crea tu CV profesional con IA en minutos. Optimizado para ATS, plantillas profesionales y análisis IA. Diseñado para estudiantes en Perú, México, Colombia y LATAM."
        path="/cv-builder"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/30">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <OfficialLogo size="md" to="/" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-sm h-8">Iniciar sesión</Button>
            </Link>
            <Link to="/registro">
              <Button size="sm" className="text-sm h-8 px-4">Comenzar gratis</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid pointer-events-none" />
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="mx-auto max-w-3xl px-6 text-center relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-medium text-primary mb-6">
              <FileText className="h-3 w-3" />
              CV Builder con Inteligencia Artificial
            </div>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6 } } }}
            className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight tracking-tight mb-5"
          >
            Crea tu <span className="text-primary">CV optimizado para ATS</span> con Inteligencia Artificial
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } } }}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8"
          >
            Crea un currículum vitae profesional en minutos. Nuestra IA analiza tu perfil, sugiere mejoras y genera un CV que supera los filtros automáticos de las empresas más grandes de Perú, México, Colombia y toda LATAM.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.3 } } }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/registro">
              <Button size="lg" className="h-12 px-7 text-sm font-semibold gap-2">
                Crear mi CV gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/guest-start">
              <Button variant="outline" size="lg" className="h-12 px-7 text-sm gap-2">
                Probar sin cuenta
              </Button>
            </Link>
          </motion.div>

          <p className="text-xs text-muted-foreground mt-4">
            <Check className="inline h-3 w-3 text-primary mr-1" />Gratis para empezar &nbsp;·&nbsp;
            <Check className="inline h-3 w-3 text-primary mr-1" />Sin tarjeta de crédito
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Todo lo que necesitas para crear un CV profesional con IA
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              El CV builder de MoonJab combina diseño profesional con optimización ATS automática para maximizar tus posibilidades de ser llamado a entrevista.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 rounded-xl border border-border/40 bg-card card-premium group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/18 group-hover:scale-105 transition-all duration-300">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Cómo crear tu currículum ATS con MoonJab en 3 pasos
            </h2>
            <p className="text-muted-foreground">
              De cero a CV profesional optimizado en menos de 10 minutos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary/20 mb-3">{step.num}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MoonJab for students */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                El mejor CV builder para estudiantes universitarios en LATAM
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                La mayoría de estudiantes en Perú, México, Colombia, Argentina y Chile cometen los mismos errores al crear su currículum: formato incorrecto para ATS, falta de palabras clave, y no saber cómo presentar sus logros académicos como si fueran experiencia laboral.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MoonJab resuelve exactamente ese problema. Nuestra IA está entrenada para ayudar a estudiantes sin experiencia a crear CVs que compiten con candidatos experimentados, destacando proyectos, habilidades, logros académicos y actividades extracurriculares de manera estratégica.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Funciona para estudiantes sin experiencia laboral',
                  'Optimizado para ATS de empresas en LATAM',
                  'Plantillas adaptadas a estándares internacionales',
                  'Compatible con LinkedIn, Indeed, Computrabajo y más',
                  'Disponible en español para toda Latinoamérica',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border/40 bg-card p-7 space-y-4">
              <h3 className="font-bold text-lg">¿Por qué optimizar tu CV para ATS?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                El <strong>75% de los CVs</strong> son rechazados por sistemas ATS antes de que un reclutador los vea. Empresas como BBVA, Deloitte, McKinsey, Google y Microsoft usan estos sistemas para filtrar miles de aplicaciones automáticamente.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Un CV optimizado para ATS tiene el formato correcto, las palabras clave adecuadas y la estructura que estos sistemas pueden leer. Con MoonJab, tu CV es analizado y optimizado automáticamente para cada tipo de puesto.
              </p>
              <Link to="/blog/errores-cv-evitar" className="text-sm text-primary hover:underline flex items-center gap-1">
                Lee: Errores de CV que debes evitar <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-10">
            Preguntas frecuentes sobre el CV Builder con IA de MoonJab
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border/40 bg-card p-6"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Country-specific pages */}
      <section className="py-12 sm:py-16 border-y border-border/30">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-lg font-semibold mb-2">CV Builder disponible para tu país</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Guías especializadas con las empresas, formatos y estándares del mercado laboral de cada país.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { flag: '🇵🇪', name: 'Perú', slug: 'peru' },
              { flag: '🇲🇽', name: 'México', slug: 'mexico' },
              { flag: '🇨🇴', name: 'Colombia', slug: 'colombia' },
              { flag: '🇦🇷', name: 'Argentina', slug: 'argentina' },
              { flag: '🇨🇱', name: 'Chile', slug: 'chile' },
            ].map(({ flag, name, slug }) => (
              <Link
                key={slug}
                to={`/cv-builder/${slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium"
              >
                <span>{flag}</span> CV Builder {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-muted/30 border-t border-border/30">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Crea tu CV optimizado para ATS ahora — es gratis
          </h2>
          <p className="text-muted-foreground mb-7 max-w-md mx-auto">
            Únete a más de 10,000 estudiantes en LATAM que ya usan MoonJab para destacar profesionalmente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-7 text-sm font-semibold gap-2">
                Crear mi CV gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/interview-prep">
              <Button variant="outline" size="lg" className="h-12 px-7 text-sm gap-2">
                Ver simulador de entrevistas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2024 MoonJab. Todos los derechos reservados.</p>
          <nav className="flex gap-5 text-xs text-muted-foreground flex-wrap justify-center">
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <Link to="/interview-prep" className="hover:text-foreground transition-colors">Simulador de Entrevistas</Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Precios</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacidad</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default CVBuilderLanding;
