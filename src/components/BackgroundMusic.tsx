import React, { useEffect } from 'react';

interface BackgroundMusicProps {
  isGameScreen: boolean;
  isMuted: boolean;
  volume: number;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isGameScreen, isMuted, volume }) => {
  useEffect(() => {
    const audioElement = document.getElementById('background-music') as HTMLAudioElement;
    if (audioElement) {
      audioElement.muted = isMuted;
      audioElement.volume = volume / 100;
      if (isGameScreen) {
        audioElement.play().catch(console.error);
      } else {
        audioElement.pause();
      }
    }
  }, [isGameScreen, isMuted, volume]);

  return (
    <audio id="background-music" loop>
      <source src="/sounds/background-music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;