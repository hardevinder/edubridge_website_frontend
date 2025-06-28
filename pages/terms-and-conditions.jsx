import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-orange-600">Terms and Conditions</h1>

          <p className="text-gray-600">
            <strong>Last Updated:</strong> June 28, 2025
          </p>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-gray-700">
              Welcome to EduBridge ERP. By accessing or using our platform, you agree to be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our services.
            </p>
          </section>

          {/* Usage Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">1. Use of Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Our ERP services are licensed to educational institutions and should not be redistributed or resold.</li>
              <li>You must maintain the confidentiality of your login credentials and are responsible for any activity under your account.</li>
              <li>Unauthorized use, data scraping, or reverse engineering is strictly prohibited.</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">2. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate information when registering or using the system.</li>
              <li>Abide by all applicable laws and regulations while using the platform.</li>
              <li>Immediately report any unauthorized access or security breaches.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">3. Intellectual Property</h2>
            <p className="text-gray-700">
              All content, branding, and software elements of EduBridge ERP are owned or licensed by EduBridge Solutions. You may not copy, reuse, or modify these without written consent.
            </p>
          </section>

          {/* Termination Clause */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">4. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate your account without notice if you violate these terms or engage in misuse of our services.
            </p>
          </section>

          {/* Disclaimer & Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">5. Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              EduBridge ERP is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service, and we are not liable for any data loss or system errors beyond our control.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">6. Governing Law</h2>
            <p className="text-gray-700">
              These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Punjab, India.
            </p>
          </section>

          {/* Contact Info */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-700">
              For any questions or concerns regarding these terms, contact:
            </p>
            <p className="text-gray-700">
              <strong>EduBridge ERP</strong><br />
              📧{" "}
              <a
                href="mailto:info@edubridgeerp.in"
                className="text-orange-600 underline hover:text-orange-800"
              >
                info@edubridgeerp.in
              </a>
              <br />
              📞{" "}
              <a
                href="tel:+919417873297"
                className="text-orange-600 underline hover:text-orange-800"
              >
                +91 94178 73297
              </a>
              <br />
              🕒 Mon–Sat, 10:00 AM – 6:00 PM
            </p>
          </section>

          <p className="text-gray-500 text-sm pt-8 border-t">
            These terms are subject to updates at any time without prior notice. Please check back regularly for changes.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
