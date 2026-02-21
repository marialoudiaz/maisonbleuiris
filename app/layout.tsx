import React from 'react';
import { DataProvider } from './context/DataContext';
import '../globals.css';



// export const metadata = {
//   title: 'Maria Lou Diaz',
//   description: 'Art director (graphic designer and web developper) specialized in branding. From web development to print design, I help independent workers build their visual identity and launch their project.',
// }
//Développment d’image de marque pour tous ceux qui promeut une philosophie bien-être, éco-responsable et éthique: lieux, marques, artisans, praticiens, etc…
export const metadata = {
  title: {
    default: "Maison Bleu Iris | Studio de design de marque éthique", // titre dans l'onglet web,
    template: "Maison Bleu Iris | Studio de design de marque éthique", //: stratégie marketing, print, web, packaging
  },
  description:
  "Chez Maison Bleu Iris, nous concevons l’image de marque de celles et ceux qui portent des projets engagés, éthiques et conscients. Marques, lieux, artisans, praticiens : nous donnons forme à des univers alignés, sensibles et durables par une expertise du print au digital: Print, Développement web, Illustration, Packaging",
  //rs
  openGraph: {
    title: "Maison Bleu Iris | Studio de design de marque éthique Montpellier",//: stratégie marketing, print, web, packaging
    description:   "Chez Maison Bleu Iris, nous concevons l’image de marque de celles et ceux qui portent des projets engagés, éthiques et conscients. Marques, lieux, artisans, praticiens : nous donnons forme à des univers alignés, sensibles et durables par une expertise du print au digital: Print, Développement web, Illustration, Packaging",
    alternates: {
    canonical: "https://www.maisonbleuiris.fr/",
    },
    url: "https://www.maisonbleuiris.fr",
    siteName: "Maison Bleu Iris | Studio de design de marque éthique Montpellier",
    images: [
      {
        url: "../public/favicon.ico",
        width: 800,
        height: 600,
        alt: "Icon de l'iris bleu à l'encre de chine",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  //fin rs
};

// a mettre dans html : className={`${barlow.variable} ${barlowCondensed.variable}`}
export default function RootLayout({children,}:{children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body>
        <main>
          <DataProvider>
            {children}
          </DataProvider>   
        </main>          
      </body>
    </html>
  )
}
