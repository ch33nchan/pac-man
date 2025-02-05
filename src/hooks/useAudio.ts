import { useState, useEffect, useCallback } from 'react';

export const useAudio = (url: string) => {
  const [themeAudio] = useState(new Audio(url));
  const [startupAudio] = useState(new Audio('/sounds/pac-man-start.mp3'));
  const [playing, setPlaying] = useState(true);

  const startGame = useCallback(() => {
    startupAudio.pause();
    startupAudio.currentTime = 0;
    themeAudio.volume = 0.15;
    themeAudio.loop = true;
    themeAudio.play().catch(console.error);
  }, [startupAudio, themeAudio]);

  const toggle = useCallback(() => {
    if (playing) {
      themeAudio.pause();
    } else {
      themeAudio.play().catch(console.error);
    }
    setPlaying(!playing);
  }, [playing, themeAudio]);

  useEffect(() => {
    startupAudio.volume = 0.3;
    startupAudio.play().catch(console.error);

    return () => {
      startupAudio.pause();
      themeAudio.pause();
    };
  }, [startupAudio, themeAudio]);

  return { playing, toggle, startGame };
};

export const playMoveSound = () => {
  const moveSound = new Audio('/sounds/pac-man-waka-waka.mp3');
  moveSound.volume = 0.2;
  moveSound.play().catch(console.error);
  setTimeout(() => {
    moveSound.pause();
    moveSound.currentTime = 0;
  }, 500);
};

export const playEatFruitSound = () => {
  const eatSound = new Audio('/sounds/pacman_eatfruit.wav');
  eatSound.volume = 0.3;
  eatSound.play().catch(console.error);
};