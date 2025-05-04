

import './Hero.css';

const Hero = ({ personalInfo }) => {
  return (
    <section className="hero">
      <p className="hero-intro">Hi, my name is</p>
      <h1 className="hero-name">{personalInfo.name}</h1>
      <h2 className="hero-title">{personalInfo.title}</h2>
      <p className="hero-description">{personalInfo.description}</p>
      <a href="#work" className="hero-button">Check out my work</a>
    </section>
  );
};

export default Hero;