import Link from 'next/link';
import {
  ArrowRight,
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
  UsersRound,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import SEOHead from '../components/SEOHead';

const keyModules = [
  {
    icon: Layers3,
    title: 'Leadership & HOD',
    desc: 'Principal Command Center, department monitoring, approvals, teacher performance and institution-wide visibility.',
    href: '/roles/principal',
    accent: 'dark',
  },
  {
    icon: GraduationCap,
    title: 'Academics & LMS',
    desc: 'Attendance, timetable, syllabus, lesson plans, diary, assignments, PTM, assessments and online classes.',
    href: '/roles/teacher',
  },
  {
    icon: ClipboardCheck,
    title: 'Examination',
    desc: 'Schemes, date sheets, seating, invigilation, answer scripts, marks, results and report cards.',
    href: '/roles/examination',
    accent: 'orange',
  },
  {
    icon: Landmark,
    title: 'Admissions & Finance',
    desc: 'Enquiries, admissions, fee structures, collections, online payments, concessions, dues and finance reporting.',
    href: '/modules/fee-management',
  },
  {
    icon: UsersRound,
    title: 'HR & Campus Operations',
    desc: 'Employees, attendance, leave, payroll, inventory, library, visitors, gate passes and document workflows.',
    href: '/roles/hr',
  },
  {
    icon: BusFront,
    title: 'Transport & Safety',
    desc: 'Routes, buses, live GPS, driver trips, pickup/drop attendance, transport fees and operational reporting.',
    href: '/roles/transport',
  },
];

const proofPoints = [
  ['AI-powered', 'Intelligence inside practical academic and management workflows'],
  ['Schools + Colleges', 'One flexible platform for K-12 and higher education'],
  ['Web + Mobile', 'Connected role-based experiences across web, iOS and Android'],
  ['Institution branded', 'Your identity across the digital experience'],
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
    description: 'AI-powered education ERP for schools, colleges and multi-campus institutions with role-aware web and mobile experiences.',
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
          'AI powered school ERP',
          'examination management software',
          'principal dashboard ERP',
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

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:px-8 md:py-20 lg:min-h-[710px] lg:grid-cols-[.95fr_1.05fr] lg:py-24">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-orange-700 shadow-sm">
                <Sparkles size={15} /> AI-Powered Education ERP
              </div>

              <h1 className="mt-7 text-4xl font-black leading-[1.02] tracking-[-.035em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.35rem]">
                Run your institution with <span className="gradient-text">clarity.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                A connected ERP for schools and colleges — bringing academics, examinations, admissions, finance, HR, transport and leadership onto one intelligent platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book a Live Demo <ArrowRight size={18} />
                </Link>
                <Link href="/modules" className="home-secondary-btn">
                  Explore all modules
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                {['Schools & Colleges', 'Web + iOS + Android', 'Role-based access'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-orange-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[700px] lg:mx-0 lg:max-w-none">
              <div className="home-dashboard-shell">
                <div className="home-browser-bar">
                  <div className="flex gap-1.5">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="home-browser-label">EduBridge Management Dashboard</div>
                </div>
                <img
                  src="/images/screenshots/Admin.png"
                  alt="EduBridge ERP management dashboard"
                  className="block w-full"
                />
              </div>

              <div className="home-callout home-callout-ai">
                <span className="home-callout-icon"><BrainCircuit size={18} /></span>
                <span><b>AI-powered workflows</b><small>Planning, assessment & insights</small></span>
              </div>
              <div className="home-callout home-callout-apps">
                <span className="home-callout-icon"><Smartphone size={18} /></span>
                <span><b>Branded mobile apps</b><small>Your institution on iOS & Android</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl divide-y divide-slate-100 px-5 md:grid-cols-2 md:divide-x md:divide-y-0 md:px-8 lg:grid-cols-4">
            {proofPoints.map(([title, desc]) => (
              <div key={title} className="px-0 py-7 md:px-6 lg:px-7">
                <p className="font-black text-slate-950">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <span className="brand-kicker">The core platform</span>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                  Everything important. Nothing scattered.
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                  The home page stays focused on the areas management cares about most. Every capability below opens into deeper role and module pages when you need the detail.
                </p>
              </div>
              <Link href="/modules" className="inline-flex items-center gap-2 font-bold text-orange-600">
                View complete module catalog <ArrowRight size={18} />
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
                    Explore <ArrowRight size={16} className="transition group-hover:translate-x-1" />
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
              <p className="mt-7 text-xs font-black uppercase tracking-[.18em] text-orange-300">AI built into the work</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Useful AI, not a separate gimmick.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                EduBridge brings AI into lesson planning, assessments, evaluation support, academic improvement and management insight — while keeping educators in control.
              </p>
              <Link href="/modules/ai-assistant" className="mt-7 inline-flex items-center gap-2 font-black text-orange-400">
                Explore AI capabilities <ArrowRight size={17} />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-7 text-slate-900 md:p-10">
              <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-orange-100 blur-3xl" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Smartphone size={23} /></span>
              <p className="relative mt-7 text-xs font-black uppercase tracking-[.18em] text-orange-600">Your brand, not ours</p>
              <h2 className="relative mt-3 text-3xl font-black tracking-tight md:text-4xl">Institution-branded iOS & Android apps.</h2>
              <p className="relative mt-4 max-w-xl leading-7 text-slate-600">
                Deliver a polished mobile experience using your institution name, logo and visual identity, with focused workflows for the people who actually use them.
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
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">One platform. Different institutions.</h2>
              <p className="mt-5 leading-7 text-slate-600">Use the same connected foundation while adapting workflows to the way your school, college or campus group operates.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <Link href="/school-erp" className="home-audience-card group">
                <span className="home-audience-icon"><Building2 size={25} /></span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-orange-600">K-12</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">School ERP</h3>
                  <p className="mt-3 leading-7 text-slate-600">Academics, examinations, fees, transport, parent engagement, student wellbeing and daily campus operations.</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-orange-600">Explore School ERP <ArrowRight size={17} /></span>
                </div>
              </Link>

              <Link href="/college-erp" className="home-audience-card group">
                <span className="home-audience-icon"><GraduationCap size={25} /></span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-orange-600">Higher Education</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">College ERP</h3>
                  <p className="mt-3 leading-7 text-slate-600">A flexible campus management foundation for academic administration, students, staff, finance, communication and operations.</p>
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
