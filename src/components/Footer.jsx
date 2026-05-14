import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const Footer = () => (
  <footer id="contact" className="section-shell px-4 text-white sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto max-w-7xl"
    >
      <div className="glass-panel grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">
            Ready to discuss internship opportunities.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            For HR or recruiters, the fastest way to reach me is by email. You can also review my code on GitHub or connect through LinkedIn.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary"
          >
            <Mail size={18} />
            Email Me
          </a>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-5 py-3"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-5 py-3"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p>{personalInfo.title}</p>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
