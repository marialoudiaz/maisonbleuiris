// src/components/Form.tsx
import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import ContactForm from './contact-form'; // Remplacez par le chemin correct pour le composant
import '../../styles/App.scss';
import '../../globals.css';
import { useData } from '@/app/context/DataContext'; // Importer le contexte

const Form: React.FC = () => {
  
  const { indepArray } = useData();
  const form = indepArray[0].form;
  const display = Array.isArray(indepArray[0].form) ? indepArray[0].form[0] : indepArray[0].form;
  const words = indepArray[0].words ? indepArray[0].words : ['gogo']; // Assurez-vous que c'est un tableau
  const blabla = indepArray[0].form[12];
  const [index, setIndex] = useState(0);
  const langDisplay = indepArray[0].Lang;
  const isEnglish = indepArray[0].Lang === 'EN';
  console.log('langg', isEnglish)

const packages = [
  {
    type: { en: "One-page website pack", fr: "Pack site one-page" },
    price: { en: "A$2000", fr: "€1000" },
    services: { en: [], fr: [] },
    cta: { en: "Click the pack, you seek and tell me more in the form.", fr: "Cliquer sur le pack qui vous intéresse et dîtes m'en plus dans le formulaire" }
  },
  {
    type: { en: "First Logo pack", fr: "Pack Premier Logo" },
    price: { en: "800A$", fr: "400€" },
    services: { en: [], fr: [] },
    cta: { en: "Click the pack, you seek and tell me more in the form.", fr: "Cliquer sur le pack qui vous intéresse et dîtes m'en plus dans le formulaire" }
  },
  {
    type: { en: "Daily rate", fr: "TJM (Tarif jour)" },
    price: { en: "A$770 per day", fr: "385€ à la journée" },
    services: { en: [], fr: [] },
    cta: { en: "Click the pack, you seek and tell me more in the form.", fr: "Cliquer sur le pack qui vous intéresse et dîtes m'en plus dans le formulaire" }
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
    <div className='section' id="Contact">
        <div className='grid-col2'>

          {/* PARTIE GAUCHE */}
          <div className='flex-col'>
            <h2>{form[0]}</h2>
            <h2>{form[1]}</h2>
            <h2 className='gold'>{form[2]}</h2>
            
            <div className='text-block' style={{ borderTop: 'black 1px solid', paddingTop: '1rem', display: display, flexDirection: 'column' }}>
              <TextTransition springConfig={presets.gentle}>
              <p className='syne gold' style={{textTransform:'lowercase'}}>{words[index % words.length]}</p>
              </TextTransition>
              <p>{blabla}</p>
            </div>
            
            <div id="muguet">
              <video id='muguetvideo' width="320" height="240" autoPlay loop muted playsInline>
                <source src='/video/image-de-marque-montpellier.mp4' type='video/mp4' />
              </video>
            </div>

            <div className='pack'>
            {packages.map((pack, i) => (
              <div key={i} className="pack-item">

                {/* Type */}
                <h3>
                  {isEnglish ? pack.type.en : pack.type.fr}
                </h3>

                {/* Prix */}
                <p className="price">
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
                <p className="cta">
                  {isEnglish ? pack.cta.en : pack.cta.fr}
                </p>
              </div>
            ))}
            </div>

          
          </div>

          {/* PARTIE DROITE */}
          <div className='grid-col2-asym'>
            <div className='formulaire'>
              <ContactForm langz={langDisplay} infos={indepArray[0]} />
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default Form;
