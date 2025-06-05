import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Services() {
  const router = useRouter();
  const services = [
    {
      id: 1,
      title: ['Web dev', 'Développement web'],
      img: '/projets/services/serv-web.png',
      alt: 'Site Web Design',
      txt:'Design & development of websites. Onepage, multipages and e-commerce.',
      link:'/projet/1'
    },
    {
      id: 2,
      title: ['Print & Packaging', 'Design imprimé'],
      img: '/projets/services/serv-packa.png',
      alt:'print',
      txt: 'Ideal for artisans, farmers, chefs, conscious producers, food brands & hospitality spaces',
      link:'/projet/2'
    },
    {
      id: 3,
      title: ['Illustration', 'Illustration'],
      img: '/projets/services/serv-livre.png',
      alt: 'Illustration Artistique',
      txt:'All types of illustrations for brand identity and book covers',
      link:'/projet/3'
    },
  ];


  return (

    <div className='grid-col3' style={{margin:'2rem'}}>

      {services.map((item) => (
        <div key={item.id} id='Services' className='serv-flat-div' onClick={() => router.push(`${item.link}`)}>
          <h1 className="serv-flat-title">{item.title[0]}</h1>
          <p>{item.txt}</p>
          <div className='service-img'>
            <Image
            src={item.img}
            alt={item.alt}
            width={200}
            height={200}
          />
          </div>
          
        </div>
      ))}

    </div>
  );
}

export default Services;
