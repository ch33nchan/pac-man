import React, { useState } from 'react';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (value: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black p-4 rounded-lg border-2 border-yellow-400 shadow-lg shadow-yellow-400/20 hover:scale-105 transition-transform"
      >
        <span className="text-yellow-400 font-press-start text-sm">
          {volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black border-2 border-yellow-400 p-4 rounded-lg shadow-lg w-48">
          <div className="space-y-2">
            <p className="text-yellow-400 font-press-start text-xs mb-3">VOLUME</p>
            <input
              type="range"
              min="0"
              max="100"
              value={volume * 100}
              onChange={(e) => onVolumeChange(Number(e.target.value) / 100)}
              className="w-full appearance-none h-2 bg-yellow-400/30 rounded-lg 
                       [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                       [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-yellow-400 
                       [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                       [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-yellow-600"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VolumeControl;