import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Star, Link2, Grid3X3, MapPin, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="connect-section">
      <div className="connect-container">
        <motion.div
          className="connect-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>LET'S CONNECT</h2>
        </motion.div>

        <motion.div
          className="connect-info-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="connect-card">
            <div className="card-header">
              <span className="card-label">NAME</span>
              <ArrowUpRight size={14} className="card-arrow" />
            </div>
            <div className="card-body">
              <Star size={28} className="card-icon" />
              <h3 className="card-value">{personalInfo.name}</h3>
            </div>
          </div>

          <a href={`mailto:${personalInfo.email}`} className="connect-card connect-card-link">
            <div className="card-header">
              <span className="card-label">EMAIL</span>
              <ArrowUpRight size={14} className="card-arrow" />
            </div>
            <div className="card-body">
              <Link2 size={28} className="card-icon" />
              <h3 className="card-value card-value-sm">{personalInfo.email}</h3>
              <p className="card-desc">For professional correspondence, kindly reach out via email</p>
            </div>
          </a>

          <div className="connect-card">
            <div className="card-header">
              <span className="card-label">PHONE</span>
              <ArrowUpRight size={14} className="card-arrow" />
            </div>
            <div className="card-body">
              <Grid3X3 size={28} className="card-icon" />
              <h3 className="card-value">{personalInfo.phone}</h3>
              <p className="card-desc">Call availability is minimal; email remains the primary channel.</p>
            </div>
          </div>

          <div className="connect-card">
            <div className="card-header">
              <span className="card-label">LOCATION</span>
              <ArrowUpRight size={14} className="card-arrow" />
            </div>
            <div className="card-body">
              <MapPin size={28} className="card-icon" />
              <h3 className="card-value">{personalInfo.location}</h3>
              <p className="card-desc">Kerala, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="connect-bottom-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="connect-card connect-socials-card">
            <div className="card-header">
              <span className="card-label">SOCIALS</span>
            </div>
            <div className="socials-list">
              
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-platform">LINKEDIN:</span>
                <span className="social-handle">/ajaz-mohemmed-s</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-platform">GITHUB:</span>
                <span className="social-handle">/ajazmohemmeds-tech</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-link">
                <span className="social-platform">EMAIL:</span>
                <span className="social-handle">hello@ajaz.com</span>
              </a>
            </div>
          </div>

          <div className="connect-card connect-recent-card">
            <div className="recent-highlight">
              <div className="recent-highlight-text">
                
                <h4>Building Intelligent</h4>
                <h4 className="recent-italic">AI Systems</h4>
                
              </div>
            </div>
          </div>
        </motion.div>

        <div className="connect-footer">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
