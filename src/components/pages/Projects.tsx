import React from 'react';
import BackButton from '../BackButton';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A fantastic project with amazing features',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Project 2',
      description: 'Another awesome project that does cool things',
      tech: ['TypeScript', 'Express', 'PostgreSQL']
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <BackButton />
      <div className="max-w-4xl mx-auto pt-24">
        <h1 className="text-4xl text-yellow-400 font-press-start mb-12 text-center">PROJECTS</h1>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-maze-blue/20 p-6 rounded-lg border-2 border-maze-blue group hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl text-yellow-400 font-press-start mb-4 flex items-center">
                <span className="mr-2">ᗧ</span>
                {project.title}
              </h2>
              <p className="text-white font-press-start text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-black text-yellow-400 font-press-start text-xs rounded-full border border-maze-blue">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;