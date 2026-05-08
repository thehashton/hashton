import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorkSection } from "@/components/sections/work-section";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
