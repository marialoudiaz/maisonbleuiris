import React, {useState, useEffect} from 'react'
import '../styles/App.scss';
import Image, { StaticImageData } from 'next/image';


interface CarouselProps {
  dataArray: {
    index: number;
    image: StaticImageData;
    alt: string;
    titre: string;
    text: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({dataArray}) => {
   //L'index de l'image active  
   const [activeIndex, setActiveIndex] = useState(0);
   const [isMobile, setIsMobile] = useState(false);

     // Si en mode mobile, afficher tous les éléments
     const activeItems = isMobile ? dataArray : dataArray.slice(activeIndex, activeIndex + 3);
     if (!isMobile && activeItems.length < 3) {
       activeItems.push(...dataArray.slice(0, 3 - activeItems.length));
     }
    // Fonction pour vérifier la taille de l'écran
    const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    };
 
   useEffect(() => {
    setIsMobile(window.innerWidth <= 768); // Initialisation lors du premier rendu côté client
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
   <>
      <div className="grid-col3" style={{margin:'2rem 0rem'}}>
        {activeItems.map((item, index) => (
          <div key={index} className="flex-wrap" id="carousel-item">
            <Image 
              src={item.image} 
              alt={item.alt} 
              width={100}
              height={100}
            />
            <h4>{item.titre}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
   </>
  )
}

export default Carousel