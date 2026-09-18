import { CONTACT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-plum">

        <div className="mx-auto w-[min(100%-2rem,72rem)] py-12 flex flex-col gap-1 text-xs text-dim sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} SoftCraft Bolivia</span>
           <p className="font-mono text-xs text-dim">
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
    </footer>
  );
}
