-- Migration: referrals_and_leads
-- Purpose: (1) viral referral loop — referral_code per user, referrals table,
--          (2) top-of-funnel lead capture table for non-signup visitors.
-- Safe to run multiple times.

-- ─── Lead capture (email-only, pre-signup) ──────────────────────────────────

CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  source_page TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'leads' AND policyname = 'Anyone can submit a lead'
  ) THEN
    CREATE POLICY "Anyone can submit a lead"
    ON public.leads
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'leads' AND policyname = 'Admins can view leads'
  ) THEN
    CREATE POLICY "Admins can view leads"
    ON public.leads
    FOR SELECT
    TO authenticated
    USING (public.has_role(auth.uid(), 'admin'));
  END IF;
END $$;

-- ─── Referral program ────────────────────────────────────────────────────────

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS referral_code TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS referred_by UUID REFERENCES public.profiles(id);

CREATE TABLE IF NOT EXISTS public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  referred_id UUID NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed')),
  reward_granted_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_referrals_referrer_id ON public.referrals (referrer_id);

ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'referrals' AND policyname = 'Users can view own referrals'
  ) THEN
    CREATE POLICY "Users can view own referrals"
    ON public.referrals
    FOR SELECT
    TO authenticated
    USING (auth.uid() = referrer_id OR auth.uid() = referred_id);
  END IF;
END $$;

-- Generate a short unique referral code, e.g. "MJ7F3K2A"
CREATE OR REPLACE FUNCTION public.generate_referral_code()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  code TEXT;
BEGIN
  code := 'MJ' || upper(substr(md5(gen_random_uuid()::text), 1, 6));
  RETURN code;
END;
$$;

-- Extend handle_new_user: assign a referral_code to every new profile, and
-- link referred_by + create a pending referrals row when the user signed up
-- via someone else's invite link (ref code passed in auth signUp metadata).
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  new_code TEXT;
  referrer_profile_id UUID;
  incoming_ref_code TEXT;
BEGIN
  new_code := public.generate_referral_code();

  insert into public.profiles (id, nombre, email, avatar_url, referral_code)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'nombre', new.raw_user_meta_data->>'name', 'Usuario'),
    new.email,
    new.raw_user_meta_data->>'avatar_url',
    new_code
  )
  on conflict (id) do update set
    nombre = excluded.nombre,
    email = excluded.email,
    avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
    referral_code = coalesce(public.profiles.referral_code, excluded.referral_code),
    updated_at = now();

  insert into public.user_roles (user_id, role)
  values (new.id, 'user')
  on conflict do nothing;

  insert into public.user_access_levels (user_id, access_level)
  values (new.id, 'free_user')
  on conflict (user_id) do nothing;

  incoming_ref_code := new.raw_user_meta_data->>'ref_code';
  IF incoming_ref_code IS NOT NULL THEN
    SELECT id INTO referrer_profile_id
    FROM public.profiles
    WHERE referral_code = incoming_ref_code
    LIMIT 1;

    IF referrer_profile_id IS NOT NULL AND referrer_profile_id <> new.id THEN
      UPDATE public.profiles SET referred_by = referrer_profile_id WHERE id = new.id;

      INSERT INTO public.referrals (referrer_id, referred_id, status)
      VALUES (referrer_profile_id, new.id, 'pending')
      ON CONFLICT (referred_id) DO NOTHING;
    END IF;
  END IF;

  return new;
end;
$function$;

-- Backfill referral codes for existing profiles that don't have one
UPDATE public.profiles
SET referral_code = public.generate_referral_code()
WHERE referral_code IS NULL;
