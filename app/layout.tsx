import React from 'react';
import { DataProvider } from './context/DataContext';
// import { Providers } from "./providers";
import '../app/globals.css';


// export const metadata = {
//   title: 'Maria Lou Diaz',
//   description: 'Art director (graphic designer and web developper) specialized in branding. From web development to print design, I help independent workers build their visual identity and launch their project.',
// }
//Développment d’image de marque pour tous ceux qui promeut une philosophie bien-être, éco-responsable et éthique: lieux, marques, artisans, praticiens, etc…
export const metadata = {
  title: {
    default: "Maison Bleu Iris | Studio graphisme et design de marque Montpellier",
    template: "Studio graphisme et design de marque Montpellier : stratégie marketing, print, web, packaging - Maison Bleu Iris",
  },
  description: "Vous avez un projet ou une marque à révéler ? Maison Bleu Iris accompagne celles et ceux qui défendent une vision éco-responsable et éthique, à travers une approche globale du design de marque, du print au digital: Print, Développement web, Illustration, Packaging", //Studio expert en développement d’image de marque pour tous ceux qui promeut une philosophie éco-responsable et éthique.
  openGraph: {
    title: "Studio graphisme et design de marque : stratégie marketing, print, web, packaging - Maison Bleu Iris",
    description: "Vous avez un projet ou une marque à révéler ? Maison Bleu Iris accompagne celles et ceux qui défendent une vision éco-responsable et éthique, à travers une approche globale du design de marque, du print au digital: Print, Développement web, Illustration, Packaging", //Studio expert en développement d’image de marque pour tous ceux qui promeut une philosophie éco-responsable et éthique.
    alternates: {
    canonical: "https://www.maisonbleuiris.fr/",
  },
    url: "https://www.maisonbleuiris.fr",
    siteName: "Studio graphisme et design de marque Montpellier - Maison Bleu Iris",
    images: [
      {
        url: "../app/public/favicon.ico",
        width: 800,
        height: 600,
        alt: "Icon de l'iris bleu à l'encre de chine",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({children,}:{children: React.ReactNode}) {
  return (
    <html lang="en">
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
