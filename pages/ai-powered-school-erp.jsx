import Link from 'next/link';
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  Workflow,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import SEOHead from '../components/SEOHead';

const aiWorkflows = [
  {
    icon: FileText,
    title: 'Academic Calendar Import',
    text: 'Upload academic calendar documents, let AI identify useful event details, then review the extracted information before it becomes part of the ERP calendar.',
    href: '/modules/academic-calendar',
  },
  {
    icon: GraduationCap,
    title: 'Lesson Plan Assistance',
    text: 'Help teachers create and improve lesson-plan drafts using academic context while keeping the final plan editable and teacher-controlled.',
    href: '/modules/lesson-plans',
  },
  {
    icon: ClipboardCheck,
    title: 'Assessments & Questions',
    text: 'Generate assessment and question drafts faster, then let educators review difficulty, relevance and the final paper before use.',
    href: '/modules/smart-assessments',
  },
  {
    icon: CheckCircle2,
    title: 'Evaluation Support',
    text: 'Use AI as an assistive evaluation layer for supported assessment workflows while the teacher retains review, correction and final control.',
    href: '/modules/smart-assessments',
  },
  {
    icon: Workflow,
    title: 'Academic Planning',
    text: 'Connect lesson plans, syllabus progress, assignments and academic records so AI assistance works around the school’s real teaching context.',
    href: '/modules/syllabus-monitoring',
  },
  {
    icon: UsersRound,
    title: 'Teacher Performance Insight',
    text: 'Combine authorized ERP records and configured performance context to support structured management review and improvement conversations.',
    href: '/modules/teacher-performance',
  },
  {
    icon: BrainCircuit,
    title: 'Institution-Aware AI Assistant',
    text: 'Give authorized users AI assistance around institution context instead of treating AI as a separate public chatbot disconnected from school operations.',
    href: '/modules/ai-assistant',
  },
  {
    icon: ShieldCheck,
    title: 'Human Review & Governance',
    text: 'AI drafts and insights stay inside role-aware workflows so staff can verify, edit and approve important academic or administrative outcomes.',
    href: '/modules/ai-assistant',
  },
];

const platformAreas = [
  ['Academics', 'Attendance, timetable, syllabus monitoring, lesson plans, diary, assignments, PTM and online learning.'],
  ['Examinations', 'Exam setup, date sheets, seating, invigilation, answer scripts, marks, results and report cards.'],
  ['Admissions & Fees', 'Enquiries, admissions, fee structures, online payments, concessions, dues and financial reporting.'],
  ['HR & Operations', 'Employee records, attendance, leave, payroll, inventory, library, visitors and institutional documents.'],
  ['Transport & Safety', 'Routes, buses, live GPS, driver workflows, pickup/drop attendance and operational visibility.'],
  ['Branded Mobile Apps', 'Institution-branded iOS and Android experiences for students, parents, teachers and operational teams.'],
];

const faqs = [
  {
    q: 'What is an AI-powered school ERP?',
    a: 'An AI-powered school ERP combines normal school-management workflows with practical AI assistance. In EduBridge, AI can support academic planning, assessment creation, evaluation assistance and management insight while the underlying ERP remains the source of operational records.',
  },
  {
    q: 'Does EduBridge AI replace teachers or school administrators?',
    a: 'No. EduBridge positions AI as an assistive layer. Important drafts, evaluations and insights remain reviewable so educators and authorized staff keep final control.',
  },
  {
    q: 'Is the AI separate from the school ERP?',
    a: 'The goal is the opposite: supported AI workflows use authorized school and academic context so staff can move from a draft or insight into the connected ERP workflow without creating another isolated tool.',
  },
  {
    q: 'Does EduBridge support mobile apps?',
    a: 'Yes. EduBridge supports role-based web experiences and institution-branded iOS and Android apps for supported student, parent, teacher and operational workflows.',
  },
  {
    q: 'Which school operations are covered beyond AI?',
    a: 'EduBridge covers connected areas including academics, examinations, admissions, fees, HR, payroll, transport, communication, campus operations and mobile experiences. The exact deployment can be configured around institution requirements.',
  },
];

