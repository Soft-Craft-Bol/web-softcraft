import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Pagination } from 'swiper';
import { HiStar } from 'react-icons/hi2';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 'carlos-mendoza',
    name: 'Carlos Mendoza',
    role: 'Director de Operaciones',
    company: 'LogisticsHub Latam',
    avatar: '/t-avt-1.png',
    quote:
      'SoftCraft entendió la complejidad de nuestra operación desde la primera reunión. El software a medida que diseñaron y desplegaron redujo nuestros tiempos de despacho en un 40% y nos dio trazabilidad en tiempo real sin fricción para el equipo.',
  },
  {
    id: 'valeria-rocha',
    name: 'Valeria Rocha',
    role: 'Co-Founder & CEO',
    company: 'FinNova Technologies',
    avatar: '/t-avt-2.png',
    quote:
      'Buscábamos un equipo que no solo programara, sino que pensara el producto con nosotros. Su capacidad para combinar inteligencia artificial práctica con una experiencia de usuario impecable transformó la retención de nuestros clientes.',
  },
  {
    id: 'marcelo-quiroga',
    name: 'Ing. Marcelo Quiroga',
    role: 'Gerente de Tecnología',
    company: 'InnovaCorp',
    avatar: '/t-avt-3.png',
    quote:
      'El rigor técnico y la transparencia en cada etapa del desarrollo nos dieron absoluta tranquilidad. La migración de nuestros sistemas legados hacia una arquitectura en la nube fue fluida, sin interrupciones y con un soporte continuo de primer nivel.',
  },
  {
    id: 'sofia-benitez',
    name: 'Sofía Benítez',
    role: 'Directora de Producto',
    company: 'MedConnect Global',
    avatar: '/avatar.png',
    quote:
      'El nivel de atención al detalle y artesanía en cada entrega es extraordinario. Lograron transformar procesos manuales engorrosos en una aplicación intuitiva, ágil y robusta que todo nuestro personal adoptó en cuestión de días.',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-slider-shell">
      <Swiper
        modules={[Pagination, Keyboard, A11y]}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{ enabled: true }}
        a11y={{ paginationBulletMessage: 'Ir al testimonio {{index}}' }}
        loop
        className="sc-swiper testimonial-swiper !pb-14"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id} className="h-auto">
            <article className="flex flex-col justify-between h-full p-8 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-all duration-300 relative group">
              {/* Comillas estilizadas de fondo */}
              <div
                className="absolute top-4 right-6 text-6xl font-serif text-[var(--sc-line-strong)] select-none opacity-40 pointer-events-none group-hover:text-[var(--sc-accent)] group-hover:opacity-30 transition-all"
                aria-hidden="true"
              >
                “
              </div>

              <div className="space-y-4 relative z-10">
                {/* 5 estrellas */}
                <div className="flex items-center gap-1 text-[var(--sc-accent-hot)]" aria-label="5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-[var(--sc-ink)] italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Perfil del cliente */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[var(--sc-line)] relative z-10">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--sc-accent)] flex-shrink-0 bg-[var(--sc-surface-strong)]">
                  <Image
                    src={item.avatar}
                    alt={`Fotografía de ${item.name}`}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--sc-ink)]">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--sc-muted)]">
                    {item.role} · <span className="text-[var(--sc-accent)] font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
