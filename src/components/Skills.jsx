import React from 'react';
import { Code2, Database, PenTool, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data';

const groupIcons = {
  Frontend: Code2,
  Mobile: Smartphone,
  Tools: PenTool,
  "Backend/Database": Database
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => (
  <section id="skills" className="section-shell">
    <div className="section-inner">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">
          Practical stack for web and mobile interfaces.
        </h2>
        <p className="section-copy">
          Grouped around the skills recruiters usually look for in a Front-End Developer intern: UI implementation, responsive layout, API work, and collaboration tools.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.title] || Code2;

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="surface-card"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="icon-tile">
                  <Icon size={21} />
                </div>
                <h3 className="text-lg font-black text-slate-50">{group.title}</h3>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="tech-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
