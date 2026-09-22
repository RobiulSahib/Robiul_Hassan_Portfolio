import React from 'react';
import { skillsData } from '../data/skills';

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Technical Competencies</span>
          <h2 className="section-title">Skills & Tooling</h2>
          <p className="section-subtitle">
            Demonstrated capabilities acquired through undergraduate coursework, thesis research, and commercial engineering.
          </p>
        </div>

        <div className="skills-card-grid">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skill-category-card">
              <h3 className="skill-card-title">{group.category}</h3>
              <p className="skill-card-desc">{group.description}</p>
              
              <div className="skill-chip-wrap">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
