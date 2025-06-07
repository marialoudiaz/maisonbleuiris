import React from 'react'
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

  return (
   <>
      <div className="grid-col3" style={{margin:'2rem 0rem'}}>
        {dataArray.map((item, index) => (
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