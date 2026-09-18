import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
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
        quiet
      />
      <section aria-labelledby="process-steps-title" className="border-y border-white/10 bg-abyss">
        <div className="mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <h2 id="process-steps-title" className="text-2xl font-semibold tracking-tight text-cream sm:text-4xl">
              Cada paso deja una señal visible.
            </h2>
            <p className="mt-3 max-w-[55ch] leading-relaxed text-haze">
              El recorrido se adapta al alcance, pero nunca desaparece la conversación sobre las decisiones importantes.
            </p>
          </div>

          <ol className="border-y border-white/10">
            {PROCESS.map((step) => (
              <li key={step.number} className="grid gap-5 border-b border-white/10 py-7 last:border-b-0 sm:grid-cols-[5rem_1fr_0.72fr] sm:gap-8 sm:py-9">
                <p aria-hidden="true" className="font-mono text-3xl font-bold text-magenta/70 sm:text-4xl">
                  {step.number}
                </p>
                <div>
                  <h3 className="text-xl font-bold text-cream">{step.title}</h3>
                  <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-haze">{step.description}</p>
                </div>
                <div className="border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">Qué puedes esperar</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream">{step.expect}</p>
                </div>
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
