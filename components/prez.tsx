'use client';
import React from 'react';
import Marquee from "react-fast-marquee";
import '../styles/App.scss';
import '../globals.css';
import { useData } from '@/app/context/DataContext'; // Import du contexte
// import { useRouter} from 'next/navigation';
import Services from '../components/services-flat';

import authenticity from '../public/icons/approche/authenticity.png';
import nature from '../public/icons/approche/nature.png';
import detail from '../public/icons/approche/detail.png';

import Carousel from '../components/carousel';
import Typewriter from 'typewriter-effect';



const Prez: React.FC = () => {

  // const router = useRouter();
  const { indepArray } = useData(); 
  if (!indepArray || !indepArray[0].presentation || !indepArray[0].expertise || !indepArray[0].cta) {
    return <div>Loading...</div>;
  }
  const { expertise, presentation = []} = indepArray[0];
  const dataArray = [
          {
            index: 0,
            image: nature,
            alt: "cercle avec un trait noir au centre à l'encre de chine",
            titre: `${indepArray[0].values[0]}`,
            text: `${indepArray[0].values[1]}`,
          },
          {
            index: 1,
            image: detail,
            alt: "trombone stylisé à l'encre de chine",
            titre: `${indepArray[0].values[1]}`,
            text: `${indepArray[0].values[3]}`,
          },
           {
            index: 2,
            image: authenticity,
            alt: "plante a lencre de chine",
            titre: `${indepArray[0].values[2]}`,
            text: `${indepArray[0].values[5]}`,
          },
        ];
  

  return (
    <>
    <Services />
      <div className='text-homepage'>
        <Marquee speed={30} style={{ borderTop: '1px solid white', borderBottom: '1px solid white', padding: '1rem' }}>
            <h3 className='syne-bold' style={{ textTransform: 'uppercase'}}>
              {expertise + ' '}
            </h3>
        </Marquee>
      </div>

      <div>
        <div className='name'>
          <h1> MAISON BLEU IRIS | BRANDING POÉTHIQUE</h1>
        </div>
        <div className='prez'>

        <h2>
          {/* <Typewriter
            options={{
              strings: [`${presentation[0]}`],
              autoStart: true,
              loop: true,
            }}
          /> 
          */}
<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString(`${presentation[0]}`)
      // .pauseFor(2500)
      // .deleteAll()
      .start();
  }}
/>



        </h2>

          <h4 id='p-hp'style={{color:'black'}}> {presentation[1]}</h4>
          <p id='prez-txt'> {presentation[2]}</p>
          {/* <p id='prez-txt'> {presentation[2]}</p> */}
          <Carousel dataArray={dataArray} />

          {/* CTA vers le déroulé + formulaire */}
          <button className='btn-transp-dark' style={{ margin: '2rem auto' }}    onClick={() => window.location.href = 'mailto:contact@maisonbleuiris.fr'}>
            {/* <button className='btn-transp-dark' style={{ margin: '2rem auto' }}  onClick={() => router.push('/projets')}></button> */}
          <div>
              <svg
                                className="icon-transp"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label='Arrow Icon'
                              >
                                <path
                                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                  className="fill-white group-hover:fill-white"
                                ></path>
              </svg>
              <p className='btn-transp-p' style={{color:'white'}}>
              {indepArray[0].cta[1]}
              </p>
          </div>
        </button>

        </div>
      </div>
     
    </>
  );
}

export default Prez;
