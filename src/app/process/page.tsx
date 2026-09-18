import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import NeonBackdrop from "@/components/NeonBackdrop";
import PageIntro from "@/components/PageIntro";
import { PROCESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proceso | SoftCraft Bolivia",
  description:
    "Seis etapas claras: conversación, análisis, planificación, desarrollo, implementación y soporte continuo.",
};

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        title={<>Una ruta clara, sin <span className="text-gold">caja negra.</span></>}
        lead="Cada etapa entrega algo revisable: criterio, mapa, avances funcionales y continuidad. Siempre sabrás en qué punto está tu proyecto."
        linkHref="/contact"
        linkLabel="Iniciar la conversación"
      />
      <section aria-label="Etapas del proceso" className="relative overflow-hidden">
        <NeonBackdrop kind="threads" className="opacity-40" />
        <div className="relative mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">
          <ol className="relative ml-2 space-y-0 border-l-2 border-white/10 pl-0 sm:ml-6">
            {PROCESS.map((step) => (
              <li key={step.number} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-magenta bg-abyss shadow-[0_0_12px_rgba(255,46,136,0.7)]"
                />
                <article className="grid gap-3 rounded-2xl border border-white/12 bg-abyss/70 p-6 backdrop-blur transition-colors hover:border-magenta/50 sm:p-7 lg:grid-cols-[auto_1fr_1fr] lg:gap-8">
                  <p aria-hidden="true" className="font-mono text-4xl font-bold text-magenta/60 sm:text-5xl">
                    {step.number}
                  </p>
                  <div>
                    <h2 className="text-xl font-bold text-cream">{step.title}</h2>
                    <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-haze">
                      {step.description}
                    </p>
                  </div>
                  <p className="rounded-xl border border-gold/25 bg-gold/5 p-4 text-sm text-cream self-start">
                    <span className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">
                      Qué puedes esperar
                    </span>
                    <span className="mt-1 block">{step.expect}</span>
                  </p>
                </article>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <CtaBand
              title="¿Empezamos por la etapa 01?"
              text="Una conversación inicial sin costo para mapear tu punto de partida."
              action="Agendar conversación"
            />
          </div>
        </div>
      </section>
    </>
  );
}
