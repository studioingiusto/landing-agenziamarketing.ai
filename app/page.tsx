import { UserJourney } from "@/components/UserJourney";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col bg-main-gradient">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          {/* Hero Section */}
          <HeroSection />

          {/* User Journey Section */}
          <UserJourney />

          {/* Benefits Section */}
          <BenefitsSection />

          {/* Comparison Section */}
          <ComparisonSection />

          {/* Waitlist Section */}
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
