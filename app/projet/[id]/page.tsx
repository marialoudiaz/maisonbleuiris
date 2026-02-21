'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import { useData } from '@/app/context/DataContext'; // Importer le contexte
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../../components/navbar/header';
import { FiArrowDownRight } from "react-icons/fi";
import styles from './page.module.scss';
import '../../../globals.css';
//données projets - que j"ai migré ddans data pour rendu du composant plus leger et link seo dans sitemap.tsx. je n'ai qu'a mettre a jour le fichier dans data quand j'ajoute des projets
import { descriptionprojectsArr } from '@/app/data/projects';



function Projet() {

// Recup lang via context glob
  const router = useRouter();
  const { indepArray } = useData();
  const isEnglish = indepArray[0].Lang === 'EN';
  const { id } = useParams(); // id dans lurl (dynamiquement)
  useEffect(()=>{
      if (!indepArray && !id){
        router.push('/');
      }
  }, [indepArray, router, id]);
  const imgStyle: React.CSSProperties = {
              display: 'flex',
              flexWrap: 'nowrap',
              margin: '.2rem 0rem 0rem .3rem',
              width: '40px',
              height: 'auto',
              transition: 'transform 2s ease'
  };      
// Déterminer les indices en fonction de la langue
// const Lang = indepArray[0].Lang;
  const Lang = indepArray?.[0]?.Lang ?? 'FR';
  const langIndex = Lang === 'FR' ? 0 : 1;
// Cliquer sur découvrir
  const prev = '/images/icons/interface/icon-eye-1.png';
  const next= '/images/icons/interface/icon-eye-2.png';
  const [imageSource, setImageSource] = useState(prev);
// Hover icon oeil
  const handleHover = () => {setImageSource(next);};
  const handleHoverOut = () => {setImageSource(prev);};
// Ouvrir le lien
  const handleDiscoverClick = () => {
    const url = descriptionprojectsArr[Number(id)].onClick;
    // Vérifiez si `url` est un tableau et sélectionnez le premier élément si nécessaire
    const finalUrl = Array.isArray(url) ? url[0] : url;
    // Assurez-vous que `finalUrl` est une chaîne avant d'appeler `window.open`
    if (typeof finalUrl === 'string') {
      window.open(finalUrl, '_blank'); // Ouvre dans un nouvel onglet
    } else {
      console.error('URL non valide');
    }
  };


  return (
    <>
      <Header />
      <div className={styles.scrollablecontainer}>

        {/* VIDEO OPENING -- full width > moitié au scroll */}
        <div className={styles.film} style={{zIndex:'1001'}}>
        {/*video */}
          <div className={styles.backgroundvideohp} id={styles.bgvideoprojet}>
              <video className={styles.desktop} autoPlay loop muted playsInline>
                <source src={descriptionprojectsArr[Number(id)-1].videoDesktop} type="video/mp4" />
              </video>
              <video className={styles.mobile} autoPlay loop muted playsInline>
                <source src={descriptionprojectsArr[Number(id)-1].videoMobile} type="video/mp4" />
              </video>
          </div>
        {/*titre */}
          <div className={styles.backgroundvideotitle}>
            <div>
              <h3>{descriptionprojectsArr[Number(id)-1].baseline[langIndex]}</h3>
              <h2>{descriptionprojectsArr[Number(id)-1].title}</h2>
            </div>
            <div>
              <FiArrowDownRight color='white'/>
              <p>{descriptionprojectsArr[Number(id)-1].discover[langIndex]}</p>
            </div>
          </div>
        </div>  
  
        <div  className={styles.section} id={styles.projet} style={{marginBottom: '5rem'}}>
         <div className={styles.flexwrap}>
          {/* DIV INFOS*/}
         <div className={styles.projetinfos}>
            <div>
              <p>Client</p>
              <p>{descriptionprojectsArr[Number(id)-1].client}</p>
            </div>
            <div>
              <p>Expertises</p>
              {descriptionprojectsArr[Number(id)-1].categories[langIndex].map((categorie, index) => (
                <p style={{fontWeight:'600'}} key={index}>{categorie}</p>
              ))}
            </div>
            {descriptionprojectsArr[Number(id)-1].onClick
            
            &&
            <div>
              <>{Lang === 'FR' ? <p style={{fontWeight:'300'}}>Découvrir le site</p> : <p style={{fontWeight:'300'}}>Discover the website</p>}</>
              <div id={styles.carouselbtnprojet} 
                onMouseOver={handleHover} 
                onMouseOut={handleHoverOut} 
                onClick={handleDiscoverClick}
              >
                <Image 
                  src={imageSource} 
                     alt={isEnglish? "Eye icon working as a link to go to the designated project section": "Icône d'un oeil bougeant au survol et servant de lien pour aller à la section du projet en question"}
                     width={100} 
                     height={0} 
                     style={imgStyle}
                />
                  <p>{Lang === 'FR' ? <p>Lien</p> : <p>Link</p>}</p>
              </div>
            </div>
            }
            <div>
              <p>Date</p>
              <p>{descriptionprojectsArr[Number(id)-1].infos[langIndex][0]}</p>
            </div>
         </div>
         {/* DIV BESOINS */}
         <div className={styles.projetinfosbesoins}>
              {Lang === 'FR' ? <h2>Besoins</h2> : <h2>Needs</h2>}
                <p>{descriptionprojectsArr[Number(id)-1].besoins[langIndex][0]}</p>
         </div>
      </div>
  
         {/* DIV SECTIONS */}
           {/* SECTION 2 - EXPLICATION PROJET */}
            {descriptionprojectsArr[Number(id)-1].sections && descriptionprojectsArr[Number(id)-1].sections.length > 0 && (
            descriptionprojectsArr[Number(id)-1].sections.map((section) => (
            <>
            {/* TITRE DE LA PREMIÈRE SECTION 
            si la section fait plus de 415 caractères => class long-text, pour mieux lire
            */}
              <div 
                className={`${styles.projetsection} ${
                  section.text[langIndex].length > 415 
                  ? styles.longtext 
                  : styles.projetinfostitre
                  }`}
              >
                <h2>{section.subtitle[langIndex]}</h2>

             {/* couper tous les 3 phrases */}
                {section.text[langIndex].length <= 415 ? (
                  <p>{section.text[langIndex]}</p>

                )
                :
                (
                  // Couper toutes les 3 phrases : résumé= Texte → split → filtrage → regroupement par 4 → <p> blocs
                  section.text[langIndex]
                    .split(".") // couper apres le point final
                    .filter(sentence => sentence.trim().length > 0) // éviter les vides — apres methode split qui en crée dans le tableau
                    .reduce((acc, sentence, index) => { // groupe, phrase, index ds grp
                      const sentenceClean = sentence.trim() + "."; // remettre point final, supprimé par .split

                      const chunkIndex = Math.floor(index / 4); // savoir dans quel groupe remettre la phrase:  index 0 → 0 / 4 = 0 // index 1 → 1 / 4 = 0 /// index 2 → 2 / 4 = 0 /// index 3 → 3 / 4 = 0 /// index 4 → 4 / 4 = 1 /// index 5 → 5 / 4 = 1 /// phrases 1 à 4 → groupe 0 /// phrases 5 à 8 → groupe 1 /// phrases 9 à 12 → groupe 2
                      
                      // si c'est le premier passage sur ce bloc, on initialise
                      if (!acc[chunkIndex]) acc[chunkIndex] = sentenceClean; // créer le groupe si nexiste pas encore
                      else acc[chunkIndex] += " " + sentenceClean; // sinon ajouter phrase au groupe existant
                      return acc;
                    }, [])
                    .map((chunk, i) => ( //chq groupe de 4 phrases devient un paragraphe
                      <p key={i}>{chunk}</p>
                    ))
                )
              }
              </div>
              
              {/* IMAGE OU VIDEO DE PREMIERE SECTION */}
              <div className={styles.projetinfosimg}>
                {section.video ? 
                (
                  <div className={styles.gridcol2videosection}>
                    <video src={section.video} autoPlay loop muted playsInline>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) 
                : 
                (
                  <Image 
                    src={Lang !== 'FR' && section.imageEN ? section.imageEN : section.image} 
                    alt={Lang !== 'FR' ? "Section visual in English" : "Section visuelle"} 
                    width={2600}
                    height={0}
                    style={{width:'100%'}}
                  />
                )}
              </div>
            </>
            ))
            )}

            {/*
            {/* SECTION 3 - IMAGES SUPPLÉMENTAIRES
            {/* si + d'1 image grid-col2 sinon flex-wrap */}          
            <div className={
              (descriptionprojectsArr[Number(id)-1].sectionsImg && 
              (descriptionprojectsArr[Number(id)-1].sectionsImg[0]?.length > 1 || descriptionprojectsArr[Number(id)-1].sectionsImg[1]?.length > 1)) 
              ? styles.gridcol2 
              : styles.flexwrap
              }>
              {descriptionprojectsArr[Number(id)-1].sectionsImg && descriptionprojectsArr[Number(id)-1].sectionsImg.length > 0 && (
                (Lang === 'FR' ? descriptionprojectsArr[Number(id)-1].sectionsImg[1] : descriptionprojectsArr[Number(id)-1].sectionsImg[0]).map((sectionImg, index) => (
                  <Image 
                    key={index} 
                    src={sectionImg} 
                    className={`${styles.sectionimg} ${index === 2 
                      ? styles.div3 
                      : styles.x
                    }`} 
                    alt={`Section ${index + 1}`} 
                    width={1000}
                    height={0}
                    style={{width:'100%', height:'100%', objectFit: 'cover', objectPosition:'center', borderRadius:'20px'}} 
                  />
                ))
              )}
            </div> 
  
        </div>
        </div>
      </>
  )
};

export default Projet