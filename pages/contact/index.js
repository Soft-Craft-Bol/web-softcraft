import { useState } from 'react';
import Link from 'next/link';
import {
  HiArrowUpRight,
  HiChatBubbleLeftRight,
  HiEnvelope,
  HiMapPin,
  HiPhone,
} from 'react-icons/hi2';

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

    if (!formData.name.trim()) {
      nextErrors.name = 'Por favor, escribe tu nombre completo.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Por favor, introduce tu correo electrónico.';
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = 'Por favor, revisa el formato de tu correo (ejemplo@dominio.com).';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Por favor, cuéntanos brevemente qué desafío deseas resolver.';
    }

    setErrors(nextErrors);
  };

  return (
    <div className="content-page contact-page py-12 lg:py-20 min-h-[calc(100dvh-5rem)] flex flex-col justify-between">
      {/* Encabezado */}
      <section className="page-section page-intro-section" aria-labelledby="contact-title">
        <div className="site-container page-heading-split">
          <h1 id="contact-title" className="section-title">
            La primera solución comienza con una <span className="accent">conversación.</span>
          </h1>
          <p className="lead text-base sm:text-lg text-[var(--sc-muted)] leading-relaxed">
            Iniciemos el diálogo sobre tu proyecto o necesidad tecnológica. Escríbenos directamente o completa el formulario para coordinar una primera reunión de exploración.
          </p>
        </div>
      </section>

      {/* Sección principal de formulario y canales */}
      <section className="page-section contact-section py-12 lg:py-16">
        <div className="site-container contact-layout grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Canales de contacto directos */}
          <div className="contact-info lg:col-span-5 space-y-8">
            <div className="border-b border-[var(--sc-line)] pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">Canales directos</h2>
              <p className="text-xs sm:text-sm text-[var(--sc-faint)] mt-1">Atención técnica y comercial</p>
            </div>

            <div className="contact-details space-y-4">
              <a
                href="mailto:softcraft2024@gmail.com"
                className="contact-detail group flex items-center justify-between p-4 rounded-xl border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--sc-surface-strong)] text-[var(--sc-accent)]">
                    <HiEnvelope className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <small className="block text-xs font-semibold text-[var(--sc-faint)] uppercase tracking-wider">Correo</small>
                    <span className="text-sm font-semibold text-[var(--sc-ink)]">softcraft2024@gmail.com</span>
                  </div>
                </div>
                <HiArrowUpRight className="w-4 h-4 text-[var(--sc-faint)] group-hover:text-[var(--sc-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
              </a>

              <a
                href="tel:+59171486093"
                className="contact-detail group flex items-center justify-between p-4 rounded-xl border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--sc-surface-strong)] text-[var(--sc-accent)]">
                    <HiPhone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <small className="block text-xs font-semibold text-[var(--sc-faint)] uppercase tracking-wider">Teléfono</small>
                    <span className="text-sm font-semibold text-[var(--sc-ink)]">+591 71486093</span>
                  </div>
                </div>
                <HiArrowUpRight className="w-4 h-4 text-[var(--sc-faint)] group-hover:text-[var(--sc-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
              </a>

              <a
                href="https://wa.me/59171486093"
                className="contact-detail group flex items-center justify-between p-4 rounded-xl border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--sc-surface-strong)] text-[var(--sc-accent)]">
                    <HiChatBubbleLeftRight className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <small className="block text-xs font-semibold text-[var(--sc-faint)] uppercase tracking-wider">WhatsApp</small>
                    <span className="text-sm font-semibold text-[var(--sc-ink)]">Escribir por WhatsApp</span>
                  </div>
                </div>
                <HiArrowUpRight className="w-4 h-4 text-[var(--sc-faint)] group-hover:text-[var(--sc-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
              </a>

              <div className="contact-detail flex items-center gap-3 p-4 rounded-xl border border-[var(--sc-line)] bg-[var(--sc-surface)]">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--sc-surface-strong)] text-[var(--sc-accent)]">
                  <HiMapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <small className="block text-xs font-semibold text-[var(--sc-faint)] uppercase tracking-wider">Ubicación</small>
                  <span className="text-sm font-semibold text-[var(--sc-ink)]">Cochabamba, Bolivia</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--sc-muted)] leading-relaxed p-4 rounded-xl bg-[var(--sc-surface-strong)] border border-[var(--sc-line)]">
              No requieres tener un pliego de especificaciones cerrado. La primera llamada técnica sirve precisamente para ayudarte a definir la arquitectura y el alcance óptimo.
            </p>
          </div>

          {/* Formulario de contacto limpio y profesional */}
          <form
            className="contact-form lg:col-span-7 p-6 sm:p-10 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)] space-y-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="border-b border-[var(--sc-line)] pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--sc-ink)]">Formulario de contacto</h2>
              <p className="text-xs sm:text-sm text-[var(--sc-faint)] mt-1">Los campos marcados con * son obligatorios.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-sm font-semibold text-[var(--sc-ink)]">
                  Nombre completo *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre o empresa"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--sc-bg)] border border-[var(--sc-line)] text-[var(--sc-ink)] focus:border-[var(--sc-accent)] focus:ring-1 focus:ring-[var(--sc-accent)] outline-none transition-colors text-sm"
                />
                {errors.name && (
                  <p id="name-error" className="text-xs font-semibold text-[var(--sc-pink)]" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--sc-ink)]">
                  Correo electrónico *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--sc-bg)] border border-[var(--sc-line)] text-[var(--sc-ink)] focus:border-[var(--sc-accent)] focus:ring-1 focus:ring-[var(--sc-accent)] outline-none transition-colors text-sm"
                />
                {errors.email && (
                  <p id="email-error" className="text-xs font-semibold text-[var(--sc-pink)]" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-sm font-semibold text-[var(--sc-ink)]">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+591 ..."
                  className="w-full px-4 py-3 rounded-lg bg-[var(--sc-bg)] border border-[var(--sc-line)] text-[var(--sc-ink)] focus:border-[var(--sc-accent)] focus:ring-1 focus:ring-[var(--sc-accent)] outline-none transition-colors text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="project" className="block text-sm font-semibold text-[var(--sc-ink)]">
                  Línea de interés
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--sc-bg)] border border-[var(--sc-line)] text-[var(--sc-ink)] focus:border-[var(--sc-accent)] focus:ring-1 focus:ring-[var(--sc-accent)] outline-none transition-colors text-sm"
                >
                  <option value="">Selecciona un área</option>
                  <option value="software">Software a medida</option>
                  <option value="ia">Inteligencia artificial aplicada</option>
                  <option value="web">Plataformas web & e-commerce</option>
                  <option value="mobile">Aplicaciones móviles</option>
                  <option value="automation">Automatización de flujos</option>
                  <option value="infra">DevOps & Cloud</option>
                  <option value="support">Soporte y consultoría técnica</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--sc-ink)]">
                Mensaje o descripción del desafío *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos brevemente qué necesitas construir, automatizar o resolver..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full px-4 py-3 rounded-lg bg-[var(--sc-bg)] border border-[var(--sc-line)] text-[var(--sc-ink)] focus:border-[var(--sc-accent)] focus:ring-1 focus:ring-[var(--sc-accent)] outline-none transition-colors text-sm"
              />
              {errors.message && (
                <p id="message-error" className="text-xs font-semibold text-[var(--sc-pink)]" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button type="submit" className="button-primary w-full sm:w-auto">
                <span>Enviar mensaje</span>
                <HiArrowUpRight aria-hidden="true" />
              </button>
              <span className="text-xs text-[var(--sc-faint)] text-center sm:text-right">
                Respuesta técnica en menos de 24h hábiles.
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* Enlace rápido complementario */}
      <section className="page-section contact-final-section pt-8">
        <div className="site-container contact-final-inner flex items-center justify-center gap-3 text-sm text-[var(--sc-muted)]">
          <span>¿Prefieres mensajería instantánea directa?</span>
          <Link
            href="https://wa.me/59171486093"
            className="text-link inline-flex items-center gap-1 font-semibold text-[var(--sc-accent)] hover:text-[var(--sc-accent-hot)]"
            target="_blank"
            rel="noreferrer"
          >
            <span>Escribir por WhatsApp</span>
            <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
