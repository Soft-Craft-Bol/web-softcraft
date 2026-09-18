import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import TestimonialSlider from '../../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <div className="content-page testimonials-page py-12 lg:py-20 min-h-[calc(100dvh-5rem)] flex flex-col justify-between">
      {/* Encabezado */}
      <section className="page-section page-intro-section" aria-labelledby="testimonials-title">
        <div className="site-container page-heading-split">
          <h1 id="testimonials-title" className="section-title">
            Historias de impacto y colaboración <span className="accent">continua.</span>
          </h1>
          <div className="space-y-4">
            <p className="lead text-base sm:text-lg text-[var(--sc-muted)] leading-relaxed">
              La confianza de nuestros clientes se construye entregando código confiable, comunicación transparente y soluciones diseñadas exactamente a la medida de sus operaciones.
            </p>
            <Link href="/contact" className="text-link inline-flex items-center gap-1.5 font-semibold text-[var(--sc-accent)] hover:text-[var(--sc-accent-hot)]">
              <span>Construir tu historia con nosotros</span>
              <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Carrusel de testimonios */}
      <section className="page-section testimonials-section py-12 lg:py-16" aria-labelledby="testimonial-slider-title">
        <div className="site-container">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--sc-line)]">
            <h2 id="testimonial-slider-title" className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              Experiencias compartidas
            </h2>
            <span className="text-xs sm:text-sm text-[var(--sc-faint)] font-medium">
              Operaciones · Innovación · Soporte
            </span>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Franja CTA */}
      <section className="page-section testimonials-cta-section pt-8">
        <div className="site-container page-cta testimonials-cta-inner flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)]">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              ¿Listo para convertir tu proceso en una experiencia exitosa?
            </h2>
            <p className="text-sm text-[var(--sc-muted)]">
              Conversemos sobre tus metas y cómo alcanzarlas con software bien construido.
            </p>
          </div>
          <Link href="/contact" className="button-primary flex-shrink-0">
            <span>Hablemos de tu proyecto</span>
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
