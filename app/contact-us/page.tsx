'use client'
// src/components/Form.tsx
import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import styles from '../../components/formulaire/formulaire.module.scss';
import '../../globals.css';
import { useData } from '@/app/context/DataContext'; // Importer le contexte
import ContactForm from '../../components/formulaire/contact-form'; // Remplacez par le chemin correct pour le composant
//composants
import Header from '../../components/navbar/header';
import Switch from '../../components/ui/switch';
import Footer from '../../components/footer/footer';


const Form: React.FC = () => {
  const { indepArray } = useData();

  const form = indepArray[0].form;
  // const display = Array.isArray(indepArray[0].form) ? indepArray[0].form[0] : indepArray[0].form;
  const words = indepArray[0].words ? indepArray[0].words : ['gogo']; // Assurez-vous que c'est un tableau
  const blabla = indepArray[0].form[12];
  const [index, setIndex] = useState(0);
  const langDisplay = indepArray[0].Lang;
  const isEnglish = indepArray[0].Lang === 'EN';
  const [pack, setPack] = useState(null);
  const packages = [
  {
    type: { en: "One-page website pack", fr: "Pack site one-page" },
    price: { en: "A$1320", fr: "660€" },
    services: { en: [], fr: [] },
    cta: { en: "Click the pack, you seek and tell me more in the form.", fr: "Cliquer sur le pack qui vous intéresse et dîtes m'en plus dans le formulaire" },
    object: { en: "Hello, I would love to work on my new one-page website as part of your special pack. Here are a few infos about my project:", fr: "Bonjour, j'aimerais travailler sur mon site one-page via votre pack spécial. Voici quelques infos sur mon projet:" },
  },
  {
    type: { en: "First Logo pack", fr: "Pack Premier Logo" },
    price: { en: "660A$", fr: "330€" },
    services: { en: [], fr: [] },
    cta: { en: "Click the pack, you seek and tell me more in the form.", fr: "Cliquer sur le pack qui vous intéresse et dîtes m'en plus dans le formulaire" },
    object: { en: "Hello, I would love to work on my new logo as part of your special pack. Here are a few infos about my project:", fr: "Bonjour, j'aimerais travailler sur mon logo via votre pack spécial. Voici quelques infos sur mon projet:" },
  },
  {
    type: { en: "Daily rate", fr: "TJM (Tarif jour)" },
    price: { en: "A$770 per day", fr: "385€ à la journée" },
    services: { en: [], fr: [] },
    cta: { en: "Click the pack, you seek and tell me more in the form.", fr: "Cliquer sur le pack qui vous intéresse et dîtes m'en plus dans le formulaire" },
    object: { en: "Hello, I would love to hire you for a day (or more, please specify). Here are a few infos about my project:", fr: "Bonjour, j'aimerais vous embaûcher pour une journée (ou plus, merci de préciser). Voici quelques infos sur mon projet:" },
  }
];
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // toutes les 3 secondes
    );
    return () => clearInterval(intervalId); // Nettoyer l'intervalle
  }, []);

  return (
   <>
   <Header />
    <div className={styles.section} id="Contact">

        <div className={styles.gridcol2}>

          {/* PARTIE GAUCHE */}
          <div className={styles.flexcol}>
            <h1>{form[0]}</h1>
            <h2 className='gold'>{form[1]}</h2>
            
            <div className={styles.flexcol} style={{ borderTop: 'black 1px solid', paddingTop: '1rem'}}>
              <TextTransition springConfig={presets.gentle}>
              <p className='gold' style={{textTransform:'lowercase'}}>{words[index % words.length]}</p>
              </TextTransition>
              <p>{blabla}</p>
            </div>
            
            <div className={styles.muguet} style={{marginTop:'5rem'}}>
              <video className={styles.muguetvideo} width="320" height="240" autoPlay loop muted playsInline>
                <source src='/videos/image-de-marque-montpellier.mp4' type='video/mp4' />
              </video>
            </div>

             <div className={styles.pack}>
            {packages.map((pack, i) => (
              <div key={i} className={styles.packitem}>
                <button onClick={() => isEnglish ? setPack(pack.object.en): setPack(pack.object.fr) }>
                  {/* Type */}
                  <h3 className='gold'>
                    {isEnglish ? pack.type.en : pack.type.fr}
                  </h3>

                  {/* Prix */}
                  <p className={styles.price}>
                    {isEnglish ? pack.price.en : pack.price.fr}
                  </p>

                  {/* Services (liste vide pour l'instant) */}
                  {pack.services && pack.services[isEnglish ? 'en' : 'fr'].length > 0 ? (
                    <ul>
                      {pack.services[isEnglish ? 'en' : 'fr'].map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>—</p>
                  )}

                  {/* CTA */}
                  <p className={styles.cta}>
                    {isEnglish ? pack.cta.en : pack.cta.fr}
                  </p>
                  </button>
              </div>
              ))}
            </div>
          </div>

          {/* PARTIE DROITE */}
          <div className={styles.gridcol2asym}>
            <div className={styles.formulaire}>
              <ContactForm langz={langDisplay} infos={indepArray[0]} pack={pack} />
            </div>
          </div>
    </div>
    </div>
    <Switch />
    <Footer />
    </> 
  );
};

export default Form;
