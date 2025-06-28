import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CancellationPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-orange-600">
            Cancellation and Refund Policy
          </h1>

          <p className="text-gray-600">
            <strong>Last Updated:</strong> June 28, 2025
          </p>

          {/* Cancellation Policy Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Cancellation Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Once the subscription or service has been activated,{" "}
                <strong>cancellation is not permitted</strong> under normal
                circumstances.
              </li>
              <li>
                In case of duplicate payment or accidental order, cancellation
                requests can be raised within <strong>7 days</strong> from the
                date of payment.
              </li>
              <li>
                Requests must be submitted via email to:{" "}
                <a
                  href="mailto:info@edubridgeerp.in"
                  className="text-orange-600 underline hover:text-orange-800"
                >
                  info@edubridgeerp.in
                </a>
              </li>
              <li>
                Cancellations will be processed only after{" "}
                <strong>internal verification and approval</strong>.
              </li>
            </ul>
          </section>

          {/* Refund Policy Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Refund Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>No refunds</strong> will be issued for services already
                delivered, including ERP setup, onboarding, or partial usage.
              </li>
              <li>
                Refunds are applicable{" "}
                <strong>only in cases of duplicate transactions</strong> or
                failure of service due to internal technical errors.
              </li>
              <li>
                Approved refunds will be processed within{" "}
                <strong>7–10 business days</strong> through the original payment
                method.
              </li>
            </ul>
          </section>

          {/* Exceptions */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Exceptions</h2>
            <p className="text-gray-700">
              We reserve the right to approve or deny any refund request based
              on:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Payment verification status</li>
              <li>Extent of service usage</li>
              <li>Nature of the refund reason</li>
            </ul>
          </section>

          {/* Contact Info */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-700">
              For any concerns or refund-related queries, please contact:
            </p>
            <p className="text-gray-700">
              <strong>EduBridge ERP</strong>
              <br />
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
            This policy is subject to change without prior notice. Please review
            it periodically.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
