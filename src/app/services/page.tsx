import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import ServiceExplorer from "@/components/ServiceExplorer";

export const metadata: Metadata = {
  title: "Servicios | SoftCraft Bolivia",
  description:
    "Desarrollo web, apps móviles, software a medida, IA, automatización, DevOps y soporte. Problema, qué incluye y beneficio directo.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Soluciones claras para empezar"
        variant="services"
        title={<>Soluciones para que tu negocio avance <span className="text-coral/90">sin tantas vueltas.</span></>}
        lead="Empezamos por entender qué te quita tiempo y elegimos la herramienta que mejor encaja contigo."
        linkHref="/contact"
        linkLabel="Cuéntanos qué te está frenando"
      />
      <div className="mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">
        <ServiceExplorer />
        <div className="mt-12">
          <CtaBand
            title="¿No sabes cuál servicio encaja?"
            text="Normal. Primero entendemos el problema y después vemos qué vale la pena construir."
            action="Hablar de mi problema"
          />
        </div>
      </div>
    </>
  );
}
