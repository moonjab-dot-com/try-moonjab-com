-- ============================================================
-- MoonJab: Blog CMS + Analytics Events
-- Paste this entire script into Supabase SQL Editor and run it.
-- ============================================================

-- ── 1. blog_posts ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id            text PRIMARY KEY,          -- slug, e.g. "preparar-entrevista-tecnica-2025"
  title         text NOT NULL,
  excerpt       text NOT NULL,
  content       text NOT NULL,
  date          text NOT NULL,             -- human-readable, e.g. "5 Dic 2024"
  iso_date      date NOT NULL,
  read_time     text NOT NULL DEFAULT '5 min',
  category      text NOT NULL DEFAULT 'General',
  author        text NOT NULL DEFAULT 'Salvador',
  author_role   text NOT NULL DEFAULT 'CEO de MoonJab',
  image         text,
  featured      boolean NOT NULL DEFAULT false,
  published     boolean NOT NULL DEFAULT true,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

-- Public read access (blog is public)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "blog_posts_public_read"
  ON public.blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "blog_posts_admin_all"
  ON public.blog_posts FOR ALL
  USING (auth.role() = 'service_role');

-- Updated_at trigger
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ── 2. analytics_events ───────────────────────────────────
CREATE TABLE IF NOT EXISTS public.analytics_events (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  event_type  text NOT NULL,
  event_data  jsonb,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx
  ON public.analytics_events (user_id);

CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx
  ON public.analytics_events (created_at DESC);

ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "analytics_own_read"
  ON public.analytics_events FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "analytics_own_insert"
  ON public.analytics_events FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ── 3. interview_sessions (if not already created) ────────
CREATE TABLE IF NOT EXISTS public.interview_sessions (
  id            text PRIMARY KEY,
  user_id       uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role          text,
  level         text,
  interview_type text,
  final_score   integer DEFAULT 0,
  responses     jsonb DEFAULT '[]'::jsonb,
  breakdown     jsonb DEFAULT '{}'::jsonb,
  started_at    timestamptz,
  ended_at      timestamptz,
  saved         boolean DEFAULT false,
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS interview_sessions_user_id_idx
  ON public.interview_sessions (user_id);

ALTER TABLE public.interview_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "interview_sessions_own"
  ON public.interview_sessions FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ── Done ──────────────────────────────────────────────────
-- Run: SELECT * FROM public.blog_posts LIMIT 1;
-- to verify the tables were created.
