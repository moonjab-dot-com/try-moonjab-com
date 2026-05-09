# MoonJab — Deep SEO Audit Report
**Generated:** 2026-05-09  
**Audited by:** Claude Sonnet 4.6 (seo-audit + ai-seo + site-architecture + programmatic-seo skills)  
**Site:** https://moonjab.com  
**Stack:** Vite + React + TypeScript + Tailwind + Supabase (GitHub Pages)

---

## Executive Summary

MoonJab has a **strong SEO foundation** built over the last two sessions — structured data, hreflang, AI bot access, and semantic HTML are all well ahead of most early-stage LATAM SaaS products. However, there are **5 critical bugs** that silently break core SEO features right now, plus a set of high-value gaps that are limiting ranking and AI citation potential.

**Overall SEO Health Score: 71 / 100**

| Category | Score | Trend |
|---|---|---|
| Technical foundations | 65/100 | Bugs in build |
| On-page optimization | 80/100 | Solid |
| Structured data | 72/100 | Incomplete |
| AI/GEO optimization | 78/100 | Good start |
| Site architecture | 70/100 | pSEO underutilized |
| Content quality | 75/100 | Thin in spots |

---

## CRITICAL — Fix First (Breaking Issues)

### 🔴 C1: SEOHead Missing Props — Blog Article Meta Silently Dropped

**File:** `src/components/SEOHead.tsx` + `src/pages/BlogPost.tsx:80–91`

`BlogPost.tsx` passes these props to `<SEOHead>`:
```tsx
ogImageAlt={post.title}
type="article"
publishedTime={`${post.isoDate}T00:00:00-05:00`}
modifiedTime={`${post.isoDate}T00:00:00-05:00`}
author={post.author}
schema={articleSchema}
```

None of these exist in `SEOHead`'s interface. TypeScript accepts them only because React ignores unknown props — but they are **completely silently dropped**. This means:

- `og:type = "article"` is never set on blog posts (stays `"website"`)
- `article:published_time` and `article:modified_time` never render
- `twitter:image:alt` is never set on blog posts
- The `Article` JSON-LD schema (the most important structured data on the blog) **never renders**
- Author byline metadata is never passed to Google

**Impact:** High — All 6+ blog posts have no Article schema. Google can't attribute authorship, extract publication dates, or treat them as articles. Rich result eligibility is completely lost.

**Fix:** Add the missing props to `SEOHead`'s interface and render them:

```tsx
interface SEOHeadProps {
  // ... existing ...
  ogImageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  schema?: object;
}

// Inside Helmet:
{ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
{type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
{type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
{type === 'article' && author && <meta property="article:author" content={author} />}
{schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
```

---

### 🔴 C2: Duplicate Imports + Routes in App.tsx — Build Error

**File:** `src/App.tsx:27–34` and `:101–108`

`CVBuilderLanding` and `InterviewPrepLanding` are each imported **twice**:
```tsx
// Line 27
import CVBuilderLanding from "./pages/CVBuilderLanding";
// Line 33 — DUPLICATE
import CVBuilderLanding from "./pages/CVBuilderLanding";
```

Their routes are also defined twice:
```tsx
// Line 101
<Route path="/cv-builder" element={<CVBuilderLanding />} />
// Line 107 — DUPLICATE
<Route path="/cv-builder" element={<CVBuilderLanding />} />
```

**Impact:** TypeScript/ESLint strict mode will flag this as a compile error. React Router uses the first match so the second routes are dead code, but this is a ticking time bomb for build pipelines and confuses static analysis tools.

**Fix:** Remove the duplicate import and route declarations at lines 33–34 and 107–108.

---

### 🔴 C3: `sitemap-blog.xml` Referenced in robots.txt But Does Not Exist

**File:** `public/robots.txt:69`

```
Sitemap: https://moonjab.com/sitemap-blog.xml
```

This file does not exist. Googlebot will fetch it and receive a 404. Bing Webmaster Tools will flag it as an error. In Google Search Console it will appear as a "Couldn't fetch" sitemap error, reducing crawl trust.

**Fix:** Either create `public/sitemap-blog.xml` (separate blog-only sitemap — recommended as blog grows) or remove the reference from `robots.txt` and consolidate all URLs in `sitemap.xml`.

---

### 🔴 C4: HowTo Schema Step 1 Points to `/register` (Non-Existent Route)

