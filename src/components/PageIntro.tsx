import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

interface PageIntroProps {
  title: React.ReactNode;
  lead: string;
  linkHref?: string;
  linkLabel?: string;
}

/* Encabezado interior compartido: composición editorial con línea neón inferior. */
export default function PageIntro({ title, lead, linkHref, linkLabel }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 85% 20%, rgba(255,46,136,0.16), transparent 60%), radial-gradient(ellipse 40% 70% at 5% 90%, rgba(176,38,255,0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid w-[min(100%-2rem,72rem)] gap-6 py-16 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-12">
        <h1 className="max-w-[18ch] text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="space-y-4">
          <p className="max-w-[52ch] text-base leading-relaxed text-haze">{lead}</p>
          {linkHref && linkLabel && (
            <Link
              href={linkHref}
              className="inline-flex min-h-[44px] items-center gap-2 border-b border-magenta pb-1 text-sm font-bold text-cream transition-colors hover:text-gold"
            >
              {linkLabel} <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="h-[6px] bg-gradient-to-r from-gold via-coral via-rose to-deep" />
    </section>
  );
}
