import React from 'react';
import BackgroundMusic from './BackgroundMusic';

interface WelcomeProps {
  onBegin: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onBegin }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center">
      <BackgroundMusic />
      <div className="relative bg-blue-900/60 p-16 w-[1000px] h-[600px] rounded-xl text-center 
                    border-[12px] border-blue-500/80 border-b-blue-700
                    shadow-[inset_0_0_50px_rgba(59,130,246,0.3),inset_0_0_100px_rgba(0,0,0,0.5)]
                    overflow-hidden flex flex-col items-center justify-center
                    bg-[linear-gradient(0deg,rgba(30,58,138,0.1)1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)1px,transparent_1px)]
                    bg-[size:20px_20px]">
        {/* Pac-Man decorations */}
        <div className="absolute top-12 left-0 animate-pacman-move text-yellow-400 text-5xl lg:text-6xl">
          ᗧ•
        </div>
        <div className="absolute top-32 right-0 animate-pacman-move-reverse text-cyan-400 text-5xl lg:text-6xl">
          ᗣ•
        </div>
        <div className="absolute bottom-32 left-0 animate-pacman-move text-pink-400 text-5xl lg:text-6xl">
          ᗧ•
        </div>
        <div className="absolute bottom-12 right-0 animate-pacman-move-reverse text-red-400 text-5xl lg:text-6xl">
          ᗣ•
        </div>
        
        <h1 className="text-4xl text-yellow-400 mb-20 font-press-start tracking-wider 
                     drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
          Welcome to<br />Srini's Site
        </h1>
        
        <div className="relative group hover:cursor-pointer p-8 -m-8">
          <button
            onClick={onBegin}
            className="relative px-24 py-6 bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600
                     text-white font-press-start text-xl tracking-[0.2em] leading-relaxed
                     transform-gpu transition-all duration-150 ease-in-out
                     rounded-none w-[500px] h-[120px] flex flex-col items-center justify-center
                     border-4 border-pink-400
                     shadow-[8px_8px_0_4px_#2d1b34,0_0_20px_rgba(236,72,153,0.5)]
                     group-hover:shadow-[16px_16px_0_8px_#2d1b34,0_0_40px_rgba(236,72,153,0.8)]
                     group-hover:-translate-y-4 group-hover:-translate-x-4
                     group-hover:scale-[1.02]
                     active:shadow-[4px_4px_0_2px_#2d1b34]
                     active:translate-y-2 active:translate-x-2
                     active:scale-95
                     before:absolute before:inset-0 
                     before:bg-gradient-to-b before:from-white/30 before:to-transparent
                     before:opacity-50 group-hover:before:opacity-80
                     after:absolute after:inset-0 
                     after:border-4 after:border-pink-800/30"
          >
            <span className="relative z-10 group-hover:text-pink-100">P R E S S</span>
            <span className="relative z-10 group-hover:text-pink-100">S T A R T</span>
          </button>
          <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 animate-pulse bg-pink-500/20 rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;