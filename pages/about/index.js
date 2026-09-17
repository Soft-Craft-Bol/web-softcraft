import Link from 'next/link';
import { HiArrowUpRight, HiCheck } from 'react-icons/hi2';

const capabilities = [
  ['Web y móvil', 'Experiencias claras para personas y equipos.'],
  ['Software a medida', 'Flujos construidos alrededor de la operación real.'],
  ['IA y automatización', 'Integraciones con un uso comprensible y responsable.'],
  ['Infraestructura y soporte', 'Continuidad técnica después de publicar.'],
];

const About = () => {
  return (
    <div className="content-page about-page">
      <section className="page-section page-intro-section" aria-labelledby="about-title">
        <div className="site-container page-heading-split about-heading">
          <h1 id="about-title" className="section-title">No hacemos tecnología por <span className="accent">inercia.</span></h1>
          <p className="lead">SoftCraft Bolivia acompaña a empresas, negocios y personas que necesitan convertir una idea o una fricción de trabajo en una solución digital posible.</p>
        </div>
      </section>

      <section className="page-section page-section-tight about-statement-section">
        <div className="site-container about-layout">
          <div className="about-statement">
            <span className="about-statement-mark" aria-hidden="true">SC / 01</span>
            <p className="statement-quote">La herramienta correcta empieza cuando el problema está bien escuchado.</p>
            <p>Por eso trabajamos desde la conversación, hacemos visibles las decisiones y dejamos espacio para que la solución evolucione con el uso.</p>
          </div>
          <div className="capability-ledger">
            <div className="section-label-row"><h2>Capacidades</h2><span>lo que podemos poner en la mesa</span></div>
            {capabilities.map(([title, description]) => (
              <div className="capability-row" key={title}>
                <HiCheck aria-hidden="true" />
                <div><h3>{title}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section about-values-section">
        <div className="site-container values-grid">
          <div><span className="value-index">A</span><h2>Entender antes de construir.</h2><p>La claridad del problema guía el alcance y evita agregar complejidad sin propósito.</p></div>
          <div><span className="value-index">B</span><h2>Mostrar el trabajo.</h2><p>Los avances, las preguntas y los cambios forman parte de la colaboración.</p></div>
          <div><span className="value-index">C</span><h2>Acompañar después.</h2><p>La publicación abre una etapa nueva; el soporte mantiene el sistema vivo.</p></div>
        </div>
      </section>

      <section className="page-section about-cta-section">
        <div className="site-container about-cta-inner">
          <h2 className="section-title">Trae una pregunta, no un brief perfecto.</h2>
          <Link href="/contact" className="button-primary">Contáctanos <HiArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
};

export default About;
