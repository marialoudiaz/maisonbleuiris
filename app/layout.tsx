import React from 'react';
import { DataProvider } from './context/DataContext';
// import { Providers } from "./providers";
import '../app/globals.css';
// import { Barlow, Barlow_Condensed} from 'next/font/google';
import Script from 'next/script';



// export const metadata = {
//   title: 'Maria Lou Diaz',
//   description: 'Art director (graphic designer and web developper) specialized in branding. From web development to print design, I help independent workers build their visual identity and launch their project.',
// }
//Développment d’image de marque pour tous ceux qui promeut une philosophie bien-être, éco-responsable et éthique: lieux, marques, artisans, praticiens, etc…
export const metadata = {
  title: {
    default: "Maison Bleu Iris | Studio graphisme et design de marque Montpellier", // titre dans l'onglet web,
    template: "Maison Bleu Iris | Studio graphisme et design de marque Montpellier", //: stratégie marketing, print, web, packaging
  },
  description: "Vous avez un projet ou une marque à révéler ? Maison Bleu Iris accompagne celles et ceux qui défendent une vision éco-responsable et éthique, à travers une approche globale du design de marque, du print au digital: Print, Développement web, Illustration, Packaging", //Studio expert en développement d’image de marque pour tous ceux qui promeut une philosophie éco-responsable et éthique.
  //rs
  openGraph: {
    title: "Maison Bleu Iris | Studio graphisme et design de marque Montpellier",//: stratégie marketing, print, web, packaging
    description: "Vous avez un projet ou une marque à révéler ? Maison Bleu Iris accompagne celles et ceux qui défendent une vision éco-responsable et éthique, à travers une approche globale du design de marque, du print au digital: Print, Développement web, Illustration, Packaging", //Studio expert en développement d’image de marque pour tous ceux qui promeut une philosophie éco-responsable et éthique.
    alternates: {
    canonical: "https://www.maisonbleuiris.fr/",
    },
    url: "https://www.maisonbleuiris.fr",
    siteName: "Maison Bleu Iris | Studio graphisme et design de marque Montpellier ",
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

/// Charger Barlow sans retarder le LCP
// export const barlow = Barlow({
//   subsets: ['latin'],
//   weight: ['100','200','300','400','500','600','700','800','900'],
//   display: 'swap',
//   variable: '--font-barlow',
// });

// export const barlowCondensed = Barlow_Condensed({
//   subsets: ['latin'],
//   weight: ['100'],
//   display: 'swap',
//   variable: '--font-barlow-condensed',
// });


// a mettre dans html : className={`${barlow.variable} ${barlowCondensed.variable}`}
export default function RootLayout({children,}:{children: React.ReactNode}) {
  return (
    <html lang="fr">
      <head>
        {/* Charger le kit Adobe Typekit de manière non bloquante */}
        <Script
          src="https://use.typekit.net/auw7joq.js"
          strategy="afterInteractive"
        />
        <Script id="typekit-init" strategy="afterInteractive">
          {`try{Typekit.load({ async: true }); } catch(e){ }`}
        </Script>
      </head>


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
