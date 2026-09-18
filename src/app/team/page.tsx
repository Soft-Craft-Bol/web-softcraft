import type { Metadata } from "next";
import { HiSparkles, HiUserCircle } from "react-icons/hi2";
import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { TEAM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipo | SoftCraft Bolivia",
  description:
    "Talento interdisciplinario: software, diseño e inteligencia artificial.",
};

export default function TeamPage() {
  const featured = TEAM[0];

  return (
    <>
      <PageIntro
        title={<>Talento detrás de cada <span className="text-rose/90">solución.</span></>}
        lead="Ingeniería rigurosa, diseño centrado en el usuario e IA práctica para sistemas confiables y fáciles de operar."
        linkHref="/contact"
        linkLabel="Trabajar con nosotros"
      />
      <div className="mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">
        <section aria-labelledby="team-preview-title" className="mt-14">
          <div className="mb-8 max-w-2xl">
            <h2 id="team-preview-title" className="text-2xl font-semibold tracking-tight text-cream sm:text-4xl">
              Personas primero, especialidad después.
            </h2>
            <p className="mt-3 leading-relaxed text-haze">
              La composición deja espacio para una foto real, una presentación breve y las capacidades que cada persona aporta al proyecto.
            </p>
          </div>

          <article data-motion="reveal" data-motion-direction="right" className="overflow-hidden rounded-2xl border border-white/15 bg-panel">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative min-h-[260px] overflow-hidden bg-gradient-to-br from-magenta/35 via-deep to-abyss p-6 sm:min-h-[320px]">
                <div aria-hidden="true" className="absolute -right-10 -top-16 h-64 w-64 rounded-full border border-gold/30 bg-gold/10 blur-[1px]" />
                <HiUserCircle aria-hidden="true" className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-cream/80" />
              </div>
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-9">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">Perfil destacado</p>
                    <HiSparkles aria-hidden="true" className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cream sm:text-3xl">{featured.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-coral">{featured.role}</p>
                  </div>
                  <p className="max-w-[48ch] leading-relaxed text-haze">{featured.specialty}</p>
                  <ul aria-label={`Competencias de ${featured.name}`} className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-cream">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>

        <ul data-motion="stagger" aria-label="Especialidades del equipo" className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <li
              data-motion-item=""
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-white/12 bg-panel transition-colors duration-200 hover:border-magenta/60"
            >
              <div className="relative flex min-h-[170px] items-end justify-between overflow-hidden bg-gradient-to-br from-panel2 via-panel to-abyss p-5">
                <div aria-hidden="true" className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10 bg-white/5" />
                <HiUserCircle aria-hidden="true" className="relative h-20 w-20 text-cream/75 transition-transform duration-200 group-hover:scale-105" />
              </div>
              <div className="space-y-3 p-6 sm:p-7">
                <div>
                  <h3 className="text-lg font-bold text-cream">{member.name}</h3>
                  <p className="text-[0.8rem] font-semibold text-coral">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-haze">{member.specialty}</p>
                <ul aria-label={`Competencias de ${member.name}`} className="flex flex-wrap gap-1.5 pt-1">
                  {member.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/12 bg-panel2 px-2.5 py-1 text-xs text-haze">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
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
