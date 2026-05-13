import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Brain, Compass, Star, Users, Check,
  Wrench, FlaskConical, Palette, Heart, TrendingUp, Calculator,
} from 'lucide-react';
import { OfficialLogo } from '@/components/OfficialLogo';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease },
  }),
};

const riasecTypes = [
  {
    code: 'R',
    name: 'Realista',
    desc: 'Te gusta trabajar con herramientas, máquinas y el mundo físico. Eres práctico y orientado a resultados concretos.',
    examples: 'Ingeniería · Mecánica · Arquitectura',
    icon: Wrench,
    color: 'bg-blue-500/[0.07] border-blue-500/20',
    textColor: 'text-blue-600 dark:text-blue-400',
    statColor: 'text-blue-500',
  },
  {
    code: 'I',
    name: 'Investigador',
    desc: 'Disfrutas analizar, investigar y resolver problemas complejos con pensamiento crítico y precisión.',
    examples: 'Ciencia · Medicina · Data Science',
    icon: FlaskConical,
    color: 'bg-primary/[0.07] border-primary/20',
    textColor: 'text-primary',
    statColor: 'text-primary',
  },
  {
    code: 'A',
    name: 'Artístico',
    desc: 'Eres creativo, expresivo e innovador. Piensas fuera de lo convencional y buscas originalidad.',
    examples: 'Diseño · Comunicación · Marketing',
    icon: Palette,
    color: 'bg-violet-500/[0.07] border-violet-500/20',
    textColor: 'text-violet-600 dark:text-violet-400',
    statColor: 'text-violet-500',
  },
  {
    code: 'S',
    name: 'Social',
    desc: 'Tu fortaleza es ayudar, enseñar y conectar con personas. Eres empático y colaborativo por naturaleza.',
    examples: 'Psicología · Educación · RRHH',
    icon: Heart,
    color: 'bg-rose-500/[0.07] border-rose-500/20',
    textColor: 'text-rose-600 dark:text-rose-400',
    statColor: 'text-rose-500',
  },
  {
    code: 'E',
    name: 'Emprendedor',
    desc: 'Te motiva liderar, persuadir y alcanzar metas ambiciosas. Ves oportunidades donde otros ven obstáculos.',
    examples: 'Negocios · Ventas · Startups',
    icon: TrendingUp,
    color: 'bg-amber-500/[0.07] border-amber-500/20',
    textColor: 'text-amber-600 dark:text-amber-400',
    statColor: 'text-amber-500',
  },
  {
    code: 'C',
    name: 'Convencional',
    desc: 'Eres organizado, metódico y preciso. Sobresales en ambientes estructurados donde el detalle importa.',
    examples: 'Contabilidad · Finanzas · Administración',
    icon: Calculator,
    color: 'bg-slate-500/[0.07] border-slate-500/20',
    textColor: 'text-slate-600 dark:text-slate-400',
    statColor: 'text-slate-500',
  },
];

const DiagnosticoVocacionalLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Diagnóstico Vocacional RIASEC Gratis — Descubre tu Carrera Ideal | MoonJab"
        description="Test vocacional RIASEC gratis en español. Responde 40 preguntas y descubre qué carrera es ideal para ti según tu personalidad e intereses. +10,000 estudiantes LATAM."
        path="/diagnostico-vocacional"
        keywords="test vocacional gratis, diagnóstico vocacional, RIASEC, test de personalidad carrera, qué carrera estudiar, orientación vocacional LATAM, Holland Code"
        breadcrumbs={[{ name: 'Diagnóstico Vocacional', url: '/diagnostico-vocacional' }]}
      />

      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/30">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
          <OfficialLogo size="md" to="/" />
          <Link to="/registro">
            <Button size="sm" className="text-xs h-8 px-4 gap-1.5 shadow-sm">
              Comenzar gratis <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[250px] bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/[0.07] text-xs font-semibold text-primary mb-6">
              <Brain className="h-3 w-3" />
              Modelo Holland · RIASEC · Gratis
            </div>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5"
          >
            Descubre qué carrera<br />
            <span className="gradient-text">se adapta a ti</span>
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto"
          >
            El test RIASEC analiza tu personalidad, intereses y fortalezas para orientarte hacia
            las carreras donde tienes mayor probabilidad de éxito. Gratis, en español, adaptado al mercado LATAM.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          >
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 text-sm font-semibold gap-2 shadow-mj-md">
                Comenzar mi diagnóstico — Es gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
            className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap"
          >
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary/60" />
              <span><strong className="text-foreground">10,000+</strong> estudiantes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span><strong className="text-foreground">4.9/5</strong> valoración</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary/60" />
              <span>100% <strong className="text-foreground">gratis</strong></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RIASEC Types */}
      <section className="py-16 border-t border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Los 6 tipos de personalidad vocacional
            </h2>
            <p className="text-sm text-muted-foreground">
              El test identifica tu combinación única entre estos 6 perfiles — tu código RIASEC
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {riasecTypes.map((type, i) => (
              <motion.div
                key={type.code}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className={`rounded-2xl border p-6 ${type.color} transition-all hover:scale-[1.02] duration-200`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`text-3xl font-black ${type.statColor} leading-none`}>{type.code}</div>
                  <type.icon className={`h-5 w-5 ${type.textColor}`} />
                </div>
                <h3 className={`font-bold text-base mb-2 ${type.textColor}`}>{type.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{type.desc}</p>
                <p className={`text-[10px] font-semibold uppercase tracking-wide ${type.textColor} opacity-70`}>
                  {type.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/30 border-t border-border/30">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              ¿Cómo funciona el diagnóstico?
            </h2>
            <p className="text-sm text-muted-foreground">
              Sin respuestas correctas ni incorrectas — solo tus preferencias reales
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: '01',
                title: 'Regístrate gratis',
                desc: 'Crea tu cuenta en MoonJab en menos de 2 minutos. Sin tarjeta de crédito.',
              },
              {
                num: '02',
                title: 'Responde 40 preguntas',
                desc: 'Cada pregunta explora tus intereses y fortalezas en distintas áreas profesionales.',
              },
              {
                num: '03',
                title: 'Recibe tu código RIASEC',
                desc: 'La IA genera tu perfil personalizado con carreras y roles donde vas a sobresalir.',
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-xs font-mono text-primary font-bold">{step.num}</span>
                </div>
                <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
          >
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 text-sm font-semibold gap-2 shadow-mj-md">
                Comenzar mi diagnóstico gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground mt-3">
              Sin tarjeta de crédito · Resultado inmediato · Disponible para toda LATAM
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-14 border-t border-border/30">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-xl font-bold text-center mb-8">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              {
                q: '¿El diagnóstico es realmente gratis?',
                a: 'Sí. El diagnóstico vocacional RIASEC es 100% gratuito para todos los usuarios registrados de MoonJab. Solo necesitas crear una cuenta (sin tarjeta de crédito).',
              },
              {
                q: '¿Cuánto tiempo toma el test?',
                a: 'El test tiene 40 preguntas y la mayoría de usuarios lo completa en 8-12 minutos. No tiene límite de tiempo — responde a tu ritmo.',
              },
              {
                q: '¿Qué recibo al terminar el diagnóstico?',
                a: 'Recibes tu código RIASEC personalizado, un análisis de tus fortalezas, y una lista de carreras, roles y sectores donde tienes mayor probabilidad de éxito y satisfacción laboral.',
              },
              {
                q: '¿Para qué países está disponible?',
                a: 'Disponible para toda Latinoamérica, con foco especial en Perú, México, Colombia, Argentina y Chile. El contenido está en español y adaptado al mercado laboral regional.',
              },
            ].map((item, i) => (
              <details key={i} className="group rounded-xl border border-border/40 bg-card overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium text-sm hover:bg-muted/40 transition-colors list-none">
                  {item.q}
                  <Compass className="h-4 w-4 text-muted-foreground flex-shrink-0 group-open:text-primary transition-colors" />
                </summary>
                <p className="px-5 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border/30">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-border/30 bg-muted/20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="space-y-5"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              ¿Listo para descubrir tu carrera ideal?
            </h2>
            <p className="text-sm text-muted-foreground">
              +10,000 estudiantes ya conocen su código RIASEC y tienen claridad sobre su futuro profesional.
            </p>
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 text-sm font-semibold gap-2 shadow-mj-md">
                Hacer mi diagnóstico — Es gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-5xl px-6 flex items-center justify-between flex-wrap gap-4">
          <OfficialLogo size="sm" to="/" animated={false} />
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link to="/cv-builder" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              CV Builder
            </Link>
            <Link to="/interview-prep" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Entrevistas
            </Link>
            <Link to="/registro" className="text-xs text-primary font-medium hover:underline transition-colors">
              Registrarse gratis →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DiagnosticoVocacionalLanding;
