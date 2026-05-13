-- Migration: fix_cv_indexes_and_profile_user_role
-- Purpose: (1) performance indexes for user-scoped queries,
--          (2) ensure profiles.user_role exists (idempotent),
--          (3) ensure updated_at trigger covers all tables
-- Safe to run multiple times.

-- ─── Indexes for faster user-scoped lookups ─────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_cvs_user_id
  ON public.cvs (user_id);

CREATE INDEX IF NOT EXISTS idx_cvs_user_id_updated_at
  ON public.cvs (user_id, updated_at DESC);

CREATE INDEX IF NOT EXISTS idx_interview_sessions_user_id
  ON public.interview_sessions (user_id);

CREATE INDEX IF NOT EXISTS idx_interview_sessions_user_id_created_at
  ON public.interview_sessions (user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_microactions_user_id
  ON public.microactions (user_id)
  WHERE completed = false;

-- ─── Ensure profiles.user_role column exists ────────────────────────────────
-- This column is referenced in auth routing (mapProfileRoleToAccessRole).
-- Default NULL means "use user_access_levels table instead".

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name   = 'profiles'
      AND column_name  = 'user_role'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN user_role text DEFAULT NULL;
  END IF;
END $$;

-- ─── Ensure updated_at trigger on interview_sessions ────────────────────────
-- The original migration may have omitted this trigger.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger
    WHERE tgname = 'update_interview_sessions_updated_at'
  ) THEN
    -- add updated_at column first if missing
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name   = 'interview_sessions'
        AND column_name  = 'updated_at'
    ) THEN
      ALTER TABLE public.interview_sessions
        ADD COLUMN updated_at timestamp with time zone NOT NULL DEFAULT now();
    END IF;

    CREATE TRIGGER update_interview_sessions_updated_at
      BEFORE UPDATE ON public.interview_sessions
      FOR EACH ROW
      EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
END $$;

-- ─── Grant select on analytics_events to service_role (for admin dashboard) ─
-- Already default but explicit for documentation.

GRANT SELECT ON public.analytics_events TO service_role;
