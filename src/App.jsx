


import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import SocialLinks from './components/SocialLinks/SocialLinks';
import EmailLink from './components/EmailLink/EmailLink';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { personalInfo, experience, projects } from './data';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="app">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <SocialLinks />
      <EmailLink email={personalInfo.email} />
      
      <main className="main-content">
        <Hero personalInfo={personalInfo} />
        <About />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact email={personalInfo.email} />
      </main>
      
      <Footer socials={personalInfo} />
    </div>
  );
}

export default App;