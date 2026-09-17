import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import Folio from '../../components/Folio';

const team = [
  {
    name: 'Ana Villarroel',
    role: 'Dirección de producto',
    photo: '/t-avt-2.png',
    focus: 'Conecta lo que el negocio necesita con una ruta de solución entendible.',
    swatch: 'yellow',
  },
  {
    name: 'Diego Mercado',
    role: 'Ingeniería y diseño',
    photo: '/avatar.png',
    focus: 'Convierte el problema en flujos, interfaces y sistemas que se puedan usar.',
    swatch: 'coral',
  },
  {
    name: 'Camila Rojas',
    role: 'Acompañamiento técnico',
    photo: '/t-avt-3.png',
    focus: 'Deja la solución desplegada, cuidada y con espacio para seguir mejorando.',
    swatch: 'magenta',
  },
];

const promises = [
  ['Las mismas personas', 'Quien conversa el problema es quien construye y quien acompaña.'],
  ['Decisiones visibles', 'Cada cambio de rumbo se explica antes de tocar el código.'],
  ['Trabajo revisable', 'Avances que se pueden abrir, probar y discutir en cualquier momento.'],
  ['Soporte después', 'La publicación no cierra el proyecto: abre la etapa del cuidado.'],
];

const Team = () => (
  <div className="content-page" data-ink="orange">
    <Folio section="Equipo" />

    <section className="page-intro" aria-labelledby="team-title">
      <div className="site-container page-heading ink-plate">
        <h1 id="team-title" className="page-title">
          Un equipo pequeño para una conversación larga.
        </h1>
        <div className="page-aside">
          <p className="lead">
            Trabajamos pocos proyectos a la vez. Eso permite que la misma persona que entiende tu
            problema sea la que lo resuelve y la que responde cuando algo cambia.
          </p>
        </div>
      </div>
    </section>

    <section className="panel team-panel" aria-labelledby="team-list-title">
      <div className="site-container">
        <header className="section-head">
          <h2 id="team-list-title" className="section-title">
            Quiénes están detrás
          </h2>
          <p className="section-meta">Tres roles · un solo hilo de trabajo</p>
        </header>

        <ul className="team-grid">
          {team.map((member) => (
            <li className="team-card" key={member.name}>
              <div className="team-portrait">
                <Image src={member.photo} alt={`Retrato de ${member.name}`} width={640} height={800} />
              </div>
              <span className={`swatch swatch--${member.swatch}`} aria-hidden="true" />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-focus">{member.focus}</p>
            </li>
          ))}
        </ul>

        <ul className="promise-list">
          {promises.map(([title, description]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="panel cta-panel">
      <div className="site-container cta-panel-inner">
        <h2 className="section-title">El equipo se conoce mejor en la conversación.</h2>
        <Link href="/contact" className="button-primary">
          Conocer el proyecto <HiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);

export default Team;
