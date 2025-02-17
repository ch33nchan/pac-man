// Remove unused import
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundMusic from './BackgroundMusic';
import VolumeControl from './VolumeControl';
import { useVolume } from '../context/VolumeContext';
import { playSoundEffect } from '../utils/audio';


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
  const { volume, setVolume } = useVolume();
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
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

  // Update keyboard controls with volume
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
    
      if (moved && volume > 0) {
        playSoundEffect('/sounds/pacman_eatfruit.wav', volume);
      }
    
      // For ghost collision:
      if (volume > 0) {
        playSoundEffect('/sounds/pac_man_ghost.mp3', volume);
      }
    
      // For waka sound:
      if (volume > 0) {
        playSoundEffect('/sounds/pac-man-waka-waka.mp3', volume);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [volume]);

  // Update collision detection with volume
  useEffect(() => {
    if (!canNavigate || isNavigating) return;

    const checkCollision = () => {
      for (const item of menuItems) {
        const distance = Math.sqrt(
          Math.pow(pacmanPosition.x - item.position.col, 2) + 
          Math.pow(pacmanPosition.y - item.position.row, 2)
        );

        if (distance < 2) {
          if (item.path && distance < 1) {
            setIsNavigating(true);
            setCanNavigate(false);
            if (volume > 0) {
              const ghostSound = new Audio('/sounds/pac_man_ghost.mp3');
              ghostSound.volume = volume;
              ghostSound.play().catch(console.error);
            }
            
            setTimeout(() => {
              navigate(item.path!);
            }, 500);
            return;
          } else if (volume > 0) {
            const wakaSound = new Audio('/sounds/pac-man-waka-waka.mp3');
            wakaSound.volume = volume;
            wakaSound.play().catch(console.error);
          }
        }
      }
    };

    checkCollision();
  }, [pacmanPosition, menuItems, navigate, canNavigate, isNavigating, volume]);

  return (
    <div className="relative w-full h-screen bg-black p-8 flex items-center justify-center">
      <BackgroundMusic isGameScreen={true} volume={volume} />
      <VolumeControl volume={volume} onVolumeChange={setVolume} />

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
              left: `${Math.round(item.position.col) / 15 * 100}%`,
              top: `${Math.round(item.position.row) / 15 * 100}%`,
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
              {item.path && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="text-yellow-400 text-2xl animate-bounce">ᗧ</span>
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