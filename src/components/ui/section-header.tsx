import { cn } from "@/lib/utils";
import { MonoLabel } from "./mono-label";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string | ReactNode;
  className?: string;
  labelColor?: "blue" | "pink" | "cyan" | "neon-green" | "default";
  centered?: boolean;
  size?: "default" | "lg" | "xl";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  labelColor = "blue",
  centered = false,
  size = "default",
}: SectionHeaderProps) {
  const titleSizes = {
    default: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl lg:text-5xl",
    xl: "text-4xl md:text-5xl lg:text-6xl",
  };

  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {label && (
        <MonoLabel color={labelColor} className="mb-5 block">
          {label}
        </MonoLabel>
      )}
      <h2 className={cn(
        "font-semibold tracking-tight mb-5 leading-tight",
        titleSizes[size]
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-muted-foreground text-lg leading-relaxed",
          centered && "max-w-2xl mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
