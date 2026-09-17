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
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

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
        <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
      </button>

      <nav
        id="site-navigation"
        className={`site-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navegación principal"
      >
        {navData.map((link) => {
          const Icon = link.icon;
          const isActive = link.path === '/' ? router.pathname === '/' : router.pathname.startsWith(link.path);

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
