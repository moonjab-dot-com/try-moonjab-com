"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signUpWithEmail } from "@/lib/auth/services"
import { handleSupabaseError, getUserFriendlyMessage } from "@/lib/utils/error-handler"
import { toast } from "sonner"
import { Zap, ArrowLeft, Eye, EyeOff, ArrowRight, Check } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden")
      return
    }
    setLoading(true)
    try {
      await signUpWithEmail(formData.email, formData.password, formData.name)
      toast.success("Cuenta creada. Por favor verifica tu correo.")
      router.push("/dashboard/onboarding")
    } catch (error) {
      const apiError = handleSupabaseError(error)
      const message = getUserFriendlyMessage(apiError)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  const perks = [
    "CV profesional en minutos con IA",
    "Score ATS 90%+ garantizado",
    "Practica entrevistas hasta estar listo",
    "Diagnóstico vocacional personalizado",
    "7 días gratis en plan Pro",
  ]

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* ── LEFT: Brand Panel ─────────────────────────── */}
      <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f14] via-[#14101a] to-[#1a0d0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_-20%,rgba(255,122,0,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        {/* Logo */}
        <div className="relative">
          <Link href="/" className="flex items-center gap-2.5 no-tap">
            <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              MoonJab
            </span>
          </Link>
        </div>

        {/* Content */}
        <div className="relative space-y-8 max-w-sm">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/80">
              Empieza gratis hoy
            </p>
            <h2
              className="text-3xl font-bold text-white leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Tu carrera LATAM
              <br />
              <span className="gradient-text">en otro nivel</span>
            </h2>
          </div>

          <ul className="space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-white/80 text-sm">{perk}</span>
              </li>
            ))}
          </ul>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { value: "50K+", label: "Profesionales" },
              { value: "94%", label: "ATS score" },
              { value: "2x", label: "Más entrevistas" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
              >
                <p
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-xs text-white/50">{s.label}</p>
              </div>
            ))}
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

          {/* Back link */}
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
              Crea tu cuenta gratis
            </h1>
            <p className="text-muted-foreground text-sm">
              Sin tarjeta de crédito · 7 días Pro gratis
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Nombre completo
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Ana García"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                required
                className="h-11 border-border/70 focus:border-primary focus-visible:ring-primary/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Correo electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                required
                className="h-11 border-border/70 focus:border-primary focus-visible:ring-primary/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Mínimo 8 caracteres"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  minLength={8}
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirmar contraseña
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Repite tu contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  className="h-11 pr-10 border-border/70 focus:border-primary focus-visible:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                >
                  {showConfirm ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold shadow-orange shine mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Creando cuenta...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Crear cuenta gratis
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Al registrarte aceptas nuestros{" "}
              <a href="#" className="underline hover:text-foreground">
                Términos de servicio
              </a>{" "}
              y{" "}
              <a href="#" className="underline hover:text-foreground">
                Política de privacidad
              </a>
            </p>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-7">
            ¿Ya tienes cuenta?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
