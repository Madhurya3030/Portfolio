import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = ({ id }) => {
  return (
    <section id={id} className="contact-section">
      <div className="container">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className='hai'>If you have any questions or opportunities, feel free to reach out!</p>

            <ul className="contact-details">
              <li><Mail size={20} /> <span>gunupudimadhu62@gmail.com</span></li>
              <li><Phone size={20} /> <span>+91 8142296719</span></li>
              <li><MapPin size={20} /> <span>Kakinada, India</span></li>
            </ul>

            <div className="contact-social">
              <h4>Find me on</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/durga-madhurya-gunupudi-b3aab1318/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/Madhurya3030"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
