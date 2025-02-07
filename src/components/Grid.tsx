import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

const Grid: React.FC = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [pacmanPosition, setPacmanPosition] = useState({ x: 1, y: 1 });
  const [direction, setDirection] = useState('right');

  // Initialize sections
  useEffect(() => {
    const sections = [
      { text: 'RESUME', color: 'text-red-500', position: { row: 3, col: 3 }, path: '/resume' },
      { text: 'SKILLS', color: 'text-blue-500', position: { row: 3, col: 11 }, path: '/skills' },
      { text: 'PROJECTS', color: 'text-pink-500', position: { row: 11, col: 3 }, path: '/projects' },
      { text: 'CONTACT', color: 'text-orange-500', position: { row: 11, col: 11 }, path: '/contact' },
      // Dummy ghosts
      { text: '', color: 'text-purple-500', position: { row: 7, col: 7 } },
      { text: '', color: 'text-green-500', position: { row: 3, col: 7 } },
      { text: '', color: 'text-yellow-500', position: { row: 11, col: 7 } }
    ];

    setMenuItems(sections.map(item => ({
      ...item,
      type: 'ᗣ'
    })));
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const speed = 1;
      switch(e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          setPacmanPosition(prev => ({ ...prev, y: Math.max(prev.y - speed, 0) }));
          setDirection('up');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          setPacmanPosition(prev => ({ ...prev, y: Math.min(prev.y + speed, 14) }));
          setDirection('down');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          setPacmanPosition(prev => ({ ...prev, x: Math.max(prev.x - speed, 0) }));
          setDirection('left');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          setPacmanPosition(prev => ({ ...prev, x: Math.min(prev.x + speed, 14) }));
          setDirection('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Collision detection
  useEffect(() => {
    const checkCollision = () => {
      menuItems.forEach(item => {
        const distance = Math.sqrt(
          Math.pow(pacmanPosition.x - item.position.col, 2) + 
          Math.pow(pacmanPosition.y - item.position.row, 2)
        );

        if (distance < 1.5 && item.path) {
          navigate(item.path);
        }
      });
    };

    checkCollision();
  }, [pacmanPosition, menuItems, navigate]);

  return (
    <div className="relative w-full h-screen bg-black p-8 flex items-center justify-center">
      <div className="w-[800px] h-[800px] relative border-2 border-blue-600 grid grid-cols-15 grid-rows-15 gap-[1px] bg-[#1E3A8A]">
        {Array.from({ length: 225 }).map((_, index) => (
          <div 
            key={`cell-${index}`} 
            className="bg-black border border-blue-900/20"
          />
        ))}

        {/* Ghosts */}
        {menuItems.map((item, index) => (
          <div
            key={`ghost-${index}`}
            className={`absolute ${item.color} flex flex-col items-center z-20 group`}
            style={{
              left: `${(item.position.col / 15) * 100}%`,
              top: `${(item.position.row / 15) * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className={`relative ${item.path ? 'animate-pulse' : ''}`}>
              <span className="text-3xl animate-ghost-float hover:scale-110 transition-transform">
                {item.type}
              </span>
              {item.text && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-max">
                  <div className="bg-black/90 px-4 py-2 rounded-lg border-2 border-blue-500 
                                opacity-0 group-hover:opacity-100 transition-all duration-300
                                shadow-lg shadow-blue-500/50">
                    <span className="text-sm font-press-start text-white whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Pacman */}
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