import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import TeamSection from "../components/organisms/TeamSection";
import StatisticsSection from "@/components/organisms/StatisticsSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <TeamSection />
      <StatisticsSection />
    </div>
  );
}
