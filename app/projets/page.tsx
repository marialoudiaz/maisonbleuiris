'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../styles/App.scss';
import '../../globals.css';
import Header from '../../components/navbar/header';

const Projets = () => {
  const gridContainerRef = useRef(null);
  const imgContainerRef = useRef([]);
  const descriptionRef = useRef(null);
  const { indepArray } = useData();
  const router = useRouter();

  // Set default values for all Hooks
  const [imageSource, setImageSource] = useState('/icons/interface/icon-eye-1.png');
  const [isMobile, setIsMobile] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  // Redirect if `indepArray` is not defined
  useEffect(() => {
    if (!indepArray) {
      router.push('/');
    }
  }, [indepArray, router]);

  // Handle resizing to determine if on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!indepArray) {
    return <div>Loading...</div>;
  }

  // Determine language settings
  const isEnglish = indepArray[0].Lang === 'EN';
  const variableENorFr = [
    ['Works, Works, Works', 'Discover', 'Previous', 'scroll right to learn more', 'Discover my other projects'],
    ['Projets, projets, projets', 'Découvrir', 'Précédent', 'scroller à droite pour en apprendre +', 'Découvrir mes autres projets']
  ];
  const textVariables = isEnglish ? variableENorFr[0] : variableENorFr[1];
  const prev = '/icons/interface/icon-eye-1.png';
  const next = '/icons/interface/icon-eye-2.png';
  const {cta} = indepArray[0];

  // Define project array

    // Menu des projets
    const projectsArr = [
      //bec
      {
        id: 1,
        img: '/projets/bec/bec-hp-1.jpg',
        video: '/projets/bec/bec-hover.mp4',
        title: ["Domaine de la Pinède", "Domaine de la Pinède"],
        baseline: ['Right in the heart of the Camargue','Au coeur de la Camargue exactement'],
        text:[
          "Domaine de la Pinède/La Manade BEC invites visitors to a unique immersion into the heart of Camargue tradition, through a website designed as a true storytelling experience.", 
          "Domaine de la Pinède/La Manade BEC invite à une immersion unique au cœur de la tradition camarguaise, à travers un site web pensé comme un véritable conte."],
        text2:[
          "Each detail is carefully crafted to provide an authentic experience: immersive videos, a page dedicated to the warm ambiance of the place, and web design that reimagines navigation.",
          "Chaque détail est soigneusement travaillé pour offrir une expérience authentique : des vidéos immersives, une page dédiée à l’ambiance chaleureuse du lieu, et un webdesign qui réenchante la navigation"],
        link: ['Discover the project',"Découvrir le projet"],
        onClick: ['https://manade-bec.fr', '_blank']
      },
      //georges
      {
        id: 2,
        img: '/projets/georges/georges-hp.png',
        video: '/projets/georges/georges-hp.mp4',
        title: ["Georges", "Georges"],
        baseline: ['The soul of the Canigou',"L'âme du Canigou"],
        text:[
          "Born from a legend rooted at the summit of Mount Canigou, Georges aïoli is more than a sauce — it's the living memory of an ancient craft, passed down by a solitary and wise hermit. Each jar holds the strength of the mountains, the scent of wild garlic, and the patience of a hand-forged ritual.", 
          ""],
        text2:[
          "This simple, authentic packaging pays tribute to that story — of a man, a mountain, and a promise. More than a sauce: the soul of Canigou.",
          ""],
        link: ['Discover the project',"Découvrir le projet"],
        onClick: ['https://georges-aioli.fr', '_blank']
      },
      //soup
      {
        id: 3,
        img: '/projets/soup/mockup-livre.jpg',
        video: '/projets/soup/soup_hover.mp4',
        title: ["Soups","Soup"],
        baseline: ["An eye for an eye, a story for a soup","Oeil pour oeil, soupe pour souvenir"],
        text:[
          "This cover captures the warm and authentic spirit of Soupes, a heartfelt collection of traditional recipes, family memories, and time-honored skills passed down through generations.", 
          ""],
        text2:[
          "The delicate red sketch evokes a rustic kitchen where the comforting flavors of Southern France gently simmer. The refined typography, paired with the textured paper, pays tribute to the simplicity and richness of the culinary heritage passed on by the author Gisèle Perrin’s grandmother.",
          ""],
        link: ['Discover the project',"Découvrir le projet"],
        onClick: ['https://marialoudiaz.fr', '_blank']
      },
      
    ]; 

  // Functions to handle hover effects and toggling text
  const handleHover = () => setImageSource(next);
  const handleHoverOut = () => setImageSource(prev);
  const toggleFullText = () => setShowFullText(!showFullText);

  // Function to navigate to project details
  const handleDiscover = (projectId) => router.push(`/projet/${projectId}`);
  // Function to navigate to all projects
  const handleDiscoverProj = () => router.push(`/projets_all`);

  return (
    <>
      <Header />
      <div className='section' id='projets' style={{ marginTop: '7rem' }}>
        <h2>{textVariables[0]}</h2>

        <div id='projets'>
          <div className='grid-container-projets' ref={gridContainerRef}>
            {projectsArr.map((project, index) => (
              <div className='project-wrapper' key={index} style={{ marginBottom: '2rem' }}>
                <div className='projectImgContainer' 
                    ref={(el) => {imgContainerRef.current[index] = el}} 
                    onClick={() => handleDiscover(project.id)}
                >
                  <video className='projectHoverVideo' autoPlay loop muted playsInline>
                    <source src={project.video} type='video/mp4' />
                  </video>

                  {project.img.includes('.mp4') ? (
                    <video className='projectImg' autoPlay loop muted playsInline>
                      <source src={`${project.img}`} type='video/mp4' />
                    </video>
                  ) : (
                    <div
                      className='projectImg'
                      style={{
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  )}
                </div>

                <div className='project-description' ref={descriptionRef}>
                  <h3 className='project-title'>{project.baseline[isEnglish ? 0 : 1]}</h3>
                  <p className='project-txt short-text' style={{ paddingLeft: '3rem', paddingRight: '2rem' }}>
                    {isMobile && !showFullText ? `${project.text[isEnglish ? 0 : 1].slice(0, 200)}...` : project.text[isEnglish ? 0 : 1]}
                  </p>
                  <p className={`project-txt full-text${isMobile && showFullText ? 'show' : ''}`} style={{ paddingLeft: '3rem', paddingRight: '2rem' }}>
                    {project.text2[isEnglish ? 0 : 1]}
                  </p>
                  {isMobile && (
                    <div className='btn-black en-savoir-plus' onClick={toggleFullText}>
                      <p style={{ textAlign: 'center' }}>{showFullText ? `${isEnglish ? 'Show less' : 'Afficher moins'}` : `${isEnglish ? 'Show full text' : 'Afficher le texte complet'}`}</p>
                    </div>
                  )}

                  <div className='inline-flex'>
                    <button className='btn-black' onClick={() => handleDiscover(project.id)}>
                      <p>{textVariables[1]}</p>
                    </button>
                    <button className='btn-black' onClick={() => handleDiscover(project.id)}>
                      <p>{textVariables[2]}</p>
                    </button>
                  </div>
                </div>

                <div className='flex-center'>
                  <p className='projet-p'>{project.title[isEnglish ? 0 : 1]}</p>
                  <div className='carousel-btn' style={{ marginLeft: '1rem', marginBottom: '.2rem' }} onClick={handleHover}>
                    <Image
                      src={imageSource ?? ''}
                      alt='icon'
                      onMouseOver={handleHover}
                      onMouseOut={handleHoverOut}
                      width={100}
                      height={0}
                      style={{ display: 'flex', width: '40px', margin: '.2rem 0rem 0rem .3rem', transition: 'transform 2s ease' }}
                    />
                  </div>
                  <p className='projet-p' style={{ color: 'black' }}>{textVariables[3]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='center'>
            <div className='flex-wrap-center'>
              <button 
                className='btn-transp-dark' 
                // onClick={() => window.open('https://www.behance.net/mariadiaz116', '_blank', 'noreferrer')}
                onClick={() =>handleDiscoverProj()}
              >
                        <div>
                          <svg
                            className="icon-transp"
                            viewBox="0 0 16 19"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label='Arrow Icon'
                          >
                            <path
                              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                              className="fill-white group-hover:fill-gray-400"
                            ></path>
                          </svg>
                          <p className='btn-transp-p' style={{ color: 'white' }}>
                          {textVariables[4]}
                          </p>
                        </div>
              </button>

              <button 
                className='btn-transp-dark' 
                // onClick={() => window.open('https://www.behance.net/mariadiaz116', '_blank', 'noreferrer')}
                onClick={() =>handleDiscoverProj()}
              >
                        <div>
                          <svg
                            className="icon-transp"
                            viewBox="0 0 16 19"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label='Arrow Icon'
                          >
                            <path
                              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                              className="fill-white group-hover:fill-gray-400"
                            ></path>
                          </svg>
                          <p className='btn-transp-p' style={{ color: 'white' }}>
                          {cta[1]}
                          </p>
                        </div>
              </button>
              
            
            <div className='flex-wrap-center'>
              <div
                    className="btn-transp-rs"
                    onClick={() => window.open('https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/', '_blank', 'noreferrer')}
                >
                  <div>
                    <FontAwesomeIcon className='icon-transp-big' icon={faLinkedinIn} />
                  </div>
              </div>
              <div
                  className="btn-transp-rs"
                  onClick={() => window.open('https://github.com/marialoudiaz/', '_blank', 'noreferrer')}
              >
                <div>
                  <FontAwesomeIcon className='icon-transp-big' icon={faGithub} />
                </div>
              </div>
              <div
                  className="btn-transp-rs"
                  onClick={() => window.open('https://www.instagram.com/marialoudiaz/', '_blank', 'noreferrer')}
              >
                <div>
                  <FontAwesomeIcon className='icon-transp-big' icon={faInstagram} />
                </div>
              </div>
            </div>
              
            </div>
           

          </div>

      </div>
    </div>
    </>
  );
};

export default Projets;
