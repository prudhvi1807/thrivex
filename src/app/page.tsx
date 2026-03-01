import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/sections/CredibilitySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-primary/30 selection:text-white scroll-smooth">
      <Navbar />

      <HeroSection />
      <CredibilitySection />

      <div id="services">
        <ServicesSection />
      </div>

      <div id="process">
        <ProcessSection />
      </div>

      <div id="case-studies">
        <CaseStudiesSection />
      </div>

      <TestimonialsSection />

      <div id="contact">
        <FinalCTASection />
      </div>

      <Footer />
    </main>
  );
}
