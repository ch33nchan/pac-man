import React, { useState, useEffect, useRef } from 'react';
import { GiCircle } from 'react-icons/gi';
import { FaGhost } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GRID_SIZE = 15;
const CHOMP_SOUND = '/sounds/pacman_chomp.mp3';
const THEME_SOUND = '/sounds/pacman_theme.mp3';

interface Section {
  x: number;
  y: number;
  icon: JSX.Element;
  label: string;
  path: string;
}

export default function PacmanWorld() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 7, y: 7 });
  const [isMuted, setIsMuted] = useState(false);
  const chompAudioRef = useRef(new Audio(CHOMP_SOUND));
  const themeAudioRef = useRef(new Audio(THEME_SOUND));

  const sections: Section[] = [
    { x: 2, y: 2, icon: <FaGhost className="text-pink-400" />, label: 'Resume', path: '/resume' },
    { x: 12, y: 2, icon: <FaGhost className="text-cyan-400" />, label: 'Skills', path: '/skills' },
    { x: 2, y: 12, icon: <FaGhost className="text-orange-400" />, label: 'Projects', path: '/projects' },
    { x: 12, y: 12, icon: <FaGhost className="text-red-400" />, label: 'Contact', path: '/contact' },
  ];

  // Initialize audio settings
  useEffect(() => {
    const themeAudio = themeAudioRef.current;
    const chompAudio = chompAudioRef.current;
    
    themeAudio.loop = true;
    themeAudio.volume = 0.1;
    chompAudio.volume = 0.8;
    
    // Auto-play theme music
    themeAudio.play().catch(e => console.log('Audio autoplay blocked'));

    return () => {
      themeAudio.pause();
      chompAudio.pause();
    };
  }, []);

  // Handle section collision and sound
  useEffect(() => {
    const currentSection = sections.find((s: Section) => s.x === position.x && s.y === position.y);
    if (currentSection) {
      const chompAudio = chompAudioRef.current;
      const playChompTwice = async () => {
        chompAudio.currentTime = 0;
        await chompAudio.play();
        setTimeout(async () => {
          chompAudio.currentTime = 0;
          await chompAudio.play();
          setTimeout(() => navigate(currentSection.path), 150);
        }, 150);
      };
      
      playChompTwice().catch(e => console.log('Chomp sound blocked'));
    }
  }, [position, navigate]);

  // Add keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      const key = e.key.toLowerCase();
      
      setPosition(prev => {
        const newPos = { ...prev };
        switch (key) {
          case 'w':
          case 'arrowup':
            newPos.y = Math.max(0, prev.y - 1);
            break;
          case 's':
          case 'arrowdown':
            newPos.y = Math.min(GRID_SIZE - 1, prev.y + 1);
            break;
          case 'a':
          case 'arrowleft':
            newPos.x = Math.max(0, prev.x - 1);
            break;
          case 'd':
          case 'arrowright':
            newPos.x = Math.min(GRID_SIZE - 1, prev.x + 1);
            break;
        }
        return newPos;
      });
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const toggleMute = () => {
    const themeAudio = themeAudioRef.current;
    const chompAudio = chompAudioRef.current;
    
    themeAudio.muted = !isMuted;
    chompAudio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-black p-8 flex flex-col justify-center items-center relative">
      <button 
        onClick={toggleMute}
        className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      <div className="grid grid-cols-15 gap-0">
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
}