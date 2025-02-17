import React, { useState } from 'react';
import BackgroundMusic from './BackgroundMusic';
import VolumeControl from './VolumeControl';

interface WelcomeProps {
  onBegin: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onBegin }) => {
  const [volume, setVolume] = useState(0.3);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center">
      <BackgroundMusic isGameScreen={false} volume={volume} />
      <VolumeControl volume={volume} onVolumeChange={setVolume} />
      
      <div className="relative bg-blue-900/30 p-16 w-[1000px] h-[600px] rounded-none text-center 
                    border-[16px] border-blue-600 border-b-blue-800
                    shadow-[inset_0_0_100px_rgba(37,99,235,0.5),0_0_50px_rgba(37,99,235,0.3)]">
        {/* Coin animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="animate-coin-insert">
            <div className="w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-600
                          shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]
                          animate-coin-spin">
              <span className="font-press-start text-yellow-800 text-xs">INSERT</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl text-yellow-400 mb-24 font-press-start tracking-wider 
                     drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]
                     animate-pulse">
          Welcome to<br />
          <span className="text-blue-400">Srini's Site</span>
        </h1>
        
        <button
          onClick={onBegin}
          className="relative px-32 py-8 bg-blue-600 overflow-hidden
                   text-white font-press-start text-3xl tracking-[0.2em]
                   border-8 border-blue-400 rounded-none
                   shadow-[8px_8px_0_4px_#1e3a8a]
                   hover:shadow-[12px_12px_0_6px_#1e3a8a]
                   transition-all duration-300
                   animate-button-bounce
                   group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent
                         translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          <span className="relative z-10">PRESS START</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;