import { HiBars3, HiXMark } from 'react-icons/hi2';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const navData = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/services' },
  { name: 'Proyectos', path: '/work' },
  { name: 'Nosotros', path: '/about' },
  { name: 'Equipo', path: '/team' },
  { name: 'Proceso', path: '/process' },
  { name: 'Testimonios', path: '/testimonials' },
  { name: 'Contacto', path: '/contact' },
];

const Nav = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <div className="nav-wrap">
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <HiXMark aria-hidden="true" /> : <HiBars3 aria-hidden="true" />}
        <span>{menuOpen ? 'Cerrar' : 'Índice'}</span>
      </button>

      <nav
        id="site-navigation"
        className={`site-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navegación principal"
      >
        {navData.map((link) => {
          const isActive = link.path === '/' ? router.pathname === '/' : router.pathname.startsWith(link.path);

          return (
            <Link
              href={link.path}
              key={link.path}
              className={`nav-link ${isActive ? 'is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
