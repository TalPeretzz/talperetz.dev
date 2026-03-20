import { Mail, Linkedin, Github, type LucideIcon } from "lucide-react";
import { footerContent } from "@/constants/site-content";
import { socialLinks } from "@/constants/social-links";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";

const FOOTER_LINK_ORDER = ["LinkedIn", "GitHub", "Email"] as const;

const iconMap: Record<string, LucideIcon> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
};

export function Footer() {
  const orderedLinks = FOOTER_LINK_ORDER.map((label) =>
    socialLinks.find((s) => s.label === label)
  ).filter((link): link is NonNullable<typeof link> => link != null);

  return (
    <footer
      id="contact"
      role="contentinfo"
      className="border-t border-[#E2E8F0] bg-[#F8F9FA]"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="font-[family-name:var(--font-headline)] text-lg font-black tracking-tighter text-[#2C3E50] uppercase">
          {footerContent.name}
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {orderedLinks.map((link) => {
              const Icon = iconMap[link.icon];
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 font-[family-name:var(--font-body)] text-xs tracking-widest text-[#2C3E50] uppercase transition-opacity duration-200 hover:opacity-60"
                >
                  {Icon && <Icon size={14} aria-hidden="true" />}
                  {link.label}
                </a>
              );
            })}
          </div>
          <CookieSettingsButton />
        </div>

        <p className="font-[family-name:var(--font-body)] max-w-xs text-center text-xs text-[#526074] md:max-w-none md:text-right">
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
}
