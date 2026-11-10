import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FinalCTA from './FinalCTA';
import SEOHead from './SEOHead';

const canonical = 'https://www.edubridgeerp.in/roles/principal';
const description = 'Explore EduBridge’s Principal Dashboard for school attendance, teacher performance, exams, student health and approvals. Watch the school command center demo.';
const features = [
  ['School command center', 'Review student and staff attendance status, transport activity, upcoming exams and items needing attention from one school leadership dashboard. See when attendance has not yet been marked before interpreting the figures.'],
  ['Live classroom monitor', 'Check the current teaching period, class and section, subject, scheduled teacher and substitution status. Review student attendance alongside classroom coverage to identify where follow-up is needed.'],
  ['Ask School AI', 'Ask questions about class attendance, staff availability and upcoming calendar events using school records. The demonstration shows missing-data messages and reporting context, helping principals distinguish unavailable records from confirmed facts.'],
  ['Teacher performance and evidence', 'Review monthly professional scores, evidence coverage and a team overview. Explore the underlying timetable, attendance, diaries, lesson plans and syllabus records, with separate views for weightage, day overrides, duties and achievements.'],
  ['Examination and class performance analytics', 'Open examination workflows, report cards and final result summaries. Review subject-wise class averages, performance distributions, top students and students requiring support to guide academic follow-up.'],
  ['Student health and growth', 'Track measurements, screening status and pending follow-ups. Find students by class, section or admission number and review individual health records through authorized access.'],
  ['Actions, approvals and school calendar', 'Bring upcoming events, academic priorities and items needing attention into the principal’s daily review. Connect leadership oversight with approval workflows and the teams responsible for the next action.'],
  ['Connected school operations', 'Access Student 360°, department and HOD oversight, syllabus monitoring, transport tracking and inventory through the wider principal workspace. Available views depend on the institution’s enabled modules and role permissions.'],
];
const faqs = [
  ['What is a Principal Dashboard in school ERP software?', 'A Principal Dashboard brings school information and pending actions into one leadership workspace. EduBridge connects attendance, classroom monitoring, teacher performance, examinations, student health and operational follow-up so principals can move from an overview to the relevant records.'],
  ['Can a principal see complete school information in one place?', 'The command center provides a school-wide overview with access to connected modules for more detail. The information visible to a principal depends on enabled modules, role permissions and the records maintained by the school. Missing attendance or incomplete records are not the same as confirmed zero activity.'],
  ['How does EduBridge help principals monitor teachers?', 'The Teacher Performance Board shows monthly scores, evidence coverage and team comparisons. Principals can review supporting teaching records, including timetables, attendance, diaries, lesson plans and syllabus activity, along with duties and achievements.'],
  ['Can principals monitor examination results and students needing support?', 'Yes. Connected examination and analytics views include final result summaries, subject-wise class averages and performance distributions, with views for top students and students requiring support.'],
  ['What can the school AI assistant answer?', 'The video demonstrates questions about class attendance, absent teachers and upcoming calendar events. Answers depend on available authorized school records; the assistant also explains when requested data has not been recorded.'],
  ['How can our school see the Principal Dashboard in action?', 'Watch the embedded walkthrough on this page, then request a demo to review your school’s academic, reporting, approval and operational requirements with the EduBridge team.'],
];

