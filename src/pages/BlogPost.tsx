import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Twitter, Linkedin, User } from 'lucide-react';
import { blogPosts } from './Blog';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === id);
  const currentIndex = blogPosts.findIndex(p => p.id === id);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <SEOHead
          title="Artículo no encontrado — Blog MoonJab"
          description="El artículo que buscas no existe o fue movido. Explora el blog de MoonJab con guías sobre CV, entrevistas y carrera."
          path={`/blog/${id ?? ''}`}
          noindex
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <Link to="/blog">
            <Button>Volver al blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const canonicalPath = `/blog/${post.id}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://moonjab.com${canonicalPath}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: `${post.isoDate}T00:00:00-05:00`,
    dateModified: `${post.isoDate}T00:00:00-05:00`,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
      url: 'https://moonjab.com/about',
    },
    publisher: { '@id': 'https://moonjab.com/#organization' },
    image: {
      '@type': 'ImageObject',
      url: post.image,
      width: 800,
      height: 450,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://moonjab.com${canonicalPath}`,
    },
    articleSection: post.category,
    inLanguage: 'es',
    url: `https://moonjab.com${canonicalPath}`,
  };

  const shareUrl = window.location.href;
  const shareText = `${post.title} - MoonJab Blog`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={canonicalPath}
        ogImage={post.image}
        ogImageAlt={post.title}
        type="article"
        publishedTime={`${post.isoDate}T00:00:00-05:00`}
        modifiedTime={`${post.isoDate}T00:00:00-05:00`}
        author={post.author}
        keywords={`${post.category.toLowerCase()}, ${post.title.toLowerCase()}, MoonJab blog, empleabilidad LATAM`}
        breadcrumbs={[
          { name: 'Blog', url: 'https://moonjab.com/blog' },
          { name: post.title, url: `https://moonjab.com${canonicalPath}` },
        ]}
        schema={articleSchema}
      />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <OfficialLogo size="lg" to="/" />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/blog">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Blog
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          width="1200"
          height="630"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Article */}
      <article className="container mx-auto px-6 max-w-3xl -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-xl mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime} de lectura
                </span>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 pt-6">
              <span className="text-sm text-muted-foreground">Compartir:</span>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compartir en WhatsApp"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(shareUrl)}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            {post.content.split('\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-3xl font-bold mt-12 mb-6">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('#### ')) {
                return <h4 key={i} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('#### ', '')}</h4>;
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={i} className="font-bold text-lg">{paragraph.replace(/\*\*/g, '')}</p>;
              }
              if (paragraph.startsWith('- ')) {
                return <li key={i} className="ml-6">{paragraph.replace('- ', '')}</li>;
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ')) {
                return <li key={i} className="ml-6">{paragraph.replace(/^\d+\. /, '')}</li>;
              }
              if (paragraph.startsWith('❌') || paragraph.startsWith('✅')) {
                return <p key={i} className="pl-4 border-l-4 border-primary/30 my-2">{paragraph}</p>;
              }
              if (paragraph.startsWith('---')) {
                return <hr key={i} className="my-12" />;
              }
              if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                return <p key={i} className="italic text-muted-foreground">{paragraph.replace(/^\*|\*$/g, '')}</p>;
              }
              if (paragraph.startsWith('"') || paragraph.startsWith('"')) {
                return <blockquote key={i} className="border-l-4 border-primary pl-6 italic my-8 text-xl">{paragraph}</blockquote>;
              }
              if (paragraph.trim() === '') return null;
              return <p key={i} className="my-4 leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para impulsar tu carrera?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Descubre tu potencial con el diagnóstico gratuito de MoonJab
            </p>
            <Link to="/registro">
              <Button size="lg" variant="secondary" className="font-semibold">
                Empieza gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Navigation */}
          <div className="grid md:grid-cols-2 gap-6 pb-16">
            {prevPost && (
              <button
                onClick={() => navigate(`/blog/${prevPost.id}`)}
                className="p-6 rounded-xl border text-left hover:border-primary hover:bg-muted/50 transition-all group"
              >
                <span className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                  <ArrowLeft className="h-4 w-4" />
                  Artículo anterior
                </span>
                <span className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {prevPost.title}
                </span>
              </button>
            )}
            {nextPost && (
              <button
                onClick={() => navigate(`/blog/${nextPost.id}`)}
                className="p-6 rounded-xl border text-right hover:border-primary hover:bg-muted/50 transition-all group md:col-start-2"
              >
                <span className="text-sm text-muted-foreground flex items-center justify-end gap-2 mb-2">
                  Siguiente artículo
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {nextPost.title}
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </article>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center">
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Volver al blog
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
