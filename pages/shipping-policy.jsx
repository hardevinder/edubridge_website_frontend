import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ShippingPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-orange-600">Shipping & Delivery Policy</h1>

          <p className="text-gray-600">
            <strong>Last Updated:</strong> June 28, 2025
          </p>

          <section className="space-y-4">
            <p className="text-gray-700">
              EduBridge ERP is a digital service (SaaS) platform. There are no physical goods shipped. This Shipping & Delivery Policy outlines how service access is provided and delivered to clients.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Digital Delivery</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>On successful subscription and payment, access credentials are delivered instantly via the registered email address.</li>
              <li>Dashboard and service access is provisioned immediately; login instructions appear in confirmation email.</li>
              <li>Clients can access the ERP platform at any time via <a href="https://edubridgeerp.in" className="text-orange-600 underline hover:text-orange-800">edubridgeerp.in</a>.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Failed Delivery</h2>
            <p className="text-gray-700">
              If you do not receive your access email within 15 minutes of payment:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Check your spam or promotions folder.</li>
              <li>Email us at <a href="mailto:info@edubridgeerp.in" className="text-orange-600 underline hover:text-orange-800">info@edubridgeerp.in</a> with your payment receipt.</li>
              <li>We will reissue the access credentials within 2 hours of your request.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact for Delivery Support</h2>
            <p className="text-gray-700">
              For any issues or queries regarding service delivery, please contact:
            </p>
            <p className="text-gray-700">
              <strong>EduBridge ERP</strong><br />
              📧 <a href="mailto:info@edubridgeerp.in" className="text-orange-600 underline hover:text-orange-800">info@edubridgeerp.in</a><br />
              📞 <a href="tel:+919417873297" className="text-orange-600 underline hover:text-orange-800">+91 94178 73297</a><br />
              🕒 Mon–Sat, 10:00 AM – 6:00 PM
            </p>
          </section>

          <p className="text-gray-500 text-sm pt-8 border-t">
            This policy is subject to change without prior notice. Please review it regularly.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
