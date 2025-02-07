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
  const [pacmanPosition, setPacmanPosition] = useState(() => ({
    x: Math.floor(Math.random() * 13) + 1,
    y: Math.floor(Math.random() * 13) + 1
  }));
  const [direction, setDirection] = useState('right');
  const [canNavigate, setCanNavigate] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const getRandomPosition = () => ({
      row: Math.floor(Math.random() * 13) + 1,
      col: Math.floor(Math.random() * 13) + 1
    });

    const sections = [
      { text: 'RESUME', color: 'text-red-500', path: '/resume' },
      { text: 'SKILLS', color: 'text-blue-500', path: '/skills' },
      { text: 'PROJECTS', color: 'text-pink-500', path: '/projects' },
      { text: 'CONTACT', color: 'text-orange-500', path: '/contact' },
      { text: '', color: 'text-purple-500' },
      { text: '', color: 'text-green-500' },
      { text: '', color: 'text-yellow-500' }
    ].map(item => ({
      ...item,
      position: getRandomPosition()
    }));

    setMenuItems(sections.map(item => ({
      ...item,
      type: 'ᗣ'
    })));
  }, []);

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

  // Update collision detection
  useEffect(() => {
    if (!canNavigate || isNavigating) return;

    const checkCollision = () => {
      for (const item of menuItems) {
        const distance = Math.sqrt(
          Math.pow(pacmanPosition.x - item.position.col, 2) + 
          Math.pow(pacmanPosition.y - item.position.row, 2)
        );

        if (distance < 1.5 && item.path) {
          setIsNavigating(true);
          setCanNavigate(false);
          setTimeout(() => {
            navigate(item.path!);
          }, 500);
          break;
        }
      }
    };

    checkCollision();
  }, [pacmanPosition, menuItems, navigate, canNavigate, isNavigating]);

  // Reset navigation state when component mounts
  useEffect(() => {
    setIsNavigating(false);
    setCanNavigate(true);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black p-8 flex items-center justify-center">
      <div className="fixed top-4 left-4 bg-black/80 p-4 rounded-lg border-2 border-yellow-400">
        <h3 className="text-yellow-400 font-press-start text-sm mb-2">CONTROLS:</h3>
        <div className="text-white font-press-start text-xs space-y-1">
          <p>W - Move Up</p>
          <p>S - Move Down</p>
          <p>A - Move Left</p>
          <p>D - Move Right</p>
        </div>
      </div>
    
      {/* Update ghost labels to be more compact */}
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
          <div className={`relative ${item.path ? 'animate-pulse shadow-lg shadow-yellow-400/50' : ''}`}>
            <span className={`text-4xl animate-ghost-float transition-all duration-300 inline-block
                          ${item.path ? 'hover:text-yellow-400 hover:shadow-xl hover:shadow-yellow-400' : ''}`}>
              {item.type}
            </span>
            {item.text && (
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-yellow-400 px-4 py-2 rounded-lg border-2 border-yellow-600 
                            shadow-lg shadow-yellow-400/50">
                  <span className="text-sm font-press-start text-black whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="w-[800px] h-[800px] relative">
        {/* Main game grid */}
        <div className="absolute inset-0 grid grid-cols-15 grid-rows-15 bg-black border-4 border-maze-blue">
          {Array.from({ length: 225 }).map((_, index) => (
            <div 
              key={`cell-${index}`}
              className="border border-maze-blue/30 bg-black relative"
            />
          ))}
        </div>
      
        {/* Existing ghost and pacman elements */}
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
            <div className={`relative ${item.path ? 'animate-pulse shadow-lg shadow-yellow-400/50' : ''}`}>
              <span className={`text-4xl animate-ghost-float transition-all duration-300 inline-block
                            ${item.path ? 'hover:text-yellow-400 hover:shadow-xl hover:shadow-yellow-400' : ''}`}>
                {item.type}
              </span>
              {item.text && (
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-max">
                  <div className="bg-yellow-400 px-4 py-2 rounded-lg border-2 border-yellow-600 
                              shadow-lg shadow-yellow-400/50">
                    <span className="text-sm font-press-start text-black whitespace-nowrap">
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