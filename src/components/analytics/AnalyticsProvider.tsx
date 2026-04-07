"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/next";
import { track } from "@vercel/analytics/react";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  isCategoryAllowed,
} from "@/lib/cookies";
import { captureUtmParams, getStoredUtmParams } from "@/lib/utm";
import type { BeforeSendEvent } from "@vercel/analytics/react";

function subscribeAnalyticsConsent(onStoreChange: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === "cookie-consent-preferences" || e.key === null) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, onStoreChange);
  window.addEventListener("open-cookie-settings", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, onStoreChange);
    window.removeEventListener("open-cookie-settings", onStoreChange);
  };
}

function getAnalyticsConsentSnapshot() {
  return isCategoryAllowed("analytics");
}

function getAnalyticsConsentServerSnapshot() {
  return false;
}

export default function AnalyticsProvider() {
  const allowed = useSyncExternalStore(
    subscribeAnalyticsConsent,
    getAnalyticsConsentSnapshot,
    getAnalyticsConsentServerSnapshot
  );

  const trackedRef = useRef(false);

  useEffect(() => {
    captureUtmParams();
  }, []);

  useEffect(() => {
    if (!allowed || trackedRef.current) return;
    trackedRef.current = true;

    const utm = getStoredUtmParams();
    const referrer = document.referrer
      ? new URL(document.referrer).hostname
      : "(direct)";

    const source = utm.utm_source || referrer;

    track("traffic_source", { source, referrer });
  }, [allowed]);

  const beforeSend = useCallback((event: BeforeSendEvent): BeforeSendEvent => {
    if (event.type !== "pageview") return event;

    const utm = getStoredUtmParams();
    if (!utm.utm_source && !utm.utm_medium) return event;

    const url = new URL(event.url, window.location.origin);
    if (utm.utm_source) url.searchParams.set("utm_source", utm.utm_source);
    if (utm.utm_medium) url.searchParams.set("utm_medium", utm.utm_medium);

    return { ...event, url: url.pathname + url.search };
  }, []);

  if (!allowed) return null;

  return <Analytics beforeSend={beforeSend} />;
}
