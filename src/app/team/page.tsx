import type { Metadata } from "next";
import { HiExclamationTriangle } from "react-icons/hi2";
import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { TEAM_EXAMPLE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipo | SoftCraft Bolivia",
  description:
    "Talento interdisciplinario: software, diseño e IA. Fichas de ejemplo pendientes de datos reales.",
};

export default function TeamPage() {
  return (
    <>
      <PageIntro
        title={<>Talento detrás de cada <span className="text-gold">solución.</span></>}
        lead="Ingeniería rigurosa, diseño centrado en el usuario e IA práctica para sistemas confiables y fáciles de operar."
        linkHref="/contact"
        linkLabel="Trabajar con nosotros"
      />
      <div className="mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">
        <p role="note" className="flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/5 p-4 text-sm text-cream">
          <HiExclamationTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
          <span>
            <strong className="font-bold">Fichas de ejemplo.</strong> Muestran el diseño a la
            espera de los datos reales del equipo, que aporta el dueño.
          </span>
        </p>

        <ul aria-label="Especialidades del equipo (ejemplo)" className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_EXAMPLE.map((member) => (
            <li
              key={member.name}
              className="flex flex-col justify-between gap-5 rounded-2xl border border-white/12 bg-panel p-6 transition-colors duration-200 hover:border-magenta/60 sm:p-7"
            >
              <div className="space-y-3">
                <span aria-hidden="true" className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-magenta/40 bg-magenta/10 font-mono text-sm font-bold text-rose">
                  {member.name.charAt(0)}
                </span>
                <div>
                  <h2 className="text-lg font-bold text-cream">{member.name}</h2>
                  <p className="text-[0.8rem] font-semibold text-coral">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-haze">{member.specialty}</p>
                <ul aria-label={`Competencias de ${member.name}`} className="flex flex-wrap gap-1.5 pt-1">
                  {member.tags.map((tag) => (
                    <li key={tag} className="rounded-md border border-white/12 bg-panel2 px-2 py-0.5 text-xs text-haze">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="border-t border-white/10 pt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-dim">
                SoftCraft · Bolivia
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <CtaBand
            title="¿Sumamos este equipo a tu desafío?"
            text="Coordinemos una sesión técnica para revisar requerimientos y arquitectura."
            action="Coordinar una sesión"
          />
        </div>
      </div>
    </>
  );
}
