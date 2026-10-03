import Link from 'next/link';
import { ArrowRight, BrainCircuit, CheckCircle2, GraduationCap, Layers3, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FinalCTA from './FinalCTA';
import SEOHead from './SEOHead';
import { seoLandingPages } from '../data/seoLandingPages';

const base = 'https://www.edubridgeerp.in';

const videoMeta = {
  jX8am6fMDHk: {
    title: 'AI-Assisted Assessment & Answer Evaluation',
    description: 'Create tests, scan handwritten answer sheets, review AI-assisted evaluation and publish detailed student results.',
  },
  JGlX1PpvmOI: {
    title: 'AI-Powered Exam Seating & Invigilator Allocation',
    description: 'Build smart examination seating plans with room, student and invigilator workflows.',
  },
  '3VY6eYMfHro': {
    title: 'AI-Powered Entrance & Admission Assessments',
    description: 'Create class and subject-based school entrance assessments with AI-assisted question generation.',
  },
};

export default function SearchLandingPage({ data }) {
  const pageUrl = `${base}${data.path}`;
  const faqs = data.faqs || [];
  const linkedPages = Object.values(seoLandingPages)
    .filter((item) => item.path !== data.path)
    .slice(0, 5);

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: data.title,
    description: data.description,
    isPartOf: { '@id': `${base}/#website` },
    about: { '@id': `${base}/#software` },
    inLanguage: 'en-IN',
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${base}/#software`,
    name: 'EduBridge ERP + LMS',
    url: `${base}/`,
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'School and College ERP + LMS',
    operatingSystem: 'Web, Android, iOS',
    description: data.description,
    provider: {
      '@type': 'Organization',
      '@id': `${base}/#organization`,
      name: 'EduBridge ERP',
      url: `${base}/`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'SAS Nagar',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
    areaServed: { '@type': 'Country', name: 'India' },
    featureList: data.highlights,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: data.eyebrow, item: pageUrl },
    ],
  };

  return (
    <div className="bg-white text-slate-800">
      <SEOHead title={data.title} description={data.description} path={data.path} keywords={data.keywords} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f97316_0,transparent_30%),radial-gradient(circle_at_85%_10%,#0ea5e9_0,transparent_27%)]" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-orange-300">{data.eyebrow}</span>
            </div>
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-orange-300">
                  <Sparkles size={14} /> {data.eyebrow}
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.05] tracking-[-.035em] md:text-6xl">{data.h1}</h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{data.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-black text-white hover:bg-orange-600">Request a Live Demo <ArrowRight size={18} /></Link>
                  <Link href="/ai-powered-school-erp" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-black text-white hover:bg-white/5">Explore AI Workflows</Link>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[.055] p-7 shadow-2xl backdrop-blur md:p-8">
                <div className="flex items-center gap-3 text-orange-300"><MapPin size={20} /><span className="text-xs font-black uppercase tracking-[.16em]">Built in Punjab · Serving India</span></div>
                <h2 className="mt-5 text-2xl font-black">Who this page is for</h2>
                <p className="mt-3 leading-7 text-slate-300">{data.audience}</p>
                <div className="mt-7 space-y-4">
                  {data.highlights.slice(0, 4).map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-slate-200"><CheckCircle2 className="mt-1 shrink-0 text-orange-400" size={17} /><span>{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                [BrainCircuit, 'Practical AI', 'AI assistance is connected to real academic and management workflows.'],
                [GraduationCap, 'ERP + LMS', 'Academic, assessment and operational data stays connected.'],
                [ShieldCheck, 'Human review', 'Teachers and authorized users stay in control of important outcomes.'],
                [Layers3, 'Full platform', 'Fees, exams, HR, transport and campus operations continue beyond AI.'],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600"><Icon size={20} /></span>
                  <h2 className="mt-5 font-black text-slate-950">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="brand-kicker">What EduBridge covers</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">A connected education platform, not another isolated tool.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {data.highlights.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">{String(index + 1).padStart(2, '0')}</span>
                  <p className="font-bold leading-6 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {data.videos?.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="max-w-3xl">
                <span className="brand-kicker">Product proof</span>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Watch the workflows working inside EduBridge.</h2>
                <p className="mt-5 leading-7 text-slate-600">These videos demonstrate real EduBridge ERP + LMS workflows so schools can evaluate the product beyond feature-list claims.</p>
              </div>
              <div className={`mt-10 grid gap-6 ${data.videos.length === 1 ? 'max-w-3xl' : 'lg:grid-cols-2'}`}>
                {data.videos.map((id) => {
                  const video = videoMeta[id];
                  return (
                    <article key={id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                      <div className="aspect-video bg-slate-950">
                        <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}`} title={video.title} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                      </div>
                      <div className="p-6"><h3 className="text-xl font-black text-slate-950">{video.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{video.description}</p></div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="bg-slate-950 py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div><span className="brand-kicker brand-kicker-dark">Related solutions</span><h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Continue your ERP research.</h2><p className="mt-5 leading-7 text-slate-300">Explore focused pages for Indian schools, Punjab institutions, boards and AI-enabled workflows.</p></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {linkedPages.map((item) => (
                  <Link key={item.path} href={item.path} className="group rounded-2xl border border-white/10 bg-white/[.055] p-5 hover:bg-white/[.08]">
                    <p className="text-xs font-black uppercase tracking-[.12em] text-orange-300">{item.eyebrow}</p>
                    <h3 className="mt-2 font-black leading-6 group-hover:text-orange-300">{item.h1}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="text-center"><span className="brand-kicker">FAQ</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Questions institutions commonly ask</h2></div>
            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"><h3 className="text-lg font-black text-slate-950">{item.q}</h3><p className="mt-3 leading-7 text-slate-600">{item.a}</p></div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
