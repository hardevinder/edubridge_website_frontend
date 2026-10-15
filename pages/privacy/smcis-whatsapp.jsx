import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEOHead from "../../components/SEOHead";

const Section = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
    <div className="space-y-3 text-gray-700 leading-7">{children}</div>
  </section>
);

export default function SmcisWhatsAppPrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <SEOHead
        title="SMCIS WhatsApp Messaging Privacy Policy"
        description="Privacy policy for WhatsApp messaging provided to Seth Malook Chand International School through EduBridge ERP."
        path="/privacy/smcis-whatsapp"
        keywords={[
          "SMCIS WhatsApp privacy policy",
          "Seth Malook Chand International School WhatsApp",
          "EduBridge ERP WhatsApp privacy",
        ]}
      />

      <Navbar />

      <main className="flex-grow px-5 py-16 sm:px-6 lg:py-20">
        <article className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-7 shadow-sm sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">
              WhatsApp Business Messaging
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              SMCIS WhatsApp Messaging Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-700 sm:text-lg">
              This policy explains how information is handled when Seth Malook Chand International School uses EduBridge ERP to send authorised school communications through the WhatsApp Business Platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full border border-orange-200 bg-white px-3 py-1.5 font-medium text-gray-700">
                School: Seth Malook Chand International School
              </span>
              <span className="rounded-full border border-orange-200 bg-white px-3 py-1.5 font-medium text-gray-700">
                Technology Provider: EduBridge ERP
              </span>
            </div>
          </div>

          <div className="mt-10 space-y-10">
            <p className="text-sm text-gray-500">
              <strong className="text-gray-700">Last updated:</strong> October 15, 2026
            </p>

            <Section title="1. Scope of this policy">
              <p>
                This policy applies specifically to the WhatsApp messaging integration used by Seth Malook Chand International School ("SMCIS") through EduBridge ERP. SMCIS is operated by Malook Chand Foundation. EduBridge ERP provides the software and messaging integration used by authorised school staff.
              </p>
              <p>
                This page supplements the general EduBridge ERP Privacy Policy. If a matter is not specific to this WhatsApp integration, the general policy may also apply.
              </p>
            </Section>

            <Section title="2. Information that may be processed">
              <p>Depending on the school service being used, the integration may process:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Parent, guardian, student or authorised recipient name and mobile number.</li>
                <li>Student identifiers such as admission number, class, section or related school record references.</li>
                <li>Fee-related information required for an authorised notification, such as amount due, due date, payment status or receipt reference.</li>
                <li>Message information such as template name, WhatsApp message ID, sending time and delivery, read or failure status.</li>
                <li>Limited technical and audit information required to operate, secure and troubleshoot the service.</li>
              </ul>
            </Section>

            <Section title="3. How the information is used">
              <p>The information is used only for authorised school and ERP operations, including:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Sending school service notifications such as fee reminders, payment confirmations and other communications enabled by SMCIS.</li>
                <li>Confirming whether a WhatsApp message was sent, delivered, read or failed.</li>
                <li>Providing support, preventing abuse and maintaining security and audit records.</li>
                <li>Meeting applicable contractual, legal, accounting or regulatory obligations.</li>
              </ul>
              <p>
                We do not sell personal information and do not use this integration to build advertising profiles or send third-party advertising.
              </p>
            </Section>

            <Section title="4. WhatsApp and service providers">
              <p>
                Messages are delivered using the WhatsApp Business Platform provided by Meta. Information necessary to route and deliver messages may therefore be processed by Meta/WhatsApp in accordance with their applicable terms and privacy practices.
              </p>
              <p>
                We may also use infrastructure, hosting and technical service providers where necessary to operate EduBridge ERP. Such access is limited to what is required to provide and secure the service.
              </p>
            </Section>

            <Section title="5. Student and minor-related information">
              <p>
                School records may relate to students who are minors. The WhatsApp integration is intended for authorised school communications, normally to parent, guardian or other authorised recipient numbers recorded by the school. It is not designed to solicit personal information directly from children through WhatsApp.
              </p>
            </Section>

            <Section title="6. Data retention and security">
              <p>
                Information is retained only for as long as reasonably necessary for school operations, support, audit, contractual requirements and applicable law. Retention may vary depending on the type of school record and the institution&apos;s requirements.
              </p>
              <p>
                EduBridge ERP uses reasonable administrative and technical safeguards, including access controls and secure system practices, to protect information from unauthorised access, alteration or disclosure. No internet-based service can guarantee absolute security.
              </p>
            </Section>

            <Section title="7. Your choices and requests">
              <p>
                A parent, guardian or other recipient may ask the school to correct an inaccurate contact number, stop WhatsApp notifications where applicable, or request access to or deletion of information subject to applicable school, legal and record-retention requirements.
              </p>
              <p>
                For a data deletion request relating to this integration, follow our {" "}
                <Link href="/privacy/smcis-whatsapp-data-deletion" className="font-semibold text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  SMCIS WhatsApp Data Deletion Instructions
                </Link>.
              </p>
            </Section>

            <Section title="8. Contact">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="font-semibold text-gray-900">EduBridge ERP</p>
                <p>
                  Email:{" "}
                  <a className="font-medium text-orange-600 underline underline-offset-4" href="mailto:info@edubridgeerp.in">
                    info@edubridgeerp.in
                  </a>
                </p>
                <p className="mt-3 font-semibold text-gray-900">Seth Malook Chand International School</p>
                <p>
                  School email:{" "}
                  <a className="font-medium text-orange-600 underline underline-offset-4" href="mailto:info@smcis.in">
                    info@smcis.in
                  </a>
                </p>
              </div>
            </Section>

            <Section title="9. Changes to this policy">
              <p>
                We may update this policy when the integration, applicable requirements or our data-handling practices change. The updated date at the top of this page indicates the latest revision.
              </p>
            </Section>

            <div className="border-t border-gray-200 pt-7 text-sm text-gray-500">
              General EduBridge policy:{" "}
              <Link href="/privacy-policy" className="font-medium text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Privacy Policy
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
