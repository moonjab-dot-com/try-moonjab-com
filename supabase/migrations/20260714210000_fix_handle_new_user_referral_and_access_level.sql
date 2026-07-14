-- Migration: fix_handle_new_user_referral_and_access_level
-- Purpose: three separate migrations (reconcile_profiles_schema,
-- create_user_access_levels, referrals_and_leads) each did
-- CREATE OR REPLACE FUNCTION handle_new_user(), and because this
-- session's new migrations sort chronologically before
-- referrals_and_leads (already applied in an earlier session), running
-- them via --include-all executed create_user_access_levels' version
-- LAST in real terms — silently dropping the referral_code/referred_by
-- logic. A real test signup confirmed this: referral_code stayed null.
-- This migration is the single definitive version combining all three
-- concerns. Safe to run multiple times.

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

  INSERT INTO public.profiles (id, nombre, email, avatar_url, referral_code)
  VALUES (
    NEW.id,
    COALESCE(
      NEW.raw_user_meta_data->>'nombre',
      NEW.raw_user_meta_data->>'name',
      NEW.raw_user_meta_data->>'full_name',
      'Usuario'
    ),
    NEW.email,
    NEW.raw_user_meta_data->>'avatar_url',
    new_code
  )
  ON CONFLICT (id) DO UPDATE SET
    nombre = COALESCE(public.profiles.nombre, EXCLUDED.nombre),
    email = COALESCE(public.profiles.email, EXCLUDED.email),
    referral_code = COALESCE(public.profiles.referral_code, EXCLUDED.referral_code);

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user')
  ON CONFLICT (user_id, role) DO NOTHING;

  INSERT INTO public.user_access_levels (user_id, access_level)
  VALUES (NEW.id, 'free_user')
  ON CONFLICT (user_id) DO NOTHING;

  incoming_ref_code := NEW.raw_user_meta_data->>'ref_code';
  IF incoming_ref_code IS NOT NULL THEN
    SELECT id INTO referrer_profile_id
    FROM public.profiles
    WHERE referral_code = incoming_ref_code
    LIMIT 1;

    IF referrer_profile_id IS NOT NULL AND referrer_profile_id <> NEW.id THEN
      UPDATE public.profiles SET referred_by = referrer_profile_id WHERE id = NEW.id;

      INSERT INTO public.referrals (referrer_id, referred_id, status)
      VALUES (referrer_profile_id, NEW.id, 'pending')
      ON CONFLICT (referred_id) DO NOTHING;
    END IF;
  END IF;

  RETURN NEW;
END;
$function$;

-- Backfill referral codes for any profile rows that ended up without one
-- (e.g. the test account created while this bug was live).
UPDATE public.profiles
SET referral_code = public.generate_referral_code()
WHERE referral_code IS NULL;

-- Backfill user_access_levels for any profile that doesn't have one yet,
-- for the same reason.
INSERT INTO public.user_access_levels (user_id, access_level)
SELECT p.id, 'free_user'::public.access_tier
FROM public.profiles p
LEFT JOIN public.user_access_levels ual ON ual.user_id = p.id
WHERE ual.user_id IS NULL;
