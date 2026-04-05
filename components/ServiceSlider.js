// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

import { SiNotion } from "react-icons/si";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

// activar módulos
SwiperCore.use([Pagination, Autoplay]);

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Desarrollo Web',
    description: 'Creamos sitios y sistemas web rápidos, seguros y escalables.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Apps Móviles',
    description: 'Desarrollamos aplicaciones Android funcionales y modernas.',
  },
  {
    icon: <RxCrop />,
    title: 'Software a Medida',
    description: 'Construimos soluciones personalizadas para tu empresa.',
  },
  {
    icon: <RxRocket />,
    title: 'Inteligencia Artificial',
    description: 'Integramos IA para automatizar y optimizar procesos.',
  },
  {
    icon: <RxReader />,
    title: 'Automatización',
    description: 'Reducimos tareas manuales y mejoramos la eficiencia.',
  },
  {
    icon: <RxDesktop />,
    title: 'DevOps e Infraestructura',
    description: 'Implementamos entornos seguros, estables y escalables.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Soporte Técnico',
    description: 'Brindamos mantenimiento y asistencia continua.',
  },
];

const ServiceSlider = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='w-full '
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={false}
        autoplay={{
          delay: 3000,
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
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className='
                bg-white/5 hover:bg-white/10
                border border-white/10
                rounded-2xl
                p-8
                h-[260px]
                flex flex-col justify-start
                transition-all duration-300
                backdrop-blur-sm
                group
              '
            >
              <div className='text-4xl text-accent mb-4 group-hover:scale-110 transition-all duration-300'>
                {item.icon}
              </div>

              <h3 className='text-lg xl:text-xl font-semibold mb-3'>
                {item.title}
              </h3>

              <p className='text-white/70 leading-relaxed text-sm'>
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ServiceSlider;