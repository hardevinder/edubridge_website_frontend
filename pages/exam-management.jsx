// pages/exam-management.jsx
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Calendar,
  CheckCircle,
  BarChart2,
} from "lucide-react";

export default function ExamManagement() {
  const features = [
    {
      Icon: ClipboardList,
      title: "Exam Creation",
      desc: "Define subjects, sections, and weightages with a simple form builder.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      Icon: Calendar,
      title: "Scheduling",
      desc: "Set exam dates, durations, and venues with automated calendar invites.",
      color: "bg-green-100 text-green-600",
    },
    {
      Icon: CheckCircle,
      title: "Auto Evaluation",
      desc: "Automatically grade MCQs and objective questions to save precious time.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      Icon: BarChart2,
      title: "Analytics & Reports",
      desc: "View performance trends, subject‑wise analysis, and export detailed reports.",
      color: "bg-purple-100 text-purple-600",
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
              EduBridge <span className="text-orange-600">Exam Management</span>
            </h1>
            <p className="mt-6 text-gray-600">
              Plan, schedule, conduct, and evaluate exams seamlessly with real‑time insights.
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
              src="/images/screenshots/exam-management.png"
              alt="Exam Management Screenshot"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white" id="exam-features">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Key <span className="text-orange-600">Features</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to deliver fair, efficient, and insightful assessments.
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
