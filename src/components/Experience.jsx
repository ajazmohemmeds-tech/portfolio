import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Work <span>Experience</span>
        </motion.h2>

        <div className="experience-grid">
          {experience.map((job, index) => (
            <motion.div 
              key={index} 
              className="experience-card glass-liquid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
              viewport={{ once: true }}
            >
              <div className="experience-badge">Experience</div>
              <div className="experience-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company-name">{job.company} — {job.type}</p>
                </div>
                <span className="period-pill">{job.period}</span>
              </div>
              
              <ul className="experience-details">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
