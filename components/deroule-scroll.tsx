// "use client";

// import React, { useRef, useEffect } from 'react';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { useData } from '@/app/context/DataContext';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import '../styles/App.scss';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const Deroule: React.FC = () => {
//   const { indepArray } = useData();
//   const router = useRouter();
//   const { deroule } = indepArray[0];
//   if (!indepArray || !indepArray[0].cta) {
//     return <div>Loading...</div>;
//   }
//   const { cta} = indepArray[0];

  

//   // ✅ refs React
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const sectionsRef = useRef<HTMLDivElement[]>([]);

//   // ✅ pour ajouter chaque section dans le tableau
//   const addToRefs = (el: HTMLDivElement) => {
//     if (el && !sectionsRef.current.includes(el)) {
//       sectionsRef.current.push(el);
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     const sections = sectionsRef.current;

//     if (!container || !sections.length) return;

//     // ✅ Animation GSAP horizontale avec ScrollTrigger
//     const tween = gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         pin: true,
//         scrub: 1,
//         snap: 1 / (sections.length - 1),
//         end: () => "+=" + (container.scrollWidth - window.innerWidth),
//       },
//     });

//     return () => {
//       tween.scrollTrigger?.kill();
//       tween.kill();
//     };
//   }, []);

//   return (
//     <section id="der" className='section-der'>
//       <div className="flex-wrap" id="deroule">
//         <div className="flex-wrap">
//           <h2>{deroule[1]}</h2>
//           <p>{deroule[2]}</p>
//         </div>
//       </div>

//       {/* ✅ Container horizontal */}
//       <div
//         ref={containerRef}
//         id="deroule-cont"
//         style={{
//           display: "flex",
//           flexWrap: "nowrap",
//           width: "fit-content",
//         }}
//       >
//         {/* ✅ Section 1 */}
//         <div
//           ref={addToRefs}
//           className="section-scroll flex-wrap"
//           id="deroule-item"
//           style={{ minWidth: "100vw", height: "100vh" }}
//         >
//           <Image
//             src="/icons/projets/projet.png"
//             alt="projet"
//             width={300}
//             height={300}
//           />
//           <div className="flex-wrap">
//             <h4>{deroule[3]}</h4>
//             <p>{deroule[4]}</p>
//           </div>
//         </div>

//         {/* ✅ Section 2 */}
//         <div
//           ref={addToRefs}
//           className="section-scroll flex-wrap"
//           id="deroule-item"
//           style={{ minWidth: "100vw", height: "100vh" }}
//         >
//           <Image
//             src="/icons/projets/devis.png"
//             alt="devis"
//             width={300}
//             height={300}
//           />
//           <div className="flex-wrap">
//             <h4>{deroule[5]}</h4>
//             <p>{deroule[6]}</p>
//           </div>
//         </div>

//         {/* ✅ Section 3 */}
//         <div
//           ref={addToRefs}
//           className="section-scroll flex-wrap"
//           id="deroule-item"
//           style={{ minWidth: "100vw", height: "100vh" }}
//         >
//           <Image
//             src="/icons/projets/livrable.png"
//             alt="livrable"
//             width={300}
//             height={300}
//           />
//           <div className="flex-wrap">
//             <h4>{deroule[7]}</h4>
//             <p>{deroule[8]}</p>
//           </div>
//         </div>
//       </div>

//                 <button className='btn-transp-dark' style={{ margin: '2rem auto' }}  onClick={() => router.push('/homepage/#Contact')}>
//                 <div>
//                   <svg
//                       className="icon-transp"
//                       viewBox="0 0 16 19"
//                       xmlns="http://www.w3.org/2000/svg"
//                       aria-label='Arrow Icon'
//                     >
//                       <path
//                         d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
//                         className="fill-white group-hover:fill-white"
//                       ></path>
//                   </svg>
//                   <p className='btn-transp-p' style={{color:'white'}}>
//                     {cta[1]}
//                   </p>
//                 </div>
//           </button>
          
//     </section>
//   );
// };

// export default Deroule;
