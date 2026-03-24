import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import * as LucideIcons from 'lucide-react';
import './Skills.css';

const MarqueeRow = ({ items, direction = 'left', speed = 30 }) => {
  // Dulplicate the items for seamless looping
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee-content"
        animate={{
          x: direction === 'left' ? ["0%", "-33.33%"] : ["-33.33%", "0%"]
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity
        }}
      >
        {duplicatedItems.map((skill, index) => {
          const IconComponent = LucideIcons[skill.icon] || LucideIcons.Code;
          return (
            <motion.div 
              key={index} 
              className="skill-badge"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)"
              }}
            >
              <div className="badge-glow"></div>
              <div className="badge-content">
                <IconComponent size={18} strokeWidth={2.5} />
                <span>{skill.name}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="skills-background">
        <div className="ambient-light top-left"></div>
        <div className="ambient-light bottom-right"></div>
      </div>
      
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Technology <span>Stack</span>
        </motion.h2>

        <div className="skills-marquee-wrapper">
          <div className="marquee-fade fade-left"></div>
          <div className="marquee-fade fade-right"></div>
          
          <div className="marquee-parallax">
            <MarqueeRow items={skills.row1} direction="left" speed={40} />
            <MarqueeRow items={skills.row2} direction="right" speed={45} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
