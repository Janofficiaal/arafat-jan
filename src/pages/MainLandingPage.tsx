import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const MainLandingPage = () => {
  useEffect(() => {
    document.title = 'Arafat Jan | Video Editor, Ethical Hacker, Digital Marketer & Web Specialist';
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-[#0d7a3a] selection:text-white">
      {/* Fixed Header / Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 24/7 Floating WhatsApp Chat Trigger */}
      <FloatingWhatsApp />
    </div>
  );
};

export default MainLandingPage;
