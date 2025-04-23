import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Smartphone,
  Users,
  Globe,
  FileText,
  PieChart,
  BarChart2,
  DownloadCloud,
  SlidersHorizontal,
  Filter,
  Trophy,
} from "lucide-react";

export default function CBSEAnalyzer() {
  const features = [
    {
      Icon: FileText,
      title: "TXT File Upload",
      desc: "Upload official CBSE result TXT files for instant processing.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      Icon: SlidersHorizontal,
      title: "Stream Detection",
      desc: "Automatically detects stream based on subject codes.",
      color: "bg-green-100 text-green-600",
    },
    {
      Icon: Trophy,
      title: "Top Performers",
      desc: "Ranks students and displays stream-wise toppers.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      Icon: PieChart,
      title: "Visual Summaries",
      desc: "Pie charts and subject-wise analytics with downloadable images.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      Icon: BarChart2,
      title: "Subject-Wise Breakdown",
      desc: "View marks and grade distribution for every subject.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      Icon: Filter,
      title: "Smart Filters",
      desc: "Roll-number-based filtering and custom selection.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      Icon: DownloadCloud,
      title: "Excel / CSV / PPT Reports",
      desc: "Download structured and beautifully styled reports instantly.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      Icon: LayoutDashboard,
      title: "All-in-One Dashboard",
      desc: "Switch between Class X and XII analysis from one page.",
      color: "bg-gray-100 text-gray-600",
    },
  ];

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
              CBSE <span className="text-orange-600">Analyzer</span>
            </h1>
            <p className="mt-6 text-gray-600">
              Explore detailed result analysis for Class X and XII. Instantly view summaries, toppers, and subject-wise performance.
            </p>
            <div className="mt-8 flex gap-4">
            <a
              href="https://cbse10.edubridgeerp.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
            >
              Class X Analyzer
            </a>
            <a
              href="https://cbse12.edubridgeerp.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
            >
              Class XII Analyzer
            </a>
          </div>

          </motion.div>

          {/* Illustration */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/screenshots/analyzer-hero.png"
              alt="CBSE Analyzer Illustration"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Key <span className="text-orange-600">Highlights</span>
          </h2>
          <p className="mt-4 text-gray-600">
            CBSE Analyzer tools built to help schools make data-driven decisions.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {features.map(({ Icon, title, desc, color }, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`${color} rounded-full p-4 mb-4 inline-flex`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}