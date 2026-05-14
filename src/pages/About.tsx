import { SEOHead } from '@/components/SEOHead';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Heart, Zap, Users, Globe, ArrowRight } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, titleKey: 'about.values.clarity', descKey: 'about.values.clarityDesc' },
    { icon: Heart, titleKey: 'about.values.empathy', descKey: 'about.values.empathyDesc' },
    { icon: Zap, titleKey: 'about.values.action', descKey: 'about.values.actionDesc' },
    { icon: Users, titleKey: 'about.values.community', descKey: 'about.values.communityDesc' },
  ];

  const stats = [
    { number: '10,000+', labelKey: 'about.stats.professionals' },
    { number: '50,000+', labelKey: 'about.stats.cvs' },
    { number: '95%', labelKey: 'about.stats.satisfaction' },
    { number: '15', labelKey: 'about.stats.countries' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sobre MoonJab — Nuestra Misión y Equipo"
        description="Conoce la misión y equipo de MoonJab. Democratizamos la empleabilidad en LATAM con IA: CV builder ATS y simulador de entrevistas para estudiantes universitarios en LATAM."
        path="/about"
        keywords="sobre moonjab, equipo moonjab, misión moonjab, startup empleabilidad LATAM, plataforma empleo estudiantes"
        breadcrumbs={[{ name: 'Nosotros', url: 'https://moonjab.com/about' }]}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://moonjab.com/#organization',
            name: 'MoonJab',
            url: 'https://moonjab.com',
            logo: 'https://moonjab.com/moonjab-logo.png',
            description: 'Plataforma de empleabilidad con IA para estudiantes universitarios y jóvenes profesionales en Latinoamérica.',
            foundingDate: '2025',
            founder: {
              '@type': 'Person',
              '@id': 'https://moonjab.com/#founder',
              name: 'Salvador',
              jobTitle: 'CEO & Co-Founder',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Av. José Larco 1301',
              addressLocality: 'Miraflores',
              addressRegion: 'Lima',
              addressCountry: 'PE',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hey@moonjab.com',
              contactType: 'customer support',
              availableLanguage: ['Spanish', 'English'],
            },
            areaServed: ['PE', 'MX', 'CO', 'AR', 'CL', 'EC', 'BO', 'PY', 'UY', 'VE'],
            sameAs: [
              'https://x.com/MoonJabdotcom',
              'https://www.instagram.com/trymoonjab',
              'https://www.linkedin.com/company/moonjab',
              'https://www.youtube.com/@TryMoonJab',
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': 'https://moonjab.com/about#webpage',
            name: 'Sobre MoonJab — Nuestra Misión y Equipo',
            url: 'https://moonjab.com/about',
            description: 'Conoce la misión, valores y equipo de MoonJab, la plataforma de empleabilidad con IA para estudiantes en LATAM.',
            isPartOf: { '@id': 'https://moonjab.com/#website' },
            about: { '@id': 'https://moonjab.com/#organization' },
            publisher: { '@id': 'https://moonjab.com/#organization' },
          },
        ]}
      />
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <OfficialLogo size="lg" to="/" />
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 max-w-5xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t('about.badge')}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-8 tracking-tight leading-tight">
              {t('about.heroTitle')}{' '}
              <span className="text-primary">{t('about.heroWho')}</span> {t('about.heroAnd')}{' '}
              <span className="text-primary">{t('about.heroWhoYouCanBe')}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
            <Globe className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">{t('about.missionTitle')}</h2>
            <p className="text-2xl sm:text-3xl text-muted-foreground leading-relaxed font-light">
              {t('about.missionText')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{t(stat.labelKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">{t('about.valuesTitle')}</h2>
            <p className="text-xl text-muted-foreground">{t('about.valuesSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t(value.titleKey)}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{t(value.descKey)}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-24"></section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">{t('about.ctaTitle')}</h2>
          <p className="text-xl opacity-90 mb-8">{t('about.ctaDesc')}</p>
          <Link to="/registro">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
              {t('about.ctaBtn')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('common.backToHome')}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default About;
