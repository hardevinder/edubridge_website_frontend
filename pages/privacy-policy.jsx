import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-orange-600">Privacy Policy</h1>

          <p className="text-gray-600">
            <strong>Last Updated:</strong> June 28, 2025
          </p>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-gray-700">
              EduBridge ERP is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit or use our platform.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Personal details like name, email, phone number, and institution details.</li>
              <li>Login credentials and user activity related to ERP usage.</li>
              <li>Technical data like IP address, browser type, and access times.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To provide and maintain our ERP services.</li>
              <li>To communicate regarding support, updates, and account management.</li>
              <li>To improve platform functionality and user experience.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Data Sharing</h2>
            <p className="text-gray-700">
              We do not sell or share your personal data with any third parties for marketing. Data may be shared only:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>With service providers who support platform operations (under strict confidentiality).</li>
              <li>To comply with applicable laws or legal processes.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
            <p className="text-gray-700">
              We implement standard security practices to protect your data, including encryption, secure access controls, and regular audits.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal information. To make a request, please email us at:
              <a
                href="mailto:info@edubridgeerp.in"
                className="text-orange-600 underline ml-1"
              >
                info@edubridgeerp.in
              </a>
            </p>
          </section>

          {/* Contact Info */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact:
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
            This policy is subject to periodic updates. Please review it regularly.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
