import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MonoLabelProps {
  children: ReactNode;
  className?: string;
  color?: "blue" | "pink" | "cyan" | "neon-green" | "default";
}

export function MonoLabel({ children, className, color = "blue" }: MonoLabelProps) {
  const colorClasses = {
    blue: "text-blue",
    pink: "text-pink",
    cyan: "text-cyan",
    "neon-green": "text-neon-green",
    default: "text-muted-foreground",
  };
  
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-wider",
        colorClasses[color],
        className
      )}
    >
      {children}
    </span>
  );
}
