

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar-logo">YN</a>
      
      <div className="nav-links">
        <a href="#about"><span className="nav-number"></span> About</a>
        <a href="#experience"><span className="nav-number"></span> Experience</a>
        <a href="#work"><span className="nav-number"></span> Work</a>
        <a href="#contact"><span className="nav-number"></span> Contact</a>
        <a href="#" className="resume-button">Resume</a>
      </div>
      
      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={toggleMenu}><span className="nav-number"></span> About</a>
          <a href="#experience" onClick={toggleMenu}><span className="nav-number"></span> Experience</a>
          <a href="#work" onClick={toggleMenu}><span className="nav-number"></span> Work</a>
          <a href="#contact" onClick={toggleMenu}><span className="nav-number"></span> Contact</a>
          <a href="#" className="resume-button" onClick={toggleMenu}>Resume</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;