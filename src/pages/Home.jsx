import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Ticker } from "../components/Ticker";
import { AboutSection } from "../components/AboutSection";
import { WorkSection } from "../components/WorkSection";
import { StackSection } from "../components/StackSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main id="top">
        <HeroSection />
        <Ticker />
        <div className="wrap">
          <AboutSection />
          <WorkSection />
          <StackSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
};
