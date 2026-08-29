import { useEffect } from 'react';
import UgcNavbar from '../components/ugc-ads/UgcNavbar';
import UgcHero from '../components/ugc-ads/UgcHero';
import UgcTrustStrip from '../components/ugc-ads/UgcTrustStrip';
import UgcVideoGallery from '../components/ugc-ads/UgcVideoGallery';
import UgcServices from '../components/ugc-ads/UgcServices';
import UgcWorkflow from '../components/ugc-ads/UgcWorkflow';
import UgcPackages from '../components/ugc-ads/UgcPackages';
import UgcFAQ from '../components/ugc-ads/UgcFAQ';
import UgcFreeSampleForm from '../components/ugc-ads/UgcFreeSampleForm';
import UgcFooter from '../components/ugc-ads/UgcFooter';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const UgcAdsPage = () => {
  useEffect(() => {
    document.title = 'UGC & Ad Creative Editing for DTC Brands | Arafat Jan';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-[#7C3AED] selection:text-white">
      {/* Sticky UGC Navbar */}
      <UgcNavbar />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <UgcHero />

        {/* 2. Trust & Metric Strip */}
        <UgcTrustStrip />

        {/* 3. Video Portfolio Gallery */}
        <UgcVideoGallery />

        {/* 4. Specialized UGC Services */}
        <UgcServices />

        {/* 5. 3-Step Workflow */}
        <UgcWorkflow />

        {/* 6. Pricing Packages */}
        <UgcPackages />

        {/* 7. FAQ Accordion */}
        <UgcFAQ />

        {/* 8. Free Sample Form */}
        <UgcFreeSampleForm />
      </main>

      {/* Footer */}
      <UgcFooter />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default UgcAdsPage;
