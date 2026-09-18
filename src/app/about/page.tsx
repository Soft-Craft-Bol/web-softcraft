import type { Metadata } from "next";
import { HiCheck } from "react-icons/hi2";
import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { CAPABILITIES, VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros | SoftCraft Bolivia",
  description:
    "Estudio de software e ingeniería digital en Cochabamba: capacidades, filosofía y criterios de colaboración.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title={<>No desarrollamos tecnología por <span className="text-rose/90">inercia.</span></>}
        lead="SoftCraft Bolivia es un estudio de desarrollo de software e ingeniería digital. Ayudamos a empresas, instituciones y fundadores a transformar problemas complejos en herramientas útiles y estables."
        linkHref="/contact"
        linkLabel="Presentar un desafío"
      />
      <div className="mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <blockquote data-motion="reveal" data-motion-direction="left" className="rounded-2xl border border-magenta/40 bg-gradient-to-b from-panel2 to-plum p-8 shadow-[0_0_40px_rgba(255,46,136,0.15)] sm:p-10">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-rose">
              Filosofía SoftCraft
            </p>
            <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-cream sm:text-3xl">
              “La herramienta adecuada nace cuando el problema está profundamente comprendido.”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-haze">
              Trabajamos desde el análisis minucioso, hacemos visibles las decisiones arquitectónicas
              y construimos interfaces con la artesanía que tu negocio merece.
            </p>
          </blockquote>

          <div>
            <h2 className="text-xl font-bold text-cream sm:text-2xl">Capacidades técnicas</h2>
            <p className="mt-1 text-sm text-dim">Especialidades a disposición de tu proyecto</p>
            <ul data-motion="stagger" className="mt-5 grid gap-4 sm:grid-cols-2">
              {CAPABILITIES.map((item) => (
                <li data-motion-item="" key={item.title} className="rounded-xl border border-white/12 bg-panel p-5 transition-colors hover:border-coral/60">
                  <h3 className="flex items-center gap-2 text-[0.95rem] font-bold text-cream">
                    <HiCheck aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-coral" />
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.83rem] leading-relaxed text-haze">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-cream sm:text-3xl">Cómo entendemos la colaboración</h2>
          <p className="mt-2 text-sm text-haze">Criterios que guían cada línea de código y cada reunión.</p>
          <ol data-motion="stagger" className="mt-8 grid gap-5 md:grid-cols-3">
            {VALUES.map((value) => (
              <li data-motion-item="" key={value.index} className="relative rounded-2xl border border-white/12 bg-panel p-7 transition-colors hover:border-gold/50">
                <span aria-hidden="true" className="font-mono text-4xl font-bold text-magenta/50">
                  {value.index}
                </span>
                <h3 className="mt-3 text-lg font-bold text-cream">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-haze">{value.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12">
          <CtaBand
            title="Trae un problema concreto, no un documento perfecto."
            text="La primera conversación nos permite estructurar juntos el camino."
            action="Definir el siguiente paso"
          />
        </div>
      </div>
    </>
  );
}
