import React from 'react';
import { Download, Mail } from 'lucide-react';
import { personalInfo } from '../data';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
         <img src="/images/main.PNG" alt="Background" />
         <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">HELLO, I'M</span>
          <h1 className="hero-title">{personalInfo.name}</h1>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              VIEW PROJECTS
            </a>
            <a href="/resume.pdf" className="btn btn-secondary" download>
              <Download size={18} /> DOWNLOAD RESUME
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} /> CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
