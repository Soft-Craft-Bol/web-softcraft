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
        title={<>Servicios para que tu operación gane <span className="text-gold">precisión.</span></>}
        lead="Una solución puede iniciar en una plataforma web, una automatización o una consulta de datos. Elige una línea para ver qué problema resuelve, qué incluye y qué beneficio obtienes."
        linkHref="/contact"
        linkLabel="Cuéntanos qué necesitas"
      />
      <div className="mx-auto w-[min(100%-2rem,72rem)] py-14 sm:py-20">
        <ServiceExplorer />
        <div className="mt-12">
          <CtaBand
            title="¿No sabes cuál servicio encaja?"
            text="Normal. La primera sesión sirve para diagnosticar antes de elegir tecnología."
            action="Agendar diagnóstico"
          />
        </div>
      </div>
    </>
  );
}
