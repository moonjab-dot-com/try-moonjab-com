import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Newspaper, Globe, Users, Zap, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'MoonJab — Sala de Prensa y Kit de Medios',
  url: 'https://moonjab.com/prensa',
  description: 'Sala de prensa de MoonJab. Descarga logos, encuentra ángulos de cobertura y contacta al equipo de comunicaciones.',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://moonjab.com/#organization',
    name: 'MoonJab',
    url: 'https://moonjab.com',
    logo: { '@type': 'ImageObject', url: 'https://moonjab.com/moonjab-logo.png' },
    foundingDate: '2024',
    description: 'Plataforma de empleabilidad con inteligencia artificial para estudiantes universitarios y jóvenes profesionales en Latinoamérica.',
    areaServed: ['PE', 'MX', 'CO', 'AR', 'CL'],
    sameAs: [
      'https://www.instagram.com/trymoonjab',
      'https://www.linkedin.com/company/moonjab',
      'https://x.com/MoonJabdotcom',
      'https://www.youtube.com/@TryMoonJab',
    ],
  },
};

const STORY_ANGLES = [
  {
    headline: 'La IA que ayuda a estudiantes de LATAM a conseguir su primer empleo',
    summary: 'Millones de universitarios en Latinoamérica egresan sin saber cómo hacer un CV ni cómo prepararse para una entrevista. MoonJab usa inteligencia artificial para democratizar el acceso a herramientas de empleabilidad que antes solo tenían quienes podían pagar un coach de carrera.',
  },
  {
    headline: 'El 75% de los CVs en LATAM son rechazados por un algoritmo antes de que los vea un humano',
    summary: 'Los sistemas ATS (Applicant Tracking Systems) filtran automáticamente candidatos en empresas como BCP, Falabella, BBVA y Bancolombia. MoonJab crea CVs que pasan estos filtros y equipa a los jóvenes con las herramientas para competir en igualdad de condiciones.',
  },
  {
    headline: 'Startup edtech peruana que quiere resolver el desempleo juvenil en América Latina',
    summary: 'El desempleo juvenil en LATAM supera el 20% en varios países. MoonJab apunta a reducir la brecha de empleabilidad combinando IA con conocimiento profundo del mercado laboral regional.',
  },
  {
    headline: 'Cómo la IA está cambiando la búsqueda de empleo para la generación Z en Latinoamérica',
    summary: 'La generación Z busca trabajo de forma diferente: espera personalización, feedback instantáneo y acceso digital. MoonJab es la primera plataforma diseñada específicamente para este comportamiento en el mercado hispanohablante.',
  },
];

const QUICK_FACTS = [
  { label: 'Fundación', value: '2024' },
  { label: 'Mercado', value: 'LATAM · 5 países' },
  { label: 'Idioma', value: 'Español' },
  { label: 'Precio base', value: 'Gratis · $5/mes Pro' },
  { label: 'Tecnología', value: 'React · TypeScript · Supabase · LLMs' },
  { label: 'Contacto prensa', value: 'hey@moonjab.com' },
];

const LOGOS = [
  { name: 'Logo principal (PNG)', file: '/moonjab-logo.png', hint: 'Fondo oscuro o neutro' },
  { name: 'Logo completo claro (PNG)', file: '/src/assets/moonjab-full-light.png', hint: 'Para fondos oscuros' },
  { name: 'Logo completo esmeralda (PNG)', file: '/src/assets/moonjab-full-emerald.png', hint: 'Versión de marca' },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      onClick={handle}
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
      title="Copiar"
    >
      <Copy className="h-3.5 w-3.5" />
      {copied ? 'Copiado' : 'Copiar'}
    </button>
  );
}

