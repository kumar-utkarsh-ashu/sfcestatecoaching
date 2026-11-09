"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Video, Mail, Phone, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";
import { BookingModal } from "@/components/BookingModal";

export default function CovidResponsePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <Video className="w-3.5 h-3.5" />
            <span>Virtual &amp; Remote Coaching Options</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            COVID-19
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed mb-8">
            We are open and working through email, phone and Zoom virtual conference calls. Learn more below.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Schedule Virtual Appointment</span>
            </button>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
              <TriangularMotif size="sm" variant="orange" direction="right" />
              <span>Safety &amp; Continuity Policy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              SFC Estate Coaching's Response to the COVID-19 Pandemic
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              SFC Estate Coaching is taking the following steps to appropriately deal with the pandemic that is currently affecting our country and the world. This is our promise to you:
            </p>

            <ul className="space-y-4 pt-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>We are actively working with our present organizations and families through email, phone and Zoom virtual conference calls for both Appointments &amp; Presentations.</span>
              </li>
              <li className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>We are actively seeking new contracts in order to support organizations and families that desire to get a will/estate plan in place.</span>
              </li>
              <li className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>We continue to work with attorneys in moving wills and trusts forward to completion. Like us, many attorneys remain active in completing wills and trusts.</span>
              </li>
              <li className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>We are giving families the option of receiving their booklet via a hard copy (delivered by mail), a digital copy (by email) or both options.</span>
              </li>
              <li className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>We understand that some families may choose to postpone meeting at this time due to a lack of a computer, tablet or cellphone. Thus far, this is less than 5% of the families that we work with. The families we have met via Zoom have been overwhelmingly positive about our virtual conference.</span>
              </li>
              <li className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>We developed an online video illustrating the importance of preparing a will or trust. Organizations may choose to post the video on their website for families to watch.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                We are deeply grateful to be able to help people and organizations, especially at a time like this. To that aim, we have invested in the necessary technology that allows us to continue to assist you with professionalism, confidentiality and the high quality of work that we promise when we agree to work together.
              </p>
              <p>
                Please{" "}
                <Link href="/contact-us" className="text-brand-orange font-bold hover:underline">
                  reach out
                </Link>{" "}
                if you have any questions about our program.
              </p>
              <p className="font-semibold text-brand-navy pt-2">
                Sincerely,<br />
                Craig Mellendorf and The SFC Estate Coaching Team
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

