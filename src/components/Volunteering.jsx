import React, { useState } from 'react';
import { volunteering } from '../data';
import { Camera, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Volunteering.css';

const Volunteering = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const allImages = [
    { src: `${import.meta.env.BASE_URL}images/photo1.jpg`, title: "Event Capture 1" },
    { src: `${import.meta.env.BASE_URL}images/photo2.JPG`, title: "Event Capture 2" },
    { src: `${import.meta.env.BASE_URL}images/photo3.JPG`, title: "Event Capture 3" },
    { src: `${import.meta.env.BASE_URL}images/photo4.jpg`, title: "Event Capture 4" },
    { src: `${import.meta.env.BASE_URL}images/gallery_1.jpg`, title: "Gallery 1" },
    { src: `${import.meta.env.BASE_URL}images/gallery_2.jpg`, title: "Gallery 2" }
  ];

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
                  onClick={() => setIsGalleryOpen(true)}
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

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            className="gallery-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-content glass-liquid">
              <button 
                className="close-modal-btn" 
                onClick={() => setIsGalleryOpen(false)}
              >
                <X size={24} />
              </button>
              
              <div className="modal-gallery-grid">
                {allImages.map((img, index) => (
                  <motion.div 
                    key={index} 
                    className="modal-gallery-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <img src={img.src} alt={img.title} />
                    <div className="modal-item-caption">{img.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Volunteering;
