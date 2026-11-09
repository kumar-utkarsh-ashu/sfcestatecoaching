"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS, SITE_INFO } from "@/data/siteData";
import { Phone, Calendar, Menu, X, ChevronRight } from "lucide-react";
import { BookingModal } from "@/components/BookingModal";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-200">
        {/* Top Utility Bar */}
        <div className="bg-brand-navy text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-brand-slate/40">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center space-x-1.5 hover:text-white transition-colors"
                aria-label={`Call ${SITE_INFO.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>{SITE_INFO.phoneFormatted}</span>
              </a>
              <span className="hidden md:inline text-slate-400">|</span>
              <span className="hidden md:inline text-slate-300">
                {SITE_INFO.address}, {SITE_INFO.cityStateZip}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.bbb.org/us/wi/thiensville/profile/estate-planning/sfc-estate-coaching-llc-0694-1000053556"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1 hover:text-white"
              >
                <span className="text-[11px] font-medium text-slate-300">BBB Accredited A+</span>
              </a>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="inline-flex items-center space-x-1 text-brand-orange hover:text-orange-300 font-semibold transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Logo Only (Clean alignment as requested) */}
            <Link href="/" className="flex items-center py-2 flex-shrink-0" aria-label="SFC Estate Coaching Home">
              <div className="relative h-14 sm:h-16 w-16 sm:w-20">
                <Image
                  src="/assets/logo.jpg"
                  alt="SFC Estate Coaching Logo"
                  fill
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-brand-orange bg-brand-orange/10 font-bold"
                        : "text-slate-700 hover:text-brand-navy hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-3 py-1.5 rounded-md text-xs font-bold text-white bg-brand-orange hover:bg-brand-orange-hover"
                aria-label="Book consultation"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl px-4 pt-3 pb-6 space-y-1">
            <div className="grid grid-cols-1 gap-1">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-brand-orange bg-brand-orange/10 font-bold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 mt-2 border-t border-slate-200 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Free Consultation
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="flex items-center space-x-1.5 text-brand-navy font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{SITE_INFO.phoneFormatted}</span>
                </a>
                <span>BBB Accredited A+</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
};