**File:** `index.html:309`

```json
{
  "@type": "HowToStep",
  "position": 1,
  "name": "Crea tu cuenta gratis",
  "url": "https://moonjab.com/register"
}
```

The actual registration route is `/registro`. `/register` does not exist — it would resolve to the `<NotFound>` page. Google validates HowTo step URLs; a 404 step can invalidate the entire HowTo rich result.

Also, `HowToStep` at position 4 references `https://moonjab.com/cv-builder/templates` — verify this route exists or remove it from the step URL.

**Fix:** Change `https://moonjab.com/register` → `https://moonjab.com/registro` in the HowTo JSON-LD.

---

### 🔴 C5: WebSite SearchAction Points to Non-Existent `/search` Route

**File:** `index.html:148–154`

```json
"potentialAction": {
  "@type": "SearchAction",
  "target": {
    "urlTemplate": "https://moonjab.com/search?q={search_term_string}"
  }
}
```

No `/search` route is defined in `App.tsx`. Google will try to verify this endpoint exists. If it returns the NotFound page (not a proper search results page), the Sitelinks Search Box will never activate and the schema is wasted/misleading.

**Fix:** Either implement a `/search` route that uses the query param, or remove the `potentialAction` block entirely from the WebSite schema until search is built.

---

## HIGH IMPACT — Fix This Sprint

### 🟠 H1: `es-EC` Hreflang Missing From Sitemap

**File:** `public/sitemap.xml`

`SEOHead.tsx:22` declares: `['es', 'es-PE', 'es-MX', 'es-CO', 'es-AR', 'es-CL', 'es-EC', 'x-default']`

But `sitemap.xml` never includes `es-EC` in any `<xhtml:link>` block. Google requires that every hreflang cluster in HTML is reflected in the sitemap, and vice versa. Inconsistency causes Google to drop the conflicting pairs.

Also: `/cv-builder` and `/interview-prep` sitemap entries only have `es` and `x-default` alternates — they're missing `es-PE`, `es-MX`, `es-CO`, `es-AR`, `es-CL`, `es-EC`.

**Impact:** Medium-high — LATAM country-specific rankings could be suppressed.

**Fix:** Align sitemap hreflang with SEOHead's HREFLANG_LOCALES for every URL, including `es-EC`.

---

### 🟠 H2: `/cv-builder/:country` Pages Missing From Sitemap

**File:** `public/sitemap.xml` + `src/pages/CVBuilderCountry.tsx`

`CVBuilderCountry.tsx` is already built with **rich, unique content** for at minimum: `peru`, `mexico`, `colombia`, `chile`, `argentina`. Each country page has:
- Unique meta title, description, keywords
- Country-specific intro paragraph
- Top 10 companies per country
- Local labor market stats
- 4 market-specific tips
- 4 country-specific FAQs
- FAQPage JSON-LD
- Related internal links

These are **textbook programmatic SEO pages** — already coded, already have unique value. But none are in `sitemap.xml`, and they're likely not in the main sitemap crawl path either.

**Pages to add to sitemap:**
```
https://moonjab.com/cv-builder/peru        (Priority: 0.90)
https://moonjab.com/cv-builder/mexico      (Priority: 0.90)
https://moonjab.com/cv-builder/colombia    (Priority: 0.88)
https://moonjab.com/cv-builder/chile       (Priority: 0.88)
https://moonjab.com/cv-builder/argentina   (Priority: 0.88)
```

**Target keywords these would capture:**
- "CV Perú", "currículum vitae Perú", "hacer curriculum Lima"
- "CV México", "currículum México", "curriculum CDMX"
- "CV Colombia", "curriculum Colombia", "hacer CV Bogotá"
- (etc.)

These are mid-competition keywords with meaningful LATAM search volume.

**Fix:**
1. Add all country pages to `sitemap.xml` with proper hreflang
2. Add internal links on the `/cv-builder` landing page: "También disponible para: 🇵🇪 Perú | 🇲🇽 México | 🇨🇴 Colombia | 🇨🇱 Chile | 🇦🇷 Argentina"
3. Check how many countries `CVBuilderCountry.tsx` actually supports (read the full COUNTRIES object)

---

### 🟠 H3: Help.tsx Missing FAQPage Schema

**File:** `src/pages/Help.tsx`

The Help page has 8 FAQs in an accordion — exactly the kind of content that generates FAQ rich results in Google. But there's no `FAQPage` JSON-LD.

