import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BladeCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: "blue" | "pink" | "cyan" | "neon-green";
}

export function BladeCard({ children, className, accentColor = "blue" }: BladeCardProps) {
  const accentClasses = {
    blue: "hover:border-l-blue",
    pink: "hover:border-l-pink",
    cyan: "hover:border-l-cyan",
    "neon-green": "hover:border-l-neon-green",
  };
  
  return (
    <div
      className={cn(
        "flex items-center justify-between p-6 bg-card border border-border",
        "transition-all duration-200 cursor-default",
        "border-l-4 border-l-transparent",
        accentClasses[accentColor],
        "hover:bg-card/80",
        className
      )}
    >
      {children}
    </div>
  );
}
