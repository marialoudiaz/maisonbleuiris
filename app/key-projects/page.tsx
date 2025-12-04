'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
//composants
import Header from '../../components/navbar/header';
import Switch from '../../components/ui/switch';
import Footer from '../../components/sections/footer';
import '../../styles/App.scss';
import '../globals.css';

const Projets = () => {
  const gridContainerRef = useRef(null);
  const imgContainerRef = useRef([]);
  const descriptionRef = useRef(null);
  const { indepArray } = useData();
  const router = useRouter();
  // Set default values for all Hooks
  const [imageSource, setImageSource] = useState('/images/icons/interface/icon-eye-1.png');
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
    ['Discover our key projects', 'Discover', 'Previous', 'scroll right to learn more', 'Discover our other projects'],
    ['Découvrez nos projets clefs', 'Découvrir', 'Précédent', 'scroller à droite pour en apprendre +', 'Découvrir nos autres projets']
  ];
  const textVariables = isEnglish ? variableENorFr[0] : variableENorFr[1];
  const prev = '/images/icons/interface/icon-eye-1.png';
  const next = '/images/icons/interface/icon-eye-2.png';
  const {cta} = indepArray[0];
  // Define project array

    // Menu des projets
    const projectsArr = [
      //MISE EN AVANT DE 4 PROJETS_CLEFS
      //bec
      {
        id: 1,
        pastille:["Tailor-made website",'Site internet sur-mesure'],
        img: '/images/projets/web/bec/bec-hp-1.jpg',
        video: '/images/projets/web/bec/bec-hover.mp4',
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
        pastille:['Branding Strategy', "Stratégie d'image de marque complète"],
        img: '/images/projets/branding-strategy/georges/georges-hp.png',
        video: '/images/projets/branding-strategy/georges/georges-hp.mp4',
        title: ["Georges", "Georges"],
        baseline: ['The soul of the Canigou',"L'âme du Canigou"],
        text:[
          "Born from a legend rooted at the summit of Mount Canigou, Georges aïoli is more than a sauce — it's the living memory of an ancient craft, passed down by a solitary and wise hermit. Each jar holds the strength of the mountains, the scent of wild garlic, and the patience of a hand-forged ritual.", 
          "Né d’une légende ancrée au sommet du mont Canigou, Georges aïoli est bien plus qu’une sauce — c’est la mémoire vivante d’un savoir ancien, transmis par un ermite solitaire et sage. Chaque pot renferme la force des montagnes, le parfum de l’ail sauvage, et la patience d’un rituel forgé à la main.",
        ],
        text2:[
          "This simple, authentic packaging pays tribute to that story — of a man, a mountain, and a promise. More than a sauce: the soul of Canigou.",
          "Ce packaging simple et authentique rend hommage à cette histoire — celle d’un homme, d’une montagne, et d’une promesse. Bien plus qu’une sauce : l’âme du Canigou."],
        link: ['Discover the project',"Découvrir le projet"],
        onClick: ['https://georges-aioli.fr', '_blank']
      },
      //vb
      {
        id: 3,
        pastille:['Branding Strategy', "Stratégie d'image de marque complète"],
        img: '/images/projets/branding-strategy/vb/vb-img.jpg',
        video: '/images/projets/branding-strategy/vb/vb-video-hover.mp4',
        title: ["VB Avocats","VB Avocats"],
        baseline: ["Modernize a graphic identity","Moderniser une identité graphique"],
        text:[
              "VB Avocats, formerly Valette & Berthelsen, sought to revitalize their graphic identity while preserving the firm's essence.",
              "VB Avocats, anciennement Valette & Berthelsen, ont souhaité revitaliser leur identité graphique tout en préservant l'essence du cabinet."
            ],      
        text2:[
              "The redesign aimed to bring new dynamism while respecting the company's values and history. This included a revamp of the logo, stationery and signage elements.",
              "La refonte visait à insuffler un nouveau dynamisme tout en respectant les valeurs et l'histoire de l'entreprise. Cela comprenait une refonte du logo, de la papeterie & de la signalétique."
              ],
              link: ['Discover the project',"Découvrir le projet"],
              onClick: ['https://www.vb-avocats.fr', '_blank']      
      },
      //nda
      {
        id: 4,
        pastille:['Book cover illustration', "Illustration de couverture"],
        img: '/images/projets/illu_edition/nda/nda-2.png',
        video: '/images/projets/illu_edition/nda/nda_hover.mp4',
        title: ["Birth of a friendship","Naissance d'une amitié"],
        baseline: ["Friendship is a soul in two bodies","L'amitié est une âme en deux corps"],
        text:[
          "Birth of a friendship is a novel written by Émile Trubert that portrays the birth of a touching friendship between an old man, weighed down by grief after losing his beloved spouse, and Eva.", 
          "Naissance d'une amitié est un roman écrit par Émile Trubert qui dépeint la naissance d'une amitié émouvante entre un vieil homme, accablé par le chagrin après la perte de son épouse bien-aimée, et Eva."],
        text2:[
          "Their connection brings color back into his life, transforming it in ways he never imagined.",
          "Leur lien redonne des couleurs à sa vie, la transformant de manière inattendue."],
        link: ['Discover the project',"Découvrir le projet"],
        onClick: ['https://marialoudiaz.fr', '_blank']
      },
      // ANCIENS PROJETS FOOD
      //posters
      //   {
      //   id: 4,
      //   img: '/projets/posters/posters-img.jpg',
      //   video: '/projets/posters/video_type_hp.mp4',
      //   title: ["Douce France","Douce France"],
      //   baseline: ['Embellish your interior with unique posters',"Embellissez votre intérieur avec des posters uniques"],
      //  text:[
      //     "Pile-Poële is a gender-inclusive typeface featuring pictographic glyphs centered on cuisine. Developed during a master’s project at the University of Toulouse Jean Jaurès (2021),", 
      //     "Pile-Poële est une typographie inclusive intégrant des pictogrammes liés à la cuisine. Conçue lors d’un projet de master à l’Université Toulouse Jean Jaurès (2021),"],
      //   text2:[
      //     "it allows words for tools, utensils, and food to be replaced with symbols. Promoting intercultural culinary communication, it naturally integrates gender inclusivity as part of its visual language.",
      //     "elle permet de remplacer des mots comme ustensiles ou aliments par des symboles. Elle vise une communication culinaire interculturelle où l’inclusivité de genre s’impose naturellement."],
      //   link: ['Discover the project',"Découvrir le projet"],
      //   onClick: ['https://marialoudiaz.fr', '_blank']
      // },
      //soup
      // {
      //   id: 3,
      //   img: '/projets/soup/mockup-livre.jpg',
      //   video: '/projets/soup/soup_hover.mp4',
      //   title: ["Soups","Soup"],
      //   baseline: ["An eye for an eye, a story for a soup","Oeil pour oeil, soupe pour souvenir"],
      //   text:[
      //     "This cover captures the warm and authentic spirit of Soupes, a heartfelt collection of traditional recipes, family memories, and time-honored skills passed down through generations.", 
      //     "Cette couverture reflète l’esprit chaleureux et authentique de Soupes, une collection sincère de recettes traditionnelles, de souvenirs de famille et de savoir-faire transmis de génération en génération."],
      //   text2:[
      //     "The delicate red sketch evokes a rustic kitchen where the comforting flavors of Southern France gently simmer. The refined typography, paired with the textured paper, pays tribute to the simplicity and richness of the culinary heritage passed on by the author Gisèle Perrin’s grandmother.",
      //     "Le délicat croquis rouge évoque une cuisine rustique où mijotent doucement les saveurs réconfortantes du Sud de la France. La typographie raffinée, associée au papier texturé, rend hommage à la simplicité et à la richesse de l’héritage culinaire transmis par la grand-mère de l’autrice, Gisèle Perrin."],
      //   link: ['Discover the project',"Découvrir le projet"],
      //   onClick: ['https://marialoudiaz.fr', '_blank']
      // },
      // pile-poele
      // {
      //   id: 5,
      //   img: '/projets/pp/pp-img.png',
      //   video: '/projets/pp/video_type_hp.mp4',
      //   title: ["On-Thyme","Pile-Poele"],
      //   baseline: ['Open up to the World through Cuisine',"Ouvrez-vous au monde par la cuisine."],
      //  text:[
      //     "Pile-Poële is a gender-inclusive typeface featuring pictographic glyphs centered on cuisine. Developed during a master’s project at the University of Toulouse Jean Jaurès (2021),", 
      //     "Pile-Poële est une typographie inclusive intégrant des pictogrammes liés à la cuisine. Conçue lors d’un projet de master à l’Université Toulouse Jean Jaurès (2021),"],
      //   text2:[
      //     "it allows words for tools, utensils, and food to be replaced with symbols. Promoting intercultural culinary communication, it naturally integrates gender inclusivity as part of its visual language.",
      //     "elle permet de remplacer des mots comme ustensiles ou aliments par des symboles. Elle vise une communication culinaire interculturelle où l’inclusivité de genre s’impose naturellement."],
      //   link: ['Discover the project',"Découvrir le projet"],
      //   onClick: ['https://marialoudiaz.fr', '_blank']
      // },
      //memoire
      // {
      //   id: 6,
      //   img: '/projets/memoire/memoire1.jpg',
      //   video: '/projets/memoire/memoire-hover.mp4',
      //   title: ["Advocating for ...","En faveur d'une ..."],
      //   baseline: ["Cuisine as a mean of communiating","Communiquer universellement par la cuisine"],
      //   text:[
      //     "Cooking defines us as humans. Beyond gastronomy, popular culinary memory—skills, gestures, recipes—is a heritage worth preserving.", 
      //     "La cuisine nous définit en tant qu’humains. Au-delà de la gastronomie, la mémoire culinaire populaire — gestes, savoir-faire, recettes — est un patrimoine à préserver."],
      //   text2:[
      //     "As industrialization grows, practicing cooking remains essential. How can design help transmit this collective memory?",
      //     "Face à l’industrialisation, il devient essentiel de continuer à pratiquer la cuisine. Comment le design peut-il aider à transmettre cette mémoire collective ?"],
      //   link: ['Discover the project',"Découvrir le projet"],
      //   onClick: ['https://marialoudiaz.fr', '_blank']
      // }, 
    ]; 

  // Functions to handle hover effects and toggling text
  const handleHover = () => setImageSource(next);
  const handleHoverOut = () => setImageSource(prev);
  const toggleFullText = () => setShowFullText(!showFullText);
  // Function to navigate to project details
  const handleDiscover = (projectId) => router.push(`/projet/${projectId}`);
    const handleDiscoverAll = () => router.push(`/all-projects`);


  return (
    <>
      <Header />
      <div className='section' id='projets' style={{ marginTop: '7rem' }}>
        <h2 style={{marginLeft:'2rem'}}>{textVariables[0]}</h2>

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



                {/* PARTIE DESCRIPTION */}
                <div className='project-description' ref={descriptionRef}>
                  <div className='pastille-mob' style={{paddingLeft:'3rem'}}><p className='pastille'>{project.pastille[isEnglish ? 0 : 1]}</p></div>
                  <h3 className='project-title'>{project.baseline[isEnglish ? 0 : 1]}</h3>

                  {/* // AFFICHER TEXTE SUR MOBILE */}
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
                      alt={isEnglish? "Eye icon working as a link to go to the designated project section": "Icône d'un oeil bougeant au survol et servant de lien pour aller à la section du projet en question"}
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

            {/* boutons tous les projets - refaire lien */}
              <button 
              className='btn-transp-dark' 
              onClick={() => handleDiscoverAll()} // onClick={() =>handleDiscoverProj()}
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
                >  
                </path>
                  </svg>
                  <p className='btn-transp-p' style={{ color: 'white' }}>
                    {cta[2]}
                  </p>
                </div>
              </button>
            {/* boutons vers rs */}
            {/* <div className='flex-wrap-center'>
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
                  onClick={() => window.open('https://www.instagram.com/maisonbleuiris/', '_blank', 'noreferrer')}
              >
                <div>
                  <FontAwesomeIcon className='icon-transp-big' icon={faInstagram} />
                </div>
              </div>
            </div> */}
            </div>
          </div>
      </div>
    </div>
    <Switch />
    <Footer />
    </>
  );
};

export default Projets;
