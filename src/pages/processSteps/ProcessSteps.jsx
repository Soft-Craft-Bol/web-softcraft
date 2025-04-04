import React from "react";
import "./ProcessSteps.css";
const steps = [
  {
    title: "CONTÁCTANOS",
    step: "Paso",
    number: 1,
    description:
      "El primer paso es conocerte y entender tus necesidades. Nos interesa saber qué quieres lograr, cuáles son tus objetivos y qué problemas buscas resolver. Te ofrecemos una consulta inicial donde analizaremos las posibilidades, discutiremos ideas y exploraremos la mejor estrategia para avanzar. ",
  },
  {
    title: "HABLA CON EXPERTOS",
    step: "Paso",
    number: 2,
    description:
      "Una vez que tenemos una idea clara de tu proyecto, te conectamos con nuestros especialistas. Contamos con un equipo de expertos en diversas áreas que analizarán los detalles técnicos, operativos y estratégicos para garantizar un enfoque sólido. ",
  },
  {
    title: "ESTRATÉGIA",
    step: "Paso",
    number: 3,
    description:
      "Antes de comenzar con la ejecución, realizamos un estudio profundo para validar la viabilidad de tu proyecto. Analizamos factores clave como la demanda, competencia, costos operativos y requisitos tecnológicos. Elaboramos un plan detallado que incluye los pasos a seguir, la asignación de recursos y un cronograma estructurado.",
  },
  {
    title: "DESARROLLO",
    step: "Paso",
    number: 4,
    description:
      "Con una estrategia bien definida, nuestro equipo inicia la fase de desarrollo. Aquí es donde damos vida a tu proyecto, asegurando que cada elemento se construya con precisión y calidad. Implementamos metodologías ágiles para optimizar tiempos, mantener flexibilidad y permitir ajustes en el proceso.",
  },
  
];

const ProcessSteps = () => {
  return (
    <section className="process-section">
      <h1 className="process-title">Nuestro Proceso de Trabajo</h1>
      <p className="process-subtitle">
        Te acompañamos en cada etapa del desarrollo, asegurando claridad, eficiencia y resultados de calidad.
      </p>
      <div className="container">
        {steps.map((item, index) => (
          <div key={index} className="step-box">
            <h3>{item.title}</h3>
            <h2>{item.step}</h2>
            <h1>{item.number}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
