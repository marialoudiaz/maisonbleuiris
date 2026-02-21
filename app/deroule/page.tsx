'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useData } from '@/app/context/DataContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.scss';
// composants
import Header from '../../components/navbar/header';
import Switch from '../../components/ui/switch';
import Footer from '../../components/footer/footer';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Deroule: React.FC = () => {
  const { indepArray } = useData();
  const router = useRouter();
  // état de chargement (sans bloquer les hooks)
  const isLoading = !indepArray || !indepArray[0]?.philo;
  // redirection si manque de données
  useEffect(() => {
    if (isLoading) {
      router.push('/');
    }
  }, [isLoading, router]);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isLoading) {
      const items = containerRef.current?.children;
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }
  }, [isLoading]);
  // affichage de chargement après tous les hooks
  if (isLoading) return <div>Loading...</div>;
  const { deroule } = indepArray[0];
  const isEnglish = indepArray[0].Lang === 'EN';

  return (
    <>
      <Header />
      <section className={styles.section} style={{ display: `${deroule}` }}>
        
        <div className={styles.flexwrap} ref={containerRef} id={styles.deroule}>
          <div className={styles.flexwrap}>
            <h2>{deroule[1]}</h2>
            <p>{deroule[2]}</p>
          </div>

          <div className={styles.flexwrap} id={styles.derouleitem}>
            <Image
              src='/images/icons/projets/projet.png'
              alt={isEnglish ? "China Ink icon of a couple" : "Icône à l'encre de Chine d'un couple"}
              width={300}
              height={300}
            />
            <div className={styles.flexwrap}>
              <h4>{deroule[3]}</h4>
              <p>{deroule[4]}</p>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div className={styles.tiret}></div>
            <div className={styles.tiret2}></div>
          </div>

          <div className={styles.flexwrap} id={styles.derouleitem}>
            <Image
              src='/images/icons/projets/devis.png'
              alt={isEnglish ? "China Ink icon of a letter" : "Icône à l'encre de Chine d'une enveloppe"}
              width={300}
              height={300}
            />
            <div className={styles.flexwrap}>
              <h4>{deroule[5]}</h4>
              <p>{deroule[6]}</p>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div className={styles.tiret}></div>
            <div className={styles.tiret2}></div>
          </div>

          <div className={styles.flexwrap} id={styles.derouleitem}>
            <Image
              src='/images/icons/projets/livrable.png'
              alt={isEnglish ? "China Ink icon of a gift box" : "Icône à l'encre de Chine d'un cadeau"}
              width={300}
              height={300}
            />
            <div className={styles.flexwrap}>
              <h4>{deroule[7]}</h4>
              <p>{deroule[8]}</p>
            </div>
          </div>
        </div>

        <button
          className={styles.btntranspdark}
          style={{ margin: '2rem auto' }}
          onClick={() => router.push('/')}
        >
          <div>
            <svg
              className={styles.icontransp}
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
              aria-label='Arrow Icon'
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-white group-hover:fill-white"
              ></path>
            </svg>
            <p className={styles.btntranspp} style={{ color: 'white' }}>
              {indepArray[0].cta[4]}
            </p>
          </div>
        </button>

      </section>
      <Switch />
      <Footer />
    </>
  );
};

export default Deroule;
