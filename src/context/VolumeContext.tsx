import React, { createContext, useContext, useState } from 'react';

interface VolumeContextType {
  volume: number;
  setVolume: (volume: number) => void;
}

const VolumeContext = createContext<VolumeContextType | undefined>(undefined);

export const VolumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [volume, setVolume] = useState(0.3);

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};

export const useVolume = () => {
  const context = useContext(VolumeContext);
  if (!context) {
    throw new Error('useVolume must be used within a VolumeProvider');
  }
  return context;
};