"use client";

import { useMemo } from "react";
import { bottomNavItems } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = bottomNavItems.map((item) => item.href.replace("#", ""));

export function BottomNav() {
  const activeSection = useActiveSection(useMemo(() => sectionIds, []));

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed right-0 bottom-0 left-0 z-40 border-t border-[#E2E8F0] bg-white/90 backdrop-blur-xl md:hidden"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around gap-1 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {bottomNavItems.map((item) => {
          const id = item.href.replace("#", "");
          const active = activeSection === id;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={
                active
                  ? "flex min-h-[44px] min-w-[44px] flex-1 flex-col items-center justify-center gap-1 rounded-sm bg-[#2C3E50]/8 px-3 py-1 text-[#2C3E50]"
                  : "flex min-h-[44px] min-w-[44px] flex-1 flex-col items-center justify-center gap-1 px-3 py-1 text-[#526074] opacity-60"
              }
            >
              <span className="material-symbols-outlined text-lg leading-none">
                {item.icon}
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
