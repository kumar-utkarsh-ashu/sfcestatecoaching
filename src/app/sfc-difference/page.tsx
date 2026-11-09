"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DIFFERENCE_POINTS } from "@/data/siteData";
import { ShieldCheck, HeartHandshake, Layers, Users, Sparkles, Calendar, ArrowRight } from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";
import { BookingModal } from "@/components/BookingModal";

export default function SFCDifferencePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const iconList = [
    HeartHandshake,
    ShieldCheck,
    Layers,
    Users,
    Sparkles
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The SFC Advantage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            How SFC Estate Planning is Unique versus Other Gift Planners
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed mb-8">
            We have no hidden agenda. We like to help people and non-profits out and we have found walking people through their estate plans a very rewarding job.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Schedule Free Consultation</span>
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

      {/* Difference Feature Cards Preserving Exact Copy */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              5 Key Distinctions
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
              Why Donors and Non-Profits Trust SFC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENCE_POINTS.map((item, idx) => {
              const IconComp = iconList[idx] || ShieldCheck;
              return (
                <div
                  key={item.title}
                  className={`bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between ${
                    idx === 1 ? "md:col-span-2 bg-gradient-to-br from-orange-50/50 to-white border-brand-orange/40" : ""
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5 text-brand-orange" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-3 flex items-center space-x-2">
                      <span>{item.title}</span>
                      <TriangularMotif size="sm" variant="coral" direction="right" />
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Conversion Box */}
          <div className="bg-gradient-to-r from-brand-navy to-brand-slate rounded-2xl p-8 sm:p-10 text-white text-center space-y-6 mt-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Experience the SFC Difference Today</h2>
            <p className="text-sm text-slate-200 max-w-xl mx-auto">
              Ready for thoughtful, unbiased coaching that puts your family and charitable passions first?
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
                <span>Book Free Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

