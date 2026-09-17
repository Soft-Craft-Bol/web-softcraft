import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import Folio from '../../components/Folio';
import TestimonialWall from '../../components/TestimonialWall';

const Testimonials = () => (
  <div className="content-page" data-ink="magenta">
    <Folio section="Testimonios" />

    <section className="page-intro" aria-labelledby="testimonials-title">
      <div className="site-container page-heading ink-plate">
        <h1 id="testimonials-title" className="page-title">
          Lo que cuentan quienes ya trabajaron con nosotros.
        </h1>
        <div className="page-aside">
          <p className="lead">
            Tres conversaciones sobre el mismo recorrido: entender el problema, construir algo usable y
            acompañar después de publicar.
          </p>
        </div>
      </div>
    </section>

    <section className="panel quotes-panel" aria-labelledby="quotes-title">
      <div className="site-container">
        <header className="section-head">
          <h2 id="quotes-title" className="section-title">
            Experiencias
          </h2>
          <p className="section-meta">Tres proyectos · tres formas de trabajar</p>
        </header>
        <TestimonialWall />
      </div>
    </section>

    <section className="panel cta-panel">
      <div className="site-container cta-panel-inner">
        <h2 className="section-title">La próxima historia puede ser la tuya.</h2>
        <Link href="/contact" className="button-primary">
          Contar mi caso <HiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);

export default Testimonials;
