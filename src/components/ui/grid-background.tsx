import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  variant?: "dots" | "lines" | "mesh";
}

export function GridBackground({ className, variant = "dots" }: GridBackgroundProps) {
  const patterns = {
    dots: "radial-gradient(rgba(0, 209, 255, 0.08) 1px, transparent 1px)",
    lines: `
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
    `,
    mesh: `
      linear-gradient(rgba(0, 209, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 209, 255, 0.03) 1px, transparent 1px)
    `,
  };
  
  const sizes = {
    dots: "20px 20px",
    lines: "40px 40px, 40px 40px",
    mesh: "50px 50px, 50px 50px",
  };
  
  return (
    <div
      className={cn("fixed inset-0 pointer-events-none z-0", className)}
      style={{
        backgroundImage: patterns[variant],
        backgroundSize: sizes[variant],
      }}
    />
  );
}
