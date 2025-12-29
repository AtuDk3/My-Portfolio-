
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0d121c]">Featured Projects</h2>
          <p className="mt-4 text-[#4f5b6e]">A selection of my recent work</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e7ebf4] transition-all hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  alt={project.title}
                  src={project.image}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-[#0d121c] mb-3">{project.title}</h3>
                <p className="mb-4 text-sm text-[#4f5b6e] leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6 flex-1">
                  <p className="text-sm text-[#4f5b6e]">
                    <span className="font-bold">Role:</span> {project.role}
                  </p>
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#e7ebf4] bg-white py-2.5 text-sm font-semibold text-[#0d121c] hover:bg-gray-50 hover:text-[#0b50da] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
