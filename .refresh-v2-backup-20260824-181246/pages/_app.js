import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Component {...pageProps} />

      <Link
        href="/cbse-analyzer"
        className="fixed bottom-5 left-4 z-40 hidden rounded-full border border-orange-200 bg-white/95 px-4 py-2 text-xs font-bold text-orange-700 shadow-lg backdrop-blur transition hover:bg-orange-50 sm:block"
      >
        CBSE Result Analyzer
      </Link>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />

      {isProduction && (
        <Script
          id="tawk-live-chat"
          strategy="lazyOnload"
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
      )}
    </>
  );
}
