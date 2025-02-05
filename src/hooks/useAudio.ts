import { useState, useEffect } from 'react';

export const useAudio = (url: string, autoPlay: boolean = true) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(autoPlay);

  useEffect(() => {
    audio.volume = 0.3;
    audio.loop = true;

    const playAudio = async () => {
      try {
        if (autoPlay) {
          await audio.play();
          setPlaying(true);
        }
      } catch (error) {
        console.error("Audio playback failed:", error);
        setPlaying(false);
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, autoPlay]);

  const toggle = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return { playing, toggle };
};

export const playChompSound = () => {
  const chompSound = new Audio('/sounds/pacman_chomp.mp3');
  chompSound.volume = 0.4;
  chompSound.play().catch(console.error);
};