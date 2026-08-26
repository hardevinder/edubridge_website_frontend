export const categoryExperience = {
  platform: {
    label: 'Leadership, governance & control',
    intro: 'Designed to connect decision-making with the underlying academic and operational records, not isolated dashboard numbers.',
    controls: ['Role and permission-aware access','Cross-module drill-down into source records','Approval and accountability context','Exportable / review-ready information'],
    experience: ['Responsive leadership and staff web workspaces','Connected actions surface to supported mobile roles','Shared institution masters reduce duplicate data'],
  },
  academics: {
    label: 'Teaching & learning execution',
    intro: 'Keeps planning, delivery, monitoring and learner-facing updates connected to classes, subjects, teachers and academic sessions.',
    controls: ['Class / section / subject scoping','Teacher and coordinator role controls','Session-aware academic records','Student-facing publication where applicable'],
    experience: ['Teacher and coordinator web workflows','Student / teacher mobile access where supported','Connected timetable, diary, syllabus and assessment context'],
  },
  exams: {
    label: 'Examination lifecycle',
    intro: 'Built for traceability from exam configuration through result publication, with department, teacher, invigilator and student responsibilities clearly separated.',
    controls: ['Examination-department role control','Class / subject / component scoping','Publish, lock and audit-style workflows where supported','PDF / Excel outputs across operational exam stages'],
    experience: ['Responsive Examination Department workspace','Mobile invigilator and supported examination-role flows','Student-facing date sheet, seat and result context where applicable'],
  },
  students: {
    label: 'Student experience & development',
    intro: 'Extends the student record beyond basic profile data into wellbeing, participation, recognition and day-to-day engagement.',
    controls: ['Authorized staff access','Student-specific history','Session and class context','Parent / student visibility where appropriate'],
    experience: ['Responsive staff administration','Student / parent mobile views where supported','Connected Student 360° context'],
  },
  admissions: {
    label: 'Admission & front-office workflow',
    intro: 'Moves prospective-student and campus-entry work from disconnected forms into structured, searchable workflows.',
    controls: ['Status-driven workflows','Front-office / admission role access','Applicant or visitor record history','Controlled conversion or handoff into core ERP records'],
    experience: ['Responsive front-office screens','Applicant / visitor-facing digital touchpoints where applicable','Connected student and communication data'],
  },
  finance: {
    label: 'Finance operations & visibility',
    intro: 'Keeps fee structures, collection, dues, concessions and payment activity tied directly to the student ledger and institution reporting.',
    controls: ['Accounts role access','Student / session / fee-head scoping','Cancellation and correction controls where supported','Exportable finance reports'],
    experience: ['Accounts web dashboard','Accounts mobile role support for key workflows','Student / parent payment visibility where applicable'],
  },
  hr: {
    label: 'People operations',
    intro: 'Connects employee master data with attendance, leave, payroll and institutional responsibilities.',
    controls: ['HR and management access','Employee-specific history','Approval workflows','PDF / register outputs where applicable'],
    experience: ['Responsive HR administration','HR mobile role support','Employee self-service views for selected records'],
  },
  transport: {
    label: 'Transport operations & safety',
    intro: 'Connects routes, vehicles, assigned students, staff, attendance, trip state and location into one operational model.',
    controls: ['Transport and driver role separation','Bus / route / student assignment context','Trip-state controls','School-wide summary and reporting'],
    experience: ['Transport web command views','Driver and transport mobile roles','Authorized student / parent live-tracking experiences'],
  },
  operations: {
    label: 'Campus administration',
    intro: 'Digitizes high-volume institutional operations while keeping ownership, movement and history traceable.',
    controls: ['Role-scoped operational access','Transaction / issue / return history where applicable','Verification and approval steps','Searchable records and reports'],
    experience: ['Responsive administration workflows','Permission-scoped staff access','Connected institution and student / employee masters'],
  },
  communication: {
    label: 'Institution communication',
    intro: 'Keeps official communication inside institution-scoped workflows instead of depending only on personal messaging channels.',
    controls: ['Recipient scoping','Authorized sender roles','Read / acknowledgement status where supported','Message history'],
    experience: ['Web communication tools','Mobile recipient experiences','Push / WhatsApp integrations where configured'],
  },
  'ai-apps': {
    label: 'AI, apps & digital experience',
    intro: 'Extends the ERP with assisted intelligence, branded mobile experiences and institution-facing digital channels.',
    controls: ['School / institution configuration','Role-aware AI and app access','Human review retained for academic decisions','Connected ERP data context'],
    experience: ['Web + iOS + Android positioning','Institution-branded mobile experiences','AI embedded into selected education workflows'],
  },
};

