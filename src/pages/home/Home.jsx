
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navar/Navbar";
import Servicios from "../services/Services";
import Trabajos from "../jobs/Jobs";
import Contacto from "../contact/Contact";
import Vision from "../aboutUs/Vision";
import Mision from "../aboutUs/Mision";
import ImagenesApp from "../../assets/ImagenesApp";
import Chat from "../../components/chat/Chat";
import Somos from "../aboutUs/Somos";
import "./Inicio.css";
import ProcessSteps from "../processSteps/ProcessSteps";

function Inicio() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

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
        }
      });
    };

    const generateRain = () => {
      const rainContainer = document.querySelector(".color-rain");
      for (let i = 0; i < 100; i++) {
        const drop = document.createElement("div");
        drop.className = "rain-drop";
        drop.style.left = Math.random() * 100 + "%";
        drop.style.animationDuration = Math.random() * 2 + 3 + "s";
        drop.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        rainContainer.appendChild(drop);
      }
    };

    handleScroll();
    generateRain();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="color-rain"></div>
      <section id="inicio" className="inicio">
        <div className="contenido">
          <Navbar />
          <div className="fila">
            <div className="col scroll-effect">
              <h2>Soluciones web personalizadas.</h2>
              <p>
                Creamos soluciones tecnológicas personalizadas, con un enfoque
                especializado en
                <span className="highlight"> Inteligencia Artificial (IA)</span>.
              </p>
              <button
                className="btn btn-1"
                onClick={() =>
                  openWhatsApp(
                    "62982552",
                    "Hola, estoy interesado en conocer más sobre sus servicios."
                  )
                }
              >
                CONTÁCTANOS
              </button>
            </div>
            <div className="col">
              <div className="contenedor-img">
                <img
                  src={ImagenesApp.inicio}
                  alt="Inicio"
                  className="responsive-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Somos />
      <Vision />
      <Mision />
      <ProcessSteps />
      <Servicios />
      <Trabajos />
      {/* <Chat /> */}
      
      <Contacto />
    </>
  );
}

export default Inicio;