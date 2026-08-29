import FadeIn from './FadeIn';
import { 
  Video, 
  ShieldAlert, 
  TrendingUp, 
  Globe, 
  Palette, 
  Share2, 
  Bot, 
  ArrowUpRight,
  MessageCircle,
  Sparkles
} from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Sparkles,
    name: 'UGC & DTC Ad Creative Production',
    sub: 'High-Converting Paid Social Ads',
    desc: 'Scroll-stopping UGC video ads for TikTok Spark Ads, Meta Reels & YouTube Shorts. Hook-driven scripting, fast 24-48h turnaround, and A/B creative testing.',
    features: ['TikTok, Reels & Shorts Optimized', 'Scroll-Stopping Hook Scripting', 'A/B Creative Variations & Fast 24-48h Delivery'],
  },
  {
    num: '02',
    icon: Video,
    name: 'Video Editing & Motion Graphics',
    sub: 'Cinematic Post-Production',
    desc: 'High-retention editing for YouTube, TikTok, Instagram Reels, Commercials, Color Grading, Sound FX & Motion Graphics that stop the scroll.',
    features: ['YouTube & Short-form Mastery', 'Color Grading & Audio Enhancement', 'Dynamic Subtitles & Motion Graphics'],
  },
  {
    num: '03',
    icon: ShieldAlert,
    name: 'Ethical Hacking & Cybersecurity',
    sub: 'Security & Penetration Testing',
    desc: 'Comprehensive vulnerability assessments, penetration testing, server hardening, malware removal, and code audits to safeguard your business assets.',
    features: ['Web App Penetration Testing', 'Server Hardening & Firewall Setup', 'Malware Removal & Security Audits'],
  },
  {
    num: '04',
    icon: TrendingUp,
    name: 'Performance Digital Marketing',
    sub: 'Paid Ads & Lead Generation',
    desc: 'High-ROI Meta & Google Ads campaigns, laser-targeted audience research, high-converting sales funnels, and data-driven scaling strategies.',
    features: ['Meta & Google Ads Management', 'High-Converting Sales Funnels', 'Data Tracking & Pixel Optimization'],
  },
  {
    num: '05',
    icon: Globe,
    name: 'Website Design & Development',
    sub: 'Modern UI/UX & Full-Stack',
    desc: 'Blazing fast, responsive websites and landing pages built with React, Next.js, TypeScript, Tailwind CSS, or WordPress tailored for maximum conversion.',
    features: ['High-Conversion Landing Pages', 'Custom WordPress & Modern React/Next.js', 'Speed & Technical SEO Optimized'],
  },
  {
    num: '06',
    icon: Palette,
    name: 'Graphic Design & Brand Identity',
    sub: 'Visual Storytelling',
    desc: 'Distinctive visual identities including Logos, Social Media Creatives, Pitch Decks, Banners, and Brand Guidelines that set your brand apart.',
    features: ['Logo & Comprehensive Brand Kit', 'High-CTR Social Ad Creatives', 'Pitch Decks & Marketing Materials'],
  },
  {
    num: '07',
    icon: Share2,
    name: 'Social Media Growth & Marketing',
    sub: 'Organic & Paid Audience Scaling',
    desc: 'Strategic social media management, virality frameworks, audience retention systems, and cohesive content calendars across all major platforms.',
    features: ['Channel Optimization & Branding', 'Content Scheduling & Strategy', 'Audience Growth & Engagement'],
  },
  {
    num: '08',
    icon: Bot,
    name: 'Workflow & Business Automation',
    sub: 'Smart AI & Integrations',
    desc: 'Custom Zapier & Make.com workflows, automated AI chatbots, CRM sync, and auto-responders that eliminate manual friction and save hours weekly.',
    features: ['Zapier & Make.com Automation', 'AI Chatbots & ManyChat Systems', 'CRM & WhatsApp API Integration'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F4F9F5] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#0d7a3a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#0d7a3a] font-bold text-sm sm:text-base uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d7a3a] tracking-tight">
              High-Impact Services I Offer
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-5" />
            <p className="text-gray-600 text-base sm:text-lg">
              Specialized digital solutions engineered to elevate your brand, secure your assets, and accelerate your business growth.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.num} delay={idx * 0.08} y={30}>
                <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl border border-gray-100 hover:border-[#0d7a3a]/40 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1.5 relative overflow-hidden">
                  
                  {/* Top Row: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0d7a3a]/10 text-[#0d7a3a] flex items-center justify-center group-hover:bg-[#0d7a3a] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon size={28} />
                    </div>
                    <span className="text-3xl font-black text-gray-200 group-hover:text-[#0d7a3a]/30 transition-colors font-['Plus_Jakarta_Sans']">
                      {service.num}
                    </span>
                  </div>

                  {/* Titles */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#0d7a3a] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0d7a3a] mb-3">
                    {service.sub}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 border-t border-gray-100 pt-4 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0d7a3a]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={`https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.name)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-lg bg-gray-50 group-hover:bg-[#0d7a3a] text-gray-800 group-hover:text-white font-bold text-sm transition-all duration-300"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={16} />
                      Order or Inquire
                    </span>
                    <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Custom Project CTA Box */}
        <FadeIn delay={0.3} y={30}>
          <div className="mt-14 sm:mt-18 bg-gradient-to-r from-[#0d7a3a] to-[#15803d] rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Have a Custom Project or Enterprise Requirement?
              </h3>
              <p className="text-white/90 text-sm sm:text-base mb-6">
                Let&apos;s hop on a quick WhatsApp chat to discuss your scope, timeline, and get a tailored proposal.
              </p>
              <a
                href="https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20have%20a%20custom%20project%20scope%20to%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-[#0d7a3a] font-extrabold rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all text-base"
              >
                <MessageCircle size={20} />
                WhatsApp: +880 1930-537776
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default ServicesSection;


