import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    scrollToSection(id);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">Portfolio</div>

        <nav className="navbar-links">
          {[ 'about', 'projects', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`navbar-link ${activeSection === id ? 'active' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
