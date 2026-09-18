import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown, HiArrowUpRight, HiCheck, HiPlay } from "react-icons/hi2";
import CtaBand from "@/components/CtaBand";
import NeonBackdrop from "@/components/NeonBackdrop";
import { PROJECTS, SERVICES, TECH_MARQUEE } from "@/lib/site";

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

export default function Home() {
  return (
    <>
      {/* HERO con grafo Galaxy */}
      <section aria-labelledby="home-title" className="relative overflow-hidden border-b border-white/10">
        <NeonBackdrop kind="aurora" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(18,6,15,0.9) 0%, rgba(18,6,15,0.55) 55%, rgba(18,6,15,0.25) 100%), linear-gradient(0deg, rgba(18,6,15,0.5) 0%, transparent 40%)",
          }}
        />

        <div className="relative mx-auto grid w-[min(100%-2rem,72rem)] gap-10 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14">
          <div className="max-w-2xl space-y-6">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-haze backdrop-blur">
              <span aria-hidden="true" className="h-2 w-2 animate-pulse-dot rounded-full bg-magenta" />
              SoftCraft Bolivia · Software a medida e IA aplicada
            </p>
            <h1 id="home-title" className="text-[clamp(2.7rem,7vw,5.2rem)] font-bold leading-[1.02] tracking-tight text-cream">
              El software debe <span className="text-gold">entender</span> tu forma de trabajar.
            </h1>
            <p className="max-w-[52ch] text-base leading-relaxed text-haze sm:text-lg">
              Transformamos desafíos operativos e ideas estratégicas en soluciones digitales de alto
              rendimiento, integrando inteligencia artificial solo donde genera valor tangible.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="btn-shine inline-flex min-h-[52px] items-center gap-2 rounded-lg bg-gradient-to-r from-magenta to-viol px-6 text-sm font-bold text-white shadow-[0_0_26px_rgba(255,46,136,0.4)] transition-transform hover:-translate-y-0.5"
              >
                Contáctanos <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 text-sm font-bold text-cream backdrop-blur transition-colors hover:border-gold/60 hover:text-gold"
              >
                <HiPlay aria-hidden="true" className="h-4 w-4" /> Ver proyectos
              </Link>
            </div>
            <ul aria-label="Cómo trabaja SoftCraft" className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-haze">
              {["A medida", "Rigor técnico", "Soporte continuo"].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <HiCheck aria-hidden="true" className="h-4 w-4 text-gold" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Panel bento: el recorrido, no un dashboard falso */}
          <aside aria-label="Cómo trabajamos" className="rounded-2xl border border-white/12 bg-abyss/60 p-6 backdrop-blur-xl sm:p-7">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim">
              De la idea al soporte
            </p>
            <ol className="mt-4 space-y-1">
              {[
                ["01", "Conversación", "Entendemos el problema real."],
                ["02", "Arquitectura", "Diseño técnico a tu escala."],
                ["03", "Construcción", "Entregas revisables, sin caja negra."],
                ["04", "Soporte", "Acompañamiento post-lanzamiento."],
              ].map(([n, t, d]) => (
                <li key={n} className="flex items-start gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-white/5">
                  <span className="font-mono text-sm font-bold text-magenta">{n}</span>
                  <span>
                    <span className="block text-sm font-bold text-cream">{t}</span>
                    <span className="block text-[0.83rem] text-haze">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
            <Link
              href="/process"
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-gold transition-transform hover:translate-x-0.5"
            >
              Ver el proceso completo <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </aside>
        </div>

        <a
          href="#recorrido"
          aria-label="Bajar al recorrido de servicios"
          className="absolute bottom-4 right-4 hidden min-h-[44px] items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-dim transition-colors hover:text-cream sm:inline-flex lg:right-10"
        >
          Ver propuesta <HiArrowDown aria-hidden="true" className="h-4 w-4 animate-cue text-gold" />
        </a>
      </section>

      {/* MARQUEE de capacidades */}
      <div className="overflow-hidden border-b border-white/10 bg-plum py-3" aria-label="Tecnologías con las que trabajamos">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex gap-10">
              {TECH_MARQUEE.map((tech) => (
                <span key={`${copy}-${tech}`} className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
                  {tech} <span className="ml-8 text-magenta">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* RECORRIDO / SERVICIOS */}
      <section id="recorrido" aria-labelledby="recorrido-title" className="mx-auto w-[min(100%-2rem,72rem)] scroll-mt-24 py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h2 id="recorrido-title" className="max-w-[16ch] text-3xl font-semibold tracking-tight text-cream sm:text-5xl">
            De la fricción operativa a un sistema que <span className="text-coral">respira.</span>
          </h2>
          <p className="max-w-[52ch] leading-relaxed text-haze">
            Iniciamos por la conversación analítica que hace visible el problema real y diseña la
            solución más eficiente para tu equipo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SERVICES.slice(2, 5).map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href="/services"
                className={`group flex min-h-[240px] flex-col justify-between rounded-2xl border border-white/12 bg-panel p-7 transition-all duration-200 hover:-translate-y-1 ${accentBorder[service.accent]} hover:shadow-[0_18px_50px_rgba(255,46,136,0.16)]`}
              >
                <div className="space-y-3">
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 ${accentText[service.accent]}`}>
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-bold text-cream">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-haze">{service.problem}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-gold">
                  Ver en servicios
                  <HiArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section aria-labelledby="destacados-title" className="border-y border-white/10 bg-plum">
        <div className="mx-auto w-[min(100%-2rem,72rem)] py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="destacados-title" className="max-w-[16ch] text-3xl font-semibold tracking-tight text-cream sm:text-5xl">
              Demos que se pueden <span className="text-gold">tocar.</span>
            </h2>
            <Link href="/work" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-gold hover:translate-x-0.5 transition-transform">
              Todos los proyectos <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PROJECTS.slice(0, 2).map((project) => (
              <article key={project.id} className="group overflow-hidden rounded-2xl border border-white/12 bg-abyss transition-colors hover:border-magenta/60">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Proyecto ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#1c0a18]/95 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                    Demo · {project.category}
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
