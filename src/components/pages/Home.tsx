import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundMusic from '../BackgroundMusic';
import MuteButton from '../MuteButton';
import VolumeSlider from '../VolumeSlider';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <BackgroundMusic isGameScreen={false} isMuted={isMuted} volume={volume} />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />
      <VolumeSlider volume={volume} onVolumeChange={handleVolumeChange} />

      <div className="bg-black/50 px-16 py-8 rounded-xl border-4 border-blue-500/50 shadow-lg shadow-blue-500/20 max-w-2xl w-full mx-4">
        <h1 className="text-xl text-yellow-400 font-press-start mb-8 animate-pulse text-center tracking-wider">
          <span className="block text-sm mb-4">WELCOME TO</span>
          <span className="block text-2xl mb-2">SRINI'S</span>
          <span className="block text-base">PACMAN PORTFOLIO</span>
        </h1>
        <button
          onClick={() => navigate('/game')}
          className="w-full text-base text-white font-press-start bg-pink-500 px-6 py-3 
                   rounded-lg hover:bg-pink-600 transition-all duration-300
                   border-4 border-pink-300 hover:scale-105 animate-pulse
                   shadow-lg shadow-pink-500/50"
        >
          INSERT COIN TO START
        </button>
      </div>

      {/* Decorative Pacmans */}
      <div className="absolute text-2xl text-yellow-400 animate-float-left-right left-0">🟡•••</div>
      <div className="absolute text-2xl text-yellow-400 animate-float-right-left right-0 top-1/4">•••🟡</div>
      <div className="absolute text-2xl text-yellow-400 animate-float-top-bottom top-0">🟡•••</div>
    </div>
  );
};

export default Home;