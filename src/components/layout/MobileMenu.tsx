"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { navItems } from "@/constants/navigation";
import { socialLinks } from "@/constants/social-links";

export type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    const t = requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });
    return () => cancelAnimationFrame(t);
  }, [isOpen]);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      triggerRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen, triggerRef]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-menu"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-[60] flex min-h-0 flex-col bg-white"
    >
      <div className="flex min-h-0 flex-1 flex-col-reverse">
        <nav
          aria-label="Main navigation"
          className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-6 pb-6 pt-4"
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={item.href}
              onClick={onClose}
              className="font-[family-name:var(--font-headline)] py-3 text-2xl font-bold uppercase tracking-tight text-[#2C3E50] hover:text-[#526074] min-h-[44px] flex items-center"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="grid h-20 shrink-0 grid-cols-[48px_1fr_48px] items-center px-6">
          <div />
          <span className="text-center font-[family-name:var(--font-headline)] text-xl font-black uppercase tracking-tighter text-[#2C3E50]">
            TAL PERETZ
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-12 w-12 items-center justify-center rounded-sm text-[#2C3E50] hover:bg-[#F1F5F9]"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center justify-center gap-6 border-t border-[#E2E8F0] px-6 py-10">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#526074] hover:text-[#2C3E50]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
