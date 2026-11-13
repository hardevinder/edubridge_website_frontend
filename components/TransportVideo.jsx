import Link from 'next/link';

const chapters = [
  [23, '0:23', 'Introducing EduBridge Smart Transport Management'],
  [55, '0:55', 'Google Maps routes, fleet administration and student stops'],
  [82, '1:22', 'Online and offline transport fees and outstanding dues'],
  [115, '1:55', 'Fuel, maintenance records and document expiry alerts'],
  [153, '2:33', 'Parent GPS tracking, arrival alerts and driver attendance'],
  [186, '3:06', 'AI monitoring, bus delays and daily operational summaries'],
];

export default function TransportVideo() {
  return (
    <section id="transport-video" className="bg-slate-50 py-16 md:py-24" aria-labelledby="transport-video-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <span className="brand-kicker">Transport product walkthrough</span>
        <h2 id="transport-video-title" className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Watch EduBridge Smart Transport Management in action</h2>
        <p className="mt-5 max-w-3xl leading-7 text-slate-600">See how administrators, drivers and parents use one connected school bus management system for Google Maps routes, transport fees, vehicle maintenance, live GPS tracking and AI-powered operational summaries.</p>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="aspect-video overflow-hidden rounded-2xl bg-slate-950">
              <iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/8um_6WRSo7s" title="EduBridge Smart Transport Management System video demonstration" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <a href="https://youtu.be/8um_6WRSo7s" className="mt-4 inline-block font-bold text-orange-700 underline underline-offset-4">Watch the transport video on YouTube</a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-950">Explore the video by topic</h3>
            <ul className="mt-5 space-y-4">
              {chapters.map(([seconds, time, label]) => <li key={seconds}><a href={`https://www.youtube.com/watch?v=8um_6WRSo7s&t=${seconds}s`} className="text-sm font-semibold leading-6 text-orange-700 underline underline-offset-4">{time} — {label}</a></li>)}
            </ul>
            <Link href="/school-college-transport-management-software" className="mt-6 inline-block font-bold text-slate-900 underline underline-offset-4">Explore school transport software and FAQs</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
