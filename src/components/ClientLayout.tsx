// components/ClientLayout.tsx
'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from './Loading';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // Skip loading screen for returning visitors
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    // Mark as visited for this session
    sessionStorage.setItem('hasVisited', 'true');
    setIsLoading(false);
    
    // Smooth transition to content
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default ClientLayout;