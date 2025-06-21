'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreenProps } from '@/types';

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'revealing' | 'hidOnly' | 'moving' | 'complete'>('loading');
  const [displayText, setDisplayText] = useState('');

  const name = 'BAGUS HIDAYAT';

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 8 + 2;
        const newProgress = Math.min(prev + increment, 100);
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setPhase('revealing'), 300);
        }
        return newProgress;
      });
    }, 120);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (phase === 'revealing') {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= name.length) {
          setDisplayText(name.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayText('Hid.');
            setPhase('hidOnly');
          }, 1000);
        }
      }, 10);

      return () => clearInterval(interval);
    }

    if (phase === 'hidOnly') {
      // Trigger movement after a short delay
      setTimeout(() => {
        setPhase('moving');
      }, 700);
    }

    if (phase === 'moving') {
      // After movement done, finish loading
      setTimeout(() => {
        setPhase('complete');
        onComplete();
      }, 1200);
    }
  }, [phase, name, onComplete]);

  const centerPos = {
    x: 0,
    y: 0,
    scale: 1
  };

  const [cornerPos, setCornerPos] = useState(centerPos);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCornerPos({
        x: -window.innerWidth / 2 + 80,
        y: -window.innerHeight / 2 + 40,
        scale: 0.5
      });
    }
  }, []);
  

  return (
    <>
      {phase !== 'complete' && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
          {/* AnimatePresence handles smooth exit */}
          <AnimatePresence>
            {phase === 'loading' && (
              <motion.div
                key="loading"
                className="flex flex-col items-center text-center px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-16 h-16 border-2 border-black mb-10 animate-spin-slow relative" />
                <h2 className="text-2xl font-light tracking-widest mb-4">LOADING PORTFOLIO</h2>
                <div className="flex space-x-1 mb-6">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-black rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <div className="w-full max-w-md mb-6">
                  <div className="h-px bg-gray-200">
                    <div
                      className="h-px bg-black relative transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 w-2 h-2 bg-black rounded-full transform -translate-y-1/2 animate-pulse" />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>INITIALIZING</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated HID text */}
          {(phase === 'hidOnly' || phase === 'moving') && (
            <motion.div
                initial={centerPos}
                animate={phase === 'moving' ? cornerPos : centerPos}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="text-6xl font-light tracking-widest text-black absolute"
            >
            {displayText}
            </motion.div>
          
          )}
        </div>
      )}
    </>
  );
};

export default LoadingScreen;