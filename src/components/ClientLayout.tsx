'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LoadingScreen from "@/components/Loading";

// List of all images to preload
const PRELOAD_IMAGES = [
  '/images/profilepicture.jpg',
  '/images/J-Tag.png',
  '/images/Carfy.png',
  '/images/HealMe.png',
  '/images/perpusdes.png',
  '/images/uangkita.png',
  '/icons/nextjs.svg',
  '/icons/react.svg',
  '/icons/tailwind.svg',
];

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');

    if (hasLoadedBefore) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasLoadedBefore', 'true');
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {/* Hidden image preloader - renders during loading to cache images */}
      <div className="fixed -left-[9999px] -top-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
        {PRELOAD_IMAGES.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={1}
            height={1}
            priority
          />
        ))}
      </div>

      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Render children hidden during loading so they preload */}
      <div className={showContent ? "transition-opacity duration-500 opacity-100" : "fixed -left-[9999px] opacity-0"}>
        {children}
      </div>
    </>
  );
}
