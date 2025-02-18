import React from 'react';

interface VolumeSliderProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({ volume, onVolumeChange }) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(Number(event.target.value));
  };

  return (
    <input 
      type="range"
      min="0"
      max="100"
      value={volume}
      onChange={handleSliderChange}
      className="volume-slider"
    />
  );
};

export default VolumeSlider;