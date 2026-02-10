import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Volunteering', href: '#volunteering' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/resume.pdf', download: true },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          Ajaz<span>.</span>
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
              download={link.download}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
