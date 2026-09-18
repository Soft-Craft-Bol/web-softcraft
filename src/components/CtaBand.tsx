import { HiArrowUpRight } from "react-icons/hi2";
import TransitionLink from "@/components/TransitionLink";

interface CtaBandProps {
  title: string;
  text: string;
  action: string;
}

/* Banda de cierre reutilizable: siempre visible, sin animaciones que oculten. */
export default function CtaBand({ title, text, action }: CtaBandProps) {
  return (
    <div data-motion="cta" className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/12 bg-panel p-8 text-center md:flex-row md:p-10 md:text-left">
      <div data-motion-cta-copy="" className="max-w-xl space-y-2">
        <h2 className="text-xl font-bold text-cream sm:text-2xl">{title}</h2>
        <p className="text-sm text-haze">{text}</p>
      </div>
      <TransitionLink
        href="/contact"
        data-motion-cta-action=""
        className="btn-shine inline-flex min-h-[52px] flex-shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-magenta to-viol px-5 text-sm font-bold text-white shadow-[0_0_22px_rgba(255,46,136,0.35)] transition-transform hover:-translate-y-0.5"
      >
        {action} <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </TransitionLink>
    </div>
  );
}
