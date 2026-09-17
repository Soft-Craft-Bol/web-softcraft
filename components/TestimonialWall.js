const quotes = [
  {
    text: 'Llegamos con una idea a medias y salimos con un sistema que el equipo usa todos los días. Lo mejor fue no sentir que nos vendían una receta.',
    name: 'Marcela Quiroga',
    role: 'Gerente general · Distribuidora Andina',
    project: 'Software a medida',
    swatch: 'yellow',
  },
  {
    text: 'Cada decisión quedó explicada y visible. Eso hizo que pudiéramos opinar sin hablar el idioma técnico.',
    name: 'Luis Ferrufino',
    role: 'Socio · Estudio contable Ferrufino',
    project: 'Automatización',
    swatch: 'coral',
  },
  {
    text: 'El acompañamiento después de publicar fue la diferencia: la herramienta siguió creciendo con el negocio.',
    name: 'Jorge Antezana',
    role: 'Fundador · Transportes Antezana',
    project: 'Soporte continuo',
    swatch: 'magenta',
  },
];

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

const TestimonialWall = () => {
  const [featured, ...rest] = quotes;

  return (
    <div className="quote-wall">
      <figure className="quote-feature">
        <blockquote>«{featured.text}»</blockquote>
        <figcaption className="quote-author">
          <span className={`client-mark swatch--${featured.swatch}`} aria-hidden="true">
            {initials(featured.name)}
          </span>
          <span>
            <strong>{featured.name}</strong>
            <small>{featured.role}</small>
          </span>
          <em>{featured.project}</em>
        </figcaption>
      </figure>

      <div className="quote-grid">
        {rest.map((quote) => (
          <figure className="quote-card" key={quote.name}>
            <blockquote>«{quote.text}»</blockquote>
            <figcaption className="quote-author">
              <span className={`client-mark swatch--${quote.swatch}`} aria-hidden="true">
                {initials(quote.name)}
              </span>
              <span>
                <strong>{quote.name}</strong>
                <small>{quote.role}</small>
              </span>
              <em>{quote.project}</em>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default TestimonialWall;
