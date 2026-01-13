"use client";

import Link from "next/link";
import { useMode } from "@/lib/mode-context";

export function Footer() {
  const { mode } = useMode();

  const scaleLinks = [
    { label: "ABM Platform", path: "/platform" },
    { label: "Managed Services", path: "/managed" },
    { label: "Services", path: "/services" },
    { label: "BYX Studio", path: "/byx" },
    { label: "Resources", path: "/resources" },
  ];

  const buildLinks = [
    { label: "Who We Are", path: "/who-we-are" },
    { label: "What We Do", path: "/what-we-do" },
    { label: "Articles", path: "/articles" },
  ];

  const links = mode === "scale" ? scaleLinks : buildLinks;

  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/">
              <span className="font-semibold text-lg cursor-pointer hover:text-cyan transition-colors">
                {mode === "scale" ? "Intelous" : "Intelous Labs"}
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-sm">
              {mode === "scale"
                ? "The sovereign GTM engine for B2B companies ready to scale revenue with precision and intelligence."
                : "Technical execution partners building the infrastructure that powers ambitious ventures."}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@intelous.ai</li>
              <li>San Francisco, CS</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Intelous. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span className="cursor-pointer hover:text-foreground transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-foreground transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
