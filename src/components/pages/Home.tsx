import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundMusic from '../BackgroundMusic';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <BackgroundMusic />
      
      {/* Decorative Pacmans */}
      <div className="absolute text-4xl text-blue-400 animate-float-left-right left-0">ᗧ•••</div>
      <div className="absolute text-4xl text-blue-400 animate-float-right-left right-0">•••ᗧ</div>
      <div className="absolute text-4xl text-blue-400 animate-float-top-bottom top-0">ᗧ•••</div>
      
      {/* Arcade Frame */}
      <div className="bg-blue-900/20 p-8 rounded-2xl border-4 border-blue-500/50 shadow-lg shadow-blue-500/30">
        <h1 className="text-4xl text-yellow-400 font-press-start mb-8 animate-pulse text-center 
                      tracking-wider leading-relaxed">
          Welcome to<br />
          <span className="text-5xl">Srini's</span><br />
          PacMan World
        </h1>
        
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/game')}
            className="text-2xl text-white font-press-start bg-pink-500 px-10 py-4 
                     rounded-xl hover:bg-pink-600 transition-all duration-300
                     border-4 border-pink-300 hover:scale-110 animate-pulse
                     shadow-lg shadow-pink-500/50 relative group"
          >
            <span className="absolute -left-8 text-2xl text-yellow-400 group-hover:animate-chomp">ᗧ</span>
            START GAME
            <span className="absolute -right-8 text-2xl text-blue-400">•••</span>
          </button>
        </div>

        <div className="mt-8 text-center text-blue-400 font-press-start text-sm animate-pulse">
          INSERT COIN TO PLAY
        </div>
      </div>

      {/* Arcade Decorations */}
      <div className="fixed top-0 left-0 w-full h-4 bg-gradient-to-r from-blue-500/20 via-blue-400/40 to-blue-500/20"></div>
      <div className="fixed bottom-0 left-0 w-full h-4 bg-gradient-to-r from-blue-500/20 via-blue-400/40 to-blue-500/20"></div>
    </div>
  );
};

export default Home;