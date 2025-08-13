import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Madhurya</h3>
            <p>Web Developer & Designer</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Social</h4>
              <ul>
                <li><a href="https://www.linkedin.com/in/durga-madhurya-gunupudi-b3aab1318/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/Madhurya3030" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Madhurya. All rights reserved.</p>
          <p>Designed & Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
