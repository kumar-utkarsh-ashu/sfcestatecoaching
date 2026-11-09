"use client";

import React, { useState } from "react";
import { Smartphone, Monitor, Eye, CheckSquare, Layers, Maximize2, Shield } from "lucide-react";

interface WireframeToggleProps {
  isWireframe: boolean;
  onToggleWireframe: (val: boolean) => void;
  activeWidth: number;
  onChangeWidth: (width: number) => void;
  onOpenAudit: () => void;
}

const WIDTH_PRESETS = [
  { label: "320px", width: 320, name: "Compact Mobile" },
  { label: "375px", width: 375, name: "Standard Mobile" },
  { label: "425px", width: 425, name: "Large Mobile" },
  { label: "768px", width: 768, name: "Tablet Portrait" },
  { label: "1024px", width: 1024, name: "Tablet Landscape" },
  { label: "1280px", width: 1280, name: "Standard Desktop" },
  { label: "1440px", width: 1440, name: "Large Desktop" },
  { label: "1920px", width: 1920, name: "Full HD Ultrawide" },
];

export const WireframeToggle: React.FC<WireframeToggleProps> = ({
  isWireframe,
  onToggleWireframe,
  activeWidth,
  onChangeWidth,
  onOpenAudit,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="fixed bottom-4 right-4 z-50 bg-brand-navy text-white p-3 rounded-full shadow-2xl hover:bg-brand-slate transition-all border border-slate-600 flex items-center space-x-2"
        aria-label="Expand tester controls"
      >
        <Layers className="w-5 h-5 text-brand-orange" />
        <span className="text-xs font-bold pr-1">QA / Wireframe Bar</span>
      </button>
    );
  }

  return (
    <aside
      aria-label="QA and Wireframe Prototype Controls"
      className="fixed bottom-4 right-4 z-50 bg-slate-900/95 text-white rounded-xl shadow-2xl border border-slate-700 p-3.5 backdrop-blur max-w-sm sm:max-w-md"
    >
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-brand-orange" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Tester & Reviewer Suite
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={onOpenAudit}
            className="text-[11px] bg-brand-orange/20 hover:bg-brand-orange/30 text-brand-orange font-bold px-2 py-0.5 rounded transition-colors"
          >
            Audit & 54 Shots
          </button>
          <button
            onClick={() => setCollapsed(true)}
            className="text-slate-400 hover:text-white text-xs px-1.5 py-0.5"
            aria-label="Minimize tester toolbar"
          >
            -
          </button>
        </div>
      </div>

      {/* Wireframe vs Desktop Toggle */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <span className="text-xs text-slate-300">View Mode:</span>
        <div className="flex bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
          <button
            onClick={() => onToggleWireframe(false)}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition-colors ${
              !isWireframe
                ? "bg-brand-navy text-white font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Redesigned UI</span>
          </button>
          <button
            onClick={() => onToggleWireframe(true)}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition-colors ${
              isWireframe
                ? "bg-brand-orange text-white font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Wireframe</span>
          </button>
        </div>
      </div>

      {/* 8 Screen Width Preset Buttons */}
      <div>
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
          <span>8-Screen Width Check:</span>
          <span className="text-brand-orange font-mono font-bold">
            {activeWidth === 0 ? "Full Width (Responsive)" : `${activeWidth}px`}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {WIDTH_PRESETS.map((preset) => (
            <button
              key={preset.width}
              onClick={() => onChangeWidth(preset.width)}
              className={`text-[10px] py-1 px-1.5 rounded text-center transition-colors truncate ${
                activeWidth === preset.width
                  ? "bg-brand-orange text-white font-bold"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
              title={`${preset.name} (${preset.width}px)`}
            >
              {preset.label}
            </button>
          ))}
        </div>
        {activeWidth !== 0 && (
          <button
            onClick={() => onChangeWidth(0)}
            className="w-full mt-1.5 text-[10px] text-slate-400 hover:text-white py-0.5 text-center bg-slate-800/60 rounded"
          >
            Reset to Full Viewport
          </button>
        )}
      </div>
    </aside>
  );
};

