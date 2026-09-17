import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import Folio from '../../components/Folio';
import ServiceSlider from '../../components/ServiceSlider';

const Services = () => (
  <div className="content-page" data-ink="magenta">
    <Folio section="Servicios" />

    <section className="page-intro" aria-labelledby="services-title">
      <div className="site-container page-heading ink-plate">
        <h1 id="services-title" className="page-title">
          Servicios para que tu operación tenga mejor señal.
        </h1>
        <div className="page-aside">
          <p className="lead">
            Una solución puede empezar en una pantalla, un flujo, una automatización o una
            conversación. El punto de partida se define contigo.
          </p>
          <Link href="/contact" className="text-link">
            Cuéntanos qué necesitas <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    <section className="panel service-panel" aria-labelledby="service-list-title">
      <div className="site-container">
        <header className="section-head">
          <h2 id="service-list-title" className="section-title">
            Explora la oferta
          </h2>
          <p className="section-meta">Siete líneas · tres preguntas por servicio</p>
        </header>
        <ServiceSlider />
      </div>
    </section>

    <section className="panel cta-panel">
      <div className="site-container cta-panel-inner">
        <h2 className="section-title">¿No sabes cuál encaja todavía?</h2>
        <p className="body-measure">
          Está bien. La primera conversación sirve para ordenar el problema antes de elegir una
          solución.
        </p>
        <Link href="/contact" className="button-primary">
          Abrir conversación <HiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
