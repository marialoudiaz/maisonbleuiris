'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useData } from '../../app/context/DataContext';
import Image from 'next/image';
import logo from '../../public/images/logo/maisonbleuiris-noir.png';
import { MenuIcon, X } from 'lucide-react';
import '../../styles/App.scss';

function MobileHeader({ isOpen, toggleMenu, infos, onHover, onLeave, hoveredLink }) {

  const router = useRouter();
  const { indepArray } = useData();
  const header = infos;  console.log(header);
  const Lang = indepArray[0].lang;
  
  const navLinks = [
    { href: '#Philosophie', label: indepArray[0].header[0], id: 'philo', route:'/philo', langz: Lang},
    { href: '#Services', label: indepArray[0].header[1], id: 'service', route:'/#Services' },
    { href: '#Projets', label: indepArray[0].header[2], id: 'projets', route:'/key-projets', langz: Lang },
    { href: '#Contact', label: indepArray[0].header[3], id: 'contact', route:'/contact-us', langz: Lang },
    
  ];

  return (
    <>
      <div className='menu-button'>
        {isOpen ? 
        (
          <X style={{ color: 'white' }} size={32} onClick={toggleMenu} />
        ) 
        
        : 
        
        (
          <div className='navbar-container-mobile'>
            <div className='navbar-left' onClick={() => router.push('/')}>
              <Image
                src={logo}
                width={200}
                height={60}
                alt="logo"
              />
            </div>
            <div onClick={toggleMenu}>
              <MenuIcon size={32} />
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className='mobile-navbar'>
          <div className='mobile-navbar-container'>

            <div onClick={() => { router.push('/'); toggleMenu(); }}>
              <Image
                className='logo'
                src={logo}
                width={300}
                height={60}
                alt="logo"
                
              />
            </div>

            <div className='navbar-full-items'>
              {navLinks.map(link => (
                <div 
                  key={link.id} 
                  className='button-navbar'
                  onClick={() => { router.push(`${link.route}`); toggleMenu(); }}
                >
                  <p
                    className={hoveredLink === link.id ? 'hovered-link' : ''}
                    onMouseEnter={() => onHover(link.id)}
                    onMouseLeave={onLeave}
                  >
                    {link.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileHeader;
