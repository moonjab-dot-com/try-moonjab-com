"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCVList } from "@/hooks/useCVList"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Plus,
  Pencil,
  Calendar,
  Sparkles,
  TrendingUp,
} from "lucide-react"

export default function CVListPage() {
  const { cvs, loading } = useCVList()

  return (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Mis CVs
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Gestiona y optimiza tus documentos profesionales
          </p>
        </div>
        <Link href="/dashboard/cvs/new">
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-orange shine">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo CV
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-44 rounded-2xl" />
          ))}
        </div>
      ) : cvs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cvs.map((cv) => (
            <div
              key={cv.id}
              className="group bg-card rounded-2xl border border-border/50 shadow-card-sm p-6 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <Badge
                  variant="outline"
                  className="text-xs border-green-200 text-green-700 bg-green-50"
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  72% ATS
                </Badge>
              </div>

              <h3
                className="font-semibold mb-1 truncate"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {cv.title}
              </h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mb-5">
                <Calendar className="w-3 h-3" />
                Actualizado{" "}
                {cv.updated_at
                  ? new Date(cv.updated_at).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "short",
                    })
                  : "nunca"}
              </p>

              <div className="flex gap-2">
                <Link href={`/dashboard/cvs/${cv.id}`} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full h-9 text-sm font-medium border-border/60"
                  >
                    <Pencil className="w-3.5 h-3.5 mr-1.5" />
                    Editar
                  </Button>
                </Link>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9 text-primary hover:bg-primary/10"
                  title="Analizar con IA"
                >
                  <Sparkles className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="bg-card rounded-2xl border border-dashed border-border/70 p-14 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <h3
            className="font-semibold text-lg mb-1.5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Crea tu primer CV
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">
            Usa nuestra IA para construir un CV profesional que supere los
            filtros ATS y destaque ante los reclutadores.
          </p>
          <Link href="/dashboard/cvs/new">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-orange shine">
              <Plus className="w-4 h-4 mr-2" />
              Crear mi primer CV
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
