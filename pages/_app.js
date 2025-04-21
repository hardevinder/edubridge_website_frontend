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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Optional Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
