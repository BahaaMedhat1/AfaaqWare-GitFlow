import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import ServiceSection from "@/components/organisms/ServiceSection";
import TeamSection from "../components/organisms/TeamSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <ServiceSection />
      <TeamSection />
    </div>
  );
}
