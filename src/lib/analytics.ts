declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type FunnelEvent =
  | 'diagnostic_started'
  | 'diagnostic_completed'
  | 'lead_captured'
  | 'referral_link_copied'
  | 'signup_completed'
  | 'upgrade_clicked'
  | 'checkout_completed';

export function track(event: FunnelEvent, params?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', event, params);
}
