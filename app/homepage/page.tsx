"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useData } from '../context/DataContext';
import '../../styles/App.scss';
import '../../styles/App.scss';


// Importations dynamiques pour le lazy loading
const Header = dynamic(() => import('../../components/navbar/header'), {
  loading: () => <div>Loading Header...</div>,
});
const Main = dynamic(() => import('../../components/main'), {
  loading: () => <div>Loading Main...</div>,
});
const Prez = dynamic(() => import('../../components/prez'), {
  loading: () => <div>Loading Prez...</div>,
});
const Reco = dynamic(() => import('../../components/recognition'), {
  loading: () => <div>Loading Deroule...</div>,
});
const Deroule = dynamic(() => import('../../components/deroule'), {
  loading: () => <div>Loading Deroule...</div>,
});
const Formulaire = dynamic(() => import('../../components/formulaire/formulaire'), {
  loading: () => <div>Loading Formulaire...</div>,
});
const Footer = dynamic(() => import('../../components/footer'), {
  loading: () => <div>Loading Footer...</div>
});

const Homepage = () => {

  //l'array updatée dans chargement
  const { indepArray } = useData();
  const router = useRouter();

// au chargement de la page indepArray est en anglais 
// recharger indepArray en francais si cliqué par user (plus tard dans le site)

  // Redir si pas datas
    useEffect(()=>{
      if (!indepArray){
        router.push('/');
      }
    }, [indepArray, router])
    if (!indepArray){
      return <div>Loading...</div>
    }

  return (
    <div className='scrollable-container'>
          <Header/>
          <Main/>
          <Prez/>
          <Reco/>
          <Deroule/>
          <Formulaire/>
          <Footer />
    </div>    
  );
};

export default Homepage;
