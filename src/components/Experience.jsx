import React from 'react';
import { Briefcase, Building, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Industry Track Record</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on software development experience across client agencies and corporate internship.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((job, idx) => (
            <div key={idx} className="timeline-item">
              
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {idx !== experienceData.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="exp-card">
                  
                  <div className="exp-card-header">
                    <div>
                      <div className="exp-company-row">
                        <h3 className="exp-company">{job.company}</h3>
                        <span className="badge badge-neutral">{job.type}</span>
                      </div>
                      <h4 className="exp-role">{job.role}</h4>
                    </div>

                    <div className="exp-meta-col">
                      <span className="exp-date">
                        <Calendar size={14} />
                        {job.period}
                      </span>
                      <span className="exp-location">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="exp-desc">{job.description}</p>

                  <ul className="exp-bullets">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="exp-bullet-item">
                        <CheckCircle2 size={15} className="bullet-check" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-skills-row">
                    <span className="skills-row-label">Technologies:</span>
                    <div className="skills-row-tags">
                      {job.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="exp-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
