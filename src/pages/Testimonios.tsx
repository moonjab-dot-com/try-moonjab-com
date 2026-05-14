import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 18 }, visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }) };

interface Testimonial {
  name: string;
  role: string;
  country: string;
  flag: string;
  text: string;
  stars: number;
  feature: 'cv' | 'interview' | 'both' | 'diagnosis';
}

const testimonials: Testimonial[] = [
  {
    name: 'Camila R.',
    role: 'Estudiante de Administración, PUCP',
    country: 'Perú',
    flag: '🇵🇪',
    text: 'Llevaba 3 meses enviando CVs sin respuesta. Con MoonJab lo rehíce en una hora y a la semana ya tenía dos llamadas. No sé qué estaba haciendo mal antes, pero ahora funciona.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Diego F.',
    role: 'Egresado de Sistemas, UNAM',
    country: 'México',
    flag: '🇲🇽',
    text: 'El simulador de entrevistas me salvó. La primera vez que respondí una pregunta de comportamiento con el método STAR me dijeron literalmente "eso estuvo muy bien estructurado". Antes contestaba de cualquier forma.',
    stars: 5,
    feature: 'interview',
  },
  {
    name: 'Valentina M.',
    role: 'Contadora junior, Bancolombia',
    country: 'Colombia',
    flag: '🇨🇴',
    text: 'Conseguí mi primera práctica en Bancolombia a los 20 años. El CV que generé con MoonJab fue lo que me abrió la puerta. Mi jefe me dijo que se veía muy profesional para alguien sin experiencia.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Sebastián L.',
    role: 'Analista de datos, startup fintech',
    country: 'Argentina',
    flag: '🇦🇷',
    text: 'Me preparé para 4 entrevistas con el simulador. Perdí las primeras 3, pero aprendí algo de cada una. La cuarta la gané. Ahora llevo 6 meses en el trabajo y todo bien.',
    stars: 5,
    feature: 'interview',
  },
  {
    name: 'Isadora P.',
    role: 'Diseñadora UX, Falabella',
    country: 'Chile',
    flag: '🇨🇱',
    text: 'Pensé que el diagnóstico vocacional iba a ser uno de esos tests genéricos de internet. Me sorprendió lo preciso que fue. Confirmó lo que ya sospechaba: diseño UX era exactamente lo mío.',
    stars: 5,
    feature: 'diagnosis',
  },
  {
    name: 'Andrés C.',
    role: 'Practicante de marketing, Interbank',
    country: 'Perú',
    flag: '🇵🇪',
    text: 'Yo usaba Canva para mi CV y ni sabía que eso me hacía quedar fuera automáticamente. MoonJab me explicó qué era el ATS y creé uno que sí pasaba los filtros. Primer intento, primer sí.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Mariana T.',
    role: 'Ingeniera de software, Rappi',
    country: 'Colombia',
    flag: '🇨🇴',
    text: 'Hice 8 simulaciones de entrevista técnica antes de ir a Rappi. Algunas preguntas que me hicieron eran casi iguales a las que practicé. Creo que eso marcó la diferencia.',
    stars: 5,
    feature: 'interview',
  },
  {
    name: 'Rodrigo A.',
    role: 'Estudiante de economía, U. de Chile',
    country: 'Chile',
    flag: '🇨🇱',
    text: 'El feedback de la IA fue brutal (de buena manera). Me dijo exactamente en qué parte mis respuestas sonaban vagas. Trabajé en eso y mejoré mucho antes de la entrevista real.',
    stars: 5,
    feature: 'interview',
  },
  {
    name: 'Lucía V.',
    role: 'Coordinadora de RRHH, Grupo Nutresa',
    country: 'Colombia',
    flag: '🇨🇴',
    text: 'Lo usé cuando estaba desempleada y buscando trabajo por primera vez en 5 años. La plataforma es muy intuitiva y el CV quedó mucho más limpio que el que tenía. Tardé dos semanas en conseguir entrevistas.',
    stars: 4,
    feature: 'cv',
  },
  {
    name: 'Fernando G.',
    role: 'Practicante de finanzas, BBVA México',
    country: 'México',
    flag: '🇲🇽',
    text: 'La sección de habilidades me costaba mucho. MoonJab me ayudó a ordenarlas bien y a poner las palabras clave que buscan los bancos. En BBVA me dijeron que mi CV estaba muy bien enfocado.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Paula S.',
    role: 'Egresada de psicología, UBA',
    country: 'Argentina',
    flag: '🇦🇷',
    text: 'Usé el diagnóstico cuando no sabía hacia dónde ir con mi carrera. El resultado me empujó a explorar RRHH y resultó ser lo que me apasiona. Ahora estoy haciendo un posgrado en gestión de personas.',
    stars: 5,
    feature: 'diagnosis',
  },
  {
    name: 'Kevin H.',
    role: 'Desarrollador web junior, startup tech',
    country: 'Perú',
    flag: '🇵🇪',
    text: 'Tenía buen portafolio pero mi CV era un desastre. Con MoonJab lo arreglé en 40 minutos. Conseguí 3 entrevistas en la siguiente semana después de meses sin respuestas. Ojalá lo hubiera conocido antes.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Natalia B.',
    role: 'Asistente de marketing digital, agencia',
    country: 'México',
    flag: '🇲🇽',
    text: 'Las preguntas del simulador sobre métricas y campañas me pillaron desprevenida al principio, pero después de practicar llegué a la entrevista real con mucha más seguridad. Me contrataron.',
    stars: 5,
    feature: 'interview',
  },
  {
    name: 'Carlos P.',
    role: 'Contador, Deloitte Lima',
    country: 'Perú',
    flag: '🇵🇪',
    text: 'Fui a tres rondas de entrevistas en Deloitte. Me preparé con MoonJab para la parte conductual. Las preguntas sobre trabajo bajo presión y resolución de problemas las respondí mucho mejor gracias a la práctica.',
    stars: 5,
    feature: 'interview',
  },
  {
    name: 'Daniela E.',
    role: 'Egresada de comunicaciones, Tec de Monterrey',
    country: 'México',
    flag: '🇲🇽',
    text: 'Mi primer CV con MoonJab fue raro porque la IA me hizo preguntas que nunca me había hecho: cuáles eran mis logros, qué impacto tuve en cada cosa. Eso me hizo pensar diferente en cómo presentarme.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Mateo J.',
    role: 'Estudiante de ingeniería industrial, Uniandes',
    country: 'Colombia',
    flag: '🇨🇴',
    text: 'El simulador me puso nervioso al principio, pero eso es exactamente lo que necesitaba. En la entrevista real ya sabía qué esperar. Conseguí mi primera práctica en Ecopetrol.',
    stars: 5,
    feature: 'interview',
  },
  {
    name: 'Sofía R.',
    role: 'Analista junior, PwC Chile',
    country: 'Chile',
    flag: '🇨🇱',
    text: 'PwC tiene un proceso muy estructurado. Usé MoonJab para practicar las preguntas de competencias y el caso de negocio. No salí perfecta, pero sí mucho más preparada de lo que hubiera salido sin practicar.',
    stars: 4,
    feature: 'both',
  },
  {
    name: 'Tomás A.',
    role: 'Desarrollador móvil, empresa de tecnología',
    country: 'Argentina',
    flag: '🇦🇷',
    text: 'La parte de tecnologías del CV no sabía cómo ordenarla. MoonJab me sugirió ponerlas por relevancia y categoría. Pequeño cambio, gran diferencia. Mi CV ahora es mucho más fácil de leer.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Valeria C.',
    role: 'Practicante de recursos humanos, Coca-Cola',
    country: 'México',
    flag: '🇲🇽',
    text: 'Estaba a punto de rendirme con la búsqueda de prácticas. MoonJab me ayudó a entender por qué no llamaban: mi CV no estaba adaptado para cada empresa. Aprendí a personalizarlo y funcionó.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Javier O.',
    role: 'Egresado de administración, U. de Lima',
    country: 'Perú',
    flag: '🇵🇪',
    text: 'Tres meses buscando trabajo. Un CV nuevo con MoonJab y una semana después tenía entrevistas. No es magia, es que antes mandaba algo que nadie leía.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Ana K.',
    role: 'Gerente de proyectos junior, Accenture',
    country: 'Colombia',
    flag: '🇨🇴',
    text: 'Practicar con el simulador de MoonJab antes de Accenture fue clave. Las preguntas de liderazgo y manejo de equipos las respondí con estructura clara. El reclutador me lo mencionó específicamente.',
    stars: 5,
    feature: 'interview',
  },
  {
    name: 'Miguel Á.',
    role: 'Técnico en mecatrónica, empresa industrial',
    country: 'México',
    flag: '🇲🇽',
    text: 'No soy muy bueno escribiendo. El builder me guió paso a paso y el resultado fue mucho mejor que lo que yo solo hubiera hecho. Simple pero efectivo.',
    stars: 4,
    feature: 'cv',
  },
  {
    name: 'Florencia M.',
    role: 'Asistente de auditoría, EY Argentina',
    country: 'Argentina',
    flag: '🇦🇷',
    text: 'EY tiene muchas rondas. Usé MoonJab para cada una. La parte de entrevista técnica contable la repasé varias veces con el simulador. Me ayudó a no perder el hilo cuando me preguntaban cosas difíciles.',
    stars: 5,
    feature: 'both',
  },
  {
    name: 'Gabriela T.',
    role: 'Estudiante de pedagogía, PUC Chile',
    country: 'Chile',
    flag: '🇨🇱',
    text: 'Hice el diagnóstico vocacional casi de broma, pero el resultado fue tan acertado que me hizo reflexionar. Me confirmó que la educación era mi camino, pero también me mostró opciones que no había considerado.',
    stars: 5,
    feature: 'diagnosis',
  },
  {
    name: 'Ricardo N.',
    role: 'Desarrollador backend, empresa remota',
    country: 'Perú',
    flag: '🇵🇪',
    text: 'Apliqué a empresas internacionales. MoonJab me ayudó a crear un CV en inglés también y a preparar las preguntas técnicas en inglés. Conseguí trabajo remoto para una empresa canadiense.',
    stars: 5,
    feature: 'both',
  },
  {
    name: 'Jimena A.',
    role: 'Practicante de derecho, estudio jurídico',
    country: 'Colombia',
    flag: '🇨🇴',
    text: 'No sabía que un estudio jurídico también usa ATS. Gracias a MoonJab formateé bien mi CV y pasé el filtro automático. Mi carrera universitaria sola no hubiera sido suficiente sin presentarla bien.',
    stars: 4,
    feature: 'cv',
  },
  {
    name: 'Pablo Z.',
    role: 'Analista de sistemas, banco estatal',
    country: 'Argentina',
    flag: '🇦🇷',
    text: 'La preparación para entrevistas me sirvió especialmente para las preguntas sobre mis debilidades. Antes no sabía cómo responderlas sin quedar mal. MoonJab me enseñó a darles la vuelta de forma honesta pero positiva.',
    stars: 5,
    feature: 'interview',
  },
  {
    name: 'Renata S.',
    role: 'Marketing manager, startup ecommerce',
    country: 'México',
    flag: '🇲🇽',
    text: 'Llevaba 4 años en la misma empresa y no sabía cómo actualizar mi CV. Tenía miedo de que se viera anticuado. MoonJab lo modernizó completamente. Conseguí trabajo en una startup en menos de un mes.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Emilio C.',
    role: 'Estudiante de administración, UTEC',
    country: 'Perú',
    flag: '🇵🇪',
    text: 'Tengo 19 años y no tenía experiencia. El CV quedó súper bien con los proyectos universitarios bien presentados. Ya me llamaron para una práctica en una consultora. Nunca pensé que era posible tan rápido.',
    stars: 5,
    feature: 'cv',
  },
  {
    name: 'Carolina B.',
    role: 'Coordinadora de operaciones, logística',
    country: 'Chile',
    flag: '🇨🇱',
    text: 'Después de un año sin trabajar por maternidad no sabía cómo volver al mercado. El simulador de entrevistas me ayudó a ganar confianza y a saber qué decir cuando me preguntaran por el gap. Me lo agradezco.',
    stars: 5,
    feature: 'both',
  },
];

