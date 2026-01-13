import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "default" | "lg" | "sm";
}

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  size = "default",
  ...props
}: AnimatedButtonProps) {
  const variantClasses = {
    primary: "bg-blue text-white font-semibold hover:bg-blue/90 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    secondary: "bg-pink text-white font-semibold hover:bg-pink/90 shadow-[0_0_20px_rgba(255,0,128,0.2)] hover:shadow-[0_0_30px_rgba(255,0,128,0.4)]",
    ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-white/5",
    outline: "bg-transparent border border-blue/50 text-blue hover:bg-blue/10 hover:border-blue",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium",
        "rounded-lg transition-all duration-300",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
