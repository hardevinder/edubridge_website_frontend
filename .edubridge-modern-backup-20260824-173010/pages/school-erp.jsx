// pages/school-erp.jsx
import Navbar from "../components/Navbar";
import ModulesOverview from "../components/ModulesOverview";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function SchoolERP() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              EduBridge <span className="text-orange-600">School ERP</span>
            </h1>
            <p className="mt-6 text-gray-600">
              All‑in‑one digital school management: fees, attendance, exams, transport, and reports—streamlined in one platform.
            </p>
            <a
              href="/contact"
              className="inline-block mt-8 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
            >
              Request a Demo
            </a>
          </motion.div>

          {/* Screenshot */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/screenshots/Admin.png"
              alt="Admin Dashboard"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Modules Overview */}
      <ModulesOverview />

      {/* Final Call To Action */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
