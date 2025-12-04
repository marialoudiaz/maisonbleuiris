// 'use client';
// import React, { useRef, useEffect } from 'react';
// import { motion, useTransform, MotionValue } from 'framer-motion';
// import { useData } from '@/app/context/DataContext'; // Import du contexte
// import '../../styles/App.scss';

// interface VideoProps {
//   scrollYProgress: MotionValue<number>;
// }

// const VideoReveal: React.FC<VideoProps> = ({ scrollYProgress }) => {
//   // refs
//   const desktopVideoRef = useRef<HTMLVideoElement>(null);
//   const mobileVideoRef = useRef<HTMLVideoElement>(null);
//   // Routage
//   const { indepArray } = useData();
//   // Default values if indepArray data is missing
//   const videoOrdi = indepArray?.[0]?.videoOrdi || 'videoReveal1';
//   const videoTel = indepArray?.[0]?.videoTel || 'videoReveal2';
//   // Video map for fallback values
//   const videoMap: { [key: string]: string } = {
//     'videoReveal1': '/videos/videos-introductives/graphisme-ethique.mp4',
//     'videoReveal2': '/videos/videos-introductives/graphisme-conscient.mp4',
//   };
//   const graphisme_ethique = videoMap[videoOrdi];
//   const graphisme_conscient = videoMap[videoTel];
//   // Functions
//   const handlePlayVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       videoElement.requestFullscreen();
//       videoElement.play();
//     }
//   };
//   // Fullscreen exit
//   const resetVideoOnFullscreenExit = (videoRef: React.RefObject<HTMLVideoElement>) => {
//     const videoElement = videoRef.current;
//     const handleFullscreenChange = () => {
//       if (!document.fullscreenElement && videoElement) {
//         videoElement.pause();
//         videoElement.currentTime = 0;
//         videoElement.load();
//       }
//     };
//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     return () => {
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//     };
//   };
//   // Unconditionally call useTransform and useEffect hooks
//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
//   useEffect(() => {
//     resetVideoOnFullscreenExit(desktopVideoRef);
//     resetVideoOnFullscreenExit(mobileVideoRef);
//   }, []);
//   // Return fallback content if data is missing
//   if (!indepArray || !indepArray[0].discover) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <motion.div style={{ scale, rotate }}>
//       <div className="background-video-hp">
//         <div className="desktop" style={{ position: 'relative' }}>
//           <video
//             ref={desktopVideoRef}
//             playsInline
//             poster="/images/projets/maisonbleuiris_services.png"
//             onClick={() => handlePlayVideo(desktopVideoRef)}
//             controls={false}
//           >
//             <source src={graphisme_ethique} type="video/mp4" />
//           </video>
//           <div
//             className="btn-transp-big"
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//             }}
//             onClick={() => handlePlayVideo(desktopVideoRef)}
//           >
//             <div>
//               <svg
//                 className="icon-transp-big"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 aria-label="Play Icon"
//               >
//                 <path
//                   d="M5 3.868V20.132C5 21.008 6.035 21.532 6.757 21.068L19.086 13.737C19.794 13.28 19.794 12.12 19.086 11.663L6.757 4.332C6.035 3.868 5 4.392 5 5.268Z"
//                   className="fill-gray-800"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="mobile" style={{height:'100%', objectFit: 'cover'}}>
//           <video
//             ref={mobileVideoRef}
//             playsInline
//             poster="/images/projets/maisonbleuiris_services.png"
//             onClick={() => handlePlayVideo(mobileVideoRef)}
//             controls={true}
//           >
//             <source src={graphisme_conscient} type="video/mp4" />
//           </video>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default VideoReveal;

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

  // Pages projets avec vidéo
  const projetsPages = descriptionprojectsArr.map(projet => {
    const slug = projet.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    // Récupère les vidéos du projet si elles existent
    const videos: { url: string; title?: string }[] = [];
    if (projet.videoDesktop) {
      videos.push({
        url: `${baseUrl}${projet.videoDesktop}`,
        title: projet.title + " - Desktop video",
      });
    }
    if (projet.videoMobile) {
      videos.push({
        url: `${baseUrl}${projet.videoMobile}`,
        title: projet.title + " - Mobile video",
      });
    }

    return {
      url: `${baseUrl}/projet/${slug}`,
      lastModified: projet.updatedAt ? new Date(projet.updatedAt) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      videos: videos.length > 0 ? videos : undefined,
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
