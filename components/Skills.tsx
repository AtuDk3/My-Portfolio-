
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0d121c]">Technical Skills</h2>
          <p className="mt-4 text-[#4f5b6e]">My technical toolkit for building modern applications</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[#e7ebf4] transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${item.colorClass}`}>
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d121c] mb-4">{item.title}</h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
