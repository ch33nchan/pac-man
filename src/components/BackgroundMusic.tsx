import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/pacman-beginning.mp3"
        autoPlay
      />
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 w-14 h-14 rounded-full transition-all duration-300 
                   hover:scale-110 flex items-center justify-center shadow-lg
                   bg-yellow-400 hover:bg-yellow-500 animate-pulse"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        <span className="text-3xl transform transition-transform duration-300">
          {isMuted ? 'ᗧ' : 'ᗣ'}
        </span>
      </button>
    </>
  );
};

export default BackgroundMusic;