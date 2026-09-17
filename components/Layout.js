import { Instrument_Serif, Sora } from '@next/font/google';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import { ThemeContext } from './ThemeContext';
import Transition from './Transition';
import useRouteWipe from './useRouteWipe';

// Dos voces: Sora para la interfaz y el cuerpo, Instrument Serif para los
// titulares y las citas. La mezcla es la parte editorial del taller.
const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const readInitialTheme = () => {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
};

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(readInitialTheme);
  const { wipeKey, reducedMotion } = useRouteWipe();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('softcraft-theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    setTheme(savedTheme || systemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('softcraft-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`site-shell ${sora.variable} ${instrument.variable}`}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header>
          <Nav />
        </Header>
        <main className="site-main" id="contenido">
          <div className="route-view">{children}</div>
        </main>
        <Footer />
        {reducedMotion ? null : <Transition key={wipeKey} />}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
