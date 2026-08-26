import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FinalCTA from '../../components/FinalCTA';
import SEOHead from '../../components/SEOHead';
import ModuleCatalog from '../../components/ModuleCatalog';
import { modules } from '../../data/moduleCatalog';

export default function ModulesPage() {
  return <div className="bg-slate-50 text-slate-800">
    <SEOHead title="Education ERP Modules for Schools & Colleges" description="Explore EduBridge ERP modules for academics, exams, fees, HR, admissions, transport, inventory, communication, AI and institution-branded mobile apps." path="/modules" keywords={['education ERP modules','school ERP modules','college ERP software','AI powered education ERP']} />
    <Navbar />
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
        <div className="hero-glow hero-glow-one"/><div className="hero-glow hero-glow-two"/>
        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
          <span className="brand-kicker brand-kicker-dark">Complete Education ERP</span>
          <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">Every major workflow. <span className="gradient-text">One connected platform.</span></h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">From admissions and academics to examinations, finance, HR, transport, campus operations, AI and mobile apps — explore the EduBridge platform module by module.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-300"><span className="pill-dark">Schools</span><span className="pill-dark">Colleges</span><span className="pill-dark">Multi-Campus Institutions</span><span className="pill-dark">iOS + Android</span><span className="pill-dark">AI Powered</span></div>
        </div>
      </section>
      <section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="mb-10"><span className="brand-kicker">{modules.length} detailed modules</span><h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">Find exactly what your institution needs</h2></div><ModuleCatalog /></div></section>
      <FinalCTA />
    </main>
    <Footer />
  </div>
}
