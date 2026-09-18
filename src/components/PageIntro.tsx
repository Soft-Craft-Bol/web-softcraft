import { HiArrowUpRight } from "react-icons/hi2";
import TransitionLink from "@/components/TransitionLink";

export type PageIntroVariant = "services" | "projects" | "testimonials" | "standard";

interface PageIntroProps {
  title: React.ReactNode;
  lead: string;
  linkHref?: string;
  linkLabel?: string;
  quiet?: boolean;
  eyebrow?: string;
  variant?: PageIntroVariant;
}

const variantStyles: Record<
  PageIntroVariant,
  {
    section: string;
    glow: string;
    eyebrow: string;
    title: string;
    lead: string;
    link: string;
    rule: string;
  }
> = {
  standard: {
    section: "bg-abyss",
    glow: "bg-[radial-gradient(ellipse_55%_80%_at_85%_20%,rgba(255,46,136,0.16),transparent_60%),radial-gradient(ellipse_40%_70%_at_5%_90%,rgba(176,38,255,0.12),transparent_60%)]",
    eyebrow: "text-rose",
    title: "text-cream",
    lead: "text-haze",
    link: "border-magenta text-cream hover:text-gold",
    rule: "bg-gradient-to-r from-gold via-coral via-rose to-deep",
  },
  services: {
    section: "bg-panel",
    glow: "bg-[radial-gradient(ellipse_45%_100%_at_0%_50%,rgba(255,46,136,0.32),transparent_72%),radial-gradient(ellipse_38%_70%_at_100%_0%,rgba(176,38,255,0.18),transparent_70%)]",
    eyebrow: "text-gold",
    title: "text-cream",
    lead: "text-haze",
    link: "border-gold text-cream hover:text-gold",
    rule: "bg-gradient-to-r from-magenta via-rose to-gold",
  },
    projects: {
      section: "bg-plum",
      glow: "bg-[radial-gradient(ellipse_48%_100%_at_100%_0%,rgba(255,211,75,0.20),transparent_68%),radial-gradient(ellipse_45%_80%_at_0%_100%,rgba(154,3,137,0.24),transparent_72%)]",
      eyebrow: "text-gold",
      title: "text-cream",
      lead: "text-haze",
      link: "border-gold text-cream hover:text-gold",
      rule: "bg-gradient-to-r from-gold via-coral to-magenta",
    },
  testimonials: {
    section: "bg-panel2",
    glow: "bg-[radial-gradient(ellipse_55%_90%_at_50%_0%,rgba(255,46,136,0.28),transparent_70%),radial-gradient(ellipse_40%_70%_at_100%_100%,rgba(255,138,92,0.16),transparent_72%)]",
    eyebrow: "text-coral",
    title: "text-cream",
    lead: "text-haze",
    link: "border-coral text-cream hover:text-gold",
    rule: "bg-gradient-to-r from-coral via-rose to-magenta",
  },
};

/* Encabezado interior compartido con composiciones propias por recorrido. */
export default function PageIntro({
  title,
  lead,
  linkHref,
  linkLabel,
  quiet = false,
  eyebrow,
  variant = "standard",
}: PageIntroProps) {
  const styles = variantStyles[variant];
  const centered = variant === "testimonials";

  return (
    <section className={`relative overflow-hidden border-b border-white/10 ${styles.section}`}>
      {!quiet && (
        <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${styles.glow}`} />
      )}

      {variant === "services" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-[42%_58%_60%_40%/54%_42%_58%_46%] bg-magenta/20 blur-3xl"
        />
      )}

      {variant === "projects" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-[58%_42%_48%_52%/42%_58%_42%_58%] bg-deep/20 blur-2xl"
        />
      )}

      {variant === "testimonials" && (
        <div aria-hidden="true" className="pointer-events-none absolute -right-2 -top-8 font-serif text-8xl leading-none text-rose/10 sm:right-4 sm:top-0">
          “
        </div>
      )}

      <div
        className={`relative mx-auto w-[min(100%-2rem,72rem)] py-16 sm:py-20 ${
          centered
            ? "max-w-4xl text-center"
            : "grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-12"
        }`}
      >
        <div className={centered ? "mx-auto max-w-3xl" : ""}>
          {eyebrow && (
            <p className={`mb-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] ${styles.eyebrow}`}>
              {eyebrow}
            </p>
          )}
          <h1 className={`max-w-[18ch] text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${styles.title} ${centered ? "mx-auto" : ""}`}>
            {title}
          </h1>
        </div>

        <div className={`space-y-4 ${centered ? "mx-auto mt-6 max-w-2xl" : ""}`}>
          <p className={`max-w-[52ch] text-base leading-relaxed ${styles.lead} ${centered ? "mx-auto" : ""}`}>{lead}</p>
          {linkHref && linkLabel && (
            <TransitionLink
              href={linkHref}
              className={`inline-flex min-h-[44px] items-center gap-2 border-b pb-1 text-sm font-bold transition-colors ${styles.link}`}
            >
              {linkLabel} <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </TransitionLink>
          )}
        </div>
      </div>
      <div aria-hidden="true" className={`h-[6px] ${styles.rule}`} />
    </section>
  );
}
