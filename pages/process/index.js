import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import ProcessSlider from '../../components/ProcessSlider';

const Process = () => {
  return (
    <div className="content-page process-page py-12 lg:py-20 min-h-[calc(100dvh-5rem)] flex flex-col justify-between">
      {/* Encabezado */}
      <section className="page-section page-intro-section" aria-labelledby="process-title">
        <div className="site-container page-heading-split">
          <h1 id="process-title" className="section-title">
            Una metodología clara que mantiene la comunicación <span className="accent">abierta.</span>
          </h1>
          <div className="space-y-4">
            <p className="lead text-base sm:text-lg text-[var(--sc-muted)] leading-relaxed">
              De la primera pregunta al despliegue y soporte, cada fase transforma incertidumbres técnicas en entregas funcionales, medibles y compartidas.
            </p>
            <Link href="/contact" className="text-link inline-flex items-center gap-1.5 font-semibold text-[var(--sc-accent)] hover:text-[var(--sc-accent-hot)]">
              <span>Iniciar con una conversación</span>
              <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Las 6 etapas del proceso */}
      <section className="page-section process-section py-12 lg:py-16" aria-labelledby="process-journey-title">
        <div className="site-container">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--sc-line)]">
            <h2 id="process-journey-title" className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              La ruta metodológica
            </h2>
            <span className="text-xs sm:text-sm text-[var(--sc-faint)] font-medium">
              6 etapas · Claridad · Acompañamiento
            </span>
          </div>
          <ProcessSlider />
        </div>
      </section>

      {/* Franja de transparencia */}
      <section className="page-section process-note-section pt-8">
        <div className="site-container process-note-grid flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)]">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              El alcance se define con rigor y honestidad.
            </h2>
            <p className="text-sm text-[var(--sc-muted)]">
              Si durante el desarrollo identificamos una alternativa más eficiente, la ponemos sobre la mesa de inmediato.
            </p>
          </div>
          <Link href="/contact" className="button-primary flex-shrink-0">
            <span>Conversar requerimientos</span>
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
