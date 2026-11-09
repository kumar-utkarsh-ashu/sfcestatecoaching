"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_INFO, TESTIMONIALS_DATA } from "@/data/siteData";
import {
  Users,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Heart,
  HelpCircle,
  FileText,
  Award
} from "lucide-react";
import { TriangularMotif, GeometricDivider } from "@/components/TriangularMotif";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ProcessStepper } from "@/components/ProcessStepper";
import { BookingModal } from "@/components/BookingModal";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Brand Realignment */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-slate text-white pt-16 pb-24 px-4 sm:px-8 overflow-hidden">
        {/* Subtle geometric background overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-16 -right-16 w-96 h-96 border-[40px] border-brand-orange rotate-45 rounded-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 border-[30px] border-brand-coral rotate-12 rounded-2xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-brand-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <TriangularMotif size="sm" variant="orange" direction="right" />
              <span>Estate Coaching Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Creating Legacies <br className="hidden sm:inline" />
              <span className="text-brand-orange">One Family at a Time</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8">
              Empowering non-profit organizations to secure planned gifts while guiding individuals and families through a pressure-free, attorney-ready estate coaching experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center px-6 py-3.5 rounded-xl font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-xl hover:shadow-2xl transition-all text-sm active:scale-95"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Free Consultation
              </button>
              <Link
                href="/about-sfc-estate"
                className="inline-flex items-center px-6 py-3.5 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 text-sm transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Two Core Pillars Side-by-Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto pt-6">
            {/* Pillar 1: Organizations */}
            <div className="bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 relative overflow-hidden group hover:border-brand-orange transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-navy/5 rounded-bl-full flex items-start justify-end p-4">
                <Building2 className="w-8 h-8 text-brand-slate" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
                <span>Non-Profit Partnership</span>
                <TriangularMotif size="sm" variant="coral" direction="right" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy mb-3">
                Estate Coaching for Organizations
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We partner with non-profits and churches to offer personalized estate coaching as a free gift to their supporters, helping educate donors on charitable gift planning with our 20x investment return guarantee.
              </p>
              <Link
                href="/help-for-organizations"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl font-bold text-sm text-white bg-brand-navy hover:bg-brand-slate transition-colors"
              >
                <span>How We Help Organizations</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Pillar 2: Individuals */}
            <div className="bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 relative overflow-hidden group hover:border-brand-orange transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-full flex items-start justify-end p-4">
                <Users className="w-8 h-8 text-brand-orange" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
                <span>Individuals & Families</span>
                <TriangularMotif size="sm" variant="orange" direction="right" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy mb-3">
                Estate Planning for Individuals
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We walk you through a two-step confidential coaching process to answer vital questions regarding your estate, ensure your loved ones are protected, and become completely attorney ready at zero cost to you.
              </p>
              <Link
                href="/help-for-individuals"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover transition-colors"
              >
                <span>How We Help People</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className="bg-brand-navy text-white py-10 px-4 border-t border-brand-slate/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
          <div className="pt-4 sm:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-orange font-mono">
              {SITE_INFO.stats.estatePlans}
            </div>
            <h3 className="text-sm font-bold text-slate-200 mt-1 uppercase tracking-wider">
              Estate Plans
            </h3>
            <p className="text-xs text-slate-400 mt-1">Personalized and attorney ready</p>
          </div>
          <div className="pt-4 sm:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
              {SITE_INFO.stats.organizationsHelped}
            </div>
            <h3 className="text-sm font-bold text-slate-200 mt-1 uppercase tracking-wider">
              Organizations Helped
            </h3>
            <p className="text-xs text-slate-400 mt-1">Non-profits, schools & churches</p>
          </div>
          <div className="pt-4 sm:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
              {SITE_INFO.stats.plannedGiftsMillion}
            </div>
            <h3 className="text-sm font-bold text-slate-200 mt-1 uppercase tracking-wider">
              Million in Planned Gifts
            </h3>
            <p className="text-xs text-slate-400 mt-1">Secured for future generations</p>
          </div>
        </div>
      </section>

      {/* The Mission & Core Values Section */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-slate-50 to-orange-50/30 rounded-2xl p-8 sm:p-12 border border-slate-200 relative overflow-hidden">
            <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
              <TriangularMotif size="sm" variant="orange" direction="right" />
              <span>Our Purpose</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
              The SFC Estate Coaching Mission:
            </h2>
            <blockquote className="text-base sm:text-xl font-medium text-slate-700 leading-relaxed italic border-l-4 border-brand-orange pl-4 mb-8">
              "{SITE_INFO.mission}"
            </blockquote>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                SFC Estate Coaching Core Values:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {SITE_INFO.coreValues.map((val) => (
                  <div
                    key={val}
                    className="bg-white rounded-xl p-3 text-center border border-slate-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-orange mx-auto mb-1" />
                    <span className="text-xs font-bold text-slate-800">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth and The Problem Section */}
      <section className="py-16 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* The Truth */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                A Fundamental Reality
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mt-1">
                The Truth: Your money will only go to one of these three places after you die:
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center relative overflow-hidden">
                <div className="w-12 h-12 bg-blue-50 text-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  1. To the People You Care About
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your spouse, children, grandchildren, and loved ones who rely on your thoughtful planning.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center relative overflow-hidden">
                <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  2. To the Causes You Care About
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your church, alma mater, charity, or non-profit ministries that made a profound difference in your lifetime.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center relative overflow-hidden">
                <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-700 mb-2">
                  3. To the Government
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Taxes, probate fees, and administrative burdens that arise when clear planning is neglected.
                </p>
              </div>
            </div>
          </div>

          {/* The Problem & Solution */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center space-x-2">
              <span>The Problem:</span>
              <TriangularMotif size="sm" variant="coral" direction="right" />
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Most people in the United States do not have a current will. Even though many love to help people and organizations they care about while alive, it is left to chance where the money will go after they die. Setting up a will ensures their legacy gifts go to the right places...to the people and organizations they care about. What greater gift can you give the faithful supporters of your organization than to help them ensure their legacy goes toward what they were passionate about while alive?
              </p>
              <p>
                Yet, having a will is more than just about ensuring a legacy past down to the next generation. With a will, a family can focus more on healing after losing a loved one rather than worrying about who gets what...a will can be one of the most loving things you can do for a family. We work with organizations to help people they are connected with to safely ensure their legacy gifts go where they want them to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Stepper Section */}
      <section className="py-16 px-4 sm:px-8 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Step-by-Step Guidance
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
              The Proven Estate Planning & Coaching Roadmap
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select between our individual donor coaching path and our 7-step institutional partnership model.
            </p>
          </div>

          <ProcessStepper onBookClick={() => setBookingOpen(true)} />
        </div>
      </section>

      {/* Audio Interview Section */}
      <section className="py-16 px-4 sm:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Broadcast Interview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Charitable Giving and Estate Planning
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              by Craig Mellendorf of SFC Estate Coaching on the radio with Dr. Dave Borst
            </p>
          </div>

          <AudioPlayer />
        </div>
      </section>

      {/* Why Have an Estate Plan Section */}
      <section className="py-16 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Enduring Reasons
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
              Why Have an Estate Plan?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-navy mb-1">
                  Because You Care About Your Spouse and Heirs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide peace of mind and eliminate familial strife by making critical decisions in advance.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-slate flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-navy mb-1">
                  Because You Care About People Who Need Help
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct tangible support to vulnerable individuals and communities through dedicated trusts or gifts.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-navy mb-1">
                  Because You Believe in the Mission of an Organization
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Empower causes and ministries you supported during life to continue thriving long after you are gone.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-navy mb-1">
                  Because Some Things Just Need Your Help
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ensure resources go toward meaningful impact rather than vanishing into probate taxes and legal friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Preview */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Real Client Experiences
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1">
                What Families and Leaders Say
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="mt-3 sm:mt-0 text-sm font-bold text-brand-orange hover:underline inline-flex items-center"
            >
              <span>View all reviews</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{item.quote.slice(0, 220)}..."
                </p>
                <div className="pt-3 border-t border-slate-200">
                  <h3 className="text-xs font-bold text-brand-navy">{item.author}</h3>
                  {item.role && <p className="text-[11px] text-slate-500">{item.role}</p>}
                  {item.organization && (
                    <p className="text-[11px] text-slate-500 font-medium">{item.organization}</p>
                  )}
                  {item.location && <p className="text-[11px] text-slate-500">{item.location}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section Preserving Exact Existing Text and Buttons */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-slate text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Learn More About Protecting Your Estate
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            We are here to serve you. We are estate coaches and looking forward to helping you with your estate plan!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-xl hover:shadow-2xl transition-all active:scale-95"
            >
              <span>Contact Us Now!</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Schedule Free Appointment</span>
            </button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

