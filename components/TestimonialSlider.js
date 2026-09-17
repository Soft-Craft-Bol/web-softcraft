import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    title: 'Experiencia verificable',
    message: 'Este espacio se completará con una experiencia autorizada y el contexto necesario para entenderla.',
  },
  {
    title: 'Contexto del proyecto',
    message: 'Publicaremos qué problema se conversó, qué se construyó y qué aprendió el equipo involucrado.',
  },
  {
    title: 'Resultado compartido',
    message: 'Los resultados solo aparecerán cuando estén confirmados y puedan leerse sin exageraciones.',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-slider-shell">
      <Swiper
        modules={[Pagination, Keyboard, A11y]}
        spaceBetween={24}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        a11y={{ paginationBulletMessage: 'Ir a la nota {{index}}' }}
        loop
        className="sc-swiper testimonial-swiper"
      >
        {testimonialData.map((item, index) => (
          <SwiperSlide key={item.title}>
            <article className="testimonial-slide">
              <div className="testimonial-mark" aria-hidden="true">“</div>
              <p className="testimonial-index">0{index + 1} / en revisión</p>
              <h3>{item.title}</h3>
              <p>{item.message}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
