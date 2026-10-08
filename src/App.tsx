/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { FeaturedProjectSection } from './sections/FeaturedProjectSection';
import { OtherProjectsSection } from './sections/OtherProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { CurrentlyLearningSection } from './sections/CurrentlyLearningSection';
import { ContactSection } from './sections/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { projects, certificationData } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8faf9] dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero */}
          <HeroSection />

          {/* 2. About Me */}
          <AboutSection />

          {/* 3. Technical Skills */}
          <SkillsSection />

          {/* 4. Featured Project (NEW ERA Engineering Solutions) */}
          <FeaturedProjectSection
            project={featuredProject}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />

          {/* 5. Other Projects (Authentication API & Railway Management System) */}
          <OtherProjectsSection
            projects={otherProjects}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />

          {/* 6. Experience (Freelance Full Stack Developer) */}
          <ExperienceSection />

          {/* 7. Education Timeline */}
          <EducationSection />

          {/* 8. Certifications */}
          <CertificationsSection
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />

          {/* 9. Currently Learning Roadmap */}
          <CurrentlyLearningSection />

          {/* 10. Contact Section */}
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Modals */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <CertificateModal
          certification={certificationData}
          isOpen={isCertificateOpen}
          onClose={() => setIsCertificateOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
