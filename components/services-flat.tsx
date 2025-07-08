import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useData } from '@/app/context/DataContext';


function Services() {
  const router = useRouter();
  const {lang} = useData();
  const langIndex = lang === 'fr' ? 1 : 0; // 0 pour EN, 1 pour FR

 const services = [
    {
      id: 1,
      title: ['Web dev', 'Développement web'],
      img: '/projets/services/serv-web.png',
      alt: 'Site Web Design',
      txt: [
        'Design & development of websites. Onepage, multipages and e-commerce.',
        'Conception et développement de sites web. Onepage, multipages et e-commerce.',
      ],
      link: '/projet/1',
    },
    {
      id: 2,
      title: ['Print & Packaging', 'Design imprimé'],
      img: '/projets/services/serv-packa.png',
      alt: 'print',
      txt: [
        'Ideal for artisans, farmers, chefs, conscious producers, food brands & hospitality spaces',
        'Idéal pour les artisans, agriculteurs, chefs, producteurs engagés, marques alimentaires et lieux de restauration éthiques et responsables',
      ],
      link: '/projet/2',
    },
    {
      id: 3,
      title: ['Illustration', 'Illustration'],
      img: '/projets/services/serv-livre.png',
      alt: 'Illustration Artistique',
      txt: [
        'All types of illustrations for brand identity and book covers',
        'Tous types d’illustrations pour les identités visuelles et les couvertures de livres',
      ],
      link: '/projet/3',
    },
  ];

  return (
    <div className='grid-col3' id='grid-srv' style={{ margin: '2rem' }}>
      {services.map((item) => (
        <div
          key={item.id}
          id='Services'
          className='serv-flat-div'
          onClick={() => router.push(`${item.link}`)}
        >
          <h1 className='serv-flat-title'>{item.title[langIndex]}</h1>
          <p>{item.txt[langIndex]}</p>
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
