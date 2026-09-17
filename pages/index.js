import Link from 'next/link';
import { HiArrowDown, HiArrowUpRight, HiCheck, HiPlay } from 'react-icons/hi2';
import ParticlesContainer from '../components/ParticlesContainer';

const servicePreview = [
  ['01', 'Software a medida', 'Cuando la herramienta genérica no entiende tu operación.'],
  ['02', 'IA aplicada', 'Cuando hay tareas repetitivas y preguntas que merecen una mejor interfaz.'],
  ['03', 'Acompañamiento', 'Cuando publicar es solo el comienzo de una solución útil.'],
];

const processPreview = [
  'Conversación inicial',
  'Análisis y asesoría',
  'Desarrollo revisable',
  'Soporte y mejora',
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-glow" aria-hidden="true" />
        <div className="home-particle-field" aria-hidden="true">
          <ParticlesContainer />
        </div>
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <h1 id="home-title" className="display-title">
              El software debe <span className="accent">entender</span> tu forma de trabajar.
            </h1>
            <p className="lead">
              Convertimos ideas y problemas de operación en soluciones digitales a medida, con IA solo cuando realmente aporta valor.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button-primary">
                Contáctanos <HiArrowUpRight aria-hidden="true" />
              </Link>
              <Link href="/work" className="button-secondary">
                Ver proyectos <HiPlay aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-proof" aria-label="Cómo trabaja SoftCraft">
              <span><HiCheck aria-hidden="true" /> A medida</span>
              <span><HiCheck aria-hidden="true" /> Integral</span>
              <span><HiCheck aria-hidden="true" /> Conversado</span>
            </div>
          </div>

          <Link href="/about" className="hero-signature">
            <span>Ideas propias.<br />Código a tu medida.</span>
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <Link href="#recorrido" className="home-scroll-cue" aria-label="Bajar al recorrido">
          <span>ver el recorrido</span><HiArrowDown aria-hidden="true" />
        </Link>
      </section>

      <section id="recorrido" className="page-section home-signal-section">
        <div className="site-container">
          <div className="section-lead-row">
            <h2 className="section-title">De la fricción a un sistema que <span className="accent">respira.</span></h2>
            <p className="body-measure">No empezamos por la tecnología. Empezamos por la conversación que hace visible el problema y nos ayuda a construir una respuesta posible.</p>
          </div>
          <div className="signal-list" aria-label="Principios de trabajo">
            {servicePreview.map(([number, title, description]) => (
              <Link href="/services" key={number} className="signal-row">
                <h3>{title}</h3>
                <p>{description}</p>
                <HiArrowUpRight className="signal-arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-tight home-process-section">
        <div className="site-container home-process-layout">
          <div>
            <h2 className="section-title">Una ruta visible para no perderse en el <span className="accent-hot">proyecto.</span></h2>
            <p className="body-measure">Cada etapa deja algo que se puede mirar, conversar y ajustar. El objetivo es que la solución nunca se sienta como una caja negra.</p>
            <Link href="/process" className="text-link">Conocer el proceso <HiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <ol className="process-rail">
            {processPreview.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section home-contact-band">
        <div className="site-container contact-band-inner">
          <p>¿Tienes una idea, una herramienta que se quedó corta o un proceso que pide orden?</p>
          <Link href="/contact" className="button-primary">Contáctanos <HiArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
