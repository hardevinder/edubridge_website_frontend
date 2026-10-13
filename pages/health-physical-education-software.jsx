import Link from 'next/link';
import Head from 'next/head';
import { ArrowRight, Activity, ClipboardList, ShieldCheck, Users, BarChart3, CheckCircle2, Trophy } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import SEOHead from '../components/SEOHead';

const canonical = 'https://www.edubridgeerp.in/health-physical-education-software';
const features = [
  { icon: Activity, title: 'HPE Dashboard', description: 'Open an organized view of physical education activity records and participation workflows.' },
  { icon: ClipboardList, title: 'Sports & PE Activities', description: 'Create and list sports, games, fitness and other physical education activities.' },
  { icon: Users, title: 'Activity-wise Student Roster', description: 'Open the roster associated with an activity to manage participation records.' },
  { icon: CheckCircle2, title: 'Participation Recording', description: 'Record which students took part in each activity for easy follow-up and review.' },
  { icon: ShieldCheck, title: 'Role-aware Access', description: 'Use permission-controlled HPE routes so authorized staff manage the right activity records.' },
  { icon: BarChart3, title: 'Connected School ERP', description: 'Keep physical education administration within the broader EduBridge school management platform.' },
];
const steps = [
  ['Plan', 'Choose the sports or physical education activity to organize.'],
  ['Create', 'Add the activity to the HPE register.'],
  ['Select', 'Open the activity roster and identify students.'],
  ['Record', 'Save the participating students.'],
  ['Review', 'Return to activity records for future reference.'],
];
const faqs = [
  { q: 'What is Health and Physical Education (HPE) software?', a: 'HPE software helps schools organize physical education activities, student rosters and participation records digitally instead of relying only on manual registers.' },
  { q: 'Can PE teachers record students participating in sports activities?', a: 'The EduBridge HPE workflow includes activity rosters and saving student participants, supporting a structured record of who took part.' },
  { q: 'Does HPE connect with the school ERP?', a: 'Yes. HPE is designed as part of the EduBridge ERP platform, alongside school academics, attendance and student administration.' },
  { q: 'Can sports staff control access to activity records?', a: 'HPE backend routes include role-aware access checks for scoped and activity-specific operations.' },
  { q: 'Does the current module automatically time a 400-metre race?', a: 'Automatic race timing is not presented as an available feature of this HPE module.' },
];
const schema = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'EduBridge Health & Physical Education (HPE) Management', applicationCategory: 'EducationalApplication', operatingSystem: 'Web', description: 'School physical education management software with HPE activity dashboard, sports activities, activity rosters, student participation and role-aware access.', url: canonical, publisher: { '@type': 'Organization', name: 'EduBridge ERP', url: 'https://www.edubridgeerp.in/' } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.edubridgeerp.in/' },
    { '@type': 'ListItem', position: 2, name: 'Modules', item: 'https://www.edubridgeerp.in/modules' },
    { '@type': 'ListItem', position: 3, name: 'Health & Physical Education', item: canonical },
  ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({q,a}) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
];
export default function HPEPage() {
  return <div className="bg-white text-slate-800">
    <SEOHead title="School Sports & Physical Education Management Software" description="EduBridge HPE software helps schools manage sports and PE activities, student participation, activity rosters and staff permissions within one school ERP." path="/health-physical-education-software" keywords={['school physical education management software','school sports management software','HPE software for schools','PE activity tracking software','student sports participation records','school sports activity management']} />
    <Head>{schema.map((entry,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(entry)}} />)}</Head>
    <Navbar />
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28"><div className="hero-glow hero-glow-one"/><div className="hero-glow hero-glow-two"/>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8"><span className="brand-kicker brand-kicker-dark">EduBridge ERP · Sports & Student Development</span>
          <div className="mt-7 max-w-4xl"><h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">School Sports &amp; <span className="gradient-text">Physical Education Management Software</span></h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">Organize HPE activities, build student rosters and record sports participation in one connected school ERP. Give PE teachers and sports coordinators a clearer way to manage day-to-day activity records.</p></div>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="btn-primary">Request an HPE Demo <ArrowRight size={18}/></Link><Link href="/modules/health-physical-education" className="btn-secondary-dark">Explore HPE Module</Link></div>
          <div className="mt-10 flex flex-wrap gap-2 text-xs font-semibold text-slate-200">{['Physical Education Teachers','School Sports Coordinators','Activity Rosters','Participation Records','Role-aware Access'].map(t=><span key={t} className="pill-dark">{t}</span>)}</div>
        </div>
      </section>
      <section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><p className="brand-kicker">A dedicated HPE workflow</p><h2 className="mt-3 max-w-3xl text-3xl font-black text-slate-950 md:text-4xl">Manage school physical education with connected activity records</h2><p className="mt-5 max-w-3xl leading-7 text-slate-600">Move away from scattered sports registers. EduBridge HPE brings activity creation, rosters and participant recording into a consistent digital workflow. The HPE module is distinct from student health screening or medical records.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(({icon:Icon,title,description})=><article key={title} className="rounded-3xl border border-slate-200 p-7 shadow-sm"><Icon className="text-orange-500" size={30}/><h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p></article>)}</div>
      </div></section>
      <section className="bg-slate-50 py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="flex items-center gap-3"><Trophy className="text-orange-500" size={28}/><span className="brand-kicker">Five-step workflow</span></div><h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">From sports activity planning to participation records</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-5">{steps.map(([label,detail],i)=><article key={label} className="rounded-3xl border border-slate-200 bg-white p-5"><span className="text-sm font-black text-orange-600">STEP {i+1}</span><h3 className="mt-3 text-xl font-black text-slate-950">{label}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p></article>)}</div>
      </div></section>
      <section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><h2 className="text-3xl font-black text-slate-950 md:text-4xl">Why schools choose digital HPE records</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{[['For PE Teachers','Organize and revisit activity-wise participation without juggling separate lists.'],['For Sports Coordinators','Maintain a clearer overview of school sports activities and participating students.'],['For School Leaders','Support more consistent activity administration across staff and classes.']].map(([t,d])=><div key={t} className="rounded-3xl bg-slate-50 p-7"><h3 className="text-xl font-black text-slate-950">{t}</h3><p className="mt-3 leading-7 text-slate-600">{d}</p></div>)}</div>
        <p className="mt-9 text-sm leading-6 text-slate-500">Interested in fitness-test scoring, race timing or longitudinal athletic analytics? Ask for a feature walkthrough and current availability; these are not claimed as launched HPE features here.</p>
      </div></section>
      <section className="bg-slate-50 py-16 md:py-24"><div className="mx-auto max-w-4xl px-5 md:px-8"><h2 className="text-3xl font-black text-slate-950 md:text-4xl">Frequently asked questions</h2><div className="mt-8 space-y-4">{faqs.map(({q,a})=><details key={q} className="group rounded-2xl border border-slate-200 bg-white p-6"><summary className="cursor-pointer font-bold text-slate-950">{q}</summary><p className="mt-4 leading-7 text-slate-600">{a}</p></details>)}</div>
        <p className="mt-8 text-sm text-slate-600">Also explore <Link className="font-bold text-orange-600 underline" href="/modules/student-health">Student Health &amp; Growth</Link> and <Link className="font-bold text-orange-600 underline" href="/school-erp">School ERP Software</Link>.</p>
      </div></section>
      <FinalCTA />
    </main><Footer />
  </div>;
}
