import React from "react";
import { cn } from "@/lib/utils";

interface TriangularMotifProps {
  className?: string;
  variant?: "navy" | "slate" | "coral" | "orange" | "subtle";
  size?: "sm" | "md" | "lg";
  direction?: "up" | "down" | "right" | "left";
}

export const TriangularMotif: React.FC<TriangularMotifProps> = ({
  className,
  variant = "coral",
  size = "md",
  direction = "right"
}) => {
  const colorMap = {
    navy: "text-brand-navy",
    slate: "text-brand-slate",
    coral: "text-brand-coral",
    orange: "text-brand-orange",
    subtle: "text-slate-200"
  };

  const sizeMap = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-8 h-8"
  };

  const rotateMap = {
    up: "rotate-0",
    right: "rotate-90",
    down: "rotate-180",
    left: "-rotate-90"
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(
        "inline-block transition-transform",
        colorMap[variant],
        sizeMap[size],
        rotateMap[direction],
        className
      )}
      aria-hidden="true"
    >
      <polygon points="12,2 22,20 2,20" />
    </svg>
  );
};

export const GeometricDivider: React.FC<{ inverted?: boolean; className?: string }> = ({
  inverted = false,
  className
}) => {
  return (
    <div className={cn("w-full overflow-hidden leading-none", className)}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-12 block text-brand-navy fill-current"
      >
        {inverted ? (
          <polygon points="0,0 600,60 1200,0 1200,60 0,60" />
        ) : (
          <polygon points="0,60 600,0 1200,60 1200,0 0,0" />
        )}
      </svg>
    </div>
  );
};

export const TriangularGridPattern: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-5",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(#335C81 1.5px, transparent 1.5px), radial-gradient(#E26D5C 1.5px, #F8FAFC 1.5px)",
        backgroundSize: "32px 32px",
        backgroundPosition: "0 0, 16px 16px"
      }}
      aria-hidden="true"
    />
  );
};

