'use client';
import React, { createContext, useContext, useState } from 'react';


// const indepArrayEN = [
//     {
//       ids: 1,
//       Lang: 'EN',
//       header:['My Services','My Projects'],
//       footer:"let's design your uniqueness",
//       hp:['Maison Bleu Iris','supports','the makers of meaning'],
//       videoOrdi: 'videoReveal1',
//       videoTel: 'videoReveal2',
//       discover: 'discover the showreel',
//       location: ['currently in','Montpellier, FR.'], // location
//       cta: [
//         "Dive-in",
//         "Launch your project",
//         "Discover our other projects",
//         "Starting your business ? Discover our offers."
//       ],
//       presentation: [
//         "Supporting those who shape the world with love and care.", 
//         "I create thoughtful and meaningful visual identities for artisans, farmers, chefs, conscious producers, food brands, and hospitality spaces. Projects that speak of seasons, of hands that create, of ethics and the beauty of the living world. Projects that help a new vision of the world blossom — one that is fair, warm, and deeply human. My approach blends storytelling, natural aesthetics, and ethical, fair values — to build brands that nourish the world differently. With a solid background in graphic design, I offer a complete service including print production, packaging, web design, and illustration.",
//         "About us"
//       ],
//       expertise: [' • Print • Packaging • Web development • Motion • Video • Photo • Social Media • Illustration '],
//       services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','Showcase website', 'Multipage website','Videos & photos', 'Social medias', 'Blog', 'Visual identity', 'Logotype', 'Signage', 'Packaging', 'Illustration'],
//       values:[
//       "Ethic",
//       "Authenticity",
//       "Transparency",
//     ],
//       deroule:['flex','Your project',"Each project is unique, just like you. That's why I support you at every step, to create a custom solution that best fits your needs.","Just a clarification","We discuss your project and together establish a strategy. Depending on your project, we define the services required. Each quote is custom-made to closely match your needs.","The adventure begins","I will send you a quote including all services as well as the time needed for their completion. The delivery date is set.","Tada!","This is the day you receive your first deliverable. From then on, you have the option to request two modifications (free of charge)."],
//       citation: 'For a design that suits you.',
//       form: ["Let's tell",'your','story','First & Last Name','Email','Company/Project','Industry/Sector','What kind of project are you after ?','Website', 'Visual identity', 'Other (explain)','Tell me more about your project',"Let's collaborate to take your business to the next level and make it flourish 🌱. Ideas, questions, a strong desire to get in touch? I'm listening.","Send"],
//       words: [
//           'local artisans', 
//           'organic farmers', 
//           'ethical producers', 
//           'hand-made brands',
//           'holistic hospitality venues',
//           'conscious restaurants',
//       ],
//       ml: [
//         "Legal Notice",
//         "About Maison Bleu Iris",
//         "Site Publisher",
//         "The website www.marialoudiaz.fr is published by Maria Lou Diaz, a sole proprietorship registered with the Nîmes Trade and Companies Register under number 892878067, with headquarters located at 2 Rue de la Chicanette, 30250 Combas, France. Contact: contact@marialoudiaz.fr. Hosting provider: Vercel, Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Design and development: Maria Lou Diaz",
//         "Intellectual Property",
//         "The presentation and content of this site are protected by applicable laws and are the property of Maria Lou Diaz. No reproduction, representation, adaptation, translation, and/or modification, whether in part or in full, or transfer to another site, may occur without the prior written consent of Maria Lou Diaz. Any unauthorized use of the site or any of its elements will be considered infringement and may be subject to legal action under articles L.335-2 and following of the Intellectual Property Code.",
//         "Privacy Policy",
//         "No user data is stored permanently. Email addresses collected through the contact form are not stored in a client file or shared with third parties.",
//         "Hypertext Links",
//         "External links on this site are provided for informational purposes only. Maria Lou Diaz disclaims any responsibility for their content and compliance with public order and decency standards, as well as their personal data protection policies. By accessing another site via a hyperlink, you agree to do so at your own risk. Consequently, any direct or indirect damage resulting from your access to another linked site cannot engage the responsibility of Maria Lou Diaz.",
//         "Site Access",
//       "Maria Lou Diaz strives to ensure continuous access to the website www.marialoudiaz.fr. However, interruptions may occur for maintenance or technical reasons, without liability for the publisher for any resulting consequences."]
// },];
// Créer le contexte
  const indepArrayy = [
  {
    ids: 0,
    Lang: 'FR',
    header: ['Notre Philosophie','Nos Services', 'Nos Projets', 'Nous contacter'],
    footer: "designons votre singularité",
    hp: ['Maison Bleu Iris', 'soutient', 'les artisans du sens'],
    videoOrdi: 'videoReveal1',
    videoTel: 'videoReveal2',
    videoPhilo:'videoPhilo',
    discover: 'découvrir le showreel',
    location: ['actuellement à', 'Montpellier, FR'],
    cta: [
      "Découvrir notre mission",
      "Démarrer votre projet",
      "Découvrir nos autres projets",
      "Découvrez nos offres",
      "Retourner à l'accueil"
    ],
    philo:[
         "Maison Bleu Iris | Une philosophie du beau, de l'éthique et de l'éco-responsabilité",
          "L’iris bleu, plus qu’une couleur",
          "L’iris bleu symbolise la recherche et la cultivation de vérité et d’autenthicité.Au sein du processus créatif, cela se traduit par un principe de création consciente, de volonté d’accompagner et de faire fleurir des projets porteurs de sens, engagés dans une démarche éthique, consciente, bien-être.",
          "Symboliquement l’iris bleu, c’est une fleur mais aussi le contour de la pupille, soit l’idée d’une vision claire et alignée. Pour nous guider vers ce qui est vrai, essentiel et authentique.Ainsi l’iris bleu donne son nom à une couleur, une essence « Bleu Iris » pour colorer un Monde que l’on commence par rêver et que l’on dessine projets par projets pour le construire consciemment.",
          "Le symbole de la fleur c'est aussi celui de l'amour, selon une vision du Monde poétique. La recherche du beau, avec amour.",
          "Les trois piliers de notre expertise",
          "Pour un lancement complet de votre projet",
          "L'histoire de Maison Bleu Iris",
          "Tout a commencé avec l’illustration et l’édition, puis le print et la communication visuelle, jusqu'à affiner l'exigence du détail.",
          "Le perfectionnement s'est ensuite poursuivi vers la création sur-mesure de sites web. Pour donner vie à des expériences digitales complètes et cohérentes. En parallèle, les diverses expériences dans la publicité, en agence et dans des campus en tant que Brand Manager,ont permis au studio d’acquérir une vision stratégique et internationale de ce qui compose l'ADN d'une marque. Depuis le début, développer des projets entre la France et l’Australie ont permis au studio d'acquérir cette double expérience créative, technique et stratégique. Tout cela, a permis d'arriver tout naturellement à la création d’une agence 360°, capable d’accompagner chaque projet de la vision à la réalisation, dans une démarche consciente et cohérente. Tout cela, pour pouvoir travailler avec des porteurs de projets éthique, éco-responsable.",
        //13
        "Print",
          "Affichages,Publicité, Papeterie, Packaging",
          "Web",
          "Conception et encodage de votre site",
          "Illustration",
          "Illustrations, Schémas, Édition",
    ],
    experience: [
    "Édition",
    "Conception de couvertures de livres, de lignes éditoriales pour collections, et mise en page intérieure de romans.",
    "Illustration",
    "Illustrations pour packaging et communication de marque, couvertures de livres et diagrammes scientifiques pour rapports et études gouvernementales.",
    "Print",
    "Travail en imprimerie, de la conception à l'exécution de la production imprimée et du façonnage.",
    "Web",
    "Conception et développement d'applications web et mobiles, de sites one-page et de sites plus complexes, en se concentrant sur des expériences uniques et sur-mesure adaptées à la narration de chaque marque.",
    "Agence",
    "Directeur artistique & Graphiste 360°, intervenant sur le print, le web et le motion design.",
    "Campus",
    "Gestion de marque pour un campus professionnel à Melbourne, incluant stratégie sur les réseaux sociaux, création de contenu, production print et élaboration de guidelines de marque impactantes et durables."
    ],
    presentation: [
      "Le luxe c'est l'essentiel devenu rare",
      "Accompagner celles et ceux qui façonnent le monde avec amour et conscience.",
      "Nous développons l'image de marque de tous ceux qui promeut une philosophie bien-être, éco-responsable et éthique: lieux, marques, artisans, praticiens, etc…",
      //Mon approche mêle narration, esthétique naturelle et valeurs éthiques. Issue d'une formation solide en design graphique, je propose une offre complète : production imprimée, packaging, webdesign et illustration.",
      "À propos"
    ],
    expertise: [' • Print • Packaging • Développement web • Motion • Vidéo • Photo • Réseaux sociaux • Illustration '],
    services: ['Mes services','Une multitude de compétences pour un projet unique.','Nous développons ensemble une offre sur mesure selon vos besoins.','Site vitrine', 'Site multipage', 'Vidéos & photos', 'Réseaux sociaux', 'Blog', 'Identité visuelle', 'Logotype', 'Signalétique', 'Packaging', 'Illustration'],
    values: [
      "Éthique",
      "Donner une voix aux projets conscients qui respectent la vie dans toutes ses formes.",
      "Authenticité",
      "Une philosophie simple et honnête",
      "Transparence",
      "Une narration mémorable & impactante",
    ],
    deroule: [
      'flex',
      'Votre projet : et maintenant ?',
      //1
      "Maintenant que vous m'avez contacté, je vais revenir vers vous très prochainement. Comme chaque projet est unique, tout comme vous, je vais vous accompagner à chaque étape pour créer une solution sur mesure, en accord avec vos besoins.",
      "Juste une mise au point",
      "Je reçois et lis votre demande que vous m'avez envoyé via le formulaire. Je vous recontacte pour que nous discutons de votre projet et établissons ensemble une stratégie. Selon vos besoins, nous définissons les services nécessaires. Chaque devis est conçu sur mesure.",
      //2
      "L’aventure commence",
      "Je vous envoie un devis détaillant l’ensemble des prestations ainsi que les délais de réalisation. Une date de livraison est fixée.",
      //3
      "Tada !",
      "C’est le jour où vous recevez votre premier livrable. Vous avez alors la possibilité de demander deux modifications (gratuites)."
    ],
    citation: 'Pour un design qui vous ressemble.',
    form: [
      "Maison Bleu Iris | Agence de graphisme éthique Montpellier",
      'Racontons votre histoire', //1
      'Prénom & Nom', //2
      'Email',//3
      'Entreprise/Projet',//4
      'Secteur d’activité',//5
      'Quel type de projet envisagez-vous ?',//6
      'Site web', //7
      'Identité visuelle',//8
      'Autre (précisez)',//9
      'Parlez-moi de votre projet',//10
      "Collaborons pour faire grandir votre activité 🌱. Une idée, une question, une envie forte de vous lancer ? Je suis à l'écoute.",
      "Envoyer",//12
      "Nous contacter",//13
    ],
    words: [
      'artisans locaux',
      'agriculteurs biologiques',
      'producteurs éthiques',
      'marques artisanales',
      'lieux d’hospitalité holistique',
      'restaurants engagés',
      'cafés éco-conscients',
      ],  
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
  const DataContext = createContext();
// Créer le fournisseur de données

export const DataProvider = ({ children }) => {

  const [lang, setLang] = useState('fr'); // 'fr' ou 'en'
  const [indepArray, setIndepArray] = useState(indepArrayy);  // Array FR ou EN
  const updateData = (newArray) => {
    setIndepArray(newArray);  // Met à jour l'array actif
  };
  // récupere la langue envoyée via le footer
   const updateLang = (newLang) => {
    setLang(newLang);
    updateData(newLang === 'fr' ? indepArray : indepArrayEN);
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
