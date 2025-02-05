import React from 'react';

export default function Resume() {
  return (
    <div className="text-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-4 text-yellow-400">Resume</h1>
      <div className="bg-black/80 p-6 rounded-lg backdrop-blur-sm">
        <iframe 
          src="https://drive.google.com/file/d/1PosjEzGEHHone4TWK6byiSun8_XgXNlS/preview"
          className="w-full h-[800px] rounded-lg"
          allow="autoplay"
        ></iframe>
        <a 
          href="https://drive.google.com/file/d/1PosjEzGEHHone4TWK6byiSun8_XgXNlS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}