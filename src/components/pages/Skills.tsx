import React from 'react';
import { SiPython, SiTensorflow, SiRos } from 'react-icons/si';
import { GiRobotGrab } from 'react-icons/gi';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: <SiPython />, level: 90 },
    { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
    { name: 'ROS', icon: <SiRos />, level: 88 },
    { name: 'Robotics', icon: <GiRobotGrab />, level: 92 },
  ];

  return (
    <div className="text-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-4 text-yellow-400">Skills</h1>
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-black/80 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{skill.icon}</span>
              <h3 className="text-xl">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-yellow-400 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}