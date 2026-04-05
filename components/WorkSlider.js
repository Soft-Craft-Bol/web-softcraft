// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

// next image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// data
const workSlides = {
  slides: [
    {
      images: [
        { title: 'Sistema Web Empresarial', path: '/thumb1.jpg' },
        { title: 'App Móvil', path: '/thumb2.jpg' },
        { title: 'Plataforma IA', path: '/thumb3.jpg' },
        { title: 'Dashboard', path: '/thumb4.jpg' },
      ],
    },
    {
      images: [
        { title: 'E-commerce', path: '/thumb4.jpg' },
        { title: 'Landing Page', path: '/thumb1.jpg' },
        { title: 'Sistema Interno', path: '/thumb2.jpg' },
        { title: 'Automatización', path: '/thumb3.jpg' },
      ],
    },
  ],
};

const WorkSlider = () => {
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
        pagination={{ clickable: true }}
        className='pb-10'
      >
        {workSlides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            
            {/* GRID */}
            <div className='grid grid-cols-2 gap-4'>
              {slide.images.map((item, i) => (
                <div
                  key={i}
                  className='relative group overflow-hidden rounded-xl'
                >
                  {/* imagen */}
                  <Image
                    src={item.path}
                    alt={item.title}
                    width={500}
                    height={300}
                    className='object-cover w-full h-[140px] sm:h-[180px] xl:h-[200px] group-hover:scale-110 transition-all duration-300'
                  />

                  {/* overlay */}
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center'>
                    <p className='text-white text-sm font-semibold text-center px-2'>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default WorkSlider;