const Prensa = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEOHead
      title="Sala de Prensa — Kit de Medios y Recursos para Periodistas"
      description="Sala de prensa de MoonJab: logos, datos de la empresa, ángulos de cobertura y contacto de prensa. La plataforma de empleabilidad con IA #1 para estudiantes en LATAM."
      path="/prensa"
      keywords="MoonJab prensa, sala de prensa MoonJab, kit de medios, press kit, MoonJab medios, cobertura MoonJab, startup LATAM empleo IA"
      breadcrumbs={[{ name: 'Sala de Prensa', url: 'https://moonjab.com/prensa' }]}
      schema={schema}
    />

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <OfficialLogo size="md" to="/" />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/about"><Button variant="ghost" size="sm" className="h-8 text-sm">Nosotros</Button></Link>
          <Link to="/registro"><Button size="sm" className="h-8 text-sm px-4">Probar gratis</Button></Link>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={fade}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/50 text-xs font-medium text-muted-foreground mb-6">
            <Newspaper className="h-3.5 w-3.5 text-primary" />
            Sala de Prensa · Media Kit
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5">
            MoonJab en los medios
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Recursos para periodistas, bloggers y creadores de contenido. Logos de alta resolución, datos de la empresa, ángulos de historia y contacto directo con el equipo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hey@moonjab.com?subject=Cobertura%20periodística%20MoonJab">
              <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                <Mail className="h-4 w-4" />
                Contactar equipo de prensa
              </Button>
            </a>
            <a href="#recursos-marca">
              <Button variant="outline" size="lg" className="h-12 px-8 gap-2">
                <Download className="h-4 w-4" />
                Descargar logos
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Quick facts */}
    <section className="py-10 border-y border-border/30 bg-muted/30">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6 text-center">Datos rápidos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {QUICK_FACTS.map((fact, i) => (
            <div key={i} className="text-center">
              <p className="text-xs text-muted-foreground mb-1">{fact.label}</p>
              <p className="font-semibold text-sm">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Brand story */}
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold mb-6">Nuestra historia</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground space-y-4">
          <p>
            <strong className="text-foreground">MoonJab nació en 2024</strong> con una premisa simple: en Latinoamérica, conseguir trabajo es difícil no porque los jóvenes no estén preparados, sino porque nadie les enseñó a presentarse. Un estudiante universitario en Lima, Ciudad de México o Bogotá enfrenta las mismas empresas globales que uno de Harvard — pero sin las mismas herramientas.
          </p>
          <p>
            El problema tiene dos caras. Por un lado, <strong className="text-foreground">el 75% de los CVs son descartados automáticamente</strong> por sistemas ATS (Applicant Tracking Systems) que las grandes empresas de LATAM usan para manejar miles de postulaciones. Un CV creado en Canva, con columnas dobles o sin las palabras clave correctas, nunca llega a manos de un humano. Por el otro, la mayoría de los jóvenes en LATAM llegan a su primera entrevista sin haber practicado nunca, enfrentando preguntas para las que nadie los preparó.
          </p>
          <p>
            MoonJab resuelve ambas cosas. Nuestro <strong className="text-foreground">CV Builder con IA</strong> crea currículums optimizados para ATS desde el primer trazo, con plantillas diseñadas para el mercado laboral de cada país. Nuestro <strong className="text-foreground">Simulador de Entrevistas</strong> usa inteligencia artificial para generar preguntas personalizadas según industria y puesto, y da feedback inmediato sobre cada respuesta usando el método STAR.
          </p>
          <p>
            Todo en español. Todo diseñado para LATAM. Todo accesible desde $0.
          </p>
        </div>
      </div>
    </section>

    {/* Story angles */}
    <section className="py-14 bg-muted/30 border-y border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold mb-3">Ángulos de cobertura sugeridos</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">Ideas de historia para periodistas y bloggers. Podemos proveer datos, citas y fuentes para cada uno.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {STORY_ANGLES.map((angle, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } } }}
              className="p-6 rounded-xl border border-border/40 bg-background"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-sm leading-snug">"{angle.headline}"</h3>
                <CopyButton text={angle.headline} />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{angle.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Brand assets */}
    <section id="recursos-marca" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold mb-3">Recursos de marca</h2>
        <p className="text-muted-foreground mb-10 max-w-xl">Usa estos materiales para artículos, reseñas y contenido sobre MoonJab. Por favor no modifiques los colores ni proporciones del logo.</p>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {LOGOS.map((logo, i) => (
            <div key={i} className="rounded-xl border border-border/40 overflow-hidden bg-card">
              <div className="h-28 flex items-center justify-center bg-muted/50 p-6">
                <img src={logo.file} alt={logo.name} className="max-h-14 max-w-full object-contain" />
              </div>
              <div className="p-4">
                <p className="font-medium text-sm mb-1">{logo.name}</p>
                <p className="text-xs text-muted-foreground mb-3">{logo.hint}</p>
                <a href={logo.file} download className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                  <Download className="h-3.5 w-3.5" />
                  Descargar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Brand colors */}
        <h3 className="font-bold mb-4">Colores de marca</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'Esmeralda (primario)', hex: '#10b981', textDark: false },
            { name: 'Oscuro', hex: '#0f172a', textDark: false },
            { name: 'Claro', hex: '#f8fafc', textDark: true },
            { name: 'Gris medio', hex: '#64748b', textDark: false },
          ].map((color, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border/40 bg-card">
              <div
                className="w-10 h-10 rounded-md flex-shrink-0 border border-border/20"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <p className="font-medium text-sm">{color.name}</p>
                <div className="flex items-center gap-2">
                  <code className="text-xs text-muted-foreground">{color.hex}</code>
                  <CopyButton text={color.hex} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Product overview */}
    <section className="py-14 bg-muted/30 border-y border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold mb-8">Lo que hace MoonJab</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              icon: <Zap className="h-5 w-5 text-primary" />,
              title: 'CV Builder con IA',
              desc: 'Crea currículums vitae optimizados para sistemas ATS con inteligencia artificial. Plantillas por profesión, análisis de keywords y exportación en PDF. Pensado para estudiantes sin experiencia.',
              url: '/cv-builder',
            },
            {
              icon: <Users className="h-5 w-5 text-primary" />,
              title: 'Simulador de Entrevistas',
              desc: 'Practica entrevistas laborales con un entrevistador virtual de IA. Preguntas personalizadas por industria y puesto. Feedback inmediato usando el método STAR. Modalidad texto y voz.',
              url: '/interview-prep',
            },
            {
              icon: <Globe className="h-5 w-5 text-primary" />,
              title: 'Recursos gratuitos LATAM',
              desc: 'Guías de salarios actualizadas por país y profesión, preguntas de entrevista por rol, plantillas de CV por sector y verificador ATS gratuito. Todo en español.',
              url: '/verificador-ats',
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-border/40 bg-background">
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
              <Link to={item.url} className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                Ver página <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Press contact */}
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Contacto de prensa</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Para entrevistas, citas, acceso a datos adicionales o acuerdos de partnership editorial, escríbenos directamente. Respondemos en menos de 24 horas.
        </p>
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-border/40 bg-muted/30 mb-8">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="font-mono text-sm">hey@moonjab.com</span>
          <CopyButton text="hey@moonjab.com" />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:hey@moonjab.com?subject=Cobertura%20periodística%20MoonJab&body=Hola%2C%20me%20interesa%20cubrir%20MoonJab%20para...">
            <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
              Escribir al equipo de prensa
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <Link to="/about">
            <Button variant="outline" size="lg" className="h-12 px-8">
              Conocer el equipo
            </Button>
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-5">
          <a href="https://www.instagram.com/trymoonjab" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/company/moonjab" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://x.com/MoonJabdotcom" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">X / Twitter</a>
          <a href="https://www.youtube.com/@TryMoonJab" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
        </div>
      </div>
    </section>

    <footer className="py-8 border-t border-border/30">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
          <Link to="/verificador-ats" className="hover:text-foreground">Verificador ATS</Link>
          <Link to="/about" className="hover:text-foreground">Nosotros</Link>
          <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Prensa;
