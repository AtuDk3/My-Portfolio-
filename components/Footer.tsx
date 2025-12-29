
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-[#e7ebf4]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#0b50da] to-blue-600 p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Let's work together</h2>
          <p className="mx-auto max-w-2xl text-blue-100 mb-8 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just 
            want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <a 
              href="mailto:dothanhtu240803@gmail.com" 
              className="group flex items-center gap-3 rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <span className="material-symbols-outlined">mail</span>
              <span className="font-semibold">dothanhtu240803@gmail.com</span>
            </a>
            <a 
              href="https://github.com/AtuDk3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <span className="material-symbols-outlined">code</span>
              <span className="font-semibold">github.com/AtuDk3</span>
            </a>
            <div className="flex items-center gap-3 text-blue-100">
              <span className="material-symbols-outlined">location_on</span>
              <span className="font-medium">Da Nang, Vietnam</span>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-sm text-[#4f5b6e]">
          <p>© {new Date().getFullYear()} Do Thanh Tu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
