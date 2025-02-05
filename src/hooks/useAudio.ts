import { useState, useEffect } from 'react';

export const useAudio = (url: string, autoPlay: boolean = true) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);  // Changed to true by default

  useEffect(() => {
    audio.volume = 0.15;
    audio.loop = true;

    // Play startup sound first
    const startupSound = new Audio('/sounds/pac-man-start.mp3');
    startupSound.volume = 0.3;
    
    const startGame = async () => {
      try {
        await startupSound.play();
        // Wait for 5 seconds before playing theme
        setTimeout(async () => {
          await audio.play();
          setPlaying(true);
        }, 5000);
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    };

    startGame();

    return () => {
      audio.pause();
      startupSound.pause();
    };
  }, [audio]);

  const toggle = async () => {
    try {
      if (playing) {
        audio.pause();
      } else {
        await audio.play();
      }
      setPlaying(!playing);
    } catch (error) {
      console.error("Audio toggle failed:", error);
    }
  };

  return { playing, toggle };
};

export const playMoveSound = () => {
  const moveSound = new Audio('/sounds/pac-man-waka-waka.mp3');
  moveSound.volume = 0.2;
  moveSound.play().catch(console.error);
  // Stop the sound after 0.5 seconds
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