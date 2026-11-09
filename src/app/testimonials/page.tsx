"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TESTIMONIALS_DATA } from "@/data/siteData";
import { Quote, Calendar, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";
import { BookingModal } from "@/components/BookingModal";

export default function TestimonialsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <Quote className="w-3.5 h-3.5" />
            <span>Client & Leader Feedback</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Estate Planning Reviews
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed mb-8">
            Read firsthand accounts from families, educators, and ministry leaders who experienced the ease and peace of mind of coaching with Craig Mellendorf.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Schedule Free Appointment</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid Preserving All Original Text */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  <div className="flex items-center space-x-1 text-brand-orange mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{item.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h3 className="font-bold text-brand-navy text-base">{item.author}</h3>
                  {item.role && <p className="text-xs text-slate-600 font-medium">{item.role}</p>}
                  {item.organization && (
                    <p className="text-xs text-brand-slate font-semibold">{item.organization}</p>
                  )}
                  {item.location && <p className="text-xs text-slate-500">{item.location}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Block with Exact Button Name */}
          <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-10 text-center space-y-6 mt-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Join Hundreds of Satisfied Clients</h2>
            <p className="text-sm text-slate-200 max-w-xl mx-auto">
              Protect your family and leave a legacy for what you cherish most. Our confidential service is completely free for donors.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg transition-all"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Online Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

