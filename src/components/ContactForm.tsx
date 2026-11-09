"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "individual",
    message: "",
    mathAnswer: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-8 relative overflow-hidden">
      <div className="flex items-center space-x-2 mb-6">
        <h3 className="text-xl font-bold text-brand-navy">Contact SFC Estate Coaching</h3>
        <TriangularMotif size="sm" variant="orange" direction="right" />
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-900">Thank you for reaching out!</h4>
          <p className="text-sm text-emerald-700">
            We look forward to hearing from you! We will get back to you promptly to answer your questions or schedule your appointment.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", userType: "individual", message: "", mathAnswer: "" });
            }}
            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="flex items-center space-x-2 text-rose-600 bg-rose-50 border border-rose-200 p-3 rounded-lg text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Name <span className="text-brand-orange">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-slate text-sm text-slate-800"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Email Address <span className="text-brand-orange">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-slate text-sm text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              I am seeking assistance for:
            </label>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <label
                className={`flex items-center p-2.5 rounded-lg border cursor-pointer transition-colors ${
                  formData.userType === "individual"
                    ? "border-brand-orange bg-brand-orange/5 text-brand-navy font-bold"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value="individual"
                  checked={formData.userType === "individual"}
                  onChange={() => setFormData({ ...formData, userType: "individual" })}
                  className="mr-2 text-brand-orange focus:ring-brand-orange"
                />
                Individual / Family
              </label>
              <label
                className={`flex items-center p-2.5 rounded-lg border cursor-pointer transition-colors ${
                  formData.userType === "organization"
                    ? "border-brand-orange bg-brand-orange/5 text-brand-navy font-bold"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value="organization"
                  checked={formData.userType === "organization"}
                  onChange={() => setFormData({ ...formData, userType: "organization" })}
                  className="mr-2 text-brand-orange focus:ring-brand-orange"
                />
                Non-Profit / Church
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Message <span className="text-brand-orange">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we help you with your estate planning or planned giving goals?"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-slate text-sm text-slate-800"
            />
          </div>

          {/* Verification check preserving existing site prompt */}
          <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-600">
            <span className="font-semibold text-slate-700">Verification: 15 + 2 =</span>
            <input
              type="text"
              name="mathAnswer"
              value={formData.mathAnswer}
              onChange={(e) => setFormData({ ...formData, mathAnswer: e.target.value })}
              placeholder="17"
              className="w-16 px-2 py-1 rounded border border-slate-300 text-center text-sm"
            />
            <span className="text-slate-400 text-[11px]">(Anti-spam check)</span>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow hover:shadow-md transition-all"
          >
            <Send className="w-4 h-4 mr-2" />
            Send
          </button>
        </form>
      )}
    </div>
  );
};

