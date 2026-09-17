import Link from 'next/link';
import { HiArrowDown, HiArrowUpRight } from 'react-icons/hi2';
import InkStrip from '../components/InkStrip';
import RegisterMark from '../components/RegisterMark';

// Cómo llegan los proyectos: primero el problema, después la herramienta.
const startingPoints = [
  ['yellow', 'Una idea sin forma', 'El problema está claro, la solución todavía no.'],
  ['coral', 'Un proceso manual', 'Demasiados pasos y poca visibilidad para decidir.'],
  ['magenta', 'Una herramienta corta', 'El sistema que usas ya no alcanza tu operación.'],
];

const pillars = [
  ['yellow', 'Software a medida', 'Cuando la herramienta genérica no entiende tu operación.'],
  ['coral', 'IA aplicada', 'Cuando hay tareas repetitivas y decisiones que piden mejor información.'],
  ['magenta', 'Acompañamiento', 'Cuando publicar es apenas el comienzo de algo útil.'],
];

const trail = [
  'Conversación inicial',
  'Análisis y asesoría',
  'Desarrollo revisable',
  'Soporte y mejora',
];

const tape = [
  'Software a medida',
  'Automatización',
  'IA aplicada',
  'Web y móvil',
  'Infraestructura',
  'Soporte continuo',
];

const Home = () => (
  <div className="home-page">
    <section className="hero" aria-labelledby="home-title">
      <div className="hero-ink-rail" aria-hidden="true">
        <InkStrip variant="ink-strip--rail" />
      </div>

      <div className="site-container hero-grid">
        <div className="hero-copy">
          <h1 id="home-title" className="hero-title">
            El software debe <em>entender</em> tu forma de trabajar.
          </h1>
          <p className="hero-lead">
            Convertimos ideas y problemas de operación en soluciones digitales a medida, con IA solo
            cuando realmente aporta valor.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="button-primary">
              Contáctanos <HiArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/work" className="button-quiet">
              Ver proyectos <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <aside className="hero-plate">
          <RegisterMark position="tl" />
          <h2 className="hero-plate-title">Tres puntos de partida</h2>
          <ul className="hero-plate-list">
            {startingPoints.map(([swatch, title, description]) => (
              <li key={title}>
                <span className={`swatch swatch--${swatch}`} aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/services" className="text-link">
            Ver las siete líneas <HiArrowUpRight aria-hidden="true" />
          </Link>
        </aside>
      </div>

      <Link href="#recorrido" className="hero-cue">
        <span>Empezar el recorrido</span>
        <HiArrowDown aria-hidden="true" />
      </Link>
    </section>

    <div className="ink-tape" aria-hidden="true">
      <div className="ink-tape-track">
        {[0, 1].map((pass) => (
          <span className="ink-tape-pass" key={pass}>
            {tape.map((word) => (
              <b key={word}>
                <i />
                {word}
              </b>
            ))}
          </span>
        ))}
      </div>
    </div>

    <section id="recorrido" className="panel signals-panel" aria-labelledby="signals-title">
      <div className="site-container">
        <header className="section-head">
          <h2 id="signals-title" className="section-title">
            De la fricción a un sistema que respira.
          </h2>
          <p className="section-note">
            No empezamos por la tecnología. Empezamos por la conversación que hace visible el problema
            y nos ayuda a construir una respuesta posible.
          </p>
        </header>

        <ul className="signal-list">
          {pillars.map(([swatch, title, description]) => (
            <li key={title}>
              <Link href="/services" className="signal">
                <span className={`swatch swatch--${swatch}`} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
                <HiArrowUpRight className="signal-arrow" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="panel trail-panel" aria-labelledby="trail-title">
      <div className="site-container trail-grid">
        <div className="trail-copy">
          <h2 id="trail-title" className="section-title">
            Una ruta visible para no perderse en el proyecto.
          </h2>
          <p className="body-measure">
            Cada etapa deja algo que se puede mirar, conversar y ajustar. El objetivo es que la solución
            nunca se sienta como una caja negra.
          </p>
          <Link href="/process" className="text-link">
            Conocer el proceso <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <ol className="railed">
          {trail.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="cta-band">
      <div className="site-container cta-band-inner">
        <p>¿Tienes una idea, una herramienta que se quedó corta o un proceso que pide orden?</p>
        <Link href="/contact" className="button-primary">
          Contáctanos <HiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
