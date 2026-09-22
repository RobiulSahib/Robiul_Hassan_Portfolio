import React, { useEffect } from 'react';
import { CheckCircle, ExternalLink, Github, Video, X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="badge badge-accent" style={{ marginBottom: '8px', display: 'inline-block' }}>
              {project.category}
            </span>
            <h3 id="modal-title" className="modal-title">
              {project.title}
            </h3>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-text">{project.shortDescription}</p>
          </div>

          <div className="modal-grid-two">
            <div className="modal-section">
              <h4 className="modal-section-title">The Problem</h4>
              <p className="modal-text">{project.problem}</p>
            </div>
            <div className="modal-section">
              <h4 className="modal-section-title">The Solution</h4>
              <p className="modal-text">{project.solution}</p>
            </div>
          </div>

          <div className="modal-section modal-highlight-box">
            <h4 className="modal-section-title" style={{ color: '#0369a1' }}>
              My Technical Contribution
            </h4>
            <p className="modal-text">{project.contribution}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Key Architectural Features</h4>
              <ul className="modal-features-list">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <CheckCircle size={15} className="feature-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-section">
            <h4 className="modal-section-title">Technologies Used</h4>
            <div className="modal-tech-tags">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Actions */}
        <div className="modal-footer">
          <div className="modal-links-row">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={15} />
                <span>Visit Live Platform</span>
              </a>
            )}
            {project.demoVideoUrl && (
              <a
                href={project.demoVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-sm"
              >
                <Video size={15} />
                <span>Watch YouTube Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <Github size={15} />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
