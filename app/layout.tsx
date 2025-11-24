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
  title: "Maison Bleu Iris",
  description: "Studio de développment d’image de marque pour tous ceux qui promeut une philosophie éco-responsable et éthique.",
  openGraph: {
    title: "Maison Bleu Iris",
    description: "Studio de développment d’image de marque pour tous ceux qui promeut une philosophie éco-responsable et éthique.",
    url: "https://www.maisonbleuiris.fr",
    siteName: "Maison Bleu Iris",
    images: [
      {
        url: "https://www.maisonbleuiris.fr/favicon.png",
        width: 800,
        height: 600,
        alt: "Icon de l'iris bleu à l'encre de chine",
      },
    ],
    locale: "en_US",
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
