import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FinalCTA from './FinalCTA';
import SEOHead from './SEOHead';

const base = 'https://www.edubridgeerp.in';

export default function CaseStudyPage({ data }) {
  const pageUrl = `${base}${data.path}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.h1,
    description: data.description,
    mainEntityOfPage: pageUrl,
    author: { '@type': 'Organization', name: 'EduBridge ERP', url: `${base}/` },
    publisher: { '@type': 'Organization', name: 'EduBridge ERP', url: `${base}/` },
    about: { '@type': 'SoftwareApplication', name: 'EduBridge ERP + LMS', applicationCategory: 'EducationalApplication' },
    inLanguage: 'en-IN',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${base}/case-studies` },
      { '@type': 'ListItem', position: 3, name: data.eyebrow, item: pageUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (data.faqs || []).map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="bg-white text-slate-800">
      <SEOHead title={data.title} description={data.description} path={data.path} keywords={data.keywords} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_18%_20%,#f97316_0,transparent_29%),radial-gradient(circle_at_88%_12%,#0ea5e9_0,transparent_25%)]" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link><ChevronRight size={13}/>
              <Link href="/case-studies" className="hover:text-white">Case Studies</Link><ChevronRight size={13}/>
              <span className="text-orange-300">{data.eyebrow}</span>
            </div>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-orange-300"><Sparkles size={14}/>{data.eyebrow}</div>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-.035em] md:text-6xl">{data.h1}</h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{data.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-black text-white hover:bg-orange-600">Request a Live Demo <ArrowRight size={18}/></Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-black text-white hover:bg-white/5">View All Case Studies</Link>
                </div>
              </div>
              <aside className="rounded-[2rem] border border-white/10 bg-white/[.055] p-7 shadow-2xl backdrop-blur md:p-8">
                <p className="text-xs font-black uppercase tracking-[.18em] text-orange-300">Who this is for</p>
                <p className="mt-4 leading-7 text-slate-300">{data.audience}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {data.proofPoints.slice(0, 6).map((item) => <div key={item} className="flex gap-3 text-sm text-slate-200"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-400"/><span>{item}</span></div>)}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <span className="brand-kicker">The challenge</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">What needed to become simpler</h2>
              <div className="mt-7 space-y-4">
                {data.challenge.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 p-5"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500"/><p className="leading-7 text-slate-600">{item}</p></div>)}
              </div>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-7 md:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-orange-300"><Quote size={21}/></div>
              <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950">Case-study approach</h2>
              <p className="mt-4 leading-8 text-slate-600">This page focuses on the operational workflow and capabilities rather than inventing client names or unsupported performance percentages. EduBridge can add a named customer, quote or measured result later when the institution has approved publication.</p>
              <div className="mt-7 flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-6 text-emerald-900"><ShieldCheck size={20} className="mt-0.5 shrink-0"/><span><b>Trust-first content:</b> specific product workflows, no fabricated claims.</span></div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl"><span className="brand-kicker">EduBridge solution</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">How the connected workflow works</h2></div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.solution.map((item) => <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 font-black text-orange-600">✓</div><h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl"><span className="brand-kicker">Step by step</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">The implementation journey</h2></div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.workflow.map(([n, title, text]) => <div key={n} className="rounded-3xl bg-slate-950 p-7 text-white"><span className="text-4xl font-black text-orange-400">{n}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-orange-50/60 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
              <div><span className="brand-kicker">Operational outcome</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">What changes after the workflow is connected</h2></div>
              <div className="grid gap-4 md:grid-cols-2">
                {data.outcomes.map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm"><CheckCircle2 size={19} className="mt-1 shrink-0 text-orange-600"/><p className="text-sm leading-7 text-slate-700">{item}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl"><span className="brand-kicker">Related product pages</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Explore the capabilities behind this case study</h2></div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {data.related.map(([label, href]) => <Link key={href} href={href} className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 font-bold text-slate-900 hover:border-orange-300 hover:bg-orange-50"><span>{label}</span><ArrowRight size={18} className="text-orange-600 transition group-hover:translate-x-1"/></Link>)}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="text-center"><span className="brand-kicker">FAQ</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Questions schools often ask</h2></div>
            <div className="mt-10 space-y-4">
              {data.faqs.map((item) => <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer list-none font-black text-slate-950">{item.q}</summary><p className="mt-3 leading-7 text-slate-600">{item.a}</p></details>)}
            </div>
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
}
