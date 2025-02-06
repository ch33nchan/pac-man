const arcadeTheme = {
  extend: {
    fontFamily: {
      'press-start': ['"Press Start 2P"', 'cursive'],
    },
    keyframes: {
      'arcade-bounce': {
        '0%': {
          transform: 'translateY(-8px) translateX(-4px)',
          boxShadow: '12px 12px 0 8px #2d1b34, 0 0 40px rgba(236,72,153,0.8)',
        },
        '50%': {
          transform: 'translateY(0px) translateX(0px)',
          boxShadow: '8px 8px 0 4px #2d1b34, 0 0 20px rgba(236,72,153,0.5)',
        },
        '100%': {
          transform: 'translateY(-8px) translateX(-4px)',
          boxShadow: '12px 12px 0 8px #2d1b34, 0 0 40px rgba(236,72,153,0.8)',
        }
      },
      'pacman-move': {
        '0%': { transform: 'translateX(0) rotateY(0)' },
        '49%': { transform: 'translateX(100px) rotateY(0)' },
        '50%': { transform: 'translateX(100px) rotateY(180deg)' },
        '99%': { transform: 'translateX(0) rotateY(180deg)' },
        '100%': { transform: 'translateX(0) rotateY(0)' }
      },
      'pacman-move-reverse': {
        '0%': { transform: 'translateX(100%) rotateY(180deg)' },
        '49%': { transform: 'translateX(0) rotateY(180deg)' },
        '50%': { transform: 'translateX(0) rotateY(0)' },
        '99%': { transform: 'translateX(100%) rotateY(0)' },
        '100%': { transform: 'translateX(100%) rotateY(180deg)' }
      }
    },
    animation: {
      'arcade-bounce': 'arcade-bounce 2s infinite',
      'pacman-move': 'pacman-move 4s infinite linear',
      'pacman-move-reverse': 'pacman-move-reverse 4s infinite linear'
    }
  }
};

module.exports = arcadeTheme;