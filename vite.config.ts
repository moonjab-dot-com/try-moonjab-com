import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "moonjab-logo.png"],
      manifest: {
        name: "MoonJab — Construye la carrera que mereces",
        short_name: "MoonJab",
        description:
          "Plataforma de empleabilidad con IA. Mejora tu CV, practica entrevistas y encuentra oportunidades alineadas a tu perfil.",
        theme_color: "#10b981",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/moonjab-logo.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/moonjab-logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        categories: ["productivity", "education", "business"],
        screenshots: [],
        shortcuts: [
          {
            name: "Practicar Entrevista",
            short_name: "Entrevistas",
            description: "Inicia una sesión de práctica de entrevista",
            url: "/dashboard/interviews",
            icons: [{ src: "/moonjab-logo.png", sizes: "192x192" }],
          },
          {
            name: "Crear CV",
            short_name: "CV",
            description: "Crea o edita tu CV profesional",
            url: "/dashboard/cv",
            icons: [{ src: "/moonjab-logo.png", sizes: "192x192" }],
          },
          {
            name: "Oportunidades",
            short_name: "Jobs",
            description: "Explora oportunidades de trabajo",
            url: "/dashboard/opportunities",
            icons: [{ src: "/moonjab-logo.png", sizes: "192x192" }],
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        navigateFallbackDenylist: [/^\/~oauth/, /^\/oauth/],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-supabase': ['@supabase/supabase-js'],
          'vendor-radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-tabs',
            '@radix-ui/react-select',
            '@radix-ui/react-popover',
          ],
          'vendor-charts': ['recharts'],
          'vendor-forms': ['react-hook-form', 'zod'],
          'vendor-i18n': ['react-i18next', 'i18next'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
