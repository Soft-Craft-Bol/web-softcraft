import Link from 'next/link';
import { HiArrowUpRight, HiCheck } from 'react-icons/hi2';

const capabilities = [
  {
    title: 'Desarrollo web y aplicaciones móviles',
    description: 'Interfaces veloces, accesibles y consistentes diseñadas para la interacción real de tus usuarios.',
  },
  {
    title: 'Arquitectura de software a medida',
    description: 'Sistemas backend robustos, microservicios y bases de datos modeladas para soportar la operación diaria.',
  },
  {
    title: 'Inteligencia artificial y automatización',
    description: 'Modelos de lenguaje, visión artificial y flujos automatizados con resultados medibles y responsables.',
  },
  {
    title: 'Infraestructura, DevOps y soporte',
    description: 'Despliegues en la nube, monitoreo proactivo y acompañamiento técnico después del lanzamiento.',
  },
];

const coreValues = [
  {
    index: '01',
    title: 'Entender antes de programar',
    description: 'La claridad del desafío orienta la arquitectura. Evitamos agregar complejidad tecnológica sin justificación real.',
  },
  {
    index: '02',
    title: 'Transparencia y entregas continuas',
    description: 'Cada avance, duda técnica o ajuste de alcance se conversa de forma transparente con demos funcionales.',
  },
  {
    index: '03',
    title: 'Acompañamiento post-lanzamiento',
    description: 'La salida a producción es el inicio de la vida útil del sistema. Ofrecemos soporte continuo para mantenerlo vivo y óptimo.',
  },
];

const About = () => {
  return (
    <div className="content-page about-page py-12 lg:py-20 min-h-[calc(100dvh-5rem)] flex flex-col justify-between">
      {/* Encabezado */}
      <section className="page-section page-intro-section" aria-labelledby="about-title">
        <div className="site-container page-heading-split">
          <h1 id="about-title" className="section-title">
            No desarrollamos tecnología por <span className="accent">inercia.</span>
          </h1>
          <div className="space-y-4">
            <p className="lead text-base sm:text-lg text-[var(--sc-muted)] leading-relaxed">
              SoftCraft Bolivia es un estudio de desarrollo de software e ingeniería digital. Ayudamos a empresas, instituciones y fundadores a transformar problemas complejos en herramientas útiles, estables y preparadas para el futuro.
            </p>
            <Link href="/contact" className="text-link inline-flex items-center gap-1.5 font-semibold text-[var(--sc-accent)] hover:text-[var(--sc-accent-hot)]">
              <span>Iniciar conversación</span>
              <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Declaración y Capacidades */}
      <section className="page-section about-statement-section py-12 lg:py-16">
        <div className="site-container about-layout grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="about-statement lg:col-span-5 p-8 sm:p-10 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)] space-y-4">
            <span className="text-xs font-bold text-[var(--sc-accent)] tracking-widest uppercase">
              Filosofía SoftCraft
            </span>
            <p className="statement-quote text-xl sm:text-2xl font-bold text-[var(--sc-ink)] leading-snug">
              La herramienta adecuada nace cuando el problema está profundamente comprendido.
            </p>
            <p className="text-sm sm:text-base text-[var(--sc-muted)] leading-relaxed">
              Trabajamos desde el análisis minucioso, hacemos visibles las decisiones arquitectónicas y construimos interfaces con la artesanía técnica que tu negocio merece.
            </p>
          </div>

          <div className="capability-ledger lg:col-span-7 space-y-4">
            <div className="pb-3 border-b border-[var(--sc-line)]">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">Capacidades técnicas</h2>
              <p className="text-xs sm:text-sm text-[var(--sc-faint)] mt-1">Especialidades a disposición de tu proyecto</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2 text-[var(--sc-accent)]">
                    <HiCheck className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <h3 className="text-base font-bold text-[var(--sc-ink)]">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--sc-muted)] leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principios / Valores */}
      <section className="page-section about-values-section py-12 lg:py-16">
        <div className="site-container">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--sc-ink)]">Cómo entendemos la colaboración</h2>
            <p className="text-sm text-[var(--sc-muted)] mt-2">Criterios fundamentales que guían cada línea de código y cada reunión de trabajo.</p>
          </div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.index}
                className="p-8 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-all space-y-4"
              >
                <span className="inline-block px-3 py-1 text-xs font-mono font-bold rounded bg-[var(--sc-surface-strong)] text-[var(--sc-accent)] border border-[var(--sc-line)]">
                  {val.index}
                </span>
                <h3 className="text-lg font-bold text-[var(--sc-ink)]">{val.title}</h3>
                <p className="text-sm text-[var(--sc-muted)] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franja CTA */}
      <section className="page-section about-cta-section pt-8">
        <div className="site-container about-cta-inner flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)]">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">
              Trae un problema concreto, no un documento perfecto.
            </h2>
            <p className="text-sm text-[var(--sc-muted)]">
              La primera conversación nos permitirá estructurar juntos el camino hacia la solución.
            </p>
          </div>
          <Link href="/contact" className="button-primary flex-shrink-0">
            <span>Conversar con nosotros</span>
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
