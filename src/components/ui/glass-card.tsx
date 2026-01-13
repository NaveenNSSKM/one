import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "subtle" | "elevated";
}

export function GlassCard({ children, className, hover = true, variant = "default" }: GlassCardProps) {
  const variants = {
    default: "bg-card/60 border-border",
    subtle: "bg-card/30 border-border/50",
    elevated: "bg-card/80 border-border shadow-lg",
  };

  return (
    <div
      className={cn(
        "relative backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500",
        variants[variant],
        hover && "hover:border-blue/50 hover:shadow-[0_8px_40px_rgba(59,130,246,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
