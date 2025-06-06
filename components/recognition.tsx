'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/App.scss';
import '../globals.css';
import { useData } from '@/app/context/DataContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);
gsap.registerPlugin(SplitText);

const Reco: React.FC = () => {
  const router = useRouter();
  const { indepArray } = useData();
  const recoArr = indepArray[0]?.reco || [];
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const hoverImg = '/projets/bec/bec-hp-1.jpg';
  const [showImage, setShowImage] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


  // split text apparition
  useEffect(() => {
    if (!textRef.current) return;
    const split = SplitText.create(textRef.current, {
      type: "words",
      wordsClass: "word",
      autoSplit: true,
    });

    ScrollTrigger.create({
      trigger: textRef.current,
      start: 'top 80%',
      onEnter: ()=>{
        gsap.from(split.words,{
          y:50,
          opacity: 0,
          stagger: 0.1,
          ease: 'back.out',
          duration: 0.8,
        });
      },
    });
  }, []);
   // Handler pour suivre la souris
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX + 20, y: e.clientY + 20 }); // décalage pour que l'image ne soit pas sous le curseur
  };

  

  return (
    <section className="section" style={{position:'relative'}}>
      {/* Titre non animé */}
      <h2>{recoArr[0]}</h2>

      {/* Bloc de texte animé mot par mot */}
      <p 
        className="split" 
        ref={textRef} onClick={() => router.push('/projet/1')}
        onMouseEnter={()=> setShowImage(true)}
        onMouseLeave={()=> setShowImage(false)}
        onMouseMove={handleMouseMove}
        style={{cursor:'pointer'}}
      >
        {recoArr[1]}
      </p>
      {/* Image flottante affichée au survol */}
      {showImage && (
        <Image
          src={hoverImg}
          alt="aperçu"
          width={200}
          height={200}
          style={{
            position: 'fixed',
            top: mousePos.y,
            left: mousePos.x,
            width: '200px',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            pointerEvents: 'none', // pour ne pas interférer avec le survol
            transition: 'transform 0.1s ease',
            zIndex: 1000,
          }}
        />
      )}
    </section>
  );
};

export default Reco;
