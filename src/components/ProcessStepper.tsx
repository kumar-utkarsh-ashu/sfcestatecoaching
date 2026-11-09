"use client";

import React, { useState } from "react";
import { INDIVIDUAL_PROCESS_STEPS, INSTITUTIONAL_PARTNER_STEPS } from "@/data/siteData";
import { CheckCircle2, ChevronRight, User, Building2, Calendar, FileText, ArrowRight } from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";

interface ProcessStepperProps {
  initialType?: "individuals" | "organizations";
  onBookClick?: () => void;
}

export const ProcessStepper: React.FC<ProcessStepperProps> = ({
  initialType = "individuals",
  onBookClick
}) => {
  const [activeType, setActiveType] = useState<"individuals" | "organizations">(initialType);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = activeType === "individuals" ? INDIVIDUAL_PROCESS_STEPS : INSTITUTIONAL_PARTNER_STEPS;
  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Top Selector Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50">
        <button
          onClick={() => {
            setActiveType("individuals");
            setActiveStepIndex(0);
          }}
          className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 text-sm font-bold border-b-2 transition-all ${
            activeType === "individuals"
              ? "border-brand-orange bg-white text-brand-navy"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <User className="w-4 h-4 text-brand-orange" />
          <span>Donor / Individual Process</span>
        </button>
        <button
          onClick={() => {
            setActiveType("organizations");
            setActiveStepIndex(0);
          }}
          className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 text-sm font-bold border-b-2 transition-all ${
            activeType === "organizations"
              ? "border-brand-orange bg-white text-brand-navy"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Building2 className="w-4 h-4 text-brand-orange" />
          <span>Non-Profit / Organization 7-Step Model</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-10">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              {activeType === "individuals" ? "Donor Legacy Roadmap" : "Foundation & Non-Profit Partnership"}
            </span>
            <h3 className="text-2xl font-bold text-brand-navy mt-1">
              {activeType === "individuals"
                ? "How Does the Estate Planning Process Work?"
                : "How does Partnering with SFC Estate Coaching Work?"}
            </h3>
          </div>
          <TriangularMotif size="md" variant="coral" direction="right" />
        </div>

        {/* Horizontal Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {steps.map((step, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                  isSelected
                    ? "bg-brand-navy text-white border-brand-navy shadow-md scale-102"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1 ${
                    isSelected ? "bg-brand-orange text-white" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {step.step}
                </span>
                <span className="text-[11px] font-semibold truncate w-full">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Display Card */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-bold mb-3">
              <span>Phase {currentStep.step} of {steps.length}</span>
              <span>-</span>
              <span>{currentStep.title}</span>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              {currentStep.subtitle}
            </h4>
            <p className="text-slate-700 text-base leading-relaxed mb-6">
              {currentStep.description}
            </p>

            {currentStep.deliverables && currentStep.deliverables.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Scope Elements Covered:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStep.deliverables.map((item) => (
                    <div key={item} className="flex items-center text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {onBookClick ? (
                <button
                  onClick={onBookClick}
                  className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow transition-colors"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule This Session
                </button>
              ) : null}

              {activeStepIndex < steps.length - 1 ? (
                <button
                  onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                  className="inline-flex items-center text-sm font-semibold text-brand-slate hover:text-brand-navy transition-colors"
                >
                  <span>Next: {steps[activeStepIndex + 1].title}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              ) : (
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  Full Attorney-Ready Completion Achieved
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

