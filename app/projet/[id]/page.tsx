'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import { useData } from '@/app/context/DataContext'; // Importer le contexte
import { useRouter, useParams } from 'next/navigation';
import '../../../styles/App.scss';
import '../../../globals.css';
import Image from 'next/image';
import Header from '../../../components/navbar/header';
import { FiArrowDownRight } from "react-icons/fi";
import '../../../styles/App.scss';


function Projet() {

  // Recup lang via context glob
    const router = useRouter();
    const { indepArray } = useData();
    const { id } = useParams(); // id dans lurl (dynamiquement)

    useEffect(()=>{
      if (!indepArray && !id){
        router.push('/');
      }
    }, [indepArray, router, id])

    const descriptionprojectsArr = [
      // bec
      {
        id: 1,
        client: 'Domaine de la Pinède/Manade BEC',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/bec/bec-hover-black.mp4',
        videoMobile: '/projets/bec/bec-hover-black.mp4',
        image: '/projets/os/os-img.png',
        title: 'Domaine de la Pinède',
        baseline: [
          'Au coeur de la Camargue exactement',
          'Right in the heart of the Camargue',],

        infos: [['2024','Application web','Tourisme & Hôtellerie', 'Réalisé chez Cible Publicité'],['2024','Web App', 'Tourism & Hospitality', 'Done at Cible Publicité']],
        categories: 
        [
          ['Conception graphique','Expérience utilisateur','Application web','Maintenance','Développement Fullstack', 'Vidéo', 'Stroytelling'],
          ['Graphic Design', 'User Experience', 'Web Application', 'Maintenance', 'Fullstack Development', 'Video', 'Storytelling']
        ],
        onClick: ['https://www.manade-bec.fr', '_blank'],
        besoins:[
        ["La Manade Bec, située aux Saintes-Maries-de-la-Mer, invite à une immersion authentique dans la tradition camarguaise grâce à son site web immersif. Ce dernier présente le Domaine de la Pinède, dédié à l'élevage traditionnel de taureaux et chevaux de race Camargue, et met en avant des activités telles que des visites guidées et des démonstrations de tri de taureaux, offrant un aperçu unique de la culture locale. La conception graphique du site est une attention constante au détail pour plonger le visiteur dans un voyage immersif au coeur de la camargue. Le design du site, inspiré des codes du livre imprimé, propose une navigation fluide et chaleureuse, agrémentée de vidéos et de citations qui plongent le visiteur dans l’ambiance unique du lieu. Chaque détail, de la présentation des pages à la réservation au style vintage, vise à réenchanter l’expérience en ligne et à refléter l’authenticité du domaine, tout en proposant des services pour l'organisation d'événements privés ou professionnels."],
        ["The Manade Bec, located in Saintes-Maries-de-la-Mer, offers an authentic immersion into Camargue traditions through its immersive website. It showcases the Domaine de la Pinède, dedicated to the traditional breeding of Camargue bulls and horses, highlighting activities such as guided tours and bull sorting demonstrations, providing a unique insight into the local culture. The website’s design reflects meticulous attention to detail, taking visitors on an immersive journey into the heart of the Camargue. Inspired by the aesthetics of printed books, the site offers a smooth and inviting navigation experience, enriched with videos and quotes that capture the unique atmosphere of the Domaine. From the page layout to vintage-style reservations, every detail aims to re-enchant the online experience and convey the authenticity of the estate, while also offering services for organizing private and professional events."]],
        technologies: ['React', 'After effects', 'Illustrator', 'Figma', 'Adobe Creative Suite', 'Express'],
        sections: 
        [
          {
          subtitle: ['au coeur de la camargue exactement', 'Right in the heart of the Camargue'],
          text: [
            "La conception graphique du site s'attache à chaque détail pour offrir au visiteur une expérience immersive au cœur de la Camargue. Dès la première vidéo de présentation, le décor est planté, plongeant l'utilisateur dans l'atmosphère unique du domaine. Par la suite, il est guidé à travers les pages comme s'il tournait les pages d'un livre. Cette approche créative réinvente le webdesign en s'inspirant des codes intemporels du livre imprimé. Par exemple, sur la page dédiée à la manade, le visiteur découvre des citations soigneusement choisies, reflétant l'esprit authentique et l'ambiance singulière du Domaine de la Pinède. Le même soin est apporté à la page d'accueil, renforçant l'impression d'une plongée dans un univers enchanteur.",
            "The website's graphic design pays meticulous attention to detail, offering visitors an immersive journey into the heart of the Camargue. From the opening presentation video, the tone is set, drawing users into the unique atmosphere of the domain. They are then guided through the pages as if leafing through the chapters of a book. This creative approach reimagines web design by drawing inspiration from the timeless aesthetics of printed books. For instance, on the page dedicated to the manade, visitors can explore carefully selected quotes that capture the authentic spirit and unique ambiance of the Domaine de la Pinède. The same thoughtful design is reflected on the homepage, enhancing the sense of being transported into an enchanting world.",
          ],
          video: '/projets/bec/bec-site-deroule.mp4',
          },
          {
          subtitle: [ "Réenchanter le Web – L’Art du Storytelling Visuel","Re-enchanting the Web – The Art of Visual Storytelling"],
          text: [
          "Dans le monde digital, le toucher semble perdu. Mais et si… on pouvait recréer la sensation du réel ? Réserver devient rituel. Un ticket inspiré du réel — ses coins arrondis, sa texture papier, sa typographie imparfaite. Un geste qui ancre. Un détail skeuomorphe qui ramène à l’expérience concrète. Les symboles se révèlent. Comme de l’encre qui s’épanche lentement sur une page ancienne. Ils apparaissent. Suggèrent plus qu’ils ne montrent. Une invitation à l’interprétation, au mystère. Le texte s’écrit sous vos yeux. Lettre après lettre, comme une machine à écrire ou les pages d’un vieux grimoire. L’histoire ne se donne pas, elle se compose en direct. L’écran devient livre. Le web, une expérience narrative, vivante, charnelle.",
          "In the digital world, touch seems lost. But what if… we could recreate the feeling of matter? Booking becomes ritual. A ticket drawn from real life — rounded corners, paper textures, imperfect type. A gesture that grounds. A skeuomorphic detail that brings back the sense of presence. Symbols reveal themselves. Like ink slowly blooming across an old page. They appear gradually. Suggest more than they show. An invitation to mystery and meaning. Words write themselves before your eyes. Letter by letter — like a typewriter or the pages of an old storybook. The narrative doesn't arrive all at once. It unfolds. The screen becomes a book. The web, a living, breathing experience."
          ],
          image: '/projets/bec/bec-hp-1.jpg',
          },
          {
          subtitle: [ 
            "Retrouver la Matière – Créer une Expérience Authentique",
            "Bringing Back the Tangible – Designing an Authentic Experience"],
          text: [
            "Et si chaque page était une porte ? Un seuil franchi, une atmosphère qui enveloppe, un souffle qui raconte… Dans un monde saturé d’informations, nous choisissons l’enchantement. La vidéo devient guide. Sur la page d’accueil comme sur les chemins intérieurs du site, elle ne vend pas, elle invite. Elle ouvre un monde. Elle incarne une présence. Elle raconte ce que les mots ne peuvent dire seuls. Chaque page est un chapitre. Non plus seulement informative, mais sensible. Elle s’écoute. Elle se ressent. Une lumière, une texture, un son, un mouvement — tout participe à tisser une narration. Ici, le design devient conte, et le visiteur devient voyageur.",
            "What if every page was a doorway? A threshold crossed, an atmosphere that wraps around you, a breath that tells a story… In a world saturated with information, we choose enchantment. Video becomes a guide. From the homepage to the inner paths of the site, it doesn’t sell — it invites. It opens a world. It embodies presence. It tells what words alone cannot. Every page is a chapter. Not just informative, but ambient. It speaks softly. It is felt. A light, a texture, a sound, a movement — all come together to weave a narrative. Here, design becomes a tale, and the visitor becomes a traveler."],
          image: '/projets/bec/bec-2.jpg',
          },
        ],
      },
      //georges
      {
        id: 2,
        client: 'Maison Bleu Iris',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/georges/video-hover.mp4',
        videoMobile: '/projets/georges/video-hover.mp4',
        image: '/projets/georges/georges-hp.png',
        title: 'Georges, aioli catalan',
        baseline: [
          "L'âme du Canigou",
          'The soul of the Canigou',],

        infos: [['2025','Site web','Packaging', 'Branding'],['2025','Website','Packaging', 'Branding']],
        categories: 
        [
          ['Conception graphique','Expérience utilisateur','Application web','Maintenance','Développement Fullstack', 'Vidéo', 'Stroytelling'],
          ['Graphic Design', 'User Experience', 'Web Application', 'Maintenance', 'Fullstack Development', 'Video', 'Storytelling']
        ],
        onClick: ['https://www.georges-aioli.fr', '_blank'],
        besoins:[
          ["Le projet avait besoin d’un récit visuel fort, capable de porter à la fois une légende ancienne et une identité contemporaine. Il fallait ancrer le produit dans un imaginaire sacré, mais accessible, en respectant l’intimité d’une fabrication artisanale et la force d’un terroir. L’emballage devait être à la hauteur de ce double héritage : celui d’un savoir ancestral et d’un goût intemporel. Enfin, le tout devait s’inscrire dans un langage de marque sobre, élégant et sincère, pour séduire autant les épicuriens que les rêveurs."],
          ["The project required a strong visual narrative — one that could carry both an ancient legend and a modern identity. It needed to root the product in a sacred yet accessible imagination, honouring the intimacy of artisanal making and the strength of its local origins. The packaging had to live up to this dual legacy: forgotten knowledge and timeless flavour. And ultimately, everything needed to align with a brand language that was sober, elegant and sincere — appealing to both epicureans and dreamers."],
        ],
        technologies: ['React', 'After effects', 'Illustrator', 'Ink handdrawing', 'Figma', 'Adobe Creative Suite', 'Express'],
        sections: 
[
  {
    subtitle: ['Approche', 'Approach'],
    text: [
      "L’approche visuelle s’est inspirée des éléments naturels et de la sobriété monacale. Le pot évoque la pierre brute du Canigou, l’étiquette se fait parchemin. L’identité graphique est minimale mais habitée : une typographie gravée, un dessin discret d’ail sauvage, et une palette réduite aux tons de terre et d’or patiné. Tout évoque la lenteur, la patience, et la sacralité du geste. Nous avons conçu l’emballage comme un talisman : modeste en apparence, mais chargé de mémoire.",
      "The visual approach drew from nature’s rawness and monastic simplicity. The jar echoes the rugged stone of Canigou; the label feels like aged parchment. The graphic identity is minimal yet alive: engraved typography, a subtle drawing of wild garlic, and a muted palette of earth and weathered gold. Every detail speaks of slowness, patience, and sacred ritual. We designed the packaging like a talisman: modest on the surface, yet rich with legacy."
    ],
    image: '/projets/georges/georgesaioli-poster-rochercitation.png',
  },
  {
    subtitle: ['Créer une légende autour de ta mémoire', 'To create a tale from your memory.'],
    
    text: [
      "Né d’une légende enracinée au sommet du Canigou, l’aïoli Georges incarne bien plus qu’un simple condiment : il est la mémoire vivante d’un savoir ancien, celui de la recette transmise par feu mon grand-père. Dans le désir d’honorer sa mémoire à travers un projet à partager — pour continuer de le faire vivre dans le présent — j’ai imaginé une légende autour de son nom : Georges, l’ermite catalan. Cette histoire se traduit graphiquement par la création d’un logotype inspiré de sa signature, auquel s’ajoute une typographie des années 50 pour le nom AIOLI CATALAN, ancrant visuellement la recette dans l’époque et l’héritage de mon grand-père. Le timbre, apposé sur le couvercle tel un sceau, complète l’ensemble. On y retrouve le rouge du drapeau catalan, les coordonnées GPS du sommet du Canigou, ses lignes de crêtes, et deux izards sauvages — gardiens silencieux de cette terre. Le timbre, c’est l’invitation au voyage. Le sceau d’une promesse.",
      "Born from a legend rooted at the summit of Mount Canigou, aïoli Georges is much more than a simple condiment: it is the living memory of ancestral knowledge, the recipe passed down from my late grandfather. Driven by the desire to honour his memory through a shared project — to keep his presence alive in the present — I created a legend around his name: Georges, the Catalan hermit. This story is expressed visually through the creation of a logotype inspired by his signature, complemented by a 1950s-style typeface for the name AIOLI CATALAN, grounding the recipe in the era and heritage of my grandfather. A stamp, placed on the lid like a seal, completes the design. It features the red of the Catalan flag, the GPS coordinates of Mount Canigou’s summit, its ridgelines, and two wild izards — silent guardians of this land. The stamp is an invitation to travel. The seal of a promise."
    ],
    image: '/projets/georges/georges-signature-timbre.png',
  },
  {
    subtitle: ["Georges & la légende de l'aïoli Catalan", "Georges and the legend of catalan aioli"],
    text: 
    [
      "Il y a bien longtemps, dans un temps où les hommes craignaient encore les cimes, vivait un vieil ermite nommé Georges, au sommet du Canigou. Solitaire, il parlait peu, mais ses mains racontaient des récits de feu, de pierre, et d’huile. Vivait, un vieil ermite, au sommet du Canigou, là où les neiges éternelles caressent les cieux, et où le silence des montagnes pèse plus lourd que les siècles. Il habitait une cabane de pierre, adossée à un éperon rocheux, battue par les vents mais chaleureuse de solitude choisie. Chaque matin, il saluait le lever du soleil comme un vieil ami, et descendait parfois jusqu'à la lisière des forêts pour cueillir herbes et racines, marmonnant à mi-voix les secrets de la terre qu’il n’avait jamais cessé d’aimer. Chaque jour, portant sur son dos, le mortier qu'il avait sculpté dans un magnifique marbre griotte du Conflent, il gravissait les versants escarpés, en quête de l’ail des ours, une plante rare qu’il ne trouvait qu’à l’ombre des hêtres, là où les izards tracent leurs chemins secrets. Les villageois disaient qu’il avait été un grand chef autrefois, mais qu’il avait renoncé à la gloire pour atteindre la vérité du goût. Selon la rumeur, il aurait appris à dompter les éléments – le vent, le sel, et le feu – pour créer l’aïoli parfait, un mélange si puissant qu’il guérissait les cœurs durs et redonnait force aux faibles. Mais l’aïoli de Georges ne se laissait pas apprivoiser. Il fallait battre sans faiblir, avec patience, à la main, comme l’izard franchit les falaises : sans pause, sans peur. Nombreux sont ceux qui montèrent au sommet pour apprendre, mais seuls les plus tenaces furent dignes du secret. Un jour, alors que les vents soufflaient fort et que l’hiver menaçait la vallée, Georges descendit avec un petit pot doré. Il entra dans la place du village, le déposa sur la table de pierre, et dit : 'Voici l’âme du Canigou. Ce n’est pas une sauce, c’est une épreuve. Une promesse. Une mémoire.' Puis il repartit, suivi seulement par un groupe silencieux d’izards. Depuis ce jour, chaque pot d’aïoli Georges contient un peu de cette légende :la force des montagnes,la patience du mortier,et le mystère de l’ail sauvage.",
      "Long ago, in a time when men still feared the mountain peaks, there lived a hermit named Georges atop Mount Canigou. He lived alone, spoke little, but his hands told stories — of fire, of stone, and of oil. He dwelled in a stone hut, nestled against a rocky outcrop, battered by the winds yet warmed by chosen solitude, high where eternal snow brushes the sky and the silence weighs heavier than centuries. Each morning, he greeted the rising sun like an old friend, and would sometimes descend to the forest’s edge to gather herbs and roots, whispering softly the secrets of a land he had never stopped loving. Each day, he carried on his back a mortar he had carved from rich Conflent red marble, climbing the steep slopes in search of wild garlic — a rare plant found only in the shadow of beech trees, where izards carve hidden paths. The villagers said he had once been a great chef, who had given up fame to pursue the truth of taste. Rumour had it that he had learned to master the elements — the wind, the salt, and the fire — to create the perfect aïoli, a blend so powerful it could soften the hardest of hearts and restore strength to the weary. But Georges’ aïoli would not yield easily. It had to be beaten by hand, with patience, never wavering — like the izard that climbs the cliff face: without pause, without fear. Many climbed the mountain hoping to learn, but only the most steadfast were deemed worthy of the secret. One day, as fierce winds howled and winter crept down into the valley, Georges descended with a small golden jar. He entered the village square, placed it upon the stone table, and said: 'This is the soul of Canigou. It is not a sauce. It is a trial. A promise. A memory.' Then he left, followed only by a silent procession of izards. Since that day, each jar of Georges aïoli carries a trace of that legend: the strength of the mountains, the patience of the mortar and the mystery of wild garlic.",
    ],
    image: '/projets/georges/georgesaioli-timbre.png',
  },
        
],
        sectionsImg: [
          ['/projets/georges/etiquette-pot.jpg','/projets/georges/boite-georges.jpg','/projets/georges/georges-boitelivraison.png'],
          ['/projets/georges/etiquette-pot.jpg','/projets/georges/boite-georges.jpg','/projets/georges/georges-boitelivraison.png'],
        ],
},

{
        id: 3,
        client: 'Gisèle Perrin',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/soup/video-hover_1.mp4',
        videoMobile: '/projets/soup/video-hover_1.mp4',
        image: '/projets/soup/mockup-livre.jpg',
        title: "Soupes",
        baseline: ["Oeil pour oeil, soupe pour souvenir", "An eye for an eye, a story for a soup"],
        infos: [['2025', 'Illustration', 'Livre de recettes & récit biographique, romanesque'],['2025', 'Illustration', 'Cookbook and novel']],
        categories: 
        [
          ['Illustration', 'Littérature'],
          ['Illustration', 'Cooking literature']
        ],
        onClick: ['https:/www.marialoudiaz.fr', '_blank'],
        besoins:[
          ["Ce projet éditorial posait un défi singulier : comment rendre hommage à une tradition culinaire modeste mais profondément riche, tout en concevant une identité visuelle à la fois intime et intemporelle ? Il fallait donner forme à un recueil de recettes familiales, de récits du Sud et de savoir-faire transmis, en créant une couverture capable d’évoquer la chaleur d’une cuisine de grand-mère, tout en affirmant sa place en librairie comme un objet éditorial élégant, authentique et personnel."],
          ["This book project came with a unique challenge: how to honour the humble yet rich tradition of soup-making while crafting a visual identity that feels both intimate and timeless. We needed to create a design that could embody a collection of heartfelt family recipes, regional storytelling, and deep-rooted culinary know-how. How could we evoke the warmth of a grandmother’s kitchen in Southern France, while making the book stand out on shelves as an elegant, authentic and personal object?"],
        ],
          technologies: [
          ['Ink', 'Illustrator', 'Photoshop', 'Indesign'],
          ['Ink', 'Illustrator', 'Photoshop', 'Indesign'],
        ],
        sections: 
        [
          {
          subtitle: ['Approche', 'Approach'],
          text: [
            "Nous avons abordé ce projet comme un carnet de souvenirs : avec délicatesse, texture et sincérité. L’univers visuel puise dans les carnets de croquis, les recettes manuscrites et les gestes de la cuisine paysanne. Le fond texturé rappelle le grain du papier ancien, tandis que la typographie allie sobriété littéraire et douceur rustique. Le croquis rouge — une marmite sur le feu — agit comme une fenêtre ouverte sur une scène de vie, pleine de chaleur et de réminiscences. L’esthétique choisie ne cherche pas à être tendance, mais vraie. Elle invite à ralentir, à s’imprégner d’un monde où chaque soupe est une histoire, chaque ingrédient un héritage.",
            "We approached this project like a preserved memory – with care, texture, and a human touch. The visual tone was drawn from old sketchbooks, handwritten notes, and vintage cookery traditions. We opted for a textured, paper-like background to echo the feel of an old recipe journal. The typography evokes literary elegance and rural authenticity, while the red line illustration — a pot gently bubbling on the stove — adds an emotional, almost cinematic depth. The design is not just nostalgic; it’s rooted. It invites the reader to step into a slow, sun-drenched world of shared meals and inherited wisdom — a world that feels both deeply familiar and quietly sacred.",
          ],
          image: '/projets/soup/mockup-livre.jpg',
          },
          {
          subtitle: ['Résultat', 'Result'],
          text: [
            "Le résultat : une couverture qui raconte déjà une histoire avant même d’ouvrir le livre. Soupes de Gisèle Perrin n’est pas un simple livre de recettes — c’est un hommage. Le design traduit l’essence d’un foyer, d’un lien transmis, d’une cuisine de cœur et de saisons. Il se démarque en rayon non par le volume, mais par l’émotion. C’est un ouvrage qui ne crie pas, mais qui touche — comme le parfum d’un bouillon qui réveille la mémoire d’un dimanche en famille.",
            "The result is a cover that tells a story before a single page is turned. Soupes by Gisèle Perrin is not just a cookbook — it’s a tribute. The design captures the essence of home, of ritual, and of resilience passed through generations of women. It stands out on a shelf not through loudness, but through feeling. This is a book that whispers, not shouts — yet its presence lingers, like the scent of simmering broth in a quiet kitchen at dusk."
          ],
          image: '/projets/soup/serv-livre.jpg',
          },
        ],
      },
      // {
      //   id: 4,
      //   client: 'Maison Bleu Iris',
      //   discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
      //   videoDesktop: '/projets/poster/video-hover_1.mp4',
      //   videoMobile: '/projets/poster/video-hover_1.mp4',
      //   image: '/projets/poster/mockup-poster.jpg',
      //   title: "Douce France",
      //   baseline: ["Tour de France des saveurs", "Tour de France of flavours"],
      //   infos: [['2025', 'Illustration', 'Posters'],['2025', 'Illustration', 'Posters']],
      //   categories: 
      //   [
      //     ['Illustration'],
      //     ['Illustration']
      //   ],
      //   onClick: ['https:/www.marialoudiaz.fr', '_blank'],
      //   besoins:[
      //     ["Ce projet éditorial posait un défi singulier : comment rendre hommage à une tradition culinaire modeste mais profondément riche, tout en concevant une identité visuelle à la fois intime et intemporelle ? Il fallait donner forme à un recueil de recettes familiales, de récits du Sud et de savoir-faire transmis, en créant une couverture capable d’évoquer la chaleur d’une cuisine de grand-mère, tout en affirmant sa place en librairie comme un objet éditorial élégant, authentique et personnel."],
      //     ["This book project came with a unique challenge: how to honour the humble yet rich tradition of soup-making while crafting a visual identity that feels both intimate and timeless. We needed to create a design that could embody a collection of heartfelt family recipes, regional storytelling, and deep-rooted culinary know-how. How could we evoke the warmth of a grandmother’s kitchen in Southern France, while making the book stand out on shelves as an elegant, authentic and personal object?"],
      //   ],
      //     technologies: [
      //     ['Ink', 'Pencil','Illustrator', 'Photoshop', 'Indesign'],
      //     ['Ink', 'Pencil','Illustrator', 'Photoshop', 'Indesign'],
      //   ],
      //   sections: 
      //   [
      //     {
      //     subtitle: ['Approche', 'Approach'],
      //     text: [
      //       "Nous avons abordé ce projet comme un carnet de souvenirs : avec délicatesse, texture et sincérité. L’univers visuel puise dans les carnets de croquis, les recettes manuscrites et les gestes de la cuisine paysanne. Le fond texturé rappelle le grain du papier ancien, tandis que la typographie allie sobriété littéraire et douceur rustique. Le croquis rouge — une marmite sur le feu — agit comme une fenêtre ouverte sur une scène de vie, pleine de chaleur et de réminiscences. L’esthétique choisie ne cherche pas à être tendance, mais vraie. Elle invite à ralentir, à s’imprégner d’un monde où chaque soupe est une histoire, chaque ingrédient un héritage.",
      //       "We approached this project like a preserved memory – with care, texture, and a human touch. The visual tone was drawn from old sketchbooks, handwritten notes, and vintage cookery traditions. We opted for a textured, paper-like background to echo the feel of an old recipe journal. The typography evokes literary elegance and rural authenticity, while the red line illustration — a pot gently bubbling on the stove — adds an emotional, almost cinematic depth. The design is not just nostalgic; it’s rooted. It invites the reader to step into a slow, sun-drenched world of shared meals and inherited wisdom — a world that feels both deeply familiar and quietly sacred.",
      //     ],
      //     image: '/projets/soup/mockup-livre.jpg',
      //     },
      //     {
      //     subtitle: ['Résultat', 'Result'],
      //     text: [
      //       "Le résultat : une couverture qui raconte déjà une histoire avant même d’ouvrir le livre. Soupes de Gisèle Perrin n’est pas un simple livre de recettes — c’est un hommage. Le design traduit l’essence d’un foyer, d’un lien transmis, d’une cuisine de cœur et de saisons. Il se démarque en rayon non par le volume, mais par l’émotion. C’est un ouvrage qui ne crie pas, mais qui touche — comme le parfum d’un bouillon qui réveille la mémoire d’un dimanche en famille.",
      //       "The result is a cover that tells a story before a single page is turned. Soupes by Gisèle Perrin is not just a cookbook — it’s a tribute. The design captures the essence of home, of ritual, and of resilience passed through generations of women. It stands out on a shelf not through loudness, but through feeling. This is a book that whispers, not shouts — yet its presence lingers, like the scent of simmering broth in a quiet kitchen at dusk."
      //     ],
      //     image: '/projets/posters/serv-posters.jpg',
      //     },
      //   ],
      // },
      // LES PROJETS PLUS ANCIENS
      
      // pile-poele
      {
        id: 5,
        client: 'Maria Lou Diaz',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/pp/video_type_hp.mp4', //video dintro
        videoMobile: '/projets/pp/video_type_hp.mp4',
        image: '/projets/pp/pp-img.png',
        title: 'Pile-Poële',
        baseline: ["Ouvrez-vous au monde par la cuisine.", 'Open up to the World through Cuisine'],
        infos: [
          ['2021>2024', 'Police d’écriture', 'Cuisine'],
          ['2021>2024', 'Font', 'Cuisine']
        ],
        categories: 
        [
          ['Typographie', 'Recherche'],
          ['Typography', 'Research'],
        ],
        // onClick: ['https:/www.pascalelaffon.fr', '_blank'],
        besoins:[
          ["Promouvoir un humanisme inclusif axé sur la cuisine. Pile-Poële est une fonte de caractères gender-inclusive avec un set de glyphes pictographiques centré autour de la cuisine. Elle prend forme dans le cadre d’une recherche de master autour de la constitution d’un système langagier basé sur la cuisine à l’Université Toulouse Jean Jaurès à Toulouse en 2021. Cette police propose une palette de caractères qui favorise la parité des genres tout en permettant dans son code de remplacer les mots désignant outils, ustensiles et aliments par leurs symboles pictographiques. Le signe alphabétique ou pictographique vient s’inscrire dans la recherche d’une transmission interculturelle culinaire. Le but premier est de permettre une forme de communication davantage universelle autour de la cuisine. Pile-Poële possède également des ligatures non-binaires. Toutefois, ici, la notion d’inclusivité des genres n’est pas le point central du projet mais devient annexe, comme une évidence dans la communication."],
          ["Promoting an inclusive humanism focused on cuisine. Pile-Poële is a gender-inclusive typeface with a set of pictographic glyphs centered around cuisine. It was developed as part of a master's research project on creating a language system based on cuisine at the University of Toulouse Jean Jaurès in Toulouse in 2021.This font offers a character set that promotes gender parity while allowing for the replacement of words denoting tools, utensils, and food with their pictographic symbols within its code. The alphabetic or pictographic symbols are part of a broader effort to achieve intercultural culinary communication. The primary goal is to enable a more universal form of communication around cuisine. Pile-Poële also features non-binary ligatures. However, in this context, gender inclusivity is not the project central focus but rather an inherent aspect of communication."],
        ],
        technologies:
        [
          ['Dessin', 'Illustrator','Fontlab'],
          ['Drawing', 'Illustrator', 'FontLab'],
        ],
        sections:
        [
          {title:'Pile-Poële',
          subtitle: ['Le dessin des caractères', 'The design of characters'],
          text: [
            "Écrire une recette se fait dans la plupart des cas, sur un bout de papier, à la main et de manière plutôt rapide. Pile-Poële dans son dessin tente de réunir cet aspect cursif de l’écriture propre à la prise de note manuscrite et le besoin de structure et de discipline de la discipline culinaire. L'exagération du type où les ligatures se dessinent naturellement ouvre de nouvelles perspectives typographiques et sociétales en facilitant la création de nouveaux glyphes. Les pictogrammes sont minimalistes dans un souci de les rendre simples à re-dessiner manuellement et facilement ré-appropriables. Toujours dans cette volonté d’inclusivité et d’accessibilité, les pictogrammes dessinent une cuisine universelle avec des ustensiles issus de la gastronomie mais également des cuisines familiales méditerranéennes (faitout, panier d’osier, pot de yaourt, etc). La cuisine à dessiner devient ainsi universelle et humaine. Au-delà des ustensiles et aliments, les systèmes métriques se représentent aussi humainement que possible : par la main (pincée, poignée, etc).",
            "Writing a recipe is typically done on a piece of paper, by hand, and often quickly. Pile-Poële's design seeks to merge the cursive aspect of handwritten notes with the structured and disciplined nature of culinary practice. The exaggeration of typefaces where ligatures naturally emerge opens up new typographic and societal perspectives by facilitating the creation of new glyphs. The pictograms are minimalist, designed to be easy to redraw manually and readily reappropriated. In the spirit of inclusivity and accessibility, the pictograms depict a universal cuisine, featuring utensils from gastronomy as well as Mediterranean family kitchens (such as a stew pot, wicker basket, yogurt pot, etc.). Thus, the cuisine depicted becomes universal and human. Beyond utensils and food items, metric systems are represented as humanely as possible: by hand (pinch, handful, etc.)."
          ],
          image: '/projets/pp/pp-section1.jpg',
          },

          {title:'Pile-Poële',
          subtitle: ['Améliorations du projet', 'Project Improvements'],
          text: [
            "Ce fut ma première tentative d’une réponse typographique à ce questionnement. Elle reste pour le moment probablement trop mécanique dans sa forme et insuffisamment inclusive d'un point de vue culturel. Pour pallier cet aspect mécanique du glyphe et des caractères, j’envisage également une variante cursive de la fonte. Parmi les autres améliorations à venir, il y aura le dessin des capitales et l’élargissement du set de glyphes pictographiques. Il me semble nécessaire de proposer un dessin des glyphes plus colorés afin de rendre davantage compte de l’aspect sensoriel et vivant propre à la cuisine. Pour l'instant, les pictogrammes sont principalement 'euro-centrés'. L’idée serait donc de proposer l’intégralité des ustensiles et aliments existants mondialement afin que l’inclusivité devienne totale. En ce qui concerne les ligatures 'gender-inclusive' disponibles, elles sont également incomplètes. Ce projet est encore en construction car l’idée d’une communication par le pictogramme est un réel 'challenge' au vu de la pluralité des cultures et des langues existantes. En tant que personne européenne, ce qui pourrait me sembler être une réponse satisfaisante à un système langagier universel, ne l’est pas forcément pour une personne issue d’une culture différente de la mienne. Communiquer autour de la cuisine ne nécessite pas seulement la traduction des ustensiles et aliments. Une multitude d’autres paramètres essentiels sont nécessaires à la transmission d’une recette, d’une technique ou d’un savoir-faire. Pile-Poële reste donc un début de réflexion autour de cette question très vaste de la sauvegarde du patrimoine culinaire populaire humain. Elle reste un début de réponse typographique toujours en construction.",
            "This was my first attempt at a typographic response to this question. At the moment, it may still be too mechanical in form and insufficiently inclusive from a cultural perspective. To address the mechanical aspect of the glyph and characters, I am also considering a cursive variant of the font. Among other forthcoming improvements, there will be the design of uppercase letters and the expansion of the set of pictographic glyphs. It seems necessary to offer a more colorful design of the glyphs to better convey the sensory and lively aspect inherent to cuisine. Currently, the pictograms are mainly 'euro-centric'. The idea, therefore, is to include all utensils and foods existing globally to achieve total inclusivity. Regarding the available gender-inclusive ligatures, they are also incomplete. This project is still under construction because the concept of communication through pictograms is a real challenge given the diversity of cultures and languages. As a European, what may seem like a satisfactory response to a universal language system may not necessarily be so for someone from a different culture than mine. Communicating about cuisine requires not only the translation of utensils and food items but also numerous other essential parameters for transmitting a recipe, technique, or expertise. Therefore, Pile-Poële remains the beginning of reflection on this very broad question of preserving human culinary heritage. It is an initial typographic response still under development.",
          ],
          image: '/projets/pp/pp-section2.png',
          },

          {title:'Pile-Poële',
            subtitle: ['Publications', 'Publications'],
            text: [
              "Pile-Poele a été ajouté à l’invetaire créé par le collectif Bye-Bye Binary de 2017 à 2023.",
              "Pile-Poële was added to the inventory created by the Bye-Bye Binary collective from 2017 to 2023.",
            ],
            image: '/projets/pp/pp-section3.jpg',
            },
        ],
        sectionsImg:
        [
          ['/projets/pp/pp-section4.png', '/projets/pp/pp-section5.png'],
          ['/projets/pp/pp-section4.png', '/projets/pp/pp-section5.png'],
        ]
        
      },
      //memoire
      {
        id: 6,
        client: "Université Toulouse Jean-Jaurès 2",
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/memoire/memoire-hover.mp4', 
        videoMobile: '/projets/memoire/memoire-hover.mp4', 
        image: '/projets/memoire/memoire1.jpg',
        title: "En faveur d'une grammaire culinaire populaire",
        baseline:["Communiquer universellement par la cuisine","Cuisine as a mean of communiating"],
        infos: [
          ['2021', 'Édition', 'Rédaction', 'Recherche'],
          ['2019', 'Publishing', 'Writing', 'Research']
        ],
        categories: 
        [
          ['2021', 'Édition', 'Rédaction', 'Recherche'],
          ['2019', 'Publishing', 'Writing', 'Research']
        ],
        besoins:[
          ["Si, comme Yuval Noah Harari, nous partons du principe que notre civilisation s'est construite sur la découverte du feu et sa maîtrise, alors nous pouvons nous appeler une « race de cuisiniers ». En domptant le feu, nous avons inventé la cuisine. Cela a défini notre nature humaine et marqué un moment décisif dans notre développement intellectuel. Cuisiner, c'est ce qui nous rend humains. À mesure que les sociétés se développaient, la cuisine est devenue non seulement essentielle, mais également naturelle. En 2010, la gastronomie française a été inscrite sur la Liste représentative du patrimoine culturel immatériel de l'humanité de l'UNESCO. Cette reconnaissance portait plus précisément sur l'art de manger à la française et les activités sociales qui l'entourent, telles que la convivialité, le plaisir des saveurs, le partage et l'utilisation d'aliments et de produits locaux. Mais si nous voulons parler d'héritage, nous devons aller au-delà de la gastronomie et embrasser la cuisine dans toutes ses dimensions. La mémoire culinaire englobe les recettes, les connaissances, le savoir-faire technique et les compétences manuelles. Ce patrimoine n'est pas spécifique à la gastronomie, qui est davantage liée à l'héritage de la bourgeoisie qu'à celui de l'humanité en général. Manger et cuisiner sont profondément ancrés dans notre culture et notre vie sociale. La cuisine française renforce l'identité collective du pays et enrichit la diversité culturelle dans le monde. Pourtant, notre dépendance à l'industrie agroalimentaire et aux nouvelles technologies nous pousse à cuisiner moins, à préparer moins de repas faits maison, ce qui nuit à notre compréhension et à la transmission de cet héritage. Nous utilisons des robots, faisons confiance à l'industrie et finissons parfois par manger des plats issus de recettes traditionnelles mais transformés industriellement. Dans nos sociétés actuelles, l'alimentation et la cuisine sont étroitement liées à l'organisation de l'espace et du temps. À la maison, cela devient une question d'économie domestique et de gestion familiale. Pourtant, cuisiner, c'est ce qui nous rend humains. Nous sommes les gardiens de cette mémoire. Pour garantir sa préservation, il est essentiel que nous la pratiquions et la fassions vivre au-delà de notre génération. La question au cœur de cette recherche est donc de nous demander comment nous pouvons préserver la mémoire culinaire populaire et, plus particulièrement, comment le design peut nous aider à trouver des solutions."],
          ["If, like Yuval Noah Harari, we work on the assumption that our civilization was built on the discovery of fire and its mastery, then we can call ourselves a «race of cooks». By taming fire, we invented cooking. It defined our human nature and marked a decisive moment in our intellectual development. Cooking is what makes us human. As societies grew bigger, not only did cooking become essential, it also became natural. In 2010, the French gastronomy was inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity. This recognition was more precisely about the French way of eating and the social activities that surround it; such as conviviality, the pleasure of taste, sharing and the use of local foods and products. But if we want to talk about heritage, we must go beyond gastronomy and embrace cooking in all its dimensions. Culinary memory encompasses recipes, knowledge, technical know-how and manual skill. These are not specific to gastronomy, which has more to do with the legacy of the bourgeoisie than with that of humankind in general. Eating and cooking are deeply rooted in our culture and our social lives. French cooking strengthens the collective identity of the country and enhances cultural diversity in the world. Yet, our dependence on the agro-food industry and new technologies leads us to cook less, make less homemade meals and consequently hinders our understanding and our passing down of this legacy. We use robots, trust the industry and sometimes end up eating food that comes from traditional recipes but that has been processed industrially. In our current societies, food and cooking are closely linked to the organization of space and time. At home, it becomes a question of home economics and family management. Still, cooking is what makes us human. We are the keepers of its memory. To make sure it's preserved, it is essential that we practice it and make it live beyond our generation. The question at the core of this research is then to ask ourselves how we can preserve popular culinary memory and more particularly how design can help us find solutions."],
        ],
        technologies:
        [
          ['Recherche', 'Photoshop', 'Illustrator', 'Indesign'],
          ['Research', 'Photoshop', 'Illustrator', 'Indesign'],
        ],
        sectionsImg:
        [
          ['/projets/memoire/memoire1.jpg','/projets/memoire/memoire2.jpg','/projets/memoire/memoire3.jpg','/projets/memoire/memoire4.jpg','/projets/memoire/memoire5.jpg','/projets/memoire/memoire6.jpg'],
          ['/projets/memoire/memoire1.jpg','/projets/memoire/memoire2.jpg','/projets/memoire/memoire3.jpg','/projets/memoire/memoire4.jpg','/projets/memoire/memoire5.jpg','/projets/memoire/memoire6.jpg'],
        ]
      }, 
    ];


    const imgStyle={
      display: 'flex',
      fleWrap: 'nowrap',
      margin: '.2rem 0rem 0rem .3rem', 
      width:'40px',
      height:'auto',
      transition: 'transform 2s ease', // Adjust the duration and easing as needed
    } 

  // Déterminer les indices en fonction de la langue
      const Lang = indepArray[0].Lang;
      const langIndex = Lang === 'FR' ? 0 : 1;
  // Cliquer sur découvrir
      const prev = '/icons/interface/icon-eye-1.png';
      const next= '/icons/interface/icon-eye-2.png';
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
      <div className='scrollable-container'>

        {/* VIDEO OPENING -- full width > moitié au scroll */}
        <div className='film' style={{zIndex:'1001'}}>
          <div className='background-video-hp' id='bg-video-projet' >
              <video className='desktop' autoPlay loop muted playsInline>
                <source src={descriptionprojectsArr[Number(id)-1].videoDesktop} type="video/mp4" />
              </video>
              <video className='mobile' autoPlay loop muted playsInline>
                <source src={descriptionprojectsArr[Number(id)-1].videoMobile} type="video/mp4" />
              </video>
          </div>
          <div className='background-video-title'>
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
  
        <div  className='section' id='projet' style={{marginBottom: '5rem'}}>
         
         <div className='flex-wrap'>
          {/* DIV INFOS*/}
         <div className='projet-infos'>
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
  
            {descriptionprojectsArr[Number(id)-1].onClick&&
            <div>
              <>{Lang === 'FR' ? <p style={{fontWeight:'300'}}>Découvrir le site</p> : <p style={{fontWeight:'300'}}>Discover the website</p>}</>
              <div id='carousel-btn-projet' 
                    onMouseOver={handleHover} 
                    onMouseOut={handleHoverOut} 
                    onClick={handleDiscoverClick}
              >
                <Image 
                     src={imageSource} 
                     alt='an icon of an eye to see the project description when clicked' 
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
         <div className='projet-infos-besoins'>
              {Lang === 'FR' ? <h2>Besoins</h2> : <h2>Needs</h2>}
                <p>{descriptionprojectsArr[Number(id)-1].besoins[langIndex][0]}</p>
         </div>
      </div>
         
  
         {/* DIV SECTIONS */}
           {/* SECTION 2 - EXPLICATION PROJET */}
            {descriptionprojectsArr[Number(id)-1].sections && descriptionprojectsArr[Number(id)-1].sections.length > 0 && (
              descriptionprojectsArr[Number(id)-1].sections.map((section) => (
            <>
            {/* TITRE DE LA PREMIÈRE SECTION */}
              <div className='projet-infos-titre'>
                <h2>{section.subtitle[langIndex]}</h2>
                <p>{section.text[langIndex]}</p>
              </div>
    
              {/* IMAGE OU VIDEO DE PREMIERE SECTION */}
              <div className='projet-infos-img'>
                {section.video ? (
                  <div className='grid-col2-video-section'>
                    <video src={section.video} autoPlay loop muted playsInline>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <Image 
                    src={Lang !== 'FR' && section.imageEN ? section.imageEN : section.image} 
                    alt={Lang !== 'FR' ? "Section visual in English" : "Section visual"} 
                    width={2600}
                    height={0}
                    style={{width:'100%'}}
                  />
                )}
              </div>
            </>
            ))
            )}
            {/* SECTION 3 - IMAGES SUPPLÉMENTAIRES*/}
            {/* si + d'1 image grid-col2 sinon flex-wrap */}
            <div className={
              (descriptionprojectsArr[Number(id)-1].sectionsImg && 
              (descriptionprojectsArr[Number(id)-1].sectionsImg[0]?.length > 1 || descriptionprojectsArr[Number(id)-1].sectionsImg[1]?.length > 1)) 
              ? 'grid-col2' 
              : 'flex-wrap'
              }>
              {descriptionprojectsArr[Number(id)-1].sectionsImg && descriptionprojectsArr[Number(id)-1].sectionsImg.length > 0 && (
                (Lang === 'FR' ? descriptionprojectsArr[Number(id)-1].sectionsImg[1] : descriptionprojectsArr[Number(id)-1].sectionsImg[0]).map((sectionImg, index) => (
                  <Image 
                    key={index} 
                    src={sectionImg} 
                    className={`section-image ${index === 2 ? 'div3' : ''}`} 
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
}

export default Projet