import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "My Project", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "CV", href: "/cv.pdf", isButton: true }, 
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 h-20 flex items-center transition-all duration-300">
      <div className="w-full px-6 lg:px-16">
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0 flex items-center">
            <span className="font-extrabold text-2xl text-slate-900 tracking-tight">
              Zulfikar.
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isButton ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="px-6 py-3 bg-blue-600 text-white rounded-full text-base font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5"
                >
                  {link.name}
                </a>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-600 hover:text-blue-600 font-semibold transition-colors text-base"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute top-20 left-0 w-full shadow-xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                  link.isButton 
                    ? "bg-blue-600 text-white text-center hover:bg-blue-700" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;