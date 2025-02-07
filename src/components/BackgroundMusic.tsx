import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const startupSoundRef = useRef(new Audio('/sounds/pacman-start.mp3'));
  const backgroundSoundRef = useRef(new Audio('/sounds/pacman-background.mp3'));

  useEffect(() => {
    const startupSound = startupSoundRef.current;
    const backgroundSound = backgroundSoundRef.current;
    
    startupSound.volume = 0.3;
    backgroundSound.volume = 0.2;
    backgroundSound.loop = true;

    const handleStartupEnd = () => {
      backgroundSound.play().catch(console.error);
    };

    const playAudio = () => {
      startupSound.play()
        .then(() => {
          startupSound.addEventListener('ended', handleStartupEnd);
        })
        .catch(console.error);
    };

    const handleClick = () => {
      playAudio();
      document.removeEventListener('click', handleClick);
    };

    document.addEventListener('click', handleClick);

    return () => {
      startupSound.pause();
      backgroundSound.pause();
      startupSound.removeEventListener('ended', handleStartupEnd);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleMute = () => {
    startupSoundRef.current.muted = !isMuted;
    backgroundSoundRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed top-4 right-4 z-50 w-16 h-16 flex flex-col items-center justify-center
                 bg-black border-2 border-yellow-400 rounded-lg transition-all duration-300 
                 hover:scale-110 group shadow-lg hover:shadow-yellow-400/50"
    >
      <span className={`text-3xl ${isMuted ? 'text-red-500' : 'text-yellow-400'} 
                       group-hover:animate-bounce`}>
        {isMuted ? '🔇' : '🔊'}
      </span>
      <span className="text-xs text-yellow-400 font-press-start mt-1">
        {isMuted ? 'MUTED' : 'SOUND'}
      </span>
    </button>
  );
};

export default BackgroundMusic;