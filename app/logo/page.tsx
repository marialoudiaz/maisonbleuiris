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
  header: ['Philosophie','Nos Services', 'Nos Projets', 'Nous contacter'],
  footer: "designons votre singularité",
  hp: ['Maison Bleu Iris', 'soutient', 'les artisans du sens'],
  videoOrdi: 'videoReveal1',
  videoTel: 'videoReveal2',
  videoPhilo:'videoPhilo',
  discover: 'découvrir le showreel',
  location: ['actuellement à', 'Montpellier, FR'],
  cta: [
    "découvrir notre mission",
    "je veux vous parler de mon projet",
    "Découvrir nos autre projets",
    // "planifier un appel vidéo",
    // "je préfère vous appeler"
  ],
  philo:[
        "Notre philosphie et mission",
        "L’iris bleu - Plus qu’une couleur",
        "L’iris bleu symbolise la recherche et la cultivation de vérité et d’autenthicité.Au sein du processus créatif, cela se traduit par un principe de création consciente, de volonté d’accompagner et de faire fleurir des projets porteurs de sens, engagés dans une démarche éthique, consciente, bien-être.",
        "Symboliquement l’iris bleu, c’est une fleur mais aussi le contour de la pupille, soit l’idée d’une vision claire et alignée. Pour nous guider vers ce qui est vrai, essentiel et authentique.Ainsi l’iris bleu donne son nom à une couleur, une essence « Bleu Iris » pour colorer un Monde que l’on commence par rêver et que l’on dessine projets par projets pour le construire consciemment.",
        "Le symbole de la fleur c'est aussi celui de l'amour, selon une vision du Monde poétique. La recherche du beau, avec amour.",
        "Les trois piliers de notre expertise",
        "Pour un lancement complet de votre projet",
        "Notre histoire est celle d’un parcours créatif construit étape par étape.",
        "Tout a commencé avec l’illustration et l’édition, puis le print et la communication visuelle, où nous avons affiné notre regard et notre exigence du détail.",
        "Nous avons ensuite perfectionné notre maîtrise web par la création sur-mesure de sites web et d'application mobile. Pour donner vie à des expériences digitales complètes et cohérentes. En parallèle, nous avons travaillé en agences et dans des campus en tant que Art Director et Brand Manager, ce qui nous a permis d’acquérir une vision stratégique et internationale de la marque",
        "Depuis le début, nous avons également évolué en indépendants, développant des projets en autoentrepreneur entre la France et l’Australie.",
        "Cette double expérience créative, technique et stratégique a naturellement mené à la création d’une agence 360°, capable d’accompagner chaque projet de la vision à la réalisation, dans une démarche consciente et cohérente.",
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
  expertise: [' • Print • Packaging • Développement web • Motion • Vidéo • Photo • Rédaction • Réseaux sociaux • Illustration '],
  services: ['Mes services','Une multitude de compétences pour un projet unique.','Nous développons ensemble une offre sur mesure selon vos besoins.','Site vitrine', 'Site multipage', 'Vidéos & photos', 'Réseaux sociaux', 'Blog', 'Identité visuelle', 'Logotype', 'Signalétique', 'Packaging', 'Illustration'],
  values: [
    "Éthique",
    "Donner une voix et une visibilité aux projets conscients qui respectent la vie dans toutes ses formes.",
    "Authenticité",
    "Une philosophie simple et honnête",
    "Transparence",
    "Une narration mémorable & impactante",

    // "Une narration impactante et mémorable",
     //concret, engagé, humain, éco-responsable, sincérité, Minimalisme, Élégance
    // "Donner voix et visibilité aux projets conscients qui respectent la vie sous toutes ses formes.",
    // "Aller à l’essence d’une idée pour la transmettre avec justesse.",
    // "Un design intemporel, ancré dans les valeurs."
  ],
  deroule: [
    'flex',
    'Votre projet',
    "Chaque projet est unique, tout comme vous. C’est pourquoi je vous accompagne à chaque étape pour créer une solution sur mesure, en accord avec vos besoins.",
    "Juste une mise au point","Nous discutons de votre projet et établissons ensemble une stratégie. Selon vos besoins, nous définissons les services nécessaires. Chaque devis est conçu sur mesure.",
    "L’aventure commence","Je vous envoie un devis détaillant l’ensemble des prestations ainsi que les délais de réalisation. Une date de livraison est fixée.","Tada !","C’est le jour où vous recevez votre premier livrable. Vous avez alors la possibilité de demander deux modifications (gratuites)."
  ],
  citation: 'Pour un design qui vous ressemble.',
  form: [
    "Racontons",
    'votre',
    'histoire',
    'Prénom & Nom',
    'Email',
    'Entreprise/Projet',
    'Secteur d’activité',
    'Quel type de projet envisagez-vous ?',
    'Site web', 
    'Identité visuelle',
    'Autre (précisez)',
    'Parlez-moi de votre projet',
    "Collaborons pour faire grandir votre activité 🌱. Une idée, une question, une envie forte de vous lancer ? Je suis à l'écoute.",
    "Envoyer"
  ],
words: [
  'artisans locaux',
  'agriculteurs biologiques',
  'chefs végétaux',
  'producteurs éthiques',
  'marques slow food',
  'marques artisanales',
  'lieux d’hospitalité holistique',
  'restaurants engagés',
  'cafés éco-conscients',
  'expériences holistiques pour les invités'
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
  const indepArrayEN = [
    {
      ids: 1,
      Lang: 'EN',
      header:['Our Philosophy','Our Services','Our Projects','Contact us'],
      footer:"let's design your uniqueness",
      hp:['Maison Bleu Iris','supports','the makers of meaning'],
      videoOrdi: 'videoReveal1',
      videoTel: 'videoReveal2',
      videoPhilo:'videoPhilo',
      discover: 'discover the showreel',
      location: ['currently in','Montpellier, FR.'], // location
      cta: [
        "discover our mission",
        "I want to talk about my project",
        "Discover our other projects",
        // "schedule a video call",
        // "I'd rather call you"
      ],
      philo: [
  "Our Philosophy and Mission",
  "The Blue Iris, more than a color",
  "The blue iris symbolizes the pursuit and cultivation of truth and authenticity. Within the creative process, this translates into a principle of conscious creation, with a desire to support and nurture meaningful projects that embrace an ethical, mindful, and well-being-oriented approach.",
  "Symbolically, the blue iris is both a flower and the outline of the pupil, representing the idea of a clear and aligned vision. It guides us toward what is true, essential, and authentic. Thus, the blue iris lends its name to a color, an essence, 'Blue Iris', to color a world we begin by dreaming of, and then shape project by project, building it consciously.",
  "The flower is also a symbol of love, reflecting a poetic vision of the world, the pursuit of beauty, with love.",
  "The Three Pillars of our expertise",
  "For a complete launch of your project",
  "Our story is that of a creative journey built step by step. It all began with illustration and publishing, then print and visual communication, where we refined our eye and attention to detail.We then perfected our web expertise through custom creation of websites and mobile applications, bringing to life complete and coherent digital experiences. In parallel, we worked in agencies and campuses as Art Directors and Brand Managers, which allowed us to gain a strategic and international vision of branding.",
  "From the start, we also worked independently, developing projects as freelancers between France and Australia.",
  "This dual creative, technical, and strategic experience naturally led to the creation of a 360° agency, capable of guiding each project from vision to execution, in a conscious and coherent approach.",
  "Print",
  "Displays, Advertising, Stationery, Packaging",
  "Web",
  "Design and Development of your website",
  "Illustration",
  "Illustrations, Diagrams, Publishing"
],
experience: [
  "Edition",
  "Design of book covers, editorial guidelines for book collections, and internal layout of novels.",
  "Illustration",
  "Illustration for brand packaging and communications, book covers, and scientific diagrams for government reports and studies.",
  "Print",
  "Experience in printing houses, from conception to execution of print production and binding.",
  "Web",
  "Design and development of web apps, mobile apps, one-page websites, and more complex sites, focusing on creating unique, custom-made experiences tailored to each brand's narrative.",
  "Agency",
  "Art Director & Graphic Designer 360°, working across print, web, and motion design.",
  "Campus",
  "Brand Management for a professional campus in Melbourne, including social media strategy, content creation, print production, and developing impactful, lasting brand guidelines."
],

      presentation: [
        "Luxury is the essential made rare",
        "Supporting those who shape the world with love and care.", 
        " We develop brand identities of those who promote a wellbeing, ethical and conscious philosophy: spaces, brands, craftmen, practicionners, etc…",
        "About us"
        // With a solid background in graphic design, I offer a complete service including print production, packaging, web design, and illustration
        //to build brands that nourish the world differently
      ],
      expertise: [' • Print • Packaging • Web development • Motion • Video • Photo • Copywriting • Social Media • Illustration '],
      services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','Showcase website', 'Multipage website','Videos & photos', 'Social medias', 'Blog', 'Visual identity', 'Logotype', 'Signage', 'Packaging', 'Illustration'],
        values:[
    "Ethic",
    "Giving voice and visibility to conscious projects that respect life in all its forms.",
    "Transparency",
    "Clear and honest philosophy",
    "Authenticity",
    "Impactful and memorable storytelling",
  ],
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
    router.push(`/`);
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
