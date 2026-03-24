import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo, experience } from '../data';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About <span>Me</span>
        </motion.h2>
        
        <div className="about-split-layout">
          <div className="about-left-column">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="about-subtitle">My Background</h3>
              <p>
                I design and build intelligent systems that transform real-world data into actionable insights.<br/><br/>
                A graduate in Artificial Intelligence and Machine Learning from Christ University, Bangalore, I focus on creating scalable, high-impact machine learning solutions using Python, TensorFlow, and PyTorch.
              </p>
              
              <div className="education-list">
                <h4>Education</h4>
                {personalInfo.education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="education-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <h5>{edu.degree}</h5>
                    <p>{edu.institution}</p>
                    <span>{edu.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="experience-list"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="about-subtitle">Experience</h3>
              {experience.map((job, index) => (
                <motion.div 
                  key={index} 
                  className="experience-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="exp-header">
                    <h4>{job.role}</h4>
                    <span className="exp-period">{job.period}</span>
                  </div>
                  <h5>{job.company} - {job.type}</h5>
                  <ul className="exp-desc">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="about-right-column">
            <motion.div 
              className="portrait-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div className="portrait-inner" style={{ y: imgY }}>
                <img 
                  src={`${import.meta.env.BASE_URL}images/about_portrait.jpg`} 
                  alt="Ajaz Portrait" 
                  className="about-portrait"
                  onError={(e) => {
                    // Fallback to an existing image if the user hasn't uploaded the portrait yet
                    e.target.onerror = null; 
                    e.target.src = `${import.meta.env.BASE_URL}images/photo2.JPG`;
                  }}
                />
              </motion.div>
              <div className="portrait-overlay"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
