

import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section id="work" className="projects">
      <div className="section-heading">
        <h2><span className="section-number">03.</span> Some Things I've Built</h2>
        <div className="heading-line"></div>
      </div>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-list">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="project-image">
              <div className="project-image-container">
                <img src={`/api/placeholder/600/340`} alt={project.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;