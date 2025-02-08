import React, { useState } from 'react';
import Grid from '../Grid';
import BackgroundMusic from '../BackgroundMusic';
import MuteButton from '../MuteButton';

const Game: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted((prev: boolean) => !prev);
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <BackgroundMusic isGameScreen={true} isMuted={isMuted} />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />
      <Grid />
    </div>
  );
};

export default Game;