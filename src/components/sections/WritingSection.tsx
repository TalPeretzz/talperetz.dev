"use client";

import ArticleCard from "@/components/ui/ArticleCard";
import FadeInView from "@/components/ui/FadeInView";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { writingSection, articles } from "@/constants/site-content";

export default function WritingSection() {
  return (
    <AnimatedSection
      id="writing"
      aria-labelledby="writing-heading"
      className="bg-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeInView>
          <h2
            id="writing-heading"
            className="font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-black tracking-tighter uppercase text-[#2C3E50] mb-4"
          >
            {writingSection.heading}
          </h2>
          <p className="text-base md:text-lg text-[#526074] leading-relaxed max-w-2xl mb-16">
            {writingSection.description}
          </p>
        </FadeInView>

        <div className="max-w-3xl">
          {articles.map((article, i) => (
            <FadeInView key={article.title} delay={i * 0.1}>
              <ArticleCard article={article} />
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.3}>
          <SectionLabel className="mt-12 text-[#94A3B8]">
            {writingSection.footerNote}
          </SectionLabel>
        </FadeInView>
      </div>
    </AnimatedSection>
  );
}
