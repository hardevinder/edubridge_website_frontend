// pages/_app.jsx
import Head from 'next/head';
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EduBridge ERP – Smart School Management</title>
        <meta name="description" content="EduBridge ERP is a complete digital school management system with features like fee tracking, exams, timetable, and student communication tools." />
        <meta name="keywords" content="EduBridge, School ERP, Fee Management, Exam System, CBSE, School Software, College ERP, Online Classes" />
        <meta name="author" content="Hardevinder Singh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="EduBridge ERP – Smart School Management" />
        <meta property="og:description" content="Manage your school digitally with our all-in-one EduBridge ERP platform." />
        <meta property="og:image" content="https://edubridgeerp.in/og-image.png" />
        <meta property="og:url" content="https://edubridgeerp.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EduBridge ERP – Smart School Management" />
        <meta name="twitter:description" content="Digital school ERP with all features – easy, fast and powerful." />
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
