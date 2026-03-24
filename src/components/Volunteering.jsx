import React, { useState } from 'react';
import { volunteering } from '../data';
import { Camera, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Volunteering.css';

const Volunteering = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const allImages = [
    { src: `${import.meta.env.BASE_URL}images/photo1.jpg`, title: "Event Capture 1" },
    { src: `${import.meta.env.BASE_URL}images/photo2.JPG`, title: "Event Capture 2" },
    { src: `${import.meta.env.BASE_URL}images/photo3.JPG`, title: "Event Capture 3" },
    { src: `${import.meta.env.BASE_URL}images/photo4.jpg`, title: "Event Capture 4" },
    { src: `${import.meta.env.BASE_URL}images/gallery_1.jpg`, title: "Gallery 1" },
    { src: `${import.meta.env.BASE_URL}images/gallery_2.jpg`, title: "Gallery 2" }
  ];

  return (
    <section id="volunteering" className="section volunteering">
      <div className="container">
        <h2 className="section-title">Media & <span>Volunteering</span></h2>
        
        <div className="volunteering-content">
          <div className="volunteering-list">
             {volunteering.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="vol-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                   <div className="vol-header">
                     <h3>{item.role}</h3>
                     <span className="vol-org">{item.organization}</span>
                   </div>
                   <p>{item.description}</p>
                </motion.div>
             ))}
          </div>

          <div className="media-gallery-wrapper">
            <h3>Gallery</h3>
            <div className="hover-carousel">
              {allImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="carousel-item"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    width: hoveredIndex === index ? "40%" : (hoveredIndex === null ? "16.6%" : "12%")
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src={img.src} alt={img.title} />
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div 
                        className="carousel-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <span>{img.title}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            <p className="gallery-note">
              Capturing moments from university events and social drives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
