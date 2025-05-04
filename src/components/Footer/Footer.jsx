

import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = ({ socials }) => {
  return (
    <footer className="footer">
      <p className="footer-text">Designed & Built with ❤️</p>
      <div className="footer-social">
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <Github size={18} />
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${socials.email}`}>
          <Mail size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;