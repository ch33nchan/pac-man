import React, { useRef, useEffect } from 'react';

interface BackgroundMusicProps {
  isGameScreen: boolean;
  isMuted: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isGameScreen, isMuted }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(isGameScreen ? '/sounds/pacman_theme.mp3' : '/sounds/pac-man-start.mp3');
      audio.volume = 0.3;
      audio.loop = true;
      audioRef.current = audio;
      
      if (!isMuted) {
        audio.play().catch(() => {});
      }
    }

    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isGameScreen, isMuted]);

  return null;
};

export default BackgroundMusic;