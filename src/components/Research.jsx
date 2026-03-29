import React from 'react';
import { motion } from 'framer-motion';
import { research } from '../data'; // I'll use this if needed, but I'll hardcode the high-fidelity version from the prompt
import { ExternalLink, Award, ArrowRight } from 'lucide-react';
import './Research.css';

const Research = ({ onViewCertificate }) => {
  return (
    <section id="research" className="section research">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Research <span>Publication</span>
        </motion.h2>

        <div className="research-layout">
          <motion.div 
            className="research-card glass-liquid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="research-grid">
              <div className="research-info">
                <div className="tag-label">Research Publication</div>
                <h3 className="research-title">
                  Decision Flow Tracing and Word Impact Analysis in Hybrid Transformer-Conditioned Diffusion Models
                </h3>
                
                <div className="research-meta">
                  <div className="meta-item">
                    <span className="meta-dot"></span>
                    <p>2nd International Conference on Sustainable Computing and Intelligent Systems (SCIS 2025)</p>
                  </div>
                  <div className="meta-item date">
                    <span className="meta-dot"></span>
                    <p>11/2025</p>
                  </div>
                </div>

                <p className="research-description">
                  Developed a hybrid diffusion model combining UNet denoising with transformer-based cross-attention to enhance both image quality and interpretability in text-to-image generation. Introduced an explainability framework using attention heatmaps and temporal analysis to track how text tokens influence image regions. Achieved measurable improvements in FID, CLIP score, and attention coherence, enabling more transparent and controllable generative AI systems.
                </p>

                <div className="research-actions">
                  <button onClick={onViewCertificate} className="btn-view-cert">
                    View Certificate <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              <div className="research-preview">
                <div className="cert-preview-glass" onClick={onViewCertificate}>
                  <img 
                    src={`${import.meta.env.BASE_URL}images/research_cert.png`} 
                    alt="Research Certificate Preview" 
                    className="cert-img-thumb"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/600x450/000000/FFFFFF?text=Springer+Certificate";
                    }}
                  />
                  <div className="preview-overlay">
                    <Award size={40} />
                    <span>View Full Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
