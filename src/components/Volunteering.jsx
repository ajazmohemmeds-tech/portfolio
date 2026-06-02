import React from 'react';
import { volunteering } from '../data';
import { Camera, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Volunteering.css';

const Volunteering = ({ onViewGallery }) => {
  const mediaRole = volunteering.find(v => v.role === "Media Vice Head");
  const nssRole = volunteering.find(v => v.role === "Volunteer");

  return (
    <section id="volunteering" className="section volunteering-geometric-wrapper">
      <div className="geometric-overlay" />
      <div className="container relative-content">
        <h2 className="section-title">
          Media & <span className="highlight-text">Volunteering</span>
        </h2>
        
        <div className="volunteering-content-split">
          {/* Media Case Box */}
          <motion.div 
            className="vol-box glass-liquid media-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="glass-label">Media & Photography</div>
             <div className="vol-item">
                <div className="vol-header">
                  <h3>{mediaRole.role}</h3>
                  <span className="vol-org">{mediaRole.organization}</span>
                </div>
                <p>{mediaRole.description}</p>
                
                <button 
                  className="view-gallery-btn" 
                  onClick={onViewGallery}
                >
                  View Gallery <ArrowRight size={18} />
                </button>
             </div>
          </motion.div>

          {/* NSS Box */}
          <motion.div 
            className="vol-box glass-liquid nss-box"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="glass-label">Social Service</div>
             <div className="vol-item">
                <div className="vol-header">
                  <h3>{nssRole.role}</h3>
                  <span className="vol-org">{nssRole.organization}</span>
                </div>
                <p>{nssRole.description}</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
