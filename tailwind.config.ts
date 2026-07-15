import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        heading: ["'Plus Jakarta Sans'", "'DM Sans'", "system-ui", "sans-serif"],
        body: ["'DM Sans'", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        display: ["'EB Garamond'", "'Plus Jakarta Sans'", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 12px)",
      },
      boxShadow: {
        /* Main brand shadow scale */
        "brand-sm": "var(--shadow-sm)",
        "brand-md": "var(--shadow-md)",
        "brand-lg": "var(--shadow-lg)",
        "brand-xl": "var(--shadow-xl)",
        /* MoonJab (mj) aliases */
        "mj-sm":    "var(--shadow-sm)",
        "mj-md":    "var(--shadow-md)",
        "mj-lg":    "var(--shadow-lg)",
        "mj-xl":    "var(--shadow-xl)",
        "mj-glow":    "0 0 20px rgba(16, 185, 129, 0.20)",
        "mj-glow-lg": "0 0 32px rgba(16, 185, 129, 0.28)",
        /* Semantic aliases */
        "card":      "var(--shadow-card)",
        "orange":    "var(--shadow-orange)",
        "orange-lg": "var(--shadow-orange-lg)",
        /* Legacy MoonJab aliases — used by Button, GuestBanner, WelcomeStep */
        "moonjab-sm":     "var(--shadow-sm)",
        "moonjab-md":     "var(--shadow-md)",
        "moonjab-lg":     "var(--shadow-lg)",
        "moonjab-xl":     "var(--shadow-xl)",
        "moonjab-glow":    "0 0 20px rgba(16, 185, 129, 0.20)",
        "moonjab-glow-lg": "0 0 32px rgba(16, 185, 129, 0.28)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
