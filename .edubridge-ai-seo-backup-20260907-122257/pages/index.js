import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Activity,
  BrainCircuit,
  Building2,
  BusFront,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Landmark,
  Layers3,
  Smartphone,
  Sparkles,
  ShieldCheck,
  UsersRound,
  Workflow,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import SEOHead from '../components/SEOHead';

const keyModules = [
  {
    icon: Layers3,
    title: 'Leadership & Governance',
    desc: 'Principal dashboards, HOD oversight, approvals, teacher performance and institution-wide visibility for faster, informed decisions.',
    href: '/roles/principal',
    accent: 'dark',
  },
  {
    icon: GraduationCap,
    title: 'Academic Management',
    desc: 'Attendance, timetable, syllabus planning, lesson plans, digital diary, assignments, PTM, assessments and online learning.',
    href: '/roles/teacher',
  },
  {
    icon: ClipboardCheck,
    title: 'Examination Management',
    desc: 'Manage the complete examination lifecycle from schemes and date sheets to seating, invigilation, answer scripts, marks and report cards.',
    href: '/roles/examination',
    accent: 'orange',
  },
  {
    icon: Landmark,
    title: 'Admissions & Finance',
    desc: 'Enquiries, admissions, fee structures, collections, online payments, concessions, dues and management-ready financial reporting.',
    href: '/modules/fee-management',
  },
  {
    icon: UsersRound,
    title: 'HR & Campus Operations',
    desc: 'Employee records, attendance, leave, payroll, inventory, library, visitors, gate passes and secure document workflows.',
    href: '/roles/hr',
  },
  {
    icon: BusFront,
    title: 'Transport & Student Safety',
    desc: 'Routes, buses, live GPS, driver trips, pickup and drop attendance, transport fees and real-time operational visibility.',
    href: '/roles/transport',
  },
];

const proofPoints = [
  [Workflow, 'Connected by design', 'One source of truth across academic, administrative and operational teams'],
  [BrainCircuit, 'AI-assisted workflows', 'Practical intelligence for planning, assessment, evaluation and management insight'],
  [ShieldCheck, 'Role-based experiences', 'Focused workspaces for leadership, staff, teachers, students, parents and operations'],
  [Smartphone, 'Your branded apps', 'Institution-branded iOS and Android experiences for your community'],
];

