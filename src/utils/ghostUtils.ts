export const ghostTypes = ['ᗧ', 'ᗣ'];
export const ghostColors = ['text-yellow-400', 'text-cyan-400', 'text-pink-400', 'text-red-400', 'text-green-400', 'text-purple-400'];

export const getRandomPosition = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateGhosts = (count: number) => {
  return Array.from({ length: count }, () => ({
    type: ghostTypes[Math.floor(Math.random() * ghostTypes.length)],
    color: ghostColors[Math.floor(Math.random() * ghostColors.length)],
    position: {
      top: getRandomPosition(5, 85),
      left: getRandomPosition(5, 85)
    }
  }));
};