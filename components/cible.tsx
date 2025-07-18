// components/Cible.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { useData } from '@/app/context/DataContext'; // Importer le contexte
import { useRouter} from 'next/navigation';
import '../styles/App.scss';
import '../globals.css';


interface CibleProps {
  scrollYProgress: MotionValue<number>;
}

const Cible: React.FC<CibleProps> = ({ scrollYProgress }) => {
  
  // Récupérer les données du contexte
  const { indepArray } = useData(); 
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const [isHovered, setisHovered] = useState<boolean>(false);
  const router = useRouter();
  // const isMobile = window.innerWidth <= 768;
  const [isVisible, setIsVisible] = useState(false);


  const sendChildren = () => {
    console.log(isHovered);
    setisHovered(true);
  };
  const handleMouseLeave = () => {
    setisHovered(false);
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <motion.div 
      style={{ scale, rotate }} 
      onMouseEnter={sendChildren}  
      onMouseLeave={handleMouseLeave}
      id='div-hp'
      className="relative h-screen text-[3.5vw] text-center flex flex-col items-center justify-center text-white pb-[10vh] overflow-hidden"
     >
  {/* VIDEO DE FOND */}
    <video 
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" 
      autoPlay 
      loop 
      muted 
      playsInline
    >
      <source src="/video/iris2.mp4" />
      Ton navigateur ne supporte pas les vidéos HTML5.
    </video>

  <div className='container'>
    <h1 className={`text ${isVisible ? 'textVisible freight-book' : ''}`}> 
      {indepArray[0].hp[0]}
    </h1>
    <h2 className={`text gold freight-ita ${isVisible ? 'textVisible2' : ''}`}>{indepArray[0].hp[1]}</h2>
    <h2 className={`text ${isVisible ? 'textVisible3 freight-book' : ''}`} style={{color:'white'}}>{indepArray[0].hp[2]}</h2>
  </div> 




  
  <button className='btn-transp'>
    <div>
      <svg className='icon-transp' viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-white group-hover:fill-white"
        ></path>
      </svg>

      <p 
        className='btn-transp-p' 
        style={{ fontFamily: 'syne', fontWeight: '600', color: 'white' }}
        onClick={() => router.push('/homepage/#Contact')}
      >
        {indepArray[0].cta[0]}
      </p>
    </div>
  </button>
</motion.div>
  );
};

export default Cible;
