import Link from 'next/link';
import { HiArrowUpRight, HiEnvelope, HiPhone } from 'react-icons/hi2';
import InkStrip from './InkStrip';
import RegisterMark from './RegisterMark';
import Socials from './Socials';

const Footer = () => (
  <footer className="site-footer">
    <InkStrip variant="ink-strip--hair footer-strip" />
    <div className="site-container footer-inner">
      <div className="footer-head">
        <p className="footer-claim">
          Si ya tienes el problema,
          <br />
          conversemos.
        </p>
        <div className="footer-head-side">
          <Link href="/contact" className="button-primary">
            Abrir conversación <HiArrowUpRight aria-hidden="true" />
          </Link>
          <ul className="footer-channels">
            <li>
              <a href="mailto:softcraft2024@gmail.com">
                <HiEnvelope aria-hidden="true" /> softcraft2024@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+59171486093">
                <HiPhone aria-hidden="true" /> +591 71486093
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-meta">
        <div className="footer-brand">
          <span className="footer-brand-mark" aria-hidden="true">
            SC
          </span>
          <span>
            SoftCraft Bolivia
            <small>Cochabamba, Bolivia</small>
          </span>
        </div>
        <Socials />
      </div>

      <div className="footer-legal">
        <span>© {new Date().getFullYear()} SoftCraft Bolivia</span>
        <span className="footer-legal-note">Software a medida, IA aplicada y acompañamiento continuo.</span>
      </div>
      <RegisterMark position="bl" className="footer-mark" />
    </div>
  </footer>
);

export default Footer;
