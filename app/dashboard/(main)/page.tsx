"use client"

import { useAuth } from "@/hooks/useAuth"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Flame,
  Send,
  FileText,
  ArrowRight,
  Sparkles,
  Target,
  MessageSquare,
  Brain,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-7 w-52" />
          <Skeleton className="h-4 w-72" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-28 rounded-2xl" />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="col-span-2 h-56 rounded-2xl" />
          <Skeleton className="h-56 rounded-2xl" />
        </div>
      </div>
    )
  }

  const name =
    user?.user_metadata?.full_name?.split(" ")[0] || "Usuario"

  const stats = [
    {
      label: "Racha activa",
      value: "12",
      unit: "días",
      icon: Flame,
      accent: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-200/60",
    },
    {
      label: "Aplicaciones",
      value: "8",
      unit: "enviadas",
      icon: Send,
      accent: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-200/60",
    },
    {
      label: "CVs creados",
      value: "2",
      unit: "activos",
      icon: FileText,
      accent: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
    },
  ]

  const quickActions = [
    {
      href: "/dashboard/cvs",
      icon: FileText,
      title: "Constructor de CV",
      desc: "Crea o mejora tu CV con IA",
      color: "bg-orange-500",
      lightBg: "bg-orange-50 border-orange-100/80 hover:border-orange-200",
    },
    {
      href: "/dashboard/opportunities",
      icon: Target,
      title: "Oportunidades",
      desc: "Ver trabajos que hacen match",
      color: "bg-blue-500",
      lightBg: "bg-blue-50 border-blue-100/80 hover:border-blue-200",
    },
    {
      href: "/dashboard/interviews",
      icon: MessageSquare,
      title: "Practicar entrevista",
      desc: "Simula con IA tu próxima entrevista",
      color: "bg-green-500",
      lightBg: "bg-green-50 border-green-100/80 hover:border-green-200",
    },
    {
      href: "/dashboard/diagnostic",
      icon: Brain,
      title: "Diagnóstico Vocacional",
      desc: "Descubre tu rol ideal",
      color: "bg-purple-500",
      lightBg: "bg-purple-50 border-purple-100/80 hover:border-purple-200",
    },
  ]

  const dailyJob = {
    title: "Product Designer",
    company: "Mercado Libre",
    location: "Remoto · LATAM",
    posted: "Hace 2h",
    match: 94,
    tags: ["Figma", "Design Systems", "Research"],
  }

  return (
    <div className="space-y-7">
      {/* ── Welcome ───────────────────────────────────── */}
      <div className="flex items-start justify-between">
        <div>
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Hola, {name} 👋
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Tienes 3 nuevas oportunidades que coinciden con tu perfil.
          </p>
        </div>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white font-medium shadow-orange shine hidden sm:flex"
        >
          <Sparkles className="w-3.5 h-3.5 mr-1.5" />
          Análisis IA
        </Button>
      </div>

      {/* ── Stats row ─────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`bg-card rounded-2xl p-5 border ${s.border} shadow-card-sm flex items-center gap-4`}
          >
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center shrink-0`}>
              <s.icon className={`w-5 h-5 ${s.accent}`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="font-bold text-lg leading-tight">
                {s.value}{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  {s.unit}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main grid ─────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Daily job — left 2 cols */}
        <div className="lg:col-span-2 bg-card rounded-2xl border border-border/50 shadow-card-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <h2
                className="font-semibold text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Trabajo del día
              </h2>
            </div>
            <Badge className="bg-green-500/10 text-green-700 border-green-200/60 text-xs font-semibold">
              {dailyJob.match}% match
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {dailyJob.title}
              </h3>
              <p className="text-muted-foreground font-medium text-sm mt-0.5">
                {dailyJob.company}
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {dailyJob.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {dailyJob.posted}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {dailyJob.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs border-border/60"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <Link href={`/dashboard/opportunities/opp_1`}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-10 shadow-orange shine">
                Ver detalles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* AI Score card */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/15 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <h2
                className="font-semibold text-sm text-primary"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Tu ATS Score
              </h2>
            </div>
            <div
              className="text-5xl font-bold text-primary"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              72%
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Actualiza tu CV para llegar al 90%+
            </p>
          </div>

          {/* Mini bar */}
          <div className="mt-4">
            <div className="w-full h-2 bg-primary/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: "72%" }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          <Link href="/dashboard/cvs" className="block mt-4">
            <Button
              variant="outline"
              className="w-full h-9 text-xs font-semibold border-primary/25 text-primary hover:bg-primary/10 hover:border-primary/40"
            >
              Mejorar mi CV
            </Button>
          </Link>
        </div>
      </div>

      {/* ── Quick actions ─────────────────────────────── */}
      <div>
        <h2
          className="font-semibold text-sm mb-3 text-muted-foreground"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Accesos rápidos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <Link key={action.href} href={action.href}>
              <div
                className={`rounded-xl border p-4 cursor-pointer hover-lift ${action.lightBg} transition-all`}
              >
                <div
                  className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center mb-3`}
                >
                  <action.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-semibold leading-tight mb-0.5">
                  {action.title}
                </p>
                <p className="text-xs text-muted-foreground leading-snug">
                  {action.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
