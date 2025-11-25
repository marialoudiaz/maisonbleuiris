'use client';
import '../../styles/App.scss';
import '../globals.css';
import { useRouter} from 'next/navigation';
import { useData } from '@/app/context/DataContext'; // Import du contexte
import Image from 'next/image';
import React, { useEffect } from 'react';
//composants
import Header from '../../components/navbar/header';
import Switch from '../../components/ui/switch';
import Footer from '../../components/sections/footer';
import Carousel from '../../components/ui/carousel';
//images
import print from '../../public/images/icons/services/icon-piliers-04.png';
import web from '../../public/images/icons/services/icon-piliers-01.png';
import illu from '../../public/images/icons/services/icon-piliers-05.png';
import printg from '../../public/images/icons/services/icon-piliers-gold-04.png';
import webg from '../../public/images/icons/services/icon-piliers-gold-01.png';
import illug from '../../public/images/icons/services/icon-piliers-gold-05.png';
import edition from '../../public/images/icons/services/icon-piliers-06.png';
import agence from '../../public/images/icons/services/icon-piliers-02.png';
import campus from '../../public/images/icons/services/icon-piliers-03.png';


const Philo: React.FC = () => {

  const router = useRouter();
  const { indepArray } = useData(); 
    // Determine language settings
  const isEnglish = indepArray[0].Lang === 'EN';
  // Redirect if `indepArray` is not defined
    useEffect(() => {
      if (!indepArray || !indepArray[0].philo) {
        router.push('/');
      }
    }, [indepArray, router]);
  if (!indepArray || !indepArray[0].philo) {
    return <div>Loading...</div>;
  }
  const maisonbleuiris = '/videos/maison-bleu-iris-animation.mp4';
  const lebleuiris= '/images/le-bleu-iris.png'
const dataArray = [
  {
    index: 0,
    image: printg,
    alt: [
      "Icône représentant un bloc de post-it symbolisant la catégorie print. Dessiné à l’encre de Chine selon la charte graphique.",
      "Icon of a block of sticky notes representing the print category. Drawn with China Ink in accordance with the brand guidelines."
    ],
    titre: indepArray[0].philo[10],
    text: indepArray[0].philo[11],
  },
  {
    index: 1,
    image: webg,
    alt: [
      "Icône représentant un ordinateur portable souriant pour symboliser la catégorie web. Dessiné à l’encre de Chine selon la charte graphique.",
      "Icon of a smiling laptop representing the web category. Drawn with China Ink in accordance with the brand guidelines."
    ],
    titre: indepArray[0].philo[12],
    text: indepArray[0].philo[13],
  },
  {
    index: 2,
    image: illug,
    alt: [
      "Icône représentant un cœur dessiné au stylo pour symboliser la catégorie illustration. Dessiné à l’encre de Chine selon la charte graphique.",
      "Icon of a heart drawn with a pen representing the illustration category. Drawn with China Ink in accordance with the brand guidelines."
    ],
    titre: indepArray[0].philo[14],
    text: indepArray[0].philo[15],
  },
];
const experience = [
  {
    index: 0,
    image: edition,
    alt: [
      "Icône représentant un livre avec une spirale sur la couverture, symbolisant la catégorie édition. Dessiné à l’encre de Chine selon la charte graphique.",
      "Icon of a book with a spiral on the cover representing the edition category. Drawn with China Ink in accordance with the brand guidelines."
    ],
    titre: indepArray[0].experience[0],
    text: indepArray[0].experience[1],
  },
  {
    index: 1,
    image: illu,
    alt: [
      "Icône représentant un cœur dessiné au stylo, symbolisant la catégorie illustration. Dessiné à l’encre de Chine selon la charte graphique.",
      "Icon of a heart drawn with a pen representing the illustration category. Drawn with China Ink in accordance with the brand guidelines."
    ],
    titre: indepArray[0].experience[2],
    text: indepArray[0].experience[3],
  },
  {
    index: 2,
    image: print,
    alt: [
      "Icône représentant un bloc de post-it symbolisant la catégorie print. Dessiné à l’encre de Chine selon la charte graphique.",
      "Icon of a block of sticky notes representing the print category. Drawn with China Ink in accordance with the brand guidelines."
    ],
    titre: indepArray[0].experience[4],
    text: indepArray[0].experience[5],
  },
  {
    index: 3,
    image: web,
    alt: [
      "Icône représentant un ordinateur portable souriant symbolisant la catégorie web. Dessiné à l’encre de Chine selon la charte graphique.",
      "Icon of a smiling laptop representing the web category. Drawn with China Ink in accordance with the brand guidelines."
    ],
    titre: indepArray[0].experience[6],
    text: indepArray[0].experience[7],
  },
  {
    index: 4,
    image: agence,
    alt: [
      "Icône représentant des gratte-ciel symbolisant la catégorie agence. Dessiné à l’encre de Chine selon la charte graphique.",
      "Icon of skyscrapers representing the agency category. Drawn with China Ink in accordance with the brand guidelines."
    ],
    titre: indepArray[0].experience[8],
    text: indepArray[0].experience[9],
  },
  {
    index: 5,
    image: campus,
    alt: [
      "Icône représentant un chapeau de diplômé symbolisant la catégorie campus. Dessiné à l’encre de Chine selon la charte graphique.",
      "Icon of a graduate hat representing the campus category. Drawn with China Ink in accordance with the brand guidelines."
    ],
    titre: indepArray[0].experience[10],
    text: indepArray[0].experience[11],
  },
];


    
  return (
    <>
    <Header/>
  
      <div>
        
        {/* philosphie */}
        <div className='philo-prez' style={{paddingTop:'5rem'}}>
          <h1>{indepArray[0].philo[0]}</h1>
          
          <video
              playsInline
              controls={false}
              autoPlay
              loop
              muted
              src={maisonbleuiris}
              style={{ width: '40%', height: 'auto', display: 'block' }}
          >
          </video>

          <h4> {indepArray[0].philo[1]}</h4>
            <p id='prez-txt'> {indepArray[0].philo[2]} </p>
            <p id='prez-txt'> {indepArray[0].philo[3]} </p>
            <p id='prez-txt'> {indepArray[0].philo[4]} </p>
            <Image
              src={lebleuiris}              
              alt={isEnglish? 'Polaroid of a blue iris named Blue Iris pantone to represent the meaning behind the name Maison Bleu Iris.': "Polaroid d'une iris bleue appelée Pantone Iris Bleu pour représenter la symbolique derrière le nom Maison Bleu Iris."}
              width={350}
              height={0}
              className='pola'
            />
        </div>

        {/* expertises */}
        <div className='prez'>
          <h1> {indepArray[0].philo[5]}</h1>
          <Carousel dataArray={dataArray} />
          <div className='space'></div>
          <div className='space'></div>
          <h4> {indepArray[0].philo[6]}</h4>
          <div className='space'></div>

          <div className='bg-frise'>
            <div className='bg-card'>
            {experience.map((item, index) => (
                      <div key={index} className="flex-wrap service-img">
                      <h4>{item.titre}</h4>
                        <Image 
                          src={item.image} 
                          alt={isEnglish? item.alt[1]: item.alt[0]} // FR = 0, EN = 1
                          width={40}
                          height={40}
                        />
                        <p style={{fontSize:'15px'}}>{item.text}</p>
                      </div>
                    ))}
            </div>
          </div>
          <div className='space'>
            <p id='prez-txt'> {indepArray[0].philo[7]} </p>
           <br></br>
           <p id='prez-txt'> {indepArray[0].philo[8]} </p>
            <p id='prez-txt'> {indepArray[0].philo[9]} </p>
          </div>          
        </div>
      </div>
     <Switch />
     <Footer />
    </>
  );
}

export default Philo;