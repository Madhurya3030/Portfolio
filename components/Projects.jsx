import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Automatic Attendance System',
    description: 'An attendance system using face recognition with OpenCV and Haar.',
    tags: ['Python', 'OpenCV', 'Face Recognition','Haar Cascade Classifier algorithm ','Tkinter'],
    image: '/assets/fc.png',
    github: 'https://github.com/Madhurya3030/Face-Recognition'
  },
  {
    id: 2,
    title: 'HopeBridge',
    description: 'A web application where citizens can directly report the people in need.',
    tags: ['React', 'Node', 'MongoDb', 'Express', 'Twilio', 'Openstreetmap', 'Gemini chatbot'],
    image: '/assets/hb.png',
    github: 'https://github.com/Madhurya3030/HopeBridge'
  },
  {
    id: 3,
    title: 'Homecare',
    description: 'A mobile application where citizens can get instant home services.',
    tags: ['React Native', 'node', 'openstreetmap','MongoDb' ],
    image: '/assets/homecare.jpg',
    github: 'https://github.com/Madhurya3030/Homecare'
  },
  {
    id: 4,
    title: 'Artiva',
    description: 'A responsive arts and crafts website where sellers can purchase the products and showcase their skills',
    tags: ['Html', 'CSS', 'Javascript' , 'PHP'],
    image: '/assets/artiva.png',
    github: 'https://github.com/Madhurya3030/Arts-Ecommerce-Website'
  },
  {
    id: 5,
    title: 'Google Clone',
    description: 'The perfect clone of Google using simple logic',
    tags: ['Html', 'CSS', 'Javascript'],
    image: '/assets/google.png',
    github: 'https://github.com/Madhurya3030/GoogleClone'
  },

];

const Projects = ({ id }) => {
  return (
    <section id={id} className="projects-section">
      <div className="projects-container">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.github}
                    className="project-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
