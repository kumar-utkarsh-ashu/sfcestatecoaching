"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_INFO } from "@/data/siteData";
import {
  Calendar,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Radio,
  ExternalLink,
  Award
} from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";
import { BookingModal } from "@/components/BookingModal";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function AboutSFCEstatePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <TriangularMotif size="sm" variant="orange" direction="right" />
            <span>Mission, Values & Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            About SFC Estate Coaching
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed mb-8">
            Our only interest is creating a personalized plan for the potential donor that works for them, their loved ones and any charity they wish to contribute. You will find that interest reflected in our Mission and Core Values. We look forward to helping you and your supporters through the estate coaching process.
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

      {/* Main Narrative Preserving Exact Content */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hello! from Craig Mellendorf */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/assets/craig_mellendorf.jpg"
                  alt="Craig Mellendorf, Founder & CEO"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
                <TriangularMotif size="sm" variant="orange" direction="right" />
                <span>Founder's Welcome</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                Hello!
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                My name is Craig Mellendorf, the Founder, CEO, and a Certified Gift Planning Professional with SFC Estate Coaching.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                I started SFC Estate Coaching because I saw the need for individuals and families to clearly communicate their desire to help the causes important to them throughout their lifetime through their estate plan. At the same time, I saw the growing need nonprofits have for financial resources and support. Quite simply, we saw two needs that could be met with one service, SFC Estate Coaching.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                SFC Estate Coaching provides the important and meaningful service of helping non-profit organizations substantially increase their foundation or endowment funds. We are also focused and committed to providing high-quality service and customer satisfaction - we will do everything we can to meet your expectations. We are effective in part because we provide third-party interaction with potential donors, creating personalized opportunity for planned giving, and coaching them through the completion of their will or estate plan without feeling like they are pressed to give to one organization or another.
              </p>
            </div>
          </div>

          {/* Mission and Core Values */}
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
                Guiding Compass
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
                The SFC Estate Coaching Mission:
              </h2>
              <blockquote className="text-base sm:text-lg font-medium text-slate-800 italic border-l-4 border-brand-orange pl-4 bg-white p-4 rounded-r-xl border border-slate-200">
                "{SITE_INFO.mission}"
              </blockquote>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-4">
                SFC Estate Coaching Core Values:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {SITE_INFO.coreValues.map((val) => (
                  <div
                    key={val}
                    className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-orange mx-auto mb-1" />
                    <span className="text-xs font-bold text-slate-800">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Craig Mellendorf Interview & Audio Player */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
              <Radio className="w-4 h-4 text-brand-orange" />
              <span>Media & Podcasting</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Craig Mellendorf Interview
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Author Jeff Meyer interviewed Craig on his popular podcast series recently. Check it out to really get to know Craig and his heart for helping others.
            </p>

            <AudioPlayer
              title="Craig Mellendorf Interview with Dr. Dave Borst & Jeff Meyer"
              subtitle="Listen to Craig discuss the principles of Christian gift planning, donor empowerment, and estate coaching."
            />
          </div>

          {/* About Jeff Meyer Section */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex items-center justify-center space-x-4">
                <div className="relative w-28 h-36 rounded-xl overflow-hidden shadow border border-slate-200">
                  <Image
                    src="/assets/jeff_meyer.jpg"
                    alt="Jeff Meyer, Author"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-28 h-36 rounded-xl overflow-hidden shadow border border-slate-200">
                  <Image
                    src="/assets/fear_not_book.png"
                    alt="Fear Not, Dream Big & Execute book cover"
                    fill
                    sizes="112px"
                    className="object-contain bg-white"
                  />
                </div>
              </div>

              <div className="md:col-span-8 space-y-3">
                <h3 className="text-xl font-bold text-brand-navy">About Jeff Meyer</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Jeff is a gifted author, podcaster, and business leader. His book <em>Fear Not, Dream Big &amp; Execute</em> is packed with life lessons and tools. Full of actionable exercises, this must-have tool kit is much more than information ABOUT dreams and their pursuit. It will help you focus your dream and change your mind about what you can accomplish.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Get this must-have resource and launch your dream forward{" "}
                  <a
                    href="https://www.jeffmeyer.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-orange font-bold hover:underline inline-flex items-center"
                  >
                    here <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Preserving Exact Button */}
          <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-10 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Connect with SFC Estate Coaching</h2>
            <p className="text-sm text-slate-200 max-w-xl mx-auto">
              We look forward to helping you and your supporters through the estate coaching process.
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
                <span>Schedule Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

