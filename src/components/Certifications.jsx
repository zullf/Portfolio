import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '../data';

const Certifications = () => (
  <section id="certifications" className="section-shell">
    <div className="section-inner">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <p className="section-kicker">Certifications</p>
        <h2 className="section-title">
          Learning proof and supporting credentials.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="surface-card hover:-translate-y-1"
          >
            <div className="icon-tile mb-5 h-12 w-12">
              <Award size={22} />
            </div>
            <h3 className="text-lg font-black text-slate-50">{cert.title}</h3>
            <p className="mt-2 text-sm font-semibold text-slate-300">{cert.issuer}</p>
            <p className="mt-1 text-sm text-slate-400">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
