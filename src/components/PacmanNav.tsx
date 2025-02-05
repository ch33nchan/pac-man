import React, { useState, useEffect } from 'react';
import { GiCircle, GiCherry } from 'react-icons/gi'; // Changed from GiPacman to GiCircle
import { FaGhost } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CHOMP_SOUND = '/sounds/pacman_chomp.mp3';
const GHOST_SOUND = '/sounds/pacman_ghost.mp3';

export default function PacmanNav() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [audio] = useState(new Audio(CHOMP_SOUND));
  const [ghostAudio] = useState(new Audio(GHOST_SOUND));
  const [score, setScore] = useState(0);
  const [pacmanDirection, setPacmanDirection] = useState('right');

  const navItems = [
    { icon: <GiCherry className="text-red-500 text-2xl" />, label: 'Resume', path: '/resume', points: '800' },
    { icon: <FaGhost className="text-pink-400 text-2xl animate-bounce" />, label: 'Skills', path: '/skills', points: '400' },
    { icon: <FaGhost className="text-cyan-400 text-2xl animate-bounce" />, label: 'Projects', path: '/projects', points: '400' },
    { icon: <FaGhost className="text-orange-400 text-2xl animate-bounce" />, label: 'Contact', path: '/contact', points: '400' },
    { icon: <FaGhost className="text-red-400 text-2xl animate-bounce" />, label: 'Bio', path: '/bio', points: '400' },
  ];

  const handleItemClick = (index: number) => {
    setActiveItem(index);
    const isGhost = index !== 0;
    if (isGhost) {
      ghostAudio.play();
    } else {
      audio.play();
    }
    setScore(prev => prev + parseInt(navItems[index].points));
    setTimeout(() => {
      navigate(navItems[index].path);
    }, 300);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 p-4 text-yellow-400 font-bold text-xl">
        SCORE: {score}
      </div>
      <div className="flex gap-8 items-center justify-center my-4 bg-black/80 p-6 rounded-lg backdrop-blur-sm">
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 cursor-pointer group relative"
            onClick={() => handleItemClick(index)}
            onMouseEnter={() => setPacmanDirection(index > (activeItem || 0) ? 'right' : 'left')}
          >
            <div className={`text-yellow-400 text-3xl transition-all duration-300 transform
              ${activeItem === index ? 'opacity-100 scale-110' : 'opacity-0 -translate-x-4'}
              group-hover:opacity-100 group-hover:translate-x-0
              ${pacmanDirection === 'left' ? 'scale-x-[-1]' : ''}`}
            >
              // Replace all instances of GiPacman with GiCircle in the component
              // The circle will represent Pac-Man
              <GiCircle className="animate-pulse" />
            </div>
            <div className={`transition-all duration-300 
              ${activeItem === index ? 'scale-125' : 'scale-100'}
              group-hover:scale-110
              ${activeItem === index ? 'opacity-0' : 'opacity-100'}`}
            >
              {item.icon}
            </div>
            <div className="flex flex-col items-start">
              <span className={`text-white font-bold transition-colors duration-300
                ${activeItem === index ? 'text-yellow-400' : 'text-white'}
                group-hover:text-yellow-200`}
              >
                {item.label}
              </span>
              <span className="text-xs text-yellow-500">{item.points} pts</span>
            </div>
            <div className="text-yellow-200 tracking-widest group-hover:animate-ping">····</div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 to-transparent"></div>
    </div>
  );
}