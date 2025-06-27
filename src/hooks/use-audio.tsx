'use client';

import React, { createContext, useContext, useState, useCallback, useRef, useEffect, useMemo } from 'react';

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playSound: (sound: 'light-on' | 'dark-on') => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);
  
  const playSound = useCallback((sound: 'light-on' | 'dark-on') => {
    if (isMuted) return;

    if (audioRef.current) {
        const soundFiles = {
            'light-on': '/sounds/light-on.mp3',
            'dark-on': '/sounds/dark-on.mp3',
        };
        audioRef.current.src = soundFiles[sound];
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(error => {
            console.error("Error playing sound:", error);
        });
    }
  }, [isMuted]);

  const value = useMemo(() => ({ isMuted, toggleMute, playSound }), [isMuted, toggleMute, playSound]);

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
}
