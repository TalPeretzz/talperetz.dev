"use client";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="cursor-pointer text-xs text-[var(--color-on-surface-variant)] hover:underline"
      onClick={() => {
        window.dispatchEvent(new Event("open-cookie-settings"));
      }}
    >
      Cookie Settings
    </button>
  );
}
