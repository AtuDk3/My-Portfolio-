
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-white border-y border-[#e7ebf4]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0d121c]">Experience</h2>
        </div>
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-100"></div>
          {EXPERIENCE.map((item, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0">
              <div className="absolute -left-[39px] sm:-left-[45px] top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#0b50da] ring-4 ring-white">
                <span className="material-symbols-outlined text-[14px] text-white">work</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-bold text-[#0d121c]">{item.role}</h3>
                <span className="text-sm font-medium text-[#0b50da]">{item.duration}</span>
              </div>
              <div className="mb-4 flex items-center gap-2 text-[#4f5b6e]">
                <span className="material-symbols-outlined text-[18px]">business</span>
                <span className="font-medium">{item.company}</span>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-[#4f5b6e] marker:text-[#0b50da]">
                {item.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
