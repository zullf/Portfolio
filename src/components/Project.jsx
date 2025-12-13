import React from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '../data';

const Projects = () => (
  <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
        <p className="mt-2 text-slate-500">A selection of my favorite works</p>
      </div>
      <a href="#" className="hidden md:flex items-center text-blue-600 font-medium hover:text-blue-700">
        View all <ChevronRight size={16} />
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          data-aos="fade-up" 
          data-aos-delay={index * 200}
          className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="h-48 bg-gray-50 overflow-hidden relative flex items-center justify-center">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
            />
            
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
               
               {project.repoLink && (
                 <a 
                   href={project.repoLink} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
                   title="View Code"
                 >
                    <Github size={20} />
                 </a>
               )}

               {project.demoLink && (
                 <a 
                   href={project.demoLink} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
                   title="View Project"
                 >
                    <ExternalLink size={20} />
                 </a>
               )}

            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
            <p className="text-slate-500 mb-4 line-clamp-2">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;