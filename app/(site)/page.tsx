import { ClosingCTA } from "@/components/home/ClosingCTA";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsBar } from "@/components/home/StatsBar";
import { TeamPreview } from "@/components/home/TeamPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <TeamPreview />
      <ClosingCTA />
    </>
  );
}
