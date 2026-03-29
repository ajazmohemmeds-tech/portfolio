import React from 'react';
import { personalInfo } from '../data';
import GlassToggle from './GlassToggle';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          Ajaz<span>.</span>
        </div>
        <nav className="nav-menu">
           <a href="#projects" className="nav-link">Projects</a>
           <a href="#research" className="nav-link">Research</a>
           <a href="#experience" className="nav-link">Experience</a>
           <a href="#volunteering" className="nav-link">Photos</a>
           <a href="#about" className="nav-link">About</a>
         </nav>
        <div className="header-actions">
          <GlassToggle theme={theme} toggleTheme={toggleTheme} />
          <a href={`mailto:${personalInfo.email}`} className="btn-contact">hello@ajaz.com</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
