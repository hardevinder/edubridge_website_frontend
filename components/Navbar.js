import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Sparkles, Smartphone, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import DemoModal from './DemoModal';

const solutions = [
  { title: 'School ERP', href: '/school-erp', desc: 'Connected management for K-12 institutions', icon: Building2 },
  { title: 'College ERP', href: '/college-erp', desc: 'Academic, administrative and campus workflows', icon: GraduationCap },
  { title: 'AI-Powered ERP', href: '/modules/ai-assistant', desc: 'AI-assisted planning, assessment and insight', icon: Sparkles },
  { title: 'Branded Mobile Apps', href: '/modules/branded-mobile-apps', desc: 'Institution-branded iOS & Android apps', icon: Smartphone },
];

const popularModules = [
  ['Admissions CRM', '/modules/admission-crm'],
  ['Student 360°', '/modules/student-360'],
  ['Timetable', '/modules/timetable'],
  ['Smart Assessments', '/modules/smart-assessments'],
  ['Examination Management', '/roles/examination'],
  ['HOD & Department Management', '/roles/hod'],
  ['Exam Management', '/modules/exam-management'],
  ['Fees & Payments', '/modules/fee-management'],
  ['HR & Payroll', '/modules/payroll'],
  ['Live Bus Tracking', '/modules/live-bus-tracking'],
  ['Inventory', '/modules/inventory'],
  ['Library', '/modules/library'],
  ['Secure Chat', '/modules/secure-chat'],
  ['Teacher Performance', '/modules/teacher-performance'],
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="EduBridge ERP home">
            <img src="/logo.png" alt="EduBridge ERP" className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button className="nav-link flex items-center gap-1.5">Platform <ChevronDown size={16} /></button>
              <div className={`absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-5 transition ${productsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
                <div className="grid grid-cols-[1fr_1.35fr] gap-2 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">
                  <div className="rounded-2xl bg-slate-950 p-4 text-white">
                    <p className="px-2 text-xs font-bold uppercase tracking-[.18em] text-orange-300">Solutions</p>
                    <div className="mt-2 space-y-1">
                      {solutions.map(({ title, href, desc, icon: Icon }) => (
                        <Link key={href} href={href} className="group flex gap-3 rounded-xl p-3 hover:bg-white/10">
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-300"><Icon size={18} /></span>
                          <span><b className="block text-sm">{title}</b><small className="mt-0.5 block leading-5 text-slate-400">{desc}</small></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-400">Popular capabilities</p>
                      <Link href="/modules" className="flex items-center gap-1 text-xs font-bold text-orange-600">View all <ArrowRight size={13} /></Link>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-1">
                      {popularModules.map(([name, href]) => (
                        <Link key={href} href={href} className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-700">{name}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/modules" className="nav-link">Modules</Link>
            <Link href="/roles" className="nav-link">Solutions by Role</Link>
            <Link href="/features" className="nav-link">Features</Link>
            <Link href="/mobile-app" className="nav-link">Mobile Apps</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={() => setDemoOpen(true)} className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600">Request Demo</button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 lg:hidden" aria-label="Open menu">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-4 lg:hidden">
            <div className="mx-auto max-w-7xl space-y-1">
              <p className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Explore EduBridge</p>
              {[
                ['Home', '/'],
                ['All Modules', '/modules'],
                ['Solutions by Role', '/roles'],
                ['Examination Management', '/roles/examination'],
                ['HOD & Department Management', '/roles/hod'],
                ['School ERP', '/school-erp'],
                ['College ERP', '/college-erp'],
                ['AI-Powered ERP', '/modules/ai-assistant'],
                ['Branded iOS & Android Apps', '/modules/branded-mobile-apps'],
                ['Features', '/features'],
                ['Contact', '/contact'],
              ].map(([x, h]) => (
                <Link key={h} href={h} onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 font-semibold text-slate-800 hover:bg-slate-50">{x}</Link>
              ))}
              <button onClick={() => { setMobileOpen(false); setDemoOpen(true); }} className="mt-3 w-full rounded-xl bg-orange-500 px-5 py-3 font-bold text-white">Request Demo</button>
            </div>
          </div>
        )}
      </header>
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
