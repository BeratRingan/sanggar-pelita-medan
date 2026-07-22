import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { LatestArticles } from "@/components/home/latest-articles";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LatestArticles />
    </>
  );
}