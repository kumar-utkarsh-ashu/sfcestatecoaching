"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, GraduationCap, Briefcase, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";
import { BookingModal } from "@/components/BookingModal";

export default function TeamPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <Award className="w-3.5 h-3.5" />
            <span>Leadership & Credentials</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Owner &amp; CEO
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed mb-8">
            Meet Craig Mellendorf, Founder and CEO of SFC Estate Coaching, bringing decades of educational dedication, athletics coaching, and specialized estate planning guidance.
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

      {/* Main Profile & Detailed Bio Preserving Exact Content */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Photo & Badges */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/assets/craig_profile.jpg"
                  alt="Craig Mellendorf of SFC Estate Coaching"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-brand-navy">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Certified Gift Planning Professional (2017)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-brand-navy">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Christian Gift Planner (2018)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-brand-navy">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Elementary Education Degree, Concordia (1981)</span>
                </div>
              </div>
            </div>

            {/* Complete Bio Copy */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">
                  <TriangularMotif size="sm" variant="orange" direction="right" />
                  <span>Profile Overview</span>
                </div>
                <h2 className="text-3xl font-extrabold text-brand-navy">
                  Craig Mellendorf
                </h2>
                <p className="text-sm font-semibold text-brand-slate mt-1">
                  Founder &amp; Chief Executive Officer
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  Craig is the CEO of SFC Estate Coaching. He graduated from Concordia College, Seward NE in 1981 with an Elementary Education Teaching Degree. Taught six years (81-87) at Word of Life Lutheran School in St. Louis MO. 7th Grade Home Room Teacher, Athletic Director, Coach.
                </p>
                <p>
                  Taught four years (87-91) at Concordia University. Primarily Elementary and Middle School Classes. Assistant Basketball Coach. Director of Student Activities.
                </p>
                <p>
                  Taught 18 years (91-09) at Martin Luther H.S. 18 Subjects in Six Different Departments. Last three years Business/Tech Ed. Department Chair teaching almost exclusively Business and Computer-related classes. Head Coach Boys Basketball seven years. Head Coach Girls Basketball eight years. Head Coach Girls Tennis five years. Director of Student Activities three years. Was downsized due to Budget Cuts in 2009.
                </p>
                <p>
                  Professional Health Coach/Lifestyle and Weight Management Coach/Personal Trainer Wisconsin Athletic Club &amp; TV Spot on TMJ4 "Ask the Expert".
                </p>
                <p className="font-semibold text-brand-navy bg-slate-50 p-4 rounded-xl border border-slate-200">
                  Started as Gift Planning Counselor in January 2013 working with Gift Planning Services in Eau Claire, WI. Created SFC Estate Coaching in January 2015. Earned the title "Certified Gift Planning Professional" in January 2017 and Christian Gift Planner in May 2018.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book an Appointment with Craig</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

