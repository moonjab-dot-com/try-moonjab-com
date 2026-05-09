import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, ScanLine, CheckCircle, XCircle, AlertCircle, Zap } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MoonJab ATS Checker — Verificador de CV',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://moonjab.com/verificador-ats',
  description: 'Herramienta gratuita para analizar si tu CV pasa los filtros ATS (Applicant Tracking System). Detecta problemas de formato, keywords y estructura.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': 'https://moonjab.com/#organization' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es un ATS y por qué importa para mi CV?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un ATS (Applicant Tracking System) es un software que las empresas usan para filtrar automáticamente los CVs antes de que un humano los vea. Más del 95% de las empresas grandes en LATAM usan ATS. Si tu CV no está formateado correctamente o no contiene las palabras clave del puesto, puede ser rechazado automáticamente sin que nadie lo lea.' },
    },
    {
      '@type': 'Question',
      name: '¿Cómo sé si mi CV pasa los filtros ATS?',
      acceptedAnswer: { '@type': 'Answer', text: 'Las señales de que tu CV podría fallar en ATS: usa tablas o columnas múltiples, tiene información en headers/footers, utiliza gráficos o barras de habilidades, está guardado en formato .pages o .odt, no incluye las palabras clave de la descripción del trabajo, o tiene caracteres especiales y formatos complejos. El analizador ATS de MoonJab detecta estos problemas automáticamente.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué formato de CV es mejor para pasar el ATS?',
      acceptedAnswer: { '@type': 'Answer', text: 'El formato ideal para ATS: una sola columna, sin tablas ni cuadros, fuente estándar (Calibri, Arial, Times New Roman), guardado en PDF desde Word o Google Docs. Incluye palabras clave exactas de la oferta laboral. Estructura clara con secciones etiquetadas (Experiencia, Educación, Habilidades). Sin imágenes, logos ni gráficos.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas empresas en LATAM usan ATS?',
      acceptedAnswer: { '@type': 'Answer', text: 'Según datos del sector, más del 95% de las empresas Fortune 500 y la mayoría de las grandes empresas en LATAM (bancos, retail, tech, manufactura) usan algún tipo de ATS. En Perú, México, Colombia y Chile, empresas como BCP, Falabella, BBVA, Bancolombia y Femsa tienen procesos de selección masivos que dependen completamente de sistemas ATS.' },
    },
  ],
};

