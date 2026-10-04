import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, Layers3, Palette, School, Settings2, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import SEOHead from '../components/SEOHead';

const base = 'https://www.edubridgeerp.in';
const path = '/custom-report-card-designer-school';
const title = 'Custom Report Card Designer for Schools | Visual Report Card Editing | EduBridge';
const description = 'Design and customize school report cards visually with EduBridge: school branding, student profile fields, scholastic and co-scholastic layouts, grading scales, attendance, remarks, signatures, term formats and bulk PDF generation.';

const features = [
  'Visual report card editing for school-specific layouts and presentation',
  'School logo, identity, address, contact details and header customization',
  'Choose and arrange student profile fields such as class, section, roll number and admission details',
  'Flexible scholastic subject, exam component, marks, grade and total structures',
  'Separate co-scholastic activities, skills, grades and descriptive areas',
  'Custom grading scales, grade bands and result presentation rules',
  'Attendance, height, weight, blood group, teacher remarks and other supported profile information',
  'Signature areas for class teacher, co-checker, head or principal according to school format',
  'Different report card formats for Pre-Primary, Primary and higher classes',
  'Term-I, Half-Yearly, Annual and other school-defined reporting formats',
  'Dynamic subject and assessment-component handling from configured examination schemes',
  'Generate print-ready report cards and bulk student PDFs from the connected ERP data',
];

const sections = [
  {
    icon: Palette,
    title: 'Design the report card around your school identity',
    text: 'A report card is also an official school document. EduBridge supports school-specific presentation so the report can reflect the institution logo, school name, address, contact information, session details, headings and other approved branding rather than forcing every school into one fixed design.',
  },
  {
    icon: Layers3,
    title: 'Control scholastic and co-scholastic presentation',
    text: 'Schools can present academic subjects, exam components, marks and grades separately from co-scholastic activities and skills. This supports different evaluation structures across classes while keeping the final report clear for students and parents.',
  },
  {
    icon: Settings2,
    title: 'Adapt fields, grades and sections without rebuilding the whole workflow',
    text: 'Report formats can include the student information and result sections a school actually needs, including attendance, remarks, grading scales, signatures and declaration details. The goal is to make routine format changes manageable while keeping marks and student data connected with the ERP.',
  },
  {
    icon: FileText,
    title: 'Generate consistent print-ready results at scale',
    text: 'Once the format and examination rules are configured, schools can generate report cards from centralized student and marks data instead of manually preparing separate documents. This helps maintain consistency across a class, section or larger result cycle.',
  },
];

const faqs = [
  { q: 'Can a school customize the report card format in EduBridge?', a: 'Yes. EduBridge supports school-specific report card formats, including branding, student information, academic and co-scholastic sections, grades, attendance, remarks, signatures and other supported layout elements.' },
  { q: 'Does EduBridge support visual report card editing?', a: 'EduBridge supports configurable visual report-card presentation so schools can adapt the final layout to their approved format instead of relying on a single rigid template.' },
  { q: 'Can different classes use different report card designs?', a: 'Yes. Schools may need different structures for Pre-Primary, Primary and senior classes. EduBridge can support class-appropriate report card formats and assessment structures.' },
  { q: 'Can Pre-Primary report cards use grades instead of marks?', a: 'Yes. Grade-oriented and descriptive formats can be used for appropriate classes and subjects, depending on the school examination setup.' },
  { q: 'Can scholastic and co-scholastic areas be shown separately?', a: 'Yes. Academic subjects and co-scholastic activities can be presented in separate sections so the report reflects both assessment types clearly.' },
  { q: 'Can grading scales be customized?', a: 'Yes. Schools can configure grading structures and display the relevant grading scale according to their approved result policy.' },
  { q: 'Can attendance and teacher remarks appear on the report card?', a: 'Yes. Supported report formats can include attendance, teacher remarks and other student profile or result information configured by the school.' },
  { q: 'Can the report card show school logo and contact details?', a: 'Yes. School identity information such as logo, name, address and supported contact details can be included in the report-card header.' },
  { q: 'Can report cards include signatures and declaration dates?', a: 'Yes. Formats can include designated signature areas and result declaration or result-date information as required by the school.' },
  { q: 'Can EduBridge generate report cards in bulk?', a: 'Yes. Because result data is connected with the ERP, authorized users can generate report cards for multiple students rather than creating each report manually.' },
  { q: 'Is custom report-card design connected with marks entry?', a: 'Yes. The report-card output can use marks, grades and examination components already configured and entered in the connected examination workflow.' },
  { q: 'Is this useful for CBSE and other school formats?', a: 'Yes. The flexible design is intended for institutions that need school-specific reporting structures, including CBSE-style and other configured academic formats.' },
];

