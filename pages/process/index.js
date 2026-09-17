import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import Folio from '../../components/Folio';
import ProcessSlider from '../../components/ProcessSlider';

const Process = () => (
  <div className="content-page" data-ink="red">
    <Folio section="Proceso" />

    <section className="page-intro" aria-labelledby="process-title">
      <div className="site-container page-heading page-heading--mirrored ink-plate">
        <h1 id="process-title" className="page-title">
          Un proceso que mantiene la conversación encendida.
        </h1>
        <div className="page-aside">
          <p className="lead">
            De la primera pregunta al soporte, cada etapa traduce incertidumbre en una decisión visible
            y compartida.
          </p>
          <Link href="/contact" className="text-link">
            Empezar por una conversación <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    <section className="panel stage-panel" aria-labelledby="stage-list-title">
      <div className="site-container">
        <header className="section-head">
          <h2 id="stage-list-title" className="section-title">
            La ruta completa
          </h2>
          <p className="section-meta">De la señal inicial al cuidado continuo</p>
        </header>
        <ProcessSlider />
      </div>
    </section>

    <section className="panel note-panel">
      <div className="site-container note-grid">
        <p className="body-measure">
          El alcance se conversa con honestidad. Si una etapa cambia, la decisión también se vuelve
          visible.
        </p>
        <Link href="/contact" className="text-link">
          Conversar el contexto <HiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);

export default Process;
