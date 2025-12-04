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

  // Pages projets dynamiques à partir de descriptionprojectsArr
  const projetsPages = descriptionprojectsArr.map(projet => {
    // Crée un slug à partir du titre pour l'URL
    const slug = projet.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""); // enlève les caractères spéciaux

    return {
      url: `${baseUrl}/projet/${slug}`,
      lastModified: projet.updatedAt ? new Date(projet.updatedAt) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

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
