import React from 'react';
import { volunteering } from '../data';
import { Camera, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Volunteering.css';

const Volunteering = ({ onViewGallery }) => {
  const volunteerItems = [
    {
      role: "Media Vice Head",
      organization: "cuestic (christ university)",
      date: "2023 - 2025",
      description: "Progressed from media volunteer to Vice Head. Contributed to photography, videography, and content creation for university events.",
      icon: <Camera size={28} strokeWidth={1.5} />,
      hasGallery: true
    },
    {
      role: "Volunteer",
      organization: "national service scheme (nss)",
      date: "2020 - 2022",
      description: "Participated in cleanliness drives, awareness campaigns, and environmental projects.",
      icon: <HeartHandshake size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <section id="volunteering" className="volunteering-section">
      <div className="container volunteering-container">
        {/* Animated Header Section Equivalent */}
        <div className="volunteering-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="volunteering-subtitle">Giving Back to the Tech & Cultural Ecosystem</span>
            <h2 className="volunteering-title">Volunteering</h2>
            <p className="volunteering-text">Empowering communities through mentorship, media contribution, and social service.</p>
          </motion.div>
        </div>

        <div className="volunteering-grid-wrapper">
          <div className="volunteering-grid">
            {volunteerItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="volunteer-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="volunteer-card-top">
                  <div className="volunteer-icon-wrapper">
                    {item.icon}
                  </div>
                  <span className="volunteer-date">
                    {item.date}
                  </span>
                </div>

                <div className="volunteer-card-body">
                  <h3 className="volunteer-role">
                    {item.role}
                  </h3>
                  <p className="volunteer-org">
                    {item.organization}
                  </p>
                </div>

                <p className="volunteer-desc">
                  {item.description}
                </p>

                {item.hasGallery && (
                  <button 
                    onClick={onViewGallery}
                    className="volunteer-gallery-btn"
                  >
                    View Gallery <ArrowRight size={16} className="gallery-arrow" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