export default function Home() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EduBridge ERP',
    url: 'https://www.edubridgeerp.in/',
    email: 'info@edubridgeerp.in',
    telephone: '+91 94178 73297',
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EduBridge ERP',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web, iOS, Android',
    description: 'AI-powered education ERP for schools, colleges and multi-campus institutions with academics, examinations, admissions, finance, HR, transport and institution-branded mobile apps.',
  };

  return (
    <div className="bg-white text-slate-800">
      <SEOHead
        title="EduBridge ERP | AI-Powered ERP for Schools & Colleges"
        description="AI-powered education ERP for schools and colleges with academics, examinations, admissions, fees, HR, transport, leadership dashboards and institution-branded iOS & Android apps."
        path="/"
        keywords={[
          'education ERP India',
          'school ERP software',
          'college ERP software',
          'AI powered education ERP',
          'examination management software',
          'school management software India',
          'college management software India',
          'branded school mobile app',
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <Navbar />

      <main>
        <section className="home-hero relative overflow-hidden border-b border-slate-200/70 bg-[#fbfbfa]">
          <div className="home-hero-grid absolute inset-0" />
          <div className="home-hero-glow home-hero-glow-a" />
          <div className="home-hero-glow home-hero-glow-b" />

          <div className="home-hero-orb" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:px-8 md:py-20 lg:min-h-[750px] lg:grid-cols-[.92fr_1.08fr] lg:py-24">
            <div className="relative z-10 max-w-2xl">
              <div className="home-hero-badge">
                <span><Sparkles size={14} /></span>
                AI-Powered Education ERP
                <i />
                Built for India
              </div>

              <h1 className="mt-7 text-4xl font-black leading-[1.02] tracking-[-.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                One intelligent platform to run your <span className="gradient-text">entire institution.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                EduBridge connects academics, examinations, admissions, finance, HR, transport and campus operations across web and institution-branded iOS & Android apps — built for schools, colleges and multi-campus institutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Request a Live Demo <ArrowRight size={18} />
                </Link>
                <Link href="/modules" className="home-secondary-btn">
                  Explore the Platform
                </Link>
              </div>

              <div className="mt-9 border-t border-slate-200/80 pt-6">
                <p className="mb-3 text-[11px] font-black uppercase tracking-[.18em] text-slate-400">One secure experience for</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                  {['Schools, Colleges & Multi-Campus', 'Web + iOS + Android', 'Secure role-based access'].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={17} className="text-orange-500" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[700px] lg:mx-0 lg:max-w-none">
              <div className="home-visual-backdrop" />
              <div className="home-dashboard-shell">
                <div className="home-browser-bar">
                  <div className="flex gap-1.5">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="home-browser-label">EduBridge ERP · Management Overview</div>
                  <span className="home-live-status"><i /> Live overview</span>
                </div>
                <Image
                  src="/images/screenshots/Admin.png"
                  alt="EduBridge ERP management dashboard"
                  width={1024}
                  height={1024}
                  priority
                  sizes="(max-width: 1023px) 100vw, 54vw"
                  className="block w-full"
                />
                <div className="home-dashboard-footer">
                  <span><Activity size={14} /> Real-time visibility</span>
                  <span>Academics</span>
                  <i />
                  <span>Operations</span>
                  <i />
                  <span>Engagement</span>
                </div>
              </div>

              <div className="home-callout home-callout-ai">
                <span className="home-callout-icon"><BrainCircuit size={18} /></span>
                <span><b>AI-assisted workflows</b><small>Planning, assessment & insight</small></span>
              </div>
              <div className="home-callout home-callout-apps">
                <span className="home-callout-icon"><Smartphone size={18} /></span>
                <span><b>Institution-branded apps</b><small>Your identity on iOS & Android</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl gap-px bg-slate-100 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-4">
            {proofPoints.map(([Icon, title, desc]) => (
              <div key={title} className="home-proof-card">
                <span className="home-proof-icon"><Icon size={18} /></span>
                <div>
                  <p className="font-black text-slate-950">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="home-platform-section py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <span className="brand-kicker">Core platform</span>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                  One connected system for your most important operations.
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                  Give leadership clear visibility and every team a focused workspace. EduBridge connects data and workflows across departments so your institution can operate with greater speed, control and consistency.
                </p>
              </div>
              <Link href="/modules" className="inline-flex items-center gap-2 font-bold text-orange-600">
                Explore all modules <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {keyModules.map(({ icon: Icon, title, desc, href, accent }) => (
                <Link
                  key={title}
                  href={href}
                  className={`home-module-card group ${accent === 'dark' ? 'home-module-card-dark' : ''} ${accent === 'orange' ? 'home-module-card-orange' : ''}`}
                >
                  <span className="home-module-icon"><Icon size={22} /></span>
                  <h3 className="mt-6 text-xl font-black tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6">{desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-black">
                    Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.055] p-7 md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white"><BrainCircuit size={23} /></span>
              <p className="mt-7 text-xs font-black uppercase tracking-[.18em] text-orange-300">AI inside everyday workflows</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">AI that supports educators and decision-makers.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Use AI to assist lesson planning, question and assessment creation, evaluation support, academic improvement and management insight — while keeping educators and administrators in control.
              </p>
              <Link href="/modules/ai-assistant" className="mt-7 inline-flex items-center gap-2 font-black text-orange-400">
                Explore AI capabilities <ArrowRight size={17} />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-7 text-slate-900 md:p-10">
              <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-orange-100 blur-3xl" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Smartphone size={23} /></span>
              <p className="relative mt-7 text-xs font-black uppercase tracking-[.18em] text-orange-600">Your institution. Your identity.</p>
              <h2 className="relative mt-3 text-3xl font-black tracking-tight md:text-4xl">Institution-branded iOS & Android apps.</h2>
              <p className="relative mt-4 max-w-xl leading-7 text-slate-600">
                Extend your digital campus with mobile experiences carrying your institution name, logo and visual identity, with role-focused workflows for students, parents, teachers and operational teams.
              </p>
              <Link href="/modules/branded-mobile-apps" className="relative mt-7 inline-flex items-center gap-2 font-black text-orange-600">
                Explore branded apps <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="brand-kicker">Built for education</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Designed for schools and colleges.</h2>
              <p className="mt-5 leading-7 text-slate-600">
                A flexible foundation for institutions that need stronger academic control, efficient administration and a better digital experience for every stakeholder.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <Link href="/school-erp" className="home-audience-card group">
                <span className="home-audience-icon"><Building2 size={25} /></span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-orange-600">K-12 Education</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">School ERP</h3>
                  <p className="mt-3 leading-7 text-slate-600">Connect academics, examinations, fees, transport, parent engagement, student wellbeing and daily school operations in one system.</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-orange-600">Explore School ERP <ArrowRight size={17} /></span>
                </div>
              </Link>

              <Link href="/college-erp" className="home-audience-card group">
                <span className="home-audience-icon"><GraduationCap size={25} /></span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-orange-600">Higher Education</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">College ERP</h3>
                  <p className="mt-3 leading-7 text-slate-600">Manage academic administration, students, faculty, finance, communication and campus operations on a connected digital platform.</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-orange-600">Explore College ERP <ArrowRight size={17} /></span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
