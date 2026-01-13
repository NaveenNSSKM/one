import { cn } from "@/lib/utils";

interface WireframeCubeProps {
  className?: string;
  size?: number;
}

export function WireframeCube({ className, size = 200 }: WireframeCubeProps) {
  const halfSize = size / 2;
  
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      style={{ perspective: 1000 }}
    >
      <div
        className="relative animate-rotate-slow"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
        }}
      >
        {["front", "back", "right", "left", "top", "bottom"].map((face) => {
          const transforms: Record<string, string> = {
            front: `rotateY(0deg) translateZ(${halfSize}px)`,
            back: `rotateY(180deg) translateZ(${halfSize}px)`,
            right: `rotateY(90deg) translateZ(${halfSize}px)`,
            left: `rotateY(-90deg) translateZ(${halfSize}px)`,
            top: `rotateX(90deg) translateZ(${halfSize}px)`,
            bottom: `rotateX(-90deg) translateZ(${halfSize}px)`,
          };
          
          return (
            <div
              key={face}
              className="absolute border-2 border-cyan/50 bg-cyan/[0.02]"
              style={{
                width: size,
                height: size,
                transform: transforms[face],
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
