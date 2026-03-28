import AboutSection from "@/components/organisms/AboutSection";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
export default function page() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <AboutSection/>
    </div>
  );
}
