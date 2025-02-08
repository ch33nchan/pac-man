import React, { useRef, useEffect, useState } from 'react';

interface BackgroundMusicProps {
  isGameScreen: boolean;
  isMuted: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isGameScreen, isMuted }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(isGameScreen ? '/sounds/pacman_theme.mp3' : '/sounds/pac-man-start.mp3');
    audio.volume = 0.3;
    audio.loop = true;
    audioRef.current = audio;

    const handleUserInteraction = () => {
      setIsReady(true);
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [isGameScreen]);

  useEffect(() => {
    if (!audioRef.current || !isReady) return;

    if (isMuted) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Silently handle the error
        });
      }
    }
  }, [isMuted, isReady]);

  return null;
};

export default BackgroundMusic;