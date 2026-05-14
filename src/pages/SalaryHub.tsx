import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Search } from 'lucide-react';
import { SALARY_ROLES, SALARY_COUNTRIES, SALARY_CATEGORIES } from '@/data/salaries';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto gana un profesional en LATAM?',
      acceptedAnswer: { '@type': 'Answer', text: 'Los salarios varían significativamente por país, profesión y nivel de experiencia. Un desarrollador web junior en Perú puede ganar S/ 1,800–2,800 mensuales, mientras que un senior puede alcanzar S/ 6,000–10,000. En México, los rangos son $12,000–70,000 MXN. Consulta nuestras guías por rol y país para datos específicos.' },
    },
    {
      '@type': 'Question',
      name: '¿Cómo puedo negociar mejor mi salario en LATAM?',
      acceptedAnswer: { '@type': 'Answer', text: 'La clave es conocer el rango de mercado para tu rol, nivel y país antes de negociar. Investiga en portales de empleo, habla con colegas del sector y usa herramientas como MoonJab para prepararte. Presenta logros cuantificables y sé específico sobre el valor que aportas.' },
    },
  ],
};

const SalaryHub = () => {
  const roles = Object.values(SALARY_ROLES);
  const countries = Object.entries(SALARY_COUNTRIES);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Guía de Salarios en LATAM 2025 — Por Rol y País"
        description="Cuánto gana cada profesión en Perú, México, Colombia, Argentina y Chile. Rangos salariales actualizados 2025 para todos los niveles de experiencia."
        path="/salario"
        keywords="salarios LATAM 2025, cuánto gana, sueldo por profesión, salarios Peru Mexico Colombia Argentina Chile, rangos salariales"
        breadcrumbs={[{ name: 'Guía de Salarios', url: 'https://moonjab.com/salario' }]}
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
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              Datos actualizados 2025
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5">
              Guía de salarios en LATAM 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Rangos salariales reales para las profesiones más demandadas en Perú, México, Colombia, Argentina y Chile. Por nivel de experiencia, empresa y ciudad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/registro">
                <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                  Preparar mi entrevista gratis
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
            <div><p className="text-2xl font-bold text-primary">{roles.length}</p><p className="text-xs text-muted-foreground mt-1">Profesiones analizadas</p></div>
            <div><p className="text-2xl font-bold text-primary">5</p><p className="text-xs text-muted-foreground mt-1">Países de LATAM</p></div>
            <div><p className="text-2xl font-bold text-primary">3</p><p className="text-xs text-muted-foreground mt-1">Niveles de experiencia</p></div>
            <div><p className="text-2xl font-bold text-primary">2025</p><p className="text-xs text-muted-foreground mt-1">Datos actualizados</p></div>
          </div>
        </div>
      </section>

      {/* Roles grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 mb-3">
            <Search className="h-4 w-4 text-primary" />
            <h2 className="text-2xl font-bold">Salarios por profesión</h2>
          </div>
          <p className="text-muted-foreground mb-10">Selecciona tu profesión para ver rangos detallados por país y nivel de experiencia.</p>

          {SALARY_CATEGORIES.map(cat => {
            const catRoles = roles.filter(r => r.category === cat.id);
            if (!catRoles.length) return null;
            return (
              <div key={cat.id} className="mb-10">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  {cat.emoji} {cat.label}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catRoles.map((role, i) => (
                    <motion.div key={role.slug} initial="hidden" whileInView="visible" viewport={{ once: true }}
                      variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.05 } } }}>
                      <Link to={`/salario/${role.slug}`}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:bg-primary/5 transition-all">
                        <span className="text-2xl">{role.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm group-hover:text-primary transition-colors">{role.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{role.category}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {countries.slice(0, 3).map(([slug, c]) => (
                              <span key={slug} className="text-xs">{c.flag}</span>
                            ))}
                            <span className="text-xs text-muted-foreground ml-1">+{countries.length - 3} países</span>
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

      {/* Country quick nav */}
      <section className="py-14 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold mb-6">Explora salarios por país</h2>
          <div className="grid sm:grid-cols-5 gap-3">
            {countries.map(([, c]) => (
              <div key={c.name} className="flex items-center justify-center gap-2 p-3 rounded-xl border border-border/40 bg-background text-sm font-medium">
                <span className="text-xl">{c.flag}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Selecciona cualquier rol arriba y elige el país para ver datos específicos.</p>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold mb-6">¿Por qué conocer los salarios del mercado?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: 'Negocia con confianza', body: 'Conocer el rango de mercado te da base sólida para pedir el salario que mereces. El 80% de los profesionales en LATAM nunca negocian porque no saben el rango real.' },
              { title: 'Evalúa ofertas laborales', body: 'Cuando recibes una oferta, ¿es buena, promedio o baja para tu perfil y país? Sin datos de mercado, es difícil tomar la decisión correcta.' },
              { title: 'Planifica tu carrera', body: 'Entender qué habilidades y especializaciones incrementan el salario te ayuda a priorizar dónde invertir tu tiempo y energía de aprendizaje.' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                className="p-5 rounded-xl border border-border/40 bg-card">
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
          <h2 className="text-3xl font-bold mb-4">Prepárate para negociar tu próximo salario</h2>
          <p className="text-muted-foreground mb-8">MoonJab te ayuda a crear el CV y preparar las respuestas para conseguir el trabajo y el salario que mereces.</p>
          <Link to="/registro">
            <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
              Empezar gratis <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
            <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
            <Link to="/interview-prep" className="hover:text-foreground">Simulador Entrevistas</Link>
            <Link to="/preguntas-de-entrevista" className="hover:text-foreground">Preguntas Entrevista</Link>
            <Link to="/plantillas-cv" className="hover:text-foreground">Plantillas CV</Link>
            <Link to="/verificador-ats" className="hover:text-foreground">Verificador ATS</Link>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalaryHub;
