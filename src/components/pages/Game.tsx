import React, { useEffect } from 'react';
import Grid from '../Grid';
import BackgroundMusic from '../BackgroundMusic';

const Game: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <BackgroundMusic isGameScreen={true} />
      <Grid />
    </div>
  );
};

export default Game;