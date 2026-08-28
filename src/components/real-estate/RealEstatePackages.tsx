import FadeIn from '../FadeIn';
import { CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';

const packages = [
  {
    name: 'Single Listing Launch Kit',
    badge: 'FAST 24H DELIVERY',
    price: '$129',
    period: '/per listing',
    description: 'Perfect for launching an active new listing or open house with high-retention social media assets.',
    features: [
      '1 High-Retention Vertical Reel (9:16)',
      '1 Full Property Video Walkthrough (16:9)',
      '3 Animated Instagram Story RSVP Graphics',
      'Dynamic kinetic subtitles & sound design',
      'Guaranteed 24-hour rush delivery',
      'MLS-Compliant unbranded export included',
    ],
    popular: false,
    ctaText: 'Order Single Listing Kit',
  },
  {
    name: 'All-In-One Growth Partner',
    badge: 'MOST POPULAR • COMPLETE DOMINANCE',
    price: '$500',
    period: '/month',
    description: 'The complete 30-day growth engine for ambitious Realtors: Daily Reels, Daily Posts, Website Maintenance & Local Client Hunting.',
    features: [
      '🔥 Daily 1 Vertical Reel / Short (30 High-Retention Reels/mo)',
      '🔥 Daily 1 Facebook & Instagram Post (30 Custom Graphics/mo)',
      '🌐 Full Website Maintenance & Speed Optimization',
      '🎯 Active Local Client Hunting & Targeted Outreach',
      '✨ Viral Hook Scripting, Pacing & Sound FX',
      '⚡ 24-Hour VIP Priority Turnaround',
      '💬 Dedicated 24/7 WhatsApp & Slack Channel',
      '🔄 100% Unlimited Revisions on All Deliverables',
    ],
    popular: true,
    ctaText: 'Hire for $500/Month',
  },
  {
    name: 'Luxury Brokerage Suite',
    badge: 'HIGH-VOLUME & TEAMS',
    price: 'Custom',
    period: '/team pricing',
    description: 'Tailored for real estate teams, boutique brokerages, and luxury agents needing dedicated multi-agent video scaling.',
    features: [
      'Unlimited video editing queue for your entire team',
      'Full 4K cinematic YouTube tours & drone mastering',
      'Custom brokerage brand kit & motion graphics',
      'Agent talking-head series & podcast cutdowns',
      'Weekly viral content strategy & trend briefings',
      'Dedicated senior video editor & Slack channel',
    ],
    popular: false,
    ctaText: 'Discuss Team Retainer',
  },
];

const RealEstatePackages = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Transparent Pricing & Retainers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Predictable, High-ROI Media Packages
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              No long-term contracts. Pause or cancel anytime. Get your first sample video 100% free before committing.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <FadeIn key={pkg.name} delay={idx * 0.1} y={25}>
              <div className={`rounded-3xl p-8 flex flex-col h-full relative transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#FAFDFB] to-white border-2 border-[#0d7a3a] shadow-2xl scale-105 z-10'
                  : 'bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-gray-300'
              }`}>
                
                {/* Popular Pill */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0d7a3a] text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles size={13} className="text-yellow-300" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  {!pkg.popular && (
                    <span className="inline-block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed min-h-[36px]">
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-100">
                  <span className="text-4xl sm:text-5xl font-black text-[#0d7a3a] font-['Plus_Jakarta_Sans']">
                    {pkg.price}
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    {pkg.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 flex-grow">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">What&apos;s Included:</p>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-[#0d7a3a] flex-shrink-0 mt-0.5" />
                      <span className={pkg.popular && fIdx < 4 ? 'font-bold text-gray-900' : ''}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <a
                  href={`https://wa.me/8801930537776?text=Hi%20Arafat,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20(${encodeURIComponent(pkg.price)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm ${
                    pkg.popular
                      ? 'bg-[#0d7a3a] text-white hover:bg-[#0a632e] hover:shadow-lg hover:shadow-[#0d7a3a]/25'
                      : 'border-2 border-[#0d7a3a] text-[#0d7a3a] hover:bg-[#0d7a3a] hover:text-white'
                  }`}
                >
                  <MessageCircle size={17} />
                  <span>{pkg.ctaText}</span>
                </a>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Custom Brokerage Team Note */}
        <FadeIn delay={0.3} y={15}>
          <div className="mt-14 text-center text-xs sm:text-sm text-gray-500">
            <span>Running a high-volume team or brokerage with custom requirements? </span>
            <a
              href="https://wa.me/8801930537776?text=Hi%20Arafat,%20we%20have%20a%20real%20estate%20team/brokerage%20and%20need%20a%20custom%20monthly%20retainer."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0d7a3a] font-bold underline hover:text-[#0a632e]"
            >
              Contact me for custom agency & volume rates →
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default RealEstatePackages;
