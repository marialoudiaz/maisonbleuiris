"use client";
import React, {useState, useEffect} from 'react';
import '../../styles/App.scss';
import { useData } from '@/app/context/DataContext';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const { lang, updateLang } = useData();
  const [langDisplay, setlangD]=useState('fr');
  const router = useRouter();
  

  // Bascule entre FR et EN
  const toggleLang = () => {
    const newLang = lang === 'en' ? 'fr' : 'en';    
    setlangD (lang === 'en' ? 'fr' : 'en');
    updateLang(newLang); // met à jour state + localStorage
    router.push(`/logo`);
  };
  useEffect(() => {
      setlangD (lang === 'en' ? 'fr' : 'en');
  }, [lang]);

  return (
    <footer className="footer-container">
      <div className="lang-switcher" onClick={toggleLang}>
        {langDisplay.toUpperCase()}
      </div>
    </footer>
  );
};

export default Footer;
