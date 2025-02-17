import React, { useState } from 'react';
import Grid from '../Grid';
import BackgroundMusic from '../BackgroundMusic';
import VolumeControl from '../VolumeControl';

const Game: React.FC = () => {
  const [volume, setVolume] = useState(0.3);

  return (
    <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <BackgroundMusic isGameScreen={true} volume={volume} />
      <VolumeControl volume={volume} onVolumeChange={setVolume} />
      <Grid />
    </div>
  );
};

export default Game;