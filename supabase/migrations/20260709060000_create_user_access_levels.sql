-- Migration: create_user_access_levels
-- Purpose: this table is confirmed absent from the live database despite
-- being defined in an earlier migration (20260316004741) that was marked
-- "applied" during migration-history repair without ever actually running.
-- Auth/access-role resolution (useAuthSync, useAuthRedirect, Auth.tsx,
-- the check-subscription edge function) all depend on it as the
-- subscription-tier fallback. Safe to run multiple times.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_type t
    JOIN pg_namespace n ON n.oid = t.typnamespace
    WHERE t.typname = 'access_tier' AND n.nspname = 'public'
  ) THEN
    CREATE TYPE public.access_tier AS ENUM ('trial_user', 'free_user', 'premium_user');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.user_access_levels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  access_level public.access_tier NOT NULL DEFAULT 'free_user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.user_access_levels ENABLE ROW LEVEL SECURITY;

-- Admin-manage policy intentionally skipped: has_role() is confirmed absent
-- from production (unlike update_updated_at_column(), which does exist),
-- and nothing in the app currently needs admin-level access to this table.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'user_access_levels' AND policyname = 'Users can view own access level'
  ) THEN
    CREATE POLICY "Users can view own access level"
    ON public.user_access_levels
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger
    WHERE tgname = 'update_user_access_levels_updated_at'
  ) THEN
    CREATE TRIGGER update_user_access_levels_updated_at
    BEFORE UPDATE ON public.user_access_levels
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
END $$;

-- Backfill existing profiles (currently just the founder) to free_user
INSERT INTO public.user_access_levels (user_id, access_level)
SELECT p.id, 'free_user'::public.access_tier
FROM public.profiles p
LEFT JOIN public.user_access_levels ual ON ual.user_id = p.id
WHERE ual.user_id IS NULL;

-- Extend handle_new_user() (already managed by the profiles-reconciliation
-- migration) so new signups also get a default access level.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, nombre, email, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(
      NEW.raw_user_meta_data->>'nombre',
      NEW.raw_user_meta_data->>'name',
      NEW.raw_user_meta_data->>'full_name',
      'Usuario'
    ),
    NEW.email,
    NEW.raw_user_meta_data->>'avatar_url'
  )
  ON CONFLICT (id) DO UPDATE SET
    nombre = COALESCE(public.profiles.nombre, EXCLUDED.nombre),
    email = COALESCE(public.profiles.email, EXCLUDED.email);

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user')
  ON CONFLICT (user_id, role) DO NOTHING;

  INSERT INTO public.user_access_levels (user_id, access_level)
  VALUES (NEW.id, 'free_user')
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$function$;
