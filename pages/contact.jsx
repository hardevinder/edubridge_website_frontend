import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="flex-grow py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-orange-600">Contact Us</h1>
            <p className="text-gray-600">
              We'd love to hear from you! Reach out with any questions, feedback or demo requests.
            </p>

            <div className="flex items-start gap-4">
              <MapPin className="text-orange-500" size={28} />
              <div className="text-gray-700 leading-relaxed">
                EduBridge Solutions<br/>
                Phase 8B, Industrial Area, Sector 74,<br/>
                Sahibzada Ajit Singh Nagar (Mohali), Punjab – 160055, India.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" size={24} />
              <a
                href="tel:+917986912732"
                className="text-gray-700 hover:text-orange-600 transition"
              >
                +91 79869 12732
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" size={24} />
              <a
                href="mailto:contact@edubridgeerp.in"
                className="text-gray-700 hover:text-orange-600 transition"
              >
                contact@edubridgeerp.in
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="w-full h-80 md:h-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="EduBridge Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.123456789012!2d76.728123!3d30.694123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedc123456789%3A0xabcdef1234567890!2sNEXT57%20Coworking!5e0!3m2!1sen!2sin!4v1612345678901"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
