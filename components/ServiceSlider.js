import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from 'react-icons/rx';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import usePrefersReducedMotion from './usePrefersReducedMotion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const serviceData = [
  {
    title: 'Desarrollo Web',
    icon: RxDesktop,
    problem: 'Necesitas una presencia o un sistema web alineado con tu negocio.',
    includes: 'Arquitectura de contenido, interfaz y desarrollo web.',
    benefit: 'Una experiencia digital clara para visitantes y equipos.',
  },
  {
    title: 'Apps Móviles',
    icon: RxPencil2,
    problem: 'La experiencia de tus usuarios necesita llegar al contexto móvil.',
    includes: 'Diseño de flujo, desarrollo móvil y acompañamiento inicial.',
    benefit: 'Una solución pensada para el día a día del usuario.',
  },
  {
    title: 'Software a Medida',
    icon: RxCrop,
    problem: 'Las herramientas genéricas no reflejan la forma real de trabajar.',
    includes: 'Comprensión del problema, flujos, desarrollo y ajustes según alcance.',
    benefit: 'Un producto construido alrededor de tu operación.',
  },
  {
    title: 'Inteligencia Artificial',
    icon: RxRocket,
    problem: 'Tienes tareas repetitivas o información difícil de procesar manualmente.',
    includes: 'Exploración del caso, integración de IA y revisión de uso responsable.',
    benefit: 'Claridad para decidir dónde la IA sí aporta valor.',
  },
  {
    title: 'Automatización',
    icon: RxReader,
    problem: 'Un proceso manual tiene demasiados pasos y poca visibilidad.',
    includes: 'Mapeo del flujo, automatización de tareas y validación del recorrido.',
    benefit: 'Un proceso más ordenado y fácil de seguir.',
  },
  {
    title: 'DevOps e Infraestructura',
    icon: RxDesktop,
    problem: 'Tus entornos y despliegues necesitan orden y continuidad.',
    includes: 'Configuración, despliegue y acompañamiento técnico según alcance.',
    benefit: 'Una base preparada para operar y evolucionar.',
  },
  {
    title: 'Soporte Técnico',
    icon: RxPencil2,
    problem: 'Un sistema necesita mantenimiento, atención y mejoras después de publicar.',
    includes: 'Mantenimiento, asistencia y mejoras continuas.',
    benefit: 'Acompañamiento para que la solución siga siendo útil.',
  },
];

const ServiceSlider = () => {
  const reducedMotion = usePrefersReducedMotion();
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;

    if (reducedMotion) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  }, [reducedMotion]);

  return (
    <div className="service-slider-shell" data-gsap-reveal>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Keyboard, A11y]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={18}
        breakpoints={{
          640: { slidesPerView: 1.35, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1100: { slidesPerView: 3, spaceBetween: 28 },
        }}
        autoplay={reducedMotion ? false : {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{
          containerMessage: 'Carrusel de servicios de SoftCraft',
          itemRoleDescriptionMessage: 'servicio',
          slideLabelMessage: 'Servicio {{index}} de {{slidesLength}}',
          prevSlideMessage: 'Servicio anterior',
          nextSlideMessage: 'Siguiente servicio',
          paginationBulletMessage: 'Ir al servicio {{index}}',
        }}
        loop
        className="sc-swiper service-swiper !pb-14"
      >
        {serviceData.map((item) => {
          const Icon = item.icon;

          return (
            <SwiperSlide key={item.title} className="h-auto">
              <article className="service-card">
                <div className="service-slide-head">
                  <span className="service-icon" aria-hidden="true"><Icon /></span>
                  <h3>{item.title}</h3>
                </div>
                <div className="service-facts">
                  <div className="service-fact">
                    <span>Resuelve</span>
                    <p>{item.problem}</p>
                  </div>
                  <div className="service-fact">
                    <span>Incluye</span>
                    <p>{item.includes}</p>
                  </div>
                  <div className="service-fact service-fact-accent">
                    <span>Te acerca a</span>
                    <p>{item.benefit}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
