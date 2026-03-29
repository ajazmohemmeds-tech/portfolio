import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ZoomIn } from 'lucide-react';
import './CertificateView.css';

const CertificateView = ({ onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="certificate-page-wrapper"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="cert-nav">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={20} /> Back to Portfolio
        </button>
      </div>

      <div className="cert-container">
        <div className="cert-content-box glass-liquid">
          <div className="cert-info-header">
            <h1>Research Paper Presentation Certificate</h1>
            <p>2nd International Conference on Sustainable Computing and Intelligent Systems (SCIS 2025)</p>
          </div>

          <div className="cert-image-display">
            <img 
              src={`${import.meta.env.BASE_URL}images/research_cert.png`} 
              alt="Research Certificate Full" 
              className="full-cert-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/1200x900/000000/FFFFFF?text=Springer+Conference+Certificate";
              }}
            />
            <div className="cert-zoom-indicator">
              <ZoomIn size={16} /> Click to zoom
            </div>
          </div>

          <div className="cert-footer-actions">
            <a 
              href={`${import.meta.env.BASE_URL}images/research_cert.png`} 
              download="Ajaz_Mohemmed_Springer_Research_Certificate.png" 
              className="btn-download-cert"
            >
              <Download size={20} /> Download Certificate
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateView;
