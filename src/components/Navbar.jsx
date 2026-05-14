import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import cvFile from '../assets/cv-zulfikar.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center border-b border-white/10 bg-slate-950/75 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex-shrink-0 flex items-center">
            <span className="font-extrabold text-xl text-white tracking-tight">
              Zulfikar.
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href={cvFile}
              download="CV_Zulfikar.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-200 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-white/10 p-2 text-slate-200 transition-colors hover:border-cyan-300 hover:text-cyan-200"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="space-y-2 px-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-cyan-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={cvFile}
              download="CV_Zulfikar.pdf"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-cyan-200 px-4 py-3 text-base font-bold text-slate-950 transition-colors hover:bg-cyan-100"
              onClick={() => setIsOpen(false)}
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
