import { useState } from 'react';
import Link from 'next/link';
import { HiArrowUpRight, HiChatBubbleLeftRight, HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  project: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Escribe tu nombre para continuar.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Escribe un correo electrónico.';
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = 'Revisa el formato del correo electrónico.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Cuéntanos brevemente qué quieres resolver.';

    setErrors(nextErrors);
  };

  return (
    <div className="content-page contact-page">
      <section className="page-section page-intro-section" aria-labelledby="contact-title">
        <div className="site-container page-heading-split">
          <h1 id="contact-title" className="section-title">La primera solución puede ser una <span className="accent">conversación.</span></h1>
          <p className="lead">Cuéntanos qué está pasando. Este formulario es visual por ahora; también puedes escribirnos directamente por correo o WhatsApp.</p>
        </div>
      </section>

      <section className="page-section page-section-tight contact-section">
        <div className="site-container contact-layout">
          <div className="contact-info">
            <div className="section-label-row"><h2>Canales abiertos</h2><span>responde SoftCraft Bolivia</span></div>
            <div className="contact-details">
              <a href="mailto:softcraft2024@gmail.com" className="contact-detail">
                <HiEnvelope aria-hidden="true" /><span><small>Correo</small>softcraft2024@gmail.com</span><HiArrowUpRight aria-hidden="true" />
              </a>
              <a href="tel:+59171486093" className="contact-detail">
                <HiPhone aria-hidden="true" /><span><small>Teléfono</small>+591 71486093</span><HiArrowUpRight aria-hidden="true" />
              </a>
              <a href="https://wa.me/59171486093" className="contact-detail" target="_blank" rel="noreferrer">
                <HiChatBubbleLeftRight aria-hidden="true" /><span><small>WhatsApp</small>Escribir por WhatsApp</span><HiArrowUpRight aria-hidden="true" />
              </a>
              <div className="contact-detail contact-detail-static">
                <HiMapPin aria-hidden="true" /><span><small>Dirección</small>Cochabamba, Bolivia</span>
              </div>
            </div>
            <p className="contact-aside-note">No necesitas llegar con todo definido. Una buena pregunta también es un buen inicio.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-heading"><h2>Cuéntanos el contexto</h2><p>Los campos con * son necesarios para esta demo visual.</p></div>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Nombre *</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
                {errors.name && <p id="name-error" className="form-error" role="alert">{errors.name}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="email">Correo electrónico *</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
                {errors.email && <p id="email-error" className="form-error" role="alert">{errors.email}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="project">Qué necesitas explorar</label>
                <select id="project" name="project" value={formData.project} onChange={handleChange}>
                  <option value="">Selecciona una línea</option>
                  <option value="web">Desarrollo web</option>
                  <option value="mobile">Apps móviles</option>
                  <option value="software">Software a medida</option>
                  <option value="ia">Inteligencia artificial</option>
                  <option value="automation">Automatización</option>
                  <option value="infra">DevOps e infraestructura</option>
                  <option value="support">Soporte técnico</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Mensaje *</label>
              <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && <p id="message-error" className="form-error" role="alert">{errors.message}</p>}
            </div>
            <div className="form-actions">
              <button type="submit" className="button-primary">Revisar mensaje <HiArrowUpRight aria-hidden="true" /></button>
              <p>El formulario no envía datos ni muestra confirmación todavía.</p>
            </div>
          </form>
        </div>
      </section>

      <section className="page-section contact-final-section">
        <div className="site-container contact-final-inner">
          <p>Si prefieres ir directo:</p>
          <Link href="https://wa.me/59171486093" className="text-link" target="_blank" rel="noreferrer">Abrir WhatsApp <HiArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
