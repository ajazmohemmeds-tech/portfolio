import React from 'react';
import { certifications } from '../data';
import { Award } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certs-grid">
           {certifications.map((cert, index) => (
             <div key={index} className="cert-card">
                <div className="cert-icon">
                   <Award size={32} />
                </div>
                <div className="cert-content">
                   <h3>{cert.name}</h3>
                   <p className="cert-issuer">{cert.issuer}</p>
                   {cert.date && <span className="cert-date">{cert.date}</span>}
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
