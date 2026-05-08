import { Helmet } from 'react-helmet-async';

interface Breadcrumb {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  keywords?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  breadcrumbs?: Breadcrumb[];
  schema?: Record<string, unknown> | Record<string, unknown>[];
  hreflang?: boolean;
}

const BASE_URL = 'https://moonjab.com';
const DEFAULT_OG_IMAGE =
  'https://storage.googleapis.com/gpt-engineer-file-uploads/UTzapF8dTWUuvs1ZKjSuRUh6wJR2/social-images/social-1773758809009-IOS_Icon_MoonJab.webp';

const HREFLANG_LOCALES: Array<{ hreflang: string }> = [
  { hreflang: 'es' },
  { hreflang: 'es-PE' },
  { hreflang: 'es-MX' },
  { hreflang: 'es-CO' },
  { hreflang: 'es-AR' },
  { hreflang: 'es-CL' },
  { hreflang: 'x-default' },
];

export const SEOHead = ({
  title,
  description,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  type = 'website',
  noindex = false,
  keywords,
  publishedTime,
  modifiedTime,
  author,
  breadcrumbs,
  schema,
  hreflang = true,
}: SEOHeadProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === '/' ? title : `${title} | MoonJab`;
  const imageAlt = ogImageAlt ?? fullTitle;

  const robotsContent = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  const breadcrumbSchema: Record<string, unknown> | null =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/` },
            ...breadcrumbs.map((crumb, i) => ({
              '@type': 'ListItem',
              position: i + 2,
              name: crumb.name,
              item: crumb.url,
            })),
          ],
        }
      : null;

  const schemas: Record<string, unknown>[] = [
    ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={robotsContent} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* hreflang — all LATAM locales point to canonical URL */}
      {hreflang && !noindex
        ? HREFLANG_LOCALES.map(({ hreflang: lang }) => (
            <link key={lang} rel="alternate" hreflang={lang} href={url} />
          ))
        : null}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:site_name" content="MoonJab" />
      <meta property="og:locale" content="es_LA" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Article-specific OG */}
      {type === 'article' && publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}
      {type === 'article' && modifiedTime ? (
        <meta property="article:modified_time" content={modifiedTime} />
      ) : null}
      {type === 'article' && author ? (
        <meta property="article:author" content={author} />
      ) : null}
      {type === 'article' ? (
        <meta
          property="article:publisher"
          content="https://www.linkedin.com/company/moonjab"
        />
      ) : null}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MoonJab" />
      <meta name="twitter:creator" content="@MoonJab" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* JSON-LD per-page schemas */}
      {schemas.map((s, i) => (
        <script key={`ld-${i}`} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
