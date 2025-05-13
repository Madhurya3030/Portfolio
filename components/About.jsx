import React from 'react';
import { motion } from 'framer-motion';
import ProfileImg from '../public/assets/Img1.jpg'; // Ensure the path is correct
import './About.css'; // Assuming you have this file

const About = ({ id }) => {
 const skillsData = [
  { name: 'HTML', imageSrc: 'https://img.icons8.com/color/48/html-5.png' },
  { name: 'CSS', imageSrc: 'https://img.icons8.com/color/48/css3.png' },
  { name: 'JavaScript', imageSrc: 'https://img.icons8.com/color/48/javascript.png' },
  { name: 'React', imageSrc: 'https://img.icons8.com/color/48/react-native.png' },
  { name: 'React Native', imageSrc: 'https://img.icons8.com/color/48/react-native.png' },
  { name: 'Node.js', imageSrc: 'https://img.icons8.com/color/48/nodejs.png' },
  { name: 'MongoDB', imageSrc: 'https://img.icons8.com/color/48/mongodb.png' },
  { name: 'Python', imageSrc: 'https://img.icons8.com/color/48/python.png' },
  { name: 'Java', imageSrc: 'https://img.icons8.com/color/48/java-coffee-cup-logo.png' },
  { name: 'Git', imageSrc: 'https://img.icons8.com/color/48/git.png' },
  { name: 'PHP', imageSrc: 'https://img.icons8.com/color/48/php.png' }

];


  return (
    <section id={id} className="about-section">
      <div className="about-container">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={ProfileImg} alt="Profile" />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            
            <p>
              I'm a passionate and dedicated web developer with a drive for creating responsive,
              user-friendly experiences. Whether it's intuitive frontends or robust backends,
              I love crafting clean and scalable code.
            </p>
            <p>
              With a strong foundation in Computer Science and a hunger for learning,
              I enjoy using modern technologies to bring impactful ideas to life.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Skills & Tools</h3>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.05 }}
              >
                <img src={skill.imageSrc} alt={skill.name} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;