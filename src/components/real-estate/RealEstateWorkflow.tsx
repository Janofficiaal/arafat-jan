import FadeIn from '../FadeIn';
import { UploadCloud, Wand2, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: UploadCloud,
    title: 'Drop Your Raw Clips',
    timeframe: 'Takes 2 Minutes',
    description: 'Simply record with your iPhone, drone, or professional camera. Drop your raw video files into a shared Google Drive, Dropbox, or Frame.io folder.',
    details: ['No renaming or sorting required', 'iPhone 4K / Gimbal / Drone files accepted', 'Include any specific seller bullet points'],
  },
  {
    step: '02',
    icon: Wand2,
    title: '24–48h High-Retention Magic',
    timeframe: '24–48h Turnaround',
    description: 'I cut the dead air, craft an attention-grabbing hook, color grade interior lighting, sync trending audio, and add dynamic animated subtitles.',
    details: ['MLS-compliant unbranded exports', 'Color graded for luxury appeal', 'Unlimited revisions until 100% satisfied'],
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Review, Post & Win Listings',
    timeframe: 'Instant Download',
    description: 'Receive crisp, ready-to-post vertical Reels and 4K tours. Post directly to Instagram, TikTok, YouTube & MLS and watch your inbound DMs soar.',
    details: ['Pre-formatted captions & hashtag suggestions', 'Exported in full resolution with zero compression', 'Ready for both organic & paid ad campaigns'],
  },
];

const RealEstateWorkflow = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#F4F9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Frictionless Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              How We Work Together (Takes 2 Mins of Your Time)
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              You focus on closing deals and meeting sellers. I handle 100% of your video post-production.
            </p>
          </div>
        </FadeIn>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.step} delay={idx * 0.12} y={25}>
                <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#0d7a3a]/40 transition-all duration-300 flex flex-col h-full relative group">
                  
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0d7a3a] text-white flex items-center justify-center font-extrabold shadow-lg shadow-[#0d7a3a]/25 group-hover:scale-105 transition-transform">
                      <Icon size={26} />
                    </div>
                    <span className="text-3xl font-black text-gray-200 font-['Plus_Jakarta_Sans']">
                      STEP {s.step}
                    </span>
                  </div>

                  {/* Title & Timeframe */}
                  <div className="mb-3">
                    <span className="inline-block text-[11px] font-extrabold text-[#0d7a3a] bg-[#0d7a3a]/10 px-2.5 py-0.5 rounded-md mb-2">
                      {s.timeframe}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0d7a3a] transition-colors">
                      {s.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {s.description}
                  </p>

                  {/* Details Bullet List */}
                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    {s.details.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 size={14} className="text-[#0d7a3a] flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Guarantee Pill */}
        <FadeIn delay={0.3} y={15}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#0d7a3a]/30 text-gray-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="text-green-600 font-bold">⚡ Zero Contract Required</span>
              <span>•</span>
              <span>Cancel Anytime or Upgrade as Your Listing Volume Scales</span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default RealEstateWorkflow;

