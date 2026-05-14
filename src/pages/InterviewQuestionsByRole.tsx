import { SEOHead } from '@/components/SEOHead';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react';
import { INTERVIEW_ROLES, CATEGORY_LABELS, DIFFICULTY_COLORS } from '@/data/interviewQuestions';
import { useState } from 'react';
import type { QuestionCategory } from '@/data/interviewQuestions';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const CATEGORY_COLORS: Record<QuestionCategory, string> = {
  conductual: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  tecnica: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  situacional: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  motivacional: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
};

const InterviewQuestionsByRole = () => {
  const { rol } = useParams<{ rol: string }>();
  const roleData = rol ? INTERVIEW_ROLES[rol] : null;
  const [activeCategory, setActiveCategory] = useState<QuestionCategory | 'todas'>('todas');
  const [expandedHints, setExpandedHints] = useState<Set<number>>(new Set());

  if (!roleData) return <Navigate to="/preguntas-de-entrevista" replace />;

  const allCategories: (QuestionCategory | 'todas')[] = ['todas', 'conductual', 'tecnica', 'situacional', 'motivacional'];
  const filteredQuestions = activeCategory === 'todas'
    ? roleData.questions
    : roleData.questions.filter(q => q.category === activeCategory);

  const toggleHint = (idx: number) => {
    const next = new Set(expandedHints);
    if (next.has(idx)) { next.delete(idx); } else { next.add(idx); }
    setExpandedHints(next);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ...roleData.questions.slice(0, 5).map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.hint },
      })),
      ...roleData.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={roleData.metaTitle}
        description={roleData.metaDesc}
        path={`/preguntas-de-entrevista/${rol}`}
        keywords={roleData.keywords}
        breadcrumbs={[
          { name: 'Preguntas de Entrevista', url: 'https://moonjab.com/preguntas-de-entrevista' },
          { name: roleData.title, url: `https://moonjab.com/preguntas-de-entrevista/${rol}` },
        ]}
        schema={faqSchema}
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

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-5">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/preguntas-de-entrevista" className="hover:text-foreground transition-colors">Preguntas de Entrevista</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{roleData.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{roleData.emoji}</span>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">{roleData.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              {roleData.metaTitle.split('—')[0].trim()}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {roleData.description}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-muted-foreground">{roleData.questions.length} preguntas</span>
              <span className="text-border/60">·</span>
              <span className="text-sm text-muted-foreground">3 niveles de dificultad</span>
              <span className="text-border/60">·</span>
              <span className="text-sm text-muted-foreground">Consejos de respuesta incluidos</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-14 z-40 bg-background/95 backdrop-blur border-b border-border/30 py-3">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat === 'todas' ? `Todas (${roleData.questions.length})` : `${CATEGORY_LABELS[cat]} (${roleData.questions.filter(q => q.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const globalIdx = roleData.questions.indexOf(q);
              const isExpanded = expandedHints.has(globalIdx);
              return (
                <motion.div key={globalIdx} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
                  className="rounded-xl border border-border/40 bg-card overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono text-muted-foreground mt-0.5 flex-shrink-0">{String(globalIdx + 1).padStart(2, '0')}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-sm leading-relaxed mb-3">{q.question}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${CATEGORY_COLORS[q.category]}`}>
                            {CATEGORY_LABELS[q.category]}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${DIFFICULTY_COLORS[q.difficulty]}`}>
                            {q.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-border/30 px-5 py-3">
                    <button
                      onClick={() => toggleHint(globalIdx)}
                      className="flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <Lightbulb className="h-3.5 w-3.5" />
                      {isExpanded ? 'Ocultar consejo' : 'Ver consejo de respuesta'}
                    </button>
                    {isExpanded && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-xs text-muted-foreground leading-relaxed">{q.hint}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hay preguntas para este filtro.</p>
            </div>
          )}
        </div>
      </section>

      {/* Practice CTA */}
      <section className="py-10 bg-primary/5 border-y border-primary/20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-semibold mb-2">¿Listo para practicar en voz alta?</p>
          <p className="text-sm text-muted-foreground mb-4">Leer las preguntas no es suficiente. Practica respondiendo con el simulador de IA de MoonJab y recibe feedback instantáneo.</p>
          <Link to="/registro">
            <Button className="gap-2">Practicar con IA ahora <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 mb-8">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Consejos para la entrevista de {roleData.title.toLowerCase()}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {roleData.tips.map((tip, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                className="p-5 rounded-xl border border-border/40 bg-card">
                <h3 className="font-bold text-sm mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-14 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <h2 className="text-xl font-bold">Errores más comunes en entrevistas de {roleData.title.toLowerCase()}</h2>
          </div>
          <ul className="space-y-3">
            {roleData.commonMistakes.map((mistake, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30">
                <span className="text-amber-500 font-bold text-sm flex-shrink-0">{i + 1}.</span>
                <p className="text-sm leading-relaxed">{mistake}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-8">Preguntas sobre el proceso de selección</h2>
          <div className="space-y-4">
            {roleData.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/40">
                <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related roles */}
      <section className="py-10 border-t border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-base font-semibold text-muted-foreground mb-4">Roles relacionados</h2>
          <div className="flex flex-wrap gap-3">
            {roleData.relatedRoles.map(relSlug => {
              const rel = INTERVIEW_ROLES[relSlug];
              if (!rel) return null;
              return (
                <Link key={relSlug} to={`/preguntas-de-entrevista/${relSlug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-muted/40 transition-all text-sm">
                  <span>{rel.emoji}</span>
                  <span>{rel.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Practica hasta que fluya natural</h2>
          <p className="text-muted-foreground mb-8">
            El simulador de entrevistas de MoonJab te hace las preguntas, escucha tus respuestas y te da feedback específico para mejorar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                Empezar práctica gratis <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to={`/salario/${rol}`}>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Ver salarios del rol
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/preguntas-de-entrevista" className="hover:text-foreground">Preguntas de Entrevista</Link>
            <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
            <Link to="/salario" className="hover:text-foreground">Salarios</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InterviewQuestionsByRole;
