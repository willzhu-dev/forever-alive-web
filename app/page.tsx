import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FaqSection from "@/components/sections/FaqSection";
import DownloadSection from "@/components/sections/DownloadSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhySection />
      <FeaturesSection />
      <HowItWorksSection />
      <FaqSection />
      <DownloadSection />
    </>
  );
}