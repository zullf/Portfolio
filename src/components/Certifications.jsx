import React from 'react';
import { certifications } from '../data';

const Certifications = () => (
  <section id="certifications" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {certifications.map((cert) => (
        <div key={cert.id} className="flex items-start p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
          <div className="flex-shrink-0 h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl font-bold text-blue-600 border border-slate-100">
            {cert.logo}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-slate-900">{cert.title}</h3>
            <p className="text-slate-500 text-sm">{cert.issuer}</p>
            <p className="text-slate-400 text-xs mt-1">{cert.date}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Certifications;