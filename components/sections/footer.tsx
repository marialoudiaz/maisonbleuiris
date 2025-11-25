"use client";
import React from 'react';
import { useData } from '@/app/context/DataContext';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import '../../styles/App.scss';

const Footer: React.FC = () => {
  const { indepArray } = useData();
  const router = useRouter();
  if (!indepArray[0] || !indepArray[0].location) {
    return <div>Loading...</div>; 
  }
  const navLinks = [
    { href: '#Services', label: indepArray[0].header[0], id: 'service', route:'/#Services' },
    { href: '#Projets', label: indepArray[0].header[1], id: 'projets', route:'/key-projects'},
    { href: '#Contact', label: 'Contact', id: 'Contact', route:'/contact-us'}
  ];
  return (
    <div className='footer'>
     
      <div className='footer-logo'>
        <Image 
          src={'/images/logo/maisonbleuiris-noir.png'}
          alt='logo maria lou diaz'
          width={1000}
          height={0}
        />
        <p className="footer-p">📍{indepArray[0].location[0]} {indepArray[0].location[1]}</p>
      </div>

      <div className='footer-nav'>
      {navLinks.map(link => (
              <div 
                key={link.id} 
                onClick={() => router.push(`${link.route}`)}
              >
                <p>
                  {link.label}
                </p>
              </div>
            ))}
      <p onClick={() => router.push('/mentions-legales')}>{indepArray[0].ml[0]}</p>
      </div>

{/* RS */}
      <div className='flex-wrap-center'>
              <div
                   
                    onClick={() => window.open('https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/', '_blank', 'noreferrer')}
                >
                  <div className='footer-icon'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
              </div>
              <div
                  
                  onClick={() => window.open('https://www.github.com/marialoudiaz/', '_blank', 'noreferrer')}
              >
                <div className='footer-icon'>
                  <FontAwesomeIcon  icon={faGithub} />
                </div>
              </div>
              <div
                  
                  onClick={() => window.open('https://www.instagram.com/maisonbleuiris/', '_blank', 'noreferrer')}
                  
              >
                <div className='footer-icon'>
                  <FontAwesomeIcon  icon={faInstagram} />
                </div>
              </div>
      </div>

    </div>
  );
};

export default Footer;