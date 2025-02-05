import React, { useEffect, useRef } from 'react';

interface PacmanSpriteProps {
  direction: 'right' | 'left' | 'up' | 'down';
}

const PacmanSprite: React.FC<PacmanSpriteProps> = ({ direction }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const rotationDegrees = {
    right: 0,
    left: 180,
    up: 270,
    down: 90,
  };

  return (
    <div
      className="w-8 h-8 relative"
      style={{
        transform: `rotate(${rotationDegrees[direction]}deg)`,
      }}
    >
      <iframe
        src="https://tenor.com/embed/18499432"
        frameBorder="0"
        className="w-full h-full absolute inset-0"
        title="Pacman"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PacmanSprite;