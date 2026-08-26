// pages/visitor-management.jsx
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Printer,
  Bell,
  BarChart2,
} from "lucide-react";

export default function VisitorManagement() {
  const features = [
    {
      Icon: Users,
      title: "Visitor Dashboard",
      desc: "View today's check‑ins and check‑outs at a glance with timestamps and photos.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      Icon: Clock,
      title: "Instant Check‑In/Out",
      desc: "Scan QR codes or enter details manually for quick visitor registration.",
      color: "bg-green-100 text-green-600",
    },
    {
      Icon: Printer,
      title: "Badge Printing",
      desc: "Automatically generate and print visitor badges with photo & expiry.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      Icon: Bell,
      title: "Real‑Time Alerts",
      desc: "Get notified of unscheduled visits, VIP arrivals, or overdue check‑outs.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      Icon: BarChart2,
      title: "Reports & Analytics",
      desc: "Generate daily, weekly, or custom reports on visitor traffic and peak hours.",
      color: "bg-teal-100 text-teal-600",
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
              EduBridge <span className="text-orange-600">Visitor Management</span>
            </h1>
            <p className="mt-6 text-gray-600">
              Securely register, track, and manage every visitor to your campus with ease.
            </p>
            <a
              href="/contact"
              className="inline-block mt-8 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
            >
              Request a Demo
            </a>
          </motion.div>

          {/* Screenshot Placeholder */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/screenshots/visitor-management.png"
              alt="Visitor Management Screenshot"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white" id="visitor-features">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Key <span className="text-orange-600">Features</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to keep your campus secure and visitor‑friendly.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
