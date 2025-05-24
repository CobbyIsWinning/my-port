

import { Github, Linkedin, Mail } from 'lucide-react';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/CobbyIsWinning" target="_blank" rel="noopener noreferrer">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/dereck-okyere-boateng-a49505299/" target="_blank" rel="noopener noreferrer">
        <Linkedin size={20} />
      </a>
      <a href="mailto:cobbyboateng16@gmail.com">
        <Mail size={20} />
      </a>
      <div className="social-line"></div>
    </div>
  );
};

export default SocialLinks;

