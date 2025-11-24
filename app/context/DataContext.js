'use client';
import React, { createContext, useContext, useState } from 'react';


    const indepArrayEN = [
    {
      ids: 1,
      Lang: 'EN',
      header:['My Services','My Projects'],
      footer:"let's design your uniqueness",
      hp:['Maison Bleu Iris','supports','the makers of meaning'],
      videoOrdi: 'videoReveal5',
      videoTel: 'videoReveal6',
      discover: 'discover the showreel',
      location: ['currently in','Montpellier, FR.'], // location
      cta: [
        "Dive-in",
        "I want to talk about my project",
        "Discover our other projects",
        // "schedule a video call",
        // "I'd rather call you",
      ],
      presentation: [
        "Supporting those who shape the world with love and care.", 
        "I create thoughtful and meaningful visual identities for artisans, farmers, chefs, conscious producers, food brands, and hospitality spaces. Projects that speak of seasons, of hands that create, of ethics and the beauty of the living world. Projects that help a new vision of the world blossom — one that is fair, warm, and deeply human. My approach blends storytelling, natural aesthetics, and ethical, fair values — to build brands that nourish the world differently. With a solid background in graphic design, I offer a complete service including print production, packaging, web design, and illustration.",
        "About us"
      ],
      expertise: [' • Print • Packaging • Web development • Motion • Video • Photo • Copywriting • Social Media • Illustration '],
      services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','Showcase website', 'Multipage website','Videos & photos', 'Social medias', 'Blog', 'Visual identity', 'Logotype', 'Signage', 'Packaging', 'Illustration'],
      // values: [
      //   "Ethic",
      //   "Giving voice and visibility to conscious projects that respect life in all its forms.",
      //   "Minimalism",
      //   "Seeking the essence of an idea to communicate it with memorability.",
      //   "Elegance", //4
      //   "Timeless design, rooted in values."
      //],
    values:[
    "Ethic",
     "Authenticity",
    "Transparency",
    // "Giving voice and visibility to conscious projects that respect life in all its forms.",
    //  "Clear and honest philosophy",
    // "Impactful and memorable storytelling",
  ],
      deroule:['flex','Your project',"Each project is unique, just like you. That's why I support you at every step, to create a custom solution that best fits your needs.","Just a clarification","We discuss your project and together establish a strategy. Depending on your project, we define the services required. Each quote is custom-made to closely match your needs.","The adventure begins","I will send you a quote including all services as well as the time needed for their completion. The delivery date is set.","Tada!","This is the day you receive your first deliverable. From then on, you have the option to request two modifications (free of charge)."],
      citation: 'For a design that suits you.',
      form: ["Let's tell",'your','story','First & Last Name','Email','Company/Project','Industry/Sector','What kind of project are you after ?','Website', 'Visual identity', 'Other (explain)','Tell me more about your project',"Let's collaborate to take your business to the next level and make it flourish 🌱. Ideas, questions, a strong desire to get in touch? I'm listening.","Send"],
      words: ['artisans', 'farmers', 'chefs', 'conscious producers', 'food brands', 'hospitality spaces','restaurants', 'cafés', 'guesthouses'],
      ml: [
        "Legal Notice",
        "About Maison Bleu Iris",
        "Site Publisher",
        "The website www.marialoudiaz.fr is published by Maria Lou Diaz, a sole proprietorship registered with the Nîmes Trade and Companies Register under number 892878067, with headquarters located at 2 Rue de la Chicanette, 30250 Combas, France. Contact: contact@marialoudiaz.fr. Hosting provider: Vercel, Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Design and development: Maria Lou Diaz",
        "Intellectual Property",
        "The presentation and content of this site are protected by applicable laws and are the property of Maria Lou Diaz. No reproduction, representation, adaptation, translation, and/or modification, whether in part or in full, or transfer to another site, may occur without the prior written consent of Maria Lou Diaz. Any unauthorized use of the site or any of its elements will be considered infringement and may be subject to legal action under articles L.335-2 and following of the Intellectual Property Code.",
        "Privacy Policy",
        "No user data is stored permanently. Email addresses collected through the contact form are not stored in a client file or shared with third parties.",
        "Hypertext Links",
        "External links on this site are provided for informational purposes only. Maria Lou Diaz disclaims any responsibility for their content and compliance with public order and decency standards, as well as their personal data protection policies. By accessing another site via a hyperlink, you agree to do so at your own risk. Consequently, any direct or indirect damage resulting from your access to another linked site cannot engage the responsibility of Maria Lou Diaz.",
        "Site Access",
        "Maria Lou Diaz strives to ensure continuous access to the website www.marialoudiaz.fr. However, interruptions may occur for maintenance or technical reasons, without liability for the publisher for any resulting consequences."]
},];
// Créer le contexte
const DataContext = createContext();

// Créer le fournisseur de données

export const DataProvider = ({ children }) => {

  const [lang, setLang] = useState('en'); // 'fr' ou 'en'
  const [indepArray, setIndepArray] = useState(indepArrayEN);  // Array FR ou EN
  console.log('arrayDatac', indepArray);

 

  const updateData = (newArray) => {
    setIndepArray(newArray);  // Met à jour l'array actif
  };
  // récupere la langue envoyée via le footer
   const updateLang = (newLang) => {
    setLang(newLang);
    updateData(newLang === 'en' ? indepArrayEN : indepArray);
  };

  return (
    <DataContext.Provider value={{ indepArray, updateData, lang, updateLang}}>
      {children}
    </DataContext.Provider>
  );
};

// Hook personnalisé pour utiliser les données
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