**Target queries this would capture:**
- "cómo cancelar MoonJab"
- "MoonJab exportar CV"
- "métodos de pago MoonJab"
- "cómo funciona diagnóstico vocacional"

**Fix:** Add FAQPage schema pulling from the same accordion data. Since the FAQ content is in `es.json` (8 entries under `help.faqs`), the schema can be built inline similar to how CVBuilderLanding does it.

---

### 🟠 H4: Pricing.tsx Missing Structured Data

**File:** `src/pages/Pricing.tsx`

The Pricing page is a critical conversion page with 6 FAQs (via i18n) but has zero JSON-LD at the page level. The WebApplication offers schema exists in `index.html` but that's the global shell — per-page Helmet schemas are what Google's Rich Results Test actually picks up on a per-URL basis.

**Missing schemas:**
- `FAQPage` (6 Q&A pairs already exist in the page)
- `Offer` objects for Free + Pro plans

**Fix:** Add inline JSON-LD for FAQPage (same pattern as CVBuilderLanding), and optionally an Offer list.

---

### 🟠 H5: AggregateRating Claiming 10,000 Reviews Without Evidence

**File:** `index.html:204–210` and `:359–363`

Both the WebApplication and SoftwareApplication schemas claim:
```json
"aggregateRating": {
  "ratingValue": "4.9",
  "reviewCount": "10000"
}
```

Google's Rich Results guidelines require that `reviewCount` reflect actual reviews accessible on the page. If Google crawls the page and finds no reviews matching this count, it may issue a **manual action for misleading structured data**. This is especially risky at the schema level because it's explicit.

**Fix options:**
1. Remove `aggregateRating` from JSON-LD entirely until you have real collected reviews
2. Use `ratingCount` only from a third-party source you can cite
3. Replace with a testimonial section and use `Review` schema for individual named testimonials

The social proof claims in the Landing.tsx hero ("10K+ professionals, 87% get jobs, 4.9★") can stay as marketing copy — the issue is only when it's in `aggregateRating` JSON-LD.

---

### 🟠 H6: Blog Post `preparar-entrevista-tecnica-2025` Not in Sitemap

**File:** `src/pages/Blog.tsx:14` vs `public/sitemap.xml`

The Blog.tsx component's `blogPosts` array starts with `id: 'preparar-entrevista-tecnica-2025'`. This post is NOT in `sitemap.xml`. Either:
1. It was added to the code but the sitemap was never updated, or
2. The sitemap was written for a planned set of posts that differs from what's in code

You need to **audit all blog post IDs in `Blog.tsx`** vs `sitemap.xml` and reconcile them. Any post ID in the code that's not in the sitemap is invisible to Googlebot's sitemap crawl.

---

## MEDIUM IMPACT — Fix This Month

### 🟡 M1: Default OG Image in SEOHead Uses External GCS URL

**File:** `src/components/SEOHead.tsx:20`

```tsx
const DEFAULT_OG_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/UTzapF8dTWUuvs1ZKjSuRUh6wJR2/social-images/...';
```

This is a Google Cloud Storage URL from what appears to be a scaffolding tool, not your CDN. Problems:
- URL structure suggests it could expire or become inaccessible
- Social sharing cards for pages without a custom `ogImage` (About, Help, Pricing, Blog index) use this image instead of your branded OG image
- The URL leaks internal GCS bucket naming

**Fix:** Change `DEFAULT_OG_IMAGE` to `'https://moonjab.com/og-image.png'` — which is the correct branded image already in `/public`.

---

### 🟡 M2: VideoObject Schema References Potentially Missing Video File

**File:** `index.html:373`

```json
"contentUrl": "https://moonjab.com/moonjab-hero-video.mp4"
```

If `/moonjab-hero-video.mp4` doesn't exist in `/public`, this VideoObject is invalid structured data. Google's Rich Results Test will flag it. Verify the file exists; if not, remove the `contentUrl` field or the entire VideoObject until a video is published.

---

### 🟡 M3: About.tsx Missing Page-Level Organization Schema

**File:** `src/pages/About.tsx`

The About page is where Google looks for E-E-A-T signals about the company. The global Organization schema in `index.html` helps, but it's not page-specific. The About page should add:
- A page-level `Organization` schema (or at minimum reference `"@id": "https://moonjab.com/#organization"`)
- Consider adding named team members as `Person` entities if/when founding team info is added

