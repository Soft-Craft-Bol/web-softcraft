import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from 'react-icons/rx';

const serviceData = [
  {
    title: 'Desarrollo Web',
    icon: RxDesktop,
    problem: 'Necesitas una presencia o un sistema web alineado con tu negocio.',
    includes: 'Arquitectura de contenido, interfaz y desarrollo web.',
    benefit: 'Una experiencia digital clara para visitantes y equipos.',
  },
  {
    title: 'Apps Móviles',
    icon: RxPencil2,
    problem: 'La experiencia de tus usuarios necesita llegar al contexto móvil.',
    includes: 'Diseño de flujo, desarrollo móvil y acompañamiento inicial.',
    benefit: 'Una solución pensada para el día a día del usuario.',
  },
  {
    title: 'Software a Medida',
    icon: RxCrop,
    problem: 'Las herramientas genéricas no reflejan la forma real de trabajar.',
    includes: 'Comprensión del problema, flujos, desarrollo y ajustes según alcance.',
    benefit: 'Un producto construido alrededor de tu operación.',
  },
  {
    title: 'Inteligencia Artificial',
    icon: RxRocket,
    problem: 'Tienes tareas repetitivas o información difícil de procesar manualmente.',
    includes: 'Exploración del caso, integración de IA y revisión de uso responsable.',
    benefit: 'Claridad para decidir dónde la IA sí aporta valor.',
  },
  {
    title: 'Automatización',
    icon: RxReader,
    problem: 'Un proceso manual tiene demasiados pasos y poca visibilidad.',
    includes: 'Mapeo del flujo, automatización de tareas y validación del recorrido.',
    benefit: 'Un proceso más ordenado y fácil de seguir.',
  },
  {
    title: 'DevOps e Infraestructura',
    icon: RxDesktop,
    problem: 'Tus entornos y despliegues necesitan orden y continuidad.',
    includes: 'Configuración, despliegue y acompañamiento técnico según alcance.',
    benefit: 'Una base preparada para operar y evolucionar.',
  },
  {
    title: 'Soporte Técnico',
    icon: RxPencil2,
    problem: 'Un sistema necesita mantenimiento, atención y mejoras después de publicar.',
    includes: 'Mantenimiento, asistencia y mejoras continuas.',
    benefit: 'Acompañamiento para que la solución siga siendo útil.',
  },
];

const ServiceSlider = () => {
  return (
    <div className="service-catalog">
        {serviceData.map((item, index) => {
          const Icon = item.icon;

          return (
              <details className="service-entry" key={item.title} open={index === 0}>
                <summary className="service-slide-head">
                  <span className="service-icon" aria-hidden="true"><Icon /></span>
                  <h3>{item.title}</h3>
                  <span className="service-expand" aria-hidden="true">+</span>
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
                  <div className="service-fact service-fact-accent">
                    <span>Te acerca a</span>
                    <p>{item.benefit}</p>
                  </div>
                </div>
              </details>
          );
        })}
    </div>
  );
};

export default ServiceSlider;
