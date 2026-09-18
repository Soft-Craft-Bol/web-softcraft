"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { animatePageIn } from "@/lib/animations";
import { animatePageContent } from "@/lib/motion";

export default function Template({ children }: { children: ReactNode }) {
  useEffect(() => {
    const timeline = animatePageIn();
    const cleanupContentMotion = animatePageContent();

    return () => {
      cleanupContentMotion();
      timeline?.kill();
    };
  }, []);

  return (
    <>
      <div id="transition-element" aria-hidden="true" className="page-transition-layer" />
      {children}
    </>
  );
}