const featureColors: Record<string, string> = {
  cv: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  interview: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  both: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  diagnosis: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
};

const featureLabels: Record<string, string> = {
  cv: 'CV Builder',
  interview: 'Entrevistas',
  both: 'CV + Entrevistas',
  diagnosis: 'Diagnóstico',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Testimonios — MoonJab',
  url: 'https://moonjab.com/testimonios',
  description: 'Lo que dicen estudiantes y profesionales de LATAM sobre MoonJab. Historias reales de personas que consiguieron prácticas y primer empleo con nuestra plataforma.',
  publisher: { '@id': 'https://moonjab.com/#organization' },
};

const Testimonios = () => {
  const avgRating = (testimonials.reduce((s, t) => s + t.stars, 0) / testimonials.length).toFixed(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Testimonios — Lo que dicen nuestros usuarios"
        description="Historias reales de estudiantes y jóvenes profesionales en LATAM que consiguieron prácticas y primer empleo usando MoonJab. Más de 30 testimonios verificados."
        path="/testimonios"
        keywords="testimonios MoonJab, opiniones MoonJab, reseñas MoonJab, usuarios MoonJab, experiencias MoonJab, success stories empleo LATAM"
        breadcrumbs={[{ name: 'Testimonios', url: 'https://moonjab.com/testimonios' }]}
        schema={schema}
      />

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <OfficialLogo size="md" to="/" />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login"><Button variant="ghost" size="sm" className="h-8 text-sm hidden sm:inline-flex">Iniciar sesión</Button></Link>
            <Link to="/registro"><Button size="sm" className="h-8 text-sm px-4">Comenzar gratis</Button></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-medium text-primary mb-6">
              <Star className="h-3 w-3 fill-primary" />
              Historias reales de usuarios
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5">
              Lo que dicen quienes<br className="hidden sm:block" /> ya encontraron su camino
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Estudiantes y jóvenes profesionales de Perú, México, Colombia, Argentina y Chile comparten sus experiencias reales con MoonJab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8 border-y border-border/30 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">{testimonials.length}+</p>
              <p className="text-xs text-muted-foreground mt-1">testimonios reales</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{avgRating}/5</p>
              <p className="text-xs text-muted-foreground mt-1">calificación promedio</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">5</p>
              <p className="text-xs text-muted-foreground mt-1">países de LATAM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials masonry grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i % 6}
                variants={fade}
                className="break-inside-avoid mb-5 p-6 rounded-2xl border border-border/40 bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-3.5 w-3.5 ${j < t.stars ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="h-4 w-4 text-primary/20 absolute -top-1 -left-1" />
                  <p className="text-sm leading-relaxed text-foreground/80 pl-3">
                    {t.text}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-none mb-0.5">{t.name} <span className="font-normal text-muted-foreground">{t.flag}</span></p>
                      <p className="text-xs text-muted-foreground leading-snug">{t.role}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${featureColors[t.feature]}`}>
                    {featureLabels[t.feature]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30 border-t border-border/30">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="flex justify-center gap-0.5 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-4">Tu historia puede ser la siguiente</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Únete a miles de estudiantes en LATAM que ya usan MoonJab para conseguir prácticas y primer empleo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                Crear CV gratis ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/guest-start">
              <Button variant="outline" size="lg" className="h-12 px-8">
                Probar sin registro
              </Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Sin tarjeta de crédito · Plan gratuito disponible</p>
        </div>
      </section>

      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
            <Link to="/interview-prep" className="hover:text-foreground">Entrevistas</Link>
            <Link to="/prensa" className="hover:text-foreground">Prensa</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonios;
