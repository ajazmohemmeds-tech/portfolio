import React from 'react';
import { skills } from '../data';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages & Tools</h3>
            <div className="skill-tags">
              {skills.technical.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Libraries & Frameworks</h3>
            <div className="skill-tags">
              {skills.libraries.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              {skills.soft.map((skill) => (
                <span key={skill} className="skill-tag soft">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
