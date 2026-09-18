import {
  HiBars3,
  HiChatBubbleBottomCenterText,
  HiChatBubbleLeftRight,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiSparkles,
  HiUser,
  HiViewColumns,
  HiXMark,
} from 'react-icons/hi2';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export const navData = [
  { name: 'Inicio', path: '/', icon: HiHome },
  { name: 'Servicios', path: '/services', icon: HiRectangleGroup },
  { name: 'Proyectos', path: '/work', icon: HiViewColumns },
  { name: 'Nosotros', path: '/about', icon: HiUser },
  { name: 'Equipo', path: '/team', icon: HiSparkles },
  { name: 'Proceso', path: '/process', icon: HiChatBubbleBottomCenterText },
  { name: 'Testimonios', path: '/testimonials', icon: HiChatBubbleLeftRight },
  { name: 'Contacto', path: '/contact', icon: HiEnvelope },
];

const Nav = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [router?.pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;

    const links = nav.querySelectorAll('.nav-link');
    const media = gsap.matchMedia();

    media.add('(max-width: 959px)', () => {
      gsap.killTweensOf([nav, ...links]);

      if (menuOpen) {
        gsap.fromTo(
          nav,
          { autoAlpha: 0, y: -14, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.34, ease: 'power3.out', overwrite: 'auto' }
        );
        gsap.fromTo(
          links,
          { autoAlpha: 0, y: -6 },
          { autoAlpha: 1, y: 0, duration: 0.24, stagger: 0.04, delay: 0.08, ease: 'power2.out', overwrite: 'auto' }
        );
      } else if (menuVisible) {
        gsap.timeline({
          defaults: { overwrite: 'auto' },
          onComplete: () => setMenuVisible(false),
        })
          .to(links, { autoAlpha: 0, y: -4, duration: 0.12, stagger: 0.02, ease: 'power2.in' })
          .to(nav, { autoAlpha: 0, y: -12, scale: 0.98, duration: 0.2, ease: 'power3.in' }, '-=0.05');
      } else {
        gsap.set(nav, { autoAlpha: 0, y: -12, scale: 0.98 });
      }
    });

    media.add('(min-width: 960px)', () => {
      gsap.set(nav, { clearProps: 'all' });
      gsap.set(links, { clearProps: 'all' });
    });

    return () => media.revert();
  }, [menuOpen, menuVisible]);

  useEffect(() => {
    if (menuOpen) {
      const focusTimer = window.setTimeout(() => {
        navRef.current?.querySelector('.nav-link')?.focus();
      }, 360);
      return () => window.clearTimeout(focusTimer);
    }

    if (menuVisible) {
      toggleRef.current?.focus();
    }

    return undefined;
  }, [menuOpen, menuVisible]);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      return;
    }

    setMenuVisible(true);
    setMenuOpen(true);
  };

  return (
    <div className="nav-wrap">
      <button
        type="button"
        ref={toggleRef}
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={toggleMenu}
      >
        {menuOpen ? <HiXMark aria-hidden="true" /> : <HiBars3 aria-hidden="true" />}
        <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
      </button>

      <nav
        id="site-navigation"
        ref={navRef}
        className={`site-nav ${menuVisible ? 'is-visible' : ''}`}
        aria-label="Navegación principal"
      >
        {navData.map((link) => {
          const Icon = link.icon;
          const isActive =
            link.path === '/'
              ? router.pathname === '/'
              : router.pathname === link.path || router.pathname.startsWith(`${link.path}/`);

          return (
            <Link
              href={link.path}
              key={link.path}
              className={`nav-link ${isActive ? 'is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <Icon aria-hidden="true" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
