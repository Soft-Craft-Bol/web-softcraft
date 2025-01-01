import React, { useEffect } from "react";
import "./mision.css";

const Mision = () => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".container-content");
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add("in-view");
        element.classList.remove("out-view");
      } else {
        element.classList.add("out-view");
        element.classList.remove("in-view");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-mision">
      <div className="opasity">
        <div className="container-content">
          <h1>Nuestra misión</h1>
          <p>
            Empoderar a las empresas con herramientas tecnológicas de vanguardia
            para optimizar sus procesos, <br /> tomar decisiones informadas y alcanzar
            sus objetivos estratégicos, <br /> proporcionando un servicio excepcional
            basado en la calidad, la innovación y la adaptación a las
            necesidades específicas de cada cliente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mision;
