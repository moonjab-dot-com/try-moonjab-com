import { SEOHead } from '@/components/SEOHead';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, TrendingUp, CheckCircle, ChevronRight } from 'lucide-react';
import { SALARY_ROLES, SALARY_COUNTRIES } from '@/data/salaries';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const SalaryPage = () => {
  const { rol, pais } = useParams<{ rol: string; pais?: string }>();
  const roleData = rol ? SALARY_ROLES[rol] : null;

  if (!roleData) return <Navigate to="/salario" replace />;

  const countryData = pais ? SALARY_COUNTRIES[pais] : null;
  const salary = pais && countryData ? roleData.countries[pais] : null;
  const allCountries = Object.entries(SALARY_COUNTRIES);

  const isCountryPage = Boolean(pais && countryData && salary);

  const metaTitle = isCountryPage
    ? `Salario ${roleData.title} en ${countryData!.name} 2025 — Junior, Mid y Senior`
    : `Salario ${roleData.title} en LATAM 2025 — Por País y Nivel`;

  const metaDesc = isCountryPage
    ? `Cuánto gana un ${roleData.title} en ${countryData!.name} en 2025. Rango junior: ${salary!.entry}. Nivel medio: ${salary!.mid}. Senior: ${salary!.senior}. Empresas que más pagan y consejos del mercado.`
    : `Cuánto gana un ${roleData.title} en Perú, México, Colombia, Argentina y Chile en 2025. Rangos salariales por nivel de experiencia y empresas que mejor pagan en LATAM.`;

  const canonicalPath = isCountryPage ? `/salario/${rol}/${pais}` : `/salario/${rol}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: roleData.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const jobSchema = {
    '@context': 'https://schema.org',
    '@type': 'Occupation',
    name: roleData.title,
    description: roleData.description,
    estimatedSalary: isCountryPage ? [
      { '@type': 'MonetaryAmountDistribution', name: 'Entry Level', currency: salary!.currency, duration: 'P1M', percentile10: salary!.entry.split('–')[0].replace(/[^0-9]/g, ''), percentile90: salary!.senior.split('–').pop()?.replace(/[^0-9]/g, '') },
    ] : undefined,
    occupationalCategory: roleData.category,
    skills: roleData.skills.join(', '),
  };

  const breadcrumbs = isCountryPage
    ? [
        { name: 'Guía de Salarios', url: 'https://moonjab.com/salario' },
        { name: roleData.title, url: `https://moonjab.com/salario/${rol}` },
        { name: countryData!.name, url: `https://moonjab.com/salario/${rol}/${pais}` },
      ]
    : [
        { name: 'Guía de Salarios', url: 'https://moonjab.com/salario' },
        { name: roleData.title, url: `https://moonjab.com/salario/${rol}` },
      ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDesc}
        path={canonicalPath}
        keywords={roleData.keywords}
        breadcrumbs={breadcrumbs}
        schema={[faqSchema, jobSchema]}
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

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-5">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/salario" className="hover:text-foreground transition-colors">Salarios LATAM</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/salario/${rol}`} className="hover:text-foreground transition-colors">{roleData.title}</Link>
          {isCountryPage && (
            <>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{countryData!.name}</span>
            </>
          )}
        </nav>
      </div>

      {/* Hero */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">{roleData.emoji}</span>
              {isCountryPage && <span className="text-3xl">{countryData!.flag}</span>}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              {isCountryPage
                ? `Salario de ${roleData.title} en ${countryData!.name} (2025)`
                : `Salario de ${roleData.title} en LATAM (2025)`}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {isCountryPage
                ? `Rangos salariales reales para ${roleData.title.toLowerCase()} en ${countryData!.name} en 2025. Junior, mid-level y senior. Empresas que mejor pagan y qué habilidades aumentan el sueldo.`
                : roleData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Salary table — country-specific */}
      {isCountryPage && salary && (
        <section className="py-12 bg-muted/30 border-y border-border/30">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              <h2 className="text-xl font-bold">Rangos salariales en {countryData!.name}</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Junior (0–2 años)', value: salary.entry, color: 'border-blue-200 dark:border-blue-800' },
                { label: 'Mid-level (2–5 años)', value: salary.mid, color: 'border-amber-200 dark:border-amber-800' },
                { label: 'Senior (5+ años)', value: salary.senior, color: 'border-emerald-200 dark:border-emerald-800' },
              ].map(item => (
                <div key={item.label} className={`p-5 rounded-xl border-2 ${item.color} bg-background`}>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">por mes</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 p-4 rounded-xl bg-background border border-border/40">
              <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
              <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Promedio de mercado:</span> {salary.average}/mes</p>
            </div>
            {salary.note && (
              <p className="text-sm text-muted-foreground mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                💡 {salary.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* All countries table — role hub page */}
      {!isCountryPage && (
        <section className="py-12 bg-muted/30 border-y border-border/30">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold mb-6">Comparación de salarios por país</h2>
            <div className="space-y-4">
              {allCountries.map(([countrySlug, country]) => {
                const s = roleData.countries[countrySlug];
                if (!s) return null;
                return (
                  <Link key={countrySlug} to={`/salario/${rol}/${countrySlug}`}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:bg-primary/5 transition-all">
                    <span className="text-2xl">{country.flag}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">{country.name}</p>
                      <p className="text-xs text-muted-foreground">Junior: {s.entry}</p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-muted-foreground">Senior</p>
                      <p className="font-semibold text-sm">{s.senior}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Top companies — country page */}
      {isCountryPage && salary && (
        <section className="py-14">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold mb-5">Empresas que más contratan {roleData.title.toLowerCase()} en {countryData!.name}</h2>
            <div className="flex flex-wrap gap-2">
              {salary.topCompanies.map(c => (
                <span key={c} className="px-3 py-1.5 text-sm rounded-full bg-muted border border-border/60 text-foreground/80">{c}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      <section className="py-14 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold mb-5">Habilidades que incrementan el salario de {roleData.title.toLowerCase()}</h2>
          <div className="flex flex-wrap gap-2">
            {roleData.skills.map(skill => (
              <span key={skill} className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                <CheckCircle className="h-3 w-3" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Country switcher — only on country pages */}
      {isCountryPage && (
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-base font-semibold text-muted-foreground mb-4">Ver salarios en otros países</h2>
            <div className="flex flex-wrap gap-2">
              {allCountries.map(([countrySlug, country]) => (
                <Link key={countrySlug} to={`/salario/${rol}/${countrySlug}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm transition-all ${countrySlug === pais ? 'border-primary bg-primary/10 text-primary font-medium' : 'border-border/40 hover:border-primary/40 hover:bg-muted/40'}`}>
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-8">Preguntas frecuentes — salario {roleData.title.toLowerCase()}</h2>
          <div className="space-y-4">
            {roleData.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/40">
                <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related roles */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-base font-semibold text-muted-foreground mb-4">Profesiones relacionadas</h2>
          <div className="flex flex-wrap gap-3">
            {roleData.relatedRoles.map(relSlug => {
              const rel = SALARY_ROLES[relSlug];
              if (!rel) return null;
              return (
                <Link key={relSlug} to={`/salario/${relSlug}`}
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
            Consigue el salario que mereces
          </h2>
          <p className="text-muted-foreground mb-8">
            Prepara tu CV con IA y practica las preguntas de entrevista para posicionarte en el rango senior del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registro">
              <Button size="lg" className="h-12 px-8 gap-2 font-semibold">
                Crear mi CV gratis <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to={`/preguntas-de-entrevista/${rol}`}>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Ver preguntas de entrevista
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024–2026 MoonJab. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/salario" className="hover:text-foreground">Guía de salarios</Link>
            <Link to="/cv-builder" className="hover:text-foreground">CV Builder</Link>
            <Link to="/interview-prep" className="hover:text-foreground">Entrevistas</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalaryPage;
