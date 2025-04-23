import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // For close icon

export default function CBSEAnalyzerPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Open popup after 3 seconds and start progress bar
  useEffect(() => {
    const timeout = setTimeout(() => setIsOpen(true), 3000);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Progress bar completes in ~5 seconds
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Dialog Panel with animations */}
          <Dialog.Panel as="div">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-6 max-w-md w-full"
              role="dialog"
              aria-labelledby="dialog-title"
              aria-describedby="dialog-description"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-200 rounded-full mb-4 overflow-hidden">
                <motion.div
                  className="h-full bg-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>

              {/* Icon/Image */}
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/80?text=📊" // Replace with EduBridge logo or relevant icon
                  alt="CBSE Analyzer Icon"
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <Dialog.Title
                id="dialog-title"
                className="text-2xl font-bold text-center text-gray-800 mb-2"
              >
                🎓 Discover Our CBSE Analyzer
              </Dialog.Title>

              {/* Description */}
              <Dialog.Description
                id="dialog-description"
                className="text-center text-gray-600 mb-6 text-base"
              >
                Analyze CBSE Class X & XII results in seconds.<br />
                Generate summaries, charts, and PDF reports with ease.
              </Dialog.Description>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mb-6">
                <motion.a
                  href="https://cbse12.edubridgeerp.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Try CBSE Class XII Analyzer"
                >
                  <span>Class XII</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://cbse10.edubridgeerp.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Try CBSE Class X Analyzer"
                >
                  <span>Class X</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Dismiss Button */}
              <div className="text-center">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Dismiss popup"
                >
                  No Thanks
                </motion.button>
              </div>
            </motion.div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
}