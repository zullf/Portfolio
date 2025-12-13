import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => (
  <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="mb-8 flex gap-6">
        <a href={personalInfo.socials.github} className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={24} /></a>
        <a href={personalInfo.socials.linkedin} className="text-slate-400 hover:text-blue-700 transition-colors"><Linkedin size={24} /></a>
        <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-red-500 transition-colors"><Mail size={24} /></a>
      </div>
      <p className="text-slate-400 text-sm">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </div>
  </footer>
);
export default Footer;