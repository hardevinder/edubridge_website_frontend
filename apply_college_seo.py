#!/usr/bin/env python3
"""Targeted, idempotent EduBridge college SEO patch. Preserves existing transport SEO changes."""
from pathlib import Path
import re, sys, shutil, datetime
root=Path(__file__).resolve().parent if (Path(__file__).resolve().parent/'data/seoLandingPages.js').exists() else Path.cwd()
data=root/'data/seoLandingPages.js'
component=root/'components/SearchLandingPage.jsx'
sitemap=root/'public/sitemap.xml'
for f in [data,component,sitemap]:
    if not f.exists(): raise SystemExit(f'Missing {f}; run from ~/edubridge-website')
backup=root/('.college-seo-backup-'+datetime.datetime.now().strftime('%Y%m%d-%H%M%S'))
backup.mkdir()
for f in [data,component,sitemap]:
    t=backup/f.relative_to(root);t.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(f,t)
college="""  'college-management-software': {
    path: '/college-management-software',
    eyebrow: 'AI-Powered College ERP + LMS',
    title: 'Best College ERP & LMS Software with AI | EduBridge ERP',
    h1: 'Intelligent AI-Powered College ERP + LMS Software for Colleges and Institutions',
    description: 'Explore EduBridge college ERP + LMS software: lecture attendance, assignments, online classes, AI assessments, fees, exams, progress reports and multi-campus management.',
    intro: 'Looking for the best college ERP software with an integrated learning management system? EduBridge connects college administration, faculty teaching, student learning and campus services in one configurable platform. Deliver assignments and online classes, record attendance for each lecture, manage semester examinations and fee collection, and give students progress visibility. AI assists educators with lesson planning, questions and assessment evaluation under human review.',
    audience: 'Degree colleges, professional and technical institutes, inter colleges, higher education institutions and college groups evaluating one connected ERP + LMS platform in India.',
    highlights: [
      'Lecture-wise and subject-wise student attendance with faculty and student access',
      'LMS assignments: publish tasks, share study materials, collect student submissions and review work',
      'Online classes and Zoom-linked teaching with timetables and learning resources',
      'Online tests, question generation, smart assessments and AI-assisted evaluation with teacher review',
      'Semester, course, department and subject management with HOD and faculty dashboards',
      'Student performance and progress reports across attendance, learning and examination results',
      'Fee structures, online and offline fee collection, student dues and payment reporting',
      'Examinations, marks, results, seating plans, answer scripts and invigilation workflows',
      'GPS-enabled college transport, routes, attendance, notifications and transport fee workflows',
      'Admissions, HR, payroll, inventory, library, hostel, placement and alumni workflows',
      'Institution-specific Android and iOS apps with role-based faculty, student and administrative access',
      'Multi-branch and group-of-colleges management with controlled campus and department access',
    ],
    collegeSections: [
      {title:'College LMS, digital assignments and online classes',text:'Faculty can share course resources, publish assignments, accept submissions and connect live online classes with everyday academic workflows.',bullets:['Assignments and teacher feedback','Study material and lecture resources','Zoom-linked online classes','Student learning dashboard']},
      {title:'Lecture-wise attendance and student progress',text:'Record attendance by lecture and subject, connect attendance records with student and faculty views, and understand academic progress without separate registers.',bullets:['Lecture-wise attendance','Subject and faculty tracking','Student progress reports','Academic oversight dashboards']},
      {title:'Exams, tests and practical AI assistance',text:'Manage tests, semester examinations and academic evaluation. AI can assist with lesson plans, question generation and reviewable assessment workflows.',bullets:['Online tests and assessments','Semester marks and results','AI-assisted question creation','Teacher-reviewed evaluation']},
      {title:'Finance, transport and campus administration',text:'Run collections, monitor fee dues, manage campus transport and serve administrators and HODs from consistent role-based workflows.',bullets:['Online/offline fee payments','Pending-dues monitoring','College transport management','Department and campus access']},
    ],
    relatedSlugs: ['college-erp-lms-software','group-of-colleges-management-software','college-lecture-attendance-software','college-management-software'],
    keywords: ['best college ERP software','college ERP software India','AI powered college ERP','college ERP LMS','college management software','college learning management system','higher education ERP software','college online classes software','college fee management software','college student progress report software'],
    faqs: [
      {q:'What is the best college ERP and LMS software for institutions in India?',a:'Choose software that fits your academic processes and combines admissions, lecture-wise attendance, learning, assignments, examinations, fees and reporting. EduBridge is one option designed to combine college ERP, LMS and AI-assisted teaching workflows.'},
      {q:'Can faculty assign work to students and collect submissions online?',a:'Yes. EduBridge LMS supports sharing assignments and resources, student submissions and teacher review in connected academic workflows.'},
      {q:'Does EduBridge support lecture-wise and subject-wise attendance?',a:'Yes. Faculty can manage attendance at lecture and subject level, with role-based academic visibility.'},
      {q:'Can colleges conduct online classes and online tests?',a:'EduBridge supports Zoom-linked online classes, learning resources, assessments and online test workflows.'},
      {q:'Can colleges collect fees online and offline?',a:'Yes. EduBridge supports college fee collection, payment records, dues and related reporting according to the institution setup.'},
      {q:'Does the college software provide student progress reports?',a:'Student academic visibility can bring together attendance, assessments and examination outcomes through configurable dashboards and reports.'},
      {q:'Is EduBridge AI-powered college management software?',a:'EduBridge offers AI-assisted lesson planning, question and assessment creation, and evaluation support. Educators review important academic outputs; AI does not replace faculty judgement.'},
      {q:'Can one system serve a college and a group of colleges?',a:'The platform supports configurable branches, institutions, departments and permission-based views. Specific group-wide reporting needs should be confirmed during implementation.'},
      {q:'Does EduBridge provide college transport and GPS tracking?',a:'Transport workflows cover routes, stops, buses, tracking, pickup/drop attendance and related fee administration. See the dedicated transport page for full details.'},
      {q:'Does the ERP include placement, hostel, alumni and NAAC workflows?',a:'These areas are covered as configurable institutional workflows. Ask for a demonstration of the specific modules and implementation scope you require.'},
    ],
    videos: ['jX8am6fMDHk'],
  },
  'college-erp-lms-software': {
    path:'/college-erp-lms-software', eyebrow:'College ERP + Learning Management System',
    title:'College ERP & LMS Software | AI Learning Platform | EduBridge',
    h1:'One College ERP and LMS for Assignments, Online Classes, Tests and Student Progress',
    description:'College ERP + LMS for digital assignments, study materials, live online classes, lecture attendance, online tests, AI-assisted assessments and progress reporting.',
    intro:'EduBridge brings college ERP and the learning management system together so faculty do not need disconnected platforms for student records, teaching, homework, online classes and assessment. Courses, departments and subjects can connect with student submissions, attendance, marks and academic follow-up.',
    audience:'Colleges, teaching departments and institutes searching for a college LMS integrated with administration and student information.',
    highlights:['Course and subject-linked study material and learning resources','Assignments to students with submissions and faculty review','Online classes with Zoom-linked scheduling and learning support','Online tests, quizzes and assessment workflows','Lecture and faculty attendance connected to student profiles','AI-assisted lesson plans, worksheets, question generation and evaluation','Performance tracking and student progress visibility','Semester examination and marks workflows','Faculty, HOD and student portals and mobile-friendly access','Fees and college operations integrated into the ERP'],
    collegeSections:[{title:'From coursework to progress',text:'Connect teaching materials, student work, attendance and evaluation within the same course context.',bullets:['Publish assignments','Collect submissions','Run online classes','Track academic progress']},{title:'AI assistance with academic control',text:'AI supports planning and assessments; teachers remain responsible for reviewing results and publication.',bullets:['Lesson-plan assistance','Assessment drafting','Question generation','Reviewed evaluation']}],
    relatedSlugs:['college-management-software','college-lecture-attendance-software','group-of-colleges-management-software'],
    keywords:['college LMS software','college ERP LMS software','learning management system for colleges','college online class software','college assignment management system','AI powered college LMS','college online test software'],
    faqs:[{q:'What is the difference between college ERP and LMS?',a:'ERP covers institutional operations such as admissions, fees, examinations and administration. An LMS supports teaching, course materials, assignments, online classes and tests. EduBridge connects both.'},{q:'Can a college use a combined ERP and LMS?',a:'Yes. A connected platform lets colleges reduce duplicate student and course data while linking learning and administration.'},{q:'Can students submit assignments online?',a:'Yes. Assignment workflows support student submissions and faculty review.'},{q:'Does the LMS support AI evaluation?',a:'EduBridge offers AI-assisted assessment workflows with teacher review and control over outcomes.'}], videos:['jX8am6fMDHk'],
  },
  'group-of-colleges-management-software': {
    path:'/group-of-colleges-management-software', eyebrow:'Group of Colleges ERP',
    title:'Group of Colleges ERP & LMS | Multi-Campus Software | EduBridge',
    h1:'ERP + LMS Software for Groups of Colleges and Multi-Campus Institutions',
    description:'Manage multiple colleges, branches and departments with connected ERP + LMS, role-based controls, admissions, fees, attendance, exams and college dashboards.',
    intro:'A group of colleges needs consistent operations without losing the flexibility of individual campuses. EduBridge supports configurable institution and branch structures, departments, roles and academic workflows so authorized teams can work within their campus while management can obtain appropriate visibility across the organization.',
    audience:'Education groups, societies and trusts operating multiple colleges, colleges with several branches and growing higher-education institutions.',
    highlights:['Multiple college and branch structures with permission-based access','Separate academic departments, courses, subjects and faculty assignments','HOD, principal, institution administrator and group management roles','Campus-specific admissions, student and staff records','Lecture attendance, courses, LMS assignments and online classes','College-wise fees, payment records and pending dues','Semester examinations, results and academic reporting','Transport, hostels, library, placement and alumni workflows','Branded college student and staff mobile experiences','AI-assisted academic planning and assessments with human review'],
    collegeSections:[{title:'Campus autonomy and central oversight',text:'Configure roles, branch assignments and departmental responsibility while keeping management access controlled.',bullets:['Branch-specific roles','Department assignments','Institution dashboards','Academic process consistency']},{title:'Teaching and administration together',text:'Serve each college with ERP operations and faculty/student learning tools.',bullets:['LMS and assignments','Lecture-wise attendance','Fee tracking','Examination workflows']}],
    relatedSlugs:['college-management-software','college-erp-lms-software','college-lecture-attendance-software'],
    keywords:['group of colleges ERP software','multi campus college ERP','multi college management software','institution management system','college group management software','multi branch college ERP LMS','education group ERP'],
    faqs:[{q:'Can EduBridge manage more than one college?',a:'EduBridge supports multiple branches and configurable institutional structures. A demonstration can establish the campus-level permissions and reporting needed for your group.'},{q:'Can each college have its own departments and users?',a:'Yes. Institution, department and role setups can be configured for authorized staff and faculty.'},{q:'Can college groups use a shared LMS?',a:'The college ERP and LMS work in the same ecosystem while course, branch and user permissions are configurable.'},{q:'Can management view data for the whole group?',a:'Management visibility depends on the roles and institution structure configured during implementation; specific consolidated reports can be reviewed in a demo.'}], videos:[],
  },
  'college-lecture-attendance-software': {
    path:'/college-lecture-attendance-software', eyebrow:'Lecture-Wise College Attendance',
    title:'College Lecture Attendance Software & Student Progress | EduBridge',
    h1:'Lecture-Wise Attendance Management Software for Colleges and Institutions',
    description:'College lecture attendance software for faculty, subjects, courses and students. Track lecture-wise presence alongside assignments, examinations and progress reports.',
    intro:'College attendance needs a lecture-level academic context, not just daily present or absent status. EduBridge supports faculty-led lecture-wise attendance with subject and student visibility, helping institutions follow class participation alongside other academic records, assignments and results.',
    audience:'Colleges and institutes managing faculty-led lectures, subject-wise attendance and student academic follow-up.',
    highlights:['Lecture-wise student attendance marking','Subject, class and faculty academic context','Attendance visibility for relevant users','Student attendance monitoring and reporting','Connected timetable and course structures','Attendance alongside LMS assignments and assessments','Academic dashboards and student progress visibility','Role-based faculty, HOD and administrator access'],
    collegeSections:[{title:'Attendance as part of academic management',text:'Track lecture-level attendance in context of the taught subject, faculty and student academic journey.',bullets:['Lecture attendance','Student profiles','Subject-linked tracking','Progress visibility']}],
    relatedSlugs:['college-management-software','college-erp-lms-software','group-of-colleges-management-software'],
    keywords:['college lecture attendance software','lecture wise attendance management system','college attendance management system','subject wise attendance college','college student progress report software','faculty lecture attendance software'],
    faqs:[{q:'What is lecture-wise attendance in college ERP?',a:'Lecture-wise attendance records student presence for individual teaching sessions rather than recording only a single daily status.'},{q:'Can lecturers mark subject-wise student attendance?',a:'EduBridge supports lecture and subject-context attendance workflows for the authorized faculty.'},{q:'Can attendance be connected to student performance?',a:'Attendance can be viewed with other academic information using role-based reporting and progress views.'}], videos:[],
  },
"""
s=data.read_text()
start=s.find("  'college-management-software': {")
if start<0:raise SystemExit('Cannot locate original college landing page')
end=s.find("  'ai-school-management-software': {",start)
if end<0:raise SystemExit('Unexpected college page location; stopped safely')
s=s[:start]+college+s[end:]
data.write_text(s)
c=component.read_text()
c=c.replace("const linkedPages = Object.values(seoLandingPages)\n    .filter((item) => item.path !== data.path)\n    .slice(0, 5);", "const linkedPages = data.relatedSlugs?.length\n    ? data.relatedSlugs.map((slug) => seoLandingPages[slug]).filter((item) => item && item.path !== data.path)\n    : Object.values(seoLandingPages).filter((item) => item.path !== data.path).slice(0, 5);")
needle='        {data.transportSections?.length > 0 && ('
if needle not in c:raise SystemExit('College section insertion point missing')
block="""        {data.collegeSections?.length > 0 && (
          <section className=\"py-16 md:py-24\" aria-label=\"College ERP and LMS workflows\">
            <div className=\"mx-auto max-w-7xl px-5 md:px-8\">
              <div className=\"max-w-3xl\"><span className=\"brand-kicker\">College workflows in detail</span><h2 className=\"mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl\">Built around how colleges teach, manage and grow.</h2></div>
              <div className=\"mt-10 grid gap-6 md:grid-cols-2\">
                {data.collegeSections.map((section) => <article key={section.title} className=\"rounded-3xl border border-slate-200 bg-white p-7 shadow-sm\"><h3 className=\"text-xl font-black text-slate-950\">{section.title}</h3><p className=\"mt-3 leading-7 text-slate-600\">{section.text}</p><ul className=\"mt-5 space-y-3\">{section.bullets.map((item) => <li key={item} className=\"flex gap-2 font-semibold text-slate-700\"><CheckCircle2 size={17} className=\"mt-1 shrink-0 text-orange-500\" />{item}</li>)}</ul></article>)}
              </div>
              <p className=\"mt-8 text-sm leading-7 text-slate-600\">Looking for a walkthrough tailored to your college, university department or education group? <Link href=\"/contact\" className=\"font-bold text-orange-700 underline\">Request a college ERP + LMS demonstration</Link>.</p>
            </div>
          </section>
        )}

"""
if 'data.collegeSections?.length' not in c:c=c.replace(needle,block+needle)
c=c.replace('Explore focused pages for Indian schools, Punjab institutions, boards and AI-enabled workflows.','Explore related modules and solutions for schools, colleges, institution groups and AI-assisted workflows.')
component.write_text(c)
sm=sitemap.read_text()
paths=['college-erp-lms-software','group-of-colleges-management-software','college-lecture-attendance-software']
for slug in paths:
    if f'/{slug}</loc>' not in sm:
        sm=sm.replace('</urlset>',f'  <url><loc>https://www.edubridgeerp.in/{slug}</loc><changefreq>monthly</changefreq><priority>0.86</priority></url>\n</urlset>')
sitemap.write_text(sm)
for slug in paths:
    page=root/'pages'/f'{slug}.jsx'
    page.write_text("import SearchLandingPage from '../components/SearchLandingPage';\nimport { seoLandingPages } from '../data/seoLandingPages';\n\nexport default function Page() { return <SearchLandingPage data={seoLandingPages['"+slug+"']} />; }\n")
print('College SEO applied; existing transport SEO and other landing pages preserved.')
print('Backup:',backup)
print('Pages: /college-management-software and '+', '.join('/'+x for x in paths))
