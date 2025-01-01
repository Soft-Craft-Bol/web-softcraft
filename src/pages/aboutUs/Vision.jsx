import React, { useEffect } from "react";
import "./vision.css";

import primaryImage from "./../../assets/img/visionImage1.png";
import secondaryImage from "./../../assets/img/visionImage2.png";
import terniaryImage from "./../../assets/img/visionImage3.png";

const Vision = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".image-vision, .text-vision");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-vision">
      <div className="image-vision">
        <div className="principal-img">
          <img src={primaryImage} alt="Principal" />
        </div>
        <div className="secundary-img">
          <img src={secondaryImage} alt="Secundaria" />
        </div>
        <div className="terniary-img">
          <img src={terniaryImage} alt="Terciaria" />
        </div>
      </div>

      <div className="text-vision">
        <h1>¿Cuál es nuestra visión?</h1>
        <p>
          Convertirnos en una empresa que sea reconocida por la transformación
          digital de empresas, ofreciendo soluciones innovadoras y
          personalizadas que mejoren la eficiencia y productividad a través del
          uso de tecnologías avanzadas como Inteligencia Artificial,
          automatización y desarrollo de software.
        </p>
      </div>
    </div>
  );
};

export default Vision;
