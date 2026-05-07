# MoonJab — Claude Engineering Instructions

## Project
MoonJab is an AI-powered career platform for students in LATAM.
Stack: Vite + React + TypeScript + Tailwind + Supabase

## Git workflow (MANDATORY)
- NEVER commit directly to main
- Always create a new branch: seo/fix-name, feat/feature-name, fix/bug-name
- Always create a Pull Request for review
- Branch naming: seo/*, feat/*, fix/*, chore/*

## SEO priorities
- All pages must use SEOHead component from src/components/SEOHead.tsx
- Every page needs: unique title (50-60 chars), unique description (120-160 chars), canonical URL, JSON-LD schema
- No duplicate H1 tags — React app H1 only, never in index.html body
- public/llms.txt must stay updated when new pages/features ship
- public/sitemap.xml must be updated when new routes are added

## Code rules
- TypeScript strict mode — no any types
- Preserve all existing UI and UX
- Do not redesign components unless asked
- Run existing lint before committing

## File locations
- SEO component: src/components/SEOHead.tsx
- Route definitions: src/App.tsx
- Public static files: public/
- Page components: src/pages/
