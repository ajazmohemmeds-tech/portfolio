import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{ 
        y: -1000,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Ajaz<span>.</span>
        </motion.div>
        <div className="loader-progress-container">
          <motion.div 
            className="loader-progress-bar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
