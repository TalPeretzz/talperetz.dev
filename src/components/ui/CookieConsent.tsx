"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { cookieCategories } from "@/constants/cookie-categories";
import {
  setConsentPreferences,
  hasConsented,
} from "@/lib/cookies";
import type { CookiePreferences } from "@/types/cookies";
import { cn } from "@/lib/utils";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: "",
  });
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!hasConsented()) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible && firstFocusRef.current) {
      firstFocusRef.current.focus();
    }
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleRejectAll();
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const saveAndClose = useCallback((prefs: CookiePreferences) => {
    setConsentPreferences(prefs);
    setVisible(false);
    setShowCustomize(false);
  }, []);

  const handleAcceptAll = useCallback(() => {
    saveAndClose({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });
  }, [saveAndClose]);

  const handleRejectAll = useCallback(() => {
    saveAndClose({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  }, [saveAndClose]);

  const handleSaveCustom = useCallback(() => {
    saveAndClose({
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
    });
  }, [preferences, saveAndClose]);

  const toggleCategory = useCallback(
    (id: string) => {
      setPreferences((prev) => ({
        ...prev,
        [id]: !prev[id as keyof CookiePreferences],
      }));
    },
    []
  );

  // Allow footer to reopen
  useEffect(() => {
    function handleOpen() {
      setVisible(true);
    }
    window.addEventListener("open-cookie-settings", handleOpen);
    return () => window.removeEventListener("open-cookie-settings", handleOpen);
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6",
        "md:bottom-6 md:left-6 md:right-auto md:max-w-md"
      )}
    >
      <div className="bg-[var(--color-surface-container-lowest)] ghost-border rounded-xl p-6 shadow-[var(--shadow-hover)] motion-safe:animate-[slideUp_0.3s_ease-out]">
        <h2 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-2">
          Cookie Preferences
        </h2>
        <p className="text-sm text-[var(--color-on-surface-variant)] mb-6 leading-relaxed">
          We use cookies to improve your experience. You can customize your
          preferences below.
        </p>

        {showCustomize && (
          <div className="space-y-4 mb-6">
            {cookieCategories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-start gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={
                    cat.required ||
                    preferences[cat.id as keyof CookiePreferences] === true
                  }
                  disabled={cat.required}
                  onChange={() => toggleCategory(cat.id)}
                  className="mt-1 accent-[var(--color-primary)]"
                />
                <div>
                  <span className="text-sm font-bold">
                    {cat.label}
                    {cat.required && (
                      <span className="text-xs text-[var(--color-outline)] ml-1 font-normal">
                        (Required)
                      </span>
                    )}
                  </span>
                  <p className="text-xs text-[var(--color-on-surface-variant)] mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </label>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2">
          {showCustomize ? (
            <button
              onClick={handleSaveCustom}
              className="w-full bg-[var(--color-primary)] text-[var(--color-on-primary)] py-3 rounded font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Save Preferences
            </button>
          ) : (
            <>
              <button
                ref={firstFocusRef}
                onClick={handleAcceptAll}
                className="w-full bg-[var(--color-primary)] text-[var(--color-on-primary)] py-3 rounded font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Accept All
              </button>
              <div className="flex gap-2">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 ghost-border py-3 rounded font-bold text-sm uppercase tracking-widest text-[var(--color-primary)] hover:bg-[var(--color-surface-container-low)] transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="flex-1 ghost-border py-3 rounded font-bold text-sm uppercase tracking-widest text-[var(--color-primary)] hover:bg-[var(--color-surface-container-low)] transition-colors"
                >
                  Customize
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
