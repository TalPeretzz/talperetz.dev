"use client";

import SkillCard from "@/components/ui/SkillCard";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeInView from "@/components/ui/FadeInView";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { expertiseCategories } from "@/constants/site-content";

export default function ExpertiseSection() {
  return (
    <AnimatedSection
      id="expertise"
      aria-labelledby="expertise-heading"
      className="px-6 py-16 md:py-24 bg-[#F1F5F9]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInView>
          <SectionLabel className="mb-4">Stack & Skillset</SectionLabel>
          <h2
            id="expertise-heading"
            className="font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-black tracking-tighter uppercase text-[#2C3E50] mb-12"
          >
            Core Expertise
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseCategories.map((category, i) => (
            <FadeInView key={category.title} delay={i * 0.08}>
              <SkillCard category={category} />
            </FadeInView>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
