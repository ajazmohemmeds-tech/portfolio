import React from 'react';
import { personalInfo } from '../data';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="section contact">
      <div className="container contact-container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        
        <div className="contact-links">
           <a href={`mailto:${personalInfo.email}`} className="contact-item">
             <div className="icon-box"><Mail size={24} /></div>
             <span>{personalInfo.email}</span>
           </a>
           
           <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
             <div className="icon-box"><Linkedin size={24} /></div>
             <span>LinkedIn</span>
           </a>

           <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-item">
             <div className="icon-box"><Github size={24} /></div>
             <span>GitHub</span>
           </a>

           <div className="contact-item">
             <div className="icon-box"><Phone size={24} /></div>
             <span>{personalInfo.phone}</span>
           </div>

           <div className="contact-item">
             <div className="icon-box"><MapPin size={24} /></div>
             <span>{personalInfo.location}</span>
           </div>
        </div>

        <div className="footer-bottom">
           <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
