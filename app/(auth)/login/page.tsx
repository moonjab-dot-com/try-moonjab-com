"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signInWithEmail } from "@/lib/auth/services"
import { handleSupabaseError, getUserFriendlyMessage } from "@/lib/utils/error-handler"
import { toast } from "sonner"
import { Zap, ArrowLeft, Eye, EyeOff, ArrowRight, Star } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmail(email, password)
      toast.success("¡Bienvenido de vuelta!")
      router.push("/dashboard")
    } catch (error) {
      const apiError = handleSupabaseError(error)
      const message = getUserFriendlyMessage(apiError)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* ── LEFT: Brand Panel ─────────────────────────── */}
      <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-orange-400" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.14),transparent_55%)]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

        {/* Logo */}
        <div className="relative">
          <Link href="/" className="flex items-center gap-2.5 no-tap">
            <div className="w-9 h-9 rounded-xl bg-white/25 flex items-center justify-center border border-white/30">
              <Zap className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
            </div>
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              MoonJab
            </span>
          </Link>
        </div>

        {/* Testimonial */}
        <div className="relative space-y-6 max-w-sm">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            ))}
          </div>
          <blockquote className="text-xl font-medium text-white leading-relaxed">
            "MoonJab me ayudó a pasar de 3 años buscando trabajo a conseguir
            una oferta en 2 semanas. El análisis ATS fue la clave."
          </blockquote>
          <footer className="text-white/65 text-sm">
            <span className="text-white font-semibold">Ana Flores</span>
            {" — "}Product Designer en Mercado Libre
          </footer>

          {/* Avatars */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2.5">
              {[
                ["AF", "bg-orange-300"],
                ["DM", "bg-blue-300"],
                ["VG", "bg-green-300"],
              ].map(([av, color]) => (
                <div
                  key={av}
                  className={`w-8 h-8 rounded-full ${color} border-2 border-white/40 flex items-center justify-center text-[10px] font-bold text-white`}
                >
                  {av}
                </div>
              ))}
            </div>
            <p className="text-white/70 text-sm">
              <span className="text-white font-semibold">50,000+</span>{" "}
              profesionales confían en MoonJab
            </p>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Form ───────────────────────────────── */}
      <div className="flex flex-col justify-center p-8 lg:p-14">
        <div className="max-w-sm w-full mx-auto">
          {/* Mobile logo */}
          <div className="flex items-center justify-between mb-10 lg:hidden">
            <Link href="/" className="flex items-center gap-2 no-tap">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                MoonJab
              </span>
            </Link>
          </div>

          {/* Back link (desktop) */}
          <Link
            href="/"
            className="hidden lg:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 no-tap"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="mb-8">
            <h1
              className="text-2xl font-bold mb-1.5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Bienvenido de vuelta
            </h1>
            <p className="text-muted-foreground text-sm">
              Ingresa a tu cuenta para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                className="h-11 border-border/70 focus:border-primary focus-visible:ring-primary/30"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Contraseña
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary hover:underline font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                  className="h-11 pr-10 border-border/70 focus:border-primary focus-visible:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold shadow-orange shine mt-1"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Ingresando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Iniciar sesión
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-7">
            ¿No tienes cuenta?{" "}
            <Link
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Regístrate gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
