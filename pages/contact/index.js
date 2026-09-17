import { useState } from 'react';
import Link from 'next/link';
import { HiArrowUpRight, HiChatBubbleLeftRight, HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2';
import Folio from '../../components/Folio';
import RegisterMark from '../../components/RegisterMark';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  project: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WHATSAPP_NUMBER = '59171486093';
const EMAIL = 'softcraft2024@gmail.com';

const projectOptions = [
  ['web', 'Desarrollo web'],
  ['mobile', 'Apps móviles'],
  ['software', 'Software a medida'],
  ['ia', 'Inteligencia artificial'],
  ['automation', 'Automatización'],
  ['infra', 'DevOps e infraestructura'],
  ['support', 'Soporte técnico'],
];

const buildMessage = (data) => {
  const label = projectOptions.find(([value]) => value === data.project);
  return [
    `Hola SoftCraft, soy ${data.name.trim()}.`,
    label ? `Me interesa: ${label[1]}.` : null,
    `Necesito: ${data.message.trim()}`,
    data.phone.trim() ? `Teléfono: ${data.phone.trim()}` : null,
    `Correo: ${data.email.trim()}`,
  ]
    .filter(Boolean)
    .join('\n');
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [links, setLinks] = useState({ whatsapp: '', mail: '' });

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
    const errorFields = Object.keys(nextErrors);
    if (errorFields.length > 0) {
      setStatus('idle');
      // El foco viaja al primer campo con problema para no obligar a buscarlo.
      const field = event.currentTarget.elements[errorFields[0]];
      if (field && field.focus) field.focus();
      return;
    }

    const text = encodeURIComponent(buildMessage(formData));
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    const mailURL = `mailto:${EMAIL}?subject=${encodeURIComponent('Consulta desde la web')}&body=${text}`;

    setLinks({ whatsapp: whatsappURL, mail: mailURL });

    const tab = window.open(whatsappURL, '_blank');
    if (tab) {
      tab.opener = null;
      setStatus('sent');
    } else {
      setStatus('blocked');
    }
  };

  return (
    <div className="content-page" data-ink="plum">
      <Folio section="Contacto" />

      <section className="page-intro" aria-labelledby="contact-title">
        <div className="site-container page-heading ink-plate">
          <h1 id="contact-title" className="page-title">
            La primera solución puede ser una conversación.
          </h1>
          <div className="page-aside">
            <p className="lead">
              Cuéntanos qué está pasando. Respondemos por correo o WhatsApp según te acomode, y la
              primera conversación no tiene compromiso.
            </p>
          </div>
        </div>
      </section>

      <section className="panel contact-panel">
        <div className="site-container contact-grid">
          <div className="channels">
            <header className="section-head section-head--stacked">
              <h2 className="section-title section-title--sm">Canales abiertos</h2>
              <p className="section-meta">Responde SoftCraft Bolivia</p>
            </header>

            <ul className="channel-list">
              <li>
                <a href={`mailto:${EMAIL}`} className="channel">
                  <HiEnvelope aria-hidden="true" />
                  <span>
                    <small>Correo</small>
                    {EMAIL}
                  </span>
                  <HiArrowUpRight aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="tel:+59171486093" className="channel">
                  <HiPhone aria-hidden="true" />
                  <span>
                    <small>Teléfono</small>
                    +591 71486093
                  </span>
                  <HiArrowUpRight aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="channel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HiChatBubbleLeftRight aria-hidden="true" />
                  <span>
                    <small>WhatsApp</small>
                    Escribir por WhatsApp
                  </span>
                  <HiArrowUpRight aria-hidden="true" />
                </a>
              </li>
              <li>
                <p className="channel channel--static">
                  <HiMapPin aria-hidden="true" />
                  <span>
                    <small>Dirección</small>
                    Cochabamba, Bolivia
                  </span>
                </p>
              </li>
            </ul>

            <p className="channel-note">
              No necesitas llegar con todo definido. Una buena pregunta también es un buen inicio.
            </p>
          </div>

          <form className="form-panel" onSubmit={handleSubmit} noValidate>
            <RegisterMark position="tr" />
            <header className="form-head">
              <h2>Cuéntanos el contexto</h2>
              <p>Los campos con * son necesarios.</p>
            </header>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Nombre *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="field-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="field-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="project">Qué necesitas explorar</label>
                <select id="project" name="project" value={formData.project} onChange={handleChange}>
                  <option value="">Selecciona una línea</option>
                  {projectOptions.map(([value, label]) => (
                    <option value={value} key={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="field-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="button-primary">
                Enviar mensaje <HiArrowUpRight aria-hidden="true" />
              </button>
              <p className="form-hint">Llega directo a nuestro WhatsApp o correo, sin intermediarios.</p>
            </div>

            {status !== 'idle' ? (
              <div className="form-status" role="status">
                <h3>Tu mensaje está listo</h3>
                <p>
                  {status === 'sent'
                    ? 'Abrimos WhatsApp con el mensaje preparado. Envíalo desde ahí y queda en nuestra conversación.'
                    : 'Tu navegador bloqueó la ventana nueva. Ábrela desde aquí y el mensaje irá completo.'}
                </p>
                <div className="form-status-actions">
                  <a className="button-secondary" href={links.whatsapp} target="_blank" rel="noreferrer">
                    Abrir WhatsApp <HiArrowUpRight aria-hidden="true" />
                  </a>
                  <a className="button-quiet" href={links.mail}>
                    Enviar por correo <HiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </section>

      <section className="panel note-panel">
        <div className="site-container note-grid">
          <p className="body-measure">¿Prefieres ir directo? Escríbenos por WhatsApp y seguimos ahí.</p>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            Abrir WhatsApp <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
