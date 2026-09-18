import Link from 'next/link';
import { HiArrowDown, HiArrowUpRight, HiCheck, HiPlay } from 'react-icons/hi2';
import ParticlesContainer from '../components/ParticlesContainer';

const servicePreview = [
  {
    number: '01',
    title: 'Software a medida',
    description: 'Arquitectura concebida exactamente para la escala y flujos específicos de tu operación.',
  },
  {
    number: '02',
    title: 'IA aplicada',
    description: 'Automatización inteligente y procesamiento de lenguaje para tareas repetitivas y análisis de datos.',
  },
  {
    number: '03',
    title: 'Acompañamiento continuo',
    description: 'Soporte técnico, monitoreo de infraestructura y evolución constante post-despliegue.',
  },
];

const processPreview = [
  'Conversación inicial & entendimiento del negocio',
  'Análisis técnico, arquitectura y asesoría de alcance',
  'Desarrollo iterativo con entregas funcionales revisables',
  'Despliegue en producción, soporte y mejora continua',
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero principal de pantalla completa */}
      <section className="home-hero min-h-[calc(100dvh-5rem)] flex flex-col justify-center relative overflow-hidden" aria-labelledby="home-title">
        <div className="home-hero-glow" aria-hidden="true" />
        <div className="home-particle-field" aria-hidden="true">
          <ParticlesContainer />
        </div>

        <div className="site-container hero-layout relative z-10 py-12 md:py-16">
          <div className="hero-copy max-w-2xl space-y-6">
            <h1 id="home-title" className="display-title font-extrabold tracking-tight">
              El software debe <span className="accent">entender</span> tu forma de trabajar.
            </h1>
            <p className="lead text-lg md:text-xl text-[var(--sc-muted)] leading-relaxed">
              Transformamos desafíos operativos e ideas estratégicas en soluciones digitales de alto rendimiento, integrando inteligencia artificial solo donde genera valor tangible.
            </p>

            <div className="hero-actions flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="button-primary">
                <span>Contáctanos</span>
                <HiArrowUpRight aria-hidden="true" />
              </Link>
              <Link href="/work" className="button-secondary">
                <span>Ver proyectos</span>
                <HiPlay aria-hidden="true" />
              </Link>
            </div>

            <div className="hero-proof flex flex-wrap gap-6 pt-4 text-sm font-medium text-[var(--sc-muted)]" aria-label="Cómo trabaja SoftCraft">
              <span className="flex items-center gap-1.5"><HiCheck className="text-[var(--sc-accent)]" aria-hidden="true" /> A medida</span>
              <span className="flex items-center gap-1.5"><HiCheck className="text-[var(--sc-accent)]" aria-hidden="true" /> Rigor técnico</span>
              <span className="flex items-center gap-1.5"><HiCheck className="text-[var(--sc-accent)]" aria-hidden="true" /> Soporte continuo</span>
            </div>
          </div>

          <Link href="/about" className="hero-signature group">
            <span>Ideas estratégicas.<br />Código a tu medida.</span>
            <HiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
          </Link>
        </div>

        <Link href="#recorrido" className="home-scroll-cue" aria-label="Bajar al recorrido">
          <span>Ver propuesta</span>
          <HiArrowDown aria-hidden="true" />
        </Link>
      </section>

      {/* Recorrido de soluciones */}
      <section id="recorrido" className="page-section home-signal-section py-20 lg:py-28">
        <div className="site-container">
          <div className="section-lead-row mb-12">
            <h2 className="section-title">
              De la fricción operativa a un sistema que <span className="accent">respira.</span>
            </h2>
            <p className="body-measure text-base md:text-lg text-[var(--sc-muted)] leading-relaxed mt-4">
              No empezamos por la tecnología como un fin en sí mismo. Iniciamos por la conversación analítica que hace visible el problema real y diseña la solución más eficiente para tu equipo.
            </p>
          </div>

          <div className="signal-list grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Principios de trabajo">
            {servicePreview.map((service) => (
              <Link
                href="/services"
                key={service.number}
                className="signal-row group flex flex-col justify-between p-8 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-all duration-300"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[var(--sc-accent)] tracking-widest">{service.number}</span>
                  <h3 className="text-xl font-bold text-[var(--sc-ink)] group-hover:text-[var(--sc-accent)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--sc-muted)]">{service.description}</p>
                </div>
                <div className="pt-6 flex justify-end">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--sc-line)] text-[var(--sc-ink)] group-hover:border-[var(--sc-accent)] group-hover:text-[var(--sc-accent)] transition-colors">
                    <HiArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso en síntesis */}
      <section className="page-section page-section-tight home-process-section py-20 lg:py-24 bg-[var(--sc-bg-soft)]">
        <div className="site-container home-process-layout grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="section-title">
              Una ruta clara para no perderse en el <span className="accent-hot">proyecto.</span>
            </h2>
            <p className="body-measure text-base md:text-lg text-[var(--sc-muted)] leading-relaxed">
              Cada etapa entrega artefactos funcionales que se pueden revisar, validar y calibrar. El desarrollo de software nunca debe sentirse como una caja negra.
            </p>
            <div>
              <Link href="/process" className="text-link inline-flex items-center gap-2 font-semibold text-[var(--sc-accent)] hover:text-[var(--sc-accent-hot)]">
                <span>Conocer el proceso completo</span>
                <HiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="process-rail space-y-4">
              {processPreview.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-5 p-5 rounded-xl border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-colors"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm font-bold bg-[var(--sc-surface-strong)] text-[var(--sc-accent)] border border-[var(--sc-line)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <strong className="text-sm sm:text-base font-semibold text-[var(--sc-ink)]">{item}</strong>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Franja de contacto final */}
      <section className="page-section home-contact-band py-16">
        <div className="site-container page-cta contact-band-inner flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl border border-[var(--sc-line)] bg-[var(--sc-surface)]">
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--sc-ink)]">
              ¿Tienes una idea, un flujo manual o una herramienta que se quedó corta?
            </h2>
            <p className="text-[var(--sc-muted)] text-sm sm:text-base">
              Agenda una conversación inicial con nosotros. Sin compromisos ni tecnicismos innecesarios.
            </p>
          </div>
          <Link href="/contact" className="button-primary flex-shrink-0">
            <span>Contar el desafío</span>
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
