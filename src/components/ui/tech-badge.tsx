import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: string;
  className?: string;
  variant?: "default" | "blue" | "pink" | "cyan" | "green";
}

export function TechBadge({ children, className, variant = "default" }: TechBadgeProps) {
  const variantClasses = {
    default: "text-blue border-blue/30 bg-blue/5",
    blue: "text-blue border-blue/30 bg-blue/5",
    pink: "text-pink border-pink/30 bg-pink/5",
    cyan: "text-cyan border-cyan/30 bg-cyan/5",
    green: "text-neon-green border-neon-green/30 bg-neon-green/5",
  };
  
  return (
    <span
      className={cn(
        "inline-block px-2 py-1 font-mono text-xs border",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
