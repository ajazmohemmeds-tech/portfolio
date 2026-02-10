import React from 'react';
import { personalInfo, experience } from '../data';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        
        <div className="about-grid">
          <div className="about-text">
            <h3 className="about-subtitle">My Background</h3>
            <p>
              I am an Artificial Intelligence and Machine Learning enthusiast pursuing my B.Tech at Christ University, Bangalore.
              With a strong foundation in Python, specialized libraries like TensorFlow and PyTorch, and a passion for data science,
              I have developed predictable models and intelligent systems.
            </p>
            
            <div className="education-list">
              <h4>Education</h4>
              {personalInfo.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h5>{edu.degree}</h5>
                  <p>{edu.institution}</p>
                  <span>{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="experience-list">
            <h3 className="about-subtitle">Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="experience-card">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
