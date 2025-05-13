import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css'; 

const Hero = ({ id, scrollToSection }) => {
  return (
    <section id={id} className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="hero-title">
           <small>Myself</small>  <span className="highlight">Madhurya</span>
          </h1>
          <p className="hero-subtitle">
            Aspiring <span className="text-role">Software Developer</span> passionate about building responsive and engaging web applications.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              My Projects
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
