import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import FAQSection from "@/components/organisms/faq-section";
export default function page() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <FAQSection/>
    </div>
  );
}
