"use client"

import { useAuth } from "@/hooks/useAuth"
import { Button } from "@/components/ui/button"
import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function DashboardHeader() {
  const { user } = useAuth()

  const name =
    user?.user_metadata?.full_name?.split(" ")[0] ||
    user?.email?.split("@")[0] ||
    "Usuario"

  const initials = (user?.user_metadata?.full_name || name)
    .split(" ")
    .slice(0, 2)
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()

  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-border/50 bg-card/80 backdrop-blur shrink-0">
      {/* Search */}
      <div className="relative hidden sm:block w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60" />
        <Input
          placeholder="Buscar..."
          className="h-8 pl-8 bg-muted/40 border-transparent focus:border-border text-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 text-muted-foreground hover:text-foreground relative"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-primary" />
        </Button>

        {/* Avatar */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[11px] font-bold text-primary select-none">
            {initials}
          </div>
          <span className="text-sm font-medium hidden md:block">{name}</span>
        </div>
      </div>
    </header>
  )
}
