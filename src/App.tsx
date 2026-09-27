import React, { useState } from 'react';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ProfilePhotoProvider>
      <div className="relative min-h-screen bg-[#090A10] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-white">
        {/* Top Navbar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

          {/* 2. About Me */}
          <AboutSection />

          {/* 3. Skills */}
          <SkillsSection />

          {/* 4. Projects Showcase */}
          <ProjectsSection />

          {/* 5. Experience */}
          <ExperienceSection />

          {/* 6. Education */}
          <EducationSection />

          {/* 7. Services & Resume CTA */}
          <ServicesSection onOpenResume={() => setIsResumeOpen(true)} />

          {/* 8. Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Resume Modal with Print & Plain Text Download */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ProfilePhotoProvider>
  );
}
