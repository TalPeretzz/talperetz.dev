import Button from "@/components/ui/Button";
import ArchitectureVisual from "@/components/ui/ArchitectureVisual";
import { heroContent } from "@/constants/site-content";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[618px] md:min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-32 pb-20 md:py-0 md:pt-20"
    >
      {/* Dot-grid background — spec: radial-gradient(#E2E8F0 1px, transparent 1px) 40px */}
      <div
        className="absolute inset-0 dot-grid opacity-[0.4] pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient wash — right side */}
      <div
        className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F8F9FA] to-transparent opacity-40"
        aria-hidden="true"
      />

      {/* Architecture diagram — right side visual balance */}
      <div className="hidden lg:block absolute top-1/2 right-[8%] -translate-y-1/2 w-[28%] max-w-[400px] pointer-events-none">
        <ArchitectureVisual />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-12 gap-8 relative z-10">
        <div className="col-span-12 md:col-span-10 lg:col-span-8 text-center md:text-left animate-fade-in-up">
          {/* Role subtitle with accent bar */}
          <p className="flex items-center gap-4 justify-center md:justify-start text-sm md:text-xl font-bold tracking-[0.2em] uppercase text-[#526074] font-[family-name:var(--font-label)] mb-8 whitespace-pre-line">
            <span
              className="hidden md:block w-1 h-8 bg-[#2C3E50]"
              aria-hidden="true"
            />
            {heroContent.subtitle}
          </p>

          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-headline)] text-5xl md:text-8xl font-extrabold tracking-[-0.03em] uppercase text-[#2C3E50] leading-[0.9] mb-8 whitespace-pre-line"
          >
            {heroContent.heading}
          </h1>

          <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#526074] leading-[1.75] mb-12 max-w-[38rem] mx-auto md:mx-0">
            {heroContent.description}
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-5">
            <Button
              as="a"
              href={heroContent.primaryCta.href}
              variant="primary"
              size="md"
              icon="arrow_forward"
              fullWidth
              className="md:w-auto md:inline-flex"
            >
              {heroContent.primaryCta.label}
            </Button>
            <Button
              as="a"
              href={heroContent.secondaryCta.href}
              variant="secondary"
              size="md"
              fullWidth
              className="md:w-auto md:inline-flex"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
