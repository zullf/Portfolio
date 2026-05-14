import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';          

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] font-sans text-slate-50 selection:bg-cyan-200 selection:text-slate-950">
      <Navbar />
      <Hero />
      <main className="bg-[var(--color-bg-primary)]">
        <About />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
