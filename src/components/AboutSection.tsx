import FadeIn from './FadeIn';
import { MessageCircle, CheckCircle, Award, Users, Briefcase } from 'lucide-react';

const stats = [
  {
    value: '550+',
    label: 'Projects Completed',
    sub: 'Delivered Worldwide',
    icon: Briefcase,
  },
  {
    value: '450+',
    label: 'Satisfied Clients',
    sub: 'From 20+ Countries',
    icon: Users,
  },
  {
    value: '10+',
    label: 'Years of Experience',
    sub: 'Proven Track Record',
    icon: Award,
  },
];

const highlights = [
  'Cinematic Video Editing, Motion & Audio Mastery',
  'Conversion-Focused Web Design & Modern Web Dev',
  'Data-Driven Meta & Google Ads Campaigns',
  'Strategic Social Media Growth & Branding',
  'Penetration Testing & Cyber Security Audits',
  'Zapier & Make.com Workflow Automation',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0d7a3a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-14 sm:mb-18">
            <span className="text-[#0d7a3a] font-bold text-sm sm:text-base uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0d7a3a] tracking-tight">
              About My Journey & Vision
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full" />
          </div>
        </FadeIn>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeIn delay={0.15} x={-30} y={0}>
              <div className="relative max-w-[380px] sm:max-w-[420px] w-full">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 sm:-inset-4 border-2 border-[#0d7a3a]/25 rounded-[32px] transform -rotate-2" />
                
                <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-[#0d7a3a]/5 border-4 border-white">
                  <img
                    src="/arafat-jan.jpg"
                    alt="Arafat Jan"
                    className="w-full aspect-[4/5] object-cover object-center hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay bottom info */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold">Arafat Jan</h3>
                    <p className="text-sm text-green-300 font-medium">Digital Specialist & Tech Problem Solver</p>
                  </div>
                </div>

                {/* Floating Experience Tag */}
                <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-white border border-gray-100 p-3 sm:p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0d7a3a] text-white flex items-center justify-center font-black text-xl shadow-md">
                    10+
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Years of</p>
                    <p className="text-sm font-bold text-gray-900">Global Experience</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Text & Stats */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={20}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                Helping Global Businesses Turn Complex Challenges into Scalable Growth
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                I am <strong className="text-[#0d7a3a]">Arafat Jan</strong>, a versatile digital specialist with over 10+ years of hands-on experience helping international businesses, creators, and agencies excel across multiple digital disciplines.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                From producing high-retention video content that captivates audiences to building bulletproof secure systems, running profit-generating ad campaigns, and architecting lightning-fast websites — I provide end-to-end execution with world-class standards and unmatched turnaround times.
              </p>
            </FadeIn>

            {/* Highlights bullet grid */}
            <FadeIn delay={0.3} y={20}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle size={18} className="text-[#0d7a3a] flex-shrink-0" />
                    <span className="text-gray-800 text-sm sm:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* More About Me Button */}
            <FadeIn delay={0.35} y={20}>
              <div className="mb-10">
                <a
                  href="https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20want%20to%20know%20more%20about%20your%20background%20and%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-md border-2 border-[#0d7a3a] text-[#0d7a3a] font-bold hover:bg-[#0d7a3a] hover:text-white transition-all duration-300 shadow-sm"
                >
                  <MessageCircle size={18} />
                  More About My Background
                </a>
              </div>
            </FadeIn>

            {/* Stats Cards Row */}
            <FadeIn delay={0.4} y={20}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-2 border-[#0d7a3a]/20 rounded-2xl p-5 text-center hover:border-[#0d7a3a] hover:shadow-lg transition-all duration-300 group"
                  >
                    <stat.icon size={28} className="text-[#0d7a3a] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-3xl sm:text-4xl font-extrabold text-[#0d7a3a] font-['Plus_Jakarta_Sans']">
                      {stat.value}
                    </h4>
                    <p className="text-gray-900 font-bold text-sm sm:text-base mt-1">
                      {stat.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;


