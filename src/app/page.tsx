import type { Metadata } from "next";
import Image from "next/image";
import { HiArrowDown, HiArrowUpRight, HiCheck, HiPlay } from "react-icons/hi2";
import CtaBand from "@/components/CtaBand";
import NeonBackdrop from "@/components/NeonBackdrop";
import ParticleField from "@/components/ParticleField";
import { PROJECTS, SERVICES } from "@/lib/site";
import TransitionLink from "@/components/TransitionLink";
import brandMark from "./image.png";

export const metadata: Metadata = {
  title: "SoftCraft Bolivia | Software a medida e IA aplicada",
  description:
    "Transformamos desafíos operativos en software a medida con IA aplicada solo donde genera valor. Conversemos.",
};

const accentText: Record<string, string> = {
  magenta: "text-rose",
  gold: "text-gold",
  coral: "text-coral",
};

const accentBorder: Record<string, string> = {
  magenta: "hover:border-magenta/60",
  gold: "hover:border-gold/60",
  coral: "hover:border-coral/60",
};

const homeCardStyles = [
  "border-magenta/35 bg-gradient-to-br from-magenta/25 via-panel to-panel",
  "border-gold/35 bg-gradient-to-br from-gold/20 via-panel to-panel",
  "border-coral/35 bg-gradient-to-br from-coral/25 via-panel to-panel",
];

