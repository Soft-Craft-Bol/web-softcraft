import React, { useState, useEffect } from 'react';
import './Servicios.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomModal from './CustomModal';
import frontend from "../../../src/assets/img/frontend.jpg";
import backend from "../../assets/img/backend.jpg";
import mobileDev from "../../assets/img/mobileDev.jpg";
import ai from "../../assets/img/inteligenciaArtificial.jpg";
import devOps from "../../assets/img/devops.jpg";
import techSupport from "../../assets/img/techSupport.jpg";

function Servicios() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: [], images: [] });

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const handleShowModal = (event, title, content, images) => {
        event.preventDefault();
        setModalContent({ title, content, images });
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const services = [
        {
            title: "Desarrollo Frontend",
            img: frontend,
            description:
                "Crea una primera impresión inolvidable con nuestros diseños web personalizados. Desarrollamos interfaces intuitivas y atractivas que reflejan la identidad de tu marca. En Softcraft, nuestra prioridad es convertir tus ideas en experiencias digitales únicas y confiables."
        },
        {
            title: "Desarrollo Backend",
            img: backend,
            description:
                "Dale vida a tu aplicación con nuestro desarrollo backend sólido y escalable. Optimizamos el rendimiento de tu servidor para garantizar una experiencia fluida. Confía en Softcraft para construir la base tecnológica que tu negocio necesita para crecer."
        },
        {
            title: "Desarrollo Móvil",
            img: mobileDev,
            description:
                "Llega a millones de usuarios con nuestras apps móviles nativas e híbridas. Adaptamos soluciones a iOS y Android para que tu negocio esté siempre al alcance de tus clientes. En Softcraft, trabajamos para materializar tu visión móvil con la máxima calidad."
        },
        {
            title: "Inteligencia Artificial",
            img: ai,
            description:
                "Automatiza procesos y optimiza operaciones con soluciones de IA personalizadas. Alcanzarás nuevos niveles de eficiencia y descubrirás oportunidades únicas. Softcraft es tu aliado de confianza para implementar tecnología de vanguardia."
        },
        {
            title: "DevOps",
            img: devOps,
            description:
                "Automatiza flujos de trabajo con prácticas DevOps avanzadas. Mejora tus tiempos de entrega y la calidad del software mientras reduces riesgos. En Softcraft, integramos soluciones que impulsan tu productividad con plena confianza."
        },
        {
            title: "Servicio Técnico",
            img: techSupport,
            description:
                "Ofrecemos soporte técnico integral, desde la resolución de problemas hasta mantenimiento preventivo, para asegurar tu infraestructura. Confía en Softcraft para mantener tus sistemas funcionando de manera eficiente y confiable."
        }
    ];
    
    return (
        <section id="servicios" className="servicios">
            <h1 className="title">Servicios</h1>
            <div className="fila">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="col"
                        data-aos="fade-up"
                    >
                        <div className="card">
                            <div className="img-container">
                                <img src={service.img} alt={service.title} className="image-card" />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <CustomModal
                show={showModal}
                onClose={handleCloseModal}
                title={modalContent.title}
                content={modalContent.content}
                images={modalContent.images}
            />
        </section>
    );
}

export default Servicios;
