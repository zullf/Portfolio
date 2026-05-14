import React from 'react';
import { ArrowRight, Download, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import cvFile from '../assets/cv-zulfikar.pdf';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => (
  <section id="home" className="section-shell px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
    <motion.div
      className="absolute left-1/2 top-0 -z-10 h-[520px] w-[920px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(103,232,249,0.22),rgba(45,212,191,0.1)_40%,transparent_72%)]"
      animate={{ opacity: [0.65, 0.95, 0.65] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open for Front-End Internship
        </motion.div>

        <motion.p variants={fadeUp} className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">
          {personalInfo.title}
        </motion.p>

        <motion.h1 variants={fadeUp} className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
          Building clean, responsive interfaces for real product experiences.
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Hi, I am {personalInfo.name}. I focus on React.js, Tailwind CSS, React Native, UI implementation, API integration, and practical front-end workflows.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="btn-primary"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href={cvFile}
            download="CV_Zulfikar.pdf"
            className="btn-secondary"
          >
            <Download size={18} />
            Download CV
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="relative hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-panel p-6"
        >
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="space-y-4 font-mono text-sm text-slate-300">
            <p><span className="text-cyan-300">const</span> candidate = &#123;</p>
            <p className="pl-5">role: <span className="text-emerald-300">'Front-End Intern'</span>,</p>
            <p className="pl-5">stack: <span className="text-emerald-300">['React', 'Tailwind', 'React Native']</span>,</p>
            <p className="pl-5">focus: <span className="text-emerald-300">'usable interfaces + API integration'</span></p>
            <p>&#125;</p>
          </div>
        </motion.div>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute -bottom-8 -left-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-950/20 backdrop-blur transition-colors hover:text-cyan-200"
        >
          <Mail size={18} />
          Available for HR contact
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
