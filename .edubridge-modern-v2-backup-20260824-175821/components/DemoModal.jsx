import { X } from 'lucide-react';
import RequestDemoForm from './RequestDemoForm';

export default function DemoModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200" aria-label="Close demo form"><X size={20}/></button>
        <div className="border-b border-slate-100 px-6 pb-5 pt-7 md:px-8">
          <span className="brand-kicker">See EduBridge in action</span>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 md:text-3xl">Request a personalized demo</h2>
          <p className="mt-2 text-sm text-slate-600">Tell us about your school, college or institution and we’ll focus the demo on the workflows that matter to you.</p>
        </div>
        <RequestDemoForm onSuccess={onClose} />
      </div>
    </div>
  );
}
