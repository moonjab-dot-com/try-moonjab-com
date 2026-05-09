import { SEOHead } from '@/components/SEOHead';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, CheckCircle, AlertTriangle, Star } from 'lucide-react';
import { CV_TEMPLATES } from '@/data/cvTemplates';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const PRIORITY_STYLES = {
  esencial: { label: 'Esencial', style: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
  recomendada: { label: 'Recomendada', style: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  opcional: { label: 'Opcional', style: 'bg-muted text-muted-foreground' },
};

const CVTemplatesByProfession = () => {
  const { profesion } = useParams<{ profesion: string }>();
  const tplData = profesion ? CV_TEMPLATES[profesion] : null;

  if (!tplData) return <Navigate to="/plantillas-cv" replace />;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tplData.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Cómo hacer un CV de ${tplData.title}`,
    description: tplData.description,
    step: tplData.sections
      .filter(s => s.priority === 'esencial')
      .map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.description,
      })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={tplData.metaTitle}
        description={tplData.metaDesc}
        path={`/plantillas-cv/${profesion}`}
        keywords={tplData.keywords}
        breadcrumbs={[
          { name: 'Plantillas CV', url: 'https://moonjab.com/plantillas-cv' },
          { name: tplData.title, url: `https://moonjab.com/plantillas-cv/${profesion}` },
        ]}
        schema={[faqSchema, howToSchema]}
      />

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <OfficialLogo size="md" to="/" />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login"><Button variant="ghost" size="sm" className="h-8 text-sm">Iniciar sesión</Button></Link>
            <Link to="/registro"><Button size="sm" className="h-8 text-sm px-4">Crear CV gratis</Button></Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-5">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/plantillas-cv" className="hover:text-foreground transition-colors">Plantillas CV</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{tplData.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{tplData.emoji}</span>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">{tplData.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              Plantilla CV para {tplData.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {tplData.description}
            </p>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
              <Star className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/80 leading-relaxed"><span className="font-semibold">Consejo clave:</span> {tplData.cvTip}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV Sections */}
      <section className="py-12 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold mb-2">Estructura del CV de {tplData.title.toLowerCase()}</h2>
          <p className="text-muted-foreground mb-8">Las secciones están ordenadas por prioridad para el mercado laboral LATAM.</p>
          <div className="space-y-4">
            {tplData.sections.map((section, i) => {
              const p = PRIORITY_STYLES[section.priority];
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: i * 0.04 } } }}
                  className="p-5 rounded-xl bg-background border border-border/40">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-bold text-sm">{section.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.style}`}>{p.label}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{section.description}</p>
                      <div className="p-3 rounded-lg bg-muted/50 border border-border/30">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Ejemplo:</p>
                        <p className="text-xs text-foreground/80 leading-relaxed italic">"{section.example}"</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key skills */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold mb-5">Habilidades esenciales para incluir en el CV de {tplData.title.toLowerCase()}</h2>
          <div className="flex flex-wrap gap-2">
            {tplData.keySkills.map(skill => (
              <span key={skill} className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                <CheckCircle className="h-3 w-3" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-14 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <h2 className="text-xl font-bold">Errores más comunes en CVs de {tplData.title.toLowerCase()}</h2>
          </div>
          <ul className="space-y-3">
            {tplData.commonMistakes.map((mistake, i) => (
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
          <h2 className="text-2xl font-bold mb-8">Preguntas frecuentes sobre el CV de {tplData.title.toLowerCase()}</h2>
          <div className="space-y-4">
            {tplData.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/40">
                <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related professions */}
      <section className="py-10 border-t border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-base font-semibold text-muted-foreground mb-4">Plantillas relacionadas</h2>
          <div className="flex flex-wrap gap-3">
            {tplData.relatedProfessions.map(relSlug => {
              const rel = CV_TEMPLATES[relSlug];
              if (!rel) return null;
              return (
                <Link key={relSlug} to={`/plantillas-cv/${relSlug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-muted/40 transition-all text-sm">
                  <span>{rel.emoji}</span>
                  <span>{rel.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Crea tu CV de {tplData.title.toLowerCase()} con IA
          </h2>
          <p className="text-muted-foreground mb-8">
            En MoonJab construyes tu CV con IA, aplicando exactamente esta estructura. Descarga en PDF en minutos. Gratis para estudiantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                Crear mi CV gratis <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to={`/preguntas-de-entrevista`}>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Preparar entrevista
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/plantillas-cv" className="hover:text-foreground">Todas las plantillas</Link>
            <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
            <Link to="/salario" className="hover:text-foreground">Salarios</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CVTemplatesByProfession;
