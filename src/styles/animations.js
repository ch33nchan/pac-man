const animations = {
  'float-left-right': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100vw)' }
  },
  'float-right-left': {
    '0%': { transform: 'translateX(100vw)' },
    '100%': { transform: 'translateX(-100%)' }
  },
  'float-top-bottom': {
    '0%': { transform: 'translateY(-100%)' },
    '100%': { transform: 'translateY(100vh)' }
  },
  'pacman-chomp': {
    '0%, 100%': { transform: 'rotate(45deg)' },
    '50%': { transform: 'rotate(0deg)' }
  },
  'ghost-float': {
    '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0)' },
    '50%': { transform: 'translate(-50%, -50%) translateY(-10px)' }
  },
  'arcade-pulse': {
    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.7, transform: 'scale(1.05)' }
  },
  'retro-blink': {
    '0%, 49%, 100%': { opacity: 1 },
    '50%, 99%': { opacity: 0 }
  }
};

const extendedAnimations = {
  'float-left-right': 'floatLeftRight 15s linear infinite',
  'float-right-left': 'floatRightLeft 15s linear infinite',
  'float-top-bottom': 'floatTopBottom 15s linear infinite',
  'pacman-chomp': 'pacmanChomp 0.3s linear infinite',
  'ghost-float': 'ghostFloat 3s ease-in-out infinite',
  'ghost-float-reverse': 'ghostFloat 3s ease-in-out infinite reverse',
  'arcade-pulse': 'arcadePulse 2s ease-in-out infinite',
  'retro-blink': 'retroBlink 1s step-end infinite'
};

module.exports = { animations, extendedAnimations };