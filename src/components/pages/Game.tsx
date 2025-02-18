import React, { useState } from 'react';
import Grid from '../Grid';
import BackgroundMusic from '../BackgroundMusic';
import MuteButton from '../MuteButton';
import VolumeSlider from '../VolumeSlider';

const Game: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <BackgroundMusic isGameScreen={true} isMuted={isMuted} volume={volume} />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />
      <VolumeSlider volume={volume} onVolumeChange={handleVolumeChange} />
      <Grid />
    </div>
  );
};

export default Game;