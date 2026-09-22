import React from 'react';
import { Award, BookOpen, CheckCircle2, Code2, Globe2, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Academic Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Computer Science graduate bridging applied machine learning research with scalable web engineering.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Main Bio Content */}
          <div className="about-content">
            <h3 className="about-heading">
              Preparing for Master's Studies in Computer Science in Australia
            </h3>
            <p className="about-paragraph">
              {profileData.summary}
            </p>
            <p className="about-paragraph">
              My academic journey has balanced theoretical rigor with applied problem-solving. Through my undergraduate thesis, I developed machine learning pipelines handling complex acoustic and linguistic data for rural healthcare screening. Concurrently, my professional experience across software firms instilled robust software engineering habits—writing type-safe code, designing relational and document schemas, and deploying microservices.
            </p>

            <div className="about-highlights-list">
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <div>
                  <strong>Rigorous Academic Foundation:</strong> Completed 4-year B.Sc. in Computer Science and Engineering at BRAC University with a 3.50/4.00 CGPA.
                </div>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <div>
                  <strong>Applied ML & Audio/NLP Experience:</strong> Designed and defended a multimodal thesis achieving 94.12% depression detection accuracy with clinical acoustic features.
                </div>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <div>
                  <strong>Production Software Engineering:</strong> Built and shipped scalable client platforms using React, Next.js, TypeScript, Node.js, and PostgreSQL across two software agencies.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Academic Card */}
          <div className="about-card">
            <div className="card-badge">Academic Snapshot</div>
            <h4 className="card-title">BRAC University</h4>
            <p className="card-subtitle">B.Sc. in Computer Science and Engineering</p>
            
            <div className="card-metric-row">
              <span className="card-metric-label">Cumulative GPA</span>
              <span className="card-metric-val">3.50 / 4.00</span>
            </div>

            <div className="card-metric-row">
              <span className="card-metric-label">Honors Eligibility</span>
              <span className="card-metric-val text-accent">Distinction Award</span>
            </div>

            <div className="distinction-note-box">
              <Award size={16} />
              <span>
                <strong>Distinction Award:</strong> Eligible under BRAC University honors criteria (CGPA 3.50 – 3.64). To be officially conferred upon degree completion.
              </span>
            </div>

            <div className="card-tag-section">
              <span className="tag-label">Target Focus Areas:</span>
              <div className="tags-flex">
                <span className="tag-item">Intelligent Systems</span>
                <span className="tag-item">Speech & NLP</span>
                <span className="tag-item">Distributed Architectures</span>
                <span className="tag-item">Full-Stack Engineering</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
