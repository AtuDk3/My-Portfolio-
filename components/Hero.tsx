
import React from 'react';
import profileImg from '/assets/img/profile.png';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <img
              alt="Do Thanh Tu"
              className="h-full w-full object-cover object-top"
              src={profileImg}
            />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black tracking-tight text-[#0d121c] sm:text-6xl mb-4">
              Do Thanh Tu
            </h1>
            <p className="text-xl font-medium text-[#0b50da] sm:text-2xl mb-6">
              Backend Programmer
            </p>
            <p className="mx-auto max-w-xl text-lg text-[#4f5b6e] leading-relaxed">
              I am a recent Information Technology graduate with a strong interest in software development and system management. I am eager to learn new technologies, improve my technical skills, and contribute to building efficient and reliable software solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="flex h-12 min-w-[140px] items-center justify-center rounded-lg bg-[#0b50da] px-6 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-all active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex h-12 min-w-[140px] items-center justify-center rounded-lg bg-white border border-[#e7ebf4] px-6 text-base font-bold text-[#0d121c] shadow-sm hover:bg-gray-50 transition-all active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b50da]/5 blur-[100px]"></div>
    </section>
  );
};

export default Hero;
