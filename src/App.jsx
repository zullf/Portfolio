import React, { useEffect } from 'react';
import AOS from 'aos';                    
import 'aos/dist/aos.css';      

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';          

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      once: true,             
      duration: 1000,         
      easing: 'ease-out-cubic', 
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  );
}