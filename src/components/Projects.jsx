import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured <span>Projects</span>
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => { 
                const url = project.githubLink || project.demoLink; 
                if (url && url !== "#") window.open(url, "_blank"); 
              }}
            >
              <div className="project-image">
                {project.image ? (
                   <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                ) : (
                  <div className="placeholder-image">
                    <span>Project Image</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-meta">
                  <span><strong>Role:</strong> {project.role}</span>
                </div>
                <div className="project-tags">
                  {project.tech.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-outcome">
                   <strong>Outcome:</strong> {project.outcome}
                </div>
                <div className="project-links">
                  <a href={project.githubLink || "#"} target={project.githubLink ? "_blank" : undefined} rel="noopener noreferrer" className="link-btn" onClick={(e) => e.stopPropagation()}><Github size={16} /> Code</a>
                  <a href={project.demoLink || "#"} target={project.demoLink ? "_blank" : undefined} rel="noopener noreferrer" className="link-btn" onClick={(e) => e.stopPropagation()}><ExternalLink size={16} /> Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
