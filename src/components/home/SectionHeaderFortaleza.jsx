"use client";
import { TypewriterEffectSmooth } from "@/lib/typewriter-effect";
import React, { useEffect, useState } from 'react';
import { BackgroundLines } from "@/lib/background-lines";
import ImageComponent from "@/components/ImageComponent";


const SectionHeaderFortaleza = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showBackgroundLines, setShowBackgroundLines] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackgroundLines(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section className="flex flex-col select-none items-center overflow-hidden justify-center h-screen dark:bg-[#111928]/95">
      {showBackgroundLines && (
        <BackgroundLines className="absolute select-none justify-center items-center top-0 left-0" />
      )}
      {windowSize.width >= 786 && (
        <span className="absolute button-0 left-0 opacity-60 max-w-full overflow-hidden">
          <svg fill="none" height="701" viewBox="0 0 500 250" width="1364" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="a">
              <stop offset="0" stopColor="#4a6cf7" stopOpacity="0" />
              <stop offset="0.5" stopColor="#4a6cf7" />
              <stop offset="1" stopColor="#4a6cf7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="184.389" x2="184.389" href="#a" y1="69.2405" y2="212.24" />
            <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="156.389" x2="156.389" href="#a" y1="69.2405" y2="212.24" />
            <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="125.389" x2="125.389" href="#a" y1="69.2405" y2="212.24" />
            <linearGradient id="e" gradientUnits="userSpaceOnUse" x1="93.8507" x2="89.9278" href="#a" y1="67.2674" y2="210.214" />
            <linearGradient id="f" gradientUnits="userSpaceOnUse" x1="214.505" x2="212.684" y1="10.2849" y2="99.5816">
              <stop offset="0" stopColor="#4a6cf7" />
              <stop offset="1" stopColor="#4a6cf7" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="g" cx="0" cy="0" gradientTransform="matrix(0 43 -43 0 220 63)" gradientUnits="userSpaceOnUse" r="1">
              <stop offset=".145833" stopColor="#fff" stopOpacity="0" />
              <stop offset="1" stopColor="#fff" stopOpacity=".08" />
            </radialGradient>
            <path d="m5.88928 72.3303c27.77062-5.8505 95.50772-7.4217 144.28872 33.0967 60.977 50.649 79.412 56.666 114.155 61.18 34.743 4.513 73.385 17.05 98.556 45.633" stroke="url(#b)" />
            <path d="m-22.1107 72.3303c27.77059-5.8505 95.5072-7.4217 144.2887 33.0967 60.977 50.649 79.412 56.666 114.155 61.18 34.743 4.513 73.385 17.05 98.556 45.633" stroke="url(#c)" />
            <path d="m-53.1107 72.3303c27.7706-5.8505 95.5072-7.4217 144.289 33.0967 60.9767 50.649 79.4117 56.666 114.1547 61.18 34.743 4.513 73.385 17.05 98.556 45.633" stroke="url(#d)" />
            <path d="m-98.1618 65.0889c30.0202-5.0288 102.89544-4.6007 154.2352 37.3421 64.1746 52.429 83.8316 58.988 121.0636 64.525 37.233 5.537 78.438 19.209 104.719 48.525" stroke="url(#e)" />
            <circle cx="214.505" cy="60.5054" opacity=".8" r="49.7205" stroke="url(#f)" transform="matrix(.97269087 -.23210443 .23210443 .97269087 -8.185627 51.43991)" />
            <circle cx="220" cy="63" fill="url(#g)" r="43" />
          </svg>
        </span>
      )}
      {windowSize.width < 786 && (
        <span className="absolute button-0 left-0 opacity-60 max-w-full overflow-hidden">
          <svg fill="none" height="701" viewBox="0 0 864 301" width="1364" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="a">
              <stop offset="0" stopColor="#4a6cf7" stopOpacity="0" />
              <stop offset="0.5" stopColor="#4a6cf7" />
              <stop offset="1" stopColor="#4a6cf7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="184.389" x2="184.389" href="#a" y1="69.2405" y2="212.24" />
            <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="156.389" x2="156.389" href="#a" y1="69.2405" y2="212.24" />
            <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="125.389" x2="125.389" href="#a" y1="69.2405" y2="212.24" />
            <linearGradient id="e" gradientUnits="userSpaceOnUse" x1="93.8507" x2="89.9278" href="#a" y1="67.2674" y2="210.214" />
            <linearGradient id="f" gradientUnits="userSpaceOnUse" x1="214.505" x2="212.684" y1="10.2849" y2="99.5816">
              <stop offset="0" stopColor="#4a6cf7" />
              <stop offset="1" stopColor="#4a6cf7" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="g" cx="0" cy="0" gradientTransform="matrix(0 43 -43 0 220 63)" gradientUnits="userSpaceOnUse" r="1">
              <stop offset=".145833" stopColor="#fff" stopOpacity="0" />
              <stop offset="1" stopColor="#fff" stopOpacity=".08" />
            </radialGradient>
            <path d="m5.88928 72.3303c27.77062-5.8505 95.50772-7.4217 144.28872 33.0967 60.977 50.649 79.412 56.666 114.155 61.18 34.743 4.513 73.385 17.05 98.556 45.633" stroke="url(#b)" />
            <path d="m-22.1107 72.3303c27.77059-5.8505 95.5072-7.4217 144.2887 33.0967 60.977 50.649 79.412 56.666 114.155 61.18 34.743 4.513 73.385 17.05 98.556 45.633" stroke="url(#c)" />
            <path d="m-53.1107 72.3303c27.7706-5.8505 95.5072-7.4217 144.289 33.0967 60.9767 50.649 79.4117 56.666 114.1547 61.18 34.743 4.513 73.385 17.05 98.556 45.633" stroke="url(#d)" />
            <path d="m-98.1618 65.0889c30.0202-5.0288 102.89544-4.6007 154.2352 37.3421 64.1746 52.429 83.8316 58.988 121.0636 64.525 37.233 5.537 78.438 19.209 104.719 48.525" stroke="url(#e)" />
            <circle cx="214.505" cy="60.5054" opacity=".8" r="49.7205" stroke="url(#f)" transform="matrix(.97269087 -.23210443 .23210443 .97269087 -8.185627 51.43991)" />
            <circle cx="220" cy="63" fill="url(#g)" r="43" />
          </svg>
        </span>
      )}

      <h1 className="z-[40] -mt-24 lg:pt-8 sm:mt-6 text-shadow-sm/60">
        <TypewriterEffectSmoothDemo />
      </h1>
      <div className="flex md:flex lg:flex flex-col justify-center items-center overflow-hidden">
        <div className="bg-transparent relative dark:bg-transparent rounded-xl">
          <div className="anim-left">
            <ImageComponent
              iSrc="/static/images/carousel/auto-gris.webp"
              iAlt="Obtén tu licencia de conducir"
              iWidth={640}
              iHeight={384}
              iClassName="my-5 -mx-6 pr-28 absolute rounded-3xl inset-0 object-cover transition-transform ease-in-out contrast-150 brightness-100 lg:min-w-3xl" />
          </div>

          <div className="anim-leftb">
            <ImageComponent
              iSrc="/static/images/carousel/auto-azulb.webp"
              iAlt="Nuestra flota"
              iWidth={640}
              iHeight={384}
              iClassName="rounded-3xl inset-0 object-cover object-center transition-transform ease-in-out contrast-105 brightness-100 lg:min-w-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeaderFortaleza;



export function TypewriterEffectSmoothDemo() {
  const title = [
    { text: `Academia Fortaleza` },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={title} />
    </div>
  );
}
