import TestimonialSlider from '../../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <div className="content-page testimonials-page">
      <section className="page-section page-intro-section" aria-labelledby="testimonials-title">
        <div className="site-container page-heading-split">
          <h1 id="testimonials-title" className="section-title">Historias que se comparten cuando están <span className="accent">listas.</span></h1>
          <p className="lead">Testimonios en revisión. Publicaremos experiencias verificables cuando SoftCraft cuente con autorización y contexto suficiente para compartirlas.</p>
        </div>
      </section>
      <section className="page-section page-section-tight testimonials-section" aria-labelledby="testimonial-slider-title">
        <div className="site-container">
          <div className="section-label-row"><h2 id="testimonial-slider-title">Estado editorial</h2><span>sin uso comercial hasta validar cada historia</span></div>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
