import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Newspaper, Globe, Users, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'MoonJab — Sala de Prensa y Kit de Medios',
  url: 'https://moonjab.com/prensa',
  description: 'Sala de prensa de MoonJab. Descarga logos, angulos de cobertura y contacta al equipo de comunicaciones.',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://moonjab.com/#organization',
  },
};

const STORY_ANGLES = [
  {
    headline: 'La IA que ayuda a estudiantes de LATAM a conseguir su primer empleo',
    summary: 'Millones de universitarios en Latinoamérica egresan sin saber cómo hacer un CV ni prepararse para una entrevista. MoonJab usa IA para democratizar el acceso a herramientas de empleabilidad antes reservadas para quienes podían pagar un coach de carrera.',
  },
  {
    headline: 'El 75% de los CVs en LATAM son rechazados por un algoritmo antes de que los vea un humano',
    summary: 'Los sistemas ATS filtran candidatos automáticamente en empresas como BCP, Falabella y BBVA. MoonJab crea CVs que pasan estos filtros y equipa a los jóvenes para competir en igualdad de condiciones.',
  },
  {
    headline: 'Startup peruana que apunta a reducir el desempleo juvenil en América Latina',
    summary: 'El desempleo juvenil en LATAM supera el 20% en varios países. MoonJab combina IA con conocimiento profundo del mercado laboral regional para cerrar la brecha de empleabilidad.',
  },
  {
    headline: 'Cómo la IA cambia la búsqueda de empleo para la Generación Z en el mundo hispanohablante',
    summary: 'La generación Z busca trabajo diferente: espera personalización, feedback instantáneo y acceso digital. MoonJab es la primera plataforma diseñada específicamente para este comportamiento en LATAM.',
  },
];

const QUICK_FACTS = [
  { label: 'Fundación', value: 'Diciembre 2024' },
  { label: 'CEO', value: 'Salvador' },
  { label: 'Mercado', value: 'LATAM · 10 países' },
  { label: 'Idioma', value: 'Español' },
  { label: 'Precio base', value: 'Gratis · $5/mes Pro' },
  { label: 'Email de prensa', value: 'hey@moonjab.com' },
];

const EMBED_BADGE = `<a href="https://moonjab.com" target="_blank" rel="noopener">
  <img src="https://moonjab.com/moonjab-logo.png" alt="MoonJab — CV Builder con IA para LATAM" width="120" height="40" />
</a>`;

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
      title="Copiar"
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      <Copy className="h-3.5 w-3.5" />
      {copied ? 'Copiado' : 'Copiar'}
    </button>
  );
}

