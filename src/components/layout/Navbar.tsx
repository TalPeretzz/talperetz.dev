"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MobileMenu } from "@/components/layout/MobileMenu";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection(useMemo(() => sectionIds, []));

  return (
    <header
      role="banner"
      className="fixed top-0 right-0 left-0 z-50 h-20 bg-white/80 glass-nav border-b border-[#E2E8F0]/50"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-headline)] text-base font-bold tracking-[0.15em] text-[#2C3E50] uppercase"
        >
          TAL PERETZ
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-12 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`font-[family-name:var(--font-headline)] text-xs font-semibold tracking-[0.15em] uppercase pb-1 border-b transition-all duration-300 ease-in-out ${
                  isActive
                    ? "border-[#2C3E50] text-[#2C3E50]"
                    : "border-transparent text-[#526074] hover:text-[#2C3E50]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center md:flex">
          <a
            href="#contact"
            className="rounded-sm bg-[#2C3E50] px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 ease-in-out hover:bg-[#34495E]"
          >
            GET IN TOUCH
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-sm text-[#2C3E50] md:hidden hover:bg-[#F1F5F9]"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={menuButtonRef}
      />
    </header>
  );
}
