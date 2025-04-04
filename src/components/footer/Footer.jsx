import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookSquare, FaGithub, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-brand'>
                    <Link to={'/'} className='brand'>SoftCraft</Link>
                    <p>Transformamos ideas en soluciones digitales innovadoras con excelencia en cada línea de código.</p>
                    <ul className='social-icons'>
                        <li><Link to='https://www.facebook.com/share/15iVfjNcU4/' target='_blank'><FaFacebookSquare /></Link></li>
                        <li><Link to='https://www.instagram.com/softcraft_bol/' target='_blank'><FaInstagram /></Link></li>
                        <li><Link to='https://github.com/Soft-Craft-Bol' target='_blank'><FaGithub /></Link></li>
                        <li><Link to='https://www.tiktok.com/@softcraft6?_t=ZM-8s08UyTh4hJ&_r=1' target='_blank'><FaTiktok /></Link></li>
                        <li><Link to='https://acortar.link/cG9GpM' target='_blank'><FaWhatsapp /></Link></li>
                    </ul>
                </div>

                <div className='footer-links'>
                    <div className='footer-column'>
                        <h4>Enlaces</h4>
                        <Link to='/'>Inicio</Link>
                        <Link to='#servicios'>Servicios</Link>
                        <Link to='#habilidades'>Habilidades</Link>
                        <Link to='#trabajos'>Trabajos</Link>
                        <Link to='#contacto'>Contacto</Link>
                    </div>
                    <div className='footer-column'>
                        <h4>Recursos</h4>
                        <Link to='/'>Docs</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Webinars</Link>
                        <Link to='/'>eBlocks</Link>
                    </div>
                    <div className='footer-column'>
                        <h4>Contacto</h4>
                        <Link to='/'>Ayuda</Link>
                        <Link to='/'>Ventas</Link>
                        <Link to='/'>Publicidad</Link>
                        <Link to='/'>Ubicación</Link>
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>&copy; 2025 SoftCraft - Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
