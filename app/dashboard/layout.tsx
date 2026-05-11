import type { ReactNode } from "react"
import { Zap } from "lucide-react"
import Link from "next/link"
import { DashboardNav } from "@/components/dashboard/nav"
import { DashboardHeader } from "@/components/dashboard/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Tu centro de crecimiento profesional — MoonJab",
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-muted/20 overflow-hidden">
      {/* ── SIDEBAR ───────────────────────────────────── */}
      <aside className="w-[220px] shrink-0 flex flex-col border-r border-border/50 bg-card">
        {/* Logo */}
        <div className="px-5 py-4 border-b border-border/50">
          <Link href="/dashboard" className="flex items-center gap-2.5 no-tap">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shadow-orange">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span
              className="font-bold text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              MoonJab
            </span>
          </Link>
        </div>

        {/* Nav */}
        <div className="flex-1 overflow-y-auto py-2">
          <DashboardNav />
        </div>

        {/* Upgrade teaser */}
        <div className="p-3 border-t border-border/50">
          <div className="bg-primary/8 border border-primary/15 rounded-xl p-3">
            <p className="text-xs font-semibold text-primary mb-0.5">
              Plan Gratis
            </p>
            <p className="text-[11px] text-muted-foreground mb-2 leading-snug">
              5 análisis de IA restantes este mes
            </p>
            <Link href="/dashboard/settings">
              <div className="bg-primary rounded-lg h-7 flex items-center justify-center cursor-pointer">
                <span className="text-[11px] font-semibold text-white">
                  Mejorar a Pro
                </span>
              </div>
            </Link>
          </div>
        </div>
      </aside>

      {/* ── MAIN ──────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <DashboardHeader />
        <main className="flex-1 overflow-auto">
          <div className="p-6 max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
