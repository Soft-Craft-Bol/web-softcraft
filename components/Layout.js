import { Sora } from 'next/font/google';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import { ThemeContext } from './ThemeContext';
import { TransitionProvider } from './TransitionContext';
import Transition from './Transition';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
});

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = window.localStorage.getItem('softcraft-theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const activeTheme = savedTheme || systemTheme;
    setTheme(activeTheme);
    document.documentElement.dataset.theme = activeTheme;
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('softcraft-theme', theme);
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TransitionProvider>
        <div className={`site-shell ${sora.variable} font-sora`} data-theme={theme}>
          <Transition />
          <Header>
            <Nav />
          </Header>
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </TransitionProvider>
    </ThemeContext.Provider>
  );
};

export default Layout;
