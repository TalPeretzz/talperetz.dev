"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import FadeInView from "@/components/ui/FadeInView";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutContent } from "@/constants/site-content";

export default function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#F1F5F9] section-padding"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="about-heading" className="sr-only">About</h2>

        {/* Mobile */}
        <FadeInView className="md:hidden max-w-sm mx-auto text-center">
          <span
            className="inline-block h-px w-12 bg-[#E2E8F0] mb-6"
            aria-hidden="true"
          />
          <p
            className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tighter mb-6 uppercase text-[#2C3E50]"
            role="heading"
            aria-level={2}
            aria-hidden="true"
          >
            {aboutContent.mobileHeading}
          </p>
          <div className="space-y-6 text-lg text-[#526074] leading-loose">
            {aboutContent.mobileParagraphs.map((html, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-12 pt-12 border-t border-[#E2E8F0]">
            {aboutContent.stats.map((stat) => (
              <div key={stat.label}>
                <SectionLabel className="mb-2">{stat.label}</SectionLabel>
                <p className="text-[#2C3E50] font-medium">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Desktop */}
        <FadeInView className="hidden md:grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 md:col-span-5">
            <div
              className="w-px bg-[#E2E8F0] mb-6"
              aria-hidden="true"
            />
            <p
              className="font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-black tracking-tighter uppercase text-[#2C3E50]"
              role="heading"
              aria-level={2}
              aria-hidden="true"
            >
              {aboutContent.desktopHeading}
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="space-y-6 text-lg md:text-xl text-[#526074] leading-relaxed max-w-3xl">
              {aboutContent.paragraphs.map((html, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-12 pt-12 border-t border-[#E2E8F0]">
              {aboutContent.stats.map((stat) => (
                <div key={stat.label}>
                  <SectionLabel className="mb-2">{stat.label}</SectionLabel>
                  <p className="text-[#2C3E50] font-medium">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </AnimatedSection>
  );
}
