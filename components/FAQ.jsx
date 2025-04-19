import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I import my existing student data into EduBridge ERP?",
    answer:
      "Absolutely! EduBridge ERP supports CSV and Excel imports for student details, fees, attendance, and more. You can map columns during import to ensure everything ends up in the right place.",
  },
  {
    question: "Is training provided for administrators and teachers?",
    answer:
      "Yes—we offer a comprehensive onboarding session via video call or on‑site (depending on your plan). Plus, our help center has step‑by‑step guides and tutorials.",
  },
  {
    question: "What kind of support is included?",
    answer:
      "All plans include email support and in‑app chat. Pro and Custom plans get priority SLA, dedicated account managers, and monthly check‑ins.",
  },
  {
    question: "Does EduBridge ERP have a mobile app?",
    answer:
      "Yes, our Android app (coming soon on iOS) lets students and teachers access dashboards, receive push notifications, and stay connected on the go.",
  },
  {
    question: "Can I customize modules and workflows?",
    answer:
      "Of course—EduBridge ERP is modular. You can enable or disable features per role, customize field labels, and even build custom reports.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <div className="md:w-1/2">
          <img
            src="/images/FAQ.png"
            alt="FAQ Illustration"
            className="w-full h-auto rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right: Accordion */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                  >
                    <span className="text-gray-800 font-medium">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-orange-600" : "text-gray-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="px-6 pt-0 pb-4 text-gray-600 text-sm"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
