import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data';

const grid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const Projects = () => (
  <section id="projects" className="section-shell-alt">
    <div className="section-inner">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mb-12 max-w-3xl"
      >
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">
          Selected work for Front-End Developer internship roles.
        </h2>
        <p className="section-copy">
          A focused mix of React web apps, React Native mobile apps, and Android work that highlights UI implementation, API integration, state handling, and responsive product thinking.
        </p>
      </motion.div>

      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={card}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className={`surface-card group overflow-hidden p-0 hover:-translate-y-2 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            <div className={`relative overflow-hidden bg-slate-900 ${project.featured ? "h-72" : "h-56"}`}>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                {project.featured && (
                  <span className="rounded-full bg-cyan-200 px-3 py-1 text-xs font-black text-slate-950 shadow-lg shadow-cyan-950/30">
                    Featured Project
                  </span>
                )}
                <span className="rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="flex h-full flex-col p-6">
              <div>
                <h3 className="text-xl font-black text-slate-50">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.desc}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-200 px-4 py-2.5 text-sm font-black text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-100"
                  >
                    <Github size={17} />
                    GitHub
                  </a>
                )}

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2.5 text-sm font-bold text-slate-100 transition-all hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-300/10"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
