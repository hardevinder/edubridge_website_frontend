import Head from "next/head";
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
// import CBSEAnalyzerPopup from "@/components/CBSEAnalyzerPopup"; // adjust path if needed


export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>EduBridge ERP – Smart School Management</title>
        <meta name="description" content="EduBridge ERP is a complete digital school management system with features like fee tracking, exams, timetable, and student communication tools." />
        <meta name="keywords" content="EduBridge, School ERP, Fee Management, Exam System, CBSE, School Software, College ERP, Online Classes" />
        <meta name="author" content="Hardevinder Singh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="EduBridge ERP – Smart School Management" />
        <meta property="og:description" content="Manage your school digitally with our all-in-one EduBridge ERP platform." />
        <meta property="og:image" content="https://edubridgeerp.in/og-image.png" />
        <meta property="og:url" content="https://edubridgeerp.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EduBridge ERP – Smart School Management" />
        <meta name="twitter:description" content="Digital school ERP with all features – easy, fast and powerful." />
        <meta name="twitter:image" content="https://edubridgeerp.in/og-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Navbar />
      <HeroSlider />
      {/* <CBSEAnalyzerPopup /> */}
      <KeyFeatures />
      <ModulesOverview />
      <Testimonials />
      <ScreenshotsIntroduction />
      <FAQ />
      {/* <PricingPlans /> */}
      <FinalCTA />
      <Footer />
    </div>
  );
}
