'use client';

import React, { useEffect, useState } from "react";
import LoadingScreen from "@/components/Loading";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = "Bagus Hidayat - Portfolio";
  }, []);
  

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => {}} />}
      {showContent && (
        <div className="transition-opacity duration-500 opacity-100">
          {children}
        </div>
      )}
    </>
  );
}
