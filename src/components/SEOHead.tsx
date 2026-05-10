import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: string;
  noindex?: boolean;
  keywords?: string;
  breadcrumbs?: BreadcrumbItem[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  schema?: object;
}

const BASE_URL = 'https://moonjab.com';
const DEFAULT_OG_IMAGE = 'https://moonjab.com/og-image.png';

const HREFLANG_LOCALES = ['es', 'es-PE', 'es-MX', 'es-CO', 'es-AR', 'es-CL', 'es-EC', 'x-default'];

export const SEOHead = ({
  title,
  description,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  type = 'website',
  noindex = false,
  keywords,
  breadcrumbs,
  publishedTime,
  modifiedTime,
  author,
  schema,
}: SEOHeadProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === '/' ? title : `${title} | MoonJab`;

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/` },
          ...breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: item.name,
            item: item.url ?? url,
          })),
        ],
      })
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Hreflang — Spanish LATAM markets */}
      {HREFLANG_LOCALES.map((locale) => (
        <link key={locale} rel="alternate" hreflang={locale} href={url} />
      ))}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
      <meta property="og:site_name" content="MoonJab" />
      <meta property="og:locale" content="es_LA" />

      {/* Article meta (og:type="article" pages) */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {ogImageAlt && <meta name="twitter:image:alt" content={ogImageAlt} />}
      <meta name="twitter:site" content="@MoonJabdotcom" />

      {/* Breadcrumb JSON-LD */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{breadcrumbSchema}</script>
      )}

      {/* Page-level schema (Article, SoftwareApplication, etc.) */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};
