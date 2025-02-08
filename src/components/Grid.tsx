// Remove unused import
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundMusic from './BackgroundMusic';


interface MenuItem {
  type: string;
  text: string;
  color: string;
  position: {
    row: number;
    col: number;
  };
  path?: string;
}

interface Position {
  row: number;
  col: number;
}

declare global {
  interface Window {
    toggleSound: () => void;
    startThemeMusic: () => void;
    playWakaSound: () => void;
    playDeathSound: () => void;
    playThemeSound: () => void;
  }
}

const getRandomPosition = (): Position => ({
  row: Math.floor(Math.random() * 13) + 1,
  col: Math.floor(Math.random() * 13) + 1
});

const Grid: React.FC = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [direction, setDirection] = useState('right');
  const [canNavigate, setCanNavigate] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [pacmanPosition, setPacmanPosition] = useState({ x: 7, y: 7 });

  // Define getSafePacmanPosition before using it
  const getSafePacmanPosition = useCallback((): { x: number; y: number } => {
    let safePosition: Position = { row: -1, col: -1 };
    do {
      const position = getRandomPosition();
      if (!menuItems.some(item => Math.abs(item.position.row - position.row) < 2 && Math.abs(item.position.col - position.col) < 2)) {
        safePosition = position;
      }
    } while (safePosition.row === -1 && safePosition.col === -1);
    return { x: safePosition.col, y: safePosition.row };
  }, [menuItems]);

  // Initialize menu items first
  useEffect(() => {
    const sections = [
      { text: 'RESUME', color: 'text-red-500', path: '/resume' },
      { text: 'SKILLS', color: 'text-blue-500', path: '/skills' },
      { text: 'PROJECTS', color: 'text-pink-500', path: '/projects' },
      { text: 'CONTACT', color: 'text-orange-500', path: '/contact' }
    ].map(item => ({
      ...item,
      position: getRandomPosition(),
      type: 'ᗣ'
    }));

    const dummyGhosts = Array.from({ length: 4 }).map((_, index) => ({
      text: '',
      color: ['text-purple-500', 'text-green-500', 'text-cyan-500', 'text-indigo-500'][index],
      position: getRandomPosition(),
      type: 'ᗣ'
    }));

    setMenuItems([...sections, ...dummyGhosts]);
  }, []);

  // Then set pacman position
  useEffect(() => {
    if (menuItems.length > 0) {
      setPacmanPosition(getSafePacmanPosition());
    }
  }, [menuItems, getSafePacmanPosition]);

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const speed = 1;
      let moved = false;

      switch(e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          setPacmanPosition(prev => {
            const newY = Math.max(prev.y - speed, 0);
            moved = newY !== prev.y;
            return { ...prev, y: newY };
          });
          setDirection('up');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          setPacmanPosition(prev => {
            const newY = Math.min(prev.y + speed, 14);
            moved = newY !== prev.y;
            return { ...prev, y: newY };
          });
          setDirection('down');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          setPacmanPosition(prev => {
            const newX = Math.max(prev.x - speed, 0);
            moved = newX !== prev.x;
            return { ...prev, x: newX };
          });
          setDirection('left');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          setPacmanPosition(prev => {
            const newX = Math.min(prev.x + speed, 14);
            moved = newX !== prev.x;
            return { ...prev, x: newX };
          });
          setDirection('right');
          break;
      }
    
      if (moved && !isMuted) {
        const wakaSound = new Audio('/sounds/pac-man-waka-waka.mp3');
        wakaSound.volume = 0.3;
        wakaSound.play().catch(console.error);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isMuted]);

  // Handle collisions
  // Update collision detection to be more precise
  useEffect(() => {
    if (!canNavigate || isNavigating) return;
  
    const checkCollision = () => {
      for (const item of menuItems) {
        // Check for exact position match
        if (
          Math.round(pacmanPosition.x) === item.position.col && 
          Math.round(pacmanPosition.y) === item.position.row && 
          item.path
        ) {
          setIsNavigating(true);
          setCanNavigate(false);
          if (!isMuted) {
            const deathSound = new Audio('/sounds/pac-man-dies-2.mp3');
            deathSound.volume = 0.3;
            deathSound.play().catch(console.error);
          }
          
          setTimeout(() => {
            navigate(item.path!);
          }, 1000);
          return;
        }
      }
    };
  
    checkCollision();
  }, [pacmanPosition, menuItems, navigate, canNavigate, isNavigating, isMuted]);

  // Reset navigation state
  useEffect(() => {
    setIsNavigating(false);
    setCanNavigate(true);
  }, []);

  const toggleMute = () => {
    setIsMuted(prev => {
      const newMuted = !prev;
      if (window.toggleSound) {
        window.toggleSound();
      }
      return newMuted;
    });
  };

  return (
    <div className="relative w-full h-screen bg-black p-8 flex items-center justify-center">
      <BackgroundMusic isGameScreen={true} isMuted={isMuted} />
      
      {/* Add mute button */}
      <button 
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 bg-black p-4 rounded-lg border-2 border-yellow-400 shadow-lg shadow-yellow-400/20"
      >
        <span className="text-yellow-400 font-press-start text-sm">
          {isMuted ? '🔇' : '🔊'}
        </span>
      </button>

      <div className="fixed top-4 left-4 z-50 bg-black p-4 rounded-lg border-2 border-yellow-400 shadow-lg shadow-yellow-400/20">
        <h3 className="text-yellow-400 font-press-start text-sm mb-2">ARCADE CONTROLS</h3>
        <div className="text-white font-press-start text-xs space-y-1">
          <p>↑ W - Move Up</p>
          <p>↓ S - Move Down</p>
          <p>← A - Move Left</p>
          <p>→ D - Move Right</p>
        </div>
      </div>

      <div className="w-[800px] h-[800px] relative">
        <div className="absolute inset-0 grid grid-cols-15 grid-rows-15 bg-black border-4 border-maze-blue">
          {Array.from({ length: 225 }).map((_, index) => (
            <div 
              key={`cell-${index}`}
              className="border border-maze-blue/30 bg-black relative"
            />
          ))}
        </div>

        {menuItems.map((item, index) => (
          <div
            key={`ghost-${index}`}
            className={`absolute ${item.color} flex flex-col items-center z-20`}
            style={{
              left: `${(item.position.col / 15) * 100}%`,
              top: `${(item.position.row / 15) * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className={`relative ${item.path ? 'animate-pulse' : ''}`}>
              <span className={`text-4xl animate-ghost-float transition-all duration-300 inline-block
                            ${item.path ? 'hover:scale-110 hover:text-yellow-400' : ''}`}>
                {item.type}
              </span>
              {item.text && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max">
                  <div className="bg-yellow-400 px-3 py-1 rounded-lg border-2 border-yellow-600 
                              shadow-lg shadow-yellow-400/50">
                    <span className="text-xs font-press-start text-black whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        <div 
          className="absolute text-yellow-400 text-4xl animate-pacman-chomp z-30"
          style={{
            left: `${(pacmanPosition.x / 15) * 100}%`,
            top: `${(pacmanPosition.y / 15) * 100}%`,
            transform: `translate(-50%, -50%) rotate(${
              direction === 'up' ? '-90deg' : 
              direction === 'down' ? '90deg' : 
              direction === 'left' ? '180deg' : '0deg'
            })`
          }}
        >
          ᗧ
        </div>
      </div>
    </div>
  );
};

export default Grid;