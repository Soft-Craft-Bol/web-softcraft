import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { CONTACT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-plum">
      <div className="mx-auto w-[min(100%-2rem,72rem)] py-12">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            ¿Hablamos de lo que sigue?
          </h2>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center gap-2 border-b border-magenta pb-1 text-sm font-bold text-cream transition-colors hover:text-gold"
          >
            Contactar al equipo <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold text-cream">SoftCraft Bolivia</p>
            <p className="mt-1 max-w-[38ch] text-sm text-haze">
              Software a medida, IA aplicada y acompañamiento continuo.
            </p>
            <p className="mt-3 font-mono text-xs text-dim">
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-gold">
                {CONTACT.email}
              </a>
              {" · "}
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-gold">
                {CONTACT.phoneDisplay}
              </a>
              {" · "}
              {CONTACT.city}
            </p>
          </div>
          <Link
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex min-h-[52px] items-center justify-center gap-2 self-start rounded-lg bg-gradient-to-r from-magenta to-viol px-5 text-sm font-bold text-white shadow-[0_0_22px_rgba(255,46,136,0.35)] transition-transform hover:-translate-y-0.5 md:self-center"
          >
            Escribir por WhatsApp <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-1 border-t border-white/10 pt-4 text-xs text-dim sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} SoftCraft Bolivia</span>
          <span>Hecho para problemas reales.</span>
        </div>
      </div>
    </footer>
  );
}
