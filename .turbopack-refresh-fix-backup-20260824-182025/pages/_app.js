import { useEffect } from 'react';
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

  // Development-only recovery for stale service workers / Cache Storage.
  // A service worker previously registered on localhost:3000 can keep serving
  // an old Next.js HMR runtime and cause an endless webpack hot-update 404 loop.
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    let cancelled = false;

    const cleanLocalDevState = async () => {
      const host = window.location.hostname;
      const isLocalHost =
        host === 'localhost' ||
        host === '127.0.0.1' ||
        host === '0.0.0.0' ||
        /^192\.168\./.test(host) ||
        /^10\./.test(host);

      if (!isLocalHost) return;

      let staleStateFound = false;

      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        if (registrations.length > 0 || navigator.serviceWorker.controller) {
          staleStateFound = true;
        }
        await Promise.all(registrations.map((registration) => registration.unregister()));
      }

      if ('caches' in window) {
        const cacheKeys = await window.caches.keys();
        if (cacheKeys.length > 0) staleStateFound = true;
        await Promise.all(cacheKeys.map((key) => window.caches.delete(key)));
      }

      if (
        !cancelled &&
        staleStateFound &&
        !window.sessionStorage.getItem('edubridge-dev-origin-cleaned-v2')
      ) {
        window.sessionStorage.setItem('edubridge-dev-origin-cleaned-v2', '1');
        window.location.reload();
      }
    };

    cleanLocalDevState().catch((error) => {
      console.warn('[EduBridge dev cleanup] Could not clear stale browser state:', error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

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
