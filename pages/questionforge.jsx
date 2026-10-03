import Link from 'next/link';
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  FileImage,
  FileQuestion,
  Gauge,
  Layers3,
  ListChecks,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import SEOHead from '../components/SEOHead';

const features = [
  {
    icon: BookOpenCheck,
    title: 'Chapter & Topic Control',
    text: 'Build a paper around selected chapters or topics instead of relying on a generic prompt. Keep the generation aligned with the syllabus area you actually want to assess.',
  },
  {
    icon: ClipboardList,
    title: 'Configurable Paper Blueprint',
    text: 'Define sections, question types, marks and chapter-wise weightage so the generated draft follows the paper pattern your school needs.',
  },
  {
    icon: Gauge,
    title: 'Difficulty Balance',
    text: 'Create a planned mix of easy, moderate and more challenging questions, then review and adjust the balance before finalizing the paper.',
  },
  {
    icon: Layers3,
    title: 'Multiple Paper Sets',
    text: 'Generate alternate sets from the same blueprint to reduce repetitive manual drafting while keeping the intended structure consistent.',
  },
  {
    icon: FileImage,
    title: 'Reference Material Input',
    text: 'Use supported uploaded reference material such as documents or images as context, then review the questions AI proposes from that material.',
  },
  {
    icon: ShieldCheck,
    title: 'Teacher Review Before Final Use',
    text: 'QuestionForge is designed as an assistive authoring workflow. Teachers can review, edit, replace and approve the final questions before the paper is used.',
  },
];

const workflow = [
  ['1', 'Choose chapters, topics or supported reference material'],
  ['2', 'Set the paper pattern, marks, sections and difficulty plan'],
  ['3', 'Generate a structured question-paper draft with AI'],
  ['4', 'Review, edit and finalize the paper with teacher control'],
];

const audiences = [
  {
    icon: UsersRound,
    title: 'Teachers',
    text: 'Reduce repetitive drafting time while keeping academic judgement and final question selection with the teacher.',
  },
  {
    icon: ListChecks,
    title: 'Exam Coordinators',
    text: 'Standardize paper patterns, chapter coverage and difficulty expectations across classes or examination cycles.',
  },
  {
    icon: BrainCircuit,
    title: 'Schools Using EduBridge',
    text: 'Use QuestionForge alongside connected assessment and academic workflows instead of treating AI question generation as an isolated utility.',
  },
];

const faqs = [
  {
    q: 'What is QuestionForge by EduBridge?',
    a: 'QuestionForge is an AI-assisted question paper generation workflow from EduBridge. It helps educators create structured question-paper drafts from selected academic context while keeping teacher review and final approval in the workflow.',
  },
  {
    q: 'Can teachers generate questions chapter-wise or topic-wise?',
    a: 'Yes. QuestionForge is designed around chapter and topic selection so educators can keep generated questions focused on the intended syllabus area.',
  },
  {
    q: 'Can the question paper pattern and marks be configured?',
    a: 'Yes. The workflow can be planned around sections, question types, marks, chapter weightage and difficulty balance before the draft is generated.',
  },
  {
    q: 'Can QuestionForge use uploaded reference material?',
    a: 'Supported documents or images can be used as reference context in the generation workflow. Educators should review the generated questions against the source material before final use.',
  },
  {
    q: 'Does AI finalize the exam paper automatically?',
    a: 'No. The intended workflow keeps educators in control. AI helps prepare the draft, while the teacher or authorized academic team reviews, edits and approves the final paper.',
  },
  {
    q: 'Is QuestionForge connected with EduBridge ERP?',
    a: 'QuestionForge is an EduBridge AI capability and can complement the broader school ERP, assessment and academic-management workflows available in EduBridge.',
  },
];

