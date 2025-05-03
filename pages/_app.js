// pages/_app.jsx
import Head from 'next/head';
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EduBridge ERP – CBSE Result Analyzer & Smart School Management</title>
        <meta name="description" content="EduBridge offers a powerful CBSE Result Analyzer with graphs, celebration posters, PPT reports, subject filters, and a full-featured school ERP system." />
        <meta name="keywords" content="CBSE Result Analyzer, CBSE Class 10 12 Reports, CBSE Analyzer, Result Poster Generator, PPT Generator, CBSE Graph Analysis, EduBridge Analyzer, School ERP, Smart School Management Software, Fee Management, Exam System, Online Result Tool, CBSE Dashboard" />
        <meta name="author" content="Hardevinder Singh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="EduBridge – CBSE Result Analyzer & School ERP" />
        <meta property="og:description" content="Generate ready-to-present CBSE results with graphs, toppers posters, and PPT reports. Also manage your school digitally with EduBridge ERP." />
        <meta property="og:image" content="https://edubridgeerp.in/og-image.png" />
        <meta property="og:url" content="https://edubridgeerp.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CBSE Analyzer + School ERP – EduBridge" />
        <meta name="twitter:description" content="Analyze CBSE results & manage school with EduBridge ERP. Features include celebration posters, subject filters & exportable PPT reports." />
        <meta name="twitter:image" content="https://edubridgeerp.in/og-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Tawk.to Live Chat Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/68062cb7dabbf4190e3f4137/1ipc1tc0q';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </Head>

      <Component {...pageProps} />

      {/* Floating Button for CBSE Analyzer */}
      <Link
        href="/cbse-analyzer"
        className="fixed left-4 bottom-6 z-50 bg-orange-500 text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg hover:bg-orange-600 transition animate-bounce"
      >
        CBSE Result Analyzer
      </Link>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
