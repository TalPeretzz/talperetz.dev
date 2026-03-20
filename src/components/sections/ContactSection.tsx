"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { contactContent } from "@/constants/site-content";
import { socialLinks } from "@/constants/social-links";
import FadeInView from "@/components/ui/FadeInView";
import { cn } from "@/lib/utils";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
};

export default function ContactSection() {
  const emailLink = socialLinks.find((l) => l.icon === "mail");

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeInView>
          {/* Top divider */}
          <span
            className="mx-auto mb-8 block h-px w-10 bg-[#E2E8F0]"
            aria-hidden="true"
          />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#526074] mb-6">
            {contactContent.label}
          </p>

          <h2
            id="contact-heading"
            className="font-[family-name:var(--font-headline)] text-4xl font-black tracking-tighter text-[#2C3E50] md:text-6xl"
          >
            {contactContent.heading}
          </h2>
        </FadeInView>

        {/* Inline icon links */}
        <FadeInView delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={`Contact Tal via ${link.label}`}
                  className="flex items-center gap-2 text-[#2C3E50] transition-all duration-300 ease-in-out hover:opacity-70"
                >
                  {Icon && <Icon size={18} aria-hidden="true" />}
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </FadeInView>

        <FadeInView delay={0.25}>
          <div className="mt-12 md:mt-14">
            <a
              href={emailLink?.href ?? "#"}
              className={cn(
                "inline-flex items-center justify-center rounded-sm bg-[#2C3E50] px-10 py-4",
                "text-xs font-bold uppercase tracking-widest text-white",
                "transition-all duration-300 ease-in-out hover:bg-[#34495E] hover:shadow-lg",
                "focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:ring-offset-2"
              )}
            >
              {contactContent.ctaLabel}
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
