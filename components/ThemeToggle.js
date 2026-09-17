import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from './ThemeContext';

// Los dos iconos viajan en el HTML y el CSS muestra el que corresponde al tema
// activo. Así el marcado del servidor y el del cliente coinciden siempre.
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(nextTheme)}
      aria-label="Cambiar el tema de color"
      title="Cambiar el tema de color"
    >
      <HiSun className="theme-icon theme-icon--sun" aria-hidden="true" />
      <HiMoon className="theme-icon theme-icon--moon" aria-hidden="true" />
      <span className="sr-only">Cambiar el tema de color</span>
    </button>
  );
};

export default ThemeToggle;
