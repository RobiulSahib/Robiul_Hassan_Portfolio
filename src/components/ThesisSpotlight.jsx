import React from 'react';
import { Award, CheckCircle2, ChevronRight, Cpu, ExternalLink, FileSearch, Layers, Sparkles, UserCheck } from 'lucide-react';
import { researchData } from '../data/research';

export default function ThesisSpotlight() {
  return (
    <section className="section" id="research">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Undergraduate Research</span>
          <h2 className="section-title">Thesis Spotlight</h2>
          <p className="section-subtitle">
            Multimodal machine-learning framework for depression and anxiety risk detection among rural women.
          </p>
        </div>

        {/* Main Research Card */}
        <div className="research-main-card">
          
          {/* Header Strip */}
          <div className="research-header-strip">
            <div>
              <div className="research-status-row">
                <span className="badge badge-success">Status: {researchData.status}</span>
                <span className="badge badge-neutral">{researchData.period}</span>
                <span className="badge badge-accent">BRAC University CSE</span>
              </div>
              <h3 className="research-title">{researchData.title}</h3>
            </div>
          </div>

          {/* Supervisors Section */}
          <div className="supervisors-box">
            <span className="supervisors-label">Supervisory Committee:</span>
            <div className="supervisors-list">
              {researchData.supervisors.map((sup, idx) => (
                <div key={idx} className="supervisor-item">
                  <UserCheck size={16} className="sup-icon" />
                  <div>
                    <span className="sup-title">{sup.title}: </span>
                    <a
                      href={sup.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sup-name"
                    >
                      {sup.name}
                      <ExternalLink size={12} className="inline-icon" />
                    </a>
                    <span className="sup-role"> ({sup.role})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="research-body">
            <h4 className="research-section-heading">Research Context & Problem</h4>
            <p className="research-text">{researchData.overview}</p>

            <h4 className="research-section-heading">Technical Highlights & Pipeline</h4>
            <ul className="research-highlights-grid">
              {researchData.technicalHighlights.map((item, idx) => (
                <li key={idx} className="highlight-pill">
                  <CheckCircle2 size={16} className="pill-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Results Benchmarking Table */}
            <h4 className="research-section-heading" style={{ marginTop: '24px' }}>
              Final Evaluation Results & Benchmarks
            </h4>
            <div className="table-responsive">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Clinical Target</th>
                    <th>Modality / Representation</th>
                    <th>Model Architecture</th>
                    <th>Accuracy</th>
                    <th>Macro F1</th>
                    <th>ROC-AUC</th>
                  </tr>
                </thead>
                <tbody>
                  {researchData.results.map((res, idx) => (
                    <tr key={idx} className={res.highlight ? 'row-highlight' : ''}>
                      <td>
                        <strong>{res.task}</strong>
                        {res.badge && <span className="table-tag">{res.badge}</span>}
                      </td>
                      <td>{res.modality}</td>
                      <td><code>{res.classifier}</code></td>
                      <td className="metric-cell"><strong>{res.accuracy}</strong></td>
                      <td className="metric-cell"><strong>{res.macroF1}</strong></td>
                      <td className="metric-cell">{res.rocAuc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Keywords */}
            <div className="research-keywords-row">
              <span className="keywords-label">Methodologies & Tools:</span>
              <div className="keywords-flex">
                {researchData.keywords.map((kw, idx) => (
                  <span key={idx} className="keyword-chip">{kw}</span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
