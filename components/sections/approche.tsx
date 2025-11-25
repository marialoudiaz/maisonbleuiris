import React from 'react'
import authenticity from '../public/images/icons/approche/authenticity.png';
import nature from '../public/images/icons/approche/nature.png';
import minimalism from '../public/images/icons/approche/minimalism.png';
import Image from 'next/image';
import Carousel from '../ui/carousel';
import '../../styles/App.scss';
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
          alt: [
            "Cercle avec un trait noir au centre, dessiné à l’encre de Chine.",
            "Circle with a black line in the center, drawn in China ink."
          ],
          titre: indepArray[0].values[0],
          text: indepArray[0].values[0],
        },
        {
          index: 1,
          image: minimalism,
          alt: [
            "Trombone stylisé, dessiné à l’encre de Chine.",
            "Stylized paperclip drawn in China ink."
          ],
          titre: indepArray[0].values[1],
          text: indepArray[0].values[1],
        },
        {
          index: 2,
          image: nature,
          alt: [
            "Plante dessinée à l’encre de Chine.",
            "Plant drawn in China ink."
          ],
          titre: indepArray[0].values[2],
          text: indepArray[0].values[2],
        },
      ];



  return (
    <>
      <div>
        <div className='prez'>
          <div className='flex-wrap'>
              <Image
                src="/images/logo/medaillon.png"
                alt="le logo sous forme de médaillon avec l'iris à l'encre de chine"
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