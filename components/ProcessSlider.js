const processData = [
  {
    number: '01',
    title: 'Conversación inicial',
    description: 'Mapeamos objetivos, contexto y preguntas abiertas para entender qué vale la pena resolver.',
    expect: 'Un punto de partida compartido.',
  },
  {
    number: '02',
    title: 'Análisis y asesoría',
    description: 'Leemos el problema desde lo técnico y proponemos alternativas de trabajo posibles.',
    expect: 'Criterio para elegir el siguiente paso.',
  },
  {
    number: '03',
    title: 'Planificación estratégica',
    description: 'Conversamos alcance, prioridades y una ruta que mantenga visibles las decisiones.',
    expect: 'Un mapa de trabajo entendible.',
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Construimos avances revisables y dejamos espacio real para el feedback del proyecto.',
    expect: 'Progreso visible y conversable.',
  },
  {
    number: '05',
    title: 'Implementación',
    description: 'Preparamos la puesta en marcha y verificamos el recorrido según el alcance acordado.',
    expect: 'Una transición acompañada.',
  },
  {
    number: '06',
    title: 'Soporte y mejora continua',
    description: 'Mantenemos, corregimos y mejoramos la solución cuando el uso real abre nuevas preguntas.',
    expect: 'Continuidad después de publicar.',
  },
];

const ProcessSlider = () => (
  <ol className="stage-list">
    {processData.map((item) => (
      <li className="stage" key={item.number}>
        <span className="stage-index" aria-hidden="true">
          {item.number}
        </span>
        <div className="stage-body">
          <h3>
            <span className="sr-only">{`${item.number}. `}</span>
            {item.title}
          </h3>
          <p>{item.description}</p>
        </div>
        <div className="stage-expect">
          <span>Qué puedes esperar</span>
          <strong>{item.expect}</strong>
        </div>
      </li>
    ))}
  </ol>
);

export default ProcessSlider;
