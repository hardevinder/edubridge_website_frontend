import { BookOpen, Users, CalendarCheck, FileText, Bus, BadgeCheck } from "lucide-react";

const features = [
  {
    title: "Fee Management",
    description: "Automate fee collection, receipts, due alerts, and real-time tracking.",
    icon: FileText,
  },
  {
    title: "Student Information",
    description: "Centralized student data with easy access to records and reports.",
    icon: Users,
  },
  {
    title: "Attendance Tracking",
    description: "Daily attendance with instant alerts and monthly summaries.",
    icon: CalendarCheck,
  },
  {
    title: "Examination Reports",
    description: "Generate dynamic exam results and performance reports in seconds.",
    icon: BadgeCheck,
  },
  {
    title: "Transport Management",
    description: "Track routes, vehicles, and student transport usage with ease.",
    icon: Bus,
  },
  {
    title: "Lesson Planning",
    description: "Teachers can plan lessons and share content directly with students.",
    icon: BookOpen,
  },
];

export default function KeyFeatures() {
  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Why Choose <span className="text-orange-600">EduBridge ERP?</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Empower your institution with smart tools to simplify school management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
