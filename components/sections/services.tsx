import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useData } from '@/app/context/DataContext';


function Services() {
  const router = useRouter();
  const {lang} = useData();
  const langIndex = lang === 'fr' ? 1 : 0; // 0 pour EN, 1 pour FR
  const { indepArray } = useData(); 
  

 const services = [
    {
      id: 1,
      title: ['Web dev', 'Développement web'],
      img: '/images/services/services-web-montpellier.png',
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
      img: '/images/services/services-packaging-montpellier.png',
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
      img: '/images/services/services-illustration-montpellier.png',
      alt: 'Illustration Artistique',
      txt: [
        'All types of illustrations: brand identities, scientific diagrams, book covers.',
        'Tous types d’illustrations: identités visuelles, graphiques scientifiques, couvertures de livres',
      ],
      link: '/projet/3',
    },
  ];

  return (
 <>
    <div className='grid-col3' id='grid-srv' style={{ margin: '2rem', justifyContent:'center' }}>
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
          <button className='btn-transp-dark' style={{ margin: '2rem auto' }}  onClick={() => router.push('/contact-us')}>
          <div>
              <svg
                className="icon-transp"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
                aria-label='Arrow Icon'
              >
             <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-white group-hover:fill-white"></path>
              </svg>
              <p className='btn-transp-p' style={{color:'white'}}>
              {indepArray[0].cta[3]}
              </p>
          </div>
    </button>
  </>
  );
}

export default Services;
