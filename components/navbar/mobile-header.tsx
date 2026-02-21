'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useData } from '../../app/context/DataContext';
import Image from 'next/image';
import logo from '../../public/images/logo/maisonbleuiris-noir.png';
import { MenuIcon, X } from 'lucide-react';
import styles from '../../components/navbar/mobile-header.module.scss';

function MobileHeader({ isOpen, toggleMenu, infos, onHover, onLeave, hoveredLink }) {

  const router = useRouter();
  const { indepArray } = useData();
  const header = infos;  console.log(header);
  const Lang = indepArray[0].lang;
  
  const navLinks = [
    { href: '#Philosophie', label: indepArray[0].header[0], id: 'philo', route:'/philosophy', langz: Lang},
    { href: '#Services', label: indepArray[0].header[1], id: 'service', route:'/#Services' },
    { href: '#Projets', label: indepArray[0].header[2], id: 'projets', route:'/key-projects', langz: Lang },
    { href: '#Contact', label: indepArray[0].header[3], id: 'contact', route:'/contact-us', langz: Lang },
    
  ];

  return (
    <>
      <div className={styles.menubutton}>
        {isOpen ? 
        (
          <X style={{ color: 'white' }} size={32} onClick={toggleMenu} />
        ) 
        
        : 
        
        (
          <div className={styles.navbarcontainermobile}>
            <div className={styles.navbarleft} onClick={() => router.push('/')}>
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
        <div className={styles.mobilenavbar}>
          <div className={styles.mobilenavbarcontainer}>

            <div onClick={() => { router.push('/'); toggleMenu(); }}>
              <Image
                className={styles.logo}
                src={logo}
                width={300}
                height={60}
                alt="logo"
                
              />
            </div>

            <div className={styles.navbarfullitems}>
              {navLinks.map(link => (
                <div 
                  key={link.id} 
                  className={styles.buttonnavbar}
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
