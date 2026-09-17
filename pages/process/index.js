import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import ProcessSlider from '../../components/ProcessSlider';

const Process = () => {
  return (
    <div className="content-page process-page">
      <section className="page-section page-intro-section" aria-labelledby="process-title">
        <div className="site-container page-heading-split">
          <h1 id="process-title" className="section-title">Un proceso que mantiene la conversación <span className="accent">encendida.</span></h1>
          <div>
            <p className="lead">De la primera pregunta al soporte, cada etapa traduce incertidumbre en una decisión visible y compartida.</p>
            <Link href="/contact" className="text-link">Empezar por una conversación <HiArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="page-section page-section-tight process-section" aria-labelledby="process-slider-title">
        <div className="site-container">
          <div className="section-label-row">
            <h2 id="process-slider-title">La ruta completa</h2>
            <span>de la señal inicial al cuidado continuo</span>
          </div>
          <ProcessSlider />
        </div>
      </section>

      <section className="page-section process-note-section">
        <div className="site-container process-note-grid">
          <span className="process-note-mark" aria-hidden="true">→</span>
          <p className="body-measure">El alcance se conversa con honestidad. Si una etapa cambia, la decisión también se vuelve visible.</p>
          <Link href="/contact" className="text-link">Conversar el contexto <HiArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
