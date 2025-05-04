
import myPhoto from '../photos/mydp2.jpg';
import './About.css';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'TypeScript',
    'Node.js',
    'CSS/SCSS',
  ];

  return (
    <section id="about" className="about">
      <div className="section-heading">
        <h2><span className="section-number">01.</span> About Me</h2>
        <div className="heading-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a software engineer who enjoys creating things that live on the internet. 
            My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at a start-up, a large corporation, and a student-led design studio. 
            My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}             
          </ul>
        </div>
        
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <img src={myPhoto} alt="Your profile" className="about-image" />
          </div>
          <div className="about-image-border"></div>
        </div>
      </div>
    </section>
  );
};

export default About;