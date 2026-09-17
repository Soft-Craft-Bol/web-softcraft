import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import ServiceSlider from '../../components/ServiceSlider';

const Services = () => {
  return (
    <div className="content-page services-page py-12 lg:py-20 min-h-[calc(100dvh-5rem)] flex flex-col justify-between">
      {/* Encabezado */}
      <section className="page-section page-intro-section" aria-labelledby="services-title">
        <div className="site-container page-heading-split">
          <h1 id="services-title" className="section-title">
            Servicios técnicos para que tu operación gane <span className="accent">precisión.</span>
          </h1>
          <div className="space-y-4">
            <p className="lead text-base sm:text-lg text-[var(--sc-muted)] leading-relaxed">
              Una solución de software puede iniciar en una plataforma web, una automatización de procesos o una consulta analítica de datos. Definimos la arquitectura junto a ti.
            </p>
            <Link href="/contact" className="text-link inline-flex items-center gap-1.5 font-semibold text-[var(--sc-accent)] hover:text-[var(--sc-accent-hot)]">
              <span>Cuéntanos qué necesitas</span>
              <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Catálogo interactivo de servicios */}
      <section className="page-section service-section py-12 lg:py-16" aria-labelledby="service-catalog-title">
        <div className="site-container">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--sc-line)]">
            <h2 id="service-catalog-title" className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              Líneas de servicio
            </h2>
            <span className="text-xs sm:text-sm text-[var(--sc-faint)] font-medium">
              Problema · Qué incluye · Beneficio directo
            </span>
          </div>
          <ServiceSlider />
        </div>
      </section>

      {/* Franja CTA */}
      <section className="page-section service-cta-section pt-8">
        <div className="site-container service-cta-grid flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)]">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              ¿No tienes certeza de cuál servicio encaja mejor?
            </h2>
            <p className="text-sm text-[var(--sc-muted)]">
              Es completamente normal. La primera sesión técnica sirve para diagnosticar el problema antes de elegir la tecnología.
            </p>
          </div>
          <Link href="/contact" className="button-primary flex-shrink-0">
            <span>Iniciar diagnóstico</span>
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
