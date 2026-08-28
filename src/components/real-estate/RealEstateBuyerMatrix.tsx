import FadeIn from '../FadeIn';
import { 
  Target, 
  Sparkles, 
  Plane, 
  Users, 
  DollarSign, 
  Home, 
  Crown 
} from 'lucide-react';

// Crisp SVG Brand Icons
const InstagramIcon = () => (
  <svg className="w-3 h-3 fill-current text-pink-600" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-3 h-3 fill-current text-red-600" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-3 h-3 fill-current text-gray-900" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.86 4.47 6.27 6.27 0 0 0 1.93-4.48V8.62a8.17 8.17 0 0 0 4.8 1.55v-3.48z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3 h-3 fill-current text-blue-700" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

interface PersonaRow {
  persona: string;
  icon: React.ElementType;
  badge: string;
  demographics: string;
  channels: { name: string; icon: React.FC }[];
  engineeredFormat: string;
  primaryHook: string;
  metric: string;
  metricLabel: string;
}

const personaData: PersonaRow[] = [
  {
    persona: 'Out-of-State Relocators',
    icon: Plane,
    badge: 'High Intent Buyers',
    demographics: 'Ages 30–52 • California/NY to Sunbelt Movers',
    channels: [
      { name: 'YouTube', icon: YoutubeIcon },
      { name: 'Instagram', icon: InstagramIcon },
    ],
    engineeredFormat: 'Neighborhood & Lifestyle Vlogs, Commute Guides, School District Breakdowns',
    primaryHook: '"Thinking of moving to Austin in 2026? Watch this before choosing a neighborhood."',
    metric: '+240%',
    metricLabel: 'Inbound Relocation DMs',
  },
  {
    persona: 'Tech Millennial Families',
    icon: Users,
    badge: 'First Move-Up',
    demographics: 'Ages 28–42 • Dual Income No Kids / Young Kids',
    channels: [
      { name: 'Instagram', icon: InstagramIcon },
      { name: 'TikTok', icon: TikTokIcon },
    ],
    engineeredFormat: '30s Fast-Paced Smart Home Reels, Backyard Oasis Tours, Modern Kitchen Features',
    primaryHook: '"3 reasons why this modern floorplan is perfect for work-from-home couples."',
    metric: '3.8x',
    metricLabel: 'Video Retention Rate',
  },
  {
    persona: 'Real Estate Investors',
    icon: DollarSign,
    badge: 'Cash & DSCR Buyers',
    demographics: 'Ages 35–60 • High Net Worth, Portfolio Builders',
    channels: [
      { name: 'YouTube', icon: YoutubeIcon },
      { name: 'LinkedIn', icon: LinkedinIcon },
    ],
    engineeredFormat: 'Cap Rate Data Shorts, Short-Term Rental ROI Breakdowns, Off-Market Deal Walkthroughs',
    primaryHook: '"12% Pro-Forma Cap Rate: Complete cash-flow breakdown on this duplex."',
    metric: '4.2x',
    metricLabel: 'Faster Listing Closing',
  },
  {
    persona: 'First-Time Homebuyers',
    icon: Home,
    badge: 'High Engagement',
    demographics: 'Ages 24–35 • Young Professionals, Renters Ready to Buy',
    channels: [
      { name: 'TikTok', icon: TikTokIcon },
      { name: 'Instagram', icon: InstagramIcon },
    ],
    engineeredFormat: 'Down Payment Grant Explainers, Escrow Process in 30s, Hidden Costs Checklists',
    primaryHook: '"Stop paying your landlord’s mortgage: How to buy your first home with $0 down."',
    metric: '+180%',
    metricLabel: 'Saved & Shared Posts',
  },
  {
    persona: 'Luxury Estate Seekers',
    icon: Crown,
    badge: '$1M+ High Net Worth',
    demographics: 'Ages 40–68 • Executives, Celebrities & Wealthy Families',
    channels: [
      { name: 'YouTube', icon: YoutubeIcon },
      { name: 'Instagram', icon: InstagramIcon },
    ],
    engineeredFormat: '4K Twilight Drone Cinema, Architectural Sound Design, Mega-Mansion Walkthroughs',
    primaryHook: '"Inside the most private $4.5M waterfront compound in Florida."',
    metric: '$2M+',
    metricLabel: 'Average Listing Value',
  },
];

const RealEstateBuyerMatrix = () => {
  return (
    <section id="strategy-matrix" className="py-16 md:py-24 bg-[#FAFDFB] relative overflow-hidden border-y border-gray-100">
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0d7a3a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
              <Target size={15} />
              <span>Data-Driven Video Strategy</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Who Actually Buys Your Properties?
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              We don&apos;t just edit random videos — we engineer content specifically tailored to the psychology, attention spans, and decision triggers of active US property buyers.
            </p>
          </div>
        </FadeIn>

        {/* Matrix Data Card Table */}
        <FadeIn delay={0.15} y={25}>
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
            
            {/* Table Top Header Bar */}
            <div className="bg-[#0d7a3a] text-white px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                <Sparkles size={18} className="text-yellow-300" />
                <span>US Real Estate Buyer Persona & Video Conversion Matrix</span>
              </div>
              <span className="text-xs font-semibold text-white/80 bg-white/15 px-3 py-1 rounded-full w-fit">
                Live Market Data Framework
              </span>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[880px]">
                <thead>
                  <tr className="bg-gray-50/80 border-b border-gray-200 text-xs font-black text-gray-600 uppercase tracking-wider">
                    <th className="py-4 px-6">Buyer Persona</th>
                    <th className="py-4 px-6">Target Demographics</th>
                    <th className="py-4 px-6">Active Channels</th>
                    <th className="py-4 px-6">Engineered Video Format</th>
                    <th className="py-4 px-6 text-right">Conversion Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700">
                  {personaData.map((row, idx) => {
                    const Icon = row.icon;
                    return (
                      <tr 
                        key={row.persona} 
                        className={`transition-colors hover:bg-[#F3F9F5]/70 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFCFA]/60'
                        }`}
                      >
                        {/* Persona Name & Icon */}
                        <td className="py-5 px-6 font-bold text-gray-900">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#0d7a3a]/10 text-[#0d7a3a] flex items-center justify-center flex-shrink-0">
                              <Icon size={18} />
                            </div>
                            <div>
                              <p className="font-extrabold text-gray-900 text-sm">{row.persona}</p>
                              <span className="inline-block text-[10px] font-bold text-[#0d7a3a] bg-[#0d7a3a]/10 px-2 py-0.5 rounded-md mt-0.5">
                                {row.badge}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Demographics */}
                        <td className="py-5 px-6">
                          <p className="text-gray-600 text-xs leading-relaxed max-w-[200px]">
                            {row.demographics}
                          </p>
                        </td>

                        {/* Channels with Icons */}
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {row.channels.map((ch) => {
                              const ChIcon = ch.icon;
                              return (
                                <span 
                                  key={ch.name}
                                  className="inline-flex items-center gap-1 text-[11px] font-semibold bg-gray-100 text-gray-800 px-2.5 py-1 rounded-lg border border-gray-200 shadow-2xs"
                                >
                                  <ChIcon />
                                  <span>{ch.name}</span>
                                </span>
                              );
                            })}
                          </div>
                        </td>

                        {/* Engineered Format & Hook */}
                        <td className="py-5 px-6 max-w-[320px]">
                          <p className="font-semibold text-gray-900 text-xs mb-1">
                            {row.engineeredFormat}
                          </p>
                          <p className="text-[11px] text-gray-500 italic bg-gray-50 p-1.5 rounded-md border border-gray-100">
                            Hook: {row.primaryHook}
                          </p>
                        </td>

                        {/* Conversion Impact Metric */}
                        <td className="py-5 px-6 text-right">
                          <div className="inline-flex flex-col items-end">
                            <span className="text-lg sm:text-xl font-black text-[#0d7a3a] font-['Plus_Jakarta_Sans']">
                              {row.metric}
                            </span>
                            <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap">
                              {row.metricLabel}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom Callout in Matrix Card */}
            <div className="bg-[#F3F9F5] border-t border-[#0d7a3a]/15 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-700">
                <strong className="text-[#0d7a3a]">Ready to target these buyers in your city?</strong> Let&apos;s build your custom localized video gameplan.
              </p>
              <a
                href="#sample-form"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#0d7a3a] text-white font-bold text-xs sm:text-sm hover:bg-[#0a632e] transition-colors shadow-sm whitespace-nowrap"
              >
                <span>Get Free Custom Reel</span>
                <span>→</span>
              </a>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default RealEstateBuyerMatrix;
