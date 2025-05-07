                                  

import { useState } from 'react';
import './Experience.css';

const Experience = ({ experience }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section id="experience" className="experience">
      <div className="section-heading">
        <h2><span className="section-number">02.</span> Where I've Worked</h2>
        <div className="heading-line"></div>
      </div>
      
      <div className="experience-container">
        <div className="experience-tabs">
          {experience.map((job, index) => (
            <button 
              key={index} 
              className={`experience-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        
        <div className="experience-content">
          <h3 className="experience-title">
            {experience[activeTab].title} <span className="experience-company">@ {experience[activeTab].company}</span>
          </h3>
          <p className="experience-date">{experience[activeTab].date}</p>
          
          <ul className="experience-description">
            {experience[activeTab].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <div className="experience-tech">
            {experience[activeTab].tech.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;