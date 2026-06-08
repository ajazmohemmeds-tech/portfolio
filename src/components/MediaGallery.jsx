import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import './MediaGallery.css';

const MediaGallery = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { 
      src: `${import.meta.env.BASE_URL}images/photo1.jpg`, 
      title: "Leadership Recognition", 
      subtitle: "Recognised by the HOD for contribution to the media team" 
    },
    { 
      src: `${import.meta.env.BASE_URL}images/photo2.JPG`, 
      title: "The Pillars", 
      subtitle: "Core team - the team behind it all" 
    },
    { 
      src: `${import.meta.env.BASE_URL}images/photo3.JPG`, 
      title: "Academic Synergy", 
      subtitle: "Students & Faculty - learning, building and delivering together" 
    },
    { 
      src: `${import.meta.env.BASE_URL}images/photo4.jpg`, 
      title: "Excellence Award", 
      subtitle: "Media execution - awarded by Col. Jai Govind for excellence in media execution." 
    },
    { 
      src: `${import.meta.env.BASE_URL}images/gallery_1.jpg`, 
      title: "Executive Appointment", 
      subtitle: "Appointed as Media Vice Head - trusted to lead, create and deliver." 
    },
    { 
      src: `${import.meta.env.BASE_URL}images/gallery_2.jpg`, 
      title: "THE BOYS", 
      subtitle: "Creative brotherhood in media." 
    }
  ];

  return (
    <motion.div 
      className="gallery-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="gallery-sticky-header">
        <div className="gallery-header-text">
          <h2 className="gallery-title">Media Gallery</h2>
          <p className="gallery-subtitle">CUESTIC (Christ University)</p>
        </div>
        
        <button onClick={onBack} className="gallery-close-btn group">
          <span className="gallery-close-text">Back to Portfolio</span>
          <X size={24} className="gallery-close-icon" />
        </button>
      </div>

      <div className="gallery-content-area">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-image-card group"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="gallery-img"
              />
              <div className="gallery-img-overlay">
                <h4 className="gallery-img-title">{image.title}</h4>
                <p className="gallery-img-subtitle">{image.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MediaGallery;
