import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Autonomous Robot Navigation',
      description: 'Implemented SLAM and path planning algorithms for autonomous robot navigation.',
      tech: ['ROS', 'Python', 'C++'],
    },
    {
      title: 'Deep RL for Robotic Manipulation',
      description: 'Developed deep reinforcement learning algorithms for robotic arm control.',
      tech: ['PyTorch', 'Python', 'OpenAI Gym'],
    },
  ];

  return (
    <div className="text-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-4 text-yellow-400">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-black/80 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-yellow-400 text-black px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}