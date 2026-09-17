import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import Folio from '../../components/Folio';
import RegisterMark from '../../components/RegisterMark';

const capabilities = [
  ['Web y móvil', 'Experiencias claras para personas y equipos.'],
  ['Software a medida', 'Flujos construidos alrededor de la operación real.'],
  ['IA y automatización', 'Integraciones con un uso comprensible y responsable.'],
  ['Infraestructura y soporte', 'Continuidad técnica después de publicar.'],
];

const values = [
  ['yellow', 'Entender antes de construir.', 'La claridad del problema guía el alcance y evita agregar complejidad sin propósito.'],
  ['coral', 'Mostrar el trabajo.', 'Los avances, las preguntas y los cambios forman parte de la colaboración.'],
  ['magenta', 'Acompañar después.', 'La publicación abre una etapa nueva; el soporte mantiene el sistema vivo.'],
];

const About = () => (
  <div className="content-page" data-ink="coral">
    <Folio section="Nosotros" />

    <section className="page-intro" aria-labelledby="about-title">
      <div className="site-container page-heading ink-plate">
        <h1 id="about-title" className="page-title">
          No hacemos tecnología por inercia.
        </h1>
        <div className="page-aside">
          <p className="lead">
            SoftCraft Bolivia acompaña a empresas, negocios y personas que necesitan convertir una idea
            o una fricción de trabajo en una solución digital posible.
          </p>
        </div>
      </div>
    </section>

    <section className="panel about-panel" aria-labelledby="about-statement-title">
      <div className="site-container about-grid">
        <figure className="statement-plate">
          <RegisterMark position="tl" />
          <blockquote className="statement-quote">
            «La herramienta correcta empieza cuando el problema está bien escuchado.»
          </blockquote>
          <figcaption>
            Por eso trabajamos desde la conversación, hacemos visibles las decisiones y dejamos espacio
            para que la solución evolucione con el uso.
          </figcaption>
        </figure>

        <div className="capabilities">
          <header className="section-head section-head--stacked">
            <h2 id="about-statement-title" className="section-title section-title--sm">
              Capacidades
            </h2>
            <p className="section-meta">Lo que podemos poner en la mesa</p>
          </header>
          <ul className="capability-list">
            {capabilities.map(([title, description]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="panel values-panel" aria-label="Cómo trabajamos">
      <div className="site-container values-grid">
        {values.map(([swatch, title, description]) => (
          <article className="value" key={title}>
            <span className={`swatch swatch--${swatch}`} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="panel cta-panel">
      <div className="site-container cta-panel-inner">
        <h2 className="section-title">Trae una pregunta, no un plan perfecto.</h2>
        <Link href="/contact" className="button-primary">
          Contáctanos <HiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);

export default About;
