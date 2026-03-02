import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import LogoStrip from "@/components/sections/LogoStrip";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <Footer />
    </main>
  );
}