---

### 🟡 M4: Blog Index Missing CollectionPage Schema

**File:** `src/pages/Blog.tsx`

The `/blog` listing page has no structured data. A `CollectionPage` or `ItemList` schema listing all blog posts would help Google understand the blog's structure and topic coverage.

---

### 🟡 M5: CCBot Allowed in robots.txt — Unintentional AI Training Data Opt-In

**File:** `public/robots.txt:62–63`

```
User-agent: CCBot
Allow: /
```

CCBot is Common Crawl's crawler — the primary data source for most open LLM training datasets (including early GPT and Llama models). Allowing it means you're opting your content into future LLM training. This may be intentional, but it's worth a deliberate decision:

- **Allow** = content may be used for LLM training, wider reach for brand mentions in AI models
- **Disallow** = content protected from training use, still crawlable by search/citation bots

Most LATAM SaaS founders opt out. The current state appears accidental.

---

### 🟡 M6: `/guest-start` Indexed at Priority 0.80 — Should Be Noindexed

**File:** `public/sitemap.xml:71–77`

`/guest-start` is a conversion funnel entry point — a user flow page, not an informational landing page. Including it in the sitemap at 0.80 priority (higher than About, Help, Blog) invites Google to index an app state as a content page. It likely has thin content for SEO purposes and dilutes the crawl budget. Check if it has meaningful SEO content; if not, noindex it and remove from sitemap.

---

## AI/GEO OPTIMIZATION GAPS

### 🤖 G1: No `/pricing.md` Machine-Readable File

**Impact:** AI agents comparing tools on behalf of buyers cannot parse MoonJab's pricing without rendering JavaScript. Per the ai-seo skill, this is increasingly important as AI-mediated buying journeys grow.

**Fix:** Create `public/pricing.md`:
```markdown
# MoonJab Pricing

## Free Plan
- Price: $0/month
- No credit card required
- Features: CV builder (Creativo template), 3 interview simulations/month, basic vocational diagnosis, guest mode access

## Pro Plan
- Price: $5 USD/month
- Billed monthly, cancel anytime
- Features: Unlimited CV builder with all templates, unlimited interview simulations, detailed AI feedback, personalized career coaching, priority support
```

---

### 🤖 G2: SEOHead Doesn't Emit `og:image:alt` — Twitter Cards Incomplete

**File:** `src/components/SEOHead.tsx:71`

The SEOHead renders `og:image` but never `og:image:alt` or `twitter:image:alt`. Only `index.html` (the shell) has these. This means all dynamic pages (every route served through React) lack accessible image alt text on social cards.

---

### 🤖 G3: Blog Content Lacks AI-Citation Structure on Subpages

**File:** `src/pages/Blog.tsx` (content data)

The blog post content uses markdown-style headers in a template string. For maximum AI citation potential (Perplexity, Google AI Overviews, ChatGPT), each article should follow the Princeton GEO patterns:
- **Definition block in first paragraph** for "What is X?" queries
- **Statistics with sources cited** (+37% AI citation boost)
- **Author name and credentials visible** on page (+25-30% boost)
- **"Last updated" date** prominently displayed (freshness signal)
- **40-60 word answer blocks** that work as standalone passages

Currently the blog renders content as plain markdown without per-article author bios, visible update dates in rendered content, or external citations.

---

### 🤖 G4: `llms.txt` Missing Blog Post Summaries

**File:** `public/llms.txt`

The file links to blog posts but doesn't include summaries. Per llmstxt.org spec, each linked URL can have a brief description. Adding 1–2 sentence summaries per blog post makes it much easier for AI systems to decide which content to retrieve and cite.

**Example addition:**
```
- [Cómo hacer un CV sin experiencia](https://moonjab.com/blog/como-hacer-un-cv-sin-experiencia): Guía completa para estudiantes universitarios que buscan su primer empleo sin experiencia laboral previa. Incluye estructura, ejemplos y errores comunes.
```

---

## SITE ARCHITECTURE ASSESSMENT

### Current Page Hierarchy

