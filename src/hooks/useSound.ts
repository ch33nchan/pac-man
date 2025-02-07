import { useCallback } from 'react';

export const useSound = () => {
  const playGhostSound = useCallback(() => {
    const audio = new Audio('/sounds/pac_man_ghost.mp3');
    audio.play();
  }, []);

  return { playGhostSound };
};