import React, { useEffect } from "react";
import Navbar from "../../components/navar/Navbar";
import Servicios from "../services/Services";
import Trabajos from "../jobs/Jobs";
import Contacto from "../contact/Contact";
import Vision from "../aboutUs/Vision";
import Mision from "../aboutUs/Mision";
import ImagenesApp from "../../assets/ImagenesApp";
import Chat from "../../components/chat/Chat";
import "./Inicio.css";
import Somos from "../aboutUs/Somos";

function Inicio() {
  const openWhatsApp = (phone, message) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-effect");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <span className="sombra">
        <section id="inicio" className="inicio">
          <div className="contenido">
            <Navbar />
            <div className="fila">
              <div className="col">
                <h2 className="scroll-effect">Soluciones web personalizadas.</h2>
                <p className="scroll-effect">
                  Creamos soluciones tecnológicas personalizadas, con un enfoque
                  especializado en <span className="highlight">Inteligencia Artificial (IA)</span>
                </p>
                <button
                  className="btn btn-1"
                  onClick={() =>
                    openWhatsApp(
                      "62982552",
                      "Hola, estoy interesado en conocer más sobre sus servicios de desarrollo. ¿Podemos hablar?"
                    )
                  }
                >
                  CONTACTANOS
                </button>
              </div>
              <div className="col">
                <div className="contenedor-img floating-animation">
                  <img src={ImagenesApp.inicio} alt="Inicio" className="responsive-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </span>
      <Somos />
      <Vision />
      <Mision />
      <Servicios />
      <Trabajos />
      <Chat />
      <Contacto />
    </>
  );
}

export default Inicio;
