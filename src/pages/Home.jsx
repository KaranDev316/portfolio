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
      <a className="skip-link" href="#top">Skip to content</a>
      <Navbar />
      <main id="top" tabIndex={-1}>
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
