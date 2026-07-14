-- Migration: create_interview_sessions
-- Purpose: this table is confirmed absent from the live database despite
-- being defined in an earlier migration (20251114152927) that was marked
-- "applied" during migration-history repair without ever actually running.
-- The AI mock-interview feature reads/writes this table but has had
-- nowhere to persist to in production. Safe to run multiple times.

CREATE TABLE IF NOT EXISTS public.interview_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  rol TEXT NOT NULL,
  industria TEXT,
  duracion_minutos INTEGER DEFAULT 30,
  puntuacion INTEGER,
  feedback JSONB DEFAULT '{}'::jsonb,
  respuestas JSONB DEFAULT '[]'::jsonb,
  completada BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.interview_sessions ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'interview_sessions' AND policyname = 'Users can view own interview sessions'
  ) THEN
    CREATE POLICY "Users can view own interview sessions"
    ON public.interview_sessions FOR SELECT
    USING (auth.uid() = user_id);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'interview_sessions' AND policyname = 'Users can insert own interview sessions'
  ) THEN
    CREATE POLICY "Users can insert own interview sessions"
    ON public.interview_sessions FOR INSERT
    WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'interview_sessions' AND policyname = 'Users can update own interview sessions'
  ) THEN
    CREATE POLICY "Users can update own interview sessions"
    ON public.interview_sessions FOR UPDATE
    USING (auth.uid() = user_id);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'interview_sessions' AND policyname = 'Users can delete own interview sessions'
  ) THEN
    CREATE POLICY "Users can delete own interview sessions"
    ON public.interview_sessions FOR DELETE
    USING (auth.uid() = user_id);
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_interview_sessions_user_id
  ON public.interview_sessions (user_id);

CREATE INDEX IF NOT EXISTS idx_interview_sessions_user_id_created_at
  ON public.interview_sessions (user_id, created_at DESC);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_interview_sessions_updated_at'
  ) THEN
    CREATE TRIGGER update_interview_sessions_updated_at
      BEFORE UPDATE ON public.interview_sessions
      FOR EACH ROW
      EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
END $$;
