import React, { useState } from 'react';
import BackgroundMusic from './BackgroundMusic';
import MuteButton from './MuteButton';

interface WelcomeProps {
  onBegin: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onBegin }) => {
  const [isMuted, setIsMuted] = useState(false);

  const handleBegin = () => {
    if (window.startThemeMusic && !isMuted) {
      window.startThemeMusic();
    }
    onBegin();
  };

  const toggleMute = () => {
    setIsMuted((prev: boolean) => !prev);
  };

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-md z-50 flex items-center justify-center">
      <BackgroundMusic isGameScreen={false} isMuted={isMuted} />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />
      <div className="relative bg-blue-900/30 p-16 w-[1000px] h-[600px] rounded-none text-center 
                    border-[16px] border-blue-600 border-b-blue-800
                    shadow-[inset_0_0_100px_rgba(37,99,235,0.5),0_0_50px_rgba(37,99,235,0.3)]
                    overflow-hidden flex flex-col items-center justify-center
                    bg-[linear-gradient(0deg,rgba(30,58,138,0.2)1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.2)1px,transparent_1px)]
                    bg-[size:16px_16px] before:absolute before:inset-0 before:bg-blue-500/5">
        {/* Updated Pac-Man decorations */}
        <div className="absolute top-8 left-0 animate-pacman-move text-yellow-400 text-6xl lg:text-7xl">
          ᗧ••••
        </div>
        <div className="absolute top-24 right-0 animate-pacman-move-reverse text-blue-400 text-6xl lg:text-7xl">
          ᗣ•
        </div>
        <div className="absolute bottom-24 left-0 animate-pacman-move text-pink-400 text-6xl lg:text-7xl">
          ᗧ••••
        </div>
        <div className="absolute bottom-8 right-0 animate-pacman-move-reverse text-red-400 text-6xl lg:text-7xl">
          ᗣ•
        </div>
        
        <h1 className="text-5xl text-yellow-400 mb-24 font-press-start tracking-wider 
                     drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]
                     animate-pulse">
          Welcome to<br />
          <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Srini's Site
          </span>
        </h1>
        
        <div className="relative group hover:cursor-pointer p-8 -m-8">
          <button
            onClick={handleBegin}
            className="relative px-24 py-6 bg-blue-600
                     text-white font-press-start text-2xl tracking-[0.2em] leading-relaxed
                     transform-gpu transition-all duration-150 ease-in-out
                     w-[500px] h-[120px] flex flex-col items-center justify-center
                     border-8 border-blue-400
                     shadow-[8px_8px_0_4px_#1e3a8a,0_0_20px_rgba(37,99,235,0.5)]
                     group-hover:shadow-[16px_16px_0_8px_#1e3a8a,0_0_40px_rgba(37,99,235,0.8)]
                     group-hover:-translate-y-4 group-hover:-translate-x-4
                     group-hover:scale-[1.02]
                     active:shadow-[4px_4px_0_2px_#1e3a8a]
                     active:translate-y-2 active:translate-x-2
                     active:scale-95"
          >
            <span className="relative z-10 group-hover:text-blue-100">PRESS START</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;