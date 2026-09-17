import Image from 'next/image';

const projects = [
  {
    index: '01',
    name: 'Lumen',
    kind: 'Identidad digital y portfolio',
    image: '/thumb1.jpg',
    alt: 'Sitio de Lumen con tarjetas violetas y una composición oscura',
    summary:
      'Una marca que necesitaba mostrar su trabajo sin perder claridad: ordenamos el contenido, construimos el recorrido y dejamos una base fácil de actualizar.',
    focus: 'Arquitectura de información y ritmo del recorrido.',
  },
  {
    index: '02',
    name: 'Cauce',
    kind: 'App de agenda y reservas',
    image: '/thumb2.jpg',
    alt: 'Pantallas de la app Cauce sobre un fondo violeta',
    summary:
      'Un servicio que vivía en mensajes sueltos. El reto fue convertir el día a día del equipo en un flujo con estados visibles y decisiones rápidas.',
    focus: 'Flujos de uso y jerarquía de acciones.',
  },
  {
    index: '03',
    name: 'Orbital',
    kind: 'Sitio de producto y contenidos',
    image: '/thumb3.jpg',
    alt: 'Sitio de Orbital mostrado en laptop y teléfono',
    summary:
      'Presentar un producto técnico a un público que no lo es: simplificamos el relato y dejamos que la propia interfaz explique el valor.',
    focus: 'Narrativa de producto y sistema de componentes.',
  },
  {
    index: '04',
    name: 'Almacén',
    kind: 'Catálogo y pedidos en línea',
    image: '/thumb4.jpg',
    alt: 'Catálogo de Almacén con tarjetas de producto',
    summary:
      'Un negocio que quería vender sin perder el trato cercano: catálogo claro, pedido corto y seguimiento visible para el cliente.',
    focus: 'Interfaz de catálogo y recorrido de pedido.',
  },
];

const WorkSlider = () => (
  <div className="work-gallery">
    {projects.map((project) => (
      <article className="work-piece" key={project.name}>
        <figure className="work-frame">
          <Image src={project.image} alt={project.alt} width={900} height={620} />
          <figcaption>{project.index}</figcaption>
        </figure>
        <div className="work-copy">
          <h3>{project.name}</h3>
          <p className="work-kind">{project.kind}</p>
          <p className="work-summary">{project.summary}</p>
          <dl className="work-focus">
            <dt>Foco de la pieza</dt>
            <dd>{project.focus}</dd>
          </dl>
        </div>
      </article>
    ))}
  </div>
);

export default WorkSlider;
