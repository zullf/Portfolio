import React from 'react';
import { Code2, Layers3, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import fotoZulfikar from '../assets/zulfikarimage.png';

const focusAreas = [
  {
    icon: Code2,
    title: "Front-End Implementation",
    desc: "Building responsive React interfaces with reusable components and Tailwind CSS."
  },
  {
    icon: Layers3,
    title: "API & State Flow",
    desc: "Connecting UI with APIs, handling loading states, cached data, and user interactions."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Creating React Native screens with practical mobile patterns and local storage."
  }
];

const About = () => (
  <section id="about" className="section-shell-alt">
    <div className="section-inner grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-sm lg:mx-0"
      >
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-cyan-200/20 bg-cyan-200/5 blur-[1px]" />
        <img
          src={fotoZulfikar}
          alt="Zulfikar Hasan"
          className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10 bg-slate-900 object-cover shadow-2xl shadow-cyan-950/20"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="section-kicker">About Me</p>
        <h2 className="section-title">
          I turn interface designs into clean, usable front-end experiences.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {personalInfo.bio}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {focusAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="surface-card p-5 hover:-translate-y-1">
                <div className="icon-tile mb-4">
                  <Icon size={21} />
                </div>
                <h3 className="text-sm font-bold text-slate-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-9 grid grid-cols-2 gap-4 sm:max-w-md">
          <div className="border-l-2 border-cyan-300/70 pl-4">
            <p className="text-3xl font-black text-slate-50">1+</p>
            <p className="text-sm font-medium text-slate-400">Years coding</p>
          </div>
          <div className="border-l-2 border-cyan-300/70 pl-4">
            <p className="text-3xl font-black text-slate-50">8+</p>
            <p className="text-sm font-medium text-slate-400">Projects completed</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
