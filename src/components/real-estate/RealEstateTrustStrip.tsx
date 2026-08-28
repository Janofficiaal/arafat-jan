import FadeIn from '../FadeIn';
import { Film, Clock, DollarSign, Award } from 'lucide-react';

const metrics = [
  {
    icon: Film,
    value: '300+',
    label: 'Real Estate Videos Edited',
    sub: 'Reels, Drone Tours & Shorts',
  },
  {
    icon: Clock,
    value: '24–48h',
    label: 'Guaranteed Turnaround',
    sub: 'Always ahead of open houses',
  },
  {
    icon: DollarSign,
    value: '$50M+',
    label: 'Listing Value Showcased',
    sub: 'Across US luxury markets',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Client Satisfaction',
    sub: 'Unlimited revisions included',
  },
];

const RealEstateTrustStrip = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-10 sm:py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <FadeIn key={m.label} delay={idx * 0.08} y={15}>
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-gray-50/70 border border-gray-100/90 hover:border-[#0d7a3a]/30 hover:bg-white hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-[#0d7a3a]/10 text-[#0d7a3a] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight font-['Plus_Jakarta_Sans']">
                    {m.value}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#0d7a3a] mt-1">
                    {m.label}
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    {m.sub}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Brokerage Trust Badges Bar */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-gray-400 text-xs font-semibold uppercase tracking-wider">
          <span className="text-gray-500 font-bold">Editing Styles Optimized For:</span>
          <span>Instagram Reels</span>
          <span>•</span>
          <span>TikTok For Real Estate</span>
          <span>•</span>
          <span>YouTube Shorts</span>
          <span>•</span>
          <span>Zillow & MLS Tours</span>
          <span>•</span>
          <span>Facebook Ads</span>
        </div>

      </div>
    </section>
  );
};

export default RealEstateTrustStrip;

