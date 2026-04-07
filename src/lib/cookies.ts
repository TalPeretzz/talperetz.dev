import type { CookiePreferences } from "@/types/cookies";

const STORAGE_KEY = "cookie-consent-preferences";

export const COOKIE_CONSENT_UPDATED_EVENT = "cookie-consent-updated";

function notifyConsentChanged(): void {
  window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATED_EVENT));
}

export function getConsentPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as CookiePreferences;
  } catch {
    return null;
  }
}

export function setConsentPreferences(prefs: CookiePreferences): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    notifyConsentChanged();
  } catch {
    // localStorage unavailable
  }
}

export function hasConsented(): boolean {
  return getConsentPreferences() !== null;
}

export function isCategoryAllowed(
  category: keyof Omit<CookiePreferences, "timestamp">
): boolean {
  const prefs = getConsentPreferences();
  if (!prefs) return false;
  return prefs[category] === true;
}

export function clearConsent(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(STORAGE_KEY);
    notifyConsentChanged();
  } catch {
    // localStorage unavailable
  }
}
