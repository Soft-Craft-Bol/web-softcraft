import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import WorkSlider from '../../components/WorkSlider';

const Work = () => {
  return (
    <div className="content-page work-page py-12 lg:py-20 min-h-[calc(100dvh-5rem)] flex flex-col justify-between">
      {/* Encabezado con proporciones armónicas */}
      <section className="page-section page-intro-section" aria-labelledby="work-title">
        <div className="site-container page-heading-split">
          <h1 id="work-title" className="section-title">
            Soluciones diseñadas para resolver desafíos <span className="accent">reales.</span>
          </h1>
          <div className="space-y-4">
            <p className="lead text-base sm:text-lg text-[var(--sc-muted)] leading-relaxed">
              Una selección de plataformas web, aplicaciones interactivas y arquitecturas de software construidas con foco en escalabilidad, experiencia de usuario y solidez técnica.
            </p>
            <Link href="/contact" className="text-link inline-flex items-center gap-1.5 font-semibold text-[var(--sc-accent)] hover:text-[var(--sc-accent-hot)]">
              <span>Conversar sobre tu proyecto</span>
              <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid del portafolio */}
      <section className="page-section work-section py-12 lg:py-16" aria-labelledby="work-gallery-title">
        <div className="site-container">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--sc-line)]">
            <h2 id="work-gallery-title" className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              Casos destacados
            </h2>
            <span className="text-xs sm:text-sm text-[var(--sc-faint)] font-medium">
              Arquitectura · Experiencia · Inteligencia Artificial
            </span>
          </div>
          <WorkSlider />
        </div>
      </section>

      {/* Franja CTA */}
      <section className="page-section work-cta-section pt-8">
        <div className="site-container page-cta work-cta-inner flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)]">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              ¿Tu desafío operativo puede ser el próximo desarrollo?
            </h2>
            <p className="text-sm text-[var(--sc-muted)]">
              Evaluamos la viabilidad técnica y te proponemos una hoja de ruta clara.
            </p>
          </div>
          <Link href="/contact" className="button-primary flex-shrink-0">
            <span>Contar el contexto</span>
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;
