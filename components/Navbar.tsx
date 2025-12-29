
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#e7ebf4] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0b50da] text-white">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-[#0d121c]">Do Thanh Tu</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#4f5b6e] hover:text-[#0b50da] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-[#0b50da] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#0d121c]"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile menu content */}
      {isOpen && (
        <div className="md:hidden border-t border-[#e7ebf4] bg-white px-4 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-[#4f5b6e] hover:text-[#0b50da]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full rounded-lg bg-[#0b50da] py-3 text-center text-sm font-bold text-white"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
