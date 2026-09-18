import type { Metadata } from "next";
import { HiStar } from "react-icons/hi2";
import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonios | SoftCraft Bolivia",
  description:
    "Lo que dicen los clientes de SoftCraft Bolivia.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageIntro
        title={<>Lo que dicen <span className="text-gold">nuestros clientes.</span></>}
        lead="Relaciones de trabajo que hablan por sí solas. Cada proyecto deja una historia."
        linkHref="/contact"
        linkLabel="Ser el próximo caso"
      />
      <div className="mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <figure key={item.name} className="flex flex-col justify-between gap-5 rounded-2xl border border-white/12 bg-panel p-7 transition-colors hover:border-rose/50">
              <div>
                <div aria-label="Calificación de 5 estrellas" className="flex gap-1 text-gold">
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
