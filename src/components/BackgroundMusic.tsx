import React, { useRef, useEffect } from 'react';

const BackgroundMusic: React.FC<{ isGameScreen: boolean }> = ({ isGameScreen }) => {
  const startupSoundRef = useRef<HTMLAudioElement>(new Audio('/sounds/pac-man-start.mp3'));
  const themeSoundRef = useRef<HTMLAudioElement>(new Audio('/sounds/pacman_theme.mp3'));

  useEffect(() => {
    const startupSound = startupSoundRef.current;
    const themeSound = themeSoundRef.current;

    startupSound.volume = 0.3;
    themeSound.volume = 0.3;
    startupSound.loop = true;
    themeSound.loop = true;

    if (isGameScreen) {
      startupSound.pause();
      themeSound.play().catch(console.error);
    } else {
      startupSound.play().catch(console.error);
    }

    return () => {
      startupSound.pause();
      themeSound.pause();
    };
  }, [isGameScreen]);

  return null;
};

export default BackgroundMusic;