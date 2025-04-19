import Slider from "react-slick";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Anjali Mehta",
    role: "Principal, Sunrise Public School",
    quote:
      "EduBridge ERP transformed how we manage our school—fees, exams and communication are now effortless!",
  },
  {
    name: "Mr. Rohan Gupta",
    role: "Administrator, Green Valley Academy",
    quote:
      "The real‑time dashboards and automated reports save me hours every week. Highly recommend!",
  },
  {
    name: "Ms. Kavita Sharma",
    role: "Teacher, St. Mary’s High School",
    quote:
      "I love the lesson‑planning and assignment features—my students stay more engaged than ever.",
  },
  {
    name: "Dr. Arjun Verma",
    role: "Education Consultant",
    quote:
      "Our partner schools have seen a 30% reduction in administrative workload since switching to EduBridge.",
  },
  {
    name: "Mrs. Neha Singh",
    role: "Coordinator, Rainbow Public School",
    quote:
      "Implementing EduBridge was the best decision—setup was seamless and support is outstanding.",
  },
  {
    name: "Mr. Suresh Rao",
    role: "IT Head, Maple Leaf Academy",
    quote:
      "The customization options and regular updates keep our system running smoothly and securely.",
  },
  {
    name: "Ms. Priya Agarwal",
    role: "School Manager, Horizon International",
    quote:
      "The mobile app feature keeps our staff connected on the go—attendance and reports at our fingertips!",
  },
  {
    name: "Mr. Amit Joshi",
    role: "Finance Officer, Crestwood School",
    quote:
      "Automated fee reminders have cut down our collection issues by 50%. A game changer for our finance team.",
  },
  {
    name: "Ms. Sunita Verma",
    role: "Parent, Oakwood Academy",
    quote:
      "I appreciate how I can track my child’s attendance and performance in real time. Truly parent‑friendly!",
  },
];

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-orange-600 hover:text-orange-800"
    >
      <ChevronLeft size={32} />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-orange-600 hover:text-orange-800"
    >
      <ChevronRight size={32} />
    </button>
  );
}

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our <span className="text-orange-600">Users Say</span>
        </h2>

        <div className="relative">
          <Slider {...settings} className="overflow-visible">
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Decorative quote background */}
                  <Quote className="absolute top-4 left-4 text-orange-200 text-7xl" />

                  <p className="relative text-gray-800 italic mb-6 text-base leading-relaxed">
                    “{t.quote}”
                  </p>

                  <div className="mt-4 font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
