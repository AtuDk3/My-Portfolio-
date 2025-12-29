
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-y border-[#e7ebf4]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b50da]">BIO</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0d121c] mb-6">About Me</h2>
          <p className="text-lg text-[#4f5b6e] leading-relaxed max-w-2xl">
            I am a Junior Backend Developer with a strong learning mindset. I specialize in building 
            scalable web applications and RESTful APIs. My journey involves deep diving into 
            server-side logic, database optimization, and architectural patterns to deliver 
            high-quality software solutions. I thrive in collaborative environments and am 
            eager to contribute to innovative tech teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
