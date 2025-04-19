// components/RequestDemoForm.jsx
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { submitDemoRequest } from "../services/api";

export default function RequestDemoForm({ onSuccess }) {
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school_name: "",
    message: "",
    captchaAnswer: ""
  });
  const [loading, setLoading] = useState(false);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptcha({ a, b });
    setFormData(fd => ({ ...fd, captchaAnswer: "" }));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expected = captcha.a + captcha.b;
    if (parseInt(formData.captchaAnswer, 10) !== expected) {
      toast.error("Incorrect CAPTCHA, please try again.");
      generateCaptcha();
      return;
    }

    setLoading(true);
    try {
      await submitDemoRequest({
        ...formData,
        captchaA: captcha.a,
        captchaB: captcha.b,
      });
      toast.success("Your demo request has been sent!");
      onSuccess?.();          // close modal or notify parent
      setFormData({
        name: "",
        email: "",
        phone: "",
        school_name: "",
        message: "",
        captchaAnswer: ""
      });
      generateCaptcha();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send request.");
      generateCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4"
    >
      {/* Name */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
        />
      </div>

      {/* School Name */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">School Name</label>
        <input
          type="text"
          name="school_name"
          value={formData.school_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
        />
      </div>

      {/* Message (full width) */}
      <div className="flex flex-col md:col-span-2">
        <label className="mb-1 font-medium">Message (Optional)</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
        />
      </div>

      {/* CAPTCHA */}
      <div className="flex flex-col md:col-span-2">
        <label className="mb-1 font-medium">
          What is {captcha.a} + {captcha.b}?
        </label>
        <input
          type="number"
          name="captchaAnswer"
          value={formData.captchaAnswer}
          onChange={handleChange}
          required
          className="w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
          placeholder="Answer"
        />
      </div>

      {/* Submit */}
      <div className="md:col-span-2 text-center">
        <button
          type="submit"
          disabled={loading}
          className={`w-full md:w-auto px-6 py-3 rounded bg-orange-500 text-white font-medium transition hover:bg-orange-600 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Request Demo"}
        </button>
      </div>
    </form>
  );
}
