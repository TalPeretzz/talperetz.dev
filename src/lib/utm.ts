const SESSION_KEY = "utm-params";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function captureUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const fromUrl: UtmParams = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  }

  if (Object.keys(fromUrl).length > 0) {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(fromUrl));
    } catch {
      // sessionStorage unavailable
    }

    const url = new URL(window.location.href);
    for (const key of UTM_KEYS) url.searchParams.delete(key);
    window.history.replaceState(history.state, "", url.pathname + url.search + url.hash);

    return fromUrl;
  }

  return getStoredUtmParams();
}

export function clearUtmParams(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // sessionStorage unavailable
  }
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (!stored) return {};
    return JSON.parse(stored) as UtmParams;
  } catch {
    return {};
  }
}
