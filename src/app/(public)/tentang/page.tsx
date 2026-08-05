import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { VisionMission } from "@/components/about/vision-mission";
import { LogoPhilosophy } from "@/components/about/logo-philosophy";

export default function TentangPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <VisionMission />
      <LogoPhilosophy />
    </>
  );
}