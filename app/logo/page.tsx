"use client"; // Marquer ce composant comme Client Component
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation'; // Importer useRouter depuis next/navigation
import { useData } from '@/app/context/DataContext';
import '../../styles/App.scss';
import Image from 'next/image';
// import branding_specialist from '../../public/img/marialoudiaz-agence.jpg';

const Logo = () => {
  const router = useRouter();
  const {updateData} = useData();
  const [opacity, setOpacity] = useState(1);
  const {lang} = useData();
  // Données des projets
  const indepArray = [
   {
  ids: 0,
  Lang: 'FR',
  header: ['Mes Services', 'Mes Projets'],
  footer: "designons votre singularité",
  hp: ['Maison Bleu Iris', 'soutient', 'les artisans du sens'],
  videoOrdi: 'videoReveal1',
  videoTel: 'videoReveal2',
  discover: 'découvrir le showreel',
  location: ['actuellement à', 'Sydney, AUS.'],
  cta: [
    "une idée ? faisons-la fleurir",
    "je réserve une consultation",
    "je découvre les projets",
    "planifier un appel vidéo",
    "je préfère vous appeler"
  ],
  presentation: [
    "Le luxe c'est l'essentiel devenu rare",
    "Accompagner celles et ceux qui façonnent le monde avec amour et conscience.",
    "Je crée des identités visuelles sensibles et porteuses de sens pour les artisan·es, paysan·nes, chef·fes, producteur·ices engagé·es, marques alimentaires et lieux d’hospitalité. Des projets qui parlent de saisons, de mains qui créent, d’éthique et de beauté du vivant. Des projets qui contribuent à faire éclore une vision du monde plus juste, chaleureuse et profondément humaine. Mon approche mêle narration, esthétique naturelle et valeurs éthiques pour construire des marques qui nourrissent autrement. Issue d'une formation solide en design graphique, je propose une offre complète : production imprimée, packaging, webdesign et illustration.",
    "À propos"
  ],
  expertise: [' • Print • Packaging • Développement web • Motion • Vidéo • Photo • Rédaction • Réseaux sociaux • Illustration '],
  services: ['Mes services','Une multitude de compétences pour un projet unique.','Nous développons ensemble une offre sur mesure selon vos besoins.','Site vitrine', 'Site multipage', 'Vidéos & photos', 'Réseaux sociaux', 'Blog', 'Identité visuelle', 'Logotype', 'Signalétique', 'Packaging', 'Illustration'],
  values: ["Éthique","Donner voix et visibilité aux projets conscients qui respectent la vie sous toutes ses formes.","Minimalisme","Aller à l’essence d’une idée pour la transmettre avec justesse.","Élégance","Un design intemporel, ancré dans les valeurs."],
   reco:["Nouveautés","Domaine de la Pinède - Meilleur site internet de 2025 aux Trophées de la Communication, Paris","On-Thyme typeface addition to  Bye-Bye Binary collective inventory (2017-2023)"],
  deroule: ['flex','Votre projet',"Chaque projet est unique, tout comme vous. C’est pourquoi je vous accompagne à chaque étape pour créer une solution sur mesure, en accord avec vos besoins.","Juste une mise au point","Nous discutons de votre projet et établissons ensemble une stratégie. Selon vos besoins, nous définissons les services nécessaires. Chaque devis est conçu sur mesure.","L’aventure commence","Je vous envoie un devis détaillant l’ensemble des prestations ainsi que les délais de réalisation. Une date de livraison est fixée.","Tada !","C’est le jour où vous recevez votre premier livrable. Vous avez alors la possibilité de demander deux modifications (gratuites)."],
  citation: 'Pour un design qui vous ressemble.',
  form: ["Racontons",'votre','histoire','Prénom & Nom','Email','Entreprise/Projet','Secteur d’activité','Quel type de projet envisagez-vous ?','Site web', 'Identité visuelle', 'Autre (précisez)','Parlez-moi de votre projet',"Collaborons pour faire grandir votre activité 🌱. Une idée, une question, une envie forte de vous lancer ? Je suis à l'écoute.","Envoyer"],
  words: ['local artisans', 'organic farmers', 'plant-based chefs', 'ethical producers', 'slow food brands','hand-made brands', 'holistic hospitality venues','conscious restaurants', 'eco-conscious cafés', 'holistic guest experiences'],      
  ml: [
    "Mentions légales",
    "À propos de Maison Bleu Iris",
    "Éditeur du site",
    "Le site www.marialoudiaz.fr est édité par Maria Lou Diaz, entreprise individuelle immatriculée au RCS de Nîmes sous le numéro 892878067, dont le siège est situé au 2 Rue de la Chicanette, 30250 Combas, France. Contact : contact@marialoudiaz.fr. Hébergeur : Vercel, Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Design et développement : Maria Lou Diaz",
    "Propriété intellectuelle",
    "La présentation et le contenu de ce site sont protégés par la législation en vigueur et sont la propriété de Maria Lou Diaz. Aucune reproduction, représentation, adaptation, traduction et/ou modification, même partielle, ni transfert sur un autre site ne peut être effectué sans l’accord préalable écrit de Maria Lou Diaz. Toute utilisation non autorisée du site ou de l’un de ses éléments sera considérée comme constitutive de contrefaçon et pourra faire l’objet de poursuites conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.",
    "Politique de confidentialité",
    "Aucune donnée utilisateur n’est conservée de manière permanente. Les adresses email recueillies via le formulaire de contact ne sont pas stockées dans un fichier client ni transmises à des tiers.",
    "Liens hypertextes",
    "Les liens externes présents sur ce site sont fournis à titre informatif. Maria Lou Diaz décline toute responsabilité quant à leur contenu, leur conformité à l’ordre public ou aux bonnes mœurs, ainsi qu’à leur politique de protection des données personnelles. En accédant à un autre site via un lien hypertexte, vous acceptez de le faire à vos propres risques. Ainsi, tout dommage direct ou indirect résultant de votre accès à un autre site ne saurait engager la responsabilité de Maria Lou Diaz.",
    "Accès au site",
    "Maria Lou Diaz s’efforce d’assurer un accès continu au site www.marialoudiaz.fr. Toutefois, des interruptions peuvent survenir pour des raisons de maintenance ou techniques, sans que cela n’engage la responsabilité de l’éditeur quant aux conséquences qui en résulteraient."
  ]
}
  ];  
  const indepArrayEN = [
    {
      ids: 1,
      Lang: 'EN',
      header:['My Services','My Projects'],
      footer:"let's design your uniqueness",
      hp:['Maison Bleu Iris','supports','the makers of meaning'],
      videoOrdi: 'videoReveal3',
      videoTel: 'videoReveal4',
      discover: 'discover the showreel',
      location: ['currently in','Sydney, AUS.'], // location
      cta: [
        "an idea? let's make it flourish",
        "I book a consultation",
        "I discover the projects",
        "schedule a video call",
        "I'd rather call you"
      ],
      presentation: [
        "Luxury is the essential made rare",
        "Supporting those who shape the world with love and care.", 
        "I create thoughtful and meaningful visual identities for artisans, farmers, chefs, conscious producers, food brands, and hospitality spaces. Projects that speak of seasons, of hands that create, of ethics and the beauty of the living world. Projects that help a new vision of the world blossom — one that is fair, warm, and deeply human. My approach blends storytelling, natural aesthetics, and ethical, fair values — to build brands that nourish the world differently. With a solid background in graphic design, I offer a complete service including print production, packaging, web design, and illustration.",
        "About us"
      ],
      expertise: [' • Print • Packaging • Web development • Motion • Video • Photo • Copywriting • Social Media • Illustration '],
      services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','Showcase website', 'Multipage website','Videos & photos', 'Social medias', 'Blog', 'Visual identity', 'Logotype', 'Signage', 'Packaging', 'Illustration'],
      values: ["Ethic","Giving voice and visibility to conscious projects that respect life in all its forms.","Minimalism","Seeking the essence of an idea to communicate it with memorability.", "Elegance","Timeless design, rooted in values."],
      reco:["News","Domaine de la Pinède - Best website of 2025 at Trophées de la Communication, Paris","On-Thyme typeface addition to  Bye-Bye Binary collective inventory (2017-2023)"],
      deroule:['flex','Your project',"Each project is unique, just like you. That's why I support you at every step, to create a custom solution that best fits your needs.","Just a clarification","We discuss your project and together establish a strategy. Depending on your project, we define the services required. Each quote is custom-made to closely match your needs.","The adventure begins","I will send you a quote including all services as well as the time needed for their completion. The delivery date is set.","Tada!","This is the day you receive your first deliverable. From then on, you have the option to request two modifications (free of charge)."],
      citation: 'For a design that suits you.',
      form: ["Let's tell",'your','story','First & Last Name','Email','Company/Project','Industry/Sector','What kind of project are you after ?','Website', 'Visual identity', 'Other (explain)','Tell me more about your project',"Let's collaborate to take your business to the next level and make it flourish 🌱. Ideas, questions, a strong desire to get in touch? I'm listening.","Send"],
      words: ['local artisans', 'organic farmers', 'plant-based chefs', 'ethical producers', 'slow food brands','hand-made brands', 'holistic hospitality venues','conscious restaurants', 'eco-conscious cafés', 'holistic guest experiences'],      
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
  
// Aller à page chargement après Animation du logo
//Faire au chargement du site (envoyé indepArrayEn par defaut)
// Envoyer indepArrayFR si props FR recu
useEffect(() => {
  const array = lang === 'fr' ? indepArray : indepArrayEN;
  setTimeout(() => {
    console.log(opacity);
    setOpacity(0);
  }, 1000);

  setTimeout(() => {
    updateData(array);
    router.push(`/homepage`);
  }, 2000);
}, [lang]);

  return (
    <>
    <div className='bg-color-anim'>
      <div style={{position:'relative'}}>
       <Image id='logo-bg' src='/logo/mbi-blanc.png' alt='logo en blanc sur fond de couleur' width={380} height={210}/>
      </div>
    </div>
    </>
  );
};

export default Logo;
