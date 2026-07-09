const REF_STORAGE_KEY = 'moonjab_ref_code';

/** Call once on app load (e.g. in Landing) to capture ?ref=CODE from an invite link. */
export function captureReferralCode() {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  if (ref) {
    localStorage.setItem(REF_STORAGE_KEY, ref.toUpperCase());
  }
}

/** Read the captured referral code, if any, to attach at signup time. */
export function getStoredReferralCode(): string | null {
  return localStorage.getItem(REF_STORAGE_KEY);
}

export function clearStoredReferralCode() {
  localStorage.removeItem(REF_STORAGE_KEY);
}

export function buildReferralLink(referralCode: string): string {
  return `https://moonjab.com/?ref=${referralCode}`;
}
