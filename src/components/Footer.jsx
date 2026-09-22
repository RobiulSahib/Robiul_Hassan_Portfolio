import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        
        <div className="footer-left">
          <p className="footer-name">Md. Robiul Hassan</p>
          <p className="footer-bio">
            B.Sc. in Computer Science and Engineering • BRAC University, Dhaka, Bangladesh.
          </p>
        </div>

        <div className="footer-center">
          <div className="footer-social-links">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="footer-icon-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="footer-copy">
            © {currentYear} Md. Robiul Hassan. Built with React & Vite.
          </p>
        </div>

        <div className="footer-right">
          <a href="#top" className="back-to-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}
