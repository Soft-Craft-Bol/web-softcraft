"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/site";

const accentRing: Record<string, string> = {
  magenta: "border-magenta/70 shadow-[0_0_24px_rgba(255,46,136,0.25)]",
  gold: "border-gold/70 shadow-[0_0_24px_rgba(255,211,75,0.2)]",
  coral: "border-coral/70 shadow-[0_0_24px_rgba(255,138,92,0.22)]",
};

const accentText: Record<string, string> = {
  magenta: "text-rose",
  gold: "text-gold",
  coral: "text-coral",
};

/* Explorador de servicios: bento seleccionable con detalle fijo. */
export default function ServiceExplorer() {
  const [active, setActive] = useState(SERVICES[2].title);
  const current = SERVICES.find((service) => service.title === active) ?? SERVICES[0];
  const CurrentIcon = current.icon;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <div className="grid gap-4 sm:grid-cols-2" role="group" aria-label="Líneas de servicio">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          const selected = service.title === active;
          return (
            <button
              key={service.title}
              type="button"
              onClick={() => setActive(service.title)}
              aria-pressed={selected}
              className={`min-h-[120px] rounded-2xl border p-5 text-left transition-all duration-200 ${
                index === 2 ? "sm:col-span-2 sm:min-h-[132px]" : ""
              } ${
                selected
                  ? `border-magenta/60 bg-panel2 ${accentRing[service.accent]}`
                  : "border-white/12 bg-panel hover:-translate-y-0.5 hover:border-white/25"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 ${accentText[service.accent]}`}>
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="text-[0.95rem] font-bold text-cream">{service.title}</span>
              </span>
              <span className="mt-2 block text-[0.83rem] leading-relaxed text-haze">
                {service.problem}
              </span>
            </button>
          );
        })}
      </div>

      <article aria-live="polite" className="rounded-2xl border border-white/12 bg-panel p-7 sm:p-8 lg:sticky lg:top-24">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim">
          Problema · Qué incluye · Beneficio
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 ${accentText[current.accent]}`}>
            <CurrentIcon aria-hidden="true" className="h-6 w-6" />
          </span>
          <h2 className="text-2xl font-bold text-cream">{current.title}</h2>
        </div>
        <dl className="mt-6 space-y-4">
          {[
            ["Resuelve", current.problem],
            ["Incluye", current.includes],
            ["Te acerca a", current.benefit],
          ].map(([term, def]) => (
            <div key={term} className="border-t border-white/10 pt-3">
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-magenta">{term}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-cream">{def}</dd>
            </div>
          ))}
        </dl>
      </article>
    </div>
  );
}
