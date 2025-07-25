import { HeroSection } from "@/components/hero-section";
import { ServicesSummary } from "@/components/services-summary";
import { AboutSummary } from "@/components/about-summary";
import { TipsSection } from "@/components/tips-section";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServicesSummary />
      <AboutSummary />
      <TipsSection />
    </main>
  );
}
