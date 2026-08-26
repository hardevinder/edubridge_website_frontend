import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DemoModal from './DemoModal';

export default function FinalCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-orange-500 py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,.24),transparent_26%),radial-gradient(circle_at_85%_80%,rgba(15,23,42,.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 md:px-8 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[.2em] text-orange-100">See EduBridge in action</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">Modernize your institution with one connected platform.</h2>
            <p className="mt-4 max-w-2xl text-orange-50">
              Book a tailored demonstration of the workflows that matter most to your school or college — from leadership and academics to examinations, finance, operations and branded mobile apps.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white/90">
              {['Schools & Colleges', 'Role-based workspaces', 'Web + iOS + Android'].map((x) => (
                <span key={x} className="flex items-center gap-2"><CheckCircle2 size={16} />{x}</span>
              ))}
            </div>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
            >
              Request a Demo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
