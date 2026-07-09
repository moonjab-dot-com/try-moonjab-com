import { useState, useEffect } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Share2, TrendingUp } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SALARY_ROLES, SALARY_COUNTRIES } from '@/data/salaries';
import { EmailCaptureCard } from '@/components/EmailCaptureCard';
import { track } from '@/lib/analytics';
import { toast } from 'sonner';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const LEVELS = [
  { id: 'entry', label: 'Junior (0–2 años)' },
  { id: 'mid', label: 'Mid-level (2–5 años)' },
  { id: 'senior', label: 'Senior (5+ años)' },
] as const;

type LevelId = (typeof LEVELS)[number]['id'];

const SalaryCalculator = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const roles = Object.values(SALARY_ROLES);
  const countries = Object.entries(SALARY_COUNTRIES);

  const [rol, setRol] = useState(searchParams.get('rol') || '');
  const [pais, setPais] = useState(searchParams.get('pais') || '');
  const [nivel, setNivel] = useState<LevelId | ''>((searchParams.get('nivel') as LevelId) || '');

  const roleData = rol ? SALARY_ROLES[rol] : null;
  const countryData = pais ? SALARY_COUNTRIES[pais] : null;
  const salary = roleData && pais ? roleData.countries[pais] : null;
  const hasResult = Boolean(roleData && countryData && salary && nivel);

  useEffect(() => {
    if (hasResult) {
      track('calculator_result_viewed', { rol, pais, nivel });
      const params = new URLSearchParams({ rol, pais, nivel });
      setSearchParams(params, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasResult, rol, pais, nivel]);

  const handleShare = async () => {
    const url = `${window.location.origin}/calculadora-de-salario?rol=${rol}&pais=${pais}&nivel=${nivel}`;
    track('calculator_shared');
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Mi rango salarial en MoonJab', url });
        return;
      } catch {
        // user cancelled or share failed — fall back to copy
      }
    }
    await navigator.clipboard.writeText(url);
    toast.success('Enlace copiado');
  };

  const range = salary && nivel ? salary[nivel] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Calculadora de Salario LATAM 2025 — Descubre tu Rango"
        description="Calcula tu salario esperado según tu profesión, país y nivel de experiencia en LATAM. Datos reales de Perú, México, Colombia, Argentina y Chile."
        path="/calculadora-de-salario"
        keywords="calculadora de salario, cuánto debería ganar, rango salarial LATAM, calculadora sueldo 2025"
        breadcrumbs={[{ name: 'Calculadora de Salario', url: 'https://moonjab.com/calculadora-de-salario' }]}
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

      <section className="pt-10 pb-8 sm:pt-14">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Calculadora de Salario LATAM
            </h1>
            <p className="text-muted-foreground">
              Elige tu profesión, país y nivel de experiencia para ver el rango salarial real del mercado.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-2xl border border-border/40 bg-card p-6 space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Profesión</label>
              <Select value={rol} onValueChange={setRol}>
                <SelectTrigger className="h-11"><SelectValue placeholder="Selecciona tu profesión" /></SelectTrigger>
                <SelectContent>
                  {roles.map((r) => (
                    <SelectItem key={r.slug} value={r.slug}>{r.emoji} {r.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">País</label>
              <Select value={pais} onValueChange={setPais}>
                <SelectTrigger className="h-11"><SelectValue placeholder="Selecciona tu país" /></SelectTrigger>
                <SelectContent>
                  {countries.map(([slug, c]) => (
                    <SelectItem key={slug} value={slug}>{c.flag} {c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Nivel de experiencia</label>
              <Select value={nivel} onValueChange={(v) => setNivel(v as LevelId)}>
                <SelectTrigger className="h-11"><SelectValue placeholder="Selecciona tu nivel" /></SelectTrigger>
                <SelectContent>
                  {LEVELS.map((l) => (
                    <SelectItem key={l.id} value={l.id}>{l.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {hasResult && salary && range && (
            <motion.div initial="hidden" animate="visible" variants={fade} className="mt-6 rounded-2xl border-2 border-primary/30 bg-primary/[0.03] p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">{roleData!.emoji}</span>
                <span className="text-2xl">{countryData!.flag}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {roleData!.title} · {countryData!.name} · {LEVELS.find((l) => l.id === nivel)?.label}
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-3">{range}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-5">
                <TrendingUp className="h-4 w-4" />
                <span>Promedio de mercado: {salary.average}/mes</span>
              </div>
              {salary.note && (
                <p className="text-sm text-muted-foreground mb-5 p-3 rounded-xl bg-background border border-border/40">
                  💡 {salary.note}
                </p>
              )}
              <Button onClick={handleShare} variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" /> Compartir mi resultado
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {hasResult && (
        <section className="pb-16">
          <div className="mx-auto max-w-2xl px-6">
            <EmailCaptureCard
              sourcePage="/calculadora-de-salario"
              title="Recibe el reporte completo de tu carrera"
              description="Te enviamos el detalle de junior, mid y senior para tu rol, más consejos para negociar mejor."
            />
          </div>
        </section>
      )}

      <section className="py-16 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Prepárate para conseguir ese salario</h2>
          <p className="text-muted-foreground mb-8">
            MoonJab te ayuda a crear el CV con IA y practicar entrevistas para posicionarte en el rango que mereces.
          </p>
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
            <Link to="/salario" className="hover:text-foreground">Guía de salarios</Link>
            <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalaryCalculator;
