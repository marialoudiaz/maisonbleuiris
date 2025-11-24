'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useData } from '../../app/context/DataContext';
import '../../styles/App.scss';
import Image from 'next/image';
import logo from '../../public/logo/mbi-noir.png';
import MobileNavbar from './mobileHeader';

const Header = () => {

//Variables
  const router = useRouter();
  const { indepArray } = useData();
  const mobile = indepArray[0].header;
  const [hoveredLink, setHoveredLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const Lang = indepArray && indepArray[0] && indepArray[0].Lang ? JSON.stringify(indepArray[0].Lang) : '';
  const navLinks = [
    { href: '#Philosophie', label: indepArray[0].header[0], id: 'philo', route:'/philosophy', langz: Lang},
    { href: '#Services', label: indepArray[0].header[1], id: 'service', route:'/#Services' },
    { href: '#Projets', label: indepArray[0].header[2], id: 'projets', route:'/key-projects', langz: Lang },
    { href: '#Contact', label: indepArray[0].header[3], id: 'contact', route:'/#Contact'}
  ];
// Fonctions Hover
  const onHover = (lien:string) => {
    setHoveredLink(lien);
  };
  const onLeave = () => {
    setHoveredLink('');
  };
// Fonction menu mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      {/* Navbar desktop */}
      <div className="navbar hidden md:block">
        <div className='navbar-container'>
          
          <div className='navbar-left' onClick={() => router.push('/')}>
            <Image src={logo} width={220} height={120} alt="logo" />
          </div>
         
          <div className='navbar-right'>
            {navLinks.map(link => (
              <div 
                key={link.id} 
                className='button-navbar'
                onClick={() => router.push(`${link.route}`)}
              >
                <p
                  className={hoveredLink === link.id ? 'hovered-link' : ''}
                  onMouseEnter={() => onHover(link.id)}
                  onMouseLeave={onLeave}>
                  {link.label}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>

      {/* Navbar mobile */}
      <div className="md:hidden"> {/* Cache sur les écrans >= 768px */}
        <MobileNavbar isOpen={isOpen} infos={mobile} onHover={onHover} onLeave={onLeave} toggleMenu={toggleMenu} hoveredLink={hoveredLink}/>
      </div>
    </>
  );
};

export default Header;
