import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-cta">
          <div>
            <h2>Si ya tienes el problema, conversemos.</h2>
          </div>
          <Link href="/contact" className="text-link text-link-light">
            Abrir conversación <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-bottom">
          <div>
            <Link href="/" className="footer-brand">
              <span className="footer-brand-mark">SC</span>
              <span>SoftCraft Bolivia</span>
            </Link>
            <p className="footer-note">Software a medida, IA aplicada y acompañamiento continuo.</p>
          </div>
          <Socials />
        </div>

        <div className="footer-legal">
          <span>© {new Date().getFullYear()} SoftCraft Bolivia</span>
          <span>Hecho para problemas reales.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
