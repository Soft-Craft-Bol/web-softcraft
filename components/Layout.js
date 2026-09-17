import { Sora } from '@next/font/google';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import { ThemeContext } from './ThemeContext';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
});

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark');

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
      <div className={`site-shell ${sora.variable} font-sora`} data-theme={theme}>
        <Header>
          <Nav />
        </Header>
        <main className="site-main">{children}</main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
