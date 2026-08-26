import Link from 'next/link';
import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, FileText, Layers3, MonitorSmartphone, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FinalCTA from '../../components/FinalCTA';
import SEOHead from '../../components/SEOHead';
import { getCategory, moduleMap, modules } from '../../data/moduleCatalog';
import { categoryExperience, deepDive } from '../../data/moduleDetailContent';

const roleLinks = {
  'Principal':'principal','Management':'management','Director / Management':'management','HOD':'hod','Examination Department':'examination','Examination':'examination','Coordinator':'coordinator','Academic Coordinator':'coordinator','Teacher':'teacher','Student':'student-parent','Student / Parent':'student-parent','Parent':'student-parent','Accounts':'accounts','HR':'hr','Transport Manager':'transport','Transport':'transport','Driver':'driver','Front Office':'front-office','Admission Team':'admission','Admin':'admin','Super Admin':'admin','Management / Principal':'principal','Health Staff':'health-staff','Library':'library','Librarian':'library','Inventory':'inventory','Invigilator':'examination','Evaluator':'examination','Security':'security'
};

export default function ModuleDetail({ module, related }) {
  const category = getCategory(module.category);
  const experience = categoryExperience[module.category] || categoryExperience.platform;
  const deep = deepDive[module.slug];
  const schema = {
    '@context':'https://schema.org','@type':'SoftwareApplication',name:`EduBridge ${module.title}`,
    applicationCategory:'EducationalApplication',operatingSystem:'Web, iOS, Android',
    description:module.summary,url:`https://www.edubridgeerp.in/modules/${module.slug}`,
    brand:{'@type':'Brand',name:'EduBridge ERP'}
  };
  return <div className="bg-white text-slate-800">
    <SEOHead title={`${module.title} for Schools & Colleges`} description={`${module.summary} Explore capabilities, role workflows, controls, reports and connected EduBridge modules.`} path={`/modules/${module.slug}`} keywords={[module.title,'school ERP','college ERP','education ERP', ...((module.eyebrow && module.eyebrow.includes('AI')) ? ['AI powered ERP'] : [])]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
    <Navbar />
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24"><div className="hero-grid absolute inset-0 opacity-25"/><div className="hero-glow hero-glow-one"/>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400"><Link href="/" className="hover:text-white">Home</Link><ChevronRight size={14}/><Link href="/modules" className="hover:text-white">Modules</Link><ChevronRight size={14}/><span className="text-orange-400">{module.title}</span></div>
          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr]">
            <div><span className="brand-kicker brand-kicker-dark">{module.eyebrow || (category && category.label)}</span><h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">{module.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{module.summary}</p>
              <div className="mt-8 flex flex-wrap gap-2">{module.audiences.map(role => roleLinks[role] ? <Link key={role} href={`/roles/${roleLinks[role]}`} className="pill-dark transition hover:border-orange-400/30 hover:text-orange-300">{role}</Link> : <span key={role} className="pill-dark">{role}</span>)}</div>
              <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="btn-primary">Request a Demo <ArrowRight size={18}/></Link><Link href="/modules" className="btn-secondary-dark">Explore All Modules</Link></div>
            </div>
            <div className="glass-card-dark p-6 md:p-8"><div className="mb-5 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-white"><Sparkles size={22}/></span><div><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-300">At a glance</p><h2 className="mt-1 text-xl font-bold">What this module covers</h2></div></div><div className="space-y-3">{module.highlights.map((x)=><div key={x} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 text-sm text-slate-200"><CheckCircle2 className="mt-0.5 shrink-0 text-orange-400" size={18}/><span>{x}</span></div>)}</div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-7"><div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">{[
        [Layers3,'Connected workflow',experience.label],
        [UsersRound,'Role-aware',`${module.audiences.length} primary role${module.audiences.length===1?'':'s'}`],
        [MonitorSmartphone,'Web + mobile','Responsive, role-based experience'],
        [ShieldCheck,'Governed access','Institution-scoped data & controls'],
      ].map(([Icon,label,value])=><div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orange-600 shadow-sm"><Icon size={19}/></span><div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p><p className="mt-1 text-sm font-bold text-slate-900">{value}</p></div></div>)}</div></section>

      {deep && <section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="mx-auto max-w-4xl text-center"><span className="brand-kicker">Feature depth</span><h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">{deep.title}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{deep.intro}</p></div><div className="mt-12 grid gap-5 md:grid-cols-2">{deep.groups.map((group)=><div key={group.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h3 className="text-xl font-black text-slate-950">{group.title}</h3><div className="mt-5 space-y-3">{group.items.map(item=><p key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-orange-500"/><span>{item}</span></p>)}</div></div>)}</div></div></section>}

      <section className={`${deep?'bg-slate-50':'bg-white'} py-16 md:py-24`}><div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div><span className="brand-kicker">Key capabilities</span><h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">Everything needed for the workflow</h2><p className="mt-4 leading-7 text-slate-600">{experience.intro}</p><div className="mt-7 grid gap-3">{module.highlights.map((x,i)=><div key={x} className="feature-row"><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}</div></div>
        <div className="rounded-[2rem] bg-slate-950 p-6 text-white md:p-9"><span className="brand-kicker brand-kicker-dark">How it works</span><div className="mt-7 space-y-5">{module.workflow.map((step,i)=><div key={step} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">{i+1}</span><div><p className="font-bold text-white">{step}</p>{i < module.workflow.length-1 && <div className="ml-4 mt-3 h-5 border-l border-dashed border-slate-600"/>}</div></div>)}</div></div>
      </div></section>

      <section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="grid gap-10 lg:grid-cols-3"><div className="rounded-[2rem] border border-slate-200 p-7"><UsersRound className="text-orange-500"/><h2 className="mt-5 text-xl font-black text-slate-950">Who works in this module</h2><div className="mt-5 flex flex-wrap gap-2">{module.audiences.map(role=>roleLinks[role]?<Link key={role} href={`/roles/${roleLinks[role]}`} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700">{role}</Link>:<span key={role} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">{role}</span>)}</div><p className="mt-5 text-sm leading-6 text-slate-600">Each user works through their own role and permission context, so the same institutional record can support leadership, staff and learner workflows without exposing unnecessary access.</p></div><div className="rounded-[2rem] border border-slate-200 p-7"><ShieldCheck className="text-orange-500"/><h2 className="mt-5 text-xl font-black text-slate-950">Controls & governance</h2><div className="mt-5 space-y-3">{experience.controls.map(x=><p key={x} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-500"/>{x}</p>)}</div></div><div className="rounded-[2rem] border border-slate-200 p-7"><MonitorSmartphone className="text-orange-500"/><h2 className="mt-5 text-xl font-black text-slate-950">Web, apps & connected data</h2><div className="mt-5 space-y-3">{experience.experience.map(x=><p key={x} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-500"/>{x}</p>)}</div></div></div></div></section>

      <section className="bg-slate-50 py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="grid items-start gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><span className="brand-kicker">Institution impact</span><h2 className="mt-3 text-3xl font-black text-slate-950">Built for outcomes, not just data entry.</h2><p className="mt-4 leading-7 text-slate-600">EduBridge connects this module with the rest of your institution, so teams work from the same current data instead of isolated registers, spreadsheets and apps.</p></div><div className="grid gap-4 md:grid-cols-3">{module.benefits.map((x)=><div key={x} className="rounded-3xl border border-slate-200 bg-white p-6"><CheckCircle2 className="text-orange-500"/><h3 className="mt-5 font-bold leading-6 text-slate-950">{x}</h3></div>)}</div></div>{deep && deep.reports && deep.reports.length>0 && <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 md:p-9"><div className="grid gap-8 lg:grid-cols-[.6fr_1.4fr]"><div><FileText className="text-orange-500"/><h3 className="mt-4 text-2xl font-black text-slate-950">Reports, outputs & review</h3><p className="mt-3 text-sm leading-6 text-slate-600">Operational workflows become usable management records, not just transactions.</p></div><div className="grid gap-3 sm:grid-cols-2">{deep.reports.map((x)=><div key={x} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"><BarChart3 size={18} className="mt-0.5 shrink-0 text-orange-500"/>{x}</div>)}</div></div></div>}</div></section>

      {related.length > 0 && <section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="mb-8 flex items-end justify-between gap-4"><div><span className="brand-kicker">Connected platform</span><h2 className="mt-3 text-3xl font-black text-slate-950">Related modules</h2></div><Link href="/modules" className="hidden items-center gap-2 font-bold text-orange-600 md:flex">All modules <ArrowRight size={17}/></Link></div><div className="grid gap-4 md:grid-cols-3">{related.map(r=><Link key={r.slug} href={`/modules/${r.slug}`} className="group rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"><span className="text-xs font-bold uppercase tracking-wider text-orange-600">{r.eyebrow}</span><h3 className="mt-3 text-xl font-bold text-slate-950 group-hover:text-orange-600">{r.title}</h3><p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{r.summary}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600">View module <ArrowRight size={15}/></span></Link>)}</div></div></section>}
      <FinalCTA />
    </main><Footer />
  </div>
}

export async function getStaticPaths(){ return { paths: modules.map((item)=>({params:{slug:item.slug}})), fallback:false }; }
export async function getStaticProps({params}){ const module = moduleMap[params.slug]; const related = modules.filter((x)=>x.category===module.category && x.slug!==module.slug).slice(0,3); return {props:{module,related}}; }