```
Homepage (/)
├── CV Builder Landing (/cv-builder)                    ← Priority L1
│   ├── /cv-builder/peru    ← EXISTS but unlisted
│   ├── /cv-builder/mexico  ← EXISTS but unlisted
│   ├── /cv-builder/colombia← EXISTS but unlisted
│   ├── /cv-builder/chile   ← EXISTS but unlisted
│   └── /cv-builder/argentina← EXISTS but unlisted
├── Interview Prep (/interview-prep)                    ← Priority L1
├── Pricing (/pricing)                                  ← Priority L1
├── Blog (/blog)                                        ← Priority L1
│   ├── /blog/como-hacer-un-cv-sin-experiencia
│   ├── /blog/preguntas-frecuentes-en-entrevistas-de-trabajo
│   ├── /blog/que-es-ats-y-como-optimizar-tu-cv
│   ├── /blog/primer-trabajo-estudiante-universitario
│   ├── /blog/como-responder-cuentame-sobre-ti
│   ├── /blog/practicas-profesionales-latam
│   └── /blog/preparar-entrevista-tecnica-2025 ← In code, NOT in sitemap
├── About (/about)
├── Help (/help)
├── Register (/registro)
├── Login (/login)
└── Guest Start (/guest-start)
```

**Architecture gaps:**
- No `/features` hub page — features are described on the homepage and landing pages but there's no dedicated features section
- No comparison pages (`/vs/resume-io`, `/vs/novoresume`, etc.) — high AI citation value
- No glossary — "¿Qué es ATS?", "¿Qué es RIASEC?" queries left to blog posts instead of dedicated, evergreen pages
- Country pages exist but are orphaned (no nav links, no sitemap, no internal linking from parent)

---

## INTERNAL LINKING GAPS

| Issue | Pages Affected | Fix |
|---|---|---|
| Country pages orphaned | `/cv-builder/peru` etc. | Link from `/cv-builder` landing + blog posts |
| Blog posts don't link to product pages | All blog posts | Add "Try it on MoonJab →" CTAs to relevant posts |
| About page not linked from footer | `/about` | Verify footer navigation includes it |
| Help page weakly linked | `/help` | Link from dashboard, email, pricing |
| No cross-links between CV Builder ↔ Interview Prep | Both pages | Add "También te puede interesar" section |

---

## KEYWORD COVERAGE MAP

| Priority Keyword | Current Coverage | Gap |
|---|---|---|
| CV Builder con IA | /cv-builder (strong) | ✅ Covered |
| Crear CV ATS | /cv-builder, index | ✅ Covered |
| Simulador de entrevistas IA | /interview-prep | ✅ Covered |
| CV Perú / currículum vitae Perú | /cv-builder/peru | ⚠️ Exists, not indexed |
| CV México / currículum México | /cv-builder/mexico | ⚠️ Exists, not indexed |
| CV Colombia | /cv-builder/colombia | ⚠️ Exists, not indexed |
| Primer empleo estudiante | Blog post + /cv-builder | ✅ Covered |
| Prácticas profesionales LATAM | Blog post | ✅ Covered |
| Qué es ATS | Blog post | ✅ Covered |
| MoonJab vs [competitor] | MISSING | ❌ Not built |
| Alternativas a [competitor] | MISSING | ❌ Not built |
| Cómo responder "cuéntame sobre ti" | Blog post | ✅ Covered |
| Diagnóstico vocacional RIASEC | MISSING (no landing page) | ❌ Not built |
| Test vocacional gratis | MISSING | ❌ Not built |
| Coach de carrera IA | MISSING (described, not targeted) | ❌ Not built |

---

## QUICK WINS (< 1 hour each)

| Win | File | Time |
|---|---|---|
| Fix `/register` → `/registro` in HowTo schema | `index.html:309` | 2 min |
| Remove duplicate routes + imports | `App.tsx:33–34, 107–108` | 2 min |
| Remove `SearchAction` or build `/search` | `index.html:147–157` | 5 min |
| Fix default OG image URL in SEOHead | `SEOHead.tsx:20` | 2 min |
| Add missing SEOHead props for articles | `SEOHead.tsx` | 20 min |
| Add es-EC to sitemap hreflang | `sitemap.xml` | 10 min |
| Remove sitemap-blog.xml reference OR create file | `robots.txt:69` | 5 min |
| Add country pages to sitemap | `sitemap.xml` | 15 min |
| Create `public/pricing.md` | New file | 10 min |
| Add FAQPage schema to Help.tsx | `Help.tsx` | 20 min |
| Add blog post summaries to llms.txt | `public/llms.txt` | 15 min |

---

## PRIORITIZED ACTION PLAN

