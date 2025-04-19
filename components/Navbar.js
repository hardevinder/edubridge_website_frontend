import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  GraduationCap,
  ClipboardList,
  Smartphone,
  FileText,
  Layers,
  Globe,
  X,
} from "lucide-react";
import RequestDemoForm from "../components/RequestDemoForm";

export default function Navbar() {
  const [isMegaOpen, setMegaOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastY || currentY < 50);
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productList = [
    {
      title: "School ERP",
      desc: "All-in-one digital school management system with fee, attendance, exams & reports.",
      icon: <LayoutDashboard className="text-orange-600" size={20} />,
      link: "/school-erp",
    },
    {
      title: "Library Software",
      desc: "Organize and track your books, members, and lending efficiently.",
      icon: <BookOpen className="text-orange-600" size={20} />,
      link: "/library",
    },
    {
      title: "Visitor Management",
      desc: "Securely record and monitor all school visitors with instant logs.",
      icon: <Users className="text-orange-600" size={20} />,
      link: "/visitor-management",
    },
    {
      title: "Institute Management",
      desc: "Handle multi-branch operations, HR, inventory, and student lifecycle.",
      icon: <Layers className="text-orange-600" size={20} />,
      link: "/institute-management",
    },
    {
      title: "Exam Software",
      desc: "Plan, conduct, and evaluate online/offline exams easily.",
      icon: <ClipboardList className="text-orange-600" size={20} />,
      link: "/exam-management",
    },
    {
      title: "School/College Website",
      desc: "Modern, mobile-friendly websites for your institution with dynamic content.",
      icon: <Globe className="text-orange-600" size={20} />,
      link: "/school-website",
    },
    {
      title: "College ERP",
      desc: "Digitize your college admin tasks, academics, and communication.",
      icon: <GraduationCap className="text-orange-600" size={20} />,
      link: "/college-erp",
    },
    {
      title: "Admission CRM",
      desc: "Manage leads, follow-ups, and admissions with powerful tracking.",
      icon: <FileText className="text-orange-600" size={20} />,
      link: "/admission-crm",
    },
    {
      title: "School Mobile App",
      desc: "Stay connected with students, parents & staff using a branded app.",
      icon: <Smartphone className="text-orange-600" size={20} />,
      link: "/mobile-app",
    },
    {
      title: "LMS",
      desc: "Create, assign, and track learning content & student progress online.",
      icon: <BookOpen className="text-orange-600" size={20} />,
      link: "/lms",
    },
    {
      title: "Online Assessments",
      desc: "Conduct timed MCQ tests with auto evaluation & analytics.",
      icon: <ClipboardList className="text-orange-600" size={20} />,
      link: "/cbt",
    },
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-white text-black px-6 py-4 shadow transform transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/logo.png" alt="EduBridge ERP" className="h-14" />
            </Link>
          </div>

          {/* Navigation */}
          <ul className="flex gap-10 items-center text-sm font-medium">
            <li className="relative">
              <button
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu */}
              <div
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                className={`absolute left-[43%] transform -translate-x-1/2 w-[80vw] max-w-[1100px] bg-white text-black rounded-xl shadow-2xl px-10 pr-14 z-50 transition-all duration-500 ease-out delay-100 ${
                  isMegaOpen ? "opacity-100 visible mt-14 translate-y-0" : "opacity-0 invisible -translate-y-3"
                }`}
              >
                {/* Desktop View */}
                <div className="hidden md:grid py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8">
                  {productList.map((item, idx) => (
                    <Link key={idx} href={item.link} className="flex gap-3 items-start p-3 rounded-lg hover:bg-orange-50 transition">
                      <div className="pt-1">{item.icon}</div>
                      <div>
                        <h4 className="text-md font-semibold text-orange-600 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-snug break-words">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Mobile View */}
                <div className="md:hidden flex flex-col gap-2 py-4">
                  {productList.map((item, idx) => (
                    <Link key={idx} href={item.link} className="block px-4 py-2 text-sm text-orange-600 hover:bg-orange-100 rounded transition">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link href="#features" className="hover:text-orange-500 transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowModal(true)}
                className="bg-orange-500 px-5 py-2 rounded text-white hover:bg-orange-600 transition"
              >
                Request Demo
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Request Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl relative">
            <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">Request a Free Demo</h2>
            <RequestDemoForm onSuccess={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}
