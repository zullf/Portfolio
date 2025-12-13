import React from 'react';
import { skills } from '../data';

const Skills = () => (
  <section id="skills" className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="px-6 py-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors cursor-default">
            <span className="font-medium text-slate-200">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Skills;