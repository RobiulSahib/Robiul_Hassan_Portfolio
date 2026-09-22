import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Eye, Github, Video } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Client / Production', 'Academic / Architecture', 'Academic / Graphics', 'Automation / Utility'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Portfolio Catalog</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Commercial client platforms, academic architecture systems, and computer graphics implementations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              
              <div className="project-card-header">
                <span className="badge badge-accent">{project.category}</span>
                <div className="project-quick-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-quick-link"
                      title="Live Platform"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.demoVideoUrl && (
                    <a
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-quick-link"
                      title="YouTube Video Demo"
                    >
                      <Video size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-quick-link"
                      title="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.shortDescription}</p>

              <div className="project-tech-preview">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-badge-sm">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-badge-sm more-badge">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              <div className="project-card-footer">
                <button
                  className="btn btn-outline btn-sm btn-block"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={14} />
                  <span>View Details & Architecture</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Active Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
