import FadeIn from './FadeIn';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const coreSkills = [
  'Video Editing & Motion',
  'Ethical Hacking & Cyber Security',
  'Digital Marketing & Ads',
  'Website Design & Dev',
  'Graphics Design & Branding',
  'Workflow & Bot Automation'
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-[#F3F9F5] via-[#FAFDFB] to-white pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#0d7a3a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#16a34a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <FadeIn delay={0.1} y={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d7a3a]/10 border border-[#0d7a3a]/20 text-[#0d7a3a] font-semibold text-sm mb-4">
                <Sparkles size={16} className="text-[#0d7a3a] animate-pulse" />
                <span>Available for Global Freelance & Remote Contracts</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={20}>
              <p className="text-gray-700 font-semibold text-xl sm:text-2xl md:text-3xl mb-1 font-['Plus_Jakarta_Sans']">
                Hi There,
              </p>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-[#0d7a3a] leading-[1.1] tracking-tight mb-5 font-['Plus_Jakarta_Sans']">
                I&apos;m Arafat Jan
              </h1>
            </FadeIn>

            <FadeIn delay={0.4} y={20}>
              <p className="text-gray-700 font-normal text-base sm:text-lg md:text-[19px] leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                A multi-disciplinary <strong className="text-[#0d7a3a] font-bold">Digital Creator & Specialist</strong> helping brands, startups, and international businesses scale with high-retention <strong className="text-[#0d7a3a]">Video Editing</strong>, bulletproof <strong className="text-[#0d7a3a]">Ethical Hacking</strong>, high-ROI <strong className="text-[#0d7a3a]">Digital Marketing</strong>, modern <strong className="text-[#0d7a3a]">Website Design</strong>, impactful <strong className="text-[#0d7a3a]">Graphics</strong>, and intelligent <strong className="text-[#0d7a3a]">Business Automation</strong>.
              </p>
            </FadeIn>

            {/* Feature Pills */}
            <FadeIn delay={0.45} y={20}>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-8">
                {coreSkills.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium bg-white text-gray-700 px-3 py-1.5 rounded-md border border-gray-200 shadow-sm">
                    <CheckCircle2 size={14} className="text-[#0d7a3a]" />
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.5} y={20}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                <a
                  href="https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20want%20to%20hire%20you%20for%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0d7a3a] text-white font-bold rounded-lg hover:bg-[#0a632e] hover:shadow-lg hover:shadow-[#0d7a3a]/25 transition-all duration-300 text-base shadow-md group"
                >
                  <MessageCircle size={20} />
                  Contact Me
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#0d7a3a] text-[#0d7a3a] font-bold rounded-lg hover:bg-[#0d7a3a] hover:text-white transition-all duration-300 text-base bg-white"
                >
                  My Services
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Portrait Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <FadeIn delay={0.25} x={30} y={0} duration={0.8}>
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px]">
                
                {/* Decorative Green Splash Backdrop */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#0d7a3a] to-[#22c55e] rounded-[40px] opacity-15 transform -rotate-3 blur-sm" />
                <div className="absolute inset-0 bg-[#0d7a3a] rounded-[32px] transform rotate-2 opacity-10" />

                {/* Main Card Container */}
                <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[32px] shadow-2xl border border-gray-100/80">
                  <div className="overflow-hidden rounded-[24px] bg-gradient-to-b from-[#e8f5ed] to-[#d3ede0] aspect-[4/5] relative">
                    <img
                      src="/arafat-jan.jpg"
                      alt="Arafat Jan"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    {/* Floating Verified Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0d7a3a] flex items-center justify-center text-white font-bold">
                          <ShieldCheck size={22} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Verified Specialist</p>
                          <p className="text-sm font-bold text-gray-900">Arafat Jan</p>
                        </div>
                      </div>
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0d7a3a]"></span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Satisfaction Badge */}
                <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-[#0d7a3a] text-white py-2 px-4 rounded-xl shadow-xl z-20 flex items-center gap-2 text-xs sm:text-sm font-bold animate-bounce duration-1000">
                  <span>★</span>
                  <span>100% Client Satisfaction</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;


