"use client";

import { useEffect, useState } from "react";

/* Prueba capacidad WebGL real y libera el contexto de inmediato.
   null = aún probando (no dibujar nada: evita hidratar distinto). */
function probe(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

export function useGraphics(): boolean | null {
  const [capable, setCapable] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const id = window.requestAnimationFrame(() => {
      if (!cancelled) setCapable(probe());
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(id);
    };
  }, []);

  return capable;
}
