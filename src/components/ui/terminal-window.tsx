import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  logs: string[];
  className?: string;
  autoScroll?: boolean;
}

export function TerminalWindow({ logs, className, autoScroll = true }: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "bg-[#0a0a0a] border border-border rounded-md overflow-hidden shadow-xl",
        className
      )}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
        <div className="w-3 h-3 rounded-full bg-[#333]" />
        <div className="w-3 h-3 rounded-full bg-[#333]" />
        <div className="w-3 h-3 rounded-full bg-[#333]" />
      </div>
      <div className="p-4 h-80 overflow-hidden font-mono text-sm">
        <div className={cn(autoScroll && "animate-scroll-up")}>
          {logs.map((log, index) => (
            <div
              key={index}
              className="text-neon-green mb-2 opacity-80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-muted-foreground mr-2">&gt;</span>
              {log}
            </div>
          ))}
          {autoScroll && logs.map((log, index) => (
            <div
              key={`repeat-${index}`}
              className="text-neon-green mb-2 opacity-80"
            >
              <span className="text-muted-foreground mr-2">&gt;</span>
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
