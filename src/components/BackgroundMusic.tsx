import React, { useRef, useEffect } from 'react';

interface BackgroundMusicProps {
  isGameScreen: boolean;
  volume: number;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isGameScreen, volume }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio instance only once
    if (!audioRef.current) {
      const audio = new Audio(isGameScreen ? '/sounds/pacman_theme.mp3' : '/sounds/pac-man-start.mp3');
      audio.loop = true;
      audioRef.current = audio;
    }

    // Update volume and play/pause state
    if (audioRef.current) {
      audioRef.current.volume = volume;
      
      if (volume > 0) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Silent catch for autoplay policy
          });
        }
      } else {
        audioRef.current.pause();
      }
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isGameScreen, volume]);

  return null;
};

export default BackgroundMusic;