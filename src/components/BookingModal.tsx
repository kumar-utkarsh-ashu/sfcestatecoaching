"use client";

import React, { useState } from "react";
import { SITE_INFO } from "@/data/siteData";
import { Calendar, X, ExternalLink, Clock, CheckCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-brand-navy text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center text-white">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 id="booking-modal-title" className="text-lg font-bold">
                Schedule Your Free Estate Planning Coaching Session
              </h2>
              <p className="text-xs text-slate-300">
                Confidential, 60-90 minute consultation with Craig Mellendorf
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Sub-header */}
        <div className="bg-slate-50 px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-700">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
              100% Free for Donors
            </span>
            <span className="flex items-center text-slate-700">
              <Clock className="w-3.5 h-3.5 text-brand-slate mr-1.5" />
              60-90 Minutes
            </span>
            <span className="flex items-center text-slate-700">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
              Zero Sales Pressure
            </span>
          </div>
          <a
            href={SITE_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-orange font-semibold hover:underline"
          >
            Open in new tab
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>

        {/* Body / Iframe Container */}
        <div className="relative flex-1 min-h-[500px] bg-white overflow-hidden">
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-500 space-y-3">
              <div className="w-8 h-8 border-4 border-brand-orange border-t-transparent rounded-full animate-spin" />
              <p className="text-sm font-medium">Connecting to SFC Estate Coaching Calendar...</p>
            </div>
          )}
          <iframe
            src={SITE_INFO.bookingUrl}
            title="SFC Estate Coaching Appointment Booking"
            className="w-full h-full min-h-[550px] border-0"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Direct Phone: {SITE_INFO.phoneFormatted}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-md font-medium transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

