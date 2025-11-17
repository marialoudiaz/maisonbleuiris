import React from 'react'
import authenticity from '../public/icons/approche/authenticity.png';
import nature from '../public/icons/approche/nature.png';
import minimalism from '../public/icons/approche/minimalism.png';
import Image from 'next/image';
import Carousel from '../components/carousel';
// import Typewriter from 'typewriter-effect';
import '../styles/App.scss'
import { useData } from '@/app/context/DataContext';

const Approche: React.FC = () => {

      //Array recue
      const {indepArray}=useData();
      //Si données pas encore dispos
      if (!indepArray[0] || !indepArray[0].values){
        return <div>Loading...</div>
      }
      
       // Les élements du carousel
       const dataArray = [
        {
          index: 0,
          image: authenticity,
          alt: "cercle avec un trait noir au centre à l'encre de chine",
          titre: `${indepArray[0].values[0]}`,
          text: `${indepArray[0].values[0]}`,
        },
        {
          index: 1,
          image: minimalism,
          alt: "trombone stylisé à l'encre de chine",
          titre: `${indepArray[0].values[1]}`,
          text: `${indepArray[0].values[1]}`,
        },
         {
          index: 2,
          image: nature,
          alt: "plante a lencre de chine",
          titre: `${indepArray[0].values[2]}`,
          text: `${indepArray[0].values[2]}`,
        },
      ];


  return (
    <>
      <div>
        <div className='prez'>
          <div className='flex-wrap'>
              <Image
                src="/logo/medaillon.png"
                alt="le logo sous forme de médaillon"
                width={96}
                height={100}
              />
             
              <Carousel dataArray={dataArray} />
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Approche