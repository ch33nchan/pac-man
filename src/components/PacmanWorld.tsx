import React, { useState, useEffect } from 'react';
import { GiCircle } from 'react-icons/gi';
import { FaGhost } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import { useAudio, playMoveSound, playEatFruitSound } from '../hooks/useAudio';
import Welcome from './Welcome';

const GRID_SIZE = 15;
const THEME_SOUND = '/sounds/pacman_theme.mp3';

interface Section {
  x: number;
  y: number;
  icon: JSX.Element;
  label: string;
  path: string;
}

const sections: Section[] = [
  { x: 5, y: 5, icon: <FaGhost className="text-red-500" />, label: 'Resume', path: '/resume' },
  { x: 10, y: 5, icon: <FaGhost className="text-blue-500" />, label: 'Skills', path: '/skills' },
  { x: 5, y: 10, icon: <FaGhost className="text-pink-500" />, label: 'Projects', path: '/projects' },
  { x: 10, y: 10, icon: <FaGhost className="text-orange-500" />, label: 'Contact', path: '/contact' }
];

const PacmanWorld: React.FC = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [showWelcome, setShowWelcome] = useState(true);
  const [playing, setPlaying] = useState(false); // Define playing state
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Define position state

  const handleBegin = () => {
    setShowWelcome(false);
  };

  const toggle = () => setPlaying(!playing); // Define toggle function

  return (
    <div className="min-h-screen bg-black p-8 flex flex-col items-center justify-center relative">
      {showWelcome && <Welcome onBegin={handleBegin} />}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        ← Back
      </button>

      <button 
        onClick={toggle}
        className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        {playing ? '🔊' : '🔇'}
      </button>

      <div className="grid grid-cols-15 gap-0 bg-black border-4 border-blue-500">
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, idx) => {
          const x = idx % GRID_SIZE;
          const y = Math.floor(idx / GRID_SIZE);
          const section = sections.find((s: Section) => s.x === x && s.y === y);
          
          return (
            <div key={idx} className="w-12 h-12 border border-blue-900/30 flex items-center justify-center">
              {position.x === x && position.y === y ? (
                <GiCircle className="text-3xl text-yellow-400 animate-pulse" />
              ) : section ? (
                <div className="text-center">
                  {section.icon}
                  <div className="text-xs text-white">{section.label}</div>
                </div>
              ) : (
                <span className="text-blue-900/30">·</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PacmanWorld;