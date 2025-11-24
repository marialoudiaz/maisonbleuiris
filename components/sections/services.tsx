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
      img: '/images/services/serv-web.png',
      alt: 'Site Web Design',
      txt: [
        'Design & development of all types of websites. Onepage, multipages and e-commerce.',
        'Conception et développement de tous types de sites web. Même les plus complexes et créatifs.',
      ],
      link: '/projet/1',
    },
    {
      id: 2,
      title: ['Branding strategy', 'Stratégie de marque'],
      img: '/images/services/serv-packa.png',
      alt: 'print',
      txt: [
        'Creation and promotion of your brand: from strategy to visual conception.',
        'Développement et promotion de votre image : de la stratégie à la conception graphique.',
      ],
      link: '/projet/2',
    },
    {
      id: 3,
      title: ['Publishing & Illustration', 'Édition & Illustration'],
      img: '/images/services/nda-2.png',
      alt: 'Illustration Artistique',
      txt: [
        'All types of illustrations: brand identities, scientific diagrams, book covers.',
        'Tous types d’illustrations: identités visuelles, graphiques scientifiques, couvertures de livres',
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
      {/* <div>ajouter bouton vers packages</div> */}
    </div>
  );
}

export default Services;
