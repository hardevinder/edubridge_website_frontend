import Slider from "react-slick";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Users,
  Briefcase,
  ShieldCheck,
  UserRound,
  Building2,
  X,
} from "lucide-react";
import { useState } from "react";
import RequestDemoForm from "../components/RequestDemoForm";

const slides = [
  { image: "/slide1.jpg", title: "Empower Your School with EduBridge ERP" },
  { image: "/slide2.jpg", title: "Manage Fees, Exams, Transport & Staff from One System" },
  { image: "/slide3.jpg", title: "Digitize Your Institution with Ease and Simplicity" },
  { image: "/slide4.jpg", title: "Your All-in-One School & College ERP Platform" },
];

const offerings = [
  { icon: BookOpen, title: "LMS", desc: "LMS delivers, tracks, and manages learning" },
  { icon: LayoutDashboard, title: "School ERP", desc: "Streamlines school operations efficiently" },
  { icon: GraduationCap, title: "College ERP", desc: "Automates college management processes" },
  { icon: FileText, title: "Admission CRM", desc: "Manages student recruitment and enrollment" },
  { icon: ClipboardList, title: "Online Assessment", desc: "Conducts secure online exams and grading" },
];

// Updated highlight: replaced ISO certified with security highlight
const highlights = [
  { icon: <Briefcase size={36} />, label: "5+ Years", desc: "Experience" },
  { icon: <Building2 size={36} />, label: "100+", desc: "Clients" },
  { icon: <UserRound size={36} />, label: "5000+", desc: "Parents" },
  { icon: <Users size={36} />, label: "200+", desc: "Educators" },
  { icon: <ShieldCheck size={36} />, label: "Secure", desc: "Data Protected" },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  return (
    <>
      <div className="relative h-[90vh] overflow-hidden rounded-lg shadow-lg">
        {/* Slider Background */}
        <Slider {...settings} className="absolute w-full h-full z-0">
          {slides.map((slide, i) => (
            <div key={i} className="relative h-[90vh] w-full">
              <img
                src={slide.image}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </Slider>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 px-6 md:px-12 py-8 flex flex-col justify-between text-white">
          {/* Top Content */}
          <div className="flex flex-1 justify-between items-center w-full">
            <div className="text-left max-w-3xl">
              <h1
                key={activeSlide}
                className="text-3xl md:text-5xl font-bold leading-tight mb-6 animate-fade-slide drop-shadow-lg"
              >
                {slides[activeSlide].title}
              </h1>

              {/* Button to open modal */}
              <button
                onClick={() => setShowModal(true)}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded transition animate-fade-slide delay-200 drop-shadow"
              >
                Request A Demo
              </button>
            </div>

            <div className="bg-white/90 text-black rounded-xl p-8 w-96 hidden md:block max-h-[420px]">
              <h3 className="text-xl font-semibold mb-5">Offering</h3>
              {offerings.map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-4">
                  <div className="text-orange-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Highlights */}
          <div className="flex justify-between items-end w-full mt-6">
            <div className="hidden md:block">
              <img
                src="/5_years.png"
                alt="5 Years"
                className="h-32 w-auto drop-shadow-xl"
              />
            </div>
            <div className="w-full flex flex-wrap justify-center md:justify-between gap-6 mt-6 px-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center min-w-[100px] flex-1">
                  <div className="bg-white/80 text-orange-600 rounded-full p-3 mb-3">
                    {item.icon}
                  </div>
                  <div className="text-white font-bold text-lg">{item.label}</div>
                  <div className="text-sm text-gray-100">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .animate-fade-slide {
            opacity: 0;
            transform: translateY(10px);
            animation: fadeSlideIn 0.8s ease forwards;
          }
          .animate-fade-slide.delay-200 {
            animation-delay: 0.2s;
          }
          @keyframes fadeSlideIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>

      {/* Request Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
              Request a Free Demo
            </h2>
            <RequestDemoForm onSuccess={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}
