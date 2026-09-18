import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp al +591 71486093"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-magenta to-viol text-white shadow-[0_0_28px_rgba(255,46,136,0.5)] transition-transform hover:scale-105 focus-visible:scale-105"
    >
      <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
    </a>
  );
}
