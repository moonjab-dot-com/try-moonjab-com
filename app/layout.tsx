import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "@/app/providers"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "MoonJab — Tu carrera LATAM con IA",
    template: "%s | MoonJab",
  },
  description:
    "Construye el CV perfecto, practica entrevistas con IA y encuentra las mejores oportunidades laborales en América Latina.",
  keywords: [
    "CV builder",
    "entrevistas IA",
    "optimización ATS",
    "diagnóstico vocacional",
    "empleos LATAM",
    "búsqueda de trabajo",
    "inteligencia artificial carrera",
  ],
  icons: {
    icon: "/clovely-logo.png",
    apple: "/clovely-logo.png",
  },
  openGraph: {
    title: "MoonJab — Tu carrera LATAM con IA",
    description:
      "Construye el CV perfecto, practica entrevistas con IA y encuentra las mejores oportunidades en América Latina.",
    type: "website",
    locale: "es_LA",
    siteName: "MoonJab",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoonJab — Tu carrera LATAM con IA",
    description:
      "Construye el CV perfecto, practica entrevistas con IA y encuentra las mejores oportunidades en América Latina.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FF7A00",
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=EB+Garamond:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
