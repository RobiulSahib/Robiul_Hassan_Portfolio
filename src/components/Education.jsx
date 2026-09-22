import React from 'react';
import { Award, BookOpen, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Education() {
  const { education } = profileData;

  return (
    <section className="section section-alt" id="education">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Academic Qualifications</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal Computer Science training at one of Bangladesh's premier private institutions.
          </p>
        </div>

        <div className="education-card">
          <div className="edu-header">
            <div className="edu-icon-box">
              <GraduationCap size={28} />
            </div>
            <div className="edu-titles">
              <h3 className="edu-degree">{education.degree}</h3>
              <p className="edu-inst">
                {education.institution} • {education.location}
              </p>
            </div>
            <div className="edu-dates">
              <Calendar size={15} />
              <span>{education.period}</span>
            </div>
          </div>

          <div className="edu-body">
            <div className="edu-metrics-row">
              <div className="edu-cgpa-box">
                <span className="edu-cgpa-label">Cumulative GPA</span>
                <span className="edu-cgpa-val">{education.cgpa}</span>
                <span className="edu-cgpa-scale">Grading Scale: 4.00 Max</span>
              </div>

              <div className="edu-award-box">
                <div className="award-header">
                  <Award size={18} className="award-icon" />
                  <strong>{education.award}</strong>
                </div>
                <p className="award-note">
                  {education.awardNote}. Conferred to qualifying graduates with CGPA in the 3.50–3.64 band.
                </p>
              </div>
            </div>

            <div className="coursework-section">
              <h4 className="coursework-title">
                <BookOpen size={16} />
                Key Coursework & Foundations
              </h4>
              <div className="coursework-grid">
                {education.coursework.map((course, idx) => (
                  <span key={idx} className="course-chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
