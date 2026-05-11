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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes('node_modules')) return;
          if (id.includes('framer-motion')) return 'vendor-motion';
          if (id.includes('@supabase')) return 'vendor-supabase';
          if (id.includes('recharts') || id.includes('d3-') || id.includes('victory-')) return 'vendor-charts';
          if (id.includes('i18next') || id.includes('react-i18next')) return 'vendor-i18n';
          if (id.includes('@tanstack')) return 'vendor-query';
          if (id.includes('@radix-ui')) return 'vendor-radix';
          if (id.includes('react-dom') || id.includes('react-router')) return 'vendor-react';
          if (id.includes('html2pdf') || id.includes('jspdf') || id.includes('html2canvas')) return 'vendor-pdf';
          if (id.includes('lucide-react')) return 'vendor-icons';
          if (id.includes('zustand') || id.includes('immer')) return 'vendor-state';
          if (id.includes('zod') || id.includes('react-hook-form') || id.includes('@hookform')) return 'vendor-forms';
          if (id.includes('date-fns') || id.includes('lodash') || id.includes('clsx') || id.includes('class-variance') || id.includes('tailwind-merge')) return 'vendor-utils';
          return 'vendor';
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
}));
