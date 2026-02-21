// "use client";
import React from 'react';
import { useData } from '@/app/context/DataContext';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import styles from '../../components/footer/footer.module.scss';

const Footer: React.FC = () => {
  const { indepArray } = useData();
  const lagraine= '/images/lagraine.jpg';
  const router = useRouter();
  const isEnglish = indepArray[0].Lang === 'EN';

  if (!indepArray[0] || !indepArray[0].location) {
    return <div>Loading...</div>; 
  }
  const navLinks = [
    { href: '#Services', label: indepArray[0].header[0], id: 'service', route:'/#Services' },
    { href: '#Projets', label: indepArray[0].header[1], id: 'projets', route:'/key-projects'},
    { href: '#Contact', label: 'Contact', id: 'Contact', route:'/contact-us'}
  ];

return (
  <div className={styles.footer}>
     
      <div className={styles.footerlogo}>
        <Image 
          src={'/images/logo/maisonbleuiris-noir.png'}
          alt='logo maison bleu iris'
          width={1000}
          height={0}
        />
        <p className={styles.footerp}>📍{indepArray[0].location[0]} {indepArray[0].location[1]}</p>
      </div>

      <div className={styles.footernav}>
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
      <div className={styles.flexwrapcenter}>
              <div
                   
                    onClick={() => window.open('https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/', '_blank', 'noreferrer')}
                >
                  <div className={styles.footericon}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
              </div>
              <div
                  
                  onClick={() => window.open('https://www.github.com/marialoudiaz/', '_blank', 'noreferrer')}
              >
                <div className={styles.footericon}>
                  <FontAwesomeIcon  icon={faGithub} />
                </div>
              </div>
              <div
                  
                  onClick={() => window.open('https://www.instagram.com/maisonbleuiris/', '_blank', 'noreferrer')}
                  
              >
                <div className={styles.footericon}>
                  <FontAwesomeIcon  icon={faInstagram} />
                </div>
              </div>
      </div>

      <div style={{position:'relative'}}>
        <div className={styles.absopost}>
        <Image 
          src={'/images/meilleur-site-internet-2024.jpg'}
          alt='prix meilleur site 2024 trophees de la comm Paris'
          width={130}
          height={0}
          onClick={() => router.push(`/projet/1`)}
        />
        </div>
      </div>

      <div style={{position:'relative'}}>
        <div className={styles.absopost2}>
         <Image
              src={lagraine}              
              alt={isEnglish? 'Logo of the heraultaise vernacular change La Graine' : "Logo de La Graine monnaie locale heraultaise"}
              width={130}
              height={0}
              className={styles.graine}
              onClick={() => window.open('https://lagraine34.org/', '_blank')}            
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;