export default function PrincipalDashboardPage({ role, linkedModules }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: 'Principal Dashboard & School Command Center | EduBridge ERP', description, breadcrumb: { '@id': `${canonical}#breadcrumb` } },
      { '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.edubridgeerp.in/' },
        { '@type': 'ListItem', position: 2, name: 'Role Workspaces', item: 'https://www.edubridgeerp.in/roles' },
        { '@type': 'ListItem', position: 3, name: 'Principal Dashboard', item: canonical },
      ] },
      { '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };
  return <div className="bg-white text-slate-800">
    <SEOHead title="Principal Dashboard & School Command Center | EduBridge ERP" description={description} path="/roles/principal" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <Navbar />
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-14 text-white md:py-20">
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-slate-300"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/roles">Role Workspaces</Link><span aria-hidden="true">/</span><span aria-current="page">Principal Dashboard</span></nav>
          <span className="brand-kicker brand-kicker-dark">School leadership, connected</span>
          <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">Principal Dashboard &amp; <span className="gradient-text">School Command Center</span></h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">See school attendance, classroom activity, teacher performance, examination results and student well-being in one connected leadership workspace. EduBridge helps principals review school information, identify pending actions and open the records behind each insight.</p>
          <div className="mt-8 flex flex-wrap gap-4"><Link href="/contact" className="btn-primary">Book a Principal Dashboard Demo <ArrowRight size={18}/></Link><a href="#video" className="btn-secondary-dark">Watch the walkthrough</a></div>
        </div>
      </section>
      <section id="video" aria-labelledby="video-heading" className="scroll-mt-24 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <span className="brand-kicker">Product walkthrough · 2 min 46 sec</span>
          <h2 id="video-heading" className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">See the Principal Dashboard in action</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-600">Watch the EduBridge Principal Command Center demonstration, from questions about school records to classroom monitoring, teacher performance, examination analytics and student health.</p>
          <div className="mt-7 aspect-video overflow-hidden rounded-2xl bg-slate-950 shadow-xl">
            <iframe className="h-full w-full border-0" width="1280" height="720" src="https://www.youtube-nocookie.com/embed/c3UYCTGikMM" title="EduBridge Principal Dashboard and School Command Center video demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">The walkthrough uses a demo school. <a className="font-semibold text-orange-700 underline" href="https://www.youtube.com/watch?v=c3UYCTGikMM" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold text-slate-950">What the video demonstrates</h3><p className="mt-3 leading-7 text-slate-600">The walkthrough opens with school AI questions about attendance and calendar events, then introduces the Principal Command Center. It explores classroom monitoring and the Teacher Performance Board, including evidence coverage, teaching records and score adjustments. It also shows examination reporting, class performance charts and student health screening before returning to the school leadership overview.</p></div>
        </div>
      </section>
      <section className="py-16 md:py-20"><div className="mx-auto max-w-7xl px-5 md:px-8">
        <span className="brand-kicker">School information in one place</span><h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">What can a principal monitor with EduBridge?</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2">{features.map(([title, text]) => <article key={title} className="premium-card"><CheckCircle2 className="text-orange-500" aria-hidden="true"/><h3 className="mt-4 text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div>
      </div></section>
      <section className="bg-slate-50 py-16"><div className="mx-auto max-w-7xl px-5 md:px-8"><h2 className="text-3xl font-black text-slate-950">A practical daily review for school principals</h2><ol className="mt-7 grid gap-5 md:grid-cols-3">{[
        ['Review today’s school status', 'Start with attendance, the current teaching period, upcoming events and items needing attention.'],
        ['Understand the supporting records', 'Open teacher evidence, examination analytics or student details to understand what needs follow-up.'],
        ['Act and coordinate', 'Use connected approvals and departmental workflows to move the next action to the responsible team.'],
      ].map(([title, text], i) => <li key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><span className="text-sm font-bold text-orange-700">Step {i + 1}</span><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></li>)}</ol></div></section>
      <section className="py-16"><div className="mx-auto max-w-7xl px-5 md:px-8"><h2 className="text-3xl font-black text-slate-950">Explore the complete principal workspace</h2><p className="mt-4 max-w-3xl leading-7 text-slate-600">Alongside the dashboard, the principal role connects academic leadership with student development and school operations.</p><ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{role.features.map(feature => <li key={feature} className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"><CheckCircle2 size={18} className="mt-1 shrink-0 text-orange-500" aria-hidden="true"/><span>{feature}</span></li>)}</ul><p className="mt-6 text-sm leading-6 text-slate-600">{role.mobile} Access follows the institution’s role permissions.</p>
        <h2 className="mt-14 text-3xl font-black text-slate-950">Connected school ERP modules</h2><div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{linkedModules.map(module => <Link key={module.slug} href={`/modules/${module.slug}`} className="rounded-2xl border border-slate-200 p-5 transition hover:border-orange-400 hover:shadow-md"><h3 className="text-lg font-bold text-slate-950">{module.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{module.summary}</p><span className="mt-4 inline-flex items-center gap-2 font-semibold text-orange-700">Explore module <ArrowRight size={16}/></span></Link>)}</div>
      </div></section>
      <section id="faq" className="bg-slate-50 py-16"><div className="mx-auto max-w-4xl px-5 md:px-8"><h2 className="text-3xl font-black text-slate-950">Principal Dashboard FAQs</h2><div className="mt-8 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="rounded-2xl border border-slate-200 bg-white p-6"><summary className="cursor-pointer text-lg font-bold text-slate-950">{question}</summary><p className="mt-4 leading-7 text-slate-600">{answer}</p></details>)}</div></div></section>
      <FinalCTA />
    </main><Footer />
  </div>;
}
