import { MetadataRoute } from "next";
import { descriptionprojectsArr } from '@/app/data/projects';


export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.maisonbleuiris.fr";


  // Page principale
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

// Ajouter toutes les pages projets dynamiques
  const projets = Object.keys(descriptionprojectsArr).map((id) => {
    const projet = descriptionprojectsArr[Number(id)];
    return {
      url: `${baseUrl}/projet/${id}`,
      lastModified: projet.updatedAt ? new Date(projet.updatedAt) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [...pages, ...projets];

  //version 1 avec juste la racine
  // return [
  //   {
  //     url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  //     lastModified: new Date(),
  //     changeFrequency: "daily",
  //     priority: 1,
  //   },
  // ];
}
