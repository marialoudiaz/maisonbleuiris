'use client';

export const metadata = {
  title: "Philosophie – Maison Bleue Iris",
  description:
    "Découvrez la philosophie de Maison Bleue Iris : le bleu iris & les piliers de notre expertise.",
};
// version dynamique
// export async function generateMetadata() {
//   return {
//     title: "Philosophie – Maison Bleue Iris",
//     description: "Description générée dynamiquement...",
//   };
// }



import '../../styles/App.scss';
import '../globals.css';
import { useRouter} from 'next/navigation';
import { useData } from '@/app/context/DataContext'; // Import du contexte
import Image from 'next/image';
import React, { useEffect } from 'react';
import Header from '../../components/navbar/Header';
import Switch from '../../components/ui/switch';
import Footer from '../../components/sections/footer';
import print from '../../public/icons/services/icon-piliers-04.png';
import web from '../../public/icons/services/icon-piliers-01.png';
import illu from '../../public/icons/services/icon-piliers-05.png';
import printg from '../../public/icons/services/icon-piliers-gold-04.png';
import webg from '../../public/icons/services/icon-piliers-gold-01.png';
import illug from '../../public/icons/services/icon-piliers-gold-05.png';
import edition from '../../public/icons/services/icon-piliers-06.png';//?
import agence from '../../public/icons/services/icon-piliers-02.png';//?
import campus from '../../public/icons/services/icon-piliers-03.png';//?

import Carousel from '../../components/ui/carousel';

const Philo: React.FC = () => {

  const router = useRouter();
  const { indepArray } = useData(); 
  // Redirect if `indepArray` is not defined
    useEffect(() => {
      if (!indepArray) {
        router.push('/');
      }
    }, [indepArray, router]);
  if (!indepArray || !indepArray[0].philo) {
    return <div>Loading...</div>;
  }
  if (!indepArray) {
    return <div>Loading...</div>;
  }
  const ordi = 'video/gif-iris.mp4';
  const pola= '/img/pola.png'
  const dataArray = [
          {
            index: 0,
            image: printg,
            alt: "print",
            titre: `${indepArray[0].philo[10]}`,
            text: `${indepArray[0].philo[11]}`,
          },
          {
            index: 1,
            image: webg,
            alt: "web",
            titre: `${indepArray[0].philo[12]}`,
            text: `${indepArray[0].philo[13]}`,
          },
           {
            index: 2,
            image: illug,
            alt: "illu",
            titre: `${indepArray[0].philo[14]}`,
            text: `${indepArray[0].philo[15]}`,
          },
        ];
  const experience = [
          {
            index: 0,
            image: edition,
            alt: "edition",
            titre: `${indepArray[0].experience[0]}`,
            text: `${indepArray[0].experience[1]}`,
          },
          {
            index: 1,
            image: illu,
            alt: "illu",
            titre: `${indepArray[0].experience[2]}`,
            text: `${indepArray[0].experience[3]}`,
          },
           {
            index: 2,
            image: print,
            alt: "print",
            titre: `${indepArray[0].experience[4]}`,
            text: `${indepArray[0].experience[5]}`,
          },
           {
            index: 3,
            image: web,
            alt: "web",
            titre: `${indepArray[0].experience[6]}`,
            text: `${indepArray[0].experience[7]}`,
          },
           {
            index: 4,
            image: agence,
            alt: "agence",
            titre: `${indepArray[0].experience[8]}`,
            text: `${indepArray[0].experience[9]}`,
          },
           {
            index: 5,
            image: campus,
            alt: "campus",
            titre: `${indepArray[0].experience[10]}`,
            text: `${indepArray[0].experience[11]}`,
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
              src={ordi}
              style={{ width: '40%', height: 'auto', display: 'block' }}
          ></video>

          <h4> {indepArray[0].philo[1]}</h4>

         

          <p id='prez-txt'> {indepArray[0].philo[2]} </p>
          <p id='prez-txt'> {indepArray[0].philo[3]} </p>
          <p id='prez-txt'> {indepArray[0].philo[4]} </p>
           <Image
            src={pola}
            alt='icon'
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
                        alt={item.alt} 
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