export default function Home() {
  return (
    <>
      {/* HERO: aura + red interactiva inspirada en la antigua portada */}
      <section data-motion="hero" aria-labelledby="home-title" className="relative overflow-hidden border-b border-white/10">
        <NeonBackdrop kind="aurora" className="z-0" />
        <div className="pointer-events-none absolute inset-0 z-[2] opacity-100">
          <ParticleField />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(18,6,15,0.72) 0%, rgba(18,6,15,0.35) 55%, rgba(18,6,15,0.12) 100%), linear-gradient(0deg, rgba(18,6,15,0.35) 0%, transparent 44%)",
          }}
        />

        <div className="relative z-[3] mx-auto grid w-[min(100%-2rem,72rem)] gap-10 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14">
          <div className="max-w-2xl space-y-6">
            <h1 data-motion-hero-title="" id="home-title" className="text-[clamp(2.7rem,7vw,5.2rem)] font-bold leading-[1.02] tracking-tight text-cream">
              El software debe <span className="text-gold">entender</span> tu forma de trabajar.
            </h1>
            <p data-motion-hero-lead="" className="max-w-[52ch] text-base leading-relaxed text-haze sm:text-lg">
              Convertimos procesos enredados, tareas repetitivas e ideas pendientes en herramientas que encajan con tu forma de trabajar.
            </p>
            <div data-motion-hero-actions="" className="flex flex-wrap items-center gap-3 pt-1">
              <TransitionLink
                href="/contact"
                className="btn-shine inline-flex min-h-[52px] items-center gap-2 rounded-lg bg-gradient-to-r from-magenta to-viol px-6 text-sm font-bold text-white shadow-[0_0_26px_rgba(255,46,136,0.4)] transition-transform hover:-translate-y-0.5"
              >
                Cuéntanos qué te está frenando <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </TransitionLink>
              <TransitionLink
                href="/work"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 text-sm font-bold text-cream backdrop-blur transition-colors hover:border-gold/60 hover:text-gold"
              >
                <HiPlay aria-hidden="true" className="h-4 w-4" /> Ver proyectos
              </TransitionLink>
            </div>
          </div>

          <div data-motion-hero-mark="" className="hidden items-center justify-center py-2 sm:py-6 lg:flex">
            <Image
              src={brandMark}
              alt="SoftCraft Bolivia"
              width={576}
              height={576}
              priority
              className="w-[min(72vw,22rem)] object-contain"
            />
          </div>
        </div>

        <a
          href="#recorrido"
          aria-label="Bajar al recorrido de servicios"
          data-motion-hero-cue=""
          className="absolute bottom-4 right-4 hidden min-h-[44px] items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-dim transition-colors hover:text-cream sm:inline-flex lg:right-10"
        >
          Ver propuesta <HiArrowDown aria-hidden="true" className="h-4 w-4 animate-cue text-gold" />
        </a>
      </section>

      {/* RECORRIDO / SERVICIOS */}
      <section id="recorrido" aria-labelledby="recorrido-title" className="mx-auto w-[min(100%-2rem,72rem)] scroll-mt-24 py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h2 id="recorrido-title" className="max-w-[16ch] text-3xl font-semibold tracking-tight text-cream sm:text-5xl">
            Menos vueltas para <span className="text-coral">trabajar mejor.</span>
          </h2>
          <p className="max-w-[52ch] leading-relaxed text-haze">
            Empezamos por entender qué te quita tiempo y ordenamos una solución que puedas usar, revisar y hacer crecer.
          </p>
        </div>

        <div data-motion="stagger" className="mt-10 grid items-stretch gap-5 md:auto-rows-fr md:grid-cols-3">
          {SERVICES.slice(2, 5).map((service, index) => {
            const Icon = service.icon;
            return (
              <TransitionLink
                key={service.title}
                href="/services"
                data-motion-item=""
                className={`group flex h-full min-h-[240px] flex-col justify-between rounded-2xl border p-7 transition-all duration-200 hover:-translate-y-1 ${homeCardStyles[index]} ${accentBorder[service.accent]} hover:shadow-[0_18px_50px_rgba(255,46,136,0.16)]`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 ${accentText[service.accent]}`}>
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs font-bold text-cream/45">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-bold text-cream">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-haze">{service.problem}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-gold">
                  Explorar solución
                  <HiArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </TransitionLink>
            );
          })}
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section aria-labelledby="destacados-title" className="border-y border-white/10 bg-plum">
        <div className="mx-auto w-[min(100%-2rem,72rem)] py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="destacados-title" className="max-w-[16ch] text-3xl font-semibold tracking-tight text-cream sm:text-5xl">
              Proyectos que se pueden <span className="text-coral/90">explorar.</span>
            </h2>
            <TransitionLink href="/work" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-gold hover:translate-x-0.5 transition-transform">
              Todos los proyectos <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </TransitionLink>
          </div>
          <div data-motion="stagger" className="mt-10 grid gap-5 sm:grid-cols-2">
            {PROJECTS.slice(0, 2).map((project) => (
              <article data-motion-item="" key={project.id} className="group overflow-hidden rounded-2xl border border-white/12 bg-abyss transition-colors hover:border-magenta/60">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Proyecto ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#1c0a18]/95 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                    {project.category}
                  </span>
                </div>
                <div className="space-y-2 p-6">
                  <h3 className="text-lg font-bold text-cream transition-colors group-hover:text-gold">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-haze">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BANDA DE CONTACTO con Aurora */}
      <section aria-labelledby="banda-title" className="relative overflow-hidden">
        <NeonBackdrop kind="aurora" className="opacity-60" />
        <div className="relative mx-auto w-[min(100%-2rem,72rem)] py-16 sm:py-24">
          <div className="rounded-2xl border border-white/12 bg-abyss/70 p-8 text-center backdrop-blur-xl sm:p-12">
            <h2 id="banda-title" className="mx-auto max-w-[22ch] text-2xl font-bold text-cream sm:text-4xl">
              ¿Una idea, un flujo manual o una herramienta que se quedó corta?
            </h2>
            <p className="mx-auto mt-3 max-w-[54ch] text-haze">
              Agenda una conversación inicial. Sin compromisos ni tecnicismos innecesarios.
            </p>
            <div className="mt-7">
              <CtaBand
                title="Cuéntanos el desafío"
                text="Te respondemos por el canal que prefieras: formulario, email o WhatsApp."
                action="Contar el desafío"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
