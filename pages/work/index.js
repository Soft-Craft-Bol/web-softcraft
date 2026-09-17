import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import WorkSlider from '../../components/WorkSlider';

const Work = () => {
  return (
    <div className="content-page work-page">
      <section className="page-section page-intro-section" aria-labelledby="work-title">
        <div className="site-container page-heading-split">
          <h1 id="work-title" className="section-title">Piezas que muestran cómo pensamos el <span className="accent">producto.</span></h1>
          <div>
            <p className="lead">Una selección visual de demos y escenarios conceptuales. La idea es abrir la conversación, no inventar resultados.</p>
            <Link href="/contact" className="text-link">Hablar de tu proyecto <HiArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="page-section page-section-tight work-section" aria-labelledby="work-slider-title">
        <div className="site-container">
          <div className="section-label-row">
            <h2 id="work-slider-title">Demos seleccionadas</h2>
            <span>piezas de muestra / sin cifras comerciales</span>
          </div>
          <WorkSlider />
        </div>
      </section>

      <section className="page-section work-cta-section">
        <div className="site-container work-cta-inner">
          <h2 className="section-title">Tu problema puede ser la próxima pieza.</h2>
          <Link href="/contact" className="button-primary">Cuéntanos la idea <HiArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Work;
