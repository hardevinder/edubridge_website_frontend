// pages/index.js (or Home.jsx)
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import KeyFeatures from "../components/KeyFeatures";
import ModulesOverview from "../components/ModulesOverview";
import Testimonials from "../components/Testimonials";
import ScreenshotsIntroduction from "../components/ScreenshotsIntroduction"; 
import FAQ from "../components/FAQ";
import PricingPlans from "../components/PricingPlans";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <HeroSlider />
      <KeyFeatures />
      <ModulesOverview />
      <Testimonials />
      <ScreenshotsIntroduction />
      <FAQ />
      <PricingPlans />
      <FinalCTA />
      <Footer />
    </div>
  );
}