export const deepDive = {
  'department-hod': {
    title: 'A real operating system for every department',
    intro: 'The HOD workspace combines academic monitoring with department administration, activities, people, inventory and reporting — so departmental ownership is visible to both the HOD and leadership.',
    groups: [
      { title:'HOD Dashboard & Team', items:['My Department Work: pending tasks, duties, issued items and upcoming events','Department overview with members, subjects, pending/overdue tasks, events, achievements and inventory','Department member/designation assignments','Department subject mapping'] },
      { title:'Academic Monitoring', items:['Teacher-wise class/subject assignments','Lesson-plan counts and completion tracking','Syllabus-breakup counts and approval status','Digital Diary activity and recent entries','Recent lesson-plan review by teacher/class/subject'] },
      { title:'Tasks, Events & Duties', items:['Create and assign department tasks','Acknowledgement / completion status','Create departmental events and competitions','Assign staff duties with reporting time','Student participation and result capture','Coordinator review; approved events can flow to Academic Calendar'] },
      { title:'Inventory & Annual Reporting', items:['Department inventory locations and items','Receive / issue stock','Return request and confirmation workflow','Achievement submission, verification and publishing','One-Minute Annual Report covering events, achievements, student participation, teacher duties, inventory and completed work'] },
    ],
    reports:['Department dashboard metrics','Teacher-wise academic overview','Annual department report / print-PDF workflow','Approved event and achievement history'],
  },
  'exam-management': {
    title: 'The foundation of the complete examination lifecycle',
    intro: 'EduBridge separates exam setup from operational exam-day workflows while keeping every downstream process connected to the same exam, class, subject and assessment structure.',
    groups: [
      { title:'Exam Structure', items:['Exam master creation and editing','Exam locking / control','Term management','Assessment Components','Exam Schemes','Combined Exam Schemes','Grade Schemes'] },
      { title:'Class & Subject Readiness', items:['Class / subject exam mapping','Incharge assignment','Roll-number preparation','Co-Scholastic areas and grade structures','Class Co-Scholastic mapping'] },
      { title:'Operational Handoff', items:['Generate / prepare date sheets','Publish student My Date Sheet','Connect schedules to seating plans','Carry exam context into marks, results and report cards'] },
      { title:'Department Governance', items:['Examination-role access','Examination Dashboard','Circulars and Academic Calendar context','Examination Expense tracking','Connected audit / export workflows across exam submodules'] },
    ],
    reports:['Exam structure and scheme views','Class-wise exam configuration','Downstream date-sheet, seating, marks and result outputs','Examination expense records'],
  },
  'exam-date-sheet': {
    title:'Date-sheet creation without spreadsheet chaos',
    intro:'Create and maintain class-wise exam schedules using bulk tools, scheme-driven generation and publication controls.',
    groups:[
      {title:'Create',items:['Create schedules by exam/class/subject','Bulk schedule creation','Generate schedules from configured schemes','Copy / reuse supported schedule structures']},
      {title:'Maintain',items:['Bulk date updates','Bulk time updates','Edit individual schedule records','Delete / revise authorized schedules']},
      {title:'Exchange',items:['Excel import','Excel export','Validation around configured exam structures','Student-facing My Date Sheet']},
      {title:'Publish',items:['Control publication state','Make current schedule visible to learners','Keep examination team as source of truth']},
    ],
    reports:['Published student date sheet','Excel schedule export','Class / exam filtered schedule views'],
  },
  'exam-seating': {
    title:'Room, seat and invigilator planning in one workflow',
    intro:'Plan exam-day seating based on actual student selection and room capacity, then publish duties and learner seat information.',
    groups:[
      {title:'Rooms & Capacity',items:['Create and maintain exam rooms','Room capacity control','Archive rooms when no longer active','Select multiple rooms per plan']},
      {title:'Student Allocation',items:['Select eligible students','Automatic seat allocation','Manual allocation adjustments','Capacity-aware plan updates']},
      {title:'Invigilation',items:['Select staff for duty','Assign invigilators to rooms','Duty acknowledgement','Room roster access and exam attendance marking']},
      {title:'Publish & Print',items:['Publish / unpublish plan','Student My Seats view','Plan dashboard','PDF output','Print data','Audit logs']},
    ],
    reports:['Room-wise seating plan','Class / student seating information','Invigilation duty chart','Exam attendance context','Plan audit log'],
  },
  'answer-scripts': {
    title:'Answer-script custody from exam room to archive',
    intro:'Track physical answer scripts through collection, reconciliation, bundling, evaluator checking, returns and rechecks.',
    groups:[
      {title:'Room Collection',items:['Generate room collections from seating plan','Expected vs received counts','Invigilator room collection view','Update collection and handover','Receive and reconcile at examination control']},
      {title:'Bundles',items:['Auto-create bundles','View bundle students','Update bundle details','Issue evaluator bundles','Finalize and archive bundles']},
      {title:'Evaluator Workflow',items:['Evaluator My Assignments','Accept / decline assignment','Update checking progress','Complete checking','Return checked scripts','Examination department receive-return']},
      {title:'Recheck & Audit',items:['Create recheck request','Review and action recheck','Recheck PDF','Register PDF','Audit logs','Student My Answer Script Status']},
    ],
    reports:['Room collection PDF','Evaluator assignment PDF','Bundle PDF','Recheck PDF','Answer-script register PDF','Audit history'],
  },
  'results-report-cards': {
    title:'From finalized marks to institution-ready report cards',
    intro:'Use the same exam data for result summaries and flexible report-card generation instead of rebuilding results in separate files.',
    groups:[
      {title:'Result Views',items:['Class-wise result summary','Final result summary','Student result reports','Scholastic result context']},
      {title:'Report Design',items:['Report Card Formats','Assign report format by class','Result Report Designer','Smart Report Card workflows']},
      {title:'Complete Student Record',items:['Scholastic sections','Co-Scholastic sections','Student remarks','Attendance context','Health fields where configured']},
      {title:'Output',items:['Individual report-card generation','Bulk printing workflows','PDF result / report outputs','Student / parent result visibility where published']},
    ],
    reports:['Class result summary','Final result summary','Student PDF/Excel result report','Custom report-card PDFs'],
  },
  'teacher-performance': {
    title:'Performance intelligence with human context retained',
    intro:'Combine teaching outcomes, configured weights and authorized management observations into a structured review workflow.',
    groups:[
      {title:'Performance Model',items:['Configurable KPI weights','Teaching result snapshots','Operational / professional factors','Special-day overrides']},
      {title:'Management Review',items:['Individual teacher performance view','Management dashboard','Trend views','Team summary']},
      {title:'Human Input',items:['Authorized manual score entries','Manual-score revocation / correction','Management observation context','Professional growth view for teachers']},
      {title:'AI & Output',items:['AI-assisted performance insight','PDF reporting','Review-ready summaries','Use alongside HOD / Principal academic context']},
    ],
    reports:['Individual performance report','Team / management summary','Trend view','PDF report'],
  },
  'ai-assistant': {
    title:'AI inside real education workflows — not a separate gimmick',
    intro:'EduBridge uses AI as an assistive layer across planning, assessment and management while keeping teacher / institution review in control.',
    groups:[
      {title:'Teaching Support',items:['Lesson-plan generation','Lesson-plan improvement suggestions','Question generation','Academic planning assistance']},
      {title:'Assessment Support',items:['AI-assisted assessment generation','Question creation','AI-assisted evaluation','Teacher override / final control']},
      {title:'Leadership Insight',items:['School-context AI assistant','Teacher-performance AI insight','Role-aware institutional context where configured']},
      {title:'Governance',items:['Institution-level AI settings','Capability checks','Human review retained','Connected to authorized ERP context rather than open public data entry']},
    ],
    reports:['AI-generated drafts remain editable','AI insight complements source ERP records','Institution controls determine enabled capabilities'],
  },
  'branded-mobile-apps': {
    title:'Your institution in the App Store and on every phone',
    intro:'Deliver role-based ERP experiences under the school or college identity rather than sending families and staff to a generic unbranded portal.',
    groups:[
      {title:'Institution Identity',items:['Institution name','Institution logo','Brand colors / visual identity','Consistent connected ERP experience']},
      {title:'Student & Parent',items:['Attendance, diary and assignments','Timetable and online classes','Fees and results','Live bus tracking','Communication and documents']},
      {title:'Teacher & Academic',items:['Attendance marking','Diary / assignments / assessments','Timetable and substitutions','Marks / examination workflows','Department and action workflows for supported roles']},
      {title:'Operational Roles',items:['Accounts mobile role','HR mobile role','Transport and Driver roles','Examination role','Academic Coordinator role','Department HOD role','Front Office role','Super Admin role']},
    ],
    reports:['Connected to the same ERP records as web','iOS and Android positioning','Role-aware navigation and access'],
  },
};
