import { useEffect } from 'react';
import RealEstateNavbar from '../components/real-estate/RealEstateNavbar';
import RealEstateHero from '../components/real-estate/RealEstateHero';
import RealEstateTrustStrip from '../components/real-estate/RealEstateTrustStrip';
import RealEstateBuyerMatrix from '../components/real-estate/RealEstateBuyerMatrix';
import RealEstateVideoGallery from '../components/real-estate/RealEstateVideoGallery';
import RealEstateAIFacelessSection from '../components/real-estate/RealEstateAIFacelessSection';
import RealEstateBeforeAfter from '../components/real-estate/RealEstateBeforeAfter';
import RealEstateServices from '../components/real-estate/RealEstateServices';
import RealEstateHooksLeadMagnet from '../components/real-estate/RealEstateHooksLeadMagnet';
import RealEstateWorkflow from '../components/real-estate/RealEstateWorkflow';
import RealEstatePackages from '../components/real-estate/RealEstatePackages';
import RealEstateFAQ from '../components/real-estate/RealEstateFAQ';
import RealEstateFreeSampleForm from '../components/real-estate/RealEstateFreeSampleForm';
import RealEstateFooter from '../components/real-estate/RealEstateFooter';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const RealEstatePage = () => {
  useEffect(() => {
    document.title = 'Real Estate Video Editing & Growth for US Realtors | Arafat Jan';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-[#0d7a3a] selection:text-white">
      {/* Sticky Real Estate Navbar */}
      <RealEstateNavbar />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section with Real Estate Video Mockup */}
        <RealEstateHero />

        {/* 2. 4-Column Trust & Metric Strip */}
        <RealEstateTrustStrip />

        {/* 3. Data-Driven Buyer Persona & Targeting Matrix */}
        <RealEstateBuyerMatrix />

        {/* 5. 10-Video Interactive Portfolio Showcase with Lightbox */}
        <RealEstateVideoGallery />

        {/* 6. AI Avatar & Faceless Video Creation */}
        <RealEstateAIFacelessSection />

        {/* 7. Before vs After Polished Edit Comparison */}
        <RealEstateBeforeAfter />

        {/* 8. 4 Specialized Real Estate Services */}
        <RealEstateServices />

        {/* 9. Free Lead Magnet: 50 Viral Hooks & Scripts Swipe-File */}
        <RealEstateHooksLeadMagnet />

        {/* 10. 3-Step Frictionless Workflow */}
        <RealEstateWorkflow />

        {/* 11. Transparent Pricing & Retainer Packages */}
        <RealEstatePackages />

        {/* 12. US Realtor FAQ Accordion */}
        <RealEstateFAQ />

        {/* 13. High-Converting Free Sample Request Form */}
        <RealEstateFreeSampleForm />
      </main>

      {/* Real Estate Footer */}
      <RealEstateFooter />

      {/* 24/7 Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default RealEstatePage;
