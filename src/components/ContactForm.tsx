"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const initialForm = { name: "", email: "", phone: "", project: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<keyof typeof initialForm, string>>;

const inputClass = (invalid: boolean) =>
  `min-h-[52px] w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-cream placeholder:text-dim transition-colors focus:border-magenta focus:outline-none ${
    invalid ? "border-rose" : "border-white/20"
  }`;

/* Formulario visual: valida en el navegador, no envía a ningún destino. */
export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof typeof initialForm]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Escribe tu nombre completo.";
    if (!form.email.trim()) next.email = "Introduce tu correo electrónico.";
    else if (!emailPattern.test(form.email)) next.email = "Revisa el formato (ejemplo@dominio.com).";
    if (!form.message.trim()) next.message = "Cuéntanos brevemente qué desafío quieres resolver.";
    setErrors(next);
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto visual" className="rounded-2xl border border-white/12 bg-panel p-6 sm:p-8">
      <h2 className="text-xl font-bold text-cream sm:text-2xl">Describe tu desafío</h2>
      <p className="mt-1 text-[0.8rem] text-dim">
        Formulario visual de demostración: valida los campos pero no envía datos a ningún destino.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-[0.78rem] font-semibold text-cream">
            Nombre completo
          </label>
          <input
            id="cf-name" name="name" type="text" autoComplete="name" placeholder="Tu nombre"
            value={form.name} onChange={handleChange}
            aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "cf-name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
          />
          {errors.name && <p id="cf-name-error" role="alert" className="mt-1.5 text-xs text-rose">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-[0.78rem] font-semibold text-cream">
            Correo electrónico
          </label>
          <input
            id="cf-email" name="email" type="email" autoComplete="email" placeholder="ejemplo@dominio.com"
            value={form.email} onChange={handleChange}
            aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "cf-email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
          />
          {errors.email && <p id="cf-email-error" role="alert" className="mt-1.5 text-xs text-rose">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-[0.78rem] font-semibold text-cream">
            Teléfono / WhatsApp <span className="font-normal text-dim">(opcional)</span>
          </label>
          <input
            id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+591 ..."
            value={form.phone} onChange={handleChange}
            className={inputClass(false)}
          />
        </div>
        <div>
          <label htmlFor="cf-project" className="mb-1.5 block text-[0.78rem] font-semibold text-cream">
            Tipo de proyecto
          </label>
          <select id="cf-project" name="project" value={form.project} onChange={handleChange} className={`${inputClass(false)} appearance-none`}>
            <option value="" className="bg-panel">Selecciona una opción</option>
            <option value="web" className="bg-panel">Desarrollo web</option>
            <option value="movil" className="bg-panel">App móvil</option>
            <option value="medida" className="bg-panel">Software a medida</option>
            <option value="ia" className="bg-panel">Inteligencia artificial</option>
            <option value="auto" className="bg-panel">Automatización</option>
            <option value="otro" className="bg-panel">Otro / aún no lo sé</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className="mb-1.5 block text-[0.78rem] font-semibold text-cream">
          Tu desafío
        </label>
        <textarea
          id="cf-message" name="message" rows={5} placeholder="¿Qué proceso quieres mejorar o qué idea quieres construir?"
          value={form.message} onChange={handleChange}
          aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "cf-message-error" : undefined}
          className={`${inputClass(Boolean(errors.message))} min-h-[140px] resize-y`}
        />
        {errors.message && <p id="cf-message-error" role="alert" className="mt-1.5 text-xs text-rose">{errors.message}</p>}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="btn-shine inline-flex min-h-[52px] items-center justify-center rounded-lg bg-gradient-to-r from-magenta to-viol px-6 text-sm font-bold text-white shadow-[0_0_22px_rgba(255,46,136,0.35)] transition-transform hover:-translate-y-0.5"
        >
          Revisar mensaje
        </button>
        <p className="text-xs text-dim">Al ser visual, el botón solo valida. Para contactar usa los canales directos.</p>
      </div>
    </form>
  );
}
