import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = ({ children }) => {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/" className="brand" aria-label="SoftCraft Bolivia, ir al inicio">
          <Image src="/logo.svg" width={184} height={54} alt="SoftCraft Bolivia" priority />
        </Link>
        <div className="header-tools">
          {children}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
