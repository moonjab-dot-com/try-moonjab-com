import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Mic, Brain, BarChart2, RefreshCw, Zap } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const interviewPrepSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://moonjab.com/interview-prep#app',
  name: 'MoonJab Simulador de Entrevistas con IA',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Interview Preparation',
  url: 'https://moonjab.com/interview-prep',
  description: 'Practica entrevistas laborales con inteligencia artificial. Preguntas reales del mercado LATAM, feedback instantáneo y análisis de tus respuestas para conseguir el trabajo que buscas.',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': 'https://moonjab.com/#organization' },
  inLanguage: 'es',
  featureList: [
    'Simulador de entrevistas con IA en español',
    'Preguntas reales del mercado laboral LATAM',
    'Feedback instantáneo en cada respuesta',
    'Análisis de comunicación y confianza',
    'Entrevistas técnicas y conductuales',
    'Historial de sesiones y progreso',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo funciona el simulador de entrevistas con IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El simulador de MoonJab te hace preguntas reales de entrevistas laborales adaptadas a tu sector. Respondes en texto o voz, y la IA analiza el contenido, la estructura y la confianza de tus respuestas para darte feedback accionable inmediatamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El simulador de entrevistas es gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El plan gratuito incluye sesiones de práctica ilimitadas con preguntas conductuales. El plan Premium agrega entrevistas técnicas por rol, análisis avanzado de respuestas y simulaciones de empresas específicas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para qué tipo de entrevistas me prepara MoonJab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MoonJab prepara para entrevistas conductuales (preguntas STAR), técnicas por área (tecnología, marketing, finanzas, ventas), entrevistas en inglés y español, y simulaciones adaptadas al mercado de Perú, México, Colombia, Argentina y Chile.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En cuánto tiempo noto mejoras en mis respuestas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mayoría de usuarios reporta mejoras notables después de 3–5 sesiones de práctica. El feedback de la IA es inmediato, lo que permite corregir errores en tiempo real y construir respuestas más estructuradas en cada sesión.',
      },
    },
  ],
};

const FEATURES = [
  { icon: Brain, title: 'IA que entiende tus respuestas', desc: 'Nuestro modelo analiza el contenido, la estructura STAR, la concisión y la relevancia de cada respuesta para darte sugerencias precisas, no genéricas.' },
  { icon: Mic, title: 'Preguntas del mercado LATAM', desc: 'Base de datos de preguntas reales de empresas en Perú, México, Colombia, Argentina y Chile. Actualizadas con las tendencias de selección de 2026.' },
  { icon: BarChart2, title: 'Feedback con métricas', desc: 'Ve exactamente en qué mejorar: claridad, estructura, ejemplos concretos, uso del método STAR y nivel de confianza expresado en cada respuesta.' },
  { icon: RefreshCw, title: 'Práctica ilimitada', desc: 'Sin límites de sesiones en el plan gratuito. Practica hasta sentirte listo, con diferentes preguntas en cada sesión para maximizar tu preparación.' },
];

const STEPS = [
  { n: '01', title: 'Configura tu sesión', desc: 'Elige tu área (tech, marketing, finanzas, etc.) y el tipo de entrevista: conductual, técnica o mixta.' },
  { n: '02', title: 'Responde las preguntas', desc: 'La IA te hace preguntas reales. Responde en texto o voz, como si fuera una entrevista real.' },
  { n: '03', title: 'Recibe feedback inmediato', desc: 'Análisis detallado de cada respuesta: qué estuvo bien, qué mejorar y cómo reformularlo.' },
  { n: '04', title: 'Itera hasta dominar', desc: 'Repite la sesión con nuevas preguntas. Tu historial muestra el progreso real en cada categoría.' },
];

const InterviewPrepLanding = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEOHead
      title="Simulador de Entrevistas con IA — Prepárate y Consigue el Trabajo"
      description="Practica entrevistas laborales con inteligencia artificial en español. Preguntas reales del mercado LATAM, feedback inmediato y análisis de tus respuestas. Gratis para estudiantes en Perú, México, Colombia, Argentina y Chile."
      path="/interview-prep"
      keywords="simulador de entrevistas con IA, preparar entrevista de trabajo, práctica entrevista laboral, preguntas de entrevista LATAM, cómo responder entrevista trabajo, entrevista conductual método STAR"
      breadcrumbs={[{ name: 'Preparación de Entrevistas', url: 'https://moonjab.com/interview-prep' }]}
      schema={[interviewPrepSchema, faqSchema]}
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
            Feedback en tiempo real con IA
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Practica entrevistas<br />
            <span className="text-primary">y consigue el trabajo</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            El simulador de entrevistas que analiza tus respuestas con IA y te dice exactamente cómo mejorar.
            Preguntas reales del mercado laboral de Perú, México, Colombia, Argentina y Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 text-sm font-semibold gap-2">
                Practicar entrevista gratis
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
            <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Sesiones ilimitadas gratis</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> En español para LATAM</span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Social proof */}
    <section className="py-10 border-y border-border/30">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[{ v: '8K+', l: 'entrevistas simuladas' }, { v: '3.2x', l: 'más callbacks' }, { v: '92%', l: 'se sienten más listos' }].map((s, i) => (
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
            Más que practicar — mejorar de verdad
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            La mayoría de candidatos fracasan en entrevistas por falta de práctica estructurada. MoonJab cambia eso.
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
          <h2 className="text-3xl font-bold tracking-tight">¿Cómo funciona el simulador de entrevistas?</h2>
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

    {/* FAQ */}
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>
        </div>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="p-5 rounded-xl border border-border/40 bg-card">
              <h3 className="font-semibold text-sm mb-2">{faq.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.acceptedAnswer.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Tu próxima entrevista empieza aquí</h2>
        <p className="opacity-90 mb-8 text-lg">Únete a los 8,000+ estudiantes en LATAM que ya practicaron con MoonJab y consiguieron el trabajo</p>
        <Link to="/registro">
          <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold gap-2">
            Empezar a practicar gratis <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>

    {/* Blog internal links */}
    <section className="py-16 border-t border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-xl font-bold mb-6 text-center">Guías para tu entrevista</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { path: '/blog/como-preparar-una-entrevista-tecnica', title: 'Cómo preparar una entrevista técnica', desc: 'Estrategias probadas para destacar en 2026' },
            { path: '/blog/primer-trabajo-estudiante-universitario', title: 'Tu primer trabajo como universitario', desc: 'Guía completa para conseguirlo sin experiencia' },
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

    {/* Also try */}
    <section className="py-12 border-t border-border/30 bg-muted/20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm text-muted-foreground mb-4">¿También necesitas mejorar tu CV?</p>
        <Link to="/cv-builder">
          <Button variant="outline" className="gap-2">
            Probar el CV Builder con IA <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
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

export default InterviewPrepLanding;
