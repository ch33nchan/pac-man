import React from 'react';
import BackButton from '../BackButton';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <BackButton />
      <div className="text-white p-8 max-w-4xl mx-auto pt-24">
        <h1 className="text-3xl mb-4 text-yellow-400 font-press-start">Resume</h1>
        <div className="bg-black/80 p-6 rounded-lg backdrop-blur-sm border-2 border-blue-500">
          <iframe 
            title="Resume Preview"
            src="https://drive.google.com/file/d/1PosjEzGEHHone4TWK6byiSun8_XgXNlS/preview"
            className="w-full h-[800px] rounded-lg"
            allow="autoplay"
          ></iframe>
          <a 
            href="https://drive.google.com/file/d/1PosjEzGEHHone4TWK6byiSun8_XgXNlS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 
                     rounded-lg transition-colors duration-300 font-press-start text-sm
                     border border-blue-400 hover:border-blue-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;