const Prensa = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Sala de Prensa — MoonJab"
      description="Kit de medios de MoonJab: logos, ángulos de cobertura, datos clave y contacto para periodistas y medios de comunicación en LATAM."
      path="/prensa"
      schema={schema}
    />

    {/* Nav */}
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <OfficialLogo size="md" to="/" />
        <Link to="/registro">
          <Button size="sm" className="gap-1.5 text-xs">
            Crear cuenta gratis <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
    </nav>

    {/* Hero */}
    <section className="py-20 border-b border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial="hidden" animate="visible" variants={fade} className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <Newspaper className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Sala de Prensa</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight">
            Kit de Medios MoonJab
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Todo lo que necesitas para cubrir MoonJab: contexto, datos, ángulos de historia y recursos visuales.
            Para solicitudes de entrevista o información adicional, escríbenos a{' '}
            <a href="mailto:hey@moonjab.com" className="text-primary hover:underline">hey@moonjab.com</a>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:hey@moonjab.com">
              <Button className="gap-2">
                <Mail className="h-4 w-4" /> Contactar prensa
              </Button>
            </a>
            <a href="https://moonjab.com/moonjab-logo.png" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <ExternalLink className="h-4 w-4" /> Descargar logo
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Quick facts */}
    <section className="py-16 border-b border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="text-xl font-bold mb-8">Datos rápidos</motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {QUICK_FACTS.map(({ label, value }) => (
            <motion.div key={label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="rounded-xl border border-border/40 bg-card p-5">
              <p className="text-xs text-muted-foreground mb-1">{label}</p>
              <p className="font-semibold text-sm">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Story angles */}
    <section className="py-16 border-b border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="mb-8">
          <h2 className="text-xl font-bold">Ángulos de cobertura sugeridos</h2>
          <p className="text-sm text-muted-foreground mt-1">Ideas de historia para periodistas de tecnología, educación y empleabilidad.</p>
        </motion.div>
        <div className="space-y-4">
          {STORY_ANGLES.map(({ headline, summary }) => (
            <motion.div key={headline} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="rounded-xl border border-border/40 bg-card p-6 hover:border-primary/30 transition-colors">
              <p className="font-semibold mb-2 leading-snug">{headline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="py-16 border-b border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <h2 className="text-xl font-bold mb-4">Acerca de MoonJab</h2>
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p>
              MoonJab es una career platform diseñada para estudiantes universitarios y jóvenes profesionales en Latinoamérica.
              La plataforma combina un CV builder optimizado para sistemas ATS con un simulador de entrevistas laborales basado en inteligencia artificial.
            </p>
            <p>
              Fundada en diciembre 2024, MoonJab opera en 10 países de LATAM con foco especial en Perú, México, Colombia, Argentina y Chile.
              La plataforma es gratuita para empezar, con un plan Pro desde $5 USD/mes que desbloquea funciones avanzadas de IA.
            </p>
            <p>
              La misión de MoonJab es democratizar el acceso a herramientas de empleabilidad de primer nivel para los más de 20 millones de
              estudiantes universitarios en Latinoamérica que buscan su primer empleo cada año.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Social + stats */}
    <section className="py-16 border-b border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="text-xl font-bold mb-8">Redes sociales</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { platform: 'Instagram', handle: '@trymoonjab', url: 'https://www.instagram.com/trymoonjab' },
            { platform: 'YouTube', handle: '@TryMoonJab', url: 'https://www.youtube.com/@TryMoonJab' },
            { platform: 'LinkedIn', handle: 'MoonJab', url: 'https://www.linkedin.com/company/moonjab' },
            { platform: 'X (Twitter)', handle: '@MoonJabdotcom', url: 'https://x.com/MoonJabdotcom' },
          ].map(({ platform, handle, url }) => (
            <motion.a key={platform} href={url} target="_blank" rel="noopener noreferrer"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="flex items-center justify-between rounded-xl border border-border/40 bg-card p-4 hover:border-primary/30 transition-colors group">
              <div>
                <p className="text-xs text-muted-foreground">{platform}</p>
                <p className="font-medium text-sm">{handle}</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    {/* Embed badge — link building asset */}
    <section className="py-16 border-b border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <div className="flex items-center gap-2 mb-2">
            <Globe className="h-4 w-4 text-primary" />
            <h2 className="text-xl font-bold">Enlaza a MoonJab</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Si escribes sobre empleabilidad estudiantil, IA o carrera profesional en LATAM, puedes enlazar a MoonJab usando este badge:
          </p>
          <div className="rounded-xl border border-border/40 bg-card overflow-hidden">
            <div className="p-6 flex items-center gap-6 border-b border-border/30">
              <a href="https://moonjab.com" target="_blank" rel="noopener noreferrer">
                <img src="/moonjab-logo.png" alt="MoonJab — CV Builder con IA para LATAM" width={100} height={34} className="h-8 w-auto" />
              </a>
              <div>
                <p className="font-semibold text-sm">MoonJab</p>
                <p className="text-xs text-muted-foreground">CV Builder con IA para Estudiantes en LATAM</p>
              </div>
            </div>
            <div className="p-4 bg-muted/30">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-medium">Código HTML</p>
                <CopyButton text={EMBED_BADGE} />
              </div>
              <pre className="text-[11px] text-muted-foreground overflow-x-auto whitespace-pre-wrap break-all">{EMBED_BADGE}</pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Contact */}
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="rounded-2xl bg-primary/5 border border-primary/15 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h2 className="text-lg font-bold">Solicitudes de prensa</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Para entrevistas, citas, imágenes adicionales o preguntas específicas sobre MoonJab, contacta directamente al equipo.
            </p>
          </div>
          <a href="mailto:hey@moonjab.com" className="flex-shrink-0">
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              hey@moonjab.com
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Prensa;
