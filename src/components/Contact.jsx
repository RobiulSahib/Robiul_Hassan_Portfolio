import React from 'react';
import { FileText, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Connect</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to prospective Master's inquiries, academic collaborations, and software engineering opportunities.
          </p>
        </div>

        <div className="contact-wrapper">
          
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <h3 className="contact-card-title">Contact Information</h3>
            <p className="contact-card-desc">
              Feel free to reach out via email or connect with me on LinkedIn and GitHub.
            </p>

            <div className="contact-details-list">
              <a href={`mailto:${profileData.email}`} className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact-item-label">Email Address</span>
                  <span className="contact-item-val">{profileData.email}</span>
                </div>
              </a>

              <a href={`tel:${profileData.phone}`} className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact-item-label">Phone / WhatsApp</span>
                  <span className="contact-item-val">{profileData.phone}</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-item-label">Current Location</span>
                  <span className="contact-item-val">{profileData.location}</span>
                </div>
              </div>
            </div>

            <div className="social-links-row">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <Github size={16} />
                <span>GitHub Profile</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Academic Inquiries Action Card */}
          <div className="contact-action-card">
            <div className="action-card-badge">Academic Application Notice</div>
            <h3 className="action-card-title">Prospective Postgraduate Study</h3>
            <p className="action-card-text">
              I am actively preparing applications for Master of Computer Science programs in Australia. Admissions committees, potential research supervisors, or collaborators are welcome to review my complete 2-page academic CV or initiate contact directly.
            </p>

            <div className="action-card-buttons">
              <a
                href={`mailto:${profileData.email}?subject=Master's%20Program%20Inquiry%20-%20Md.%20Robiul%20Hassan`}
                className="btn btn-primary btn-block"
              >
                <Send size={16} />
                <span>Send Direct Email</span>
              </a>
              <a
                href={profileData.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-block"
              >
                <FileText size={16} />
                <span>Open Printable 2-Page CV (PDF)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
