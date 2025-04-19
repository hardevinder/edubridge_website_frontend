import { motion } from "framer-motion";

const screenshots = [
  {
    title: "Admin Dashboard",
    description: "Monitor fees, attendance, and reports in a single unified view.",
    image: "/images/screenshots/Admin.png",
  },
  {
    title: "Teacher Panel",
    description: "Plan lessons, record attendance, and enter marks effortlessly.",
    image: "/images/screenshots/Teacher.png",
  },
  {
    title: "Student Portal",
    description: "View assignments, check exam results, and track fees on the go.",
    image: "/images/screenshots/Student.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function ScreenshotsIntroduction() {
  return (
    <section className="py-20 bg-white" id="screenshots">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Quick <span className="text-orange-600">Screenshots</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          A brief look at our core modules in action—designed to streamline school management.
        </p>

        {/* Screenshot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