export default function AIPoweredSchoolERP() {
  const pageUrl = 'https://www.edubridgeerp.in/ai-powered-school-erp';
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EduBridge ERP',
    url: pageUrl,
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'School Management Software',
    operatingSystem: 'Web, iOS, Android',
    description: 'AI-powered school ERP software that connects academic, examination, finance, HR, transport and mobile workflows with practical AI assistance.',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.edubridgeerp.in/#organization',
      name: 'EduBridge ERP',
      url: 'https://www.edubridgeerp.in/',
    },
    featureList: aiWorkflows.map((item) => item.title),
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.edubridgeerp.in/' },
      { '@type': 'ListItem', position: 2, name: 'AI-Powered School ERP', item: pageUrl },
    ],
  };

  return (
    <div className="bg-white text-slate-800">
      <SEOHead
        title="AI-Powered School ERP Software in India | EduBridge ERP"
        description="Explore EduBridge AI-powered school ERP software for academics, assessments, exams, fees, HR, transport, management insight and branded iOS & Android apps."
        path="/ai-powered-school-erp"
        keywords={[
          'AI powered school ERP',
          'AI school ERP software India',
          'school ERP software India',
          'AI school management software',
          'education ERP software',
          'school management ERP',
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
          <div className="hero-grid absolute inset-0 opacity-25" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-orange-300">AI-Powered School ERP</span>
            </div>
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
              <div>
                <span className="brand-kicker brand-kicker-dark"><Sparkles size={14} className="mr-2" /> AI-Powered School Management</span>
                <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                  AI-Powered School ERP Software Built for Real School Workflows
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  EduBridge combines a connected school ERP with practical AI assistance for academic planning, assessments, evaluation and management insight — without separating AI from the institution&apos;s day-to-day workflows.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Request a Live Demo <ArrowRight size={18} /></Link>
                  <Link href="#ai-workflows" className="btn-secondary-dark">See AI Workflows</Link>
                </div>
                <div className="mt-9 flex flex-wrap gap-2">
                  {['Human review retained', 'Connected ERP context', 'Web + iOS + Android'].map((item) => (
                    <span key={item} className="pill-dark"><CheckCircle2 size={14} className="mr-1 inline text-orange-400" />{item}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[.06] p-6 shadow-2xl backdrop-blur md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white"><BrainCircuit size={24} /></span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[.18em] text-orange-300">Practical AI, not a separate chatbot</p>
                    <h2 className="mt-1 text-xl font-black">From school data to reviewed action</h2>
                  </div>
                </div>
                <div className="mt-7 space-y-4">
                  {[
                    ['1', 'Use school or academic context'],
                    ['2', 'Generate a draft, extraction or insight'],
                    ['3', 'Teacher or authorized staff reviews it'],
                    ['4', 'Continue inside the connected ERP workflow'],
                  ].map(([n, text]) => (
                    <div key={n} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black text-white">{n}</span>
                      <p className="text-sm font-semibold text-slate-200">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-white py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-3 md:px-8">
            {[
              [Building2, 'School ERP first', 'Core academic and operational records remain connected in one platform.'],
              [BrainCircuit, 'AI where it helps', 'Use assistive intelligence in selected planning, assessment and insight workflows.'],
              [ShieldCheck, 'People stay in control', 'Role-aware access and human review remain part of important decisions.'],
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-600 shadow-sm"><Icon size={20} /></span>
                <div><h2 className="font-black text-slate-950">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="ai-workflows" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-4xl">
              <span className="brand-kicker">AI in actual school work</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">What makes EduBridge an AI-powered school ERP in practice?</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                The value is not the AI label. It is reducing repetitive work while keeping school records, permissions and educator judgement connected to the workflow.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {aiWorkflows.map(({ icon: Icon, title, text, href }) => (
                <Link key={title} href={href} className="group flex min-h-[290px] flex-col rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600"><Icon size={22} /></span>
                  <h3 className="mt-6 text-lg font-black text-slate-950 group-hover:text-orange-600">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-orange-600">Explore capability <ArrowRight size={15} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 md:px-8 lg:grid-cols-[.82fr_1.18fr]">
            <div className="lg:sticky lg:top-28">
              <span className="brand-kicker">Connected School ERP</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">AI is useful because the rest of the school is connected.</h2>
              <p className="mt-5 leading-7 text-slate-600">
                EduBridge is not only an AI tool. The same platform supports the operational records and role-based workflows that schools use every day.
              </p>
              <Link href="/school-erp" className="mt-7 inline-flex items-center gap-2 font-black text-orange-600">Explore complete School ERP <ArrowRight size={17} /></Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {platformAreas.map(([title, text], index) => (
                <div key={title} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="text-xs font-black uppercase tracking-[.16em] text-orange-600">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <span className="brand-kicker brand-kicker-dark">AI governance</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Designed to assist people, not hide decisions from them.</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                Schools need accountable workflows. EduBridge keeps AI assistance around authorized context, reviewable outputs and the institution&apos;s normal role and permission model.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [ShieldCheck, 'Role-aware access', 'Users work within their permitted school role and data context.'],
                [UsersRound, 'Human review', 'Teachers and authorized staff can review and correct important outputs.'],
                [Layers3, 'Connected records', 'AI assistance complements source ERP records instead of replacing them.'],
                [Smartphone, 'One digital ecosystem', 'Web and supported mobile roles stay connected to the same school platform.'],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[.055] p-6">
                  <Icon className="text-orange-400" size={22} />
                  <h3 className="mt-5 font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="text-center">
              <span className="brand-kicker">Frequently asked questions</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">AI-Powered School ERP FAQ</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                  <h3 className="text-lg font-black text-slate-950">{item.q}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
                </div>
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
