import React from 'react';
import { volunteering } from '../data';
import { Camera } from 'lucide-react';
import './Volunteering.css';

const Volunteering = () => {
  const galleryImages = [
    `${import.meta.env.BASE_URL}images/photo1.jpg`,
    `${import.meta.env.BASE_URL}images/photo2.JPG`,
    `${import.meta.env.BASE_URL}images/photo3.JPG`,
    `${import.meta.env.BASE_URL}images/photo4.jpg`
  ];

  return (
    <section id="volunteering" className="section volunteering">
      <div className="container">
        <h2 className="section-title">Media & <span>Volunteering</span></h2>
        
        <div className="volunteering-content">
          <div className="volunteering-list">
             {volunteering.map((item, index) => (
                <div key={index} className="vol-item">
                   <div className="vol-header">
                     <h3>{item.role}</h3>
                     <span className="vol-org">{item.organization}</span>
                   </div>
                   <p>{item.description}</p>
                </div>
             ))}
          </div>

          <div className="media-gallery">
            <h3>Gallery</h3>
            <div className="gallery-grid">
               {galleryImages.map((src, index) => (
                 <div key={index} className="gallery-item">
                   <img 
                     src={src} 
                     alt={`Gallery ${index + 1}`} 
                     className="gallery-img"
                     onError={(e) => {
                       e.target.style.display = 'none';
                       e.target.nextSibling.style.display = 'flex';
                     }}
                   />
                   <div className="gallery-placeholder" style={{display: 'none'}}>
                      <Camera size={24} />
                      <span>Photo {index + 1}</span>
                   </div>
                 </div>
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
