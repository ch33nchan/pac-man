import { useState, useEffect } from 'react';

export const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audio.volume = 0.3; // Reduce volume to 30%
    audio.loop = true;
    audio.play().catch(console.error);
    setPlaying(true);
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

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