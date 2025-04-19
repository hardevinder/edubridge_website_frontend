import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic",
    price: "₹5,000/year",
    features: [
      "Fee Management",
      "Attendance Tracking",
      "Student Portal Access",
      "Email Support",
    ],
    highlighted: false,
  },
  {
    title: "Pro",
    price: "₹10,000/year",
    features: [
      "Everything in Basic",
      "Examination Reports",
      "Transport Management",
      "Priority Email & Chat Support",
    ],
    highlighted: true,
  },
  {
    title: "Custom",
    price: "Contact Us",
    features: [
      "All Pro Features",
      "Dedicated Account Manager",
      "Custom Integrations",
      "On‑site Training",
    ],
    highlighted: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PricingPlans() {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Choose Your <span className="text-orange-600">Plan</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Simple, transparent pricing tailored for every school’s needs.
        </p>

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className={`bg-white rounded-2xl p-8 shadow-lg transform transition-transform duration-300 ${
                plan.highlighted ? "border-4 border-orange-500" : ""
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">
                {plan.price}
              </p>
              <ul className="text-gray-600 mb-6 space-y-3 text-left">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-medium transition-colors duration-300 ${
                  plan.highlighted
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {plan.highlighted ? "Get Started" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
