import Image from 'next/image';

const workSlides = [
  {
    title: 'Portfolio de desarrollo',
    image: '/thumb1.jpg',
    description: 'Una referencia visual de portfolio que presenta una identidad profesional y una selección de proyectos.',
    focus: 'Arquitectura de información y recorrido principal.',
  },
  {
    title: 'Experiencias de realidad virtual',
    image: '/thumb2.jpg',
    description: 'Una referencia de sitio web para explorar contenidos y experiencias de realidad virtual.',
    focus: 'Exploración visual, jerarquía y descubrimiento de contenidos.',
  },
  {
    title: 'Landing de producto financiero',
    image: '/thumb3.jpg',
    description: 'Una referencia de presentación web de un producto de criptomonedas. Las cifras de la imagen pertenecen a la muestra, no a SoftCraft.',
    focus: 'Organización de información y presentación de un producto.',
  },
  {
    title: 'Portfolio de diseño',
    image: '/thumb4.jpg',
    description: 'Una referencia de portfolio creativo con proyectos visuales y presentación de servicios.',
    focus: 'Selección de trabajos, composición y recorrido de contacto.',
  },
];

const WorkSlider = () => {
  return (
    <div className="work-slider-shell">
      <div className="work-gallery">
        {workSlides.map((item) => (
            <article className="work-slide" key={item.title}>
              <div className="work-image-wrap">
                <Image
                  src={item.image}
                  alt={`Vista de muestra: ${item.title}`}
                  width={900}
                  height={620}
                  className="work-image"
                />
                <span className="demo-stamp">Demo / ejemplo</span>
              </div>
              <div className="work-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="work-focus">
                  <span>Foco de la pieza</span>
                  <strong>{item.focus}</strong>
                </div>
              </div>
            </article>
        ))}
      </div>
      <p className="slider-note">Estas piezas muestran posibilidades de diseño; no representan resultados comerciales publicados.</p>
    </div>
  );
};

export default WorkSlider;
