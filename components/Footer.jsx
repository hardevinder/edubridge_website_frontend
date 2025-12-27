// components/Footer.jsx
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div>
          <img src="/logo.png" alt="EduBridgeERP Logo" className="h-10 mb-4" />
          <p className="text-gray-400 text-sm mb-6">
            EduBridgeERP is the all‑in‑one school management solution helping
            institutions streamline fees, attendance, exams, transport, and
            more.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-orange-400 transition-colors duration-200">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-orange-400 transition-colors duration-200">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-orange-400 transition-colors duration-200">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-orange-400 transition-colors duration-200">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-white transition-colors duration-200">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#modules" className="hover:text-white transition-colors duration-200">
                Modules
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="hover:text-white transition-colors duration-200">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-white transition-colors duration-200">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white transition-colors duration-200">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/blog" className="hover:text-white transition-colors duration-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/help-center" className="hover:text-white transition-colors duration-200">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-4 text-gray-400 text-sm mb-6">
            <li className="flex items-start">
              <MapPin size={18} className="mr-2 text-orange-400 mt-1" />
              <div>
                NEXT57 COWORKING<br/>
                Plot No‑F88, Industrial Area, Phase 7<br/>
                Sector 73, SAS Nagar, Mohali‑160055
              </div>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-2 text-orange-400" />
              <Link href="mailto:info@edubridgeerp.in" className="hover:text-white transition-colors duration-200">
                contact@edubridgeerp.in
              </Link>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-2 text-orange-400" />
              <Link href="tel:+919417873297" className="hover:text-white transition-colors duration-200">
                +91 94178 73297
              </Link>
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-full bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 px-6 rounded-r-full text-white font-medium transition-colors duration-200"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 pb-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} EduBridgeERP. All rights reserved.</p>
          <p>
            Designed with  by{" "}
            <Link href="https://edubridgeerp.in/" className="text-orange-400 hover:underline">
              EduBridge ERP
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
