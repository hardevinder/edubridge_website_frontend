const videos = [
  {
    id: 'jX8am6fMDHk',
    title: 'AI-Assisted Assessment & Answer Evaluation',
    description:
      'Create assessments, generate questions with AI, scan handwritten answer sheets, review question-wise AI-assisted evaluation, publish marks and give students detailed feedback.',
    href: '/ai-assessment-evaluation-school',
  },
  {
    id: 'JGlX1PpvmOI',
    title: 'AI-Powered Exam Seating & Invigilator Allocation',
    description:
      'Build examination seating plans with room allocation, separation rules, conflict checks, invigilator workflows, printable layouts and publish-ready exam operations.',
    href: '/exam-seating-plan-software',
  },
  {
    id: '3VY6eYMfHro',
    title: 'AI-Powered Entrance & Admission Assessments',
    description:
      'Create school entrance assessments faster with class, subject, syllabus, marks, instructions and AI-assisted question generation inside the admission workflow.',
    href: '/ai-entrance-exam-software',
  },
];

export default function AIVideoShowcase({ compact = false }) {
  return (
    <section className={compact ? 'py-12' : 'bg-slate-50 py-16 md:py-24'}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <span className="brand-kicker">See EduBridge AI in action</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Real workflows, not just an “AI-powered” label.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Watch practical EduBridge ERP + LMS workflows for assessments, handwritten answer evaluation, examination seating and entrance assessments.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {videos.map((video) => (
            <article key={video.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video bg-slate-950">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-slate-950">{video.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{video.description}</p>
                <a href={video.href} className="mt-5 inline-flex font-black text-orange-600 hover:text-orange-700">
                  Explore this workflow →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
