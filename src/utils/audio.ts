let currentSound: HTMLAudioElement | null = null;

export const playSoundEffect = (soundPath: string, volume: number) => {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
  
  const audio = new Audio(soundPath);
  audio.volume = volume;
  currentSound = audio;
  
  audio.play().catch(() => {
    // Silent catch for autoplay policy
  });
  
  audio.onended = () => {
    currentSound = null;
  };
};