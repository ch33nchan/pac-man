import React from 'react';

interface MuteButtonProps {
  isMuted: boolean;
  onToggle: () => void;
}

const MuteButton: React.FC<MuteButtonProps> = ({ isMuted, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 bg-black p-4 rounded-lg border-2 border-yellow-400 shadow-lg shadow-yellow-400/20"
    >
      <span className="text-yellow-400 font-press-start text-sm">
        {isMuted ? '🔇' : '🔊'}
      </span>
    </button>
  );
};

export default MuteButton;