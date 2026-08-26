import Link from 'next/link';
import { ArrowRight, Search, UsersRound } from 'lucide-react';
import { useMemo, useState } from 'react';
import { roleCategories, roles } from '../data/roleCatalog';

export default function RoleCatalog({ compact = false }) {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => roles.filter((role) => {
    const categoryMatch = active === 'all' || role.category === active;
    const q = query.trim().toLowerCase();
    const searchMatch = !q || `${role.title} ${role.summary} ${role.features.join(' ')}`.toLowerCase().includes(q);
    return categoryMatch && searchMatch;
  }), [active, query]);
  const display = compact ? filtered.slice(0, 8) : filtered;

  return <div>
    {!compact && <div className="relative mx-auto mb-7 max-w-xl"><Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search a role — HOD, examination, accounts..." className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"/></div>}
    <div className="hide-scrollbar mb-9 flex gap-2 overflow-x-auto pb-2"><button onClick={()=>setActive('all')} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${active==='all'?'bg-slate-950 text-white':'border border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:text-orange-600'}`}>All Roles</button>{roleCategories.map(cat=><button key={cat.id} onClick={()=>setActive(cat.id)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${active===cat.id?'bg-slate-950 text-white':'border border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:text-orange-600'}`}>{cat.label}</button>)}</div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{display.map(role=><Link key={role.slug} href={`/roles/${role.slug}`} className={`group rounded-3xl border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${role.spotlight?'border-orange-200 shadow-sm shadow-orange-100/70':'border-slate-200 shadow-sm'}`}><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white group-hover:bg-orange-500"><UsersRound size={20}/></span><ArrowRight size={18} className="text-slate-300 group-hover:text-orange-500"/></div><p className="mt-5 text-xs font-black uppercase tracking-[.14em] text-orange-600">{role.eyebrow}</p><h3 className="mt-2 text-xl font-black text-slate-950 group-hover:text-orange-600">{role.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{role.summary}</p><div className="mt-5 text-xs font-semibold text-slate-500">{role.features.length} role-specific capabilities</div></Link>)}</div>
    {compact && <div className="mt-9 text-center"><Link href="/roles" className="inline-flex items-center gap-2 font-bold text-orange-600">Explore every role <ArrowRight size={18}/></Link></div>}
    {!compact && filtered.length===0 && <p className="py-12 text-center text-slate-500">No role matched your search.</p>}
  </div>;
}
