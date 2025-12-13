import React from 'react';
import { Download } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => (
  <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
    
    {/* Label kecil */}
    <div 
      data-aos="fade-up" 
      className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6"
    >
      Available for hire
    </div>

    {/* Judul Utama (H1) - Pastikan cuma SATU tag h1 pembungkus */}
    <h1 
      data-aos="fade-up" 
      data-aos-delay="200" 
      className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6"
    >
      Building digital <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
        experiences that matter.
      </span>
    </h1>

    {/* Deskripsi (P) - Pastikan cuma SATU tag p pembungkus */}
    <p 
      data-aos="fade-up" 
      data-aos-delay="400" 
      className="mt-4 max-w-2xl text-xl text-slate-500 mb-10"
    >
      Hi, I'm {personalInfo.name}. A {personalInfo.title} focused on creating intuitive web applications with clean architecture.
    </p>

    {/* Tombol Action */}
    <div 
      data-aos="fade-up" 
      data-aos-delay="600" 
      className="flex gap-4"
    >
      <a 
        href="/cv.pdf" 
        download="CV_Zulfikar.pdf" 
        className="inline-flex items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1"
      >
        Download CV <Download size={18} className="ml-2" />
      </a>
      <a 
        href="#projects" 
        className="inline-flex items-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all hover:-translate-y-1"
      >
        View Work
      </a>
    </div>
  </section>
);

export default Hero;