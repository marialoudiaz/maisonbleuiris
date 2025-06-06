"use client";
import React from 'react';
import '../styles/App.scss';
import { useData } from '@/app/context/DataContext';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const { lang, updateLang } = useData();

  // Bascule entre FR et EN
  const toggleLang = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    updateLang(newLang); // met à jour state + localStorage
    window.location.href = '/'; // recharge à partir de Logo  
  };

  return (
    <footer className="footer-container">
      <div className="lang-switcher" onClick={toggleLang}>
        {lang.toUpperCase()}
      </div>
    </footer>
  );
};

export default Footer;
