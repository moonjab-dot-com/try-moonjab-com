"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Sparkles,
  FileText,
  Target,
  MessageSquare,
  Brain,
  Check,
  Star,
  ChevronRight,
  Zap,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── NAV ────────────────────────────────────────── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-tap">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-orange">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              MoonJab
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {[
              ["#features", "Funciones"],
              ["#how-it-works", "Cómo funciona"],
              ["#pricing", "Precios"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex font-medium"
              >
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-orange shine"
              >
                Empieza gratis
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden gradient-hero">
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 70%)",
            transform: "translate(30%, -40%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,122,0,0.04) 0%, transparent 70%)",
            transform: "translate(-30%, 40%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-16 items-center">
            {/* Copy */}
            <div className="space-y-7 animate-slide-up">
              <Badge className="gap-1.5 bg-primary/10 text-primary border-primary/25 px-3 py-1.5 text-sm font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                IA de nueva generación para tu carrera
              </Badge>

              <div className="space-y-4">
                <h1
                  className="text-5xl lg:text-[3.6rem] font-bold leading-[1.08] text-balance"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Tu próximo trabajo
                  <br />
                  <span className="gradient-text">empieza aquí</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[500px]">
                  Construye el CV perfecto, practica entrevistas con IA y
                  descubre las oportunidades que te merecen — todo en un solo
                  lugar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold shadow-orange hover-lift shine"
                  >
                    Crear cuenta gratis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 text-base font-medium border-border/70"
                  >
                    Ver cómo funciona
                  </Button>
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2.5">
                  {[
                    ["AR", "bg-orange-500"],
                    ["MX", "bg-blue-500"],
                    ["CO", "bg-green-500"],
                    ["PE", "bg-purple-500"],
                  ].map(([initials, color]) => (
                    <div
                      key={initials}
                      className={`w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold text-white ${color}`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">50,000+</span>{" "}
                  profesionales LATAM ya usan MoonJab
                </p>
              </div>
            </div>

            {/* Product mockup */}
            <div className="relative hidden lg:block">
              <div className="animate-float">
                {/* Main app window */}
                <div className="bg-card rounded-2xl border border-border/60 shadow-brand-xl overflow-hidden">
                  {/* Window chrome */}
                  <div className="bg-muted/40 border-b border-border/50 px-4 py-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    <div className="flex-1 ml-3 bg-muted rounded h-5 max-w-[180px]" />
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Header row */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-1.5">
                        <div className="w-36 h-4 bg-foreground/10 rounded-md" />
                        <div className="w-52 h-3 bg-muted rounded-md" />
                      </div>
                      <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-primary/60" />
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          label: "ATS Score",
                          value: "94%",
                          bar: "bg-green-500",
                          bg: "bg-green-50",
                        },
                        {
                          label: "Racha",
                          value: "12 días",
                          bar: "bg-primary",
                          bg: "bg-orange-50",
                        },
                        {
                          label: "Entrevistas",
                          value: "8",
                          bar: "bg-blue-500",
                          bg: "bg-blue-50",
                        },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className={`${s.bg} rounded-xl p-3 border border-border/30`}
                        >
                          <div
                            className={`w-6 h-1.5 rounded-full ${s.bar} mb-2`}
                          />
                          <p className="text-sm font-bold leading-none mb-1">
                            {s.value}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CV card */}
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded-md bg-primary/25" />
                        <div className="w-24 h-3 bg-primary/20 rounded" />
                        <div className="ml-auto flex items-center gap-1 bg-green-500/15 text-green-700 rounded-full px-2 py-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          <span className="text-[10px] font-semibold">
                            94% ATS
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-foreground/8 rounded-full" />
                        <div className="w-4/5 h-2 bg-foreground/6 rounded-full" />
                        <div className="w-2/3 h-2 bg-foreground/4 rounded-full" />
                      </div>
                    </div>

                    {/* AI button */}
                    <div className="bg-primary rounded-xl h-10 flex items-center justify-center gap-2 cursor-pointer shadow-orange">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      <span className="text-sm font-semibold text-white">
                        Analizar con IA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div
                  className="absolute -top-4 -right-6 bg-card rounded-xl border border-border/60 shadow-brand px-3 py-2 flex items-center gap-2"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
                  <span className="text-xs font-semibold">Match 94%</span>
                </div>
                <div className="absolute -bottom-4 -left-6 bg-card rounded-xl border border-border/60 shadow-brand px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-semibold">CV Optimizado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ──────────────────────────── */}
      <section className="py-10 border-y border-border/40 bg-muted/25">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-7">
            Profesionales de las mejores empresas de LATAM usan MoonJab
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              "Mercado Libre",
              "Rappi",
              "Nubank",
              "VTEX",
              "Kavak",
              "Lemon Cash",
              "Boa Compra",
              "OLX",
            ].map((c) => (
              <span
                key={c}
                className="text-sm font-semibold text-muted-foreground/60"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────── */}
      <section id="features" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary font-medium"
            >
              Funciones
            </Badge>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Todo lo que necesitas para
              <br />
              <span className="gradient-text">conseguir ese trabajo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              MoonJab combina IA de última generación con el conocimiento del
              mercado laboral LATAM para darte ventaja real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: FileText,
                accent: "bg-orange-500",
                bg: "bg-orange-50 border-orange-100/80 dark:bg-orange-950/20 dark:border-orange-900/30",
                title: "Constructor de CV con IA",
                desc: "Crea un CV que supera los filtros ATS y atrae la atención de reclutadores. La IA analiza cada sección y te sugiere mejoras en tiempo real.",
                items: [
                  "Análisis ATS instantáneo",
                  "Sugerencias de palabras clave",
                  "Plantillas profesionales",
                  "Exportación en PDF",
                ],
              },
              {
                icon: Target,
                accent: "bg-blue-500",
                bg: "bg-blue-50 border-blue-100/80 dark:bg-blue-950/20 dark:border-blue-900/30",
                title: "Optimización ATS",
                desc: "Tu CV llega a ojos humanos. Detectamos los filtros de cada empresa y te ayudamos a pasar el 90%+ de las selecciones automáticas.",
                items: [
                  "Score en tiempo real",
                  "Match con descripciones de trabajo",
                  "Análisis por empresa",
                  "Recomendaciones específicas",
                ],
              },
              {
                icon: MessageSquare,
                accent: "bg-green-500",
                bg: "bg-green-50 border-green-100/80 dark:bg-green-950/20 dark:border-green-900/30",
                title: "Simulador de Entrevistas",
                desc: "Practica con nuestro entrevistador de IA que simula exactamente las preguntas de tu industria. Recibe feedback instantáneo y mejora cada vez.",
                items: [
                  "Entrevistas personalizadas",
                  "Feedback en tiempo real",
                  "Análisis de respuestas",
                  "Historial de progreso",
                ],
              },
              {
                icon: Brain,
                accent: "bg-purple-500",
                bg: "bg-purple-50 border-purple-100/80 dark:bg-purple-950/20 dark:border-purple-900/30",
                title: "Diagnóstico Vocacional",
                desc: "Descubre los roles perfectos para tu perfil. Nuestro test psicométrico analiza tus habilidades, valores y estilo de trabajo para encontrar tu match ideal.",
                items: [
                  "Test de 15 minutos",
                  "Análisis de 100+ roles",
                  "Reporte detallado con insights",
                  "Plan de desarrollo personalizado",
                ],
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`group rounded-2xl border p-8 hover-lift cursor-pointer ${f.bg}`}
              >
                <div className="space-y-5">
                  <div
                    className={`w-11 h-11 rounded-xl ${f.accent} flex items-center justify-center`}
                  >
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {f.desc}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {f.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Explorar función
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-muted/25">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary font-medium"
            >
              Proceso
            </Badge>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              De cero a oportunidad
              <br />
              <span className="gradient-text">en 3 pasos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {[
              {
                step: "01",
                icon: Users,
                title: "Crea tu perfil",
                desc: "En 2 minutos configuras tu perfil, experiencia e intereses. La IA aprende tu contexto para darte recomendaciones realmente personalizadas.",
              },
              {
                step: "02",
                icon: Brain,
                title: "La IA analiza tu potencial",
                desc: "Nuestro motor de IA procesa tu perfil y te muestra los roles que mejor encajan con tus habilidades, valores y el mercado laboral actual.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Aplica con confianza",
                desc: "Con tu CV optimizado, entrevistas practicadas y oportunidades identificadas, aplicas con máximas probabilidades de conseguir el rol.",
              },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%-8px)] w-[calc(100%-24px)] border-t-2 border-dashed border-border/60 z-0" />
                )}
                <div className="relative z-10 bg-card rounded-2xl p-8 border border-border/50 shadow-card-sm hover-lift">
                  <div
                    className="text-6xl font-bold text-primary/8 mb-4 select-none"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section id="testimonials" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary font-medium"
            >
              Historias reales
            </Badge>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ellos ya cambiaron
              <br />
              <span className="gradient-text">su carrera con MoonJab</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Valentina García",
                role: "UX Designer en Rappi",
                location: "Bogotá, Colombia",
                quote:
                  "Subí mi score ATS del 62% al 91% en una tarde. La semana siguiente me llamaron para 3 entrevistas. MoonJab es literalmente la herramienta más útil que he usado.",
                avatar: "VG",
                avatarBg: "bg-orange-500",
              },
              {
                name: "Diego Martínez",
                role: "Product Manager en VTEX",
                location: "Buenos Aires, Argentina",
                quote:
                  "El simulador de entrevistas me preparó para preguntas que nunca hubiera anticipado. Llegué con una confianza completamente diferente. Conseguí el trabajo.",
                avatar: "DM",
                avatarBg: "bg-blue-500",
              },
              {
                name: "Camila Torres",
                role: "Data Analyst en Nubank",
                location: "Ciudad de México, México",
                quote:
                  "El diagnóstico vocacional fue una revelación. No sabía que el análisis de datos era mi match perfecto hasta que MoonJab lo confirmó. Cambié de carrera y no me arrepiento.",
                avatar: "CT",
                avatarBg: "bg-purple-500",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl p-7 border border-border/50 shadow-card-sm hover-lift"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-muted/25">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary font-medium"
            >
              Precios
            </Badge>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Simple y transparente
            </h2>
            <p className="text-xl text-muted-foreground">
              Empieza gratis. Escala cuando estés listo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card-sm flex flex-col">
              <div className="mb-5">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Gratis
                </h3>
                <p className="text-muted-foreground text-sm">
                  Para empezar a explorar
                </p>
              </div>
              <div className="mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  $0
                </span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "1 CV activo",
                  "5 análisis de IA por mes",
                  "3 simulaciones de entrevista/mes",
                  "Diagnóstico vocacional básico",
                  "Acceso a oportunidades",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link href="/register">
                <Button variant="outline" className="w-full h-11 font-medium">
                  Empezar gratis
                </Button>
              </Link>
            </div>

            {/* Pro */}
            <div className="relative rounded-2xl overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-orange-400" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
              <div className="relative p-8 flex flex-col h-full shine">
                <div className="absolute top-5 right-5">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                    ✦ Más popular
                  </Badge>
                </div>
                <div className="mb-5">
                  <h3
                    className="text-xl font-bold mb-1 text-white"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Pro
                  </h3>
                  <p className="text-white/70 text-sm">
                    Para acelerar tu carrera
                  </p>
                </div>
                <div className="mb-6">
                  <span
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    $20
                  </span>
                  <span className="text-white/70">/mes</span>
                  <p className="text-white/55 text-xs mt-1">
                    o $200/año (ahorra 17%)
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "CVs ilimitados",
                    "IA sin límites",
                    "Entrevistas ilimitadas",
                    "Diagnóstico avanzado + insights",
                    "Acceso prioritario a oportunidades",
                    "Coaching de IA personalizado",
                    "Soporte prioritario",
                  ].map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2.5 text-sm text-white"
                    >
                      <Check className="w-4 h-4 text-white/80 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/register">
                  <Button className="w-full h-11 bg-white text-primary hover:bg-white/95 font-semibold shadow-sm">
                    Probar 7 días gratis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-orange-400" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_55%)]" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10 py-16 px-8 space-y-6">
              <h2
                className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                ¿Listo para conseguir
                <br />
                el trabajo que mereces?
              </h2>
              <p className="text-xl text-white/75 max-w-lg mx-auto leading-relaxed">
                Únete a 50,000+ profesionales LATAM que ya usan MoonJab.
                Empieza gratis, sin tarjeta de crédito.
              </p>
              <div className="flex justify-center">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/95 h-12 px-10 text-base font-bold shadow-lg"
                  >
                    Crear cuenta gratis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <p className="text-white/45 text-sm">
                Sin tarjeta de crédito · Sin compromisos · Cancela cuando
                quieras
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="border-t border-border/40 bg-muted/15">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <span
                  className="font-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  MoonJab
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La plataforma de carrera con IA para profesionales de América
                Latina.
              </p>
            </div>

            {[
              {
                title: "Producto",
                links: [
                  "Constructor de CV",
                  "Optimización ATS",
                  "Entrevistas con IA",
                  "Diagnóstico Vocacional",
                ],
              },
              {
                title: "Empresa",
                links: ["Sobre nosotros", "Blog", "Carreras", "Prensa"],
              },
              {
                title: "Legal",
                links: ["Privacidad", "Términos", "Cookies"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 MoonJab. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5" />
              Tus datos están protegidos con encriptación de extremo a extremo
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
