import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import Folio from '../../components/Folio';
import WorkSlider from '../../components/WorkSlider';

const Work = () => (
  <div className="content-page" data-ink="yellow">
    <Folio section="Proyectos" />

    <section className="page-intro" aria-labelledby="work-title">
      <div className="site-container page-heading ink-plate">
        <h1 id="work-title" className="page-title">
          Proyectos que muestran cómo pensamos el producto.
        </h1>
        <div className="page-aside">
          <p className="lead">
            Cuatro trabajos con problemas distintos. En cada uno importa lo mismo: entender primero,
            construir claro y dejar algo que se pueda mantener.
          </p>
          <Link href="/contact" className="text-link">
            Hablar de tu proyecto <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    <section className="panel work-panel" aria-labelledby="work-list-title">
      <div className="site-container">
        <header className="section-head">
          <h2 id="work-list-title" className="section-title">
            Proyectos
          </h2>
          <p className="section-meta">Cuatro piezas · cuatro contextos</p>
        </header>
        <WorkSlider />
      </div>
    </section>

    <section className="panel cta-panel">
      <div className="site-container cta-panel-inner">
        <h2 className="section-title">Tu problema puede ser la próxima pieza.</h2>
        <Link href="/contact" className="button-primary">
          Cuéntanos la idea <HiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);

export default Work;
