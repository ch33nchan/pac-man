import React from 'react';
import { SiPython, SiTensorflow, SiRos } from 'react-icons/si';
import { GiRobotGrab } from 'react-icons/gi';
import BackButton from '../BackButton';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <BackButton />  {/* Added BackButton component */}
      {/* Rest of your component */}
    </div>
  );
};

export default Skills;