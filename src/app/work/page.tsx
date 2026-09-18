import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { PROJECTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos | SoftCraft Bolivia",
  description:
    "Proyectos de SoftCraft: fintech, visualización inmersiva, CRM inteligente y plataformas web.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Proyectos para mirar de cerca"
        variant="projects"
        title={<>Proyectos que convierten ideas en <span className="text-magenta">herramientas útiles.</span></>}
        lead="Mira cómo pensamos, diseñamos y aterrizamos soluciones para distintas formas de trabajar."
        linkHref="/contact"
        linkLabel="Hablemos de algo parecido"
      />
      <div className="mx-auto w-[min(100%-2rem,72rem)] space-y-14 py-14 sm:py-20">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          const flip = index % 2 === 1;
          return (
            <article
              key={project.id}
              aria-labelledby={`${project.id}-title`}
              className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-12 ${flip ? "" : ""}`}
            >
              <div className={`relative overflow-hidden rounded-2xl border border-white/12 ${flip ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={`Proyecto ${project.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority={index === 0}
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
                </div>
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#1c0a18]/95 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                  <Icon aria-hidden="true" className="h-3.5 w-3.5" /> {project.category}
                </span>
                <span aria-hidden="true" className="absolute bottom-3 right-5 font-mono text-5xl font-bold text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={flip ? "lg:order-1" : ""}>
                <h2 id={`${project.id}-title`} className="text-2xl font-bold tracking-tight text-cream sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-3 max-w-[54ch] leading-relaxed text-haze">{project.description}</p>
                <p className="mt-4 border-l-2 border-magenta pl-4 text-sm text-cream">
                  <strong className="font-bold">Valor clave: </strong>
                  {project.impact}
                </p>
                <ul aria-label={`Tecnologías de ${project.title}`} className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-md border border-white/12 bg-panel px-2.5 py-1 font-mono text-[0.72rem] text-haze">
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-gold transition-transform hover:translate-x-0.5"
                >
                  Conversar solución <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
        <CtaBand
          title="¿Tienes algo parecido en mente?"
          text="Trae referencias, bocetos o solo la idea. Lo estructuramos juntos."
          action="Presentar mi caso"
        />
      </div>
    </>
  );
}
