"use client";

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-primary)] focus:text-[var(--color-on-primary)] focus:px-6 focus:py-3 focus:rounded focus:font-bold focus:text-sm focus:uppercase focus:tracking-widest focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}
