"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_INFO } from "@/data/siteData";
import { Phone, Mail, MapPin, Calendar, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";
import { ContactForm } from "@/components/ContactForm";
import { BookingModal } from "@/components/BookingModal";

export default function ContactUsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Touchpoints</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Contact SFC Estate Planning
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed mb-8">
            We look forward to hearing from you! Feel free to give us a call or send us an email!
          </p>

          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg transition-all"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Book Directly on Craig's Calendar</span>
          </button>
        </div>
      </section>

      {/* Main Content: Form + Contact Cards */}
      <section className="py-16 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Information Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <h3 className="text-xl font-bold text-brand-navy">Contact SFC Estate Coaching</h3>
                  <TriangularMotif size="sm" variant="coral" direction="right" />
                </div>

                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Telephone
                      </span>
                      <a
                        href={`tel:${SITE_INFO.phone}`}
                        className="text-base font-bold text-brand-navy hover:text-brand-orange transition-colors"
                      >
                        {SITE_INFO.phoneFormatted}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-brand-slate flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${SITE_INFO.email}`}
                        className="text-base font-bold text-brand-navy hover:text-brand-orange transition-colors"
                      >
                        {SITE_INFO.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Mailing Address
                      </span>
                      <p className="text-sm font-semibold text-slate-800">
                        {SITE_INFO.address}
                      </p>
                      <p className="text-xs text-slate-600">
                        {SITE_INFO.cityStateZip}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Online Scheduling
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Skip email back-and-forth and select a time that fits your schedule directly:
                  </p>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-brand-navy hover:bg-brand-slate transition-colors"
                  >
                    <Calendar className="w-4 h-4 mr-2 text-brand-orange" />
                    <span>Open Calendar Scheduler</span>
                  </button>
                </div>
              </div>

              {/* Trust & Guarantee Pill */}
              <div className="bg-brand-navy text-white rounded-xl p-6 border border-slate-700 space-y-3">
                <div className="flex items-center space-x-2 text-brand-orange font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality Guarantee</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Every communication is strictly confidential between you and Craig Mellendorf. No information is ever shared with third parties or sponsoring agencies without your signed explicit permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

