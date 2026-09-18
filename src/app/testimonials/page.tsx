import type { Metadata } from "next";
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
        eyebrow="Experiencias de trabajo"
        variant="testimonials"
        title={<>Lo que dicen quienes ya <span className="text-gold">trabajaron con nosotros.</span></>}
        lead="Cada historia empieza con una forma particular de trabajar y termina con más claridad para avanzar."
        linkHref="/contact"
        linkLabel="Cuéntanos tu caso"
      />
      <div className="mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">

        <div data-motion="stagger" className="mt-8 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <figure data-motion-item="" key={item.name} className="flex flex-col justify-between gap-5 rounded-2xl border border-white/12 bg-gradient-to-br from-panel2 via-panel to-plum p-7 transition-transform hover:-translate-y-1">
              <div>
                <span aria-hidden="true" className="font-serif text-7xl leading-none text-coral/75">“</span>
                <blockquote className="-mt-3 text-[0.95rem] leading-relaxed text-cream">
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
