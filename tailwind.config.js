
const { animations, extendedAnimations } = require('./src/styles/animations');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'pacman-chomp': 'pacman-chomp 0.3s linear infinite',
        'ghost-float': 'ghost-float 3s ease-in-out infinite',
        'ghost-float-reverse': 'ghost-float 3s ease-in-out infinite reverse',
        'coin-insert': 'coin-insert 1s ease-in-out',
        'coin-spin': 'coin-spin 0.5s linear infinite',
        'button-bounce': 'button-bounce 2s ease-in-out infinite',
        ...extendedAnimations,
      },
      keyframes: {
        'pacman-chomp': {
          '0%, 100%': { transform: 'rotate(45deg)' },
          '50%': { transform: 'rotate(0deg)' }
        },
        'ghost-float': {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0)' },
          '50%': { transform: 'translate(-50%, -50%) translateY(-10px)' }
        },
        'coin-insert': {
          '0%': { transform: 'translateY(-200px)' },
          '100%': { transform: 'translateY(0)' }
        },
        'coin-spin': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        'button-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        ...animations
      },
      gridTemplateColumns: {
        'game': 'repeat(20, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'game': 'repeat(15, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      backgroundColor: {
        'maze-blue': '#1919A6',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
  },
  plugins: [],
};
