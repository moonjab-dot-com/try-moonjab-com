import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, CheckCircle } from 'lucide-react';
import { CV_TEMPLATES, CV_CATEGORIES } from '@/data/cvTemplates';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué debe incluir un currículum vitae en LATAM?',
        acceptedAnswer: { '@type': 'Answer', text: 'Un CV en LATAM debe incluir: encabezado con datos de contacto y LinkedIn, resumen o perfil profesional de 3-4 líneas, experiencia laboral cronológica inversa con logros medibles, educación, habilidades técnicas y herramientas, idiomas y certificaciones relevantes. Para primer empleo, agrega proyectos académicos y actividades extracurriculares.' },
      },
      {
        '@type': 'Question',
        name: '¿Cuántas páginas debe tener un CV en LATAM?',
        acceptedAnswer: { '@type': 'Answer', text: '1 página para menos de 5 años de experiencia, máximo 2 páginas para más. Los reclutadores de empresas top en LATAM prefieren CVs concisos que vayan directo al punto. La excepción son los CVs académicos o científicos (curriculum vitae académico) que pueden ser más extensos.' },
      },
      {
        '@type': 'Question',
        name: '¿Debo incluir foto en el CV en Perú, México o Colombia?',
        acceptedAnswer: { '@type': 'Answer', text: 'En Perú y Colombia es práctica común incluir foto profesional. En México y Argentina, las empresas modernas prefieren CVs sin foto. En Chile, no es obligatorio. Si incluyes foto, usa fondo neutro, vestimenta formal y buena iluminación. Nunca uses selfies o fotos informales.' },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Plantillas de CV por Profesión — Formato ATS LATAM 2025',
    url: 'https://moonjab.com/plantillas-cv',
    description: 'Plantillas de currículum vitae optimizadas para ATS por profesión para el mercado laboral en Perú, México, Colombia y Chile.',
    publisher: { '@id': 'https://moonjab.com/#organization' },
  },
];

const CVTemplatesHub = () => {
  const templates = Object.values(CV_TEMPLATES);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Plantillas de CV por Profesión — Formato ATS LATAM 2025"
        description="Plantillas de currículum vitae optimizadas para ATS por profesión. Estructura, secciones esenciales y ejemplos para el mercado laboral en Perú, México, Colombia y Chile."
        path="/plantillas-cv"
        keywords="plantillas CV, curriculum vitae formato, plantilla currículum LATAM, CV ATS optimizado, formato CV Peru Mexico Colombia, plantilla hoja de vida"
        breadcrumbs={[{ name: 'Plantillas CV', url: 'https://moonjab.com/plantillas-cv' }]}
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
              <FileText className="h-3.5 w-3.5 text-primary" />
              Optimizadas para ATS · Actualizadas 2025
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5">
              Plantillas de CV por profesión
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Estructura, secciones esenciales y ejemplos reales de CV para cada profesión. Optimizadas para pasar filtros ATS y destacar ante reclutadores en LATAM.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/registro">
                <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                  Crear mi CV con IA gratis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/cv-builder">
                <Button variant="outline" size="lg" className="h-12 px-8">
                  Ver CV Builder
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What ATS-optimized means */}
      <section className="py-12 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-lg font-bold mb-5">¿Qué significa que un CV sea "ATS-optimizado"?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Sin tablas ni columnas dobles', body: 'Los sistemas ATS no pueden leer formatos complejos. Usa una sola columna con texto simple y bien estructurado.' },
              { title: 'Keywords del rol incluidas', body: 'Los ATS buscan palabras clave de la descripción del trabajo. Incluye los términos exactos que usa la empresa en su oferta.' },
              { title: 'Formato de archivo correcto', body: 'Guarda siempre en PDF desde Word, Google Docs o nuestra herramienta. Nunca envíes un archivo .pages o .odt.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/40">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates grid by category */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold mb-2">Elige tu profesión</h2>
          <p className="text-muted-foreground mb-10">Cada plantilla incluye: secciones recomendadas, ejemplos reales, errores comunes a evitar y consejos específicos del rol.</p>

          {CV_CATEGORIES.map(cat => {
            const catTemplates = templates.filter(t => t.category === cat.id);
            if (!catTemplates.length) return null;
            return (
              <div key={cat.id} className="mb-10">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  {cat.emoji} {cat.label}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catTemplates.map((tpl, i) => (
                    <motion.div key={tpl.slug} initial="hidden" whileInView="visible" viewport={{ once: true }}
                      variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.05 } } }}>
                      <Link to={`/plantillas-cv/${tpl.slug}`}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:bg-primary/5 transition-all h-full">
                        <span className="text-2xl">{tpl.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm group-hover:text-primary transition-colors">{tpl.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{tpl.cvTip}</p>
                          <p className="text-xs text-primary mt-2 font-medium">{tpl.sections.filter(s => s.priority === 'esencial').length} secciones esenciales</p>
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

      {/* Universal CV tips */}
      <section className="py-14 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold mb-8">Reglas de oro del CV en LATAM</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { rule: '1 a 2 páginas máximo', detail: 'Junior/sin experiencia: 1 página. Más de 5 años: hasta 2. Los reclutadores tienen < 10 segundos para tu CV.' },
              { rule: 'Logros, no funciones', detail: '"Incrementé las ventas en 28%" > "Responsable de las ventas". Cada punto debe responder: ¿cuál fue el resultado?' },
              { rule: 'Email profesional', detail: 'nombre.apellido@gmail.com. Nunca diminutivos, fechas de nacimiento ni apodos. El email es tu primera impresión.' },
              { rule: 'PDF siempre', detail: 'Guarda en PDF para que el formato se vea igual en cualquier computadora. Solo envía Word si la empresa específicamente lo pide.' },
              { rule: 'LinkedIn actualizado', detail: 'Asegúrate de que tu LinkedIn esté alineado con el CV. Los reclutadores siempre lo buscan. URL personalizada obligatoria.' },
              { rule: 'Adapta para cada vacante', detail: 'Ajusta el resumen y las keywords según la descripción del trabajo. El CV "genérico para todos" pasa menos filtros ATS.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/40">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                <div>
                  <p className="font-semibold text-sm mb-1">{item.rule}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Prefieres que la IA construya tu CV?</h2>
          <p className="text-muted-foreground mb-8">
            En MoonJab puedes crear tu CV con inteligencia artificial, descargar en PDF y prepararte para las entrevistas — todo en un solo lugar.
          </p>
          <Link to="/registro">
            <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
              Crear mi CV con IA <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
            <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
            <Link to="/verificador-ats" className="hover:text-foreground">Verificador ATS</Link>
            <Link to="/interview-prep" className="hover:text-foreground">Simulador Entrevistas</Link>
            <Link to="/preguntas-de-entrevista" className="hover:text-foreground">Entrevistas</Link>
            <Link to="/salario" className="hover:text-foreground">Salarios</Link>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CVTemplatesHub;
