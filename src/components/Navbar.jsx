import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Brand / Logo */}
        <a href="#top" className="nav-brand">
          <span className="brand-name">Md. Robiul Hassan</span>
          <span className="brand-badge">B.Sc. CSE • BRACU</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions desktop-only">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profileData.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <FileText size={15} />
            <span>2-Page CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu mobile-only">
          <div className="container mobile-menu-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-nav-divider"></div>
            <div className="mobile-actions">
              <a
                href={profileData.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                <FileText size={16} />
                <span>View Master's CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
