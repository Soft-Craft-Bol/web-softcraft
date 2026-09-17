const serviceData = [
  {
    title: 'Desarrollo Web',
    swatch: 'magenta',
    problem: 'Necesitas una presencia o un sistema web alineado con tu negocio.',
    includes: 'Arquitectura de contenido, interfaz y desarrollo web.',
    benefit: 'Una experiencia digital clara para visitantes y equipos.',
  },
  {
    title: 'Apps Móviles',
    swatch: 'coral',
    problem: 'La experiencia de tus usuarios necesita llegar al contexto móvil.',
    includes: 'Diseño de flujo, desarrollo móvil y acompañamiento inicial.',
    benefit: 'Una solución pensada para el día a día del usuario.',
  },
  {
    title: 'Software a Medida',
    swatch: 'yellow',
    problem: 'Las herramientas genéricas no reflejan la forma real de trabajar.',
    includes: 'Comprensión del problema, flujos, desarrollo y ajustes según alcance.',
    benefit: 'Un producto construido alrededor de tu operación.',
  },
  {
    title: 'Inteligencia Artificial',
    swatch: 'orange',
    problem: 'Tienes tareas repetitivas o información difícil de procesar manualmente.',
    includes: 'Exploración del caso, integración de IA y revisión de uso responsable.',
    benefit: 'Claridad para decidir dónde la IA sí aporta valor.',
  },
  {
    title: 'Automatización',
    swatch: 'red',
    problem: 'Un proceso manual tiene demasiados pasos y poca visibilidad.',
    includes: 'Mapeo del flujo, automatización de tareas y validación del recorrido.',
    benefit: 'Un proceso más ordenado y fácil de seguir.',
  },
  {
    title: 'DevOps e Infraestructura',
    swatch: 'plum',
    problem: 'Tus entornos y despliegues necesitan orden y continuidad.',
    includes: 'Configuración, despliegue y acompañamiento técnico según alcance.',
    benefit: 'Una base preparada para operar y evolucionar.',
  },
  {
    title: 'Soporte Técnico',
    swatch: 'magenta',
    problem: 'Un sistema necesita mantenimiento, atención y mejoras después de publicar.',
    includes: 'Mantenimiento, asistencia y mejoras continuas.',
    benefit: 'Acompañamiento para que la solución siga siendo útil.',
  },
];

const ServiceSlider = () => (
  <div className="service-ledger">
    {serviceData.map((item, index) => (
      <details className="service-row" key={item.title} open={index === 0}>
        <summary className="service-head">
          <span className={`swatch swatch--${item.swatch}`} aria-hidden="true" />
          <h3>{item.title}</h3>
          <span className="service-toggle" aria-hidden="true" />
        </summary>
        <div className="service-facts">
          <div className="service-fact">
            <span>Resuelve</span>
            <p>{item.problem}</p>
          </div>
          <div className="service-fact">
            <span>Incluye</span>
            <p>{item.includes}</p>
          </div>
          <div className="service-fact service-fact--accent">
            <span>Te acerca a</span>
            <p>{item.benefit}</p>
          </div>
        </div>
      </details>
    ))}
  </div>
);

export default ServiceSlider;
