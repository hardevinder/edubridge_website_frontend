import { motion } from "framer-motion";
import {
  LayoutDashboard,
  UserRound,
  GraduationCap,
  Smartphone,
  Truck,
  BookOpenCheck,
} from "lucide-react";

const modules = [
  {
    title: "Admin Dashboard",
    description:
      "Full control over students, staff, fees, exams, and settings in one place.",
    icon: LayoutDashboard,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Student Portal",
    description:
      "Access assignments, fee records, exam results, and more—anytime, anywhere.",
    icon: UserRound,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Teacher Panel",
    description:
      "Plan lessons, record attendance, enter marks, and share resources easily.",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Mobile App (Android)",
    description:
      "Stay connected with real-time alerts and dashboards on your phone.",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Transport Management",
    description:
      "Assign routes, track vehicles, and ensure student safety in transit.",
    icon: Truck,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Examination Module",
    description:
      "Auto‑calculate results, generate report cards, and analyze performance.",
    icon: BookOpenCheck,
    color: "bg-red-100 text-red-600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ModulesOverview() {
  return (
    <section
      id="modules"
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Core <span className="text-orange-600">Modules</span>
        </h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform"
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`${mod.color} rounded-full p-4 mb-4 inline-flex`}
                >
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {mod.title}
                </h3>
                <p className="text-gray-600 text-sm">{mod.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
