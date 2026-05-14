import { SEOHead } from '@/components/SEOHead';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Mic, MessageSquare, BarChart3, Zap, Star, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const InterviewPrepLanding = () => {
  const features = [
    { icon: Mic, title: 'Entrevistador IA realista', desc: 'Practica con un entrevistador virtual que adapta las preguntas a tu industria, nivel y puesto específico.' },
    { icon: MessageSquare, title: 'Feedback instantáneo', desc: 'Recibe retroalimentación detallada sobre claridad, estructura, evidencia y lenguaje en cada respuesta.' },
    { icon: BarChart3, title: 'Seguimiento de progreso', desc: 'Monitorea tu mejora entre sesiones y detecta exactamente qué áreas de la entrevista necesitas trabajar.' },
    { icon: Zap, title: 'Preguntas personalizadas', desc: 'Preguntas de entrevista generadas según tu CV, la descripción del puesto y la empresa a la que postulas.' },
    { icon: Star, title: 'Método STAR', desc: 'Aprende y practica el método STAR para respuestas conductuales. La técnica que usan los mejores candidatos.' },
    { icon: Target, title: 'Entrevistas técnicas y conductuales', desc: 'Prepárate para todos los tipos de entrevista: comportamental, técnica, caso, fit cultural y más.' },
  ];

  const interviewTypes = [
    { name: 'Entrevistas conductuales', desc: 'Practica preguntas de comportamiento como "Cuéntame sobre un reto que superaste" con el método STAR.' },
    { name: 'Primer empleo y prácticas', desc: 'Preguntas especialmente diseñadas para estudiantes sin experiencia que buscan su primera oportunidad laboral.' },
    { name: 'Entrevistas técnicas', desc: 'Practica entrevistas técnicas para roles de marketing, finanzas, tecnología, RRHH, consultoría y más.' },
    { name: 'Entrevistas en inglés', desc: 'Prepárate para entrevistas en inglés para empresas multinacionales con operaciones en LATAM.' },
  ];

  const faqs = [
    { q: '¿Cómo funciona el simulador de entrevistas con IA de MoonJab?', a: 'El simulador genera preguntas de entrevista personalizadas según tu perfil, industria y el puesto al que postulas. Practicas respondiendo (por texto o voz), la IA evalúa tus respuestas en tiempo real y te da feedback detallado sobre cómo mejorar. Puedes practicar cuantas veces necesites hasta sentirte seguro.' },
    { q: '¿El simulador de entrevistas sirve para estudiantes sin experiencia?', a: 'Sí, está especialmente diseñado para ello. El simulador genera preguntas adaptadas para personas que buscan su primer empleo o prácticas profesionales, destacando logros académicos, proyectos y habilidades en lugar de experiencia laboral.' },
    { q: '¿Para qué tipos de entrevistas sirve MoonJab?', a: 'MoonJab sirve para entrevistas conductuales (behavioral), técnicas, de fit cultural, de caso, y entrevistas para primer empleo o prácticas. Puedes especificar el tipo de puesto y empresa para recibir preguntas más específicas.' },
    { q: '¿Puedo practicar entrevistas por voz con MoonJab?', a: 'Sí. MoonJab ofrece modalidad de entrevista por texto y por voz. La modalidad por voz simula de manera más realista la experiencia de una entrevista presencial o videollamada.' },
    { q: '¿Cuántas entrevistas puedo practicar con el plan gratuito?', a: 'El plan gratuito incluye 3 simulaciones de entrevista por mes. El plan Premium ($5 USD/mes) incluye simulaciones ilimitadas, feedback más detallado y análisis avanzado de tu desempeño.' },
    { q: '¿Cómo me ayuda el feedback de IA a mejorar en entrevistas?', a: 'Después de cada respuesta, la IA evalúa aspectos como claridad, estructura, uso de evidencias concretas, lenguaje corporal (en video) y adecuación cultural. Recibes un puntaje y sugerencias específicas para mejorar, lo que te permite corregir tus errores antes de la entrevista real.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MoonJab Simulador de Entrevistas',
    applicationCategory: 'EducationApplication',
    operatingSystem: 'Web',
    url: 'https://moonjab.com/interview-prep',
    description: 'Simulador de entrevistas laborales con IA para estudiantes universitarios en LATAM. Practica con feedback instantáneo.',
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
        title="Practica Entrevistas Laborales con IA — Prepárate para el Trabajo"
        description="Practica entrevistas de trabajo con IA y recibe feedback instantáneo. Preguntas personalizadas por industria y método STAR. Gratis para estudiantes en LATAM."
        path="/interview-prep"
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
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-medium text-primary mb-6">
              <Mic className="h-3 w-3" />
              Simulador de Entrevistas con Inteligencia Artificial
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight tracking-tight mb-5"
          >
            Practica <span className="text-primary">entrevistas laborales con IA</span> y consigue el trabajo que quieres
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8"
          >
            Simula entrevistas reales con nuestro entrevistador de IA. Recibe feedback instantáneo, mejora tus respuestas y llega a tu próxima entrevista de trabajo con total confianza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/registro">
              <Button size="lg" className="h-12 px-7 text-sm font-semibold gap-2">
                Practicar entrevista gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/guest-start">
              <Button variant="outline" size="lg" className="h-12 px-7 text-sm gap-2">
                Probar sin registrarme
              </Button>
            </Link>
          </motion.div>

          <p className="text-xs text-muted-foreground mt-4">
            <Check className="inline h-3 w-3 text-primary mr-1" />3 entrevistas gratis &nbsp;·&nbsp;
            <Check className="inline h-3 w-3 text-primary mr-1" />Sin tarjeta de crédito
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Todo lo que necesitas para prepararte para una entrevista de trabajo
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Nuestro simulador de entrevistas con IA va más allá de la práctica básica. Te da las herramientas para mejorar sistemáticamente.
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
                className="p-6 rounded-xl border border-border/40 bg-card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview types */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Prepárate para cualquier tipo de entrevista laboral
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Desde entrevistas para primer empleo hasta posiciones senior en empresas multinacionales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {interviewTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-border/40 bg-card"
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {type.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why prepare */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                ¿Por qué practicar entrevistas con IA antes de la entrevista real?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La mayoría de los candidatos que no consiguen el trabajo no es porque no sean buenos — es porque no se prepararon. La nerviosidad, las respuestas vagas y la falta de estructura son los errores más comunes en entrevistas laborales.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Con el simulador de entrevistas de MoonJab, practicas en un entorno seguro donde puedes equivocarte, aprender y mejorar sin consecuencias. Cuando llegues a la entrevista real, ya habrás practicado decenas de preguntas similares y sabrás exactamente qué decir.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Reduce la ansiedad ante entrevistas reales',
                  'Mejora la estructura y claridad de tus respuestas',
                  'Aprende a usar evidencias concretas (método STAR)',
                  'Detecta y corrige tus puntos débiles antes de la entrevista',
                  'Gana confianza con cada práctica',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border/40 bg-card p-7 space-y-4">
              <h3 className="font-bold text-lg">Estadísticas que importan</h3>
              <div className="space-y-3">
                {[
                  { stat: '87%', desc: 'de candidatos que practican con simuladores mejoran su desempeño en entrevistas reales' },
                  { stat: '3x', desc: 'más posibilidades de ser contratado cuando practicas entrevistas antes de la real' },
                  { stat: '10min', desc: 'es suficiente para ver mejoras notables en tus respuestas con el simulador de MoonJab' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-primary flex-shrink-0">{item.stat}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/blog/preguntas-frecuentes-en-entrevistas-de-trabajo" className="text-sm text-primary hover:underline flex items-center gap-1">
                Lee: Preguntas frecuentes en entrevistas de trabajo <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-10">
            Preguntas frecuentes sobre el simulador de entrevistas de MoonJab
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

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-muted/30 border-t border-border/30">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Empieza a practicar entrevistas con IA ahora — es gratis
          </h2>
          <p className="text-muted-foreground mb-7 max-w-md mx-auto">
            Tu próxima entrevista de trabajo puede ser diferente. Prepárate con el simulador de entrevistas de MoonJab.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-7 text-sm font-semibold gap-2">
                Practicar entrevista gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/cv-builder">
              <Button variant="outline" size="lg" className="h-12 px-7 text-sm gap-2">
                Crear mi CV con IA
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
            <Link to="/cv-builder" className="hover:text-foreground transition-colors">CV Builder con IA</Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Precios</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacidad</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default InterviewPrepLanding;
