"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useData } from "./context/DataContext";
import "../styles/App.scss";
import Splash from "../components/splash/Splash"; 

const Header = dynamic(() => import("../components/navbar/header"), {
  loading: () => <div>Loading Header...</div>,
});
const Main = dynamic(() => import("../components/sections/hero-section"), {
  loading: () => <div>Loading Main...</div>,
});
const Prez = dynamic(() => import("../components/sections/presentation"), {
  loading: () => <div>Loading Prez...</div>,
});
const Switch = dynamic(() => import("../components/ui/switch"), {
  loading: () => <div>Loading Footer...</div>,
});
const Footer = dynamic(() => import("../components/sections/footer"), {
  loading: () => <div>Loading Footer...</div>,
});


export default function Home() {
  const { indepArray } = useData();
  const [showSplash, setShowSplash] = useState(true);
  // Animation visible seulement pendant 2 secondes
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  // Si DataContext n'a pas encore les datas → on attend
  if (!indepArray) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {showSplash ? (
        <Splash />
      ) : (
        <div className="scrollable-container">
          <Header />
          <Main />
          <Prez />
          <Switch />
          <Footer />
        </div>
      )}
    </>
  );
}
