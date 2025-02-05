import React from 'react';

interface WelcomeProps {
  onBegin: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onBegin }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-blue-900/40 p-10 rounded-2xl text-center border-4 border-blue-500 animate-pulse">
        <h1 className="text-5xl text-yellow-400 mb-8 font-press-start">Welcome to Srini's Site</h1>
        <button
          onClick={onBegin}
          className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-400 
                   transition-all transform hover:scale-110 font-press-start text-xl 
                   shadow-lg hover:shadow-pink-500/50"
        >
          BEGIN
        </button>
      </div>
    </div>
  );
};

export default Welcome;