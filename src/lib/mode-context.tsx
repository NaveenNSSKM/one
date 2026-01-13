"use client";

import { createContext, useContext, useState, useCallback, useRef, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type Mode = "scale" | "build";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

const buildRoutes = ["/what-we-do", "/who-we-are", "/articles"];
const scaleRoutes = ["/services", "/platform", "/managed", "/byx", "/resources"];

function getModeFromPath(path: string): Mode | null {
  if (buildRoutes.some(route => path === route)) {
    return "build";
  }
  if (scaleRoutes.some(route => path === route)) {
    return "scale";
  }
  return null;
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prevLocationRef = useRef(pathname);

  // Initialize from path if explicit, otherwise default to scale (or localStorage in useEffect)
  const [mode, setModeState] = useState<Mode>("scale");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only run on client start
    const savedMode = localStorage.getItem("intelous-mode") as Mode;
    const pathMode = pathname ? getModeFromPath(pathname) : null;

    // Priority: Path > LocalStorage > Default("scale")
    if (pathMode) {
      setModeState(pathMode);
    } else if (savedMode) {
      setModeState(savedMode);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    // When path changes, if the new path implies a specific mode, switch to it.
    // If the path is neutral (like /), rely on existing state or localStorage.
    if (prevLocationRef.current !== pathname) {
      prevLocationRef.current = pathname;
      if (pathname) {
        const pathMode = getModeFromPath(pathname);
        if (pathMode) {
          setModeState(pathMode);
          localStorage.setItem("intelous-mode", pathMode);
        }
      }
    }
  }, [pathname, isInitialized]);

  const toggleMode = useCallback(() => {
    setModeState((prev) => {
      const next = prev === "scale" ? "build" : "scale";
      localStorage.setItem("intelous-mode", next);
      return next;
    });
  }, []);

  const setMode = useCallback((newMode: Mode) => {
    setModeState(newMode);
    localStorage.setItem("intelous-mode", newMode);
  }, []);

  return (
    <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
