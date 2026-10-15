import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEOHead from "../../components/SEOHead";

export default function SmcisWhatsAppDataDeletion() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <SEOHead
        title="SMCIS WhatsApp Data Deletion Instructions"
        description="How to request deletion of data related to the SMCIS WhatsApp messaging integration provided through EduBridge ERP."
        path="/privacy/smcis-whatsapp-data-deletion"
      />
      <Navbar />
      <main className="flex-grow px-5 py-16 sm:px-6 lg:py-20">
        <article className="mx-auto max-w-3xl space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">SMCIS WhatsApp Messaging</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Data Deletion Instructions</h1>
            <p className="mt-4 text-gray-600"><strong>Last updated:</strong> October 15, 2026</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-gray-700 leading-7">
            These instructions apply to personal information processed through the WhatsApp messaging integration used by Seth Malook Chand International School through EduBridge ERP.
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">How to request deletion</h2>
            <ol className="list-decimal space-y-3 pl-6 text-gray-700 leading-7">
              <li>Email <a className="font-medium text-orange-600 underline" href="mailto:info@edubridgeerp.in">info@edubridgeerp.in</a> with the subject <strong>SMCIS WhatsApp Data Deletion Request</strong>.</li>
              <li>Include the WhatsApp/mobile number connected with the request and enough information for us and/or the school to identify the relevant record.</li>
              <li>For security, we or SMCIS may ask you to verify your identity or your relationship to the student/account before acting on the request.</li>
              <li>We will coordinate with the school as needed and process eligible deletion requests subject to applicable legal, accounting, safeguarding and school record-retention requirements.</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">What may be deleted</h2>
            <p className="text-gray-700 leading-7">
              Where deletion is applicable, it may include WhatsApp integration records and related messaging metadata held by EduBridge ERP. Some school records may need to be retained where required for legitimate institutional, legal, accounting or regulatory purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Stop WhatsApp notifications</h2>
            <p className="text-gray-700 leading-7">
              If you only want to stop WhatsApp notifications rather than request deletion, contact SMCIS or email EduBridge ERP at the address above. The school may continue to contact you through other authorised communication channels where appropriate.
            </p>
          </section>

          <p className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            See the {" "}
            <Link href="/privacy/smcis-whatsapp" className="font-medium text-orange-600 underline underline-offset-4">
              SMCIS WhatsApp Messaging Privacy Policy
            </Link>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
