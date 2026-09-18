"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/lib/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const accentText: Record<string, string> = {
  magenta: "text-rose",
  gold: "text-gold",
  coral: "text-coral",
};

const accentSurface: Record<string, string> = {
  magenta: "from-magenta/20 via-panel to-panel",
  gold: "from-gold/18 via-panel to-panel",
  coral: "from-coral/20 via-panel to-panel",
};

/* Carrusel accesible: autoplay suave, control manual y pausa al interactuar. */
export default function ServiceExplorer() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = SERVICES[activeIndex];
  const CurrentIcon = current.icon;

  useEffect(() => {
    if (paused || reducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % SERVICES.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);

  const selectService = (index: number, moveFocus = false) => {
    setActiveIndex(index);
    setPaused(true);
    if (moveFocus) tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (index: number, event: React.KeyboardEvent<HTMLButtonElement>) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % SERVICES.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + SERVICES.length) % SERVICES.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = SERVICES.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectService(nextIndex, true);
  };

  return (
    <div
      className="space-y-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="max-w-[16ch] text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
          Elige el punto de entrada.
        </h2>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
          {String(activeIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
        </p>
      </div>

      <div role="tablist" aria-label="Líneas de servicio" className="flex gap-2 overflow-x-auto pb-2">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          const selected = index === activeIndex;

          return (
            <button
              key={service.title}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`service-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`service-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectService(index)}
              onKeyDown={(event) => handleTabKeyDown(index, event)}
              className={`inline-flex min-h-[48px] flex-shrink-0 items-center gap-2 rounded-full border px-4 text-left text-sm font-semibold transition-colors ${
                selected
                  ? "border-gold/70 bg-gold text-abyss"
                  : "border-white/15 bg-white/5 text-haze hover:border-white/35 hover:text-cream"
              }`}
            >
              <Icon aria-hidden="true" className={`h-4 w-4 ${selected ? "text-abyss" : accentText[service.accent]}`} />
              {service.title}
            </button>
          );
        })}
      </div>

      <article
        id={`service-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`service-tab-${activeIndex}`}
        aria-live={paused ? "polite" : "off"}
        className={`overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br p-6 sm:p-9 ${accentSurface[current.accent]}`}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-abyss/35 ${accentText[current.accent]}`}>
                <CurrentIcon aria-hidden="true" className="h-7 w-7" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
                Línea {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl">{current.title}</h3>
              <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-haze">{current.problem}</p>
            </div>
          </div>

          <dl className="grid gap-5 sm:grid-cols-3 lg:pt-1">
            {[
              ["Resuelve", current.problem],
              ["Incluye", current.includes],
              ["Te acerca a", current.benefit],
            ].map(([term, definition]) => (
              <div key={term} className="border-t border-white/20 pt-4">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">{term}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-cream">{definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      <div className="flex items-center justify-between gap-4 pr-16 sm:pr-0">
        <div className="flex gap-1.5" aria-label="Progreso del carrusel">
          {SERVICES.map((service, index) => (
            <button
              key={service.title}
              type="button"
              aria-label={`Mostrar ${service.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => selectService(index)}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/45"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Servicio anterior"
            onClick={() => selectService((activeIndex - 1 + SERVICES.length) % SERVICES.length)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 text-lg text-cream transition-colors hover:border-gold hover:text-gold"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Siguiente servicio"
            onClick={() => selectService((activeIndex + 1) % SERVICES.length)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 text-lg text-cream transition-colors hover:border-gold hover:text-gold"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
