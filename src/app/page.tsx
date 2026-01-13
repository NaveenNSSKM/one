"use client";

import { useMode } from "@/lib/mode-context";
import { ScaleHome } from "@/pages/scale/home";
import { BuildHome } from "@/pages/build/home";

export default function Home() {
    const { mode } = useMode();
    return mode === "scale" ? <ScaleHome /> : <BuildHome />;
}