export default function CustomReportCardDesignerSchool() {
  const pageUrl = `${base}${path}`;
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  };
  const softwareSchema = {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', '@id': `${base}/#software`,
    name: 'EduBridge ERP + LMS', url: base, applicationCategory: 'EducationalApplication', operatingSystem: 'Web, Android, iOS',
    description, featureList: features,
    provider: { '@type': 'Organization', name: 'EduBridge ERP', url: base },
  };
  const webPageSchema = {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${pageUrl}#webpage`, url: pageUrl, name: title, description,
    about: [{ '@type': 'Thing', name: 'Custom School Report Card Design' }, { '@type': 'Thing', name: 'Visual Report Card Editing' }], inLanguage: 'en-IN',
  };

  return (
    <div className="bg-white text-slate-800">
      <SEOHead title={title} description={description} path={path} keywords={[
        'custom report card designer school','visual report card editor school','custom school report card software','report card template software school','CBSE report card generator','school report card builder','dynamic report card software','custom report card ERP'
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_15%,#f97316_0,transparent_32%),radial-gradient(circle_at_85%_20%,#38bdf8_0,transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-orange-300"><Sparkles size={14}/> Custom Report Cards</div>
            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
              <div>
                <h1 className="max-w-5xl text-4xl font-black leading-[1.04] tracking-[-.04em] md:text-6xl">Custom Report Card Designer with Visual Editing for Schools</h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">Create school-specific report cards without being locked into one rigid format. Configure branding, student information, scholastic and co-scholastic sections, grades, attendance, remarks, signatures and print-ready output while keeping the design connected with live ERP examination data.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-black text-white hover:bg-orange-600">Request Report Card Demo <ArrowRight size={18}/></Link>
                  <Link href="/school-result-report-card-software" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-black text-white hover:bg-white/5">Explore Result Management</Link>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[.055] p-7 shadow-2xl backdrop-blur md:p-8">
                <div className="flex items-center gap-3 text-orange-300"><School size={20}/><span className="text-xs font-black uppercase tracking-[.16em]">School-specific design</span></div>
                <h2 className="mt-5 text-2xl font-black">One ERP. Different report-card formats.</h2>
                <p className="mt-3 leading-7 text-slate-300">Pre-Primary, Primary and higher classes can require very different result presentation. EduBridge is designed to support those differences without disconnecting the report from examination data.</p>
                <div className="mt-7 space-y-4">
                  {features.slice(0, 5).map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-200"><CheckCircle2 className="mt-1 shrink-0 text-orange-400" size={17}/><span>{item}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-4xl"><span className="brand-kicker">Visual report card customization</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Make the report card fit the school—not the other way around.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Schools often have approved formats, board expectations and class-specific presentation rules. EduBridge keeps those requirements connected with the same marks, grades, attendance and student records already maintained in the ERP.</p></div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {sections.map(({icon:Icon,title,text}) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600"><Icon size={22}/></span><h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl"><span className="brand-kicker">What can be customized</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">From school header to final signatures.</h2></div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {features.map((item,index) => <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">{String(index+1).padStart(2,'0')}</span><p className="font-bold leading-6 text-slate-800">{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div><span className="brand-kicker brand-kicker-dark">Connected examination workflow</span><h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">The design is only one part of result management.</h2><p className="mt-5 leading-7 text-slate-300">Connect report cards with exam scheduling, marks entry, grading, result preparation and examination workflows across the same EduBridge platform.</p></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['/school-exam-marks-entry-software','Marks Entry Software'],
                  ['/school-exam-scheduling-software','Exam Scheduling'],
                  ['/exam-seating-plan-software','Seating Plan Software'],
                  ['/exam-invigilation-management-software','Invigilation Management'],
                  ['/school-answer-script-management-software','Answer Script Management'],
                  ['/school-result-report-card-software','Result & Report Cards'],
                ].map(([href,label]) => <Link key={href} href={href} className="rounded-2xl border border-white/10 bg-white/[.055] p-5 font-black hover:bg-white/[.08] hover:text-orange-300">{label}</Link>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8"><div className="text-center"><span className="brand-kicker">FAQ</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Custom report card questions</h2></div><div className="mt-10 space-y-4">{faqs.map((item)=><div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"><h3 className="text-lg font-black text-slate-950">{item.q}</h3><p className="mt-3 leading-7 text-slate-600">{item.a}</p></div>)}</div></div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
