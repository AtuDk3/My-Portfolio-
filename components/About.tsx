
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-y border-[#e7ebf4]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b50da]">BIO</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0d121c] mb-6">About Me</h2>
          <p className="text-lg text-[#4f5b6e] leading-relaxed max-w-2xl">
            I am a Backend Developer with a strong interest in building reliable and scalable web applications. I have experience working with C#/.NET, RESTful APIs, and SQL Server, and I am familiar with modern backend architectures such as Clean Architecture and Microservices.
I am eager to learn new technologies, take on challenges, and grow as a professional backend developer in a collaborative and high-quality engineering environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
