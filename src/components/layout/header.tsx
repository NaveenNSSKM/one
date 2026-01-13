"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMode } from "@/lib/mode-context";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

const scaleNavItems = [
  { label: "Home", path: "/" },
  { label: "ABM Platform", path: "/platform" },
  { label: "Managed Services", path: "/managed" },
  { label: "Services", path: "/services" },
  { label: "BYX Studio", path: "/byx" },
  { label: "Resources", path: "/resources" },
];

const buildNavItems = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/who-we-are" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Articles", path: "/articles" },
];

export function Header() {
  const { mode, setMode } = useMode();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = mode === "scale" ? scaleNavItems : buildNavItems;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span
              className="font-semibold text-lg tracking-tight cursor-pointer transition-colors hover:text-blue"
              data-testid="link-logo"
            >
              {mode === "scale" ? "Intelous" : "Intelous Labs"}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer",
                    pathname === item.path
                      ? "text-foreground bg-white/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  )}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div
              className="relative flex items-center bg-secondary/50 border border-border/50 rounded-full p-1 cursor-pointer select-none"
              style={{ width: 120, height: 32 }}
              onClick={() => {
                const newMode = mode === "scale" ? "build" : "scale";
                setMode(newMode);
                if (pathname !== "/") {
                  router.push("/");
                }
              }}
              data-testid="button-mode-toggle"
            >
              <div
                className={cn(
                  "absolute h-6 w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-out shadow-sm",
                  mode === "build"
                    ? "left-[calc(50%+2px)] bg-pink shadow-[0_0_10px_rgba(236,72,153,0.3)]"
                    : "left-1 bg-blue shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                )}
              />
              <div className="relative z-10 flex w-full justify-between px-3 text-xs font-medium">
                <span
                  className={cn(
                    "transition-colors",
                    mode === "scale" ? "text-black" : "text-muted-foreground"
                  )}
                >
                  Scale
                </span>
                <span
                  className={cn(
                    "transition-colors",
                    mode === "build" ? "text-black" : "text-muted-foreground"
                  )}
                >
                  Build
                </span>
              </div>
            </div>

            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={cn(
                      "block px-4 py-3 text-sm font-medium rounded-lg transition-all cursor-pointer",
                      pathname === item.path
                        ? "text-foreground bg-white/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
