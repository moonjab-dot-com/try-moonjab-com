import { SEOHead } from '@/components/SEOHead';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Building2, Lightbulb } from 'lucide-react';

interface CountryData {
  name: string;
  demonym: string;
  cvTerm: string;
  flag: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  headline: string;
  subheadline: string;
  intro: string;
  topCompanies: string[];
  stats: { value: string; label: string }[];
  tips: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedPosts: { path: string; title: string }[];
}

const COUNTRIES: Record<string, CountryData> = {
  peru: {
    name: 'Perú', demonym: 'peruano', cvTerm: 'currículum vitae', flag: '🇵🇪',
    metaTitle: 'CV Builder para Perú — Crea tu Currículum Vitae con IA',
    metaDesc: 'Crea tu currículum vitae profesional para el mercado laboral peruano con inteligencia artificial. Optimizado para empresas en Lima: BCP, Alicorp, BBVA, Interbank. Gratis para estudiantes.',
    keywords: 'CV Perú, currículum vitae Perú, hacer curriculum Lima, trabajo para estudiantes Perú, prácticas pre-profesionales Lima, CV con IA Perú',
    headline: 'Crea tu currículum vitae para el mercado laboral peruano',
    subheadline: 'Optimizado para las empresas más grandes del Perú. Diseñado para estudiantes universitarios en Lima y provincias.',
    intro: 'Lima concentra el 70% de las ofertas laborales del Perú. Empresas como BCP, Alicorp, BBVA, Interbank, Rimac y Belcorp reciben miles de CVs cada semana. Sin una estrategia clara, tu currículum puede perderse entre cientos de postulaciones. MoonJab te ayuda a crear un CV que destaque desde la primera pantalla del reclutador.',
    topCompanies: ['BCP', 'BBVA Perú', 'Interbank', 'Alicorp', 'Credicorp', 'Rimac Seguros', 'Saga Falabella', 'Backus', 'Belcorp', 'Intercorp'],
    stats: [{ value: '28%', label: 'desempleo juvenil en Perú' }, { value: '80%', label: 'empleos por contactos' }, { value: '92%', label: 'empresas usan ATS' }],
    tips: [
      { title: 'La universidad de origen importa en Lima', body: 'En el mercado laboral limeño, el nombre de tu universidad tiene peso. Menciona claramente tu casa de estudios y especialidad en el encabezado de tu CV.' },
      { title: 'La foto es esperada (y recomendada)', body: 'En Perú, incluir una foto profesional en el CV es práctica común y generalmente esperada. Usa fondo blanco o gris, vestimenta formal y buena iluminación. Una foto descuidada puede generar una impresión negativa antes de leer el contenido.' },
      { title: 'Menciona tu nivel de inglés con certificación', body: 'El inglés es altamente valorado en empresas peruanas, especialmente en Lima. Si tienes certificación (TOEFL, IELTS, Cambridge), inclúyela. Si no, indica tu nivel honestamente: básico, intermedio o avanzado.' },
      { title: 'Las prácticas pre-profesionales tienen marco legal claro', body: 'En Perú, las prácticas están reguladas por la Ley 28518. Debes recibir como mínimo la RMV (S/ 1,025 en 2025) más seguro de salud. Asegúrate de firmar un convenio tripartito entre la empresa, tú y tu universidad.' },
    ],
    faqs: [
      { q: '¿Cuánto debe medir un CV para el mercado peruano?', a: 'Para estudiantes y recién egresados, 1 página es el estándar en Perú. Para profesionales con más de 5 años de experiencia, 2 páginas es aceptable. Los reclutadores peruanos prefieren CVs concisos y bien estructurados.' },
      { q: '¿Debo incluir foto en mi CV en Perú?', a: 'Sí. En el mercado laboral peruano es costumbre incluir una foto profesional. Debe ser reciente, de fondo neutro (blanco o gris), con vestimenta formal. Evita selfies o fotos informales.' },
      { q: '¿Qué formato de CV prefieren las empresas en Lima?', a: 'El formato cronológico inverso (experiencia más reciente primero) es el estándar en Perú. Usa fuente legible como Arial o Calibri (11-12pt), márgenes de 2cm y guarda siempre en PDF.' },
      { q: '¿Cómo consigo prácticas pre-profesionales en grandes empresas peruanas?', a: 'Las empresas más grandes de Lima (BCP, Alicorp, BBVA, Interbank) tienen programas formales de prácticas que abren postulaciones 2-3 meses antes del inicio. Visita directamente sus portales de empleo y sigue sus redes sociales. Un CV optimizado para ATS es esencial para pasar el primer filtro.' },
    ],
    relatedPosts: [
      { path: '/blog/practicas-profesionales-latam', title: 'Guía de prácticas profesionales en LATAM' },
      { path: '/blog/primer-trabajo-estudiante-universitario', title: 'Primer trabajo para estudiantes universitarios' },
      { path: '/blog/que-es-ats-y-como-optimizar-tu-cv', title: 'Cómo optimizar tu CV para ATS' },
    ],
  },
  mexico: {
    name: 'México', demonym: 'mexicano', cvTerm: 'currículum', flag: '🇲🇽',
    metaTitle: 'CV Builder para México — Crea tu Currículum con IA',
    metaDesc: 'Crea tu currículum profesional para el mercado laboral mexicano con IA. Optimizado para empresas en CDMX, Monterrey y Guadalajara: FEMSA, América Móvil, Cemex. Gratis para estudiantes.',
    keywords: 'CV México, currículum México, hacer curriculum CDMX, trabajo para estudiantes México, curriculum vitae México 2025, CV con IA México',
    headline: 'Crea tu currículum para el mercado laboral mexicano',
    subheadline: 'Diseñado para CDMX, Monterrey y Guadalajara. Optimizado para empresas mexicanas y multinacionales.',
    intro: 'México tiene tres grandes mercados laborales: Ciudad de México, Monterrey y Guadalajara, cada uno con su propia cultura empresarial. La Ciudad de México concentra fintech, media y servicios. Monterrey domina en industria y manufactura. Guadalajara lidera en tecnología. MoonJab te ayuda a adaptar tu currículum al mercado específico donde quieres trabajar.',
    topCompanies: ['FEMSA', 'América Móvil', 'Cemex', 'Walmart México', 'Banorte', 'BBVA México', 'Oxxo', 'Grupo Bimbo', 'Televisa', 'Mercado Libre México'],
    stats: [{ value: '3.2M', label: 'universitarios en México' }, { value: '65%', label: 'empleos son informales' }, { value: '#1', label: 'en tech en LATAM' }],
    tips: [
      { title: 'La carta de presentación es más importante en México', body: 'En México, a diferencia de otros países LATAM, la carta de presentación tiene más peso. Para posiciones en grandes empresas y corporativos, es casi obligatoria. Personalízala para cada empresa mencionando por qué quieres trabajar específicamente ahí.' },
      { title: 'El inglés abre puertas en CDMX y Monterrey', body: 'En el mercado corporativo mexicano, el inglés es prácticamente requerido para posiciones entry-level en multinacionales. Si tienes nivel B1 o superior, certifícate con TOEFL o IELTS antes de postular a empresas globales.' },
      { title: 'Un currículum de 1 página es el estándar para entry-level', body: 'Las empresas mexicanas prefieren CVs concisos. Para posiciones de prácticas y primer empleo, una sola página bien estructurada es más efectiva que dos páginas llenas de contenido irrelevante.' },
      { title: 'LinkedIn es el canal de reclutamiento líder en México', body: 'México tiene una de las tasas más altas de uso de LinkedIn en LATAM para reclutamiento. Asegúrate de que tu perfil de LinkedIn esté completo y alineado con tu currículum antes de empezar a postular.' },
    ],
    faqs: [
      { q: '¿Debo incluir foto en mi currículum en México?', a: 'No es obligatorio en México y las grandes empresas prefieren CVs sin foto para evitar sesgos. Sin embargo, en algunas industrias más tradicionales o en empresas familiares, puede incluirse. Si decides incluirla, que sea profesional.' },
      { q: '¿Cómo es el proceso de prácticas (becarios) en México?', a: 'En México, los "programas de becarios" no tienen una ley única que los regule a nivel nacional. Las mejores empresas (FEMSA, CEMEX, Banamex, P&G) pagan entre $4,000 y $8,000 MXN mensuales. Busca siempre un contrato por escrito que especifique funciones, duración y compensación.' },
      { q: '¿Qué ciudades tienen más oportunidades laborales en México?', a: 'Ciudad de México concentra más del 50% de las vacantes formales. Monterrey es líder en industria y manufactura. Guadalajara lidera en tecnología (es el "Silicon Valley de México"). Puebla y Querétaro crecen fuerte en manufactura y servicios.' },
      { q: '¿Cómo adapto mi CV para empresas tech en Guadalajara?', a: 'Las empresas tech en Guadalajara (Intel, IBM, HP, startups locales) valoran proyectos concretos con GitHub, portafolios y contribuciones a proyectos open source. El inglés es generalmente requerido. Prioriza tus habilidades técnicas sobre cualquier otra sección del CV.' },
    ],
    relatedPosts: [
      { path: '/blog/como-hacer-un-cv-sin-experiencia', title: 'CV sin experiencia laboral: guía completa' },
      { path: '/blog/primer-trabajo-estudiante-universitario', title: 'Primer trabajo para universitarios LATAM' },
      { path: '/blog/networking-para-conseguir-empleo', title: 'Networking para conseguir empleo' },
    ],
  },
  colombia: {
    name: 'Colombia', demonym: 'colombiano', cvTerm: 'hoja de vida', flag: '🇨🇴',
    metaTitle: 'Hoja de Vida para Colombia — Crea tu Perfil Profesional con IA',
    metaDesc: 'Crea tu hoja de vida profesional para el mercado laboral colombiano con IA. Optimizada para empresas en Bogotá y Medellín: Ecopetrol, Bancolombia, Grupo Éxito. Gratis para estudiantes.',
    keywords: 'hoja de vida Colombia, hacer hoja de vida, formato hoja de vida Colombia, trabajo Bogotá, prácticas empresariales Colombia, hoja de vida con IA',
    headline: 'Crea tu hoja de vida para el mercado laboral colombiano',
    subheadline: 'En Colombia se dice "hoja de vida", no "currículum". Optimizada para empresas en Bogotá, Medellín y Cali.',
    intro: 'En Colombia, el documento de presentación laboral se llama "hoja de vida", no "currículum" ni "CV". Esta diferencia importa más de lo que parece: los reclutadores colombianos notan cuando alguien usa terminología no local. Bogotá concentra las sedes de la mayoría de empresas grandes, pero Medellín tiene un ecosistema de startups vibrante y Cali lidera en agroindustria.',
    topCompanies: ['Ecopetrol', 'Bancolombia', 'Grupo Éxito', 'Avianca', 'Bavaria', 'Grupo Bolívar', 'Grupo Nutresa', 'Carvajal', 'Claro Colombia', 'Rappi'],
    stats: [{ value: '2.4M', label: 'universitarios en Colombia' }, { value: '#1', label: 'startup hub de LATAM' }, { value: '40%', label: 'desempleo juvenil' }],
    tips: [
      { title: 'Di "hoja de vida", no "currículum"', body: 'Esta es la diferencia más importante: en Colombia el documento se llama "hoja de vida". Usar "currículum" no te descalifica, pero usar "hoja de vida" demuestra conocimiento del mercado local y genera mejor impresión en los reclutadores colombianos.' },
      { title: 'Las referencias son especialmente importantes en Colombia', body: 'En Colombia, las referencias laborales y académicas tienen mucho peso. Prepara al menos 2-3 referencias de confianza (profesores, jefes de prácticas, empleadores anteriores) que puedan responder rápido cuando las empresas las contacten.' },
      { title: 'Medellín tiene el ecosistema startup más dinámico de LATAM', body: 'Si buscas trabajo en tech y startups, Medellín es actualmente el hub más activo de América Latina. Empresas como Rappi, Platzi y cientos de startups tienen presencia ahí. Un perfil en plataformas como LinkedIn y GitHub es esencial para este mercado.' },
      { title: 'La foto es menos común en Colombia que en otros países', body: 'A diferencia de Perú o Ecuador, en Colombia muchas empresas modernas prefieren hojas de vida sin foto. En empresas más tradicionales y del sector financiero, sigue siendo común. Cuando en duda, omite la foto.' },
    ],
    faqs: [
      { q: '¿Cuál es el formato correcto de una hoja de vida en Colombia?', a: 'La hoja de vida colombiana estándar incluye: datos personales, perfil profesional (2-3 líneas), formación académica, experiencia (si la tienes), habilidades y referencias. Para estudiantes universitarios, 1-2 páginas es lo apropiado. Descarga el formato Minerva del SENA si necesitas uno estándar para el sector público.' },
      { q: '¿Las prácticas empresariales en Colombia son remuneradas?', a: 'Depende. Si las prácticas son parte obligatoria del pensum universitario, la empresa no está legalmente obligada a remunerarlas, aunque muchas sí pagan un auxilio. Si las prácticas son adicionales (no obligatorias), deben remunerarse. Siempre confirma las condiciones antes de firmar.' },
      { q: '¿Cómo consigo trabajo en startups en Medellín?', a: 'Medellín tiene un ecosistema tech muy activo. Para acceder a él: crea perfil en LinkedIn destacando habilidades técnicas y proyectos, asiste a meetups de tecnología en Medellín Innovation District, conecta con la comunidad de Ruta N y considera postular directamente en los sitios web de startups que te interesen.' },
      { q: '¿Qué tan importante es el inglés en el mercado laboral colombiano?', a: 'El inglés es muy valorado en Colombia, especialmente en Bogotá para multinacionales y en el sector financiero. Para startups tech en Medellín, el inglés puede ser requerido. En ciudades secundarias y sectores más tradicionales (agricultura, manufactura local), el español es suficiente.' },
    ],
    relatedPosts: [
      { path: '/blog/como-hacer-un-cv-sin-experiencia', title: 'Hoja de vida sin experiencia: guía completa' },
      { path: '/blog/practicas-profesionales-latam', title: 'Prácticas profesionales en LATAM' },
      { path: '/blog/que-es-ats-y-como-optimizar-tu-cv', title: 'Optimiza tu hoja de vida para ATS' },
    ],
  },
  argentina: {
    name: 'Argentina', demonym: 'argentino', cvTerm: 'currículum', flag: '🇦🇷',
    metaTitle: 'CV Builder para Argentina — Crea tu Currículum con IA',
    metaDesc: 'Crea tu currículum profesional para el mercado laboral argentino con IA. Optimizado para empresas en Buenos Aires: MercadoLibre, Globant, YPF. Trabajo remoto y presencial. Gratis para estudiantes.',
    keywords: 'CV Argentina, currículum Argentina, trabajo Buenos Aires, empleo Argentina, curriculum vitae Argentina, CV con IA Argentina, trabajo remoto Argentina',
    headline: 'Crea tu currículum para el mercado laboral argentino',
    subheadline: 'Argentina lidera en talento tech de LATAM. Optimizado para Buenos Aires, trabajo remoto y empresas globales.',
    intro: 'Argentina tiene el ecosistema tech más sofisticado de la región. MercadoLibre, Globant, Despegar, OLX y decenas de unicornios tienen su ADN en Argentina. El trabajo remoto para empresas internacionales se volvió norma después de 2020 y hoy muchos argentinos trabajan para empresas de EE.UU., España y el resto del mundo cobrando en dólares. Un currículum en inglés puede abrirte puertas globales desde Buenos Aires.',
    topCompanies: ['MercadoLibre', 'Globant', 'Despegar', 'OLX', 'YPF', 'Banco Galicia', 'Grupo Clarín', 'Telecom Argentina', 'Accenture Argentina', 'IBM Argentina'],
    stats: [{ value: '#1', label: 'en talento tech LATAM' }, { value: '60%', label: 'trabajan remoto' }, { value: '3', label: 'unicornios propios' }],
    tips: [
      { title: 'El trabajo remoto para el exterior es una opción real', body: 'Muchos argentinos trabajan para empresas de EE.UU. o Europa cobrando en dólares. Para este mercado, necesitas un CV en inglés, perfil de LinkedIn optimizado y portfolio público en GitHub o Behance. Plataformas como Toptal, Remote OK y LinkedIn Jobs tienen vacantes que pagan $2,000-6,000 USD/mes.' },
      { title: 'El CV argentino valora la concisión y directness', body: 'Los reclutadores argentinos prefieren CVs directos y al punto. Evita el adorno excesivo. Los logros concretos con números importan mucho más que las descripciones generales. Una página bien estructurada supera a dos páginas genéricas.' },
      { title: 'Para tech, el portfolio supera al título universitario', body: 'En el ecosistema tech argentino (MercadoLibre, Globant, startups), un portafolio de proyectos reales en GitHub vale más que el nombre de tu universidad. Construye y publica proyectos antes de empezar a postular.' },
      { title: 'El inglés puede multiplicar tu salario', body: 'En Argentina, un profesional tech con inglés fluido puede acceder a trabajos remotos para empresas internacionales con salarios 5-10x superiores al mercado local en pesos. Si no tienes inglés, invertir en aprenderlo tiene el mejor retorno de inversión posible para tu carrera.' },
    ],
    faqs: [
      { q: '¿Cómo consigo trabajo remoto desde Argentina para empresas del exterior?', a: 'Las mejores plataformas para trabajo remoto internacional desde Argentina son: LinkedIn (filtra por "Remote"), Toptal (para seniors), Workana (para freelance), Remote OK y We Work Remotely. Necesitas CV en inglés, portfolio público, capacidad de comunicarte en inglés y cuenta bancaria en dólares (Wise, Payoneer o cuenta en el exterior).' },
      { q: '¿Vale la pena estudiar en Argentina para trabajar en tech?', a: 'Las universidades públicas argentinas (UBA, UTN, UNLP) tienen muy buen nivel, especialmente en ingenierías y ciencias de la computación, y son gratuitas. El título argentino es reconocido en toda LATAM y España. Para tech específicamente, complementar el título con proyectos prácticos y open source marca la diferencia.' },
      { q: '¿Cuánto pagan las pasantías en Argentina?', a: 'Las pasantías en Argentina están reguladas por la Ley 26.427. La remuneración varía pero en empresas grandes suele ser entre $150,000 y $400,000 ARS mensuales (actualizable por inflación). Las pasantías en empresas tech suelen pagar mejor y a veces tienen bonus en dólares.' },
      { q: '¿Debo incluir foto en mi CV argentino?', a: 'No es la norma en Argentina. La mayoría de CVs profesionales argentinos no incluyen foto, especialmente en el sector tech y empresas modernas. Para roles comerciales o en industrias más tradicionales, puede incluirse, pero no es esperada ni requerida.' },
    ],
    relatedPosts: [
      { path: '/blog/networking-para-conseguir-empleo', title: 'Networking para conseguir empleo' },
      { path: '/blog/como-negociar-tu-salario', title: 'Cómo negociar tu salario' },
      { path: '/blog/que-es-ats-y-como-optimizar-tu-cv', title: 'Optimiza tu CV para ATS' },
    ],
  },
  chile: {
    name: 'Chile', demonym: 'chileno', cvTerm: 'currículum', flag: '🇨🇱',
    metaTitle: 'CV Builder para Chile — Crea tu Currículum con IA',
    metaDesc: 'Crea tu currículum profesional para el mercado laboral chileno con IA. Optimizado para empresas en Santiago: Falabella, LATAM Airlines, Cencosud, BCI. Gratis para estudiantes.',
    keywords: 'CV Chile, currículum Chile, trabajo Santiago, empleo Chile, curriculum vitae Chile, prácticas profesionales Chile, CV con IA Chile',
    headline: 'Crea tu currículum para el mercado laboral chileno',
    subheadline: 'Chile tiene la economía más estable de LATAM. Optimizado para Santiago y las empresas más grandes del país.',
    intro: 'Chile tiene el mercado laboral más formal y estructurado de América Latina. Santiago concentra la gran mayoría de empleos corporativos, pero ciudades como Valparaíso y Concepción están creciendo rápidamente en tech y servicios. Las empresas chilenas valoran la presentación profesional, la puntualidad y las referencias verificables. Un currículum bien estructurado y sin errores es el punto de entrada obligado.',
    topCompanies: ['Falabella', 'LATAM Airlines', 'Cencosud', 'BCI', 'Banco de Chile', 'Entel', 'Codelco', 'Enel Chile', 'Ripley', 'Mercado Libre Chile'],
    stats: [{ value: '#1', label: 'economía estable LATAM' }, { value: '45%', label: 'empleos en Santiago' }, { value: '8.5%', label: 'desempleo juvenil' }],
    tips: [
      { title: 'La presentación profesional es especialmente valorada', body: 'El mercado laboral chileno es más formal y conservador que el de Argentina o México. Un currículum con errores ortográficos o formato descuidado se descarta rápidamente. Revisa tu CV al menos 3 veces antes de enviarlo.' },
      { title: 'Las referencias son verificadas rigurosamente en Chile', body: 'Los empleadores chilenos verifican referencias con más frecuencia que en otros países LATAM. Prepara al menos 3 referencias confiables (profesores, jefes anteriores) que estén disponibles y dispuestos a responder llamadas o emails de reclutadores.' },
      { title: 'El inglés abre puertas en empresas multinacionales en Santiago', body: 'Para empresas internacionales en Santiago (consultoras, mineras, tech companies), el inglés es generalmente requerido. Para empresas chilenas locales, el inglés es valorado pero no siempre exigido. Si lo tienes, certifícate.' },
      { title: 'Incluye tu RUT en el currículum para Chile', body: 'A diferencia de otros países, en Chile es práctica común y a veces requerida incluir el RUT (número de identificación) en el currículum, especialmente para postular a empresas grandes y al sector público.' },
    ],
    faqs: [
      { q: '¿Cómo son las prácticas profesionales en Chile?', a: 'Las prácticas en Chile suelen durar 3-6 meses y son parte del proceso de titulación en muchas universidades. Las empresas más grandes (Falabella, LATAM, Banco de Chile) pagan estipendios de $400,000 a $700,000 CLP mensuales. Hay que firmar un convenio con la universidad y la empresa.' },
      { q: '¿Debo incluir foto en mi CV chileno?', a: 'No es obligatorio y las empresas modernas prefieren CVs sin foto. Para roles comerciales, en retail o en empresas más tradicionales puede ser aceptable. En el sector tech y en empresas jóvenes, la foto no es esperada.' },
      { q: '¿Cuánto pagan en las primeras posiciones laborales en Chile?', a: 'Los sueldos entry-level en Santiago para recién egresados están entre $600,000 y $900,000 CLP mensuales dependiendo de la industria. El sector minero y financiero paga más. El tech ha aumentado significativamente. Las prácticas suelen pagar entre $400,000 y $600,000 CLP.' },
      { q: '¿Es mejor buscar trabajo en Santiago o hay oportunidades en otras ciudades?', a: 'Santiago concentra más del 45% del empleo formal de Chile, pero Valparaíso y Concepción crecen en startups y servicios. Para minería, el norte (Antofagasta, Calama) es el centro de oportunidades. Para tech, Santiago sigue dominando aunque hay trabajo remoto disponible desde cualquier ciudad.' },
    ],
    relatedPosts: [
      { path: '/blog/practicas-profesionales-latam', title: 'Prácticas profesionales en LATAM' },
      { path: '/blog/como-negociar-tu-salario', title: 'Cómo negociar tu salario' },
      { path: '/blog/primer-trabajo-estudiante-universitario', title: 'Primer trabajo para universitarios' },
    ],
  },
};

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const CVBuilderCountry = () => {
  const { country } = useParams<{ country: string }>();
  const data = country ? COUNTRIES[country.toLowerCase()] : null;

  if (!data) return <Navigate to="/cv-builder" replace />;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `MoonJab CV Builder para ${data.name}`,
    description: data.metaDesc,
    provider: { '@id': 'https://moonjab.com/#organization' },
    areaServed: { '@type': 'Country', 'name': data.name },
    serviceType: 'Career Platform',
    url: `https://moonjab.com/cv-builder/${country}`,
    inLanguage: data.cvTerm === 'hoja de vida' ? 'es-CO' : `es-${country?.slice(0, 2).toUpperCase()}`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={data.metaTitle}
        description={data.metaDesc}
        path={`/cv-builder/${country}`}
        keywords={data.keywords}
        breadcrumbs={[
          { name: 'CV Builder', url: 'https://moonjab.com/cv-builder' },
          { name: data.name, url: `https://moonjab.com/cv-builder/${country}` },
        ]}
        schema={[schema, serviceSchema]}
      />

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <OfficialLogo size="md" to="/" />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/registro"><Button size="sm" className="h-8 text-sm px-4">Empezar gratis</Button></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <div className="text-5xl mb-4">{data.flag}</div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5">
              {data.headline}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {data.subheadline}
            </p>
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                Crear mi {data.cvTerm} gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-y border-border/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {data.stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-lg text-muted-foreground leading-relaxed">{data.intro}</p>
        </div>
      </section>

      {/* Top companies */}
      <section className="py-14 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="h-4 w-4 text-primary" />
            <h2 className="font-semibold">Principales empleadores en {data.name}</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.topCompanies.map(c => (
              <span key={c} className="px-3 py-1.5 text-xs rounded-full bg-background border border-border/60 text-foreground/70">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 mb-10">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">
              Consejos para el mercado laboral de {data.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {data.tips.map((tip, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                className="p-6 rounded-2xl border border-border/40 bg-card">
                <h3 className="font-bold mb-2 text-base">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-8">
            Preguntas frecuentes — {data.cvTerm} en {data.name}
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/40">
                <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Crea tu {data.cvTerm} para {data.name} hoy
          </h2>
          <p className="text-muted-foreground mb-8">
            Gratis para estudiantes. Sin tarjeta de crédito. Descarga en PDF en minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                Empezar gratis <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/cv-builder">
              <Button variant="outline" size="lg" className="h-12 px-8">
                Ver todos los países
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links to related blog posts */}
      <section className="py-12 border-t border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-base font-semibold mb-5 text-muted-foreground">Guías relacionadas</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {data.relatedPosts.map((p, i) => (
              <Link key={i} to={p.path}
                className="flex items-center gap-2 p-3 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-muted/40 transition-all text-sm">
                <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>{p.title}</span>
              </Link>
            ))}
          </div>
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
};

export default CVBuilderCountry;
