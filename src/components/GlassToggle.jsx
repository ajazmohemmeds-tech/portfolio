import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import './GlassToggle.css';

const GlassToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="glass-toggle-container" onClick={toggleTheme} aria-label="Toggle Theme">
      {/* Background Track */}
      <div className="glass-toggle-track">
        <Sun size={14} className={`toggle-icon sun ${isDark ? 'inactive' : 'active'}`} />
        <Moon size={14} className={`toggle-icon moon ${isDark ? 'active' : 'inactive'}`} />
      </div>

      {/* Sliding Handle */}
      <motion.div 
        className="glass-toggle-handle"
        animate={{ 
          x: isDark ? 28 : 2,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      >
        <div className="handle-inner">
          {isDark ? <Moon size={12} fill="white" color="white" /> : <Sun size={12} fill="black" color="black" />}
        </div>
      </motion.div>
    </div>
  );
};

export default GlassToggle;
