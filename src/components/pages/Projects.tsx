import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://your-ecommerce-demo.vercel.app'
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/task-management',
      demo: 'https://your-tasks-demo.vercel.app'
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      description: 'Responsive weather dashboard with location-based forecasts, interactive charts, and beautiful UI using OpenWeatherMap API.',
      technologies: ['React', 'Chart.js', 'Weather API', 'Styled Components'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://your-weather-demo.vercel.app'
    },
    {
      id: 4,
      name: 'Portfolio Website',
      description: 'This VS Code themed portfolio website built with React and Tailwind CSS. Features include smooth animations and responsive design.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/yourusername/vscode-portfolio',
      demo: 'https://your-portfolio.vercel.app'
    }
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-[#569cd6]">Projects</h1>
      
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#252526] border border-[#3e3e42] rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-semibold text-[#9cdcfe]">{project.name}</h2>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-[#37373d] rounded"
                >
                  <Github size={18} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-[#37373d] rounded"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-[#d4d4d4] mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#0e639c] text-white text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
