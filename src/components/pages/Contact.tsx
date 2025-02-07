import React from 'react';
import BackButton from '../BackButton';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <BackButton />
      <div className="max-w-4xl mx-auto pt-24">
        <h1 className="text-4xl text-yellow-400 font-press-start mb-12 text-center">CONTACT</h1>
        <div className="bg-maze-blue/20 p-8 rounded-lg border-2 border-maze-blue">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400 text-2xl">ᗧ</span>
              <a href="mailto:example@email.com" className="text-white font-press-start hover:text-yellow-400 transition-colors">
                example@email.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400 text-2xl">ᗧ</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white font-press-start hover:text-yellow-400 transition-colors">
                GitHub
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400 text-2xl">ᗧ</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white font-press-start hover:text-yellow-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;