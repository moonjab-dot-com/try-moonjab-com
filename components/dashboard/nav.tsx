"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  MessageSquare,
  Settings,
  LogOut,
  Brain,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/hooks/useAuth"
import { toast } from "sonner"

const navGroups = [
  {
    label: "Principal",
    items: [
      { href: "/dashboard", icon: LayoutDashboard, label: "Inicio", exact: true },
      { href: "/dashboard/cvs", icon: FileText, label: "Mis CVs" },
      { href: "/dashboard/opportunities", icon: Briefcase, label: "Oportunidades" },
    ],
  },
  {
    label: "Herramientas IA",
    items: [
      { href: "/dashboard/interviews", icon: MessageSquare, label: "Entrevistas" },
      { href: "/dashboard/diagnostic", icon: Brain, label: "Diagnóstico" },
    ],
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href
    return pathname.startsWith(href) && href !== "/dashboard"
  }

  return (
    <nav className="px-3 py-2 flex flex-col gap-5">
      {navGroups.map((group) => (
        <div key={group.label}>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-2 mb-1.5">
            {group.label}
          </p>
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const active = isActive(item.href, item.exact)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 no-tap",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "w-4 h-4 shrink-0",
                        active ? "text-primary" : "text-muted-foreground/70"
                      )}
                    />
                    {item.label}
                    {active && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}

      {/* Bottom actions */}
      <div className="mt-auto space-y-0.5">
        <Link
          href="/dashboard/settings"
          className={cn(
            "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 no-tap",
            pathname.startsWith("/dashboard/settings")
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
          )}
        >
          <Settings className="w-4 h-4 shrink-0 text-muted-foreground/70" />
          Configuración
        </Link>
        <SignOutButton />
      </div>
    </nav>
  )
}

function SignOutButton() {
  const { signOut } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut()
      toast.success("Sesión cerrada")
    } catch {
      toast.error("Error al cerrar sesión")
    }
  }

  return (
    <button
      onClick={handleSignOut}
      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/8 transition-all duration-150 no-tap"
    >
      <LogOut className="w-4 h-4 shrink-0" />
      Cerrar sesión
    </button>
  )
}
