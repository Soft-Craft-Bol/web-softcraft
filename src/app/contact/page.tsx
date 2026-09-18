import type { Metadata } from "next";
import { HiArrowUpRight, HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | SoftCraft Bolivia",
  description:
    "Escríbenos por email, teléfono o WhatsApp. Primera conversación para explorar tu proyecto.",
};

const channels = [
  {
    icon: HiEnvelope,
    label: "Correo",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: HiPhone,
    label: "Teléfono",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Escribir por WhatsApp",
    href: CONTACT.whatsappHref,
    external: true,
  },
  {
    icon: HiMapPin,
    label: "Ubicación",
    value: CONTACT.city,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title={<>La solución empieza con una <span className="text-gold">conversación.</span></>}
        lead="Escríbenos directo o deja tu mensaje en el formulario visual para coordinar una primera reunión de exploración."
      />
      <div className="mx-auto grid w-[min(100%-2rem,72rem)] items-start gap-8 py-14 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="space-y-5">
          <div>
            <h2 className="text-xl font-bold text-cream sm:text-2xl">Canales directos</h2>
            <p className="mt-1 text-sm text-dim">Atención técnica y comercial</p>
          </div>
          <ul className="space-y-3">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const inner = (
                <>
                  <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-rose">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm font-semibold text-cream">
                      {channel.value}
                    </span>
                  </span>
                  {channel.href && (
                    <HiArrowUpRight aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-dim" />
                  )}
                </>
              );
              const classes =
                "flex min-h-[76px] items-center gap-4 rounded-xl border border-white/12 bg-panel p-4 transition-colors hover:border-magenta/60";
              return (
                <li key={channel.label}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={classes}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={classes}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="text-sm leading-relaxed text-haze">
            ¿Prefieres mensaje instantáneo? El botón flotante de WhatsApp te acompaña en todo el sitio.
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
