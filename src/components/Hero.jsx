import React from 'react';
import { ArrowDown, Award, Download, ExternalLink, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-container">
        
        {/* Status Chip */}
        <div className="hero-badge-row">
          <span className="hero-status-pill">
            <span className="status-dot"></span>
            Prospective Master of Computer Science Student (Australia)
          </span>
          <span className="hero-status-pill distinction-pill">
            <Award size={14} />
            Distinction Award Eligible (CGPA 3.50 / 4.00)
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Md. Robiul Hassan
        </h1>
        <p className="hero-subtitle">
          Computer Science & Engineering Graduate • BRAC University
        </p>
        <p className="hero-description">
          Specializing in full-stack web architectures and applied machine learning research. Successfully defended undergraduate thesis developing multimodal mental-health screening systems (<strong>94.12% accuracy</strong>). Proven production track record spanning GAOTek Inc. and two software engineering agencies.
        </p>

        {/* Quick Contact & Location Bar */}
        <div className="hero-meta-bar">
          <span className="meta-item">
            <MapPin size={16} />
            {profileData.location}
          </span>
          <span className="meta-item">
            <Mail size={16} />
            <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
          </span>
          <span className="meta-item">
            <Github size={16} />
            <a href={profileData.github} target="_blank" rel="noopener noreferrer">github.com/RobiulSahib</a>
          </span>
          <span className="meta-item">
            <Linkedin size={16} />
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <a
            href={profileData.cvPdfPath}
            download="Md_Robiul_Hassan_CV.pdf"
            className="btn btn-primary"
            title="Download verified PDF with 100% active clickable links"
          >
            <Download size={18} />
            <span>Download CV (PDF)</span>
          </a>
          <a
            href={profileData.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FileText size={18} />
            <span>View 2-Page CV</span>
          </a>
          <a href="#research" className="btn btn-outline">
            <span>Thesis (94.12% Acc)</span>
          </a>
        </div>

        {/* Academic & Professional Metrics Strip */}
        <div className="hero-metrics-strip">
          <div className="metric-box">
            <span className="metric-value">3.50</span>
            <span className="metric-label">Undergraduate CGPA</span>
            <span className="metric-sublabel">BRAC University (Max 4.00)</span>
          </div>
          <div className="metric-box">
            <span className="metric-value">94.12%</span>
            <span className="metric-label">Thesis Best Accuracy</span>
            <span className="metric-sublabel">Multilingual E5 + Linear SVM</span>
          </div>
          <div className="metric-box">
            <span className="metric-value">3</span>
            <span className="metric-label">Professional Roles</span>
            <span className="metric-sublabel">AlgoVerse, Zentorra, GAOTek</span>
          </div>
          <div className="metric-box">
            <span className="metric-value">Defended</span>
            <span className="metric-label">Undergraduate Thesis</span>
            <span className="metric-sublabel">Multimodal Mental Health</span>
          </div>
        </div>

      </div>
    </section>
  );
}
