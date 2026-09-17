import Link from 'next/link';
import {
  RiFacebookLine,
  RiGithubFill,
  RiInstagramLine,
  RiMailSendLine,
  RiYoutubeLine,
} from 'react-icons/ri';
import { BiLogoTiktok } from 'react-icons/bi';

const Socials = () => {
  const socialLinks = [
    { label: 'YouTube', href: 'https://www.youtube.com/@Softcraft-d1s', icon: RiYoutubeLine },
    { label: 'Instagram', href: 'https://www.instagram.com/softcraft_bol?igsh=aWQ1OHN5YmxkYXlx', icon: RiInstagramLine },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61564961656612', icon: RiFacebookLine },
    { label: 'Correo electrónico', href: 'mailto:softcraft2024@gmail.com', icon: RiMailSendLine },
    { label: 'GitHub', href: 'https://github.com/Soft-Craft-Bol', icon: RiGithubFill },
    { label: 'TikTok', href: 'https://www.tiktok.com/@softcraft6', icon: BiLogoTiktok },
  ];

  return (
    <nav className="socials" aria-label="Redes y contacto">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <Link
          href={href}
          key={label}
          className="social-link"
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
          aria-label={label}
        >
          <Icon aria-hidden="true" />
        </Link>
      ))}
    </nav>
  );
};

export default Socials;
