import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, ExternalLink } from 'lucide-react';
import './MediaGallery.css';

const MediaGallery = ({ onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    { src: `${import.meta.env.BASE_URL}images/photo1.jpg`, title: "Tech Event Photography", category: "Event" },
    { src: `${import.meta.env.BASE_URL}images/photo2.JPG`, title: "CUESTIC Media Capture", category: "Editorial" },
    { src: `${import.meta.env.BASE_URL}images/photo3.JPG`, title: "University Milestone", category: "Event" },
    { src: `${import.meta.env.BASE_URL}images/photo4.jpg`, title: "Visual Storytelling", category: "Creative" },
    { src: `${import.meta.env.BASE_URL}images/gallery_1.jpg`, title: "Action Shot 01", category: "Production" },
    { src: `${import.meta.env.BASE_URL}images/gallery_2.jpg`, title: "Perspective Analysis", category: "Technique" }
  ];

  return (
    <motion.div 
      className="gallery-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="gallery-nav">
        <button onClick={onBack} className="btn-back-home">
          <ArrowLeft size={20} /> Back to Portfolio
        </button>
        <div className="gallery-header-info">
          <Camera size={32} className="header-icon" />
          <div>
            <h1>Media <span>Gallery</span></h1>
            <p>Visual Storytelling & Event Photography Archive</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="gallery-main-grid">
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index} 
              className="gallery-card glass-liquid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-image-wrapper">
                <img src={img.src} alt={img.title} />
                <div className="card-overlay">
                  <span className="category-tag">{img.category}</span>
                </div>
              </div>
              <div className="card-details">
                <h3>{img.title}</h3>
                <div className="card-meta">
                   <span>Project Archive</span>
                   <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="gallery-simple-footer">
        <p>© 2025 Ajaz Mohemmed S | Media Vice Head Portfolio</p>
      </footer>
    </motion.div>
  );
};

export default MediaGallery;
