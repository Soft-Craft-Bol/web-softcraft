// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay]);

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// data
const processData = [
  {
    number: '01',
    title: 'Entendimiento',
    description:
      'Nos enfocamos en conocer tu negocio, tus objetivos y los desafíos que deseas resolver para ofrecerte la mejor solución.',
  },
  {
    number: '02',
    title: 'Análisis y Asesoría',
    description:
      'Evaluamos tu proyecto desde un enfoque técnico y estratégico para definir la mejor forma de desarrollarlo.',
  },
  {
    number: '03',
    title: 'Planificación Estratégica',
    description:
      'Diseñamos un plan detallado con tiempos, recursos y alcance del proyecto, asegurando claridad y viabilidad.',
  },
  {
    number: '04',
    title: 'Desarrollo',
    description:
      'Construimos tu solución utilizando metodologías ágiles, garantizando calidad, flexibilidad y resultados eficientes.',
  },
  {
    number: '05',
    title: 'Implementación',
    description:
      'Ponemos en marcha el sistema y realizamos pruebas para asegurar su correcto funcionamiento.',
  },
  {
    number: '06',
    title: 'Soporte y Mejora Continua',
    description:
      'Te acompañamos después del lanzamiento con soporte, mantenimiento y mejoras constantes.',
  },
];

const ProcessSlider = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='w-full'
    >
      <Swiper
        spaceBetween={20}
        pagination={{ 
            clickable: true,
            renderBullet: (index, className) => {
                return `<span class="${className} w-3 h-3 bg-white/50 rounded-full mx-1"></span>`;
            },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className='pb-12'
      >
        {processData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className='
                bg-white/5 border border-white/10 rounded-2xl
                p-6 min-h-[280px]
                backdrop-blur-md
                flex flex-col justify-between
                hover:bg-white/10 transition-all duration-300
                group
              '
            >
              <div>
                <div className='text-4xl font-extrabold text-accent mb-4 group-hover:scale-110 transition-all duration-300'>
                  {item.number}
                </div>
                <div className='w-12 h-[2px] bg-accent mb-4'></div>
                <h3 className='text-xl font-semibold mb-3'>
                  {item.title}
                </h3>

                <p className='text-white/70 leading-relaxed text-sm'>
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProcessSlider;