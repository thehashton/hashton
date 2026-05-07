import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WorkSection } from "@/components/sections/work-section";
import { WritingSection } from "@/components/sections/writing-section";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <ServicesSection />
      <TestimonialsSection />
      <WritingSection />
      <ContactSection />
    </>
  );
}
