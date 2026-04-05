//Links
import Link from 'next/link'

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiMailSendLine,
  RiGithubFill,
} from 'react-icons/ri';
import { BiLogoTiktok } from "react-icons/bi";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.youtube.com/@Softcraft-d1s'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.instagram.com/softcraft_bol?igsh=aWQ1OHN5YmxkYXlx'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=61564961656612#'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <RiFacebookLine />
      </Link>
      <Link
        href="https://mail.google.com/mail/?view=cm&to=softcraft2024@gmail.com&subject=Hola&body=Mensaje%20aquí"
        target="_blank"
      >
        <RiMailSendLine />
      </Link>
      <Link href={'https://github.com/Soft-Craft-Bol'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <RiGithubFill />
      </Link>
      <Link href={'https://www.tiktok.com/@softcraft6?_r=1&_t=ZS-956aidewfdk'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <BiLogoTiktok />
      </Link>
    </div>
  );
};

export default Socials;
