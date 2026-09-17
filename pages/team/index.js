import Link from 'next/link';
import { HiArrowUpRight, HiLockClosed } from 'react-icons/hi2';

const teamTracks = [
  {
    code: '01',
    title: 'Dirección de producto',
    description: 'Conecta la conversación del negocio con una ruta de solución comprensible.',
  },
  {
    code: '02',
    title: 'Ingeniería y diseño',
    description: 'Convierte el problema en flujos, interfaces y sistemas que se puedan usar.',
  },
  {
    code: '03',
    title: 'Acompañamiento técnico',
    description: 'Ayuda a que la solución se despliegue, se mantenga y siga aprendiendo.',
  },
];

const Team = () => {
  return (
    <div className="content-page team-page">
      <section className="page-section page-intro-section" aria-labelledby="team-title">
        <div className="site-container page-heading-split">
          <h1 id="team-title" className="section-title">Personas reales detrás de un trabajo <span className="accent">conversado.</span></h1>
          <p className="lead">La información del equipo real será publicada cuando esté validada por SoftCraft. Mientras tanto, esta página muestra la estructura de capacidades que el proyecto puede activar.</p>
        </div>
      </section>

      <section className="page-section page-section-tight team-section" aria-labelledby="team-list-title">
        <div className="site-container">
          <div className="team-honest-note"><HiLockClosed aria-hidden="true" /><p><strong>Estado:</strong> fichas reales pendientes de confirmación del dueño.</p></div>
          <div className="section-label-row"><h2 id="team-list-title">Estructura de muestra</h2><span>no son nombres ni perfiles publicados</span></div>
          <div className="team-ledger">
            {teamTracks.map((item) => (
              <article className="team-row" key={item.code}>
                <span className="team-code">{item.code}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
                <span className="team-status">Ficha de muestra</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section team-cta-section">
        <div className="site-container team-cta-inner">
          <h2 className="section-title">El equipo se conoce mejor en la conversación.</h2>
          <Link href="/contact" className="button-primary">Conocer el proyecto <HiArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
