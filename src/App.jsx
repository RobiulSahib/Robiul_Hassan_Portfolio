import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import ThesisSpotlight from './components/ThesisSpotlight';
import Experience from './components/Experience';
import ProjectsGallery from './components/ProjectsGallery';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <ThesisSpotlight />
        <Experience />
        <ProjectsGallery />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