### Sprint 1 — Fix Breakages (This Week)
1. **[C1]** Add missing props to `SEOHead.tsx` — Article schema + OG article metadata
2. **[C2]** Remove duplicate imports and routes from `App.tsx`
3. **[C3]** Create `sitemap-blog.xml` or remove reference from `robots.txt`
4. **[C4]** Fix `/register` → `/registro` in HowTo JSON-LD
5. **[C5]** Remove or implement `SearchAction` in WebSite schema
6. **[H5]** Audit `Blog.tsx` post IDs vs `sitemap.xml`, reconcile

### Sprint 2 — High-Impact SEO (Next 2 Weeks)
7. **[H1]** Add `es-EC` and country-specific hreflang to all sitemap URLs
8. **[H2]** Add all `/cv-builder/:country` pages to sitemap + internal links
9. **[H3]** Add FAQPage JSON-LD to `Help.tsx`
10. **[H4]** Add FAQPage JSON-LD to `Pricing.tsx`
11. **[H5]** Fix `AggregateRating` in WebApplication schema
12. **[M1]** Fix default OG image to `/og-image.png`
13. **[G1]** Create `public/pricing.md` for AI agent legibility

### Sprint 3 — Content & GEO Expansion (This Month)
14. **[G4]** Add blog summaries to `llms.txt`
15. **[G3]** Add structured answer blocks and statistics to top 3 blog posts
16. **[M6]** Evaluate `/guest-start` noindex decision
17. **[M5]** Decide CCBot policy in robots.txt
18. **[G2]** Add `og:image:alt` to SEOHead output

### Sprint 4 — Architecture Expansion (Next Quarter)
19. Build `/cv-builder/` internal linking section with country flags
20. Create 3 comparison/alternatives pages (`vs novoresume`, `vs resume.io`, `vs canva cv`)
21. Create dedicated `/riasec` or `/diagnostico-vocacional` landing page (missing keyword target)
22. Consider `/blog/category/:slug` pages for CV, Entrevistas, Primer Empleo clusters
23. Build or plan `/search` endpoint if Sitelinks Search Box is desired

---

## AI / GEO VISIBILITY CHECKLIST

| Check | Status |
|---|---|
| robots.txt allows GPTBot | ✅ |
| robots.txt allows ClaudeBot + anthropic-ai | ✅ |
| robots.txt allows PerplexityBot | ✅ |
| robots.txt allows Google-Extended | ✅ |
| `/llms.txt` exists and is comprehensive | ✅ |
| FAQPage schema on key pages | ⚠️ Partial (missing Help, Pricing) |
| HowTo schema | ✅ (needs /register fix) |
| Organization schema with sameAs | ✅ |
| AI-friendly content blocks (definition first, stats cited) | ⚠️ Partial |
| Author bylines with credentials on blog | ⚠️ Name only, no credentials |
| "Last updated" dates visible on content | ❌ Not visible on rendered pages |
| `/pricing.md` for AI agents | ❌ Missing |
| Wikipedia or third-party mentions | ❌ Not assessed |
| Review site profiles (G2, Capterra, etc.) | ❌ Not assessed |

---

## STRUCTURED DATA SUMMARY

| Page | Schema Present | Missing |
|---|---|---|
| `/` (index.html) | Organization, WebSite, WebApplication, FAQPage (6), BreadcrumbList, HowTo, SoftwareApplication, VideoObject, ItemList | SearchAction needs fix, /register URL fix, AggregateRating risk |
| `/cv-builder` | SoftwareApplication, FAQPage (5) | Breadcrumb schema |
| `/interview-prep` | SoftwareApplication, FAQPage (6) | Breadcrumb schema |
| `/cv-builder/:country` | FAQPage (per country) | Breadcrumb, SoftwareApplication |
| `/pricing` | None | FAQPage, Offer |
| `/about` | None | Organization (page-level) |
| `/blog` | None | CollectionPage/ItemList |
| `/blog/:id` | Article (BROKEN — see C1) | Fix C1 to restore |
| `/help` | None | FAQPage |
| `/privacy` | None | — (acceptable) |
| `/terms` | None | — (acceptable) |

---

*Report generated from direct code analysis of `index.html`, `App.tsx`, `SEOHead.tsx`, `sitemap.xml`, `robots.txt`, `llms.txt`, and all page components in `src/pages/`. No external crawl tools used.*
