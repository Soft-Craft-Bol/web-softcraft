import type { Metadata } from "next";
import { HiExclamationTriangle, HiStar } from "react-icons/hi2";
import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonios | SoftCraft Bolivia",
  description:
    "Voces en revisión. Contenido ilustrativo, no constituye aval comercial.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageIntro
        title={<>Voces que están en <span className="text-gold">revisión.</span></>}
        lead="Esta sección muestra el diseño con contenido ilustrativo. Los testimonios reales los aporta el dueño y no se usan con fines comerciales hasta entonces."
        linkHref="/contact"
        linkLabel="Ser el próximo caso"
      />
      <div className="mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">
        <p role="note" className="flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/5 p-4 text-sm text-cream">
          <HiExclamationTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
          <span>
            <strong className="font-bold">Aviso:</strong> citas de ejemplo en revisión.
            No constituyen aval comercial ni resultados verificados.
          </span>
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <figure key={item.name} className="flex flex-col justify-between gap-5 rounded-2xl border border-white/12 bg-panel p-7 transition-colors hover:border-rose/50">
              <div>
                <div aria-label="Contenido de ejemplo" className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <HiStar key={star} aria-hidden="true" className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-cream">
                  “{item.quote}”
                </blockquote>
              </div>
              <figcaption className="border-t border-white/10 pt-4">
                <p className="text-sm font-bold text-cream">{item.name}</p>
                <p className="text-xs text-haze">
                  {item.role} · {item.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12">
          <CtaBand
            title="¿Construimos una historia que contar?"
            text="Los mejores testimonios nacen de procesos bien acompañados."
            action="Iniciar mi proyecto"
          />
        </div>
      </div>
    </>
  );
}
