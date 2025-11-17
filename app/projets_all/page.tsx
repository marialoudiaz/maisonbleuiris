'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '../../styles/App.scss';
import '../../globals.css';
import Header from '../../components/navbar/header';

const Projets = () => {
  const gridContainerRef = useRef(null);
  const imgContainerRef = useRef([]);
  const { indepArray } = useData();
  const router = useRouter();

  const [imageSource, setImageSource] = useState('/icons/interface/icon-eye-1.png');

  useEffect(() => {
    if (!indepArray) router.push('/');
  }, [indepArray, router]);

  if (!indepArray) return <div>Loading...</div>;

  const isEnglish = indepArray[0].Lang === 'EN';
  const langIndex = isEnglish ? 0 : 1;

  const variableENorFr = [
    ['All of our projects'],
    ['Tous nos projets']
  ];
  const textVariables = isEnglish ? variableENorFr[0] : variableENorFr[1];

  const prev = '/icons/interface/icon-eye-1.png';
  const next = '/icons/interface/icon-eye-2.png';

  const projectsArr = [
    //branding
    { id: 1, title: "Domaine de la Pinède", img: '/projets/web/bec/bec-hp-1.jpg', video: '/projets/web/bec/bec-hover.mp4', category:["Web development","Développement web"] },
    { id: 2, title: "Georges, Aïoli Catalan", img: '/projets/branding-strategy/georges/georges-hp.png', video: '/projets/branding-strategy/georges/video-hover.mp4', category:["Branding strategy","Stratégie de marque"] },
    { id: 3, title: "V&B Avocats", img: '/projets/branding-strategy/vb/vb-img.jpg', video: '/projets/branding-strategy/vb/vb-video-hover.mp4', category:["Branding strategy","Stratégie de marque"] },
    //web
    { id: 4, title: "Naissance d'une amitié", img: '/projets/illu_edition/nda/nda-2.png', video: '/projets/illu_edition/nda/nda-2_hover.mp4', category:["Illustration, Print & Publishing","Illustration & Édition"] },
    { id: 5, title: "Pascale Laffon", img: '/projets/web/pl/pl-img.jpg', video: '/projets/web/pl/pl-video-hover.mp4', category:["Web development","Développement web"] },
    //illu
    { id: 6, title: "Posters", img: '/projets/illu_edition/posters/posters-img.jpg', video: '/projets/illu_edition/nda/nda-2_hover.mp4', category:["Illustration, Print & Publishing","Illustration & Édition"] },
    { id: 7, title: "Pile-Poële", img: '/projets/illu_edition/pp/pp-img.png', video: '/projets/illu_edition/pp/video_type_hp.mp4', category:["Illustration, Print & Publishing","Illustration & Édition"] },
    { id: 8, title: "En faveur d'une ...", img: '/projets/illu_edition/memoire/memoire1.jpg', video: '/projets/illu_edition/memoire/memoire-hover.mp4', category:["Illustration, Print & Publishing","Illustration & Édition"] },
  ];

  // --- Regrouper les projets par catégorie ---
  const projectsByCategory = {};
  const uniqueCategories = [];

  for (const project of projectsArr) {
    const category = project.category[langIndex];

    if (!projectsByCategory[category]) {
      projectsByCategory[category] = [];
      uniqueCategories.push(category);
    }

    projectsByCategory[category].push(project);
  }

  const handleHover = () => setImageSource(next);
  const handleHoverOut = () => setImageSource(prev);
  const handleDiscover = (projectId) => router.push(`/projet/${projectId}`);

  return (
    <>
    <Header />
    <div
      className='section'
      id='projets'
      style={{marginTop:'5rem'}}
    >
      
      {/* TITRE PAGE */}
      <h2 >{textVariables[0]}</h2>


      <div className='grid-container-projets-all' ref={gridContainerRef} style={{marginTop:'2rem'}}>
        
        {uniqueCategories.map((categoryName, catIndex) => [

          /* -------- COLONNE 1 : LE TITRE DE SECTION -------- */
          <h3
            key={`title-${catIndex}`}
            className="category-title"
          >
            {categoryName}
          </h3>,

          /* -------- COLONNE 2 : LES PROJETS -------- */
          <div
            key={`row-${catIndex}`}
            className="category-row"
          >
            {projectsByCategory[categoryName].map((project) => (
              <div
                className='project-wrapper-all'
                key={project.id}
                onClick={() => handleDiscover(project.id)}
                // style={{ marginBottom: '2rem' }}
              >

                <div
                  className='projectImgContainerAll'
                  ref={(el) => { imgContainerRef.current[project.id] = el }}
                >
                  <video className='projectHoverVideoAll' autoPlay loop muted playsInline>
                    <source src={project.video} type='video/mp4' />
                  </video>

                  {project.img.endsWith('.mp4') ? (
                    <video className='projectImg' autoPlay loop muted playsInline>
                      <source src={project.img} type='video/mp4' />
                    </video>
                  ) : (
                    <div
                      className='projectImgAll'
                      style={{
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  )}
                </div>

                <div className='flex-center'>
                  <p className='projet-p-all'>{project.title}</p>
                  <div
                    className='carousel-btn-all'
                    style={{ marginLeft: '1rem', marginBottom: '.2rem' }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverOut}
                  >
                    <Image
                      src={imageSource}
                      width={40}
                      height={40}
                      alt='icon'
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        ])}

      </div>

    </div>
    </>
    
  );
};

export default Projets;
