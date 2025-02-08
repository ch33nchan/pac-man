declare global {
  interface Window {
    playWakaSound: () => void;
    playGhostSound: () => void;
    playDeathSound: () => void;
    playThemeSound: () => void;
  }
}

export {};