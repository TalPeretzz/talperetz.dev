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

        <FadeInView className="max-w-sm mx-auto text-center md:max-w-none md:mx-0 md:text-left md:grid md:grid-cols-12 md:gap-12 md:items-start">
          <div className="md:col-span-5">
            <div
              className="hidden md:block w-px bg-[#E2E8F0] mb-6"
              aria-hidden="true"
            />
            <p
              className="font-[family-name:var(--font-headline)] tracking-tighter mb-6 uppercase text-[#2C3E50]"
              role="heading"
              aria-level={2}
              aria-hidden="true"
            >
              <span className="md:hidden">
                <span className="block text-2xl font-bold text-[#526074]">
                  {aboutContent.mobileHeadingTop}
                </span>
                <span className="block text-4xl font-black">
                  {aboutContent.mobileHeadingBottom}
                </span>
              </span>
              <span className="hidden md:block text-3xl md:text-5xl font-black">
                {aboutContent.desktopHeading}
              </span>
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="md:hidden space-y-6 text-lg text-[#526074] leading-loose">
              {aboutContent.mobileParagraphs.map((html, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
              ))}
            </div>
            <div className="hidden md:block space-y-6 text-lg md:text-xl text-[#526074] leading-relaxed max-w-3xl">
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
