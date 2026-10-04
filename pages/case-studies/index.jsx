import Link from 'next/link';
import { ArrowRight, BusFront, FileText, Sparkles } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FinalCTA from '../../components/FinalCTA';
import SEOHead from '../../components/SEOHead';
import { caseStudyList } from '../../data/caseStudies';

const base = 'https://www.edubridgeerp.in';
const iconMap = [BusFront, FileText, Sparkles];

export default function CaseStudiesIndex() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'EduBridge ERP Case Studies',
    url: `${base}/case-studies`,
    description: 'Explore EduBridge ERP case studies and implementation workflows across school transport, custom report cards and AI-powered academic management.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: caseStudyList.map((item, i) => ({ '@type': 'ListItem', position: i + 1, url: `${base}${item.path}`, name: item.eyebrow })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${base}/case-studies` },
    ],
  };

  return (
    <div className="bg-white text-slate-800">
      <SEOHead title="School ERP Case Studies | EduBridge ERP + LMS" description="Explore EduBridge implementation case studies for school transport, custom report cards and AI-powered academic workflows. See the challenge, connected workflow and practical outcome." path="/case-studies" keywords="school ERP case studies, school management software case study, school transport case study, report card software case study, AI school ERP case study" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f97316_0,transparent_30%),radial-gradient(circle_at_85%_10%,#0ea5e9_0,transparent_27%)]" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-orange-300"><Sparkles size={14}/>EduBridge Case Studies</div>
            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.05] tracking-[-.035em] md:text-6xl">See how EduBridge workflows solve real school and college management problems</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">Explore detailed implementation stories covering the challenge, EduBridge workflow, practical outcome and the product capabilities behind each use case. We avoid fabricated metrics and focus on specific, verifiable functionality.</p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {caseStudyList.map((item, index) => {
                const Icon = iconMap[index];
                return <article key={item.path} className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600"><Icon size={22}/></span>
                  <p className="mt-6 text-xs font-black uppercase tracking-[.16em] text-orange-600">{item.eyebrow}</p>
                  <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950">{item.h1}</h2>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{item.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{item.proofPoints.slice(0, 4).map((x) => <span key={x} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">{x}</span>)}</div>
                  <Link href={item.path} className="mt-7 inline-flex items-center gap-2 font-black text-orange-600">Read case study <ArrowRight size={17}/></Link>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
              <div><span className="brand-kicker">Why case studies matter</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Features tell you what exists. Case studies show how the workflow fits together.</h2></div>
              <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-9"><p className="leading-8 text-slate-600">For schools evaluating ERP software, a long feature list is not enough. These pages explain how modules connect around an operational problem—from route and student mapping in transport, to report-card data flow, to AI-assisted academic planning. That makes the content useful to decision-makers and easier for search and AI systems to understand in context.</p></div>
            </div>
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
}
