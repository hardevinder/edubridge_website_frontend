export const roleCategories = [
  { id: 'leadership', label: 'Leadership & Governance' },
  { id: 'academic', label: 'Academics & Examination' },
  { id: 'operations', label: 'Administration & Operations' },
  { id: 'community', label: 'Students, Parents & Staff' },
];

const r = (slug, title, category, eyebrow, summary, features, outcomes, modules, mobile, spotlight) => ({
  slug, title, category, eyebrow, summary, features, outcomes, modules, mobile, spotlight,
});

export const roles = [
  r('management','Management / Director','leadership','Institution-wide visibility','A connected view across academics, examinations, finance, people, transport and campus operations — built for faster reviews and informed decisions.',
    ['Institution Command Center and cross-functional KPIs','Teacher Performance Intelligence with AI-assisted insight','Student 360° for complete learner context','Unified Actions & Approvals inbox','Department and HOD performance visibility','Fee, collection and outstanding reports','Examination progress, seating and answer-script visibility','Live transport and campus operational visibility','Leadership, house, health and student-development insights','Management reports, exports and audit-ready records'],
    ['See institution priorities without collecting manual updates','Drill from a signal into the responsible workflow','Keep leadership, departments and operations connected'],
    ['institution-command-center','teacher-performance','student-360','action-inbox','department-hod','fee-reports','exam-management','live-bus-tracking'],
    'Responsive web dashboards with role-aware mobile actions where applicable.', true),

  r('principal','Principal','leadership','School / campus command center','A principal workspace for academic quality, approvals, student development, examinations, transport, inventory and institutional follow-up.',
    ['School Command Center','Ask School AI','My Actions & Approvals','Parent Consent & Acknowledgement','Academic Calendar and Circulars','Students and Student 360°','Student Leadership Council','Staff Leadership & Responsibilities','House Duty, Assembly & Co-Curricular','Teacher Performance Intelligence','Department Management and HOD oversight','Document Vault','Anecdotal Records and Recognition','Student Health & Growth','Daily Readiness & Hygiene','Disciplinary Actions and Lost & Found','Assessments, Online Classes and PTM monitoring','Syllabus progress and approval','Examination dashboard, schedules, seating and answer scripts','Live Bus Tracking and Transport Dashboard','Inventory Dashboard, items and stock reports'],
    ['One leadership workspace instead of separate registers','Quicker approvals and academic follow-up','Direct visibility into both learning and operations'],
    ['institution-command-center','ai-assistant','action-inbox','teacher-performance','department-hod','student-health','exam-seating','answer-scripts'],
    'Leadership-first responsive web experience; connected approval and monitoring flows also surface through supported mobile roles.', true),

  r('admin','Super Admin / Admin','leadership','ERP governance & configuration','Control institution masters, users, sessions, permissions and operational settings while retaining visibility across the complete ERP.',
    ['School / institution setup','Academic years and sessions','Classes, sections and subjects','User management and multi-role access','Role permissions and login/session controls','Student and employee account creation','Academic and examination masters','Fee and payment configuration','Transport, inventory and library oversight','AI settings and integrations','Reports, exports and system-wide administration'],
    ['Standardize institution-wide configuration','Keep access controlled by role and permission','Reduce duplicate setup across departments'],
    ['multi-role-access-control','student-information-system','exam-management','fee-management','transport-management','inventory','library','ai-assistant'],
    'Responsive administration portal; mobile role support is available for selected operational workflows.'),

  r('coordinator','Academic Coordinator','academic','Academic operations & approvals','Coordinate timetables, syllabus, diary, assessments, academic calendars and teacher workflows while keeping classroom execution visible.',
    ['Academic Coordinator dashboard','Timetable, teacher workload and availability','Teacher substitutions','Academic Calendar','Digital Diary monitoring','Syllabus teacher assignment','Syllabus breakup review and approval','Lesson Plan monitoring','Assessments & Tests','Online Classes','PTM Management','Attendance oversight','Circulars and communication','Department collaboration','Unified Actions & Approvals'],
    ['Keep academic plans on schedule','Identify pending teacher work early','Coordinate classes, teachers and approvals from one workflow'],
    ['timetable','teacher-substitution','syllabus-monitoring','lesson-plans','digital-diary','smart-assessments','ptm','action-inbox'],
    'Role-based coordinator workflows are supported on mobile alongside the web ERP.', true),

  r('hod','Department HOD','academic','Complete department management','Give every HOD a complete operational workspace for academics, team ownership, tasks, events, inventory, achievements and annual reporting.',
    ['My Department Work dashboard: pending tasks, active duties, issued items and upcoming events','Department overview: members, mapped subjects, pending/overdue tasks, events, achievements and inventory','Team & Subject mapping for departmental ownership','Assign and track department tasks with acknowledgement and completion status','Department events, competitions and activity planning','Teacher/event duties with acknowledgement and completion','Student participants, results and achievement records','Coordinator review with approved events flowing into the Academic Calendar','Department achievements with verify/publish workflow','Publish approved achievements/events to student and website experiences','Department inventory locations and item masters','Receive stock, issue stock, request return and confirm return','Teacher-wise academic monitoring across lesson plans, completion, syllabus breakups and diary activity','Approved syllabus-breakup visibility and recent lesson-plan / diary review','One-Minute Annual Report with events, achievements, student participation, teacher duties, inventory and completed work','My Actions, documents, professional growth and leadership/responsibility context'],
    ['Make departments accountable without losing principal visibility','Turn HOD review into measurable academic and operational follow-up','Build annual department documentation automatically from day-to-day work'],
    ['department-hod','department-inventory','syllabus-monitoring','lesson-plans','digital-diary','academic-calendar','staff-leadership','teacher-performance'],
    'Department HOD is an explicitly supported mobile role, with role-aware access alongside the complete web workspace.', true),

  r('examination','Examination Department','academic','End-to-end examination control','Run the complete examination lifecycle — structure, schedules, seating, invigilation, answer scripts, marks, results and report cards — from one connected department workspace.',
    ['Dedicated Examination Dashboard','Subjects and exam masters','Exam creation, edit, controls and locking','Terms and Assessment Components','Exam Schemes and Combined Schemes','Grade Schemes','Exam Schedule creation and publication','Bulk schedules and generate-from-scheme workflow','Excel import/export and bulk date/time updates','Student My Date Sheet','Exam room and capacity management','Student selection and automatic seat allocation','Manual seat adjustments','Invigilator assignment and duty acknowledgement','Room-wise exam attendance','Publish/unpublish seating plans','Seating dashboard, audit logs, print data and PDFs','Answer-script room collections','Expected vs received script reconciliation','Room handover and receipt','Automatic evaluator bundle creation','Evaluator assignment, accept/decline and checking progress','Return and receive-return workflows','Bundle finalization and archival','Recheck requests and action tracking','Answer-script audit and PDF registers','Roll Number Management','Marks Entry by component / subject','Teacher marks-access scopes and tracking','Excel import/export and PDF exports for marks','Co-Scholastic Areas, Grades and Class Mapping','Co-Scholastic Entry and evaluation locks','Class Result and Final Result Summary','Student Remarks Entry','Report Card Formats and class assignment','Report Card generation and printing','Examination Expenses','Circulars, chat and Academic Calendar access'],
    ['Remove disconnected exam spreadsheets and paper handovers','Track accountability from room allocation to checked scripts','Produce structured results and report cards from the same exam data'],
    ['exam-management','assessment-components','exam-date-sheet','exam-seating','invigilation','answer-scripts','roll-number-management','marks-management','marks-access-tracking','co-scholastic','results-report-cards','report-card-designer'],
    'Examination is an explicitly supported mobile role. Invigilators can view duties, open room rosters, acknowledge duty and mark exam attendance from mobile.', true),

  r('teacher','Teacher','academic','Daily teaching workspace','A connected teacher workspace for attendance, planning, diary, assessments, examinations, communication and professional responsibilities.',
    ['Teacher dashboard and My Actions','Mark Attendance and attendance calendar','PTM feedback','Assignments and assignment marking','Teacher timetable and substitutions','Lesson Plans','Syllabus-related academic work','Digital Diary','Online Classes','Smart Assessments & Tests','Marks Entry and result visibility','Co-Scholastic Entry and Student Remarks','Report Card workflows','Anecdotal Records','Daily Readiness','Department Management when assigned','My Documents','My Professional Growth','Leadership / House Duties','Leave, attendance and payslips','Chat, Circulars and My Visitors'],
    ['Reduce repeated data entry','Keep daily academic work connected to student records','Give teachers one consistent web and mobile experience'],
    ['attendance-management','lesson-plans','digital-diary','assignments','smart-assessments','marks-management','teacher-performance','secure-chat'],
    'Dedicated teacher mobile workflows plus the full responsive web ERP.', true),

  r('student-parent','Student / Parent','community','Connected learner & parent experience','Give students and families one place for academics, communication, fees, transport and personal institutional records.',
    ['Attendance and history','Assignments & Submissions','Digital Diary','Circulars and Notifications','Timetable','Online Classes','Tests & Results','Fees and online payments','My Library','Activities & Achievements','My Documents','My Daily Readiness','Growth & Recognition / Anecdotal context','Student Health & Growth view','My Exam Date Sheet and seat information','Answer Script Status','Parent Consent responses','Live Bus Tracking','Secure Chat'],
    ['Improve parent visibility without repeated calls','Put current academic and operational information in one app','Keep communication tied to the institution record'],
    ['student-360','attendance-management','assignments','digital-diary','results-report-cards','online-fee-payments','live-bus-tracking','secure-chat'],
    'Dedicated student/parent mobile experience with institution branding support on iOS and Android.', true),

  r('accounts','Accounts','operations','Fees, collection & finance controls','A focused accounts workspace for collection, structures, concessions, payment gateways, dues, reports and financial administration.',
    ['Accounts Dashboard','Collect Fee and receipt workflows','Day Collection and Session Summary','Fee Due and student fee history','Fee Head Collection','Fee Structure and Student Fee Structure','Fee Headings and Categories','Concessions and Bulk Concessions','Opening Balances','Cancelled Receipts and restoration controls','Concession Report','Transport Fee','Payment Gateway Setup','HDFC SmartGateway / PayU connected workflows','School Bank Accounts','Expense Management','Messages and fee reminders','Excel/PDF finance reporting'],
    ['Speed up the fee counter','Keep online and offline collection connected','Give management clear collection and dues visibility'],
    ['fee-management','online-fee-payments','fee-reports','opening-balances','expense-management','school-bank-accounts','whatsapp-integration'],
    'Accounts is an explicitly supported mobile role with collection, dues, reports and setup access.', true),

  r('hr','HR','operations','People operations & payroll','Manage employee records, attendance, leave, payroll, responsibilities and staff administration through one HR workspace.',
    ['HR Dashboard','Employee Management and directory','Employee Login Accounts','Departments','Leave Types','Employee Leave Balances','Employee Leave Requests','Review Leave Requests','Employee Attendance','My Attendance Calendar','Attendance summaries and monthly register','Payroll runs and salary structures','My Payslips','Employee Transport Assignments','Staff Leadership & Responsibilities','House Duty & Activities','Academic Calendar / Teaching Days','Document Vault'],
    ['Create a reliable employee master','Connect attendance, leave and payroll context','Make staff responsibilities visible beyond job titles'],
    ['employee-management','employee-attendance','leave-management','payroll','staff-leadership','document-vault'],
    'HR is an explicitly supported mobile role alongside web-based administration.', true),

  r('transport','Transport Manager','operations','Transport command & safety','Operate routes, buses, staff, student assignments, attendance, live tracking, fees and transport reporting from one workspace.',
    ['Transport Dashboard','Routes, buses and stops','Operational route plans and maps','Student Transport Assignments','Employee Transport Assignments','Driver / conductor staff management','Trip status and live bus tracking','Pickup / Drop transport attendance','Bus-wise and school-wide attendance summary','Transport fees and per-student overrides','Transport expense tracking','Transport Summary and reports','Driver credentials and role access'],
    ['Improve daily route control','Connect live operations with student assignments','Give families and management better transport visibility'],
    ['transport-management','live-bus-tracking','transport-attendance','transport-staff','transport-expenses'],
    'Transport is an explicitly supported mobile role, designed to work with driver mobile trip flows.', true),

  r('driver','Driver','operations','Trip & student safety workflow','A focused mobile-first workflow for assigned routes, trip status, GPS and pickup/drop attendance.',
    ['Assigned routes / buses','Start active trip','Live location publishing during active trip','Pickup / Drop student list','Bulk transport attendance','Bus summary','End trip','Trip history and accountability'],
    ['Keep the driver workflow simple','Publish transport status to authorized users','Connect attendance with the actual vehicle and trip'],
    ['live-bus-tracking','transport-attendance','transport-management','transport-staff'],
    'Dedicated Driver mobile role; designed primarily for mobile operation during trips.', true),

  r('front-office','Front Office','operations','Visitor, enquiry & campus entry desk','Handle enquiries and day-to-day campus entry workflows from a structured front-office dashboard.',
    ['Front Office Dashboard','Enquiries and follow-ups','Visitor Check-In','ID proof / extraction workflow','Host selection and response','Meeting start/end','Visitor Check-Out','QR visitor token','Gate Pass creation','QR verification and OUT/IN movement','My Visitors for staff hosts','Registrations and admission handoff'],
    ['Professionalize the reception desk','Improve campus entry auditability','Connect enquiries to the admission pipeline'],
    ['admission-crm','visitor-management','gate-pass','registrations'],
    'Front Office is an explicitly supported mobile role in addition to responsive web workflows.', true),

  r('admission','Admissions Team','operations','Enquiry-to-enrolment pipeline','Manage admission types, enquiries, registrations, entrance assessments and student conversion without re-entering the same applicant data.',
    ['Admission Types','Public Enquiry capture','Enquiry follow-ups and status','Registrations and registration numbers','Printable registration forms','Fee / registration status','Bulk or individual conversion into Student Information System','Admission Syllabus setup','Admission Syllabus assignee','Entrance Assessment portal','Applicant login creation','AI-assisted entrance question generation','Assessment results and analytics'],
    ['Reduce lead leakage','Standardize admission testing','Carry applicant data forward into the student master'],
    ['admission-crm','registrations','admission-syllabus','entrance-assessment','student-information-system'],
    'Responsive web admission workspace with connected applicant-facing digital flows.'),

  r('inventory','Inventory / Store / Lab','operations','Stock & asset movement control','Control stock across central stores, labs and departmental locations with transaction-level traceability.',
    ['Inventory Dashboard and KPIs','Categories and Item masters','Locations','Opening Stock','Receive Stock','Issue Stock','Transfer Stock','Adjust Stock','Inventory Transactions','Stock Reports','Department Inventory','Returnable-item workflows','Role-specific Inventory Admin, Store Incharge and Lab Incharge access'],
    ['Know current stock by location','Create an audit trail for every stock movement','Decentralize issue/return without losing central control'],
    ['inventory','department-inventory','document-vault'],
    'Responsive web inventory workspaces; selected staff access can be permission-scoped.'),

  r('library','Library / Librarian','operations','Digital circulation & catalogue','Manage books, copies, borrowers, circulation and member history while giving students and teachers a personal library view.',
    ['Library Dashboard','Book catalogue','Copy / accession stock','Borrower search','Book search','Issue','Return','Mark Lost','Issue History','My Library for student and teacher','Library settings and role access'],
    ['Speed up issue/return','Keep copy-level circulation history','Give members direct visibility into their library account'],
    ['library','student-information-system','employee-management'],
    'Responsive librarian portal plus My Library access for supported student/teacher mobile experiences.'),

  r('health-staff','Health Staff / Doctor / Nurse','community','Student wellness records','Maintain authorized health, growth and screening records with verification, trends and student health-card visibility.',
    ['Student Health & Growth dashboard','Health profiles','Measurements','Screenings','Growth trends','Verification workflow','Bulk measurement support','Student health card PDF','Authorized student/parent health view'],
    ['Keep wellness records structured','Track growth over time','Support documented follow-up'],
    ['student-health','student-360','document-vault'],
    'Responsive health workspace with authorized learner-facing views.'),

  r('security','Security / Gate Operations','operations','Controlled campus movement','Support verified visitor and gate movement using digital records, QR checks and clear entry/exit status.',
    ['Visitor verification context','Gate Pass lookup','QR verification','Student/staff OUT and IN movement','Visitor check-out support','Cancelled pass handling','Printable / auditable records'],
    ['Reduce handwritten gate registers','Improve movement traceability','Keep front office and security synchronized'],
    ['visitor-management','gate-pass','student-information-system'],
    'Mobile-friendly verification screens suitable for gate operations.'),
];

export const roleMap = Object.fromEntries(roles.map((role) => [role.slug, role]));
