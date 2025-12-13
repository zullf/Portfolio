import React from 'react';
import { personalInfo } from '../data';
import fotoZulfikar from '../assets/zulfikarimage.png';

const About = () => (
  <section id="about" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div data-aos="fade-right" className="relative">
          <img src={fotoZulfikar} alt="Zulfikar Profile" className="relative rounded-2xl shadow-2xl w-full max-w-xs h-auto object-cover z-10"/>
        </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div data-aos="fade-left" className="mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">{personalInfo.bio}</p>
          <div className="grid grid-cols-2 gap-6">
            <div><h4 className="font-bold text-slate-900 text-3xl">1+</h4><p className="text-slate-500">Years Coding</p></div>
            <div><h4 className="font-bold text-slate-900 text-3xl">8+</h4><p className="text-slate-500">Projects Completed</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default About;