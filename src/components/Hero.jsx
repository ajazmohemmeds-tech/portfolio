import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useGSAP(() => {
    gsap.to(sectionRef.current, {
      scale: 0.95,
      opacity: 0.6,
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="home" className="hero-section" ref={sectionRef}>
      <div className="container hero-container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="hero-intro">
              Hi, I'm Ajaz. AI & Machine Learning Engineer building intelligent systems.
            </p>
            
            <h1 className="hero-headline">
              <span className="bold">Artificial intelligence</span>
              <span className="outline">& machine learning</span>
            </h1>
            
            <div className="hero-btns-wrapper">
               <div className="hero-btns">
                  <button className="btn btn-primary" onClick={scrollToContact}>
                    You need an AI engineer
                  </button>
                  <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
                    Let's Connect
                  </a>
               </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="hero-image-container">
              <img 
                src={`${import.meta.env.BASE_URL}images/main.PNG`} 
                alt="Ajaz Mohemmed" 
                className="hero-main-img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
