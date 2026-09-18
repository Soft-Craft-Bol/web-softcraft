"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import TransitionLink from "@/components/TransitionLink";
import { NAV } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  /* Cierra el menú al cambiar de ruta ajustando estado durante el render. */
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-abyss/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-[min(100%-2rem,72rem)] items-center justify-between gap-4">
        <TransitionLink href="/" aria-label="SoftCraft Bolivia, ir al inicio" className="flex min-h-[52px] items-center">
          <Image src="/logo.svg" width={150} height={44} alt="SoftCraft Bolivia" priority className="h-auto w-[150px]" />
        </TransitionLink>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
            return (
              <TransitionLink
                key={item.path}
                href={item.path}
                aria-current={active ? "page" : undefined}
                className={`relative inline-flex min-h-[44px] items-center px-3 text-[0.72rem] font-semibold tracking-wide transition-colors ${
                  active ? "text-cream" : "text-haze hover:text-cream"
                }`}
              >
                {item.name}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-magenta via-rose to-gold transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </TransitionLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <TransitionLink
            href="/contact"
            className="btn-shine hidden min-h-[44px] items-center rounded-lg bg-gradient-to-r from-magenta to-viol px-4 text-[0.75rem] font-bold text-white shadow-[0_0_20px_rgba(255,46,136,0.35)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Contáctanos
          </TransitionLink>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full border border-white/15 px-3 text-cream lg:hidden"
          >
            {open ? <HiXMark className="h-5 w-5" aria-hidden="true" /> : <HiBars3 className="h-5 w-5" aria-hidden="true" />}
            <span className="text-xs font-bold">{open ? "Cerrar" : "Menú"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className="border-t border-white/10 bg-plum/95 px-4 py-3 backdrop-blur-xl lg:hidden"
        >
          <ul className="grid grid-cols-2 gap-1">
            {NAV.map((item) => {
              const active = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
              return (
                <li key={item.path}>
                  <TransitionLink
                    href={item.path}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-[48px] items-center rounded-lg px-3 text-sm font-semibold transition-colors ${
                      active ? "bg-white/10 text-cream" : "text-haze hover:bg-white/5 hover:text-cream"
                    }`}
                  >
                    {item.name}
                  </TransitionLink>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
