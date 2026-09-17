import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import ServiceSlider from '../../components/ServiceSlider';

const Services = () => {
  return (
    <div className="content-page services-page">
      <section className="page-section page-intro-section" aria-labelledby="services-title">
        <div className="site-container page-heading-split">
          <h1 id="services-title" className="section-title">Servicios para que tu operación tenga <span className="accent">mejor señal.</span></h1>
          <div>
            <p className="lead">Una solución puede empezar en una pantalla, un flujo, una automatización o una conversación. El punto de partida se define contigo.</p>
            <Link href="/contact" className="text-link">Cuéntanos qué necesitas <HiArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="page-section page-section-tight service-section" aria-labelledby="service-slider-title">
        <div className="site-container">
          <div className="section-label-row">
            <h2 id="service-slider-title">Explora la oferta</h2>
            <span>7 líneas / 3 preguntas por servicio</span>
          </div>
          <ServiceSlider />
        </div>
      </section>

      <section className="page-section service-cta-section">
        <div className="site-container service-cta-grid">
          <h2 className="section-title">¿No sabes cuál encaja todavía?</h2>
          <p className="body-measure">Está bien. La primera conversación sirve para ordenar el problema antes de elegir una solución.</p>
          <Link href="/contact" className="button-primary">Abrir conversación <HiArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
