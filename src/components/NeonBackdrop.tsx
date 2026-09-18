"use client";

import Aurora from "./Aurora";
import Threads from "./Threads";
import { useGraphics } from "@/hooks/useGraphics";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type BackdropKind = "aurora" | "threads";

/* Constantes de módulo: identidad estable para no reconstruir el contexto WebGL. */
const AURORA_STOPS = ["#b026ff", "#ff2e88", "#ff8a5c"];
const THREADS_COLOR: [number, number, number] = [1, 0.18, 0.53];

interface NeonBackdropProps {
  kind: BackdropKind;
  className?: string;
}

/* Fondo animado con sonda WebGL + alternativa estática.
   Sin movimiento reducido y sin GPU: gradiente neón fijo, nunca roto. */
export default function NeonBackdrop({ kind, className = "" }: NeonBackdropProps) {
  const graphics = useGraphics();
  const reducedMotion = usePrefersReducedMotion();

  const fallback = (
    <div
      aria-hidden="true"
      className={`absolute inset-0 ${className}`}
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 75% 30%, rgba(255,46,136,0.28), transparent 60%), radial-gradient(ellipse 50% 45% at 20% 75%, rgba(176,38,255,0.22), transparent 60%), radial-gradient(ellipse 40% 35% at 50% 100%, rgba(255,138,92,0.12), transparent 60%), #12060f",
      }}
    />
  );

  if (reducedMotion || graphics === false) return fallback;
  if (graphics === null) return fallback;

  const layer = "absolute inset-0 pointer-events-none";

  if (kind === "aurora") {
    return (
      <div aria-hidden="true" className={`absolute inset-0 ${className}`}>
        {fallback}
        <div className={layer}>
          <Aurora
            colorStops={AURORA_STOPS}
            amplitude={1.15}
            blend={0.55}
          />
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`absolute inset-0 ${className}`}>
      {fallback}
      <div className={`${layer} opacity-70`}>
        <Threads
          color={THREADS_COLOR}
          amplitude={1.1}
          distance={0.15}
          enableMouseInteraction
        />
      </div>
    </div>
  );
}
