import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Cambiar al tema ${nextTheme === 'light' ? 'claro' : 'oscuro'}`}
      title={`Tema ${nextTheme === 'light' ? 'claro' : 'oscuro'}`}
    >
      {theme === 'dark' ? <HiSun aria-hidden="true" /> : <HiMoon aria-hidden="true" />}
      <span className="sr-only">
        {theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'}
      </span>
    </button>
  );
};

export default ThemeToggle;
