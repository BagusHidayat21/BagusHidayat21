'use client';

import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import TechStackSection from "@/components/TechStack";
import Portfolio from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <Portfolio />
      <Contact />
    </div>
  );
}