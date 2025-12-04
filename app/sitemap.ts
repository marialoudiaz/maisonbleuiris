import { MetadataRoute } from "next";
import { descriptionprojectsArr } from '@/app/data/projects';


export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.maisonbleuiris.fr";
 

  // Pages statiques
  const staticPages = [
    { url: `${baseUrl}/all-projects`, priority: 0.8 },
    { url: `${baseUrl}/contact-us`, priority: 0.8 },
    { url: `${baseUrl}/deroule`, priority: 0.8 },
    { url: `${baseUrl}/key-projects`, priority: 0.8 },
    { url: `${baseUrl}/mentions-legales`, priority: 0.5 },
    { url: `${baseUrl}/philosophy`, priority: 0.8 },
  ].map(page => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));

  // Pages projets (exemple : 1 à 6) - avec _ qui est l'index qui commence a 0 par defaut, "ajout de +1) permet d'éviter projet 0"
  const projetsPages = Array.from({ length: 6 }, (_, i) => ({
    url: `${baseUrl}/projet/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Page principale
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  return [...pages, ...staticPages, ...projetsPages];
}

  //version 1 avec juste la racine
  // return [
  //   {
  //     url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  //     lastModified: new Date(),
  //     changeFrequency: "daily",
  //     priority: 1,
  //   },
  // ];

// Ajouter toutes les pages projets dynamiques
  // const projets = Object.keys(descriptionprojectsArr).map((id) => {
  //   const projet = descriptionprojectsArr[Number(id)];
  //   return {
  //     url: `${baseUrl}/projet/${id}`,
  //     lastModified: projet.updatedAt ? new Date(projet.updatedAt) : new Date(),
  //     changeFrequency: "weekly" as const,
  //     priority: 0.8,
  //   };
  // });