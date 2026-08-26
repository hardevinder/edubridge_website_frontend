import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import RequestDemoForm from "../components/RequestDemoForm";

export default function FinalCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.section
        id="cta"
        className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to <span className="underline decoration-white/50">transform your school?</span>
          </h2>
          <p className="text-lg mb-8">
            Schedule a free demo today and see how EduBridge ERP can streamline your entire institution.
          </p>
          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-orange-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Book a Demo
          </motion.button>
        </div>
      </motion.section>

      {/* Request Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
              Request a Free Demo
            </h2>
            <RequestDemoForm onSuccess={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}
