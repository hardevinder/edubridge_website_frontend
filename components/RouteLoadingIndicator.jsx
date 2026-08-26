import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function RouteLoadingIndicator() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const safetyTimer = useRef(null);

  useEffect(() => {
    const start = (url, { shallow } = {}) => {
      if (shallow || url === router.asPath) return;
      window.clearTimeout(safetyTimer.current);
      setLoading(true);
      safetyTimer.current = window.setTimeout(() => setLoading(false), 15000);
    };

    const finish = () => {
      window.clearTimeout(safetyTimer.current);
      setLoading(false);
    };

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', finish);
    router.events.on('routeChangeError', finish);

    return () => {
      window.clearTimeout(safetyTimer.current);
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', finish);
      router.events.off('routeChangeError', finish);
    };
  }, [router]);

  return (
    <div
      className={`route-loader ${loading ? 'route-loader-visible' : ''}`}
      aria-hidden={!loading}
      aria-live="polite"
    >
      <div className="route-loader-track"><span /></div>
      <div className="route-loader-label" role="status">
        <span className="route-loader-spinner" />
        Loading page…
      </div>
    </div>
  );
}