export default function QuestionForgePage() {
  const pageUrl = 'https://www.edubridgeerp.in/questionforge';
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'QuestionForge by EduBridge',
    alternateName: 'QuestionForge',
    url: pageUrl,
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'AI Question Paper Generator',
    operatingSystem: 'Web',
    description: 'AI-assisted question paper generator for schools and teachers with chapter and topic control, configurable paper patterns, difficulty balance, multiple sets and educator review.',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.edubridgeerp.in/#organization',
      name: 'EduBridge ERP',
      url: 'https://www.edubridgeerp.in/',
    },
    featureList: features.map((item) => item.title),
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
      { '@type': 'ListItem', position: 2, name: 'QuestionForge', item: pageUrl },
    ],
  };

  return (
    <div className="bg-white text-slate-800">
      <SEOHead
        title="AI Question Paper Generator for Schools & Teachers | QuestionForge"
        description="QuestionForge by EduBridge is an AI question paper generator for schools and teachers with chapter-wise control, paper blueprints, difficulty balance, multiple sets and educator review."
        path="/questionforge"
        keywords={[
          'AI question paper generator',
          'AI question paper generator for teachers',
          'question paper generator for schools',
          'AI exam paper generator',
          'question bank software for schools',
          'school exam paper maker',
          'QuestionForge EduBridge',
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
              <span className="text-orange-300">QuestionForge</span>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
              <div>
                <span className="brand-kicker brand-kicker-dark"><Sparkles size={14} className="mr-2" /> QuestionForge by EduBridge</span>
                <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                  AI Question Paper Generator for Schools & Teachers
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  Turn chapters, topics and supported reference material into review-ready question-paper drafts with a configurable blueprint, planned difficulty and teacher control over the final paper.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">Request a Live Demo <ArrowRight size={18} /></Link>
                  <Link href="#how-it-works" className="btn-secondary-dark">See How It Works</Link>
                </div>
                <div className="mt-9 flex flex-wrap gap-2">
                  {['Teacher review retained', 'Blueprint-based generation', 'Multiple paper sets'].map((item) => (
                    <span key={item} className="pill-dark"><CheckCircle2 size={14} className="mr-1 inline text-orange-400" />{item}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[.06] p-6 shadow-2xl backdrop-blur md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white"><FileQuestion size={24} /></span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[.18em] text-orange-300">From blueprint to reviewed draft</p>
                    <h2 className="mt-1 text-xl font-black">A practical paper-generation workflow</h2>
                  </div>
                </div>
                <div className="mt-7 space-y-4">
                  {workflow.map(([n, text]) => (
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

        <section id="how-it-works" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="brand-kicker"><BrainCircuit size={14} className="mr-2" /> Purpose-built for paper setting</span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">More control than a one-line AI prompt</h2>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                QuestionForge is built around the choices educators already make while setting a paper: what to assess, how much weight each area receives, what difficulty is appropriate and which questions make the final cut.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600"><Icon size={21} /></span>
                  <h3 className="mt-5 text-lg font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <span className="brand-kicker"><RefreshCw size={14} className="mr-2" /> Faster drafting, human judgement intact</span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Generate the draft. Keep educators in control.</h2>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                A useful exam paper is not just a collection of AI-generated questions. QuestionForge helps structure the first draft while leaving relevance, wording, academic quality and final approval with the teacher or authorized academic team.
              </p>
              <div className="mt-7 space-y-4">
                {[
                  'Review questions before they become part of the final paper',
                  'Adjust chapter coverage, marks or difficulty when the draft needs refinement',
                  'Create alternate sets without rebuilding the complete paper pattern from scratch',
                  'Use QuestionForge alongside EduBridge assessment and academic workflows',
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-orange-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/modules/smart-assessments" className="btn-primary">Explore Smart Assessments <ArrowRight size={18} /></Link>
                <Link href="/ai-powered-school-erp" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 hover:border-orange-300 hover:text-orange-700">AI-Powered School ERP</Link>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl md:p-9">
              <p className="text-xs font-black uppercase tracking-[.18em] text-orange-300">Example blueprint</p>
              <h3 className="mt-2 text-2xl font-black">Define the paper before AI writes it</h3>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  ['Chapters / Topics', 'Choose the academic scope'],
                  ['Sections', 'MCQ, short or longer response'],
                  ['Marks', 'Plan section and question weightage'],
                  ['Difficulty', 'Balance easy, moderate and challenging'],
                  ['Sets', 'Create alternate versions'],
                  ['Review', 'Edit and approve before use'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[.06] p-4">
                    <p className="font-black text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="brand-kicker"><FileQuestion size={14} className="mr-2" /> Who it helps</span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Built around real school assessment roles</h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {audiences.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-3xl border border-slate-200 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-orange-300"><Icon size={21} /></span>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white md:py-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="text-center">
              <span className="brand-kicker brand-kicker-dark"><Sparkles size={14} className="mr-2" /> QuestionForge FAQ</span>
              <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">Questions schools and teachers commonly ask</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <article key={item.q} className="rounded-2xl border border-white/10 bg-white/[.05] p-6">
                  <h3 className="font-black text-white">{item.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
                </article>
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
