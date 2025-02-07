import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const startupSoundRef = useRef<HTMLAudioElement>(new Audio('/sounds/pacman-start.mp3'));
  const backgroundSoundRef = useRef<HTMLAudioElement>(new Audio('/sounds/pacman-background.mp3'));

  useEffect(() => {
    const startupSound = startupSoundRef.current;
    const backgroundSound = backgroundSoundRef.current;
    
    startupSound.volume = 0.3;
    backgroundSound.volume = 0.2;
    backgroundSound.loop = true;

    const handleStartupEnd = () => {
      backgroundSound.play();
      startupSound.removeEventListener('ended', handleStartupEnd);
    };

    const playAudio = () => {
      startupSound.play();
      startupSound.addEventListener('ended', handleStartupEnd);
      document.removeEventListener('click', playAudio);
    };

    document.addEventListener('click', playAudio);

    return () => {
      startupSound.pause();
      backgroundSound.pause();
      document.removeEventListener('click', playAudio);
    };
  }, []);

  const toggleMute = () => {
    startupSoundRef.current.muted = !startupSoundRef.current.muted;
    backgroundSoundRef.current.muted = !backgroundSoundRef.current.muted;
    setIsMuted(!isMuted);
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed top-4 right-4 z-50 w-16 h-16 flex flex-col items-center justify-center
                 bg-black border-2 border-blue-500 rounded-lg transition-all duration-300 
                 hover:scale-110 group shadow-lg hover:shadow-blue-500/50"
    >
      <span className={`text-3xl ${isMuted ? 'text-red-500' : 'text-yellow-400'} 
                       group-hover:animate-bounce`}>
        {isMuted ? '🔇' : '🔊'}
      </span>
      <span className="text-xs text-white font-press-start mt-1">
        {isMuted ? 'MUTED' : 'SOUND'}
      </span>
    </button>
  );
};

export default BackgroundMusic;