const ATSCheckerLanding = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEOHead
      title="Verificador ATS Gratis — Analiza si tu CV pasa los filtros"
      description="Analiza si tu CV pasa los filtros ATS automáticamente. Detecta problemas de formato, keywords faltantes y errores de estructura. Gratis para estudiantes en LATAM."
      path="/verificador-ats"
      keywords="verificador ATS, analizar CV ATS, CV ATS optimizado, qué es ATS curriculum, pasar filtros ATS, ATS checker gratis LATAM"
      breadcrumbs={[{ name: 'Verificador ATS', url: 'https://moonjab.com/verificador-ats' }]}
      schema={[schema, faqSchema]}
    />

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <OfficialLogo size="md" to="/" />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/login"><Button variant="ghost" size="sm" className="h-8 text-sm">Iniciar sesión</Button></Link>
          <Link to="/registro"><Button size="sm" className="h-8 text-sm px-4">Analizar CV gratis</Button></Link>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={fade}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/50 text-xs font-medium text-muted-foreground mb-6">
            <Zap className="h-3.5 w-3.5 text-primary" />
            Análisis instantáneo · Gratis para estudiantes
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5">
            Verifica si tu CV pasa los filtros ATS
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            El 75% de los CVs son rechazados automáticamente antes de que un humano los vea. Nuestro analizador detecta problemas de formato, keywords y estructura en segundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                Analizar mi CV ahora gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Sin tarjeta de crédito · Resultado en menos de 1 minuto</p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-10 border-y border-border/30 bg-muted/30">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div><p className="text-2xl font-bold text-primary">95%</p><p className="text-xs text-muted-foreground mt-1">de empresas grandes usan ATS</p></div>
          <div><p className="text-2xl font-bold text-primary">75%</p><p className="text-xs text-muted-foreground mt-1">de CVs rechazados por ATS</p></div>
          <div><p className="text-2xl font-bold text-primary">&lt;60s</p><p className="text-xs text-muted-foreground mt-1">tiempo de análisis</p></div>
          <div><p className="text-2xl font-bold text-primary">$0</p><p className="text-xs text-muted-foreground mt-1">totalmente gratis</p></div>
        </div>
      </div>
    </section>

    {/* What we check */}
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold mb-3 text-center">¿Qué analiza el verificador ATS?</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">El análisis cubre los factores que más impactan en si el ATS puede leer y rankear tu CV correctamente.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <ScanLine className="h-5 w-5 text-primary" />, title: 'Compatibilidad de formato', desc: 'Detecta tablas, columnas múltiples, headers/footers y elementos que los ATS no pueden parsear.' },
            { icon: <CheckCircle className="h-5 w-5 text-primary" />, title: 'Keywords del rol', desc: 'Compara las palabras clave de tu CV con las de la descripción del trabajo para medir el match.' },
            { icon: <AlertCircle className="h-5 w-5 text-primary" />, title: 'Secciones obligatorias', desc: 'Verifica que tu CV tiene las secciones que los ATS esperan: experiencia, educación, habilidades.' },
            { icon: <XCircle className="h-5 w-5 text-primary" />, title: 'Errores de estructura', desc: 'Identifica fechas mal formateadas, acrónimos sin expandir y problemas de legibilidad.' },
            { icon: <Zap className="h-5 w-5 text-primary" />, title: 'Puntuación de impacto', desc: 'Evalúa si tus logros están cuantificados con métricas o son solo descripciones genéricas.' },
            { icon: <CheckCircle className="h-5 w-5 text-primary" />, title: 'Formato de archivo', desc: 'Verifica que el archivo PDF fue generado correctamente y no tiene texto incrustado como imagen.' },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.07 } } }}
              className="p-5 rounded-xl border border-border/40 bg-card">
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What ATS is */}
    <section className="py-14 bg-muted/30 border-y border-border/30">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold mb-6">¿Qué es un ATS y por qué el 75% de los CVs fallan?</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground space-y-4">
          <p>
            Un <strong className="text-foreground">ATS (Applicant Tracking System)</strong> es el software que las empresas usan para gestionar miles de postulaciones. En vez de que un reclutador humano lea cada CV, el ATS lo escanea, lo parsea y le asigna un puntaje basado en criterios predefinidos. Si tu CV no supera el umbral mínimo, nunca llega a un humano.
          </p>
          <p>
            Las empresas más grandes de LATAM — BCP, Falabella, BBVA, Bancolombia, Femsa, Grupo Bimbo — reciben decenas de miles de postulaciones al año. Sin un ATS, el proceso sería inmanejable. Para los candidatos, esto significa que <strong className="text-foreground">el formato importa tanto como el contenido</strong>.
          </p>
          <p>
            Los errores más frecuentes que hacen fallar un CV en ATS:
          </p>
          <ul className="space-y-2">
            {[
              'Usar tablas o diseños de dos columnas que el ATS parsea en orden incorrecto',
              'Guardar el PDF desde una aplicación que convierte el texto en imagen',
              'No incluir las palabras clave exactas de la descripción del trabajo',
              'Usar títulos de sección no estándar ("Mi trayectoria" en vez de "Experiencia")',
              'Poner información clave en el header o footer del documento',
            ].map((error, i) => (
              <li key={i} className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Before/After */}
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold mb-10 text-center">Cómo se ve un CV antes y después de optimizarse para ATS</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border-2 border-red-200 dark:border-red-800/30 bg-red-50/50 dark:bg-red-900/10">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-5 w-5 text-red-500" />
              <h3 className="font-bold text-red-700 dark:text-red-400">CV que falla en ATS</h3>
            </div>
            <ul className="space-y-2">
              {[
                'Diseño con 2 columnas y cajas de color',
                'Barras gráficas para mostrar nivel de habilidades',
                'Foto grande en el encabezado',
                'Texto en el header del documento',
                'Guardado desde Canva como imagen',
                'Sin keywords del trabajo al que postula',
                '"Sobre mí" en vez de "Perfil Profesional"',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <XCircle className="h-3.5 w-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <h3 className="font-bold text-emerald-700 dark:text-emerald-400">CV optimizado para ATS</h3>
            </div>
            <ul className="space-y-2">
              {[
                'Una sola columna, diseño limpio y legible',
                'Habilidades listadas en texto simple',
                'Foto pequeña o sin foto según el país',
                'Todo el contenido en el cuerpo del documento',
                'PDF generado desde Word/Google Docs',
                'Keywords de la oferta incluidas naturalmente',
                'Secciones estándar: Experiencia, Educación, Habilidades',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-14 bg-muted/30 border-y border-border/30">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-bold mb-8">Preguntas frecuentes sobre ATS</h2>
        <div className="space-y-4">
          {[
            { q: '¿Qué es un ATS y por qué importa para mi CV?', a: 'Un ATS (Applicant Tracking System) es un software que las empresas usan para filtrar automáticamente los CVs antes de que un humano los vea. Más del 95% de las empresas grandes en LATAM usan ATS. Si tu CV no está formateado correctamente o no contiene las palabras clave del puesto, puede ser rechazado automáticamente sin que nadie lo lea.' },
            { q: '¿Cómo sé si mi CV pasa los filtros ATS?', a: 'Las señales de que tu CV podría fallar en ATS: usa tablas o columnas múltiples, tiene información en headers/footers, utiliza gráficos o barras de habilidades, está guardado en formato .pages o .odt, no incluye las palabras clave de la descripción del trabajo, o tiene caracteres especiales y formatos complejos.' },
            { q: '¿Qué formato de CV es mejor para pasar el ATS?', a: 'El formato ideal para ATS: una sola columna, sin tablas ni cuadros, fuente estándar (Calibri, Arial, Times New Roman), guardado en PDF desde Word o Google Docs. Incluye palabras clave exactas de la oferta laboral. Sin imágenes, logos ni gráficos.' },
            { q: '¿Cuántas empresas en LATAM usan ATS?', a: 'Más del 95% de las empresas Fortune 500 y la mayoría de las grandes empresas en LATAM usan algún tipo de ATS. En Perú, México, Colombia y Chile, empresas como BCP, Falabella, BBVA, Bancolombia y Femsa tienen procesos de selección masivos que dependen completamente de sistemas ATS.' },
          ].map((faq, i) => (
            <div key={i} className="p-5 rounded-xl bg-background border border-border/40">
              <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          No dejes que un ATS descarte tu CV sin que nadie lo vea
        </h2>
        <p className="text-muted-foreground mb-8">
          Crea tu CV con MoonJab — es ATS-optimizado desde el primer trazo. Sin tablas, sin columnas, con las keywords correctas del mercado LATAM.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/registro">
            <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
              Crear CV ATS-optimizado gratis <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/plantillas-cv">
            <Button variant="outline" size="lg" className="h-12 px-8">
              Ver plantillas por profesión
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <footer className="py-8 border-t border-border/30">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
          <Link to="/plantillas-cv" className="hover:text-foreground">Plantillas CV</Link>
          <Link to="/preguntas-de-entrevista" className="hover:text-foreground">Entrevistas</Link>
          <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
        </div>
      </div>
    </footer>
  </div>
);

export default ATSCheckerLanding;
