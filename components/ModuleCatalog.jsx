import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { moduleCategories, modules } from '../data/moduleCatalog';

export default function ModuleCatalog({ compact = false }) {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => modules.filter((item) => {
    const categoryMatch = active === 'all' || item.category === active;
    const q = query.trim().toLowerCase();
    const searchMatch = !q || `${item.title} ${item.summary} ${item.highlights.join(' ')}`.toLowerCase().includes(q);
    return categoryMatch && searchMatch;
  }), [active, query]);
  const featuredSlugs = ['institution-command-center','department-hod','exam-management','exam-seating','answer-scripts','teacher-performance','student-360','smart-assessments','fee-management','payroll','transport-management','live-bus-tracking','inventory','library','admission-crm','secure-chat','ai-assistant','branded-mobile-apps'];
  const display = compact && active === 'all' && !query.trim() ? featuredSlugs.map(slug => modules.find(item => item.slug === slug)).filter(Boolean) : (compact ? filtered.slice(0, 18) : filtered);

  return (
    <div>
      {!compact && (
        <div className="mx-auto mb-7 max-w-xl relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a module — fees, exams, transport, AI..." className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100" />
        </div>
      )}
      <div className="hide-scrollbar mb-9 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible md:pb-0">
        <button onClick={() => setActive('all')} className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${active === 'all' ? 'bg-slate-950 text-white' : 'border border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:text-orange-600'}`}>All Modules</button>
        {moduleCategories.map((cat) => <button key={cat.id} onClick={() => setActive(cat.id)} className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${active === cat.id ? 'bg-slate-950 text-white' : 'border border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:text-orange-600'}`}>{cat.label}</button>)}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {display.map((item) => (
          <Link key={item.slug} href={`/modules/${item.slug}`} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/60">
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700">{item.eyebrow || (moduleCategories.find(c => c.id === item.category) || {}).label}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-orange-500 group-hover:text-white"><ArrowRight size={17}/></span>
            </div>
            <h3 className="text-xl font-bold text-slate-950 group-hover:text-orange-600">{item.title}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.audiences.slice(0,3).map((role) => <span key={role} className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">{role}</span>)}
            </div>
          </Link>
        ))}
      </div>
      {compact && <div className="mt-9 text-center"><Link href="/modules" className="inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700">Explore all modules <ArrowRight size={18}/></Link></div>}
      {!compact && filtered.length === 0 && <p className="py-12 text-center text-slate-500">No module matched your search. Try a broader term.</p>}
    </div>
  );
}
