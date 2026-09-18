import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import TeamGrid from '../../components/TeamGrid';

const Team = () => {
  return (
    <div className="content-page team-page py-12 lg:py-20 min-h-[calc(100dvh-5rem)] flex flex-col justify-between">
      {/* Encabezado */}
      <section className="page-section page-intro-section" aria-labelledby="team-title">
        <div className="site-container page-heading-split">
          <h1 id="team-title" className="section-title">
            El talento interdisciplinario detrás de cada <span className="accent">solución.</span>
          </h1>
          <div className="space-y-4">
            <p className="lead text-base sm:text-lg text-[var(--sc-muted)] leading-relaxed">
              Combinamos ingeniería de software rigurosa, diseño centrado en el usuario e inteligencia artificial práctica para construir sistemas confiables, veloces y fáciles de operar.
            </p>
            <Link href="/contact" className="text-link inline-flex items-center gap-1.5 font-semibold text-[var(--sc-accent)] hover:text-[var(--sc-accent-hot)]">
              <span>Trabajar con nosotros</span>
              <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid del equipo con fichas completas */}
      <section className="page-section team-section py-12 lg:py-16" aria-labelledby="team-grid-title">
        <div className="site-container">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--sc-line)]">
            <h2 id="team-grid-title" className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              Especialistas y liderazgo técnico
            </h2>
            <span className="text-xs sm:text-sm text-[var(--sc-faint)] font-medium">
              Desarrollo · Diseño · Inteligencia Artificial
            </span>
          </div>
          <TeamGrid />
        </div>
      </section>

      {/* Franja CTA */}
      <section className="page-section team-cta-section pt-8">
        <div className="site-container page-cta team-cta-inner flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)]">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              ¿Listo para sumar nuestro equipo a tu próximo desafío?
            </h2>
            <p className="text-sm text-[var(--sc-muted)]">
              Coordinemos una sesión de trabajo técnico para revisar requerimientos y arquitectura.
            </p>
          </div>
          <Link href="/contact" className="button-primary flex-shrink-0">
            <span>Coordinar una sesión</span>
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
