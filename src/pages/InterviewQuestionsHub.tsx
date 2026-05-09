import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Lightbulb, CheckCircle } from 'lucide-react';
import { INTERVIEW_ROLES } from '@/data/interviewQuestions';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo me preparo para una entrevista de trabajo en LATAM?',
      acceptedAnswer: { '@type': 'Answer', text: 'Para prepararte para una entrevista en LATAM: 1) Investiga la empresa y el rol con 2-3 días de anticipación. 2) Prepara respuestas para las preguntas conductuales más comunes usando la metodología STAR (Situación, Tarea, Acción, Resultado). 3) Practica las preguntas técnicas específicas del rol. 4) Prepara 3-4 preguntas inteligentes para hacerle al entrevistador. 5) Simula la entrevista con herramientas como MoonJab.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son las preguntas más comunes en entrevistas de trabajo?',
      acceptedAnswer: { '@type': 'Answer', text: 'Las preguntas más frecuentes en entrevistas en LATAM son: "Cuéntame sobre ti", "¿Por qué quieres trabajar aquí?", "¿Cuáles son tus fortalezas y debilidades?", "¿Dónde te ves en 5 años?", y preguntas conductuales tipo "Cuéntame de una vez que...". Las preguntas técnicas varían por rol y empresa.' },
    },
  ],
};

const categories = Array.from(new Set(Object.values(INTERVIEW_ROLES).map(r => r.category)));

const InterviewQuestionsHub = () => {
  const roles = Object.values(INTERVIEW_ROLES);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Preguntas de Entrevista por Rol 2025 — Guía LATAM"
        description="Las preguntas más frecuentes en entrevistas de trabajo por profesión en LATAM. Con consejos de respuesta, guía de preparación y práctica con IA."
        path="/preguntas-de-entrevista"
        keywords="preguntas entrevista trabajo LATAM, cómo prepararse entrevista, preguntas frecuentes entrevista Peru Mexico Colombia, guía entrevista laboral"
        breadcrumbs={[{ name: 'Preguntas de Entrevista', url: 'https://moonjab.com/preguntas-de-entrevista' }]}
        schema={schema}
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
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/50 text-xs font-medium text-muted-foreground mb-6">
              <MessageSquare className="h-3.5 w-3.5 text-primary" />
              Actualizado 2025 · Basado en entrevistas reales
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5">
              Preguntas de entrevista por rol
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Las preguntas más frecuentes en entrevistas de trabajo en LATAM, organizadas por profesión. Con consejos de respuesta, errores comunes y guía de preparación.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/registro">
                <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                  Practicar con IA gratis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-y border-border/30 bg-muted/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div><p className="text-2xl font-bold text-primary">{roles.reduce((acc, r) => acc + r.questions.length, 0)}+</p><p className="text-xs text-muted-foreground mt-1">Preguntas disponibles</p></div>
            <div><p className="text-2xl font-bold text-primary">{roles.length}</p><p className="text-xs text-muted-foreground mt-1">Roles cubiertos</p></div>
            <div><p className="text-2xl font-bold text-primary">4</p><p className="text-xs text-muted-foreground mt-1">Tipos de pregunta</p></div>
            <div><p className="text-2xl font-bold text-primary">∞</p><p className="text-xs text-muted-foreground mt-1">Práctica con IA</p></div>
          </div>
        </div>
      </section>

      {/* Roles by category */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold mb-2">Elige tu profesión</h2>
          <p className="text-muted-foreground mb-10">Selecciona tu rol para ver las preguntas más frecuentes con consejos de respuesta.</p>

          {categories.map(cat => {
            const catRoles = roles.filter(r => r.category === cat);
            return (
              <div key={cat} className="mb-10">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">{cat}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catRoles.map((role, i) => (
                    <motion.div key={role.slug} initial="hidden" whileInView="visible" viewport={{ once: true }}
                      variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.05 } } }}>
                      <Link to={`/preguntas-de-entrevista/${role.slug}`}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:bg-primary/5 transition-all">
                        <span className="text-2xl">{role.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm group-hover:text-primary transition-colors">{role.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{role.questions.length} preguntas</p>
                          <div className="flex gap-1 mt-2 flex-wrap">
                            {['conductual', 'tecnica', 'situacional'].map(cat => (
                              <span key={cat} className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground capitalize">{cat}</span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-0.5 flex-shrink-0" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Methodology */}
      <section className="py-14 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 mb-8">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Cómo responder preguntas conductuales: STAR</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { letter: 'S', word: 'Situación', desc: 'Describe el contexto específico. ¿Cuándo fue? ¿En qué empresa o proyecto?' },
              { letter: 'T', word: 'Tarea', desc: 'Explica tu rol y responsabilidad en esa situación concreta.' },
              { letter: 'A', word: 'Acción', desc: 'Detalla exactamente qué hiciste tú. Usa "yo" no "nosotros".' },
              { letter: 'R', word: 'Resultado', desc: 'Cuantifica el impacto. Números, porcentajes, tiempo ahorrado.' },
            ].map(item => (
              <div key={item.letter} className="p-5 rounded-xl bg-background border border-border/40">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-3">{item.letter}</div>
                <p className="font-bold text-sm mb-1">{item.word}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why practice matters */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold mb-8">¿Por qué practicar entrevistas antes del día real?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: 'Reduce la ansiedad', body: 'El nerviosismo en entrevistas viene principalmente de la incertidumbre. Cuando has practicado las respuestas múltiples veces, la ansiedad disminuye significativamente. El cerebro confunde familiaridad con confianza.' },
              { title: 'Activa la memoria bajo presión', body: 'En una entrevista real, el estrés puede bloquear el acceso a tus recuerdos. Practicar en condiciones simuladas entrena el cerebro para recuperar información relevante incluso bajo presión.' },
              { title: 'Identifica tus puntos ciegos', body: 'Practicar en voz alta revela respuestas que creías tener pero que en realidad no están estructuradas. Es mejor descubrirlo en práctica que en el momento de la entrevista real.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                className="p-5 rounded-xl border border-border/40 bg-card">
                <CheckCircle className="h-4 w-4 text-primary mb-3" />
                <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Practica en voz alta con IA</h2>
          <p className="text-muted-foreground mb-8">
            Leer las preguntas no es suficiente. En MoonJab puedes practicar respondiendo en voz alta y recibir feedback inmediato de nuestro coach de IA.
          </p>
          <Link to="/registro">
            <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
              Practicar entrevista gratis <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
            <Link to="/plantillas-cv" className="hover:text-foreground">Plantillas CV</Link>
            <Link to="/salario" className="hover:text-foreground">Guía de salarios</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InterviewQuestionsHub;
