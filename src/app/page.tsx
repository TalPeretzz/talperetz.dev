import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WritingSection from "@/components/sections/WritingSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <SectionDivider from="#FFFFFF" to="#F1F5F9" />
        <AboutSection />
        <SectionDivider from="#F1F5F9" to="#FFFFFF" />
        <WritingSection />
        <SectionDivider from="#FFFFFF" to="#F1F5F9" />
        <ExpertiseSection />
      </main>

      <Footer />
      <BottomNav />
    </>
  );
}
