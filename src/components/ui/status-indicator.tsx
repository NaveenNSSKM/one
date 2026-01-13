import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status?: "active" | "inactive" | "warning";
  className?: string;
  pulse?: boolean;
}

export function StatusIndicator({ 
  status = "active", 
  className,
  pulse = true 
}: StatusIndicatorProps) {
  const statusColors = {
    active: "bg-blue shadow-[0_0_8px_hsl(var(--blue))]",
    inactive: "bg-muted-foreground",
    warning: "bg-yellow-500 shadow-[0_0_8px_rgb(234,179,8)]",
  };
  
  return (
    <div
      className={cn(
        "w-2 h-2 rounded-full",
        statusColors[status],
        pulse && status === "active" && "animate-pulse",
        className
      )}
    />
  );
}
