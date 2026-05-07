import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  // Article-specific
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleTags?: string[];
  // FAQ structured data
  faqs?: { question: string; answer: string }[];
  // Breadcrumbs
  breadcrumbs?: { name: string; item: string }[];
}

const BASE_URL = 'https://moonjab.com';
const DEFAULT_OG_IMAGE = 'https://moonjab.com/og-image.png';
const SITE_NAME = 'MoonJab';
const TWITTER_HANDLE = '@MoonJab';

// ─── Reusable JSON-LD blocks ──────────────────────────────────────────────────

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: SITE_NAME,
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/moonjab-logo.png`,
    width: 512,
    height: 512,
  },
  description:
    'Career platform para estudiantes en LATAM. CV builder con IA y preparación de entrevistas.',
  foundingDate: '2024',
  areaServed: ['PE', 'MX', 'CO', 'AR', 'CL', 'EC', 'BO', 'PY', 'UY', 'VE'],
  sameAs: [
    'https://twitter.com/MoonJab',
    'https://www.instagram.com/trymoonjab',
    'https://www.linkedin.com/company/moonjab',
    'https://www.tiktok.com/@moonjab',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hey@moonjab.com',
    contactType: 'customer support',
    availableLanguage: ['Spanish', 'English'],
    areaServed: 'LATAM',
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: SITE_NAME,
  description:
    'Career platform para estudiantes — CV builder con IA y preparación de entrevistas',
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: ['es', 'en'],
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: SITE_NAME,
  url: BASE_URL,
  applicationCategory: 'EducationApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Plan gratuito disponible. Pro desde $5 USD/mes.',
  },
  featureList: [
    'CV Builder con IA optimizado para ATS',
    'Simulador de entrevistas laborales con IA',
    'Feedback instantáneo en tiempo real',
    'Plantillas profesionales para LATAM',
    'Diagnóstico de empleabilidad gratuito',
  ],
  screenshot: `${BASE_URL}/og-image.png`,
  publisher: { '@id': `${BASE_URL}/#organization` },
};

// ─── Helper: build article schema ────────────────────────────────────────────

function buildArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    datePublished: opts.publishedTime ?? new Date().toISOString(),
    dateModified: opts.modifiedTime ?? opts.publishedTime ?? new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: opts.author ?? 'Equipo MoonJab',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/moonjab-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': opts.url,
    },
    keywords: opts.tags?.join(', '),
    inLanguage: 'es',
    isPartOf: { '@id': `${BASE_URL}/#website` },
  };
}

// ─── Helper: build FAQ schema ────────────────────────────────────────────────

function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

// ─── Helper: build breadcrumb schema ─────────────────────────────────────────

function buildBreadcrumbSchema(
  breadcrumbs: { name: string; item: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/` },
      ...breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: b.name,
        item: b.item.startsWith('http') ? b.item : `${BASE_URL}${b.item}`,
      })),
    ],
  };
}

// ─── Component ───────────────────────────────────────────────────────────────

export const SEOHead = ({
  title,
  description,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  articleTags,
  faqs,
  breadcrumbs,
}: SEOHeadProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle =
    path === '/'
      ? title
      : `${title} | ${SITE_NAME}`;

  const isHomePage = path === '/';
  const isArticle = type === 'article';

  return (
    <Helmet>
      {/* ── Primary ── */}
      <html lang="es" dir="ltr" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      )}

      {/* ── Open Graph ── */}
      <meta property="og:type" content={isArticle ? 'article' : 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_LA" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:type" content="image/png" />

      {/* ── Article OG extras ── */}
      {isArticle && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {isArticle && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {isArticle && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      {isArticle &&
        articleTags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* ── Twitter ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* ── Structured Data: always present ── */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>

      {/* ── Homepage only ── */}
      {isHomePage && (
        <script type="application/ld+json">
          {JSON.stringify(webAppSchema)}
        </script>
      )}

      {/* ── Article schema ── */}
      {isArticle && (
        <script type="application/ld+json">
          {JSON.stringify(
            buildArticleSchema({
              title: fullTitle,
              description,
              url,
              image: ogImage,
              publishedTime: articlePublishedTime,
              modifiedTime: articleModifiedTime,
              author: articleAuthor,
              tags: articleTags,
            }),
          )}
        </script>
      )}

      {/* ── FAQ schema ── */}
      {faqs && faqs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(buildFAQSchema(faqs))}
        </script>
      )}

      {/* ── Breadcrumb schema ── */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(buildBreadcrumbSchema(breadcrumbs))}
        </script>
      )}
    </Helmet>
  );
};
