import FadeIn from '../FadeIn';
import { 
  Film, 
  Sparkles, 
  Clock, 
  Layers, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const realEstateServices = [
  {
    id: 'reels-mastery',
    title: 'Short-Form Video & Reels Mastery',
    badge: 'High-Retention Short-Form',
    icon: Film,
    description: 'Turn quick walkthrough clips and talking-head videos into high-energy vertical Reels (9:16) for Instagram, TikTok, and YouTube Shorts.',
    features: [
      'Kinetic animated Alex Hormozi-style subtitles',
      'Sound effects (wooshes, pops, ASMR footsteps)',
      'High-converting 3-second visual hooks',
      'Trending audio curation & license clearance',
    ],
  },
  {
    id: 'luxury-drone',
    title: 'Luxury Listing & 4K Drone Showcases',
    badge: 'Cinematic Long-Form & MLS',
    icon: Sparkles,
    description: 'Transform multi-camera shoot footage and drone passes into Hollywood-grade 4K architectural property tours for YouTube, MLS, and luxury buyers.',
    features: [
      'Gimbal stabilization & ultra-smooth speed ramps',
      'HDR color grading & twilight sky replacement',
      '3D motion-tracked bed/bath/sqft property stats',
      'Unbranded MLS + branded YouTube exports',
    ],
  },
  {
    id: 'weekend-express',
    title: '"Weekend Open House Express"',
    badge: '24h Fast-Track Launch',
    icon: Clock,
    description: 'Need your listing video ready before the Saturday open house rush? Send raw clips by Thursday night, receive your final cut Friday morning.',
    features: [
      'Guaranteed 24-hour delivery turnaround',
      'Ready-to-post "Open House This Weekend" Reels',
      'Matching Instagram Story RSVP announcement graphics',
      'Instant direct WhatsApp VIP communication',
    ],
  },
  {
    id: 'photo-to-video',
    title: 'Photo-to-Video 3D Parallax Tour',
    badge: 'No Video? Photos to Motion',
    icon: Layers,
    description: 'Only have 2D architectural photos from your photographer? We transform static MLS photos into 3D camera-push motion video tours with music.',
    features: [
      '3D camera-depth projection & slow push-ins',
      'Dynamic light flares & atmospheric particles',
      'Custom branded intro & closing agent slate',
      'Perfect for land, distant listings & fast updates',
    ],
  },
];

const RealEstateServices = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Specialized Real Estate Media Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Tailored Specifically for US Realtors
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Every deliverable is crafted to stop the scroll, elevate your local brand, and generate inbound buyer and seller inquiries.
            </p>
          </div>
        </FadeIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realEstateServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.id} delay={idx * 0.1} y={25}>
                <div className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0d7a3a]/40 transition-all duration-300 flex flex-col h-full group">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0d7a3a]/10 text-[#0d7a3a] flex items-center justify-center group-hover:bg-[#0d7a3a] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-bold text-[#0d7a3a] bg-[#0d7a3a]/10 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0d7a3a] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 flex-grow border-t border-gray-100 pt-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-[#0d7a3a] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Order Button */}
                  <a
                    href={`https://wa.me/8801930537776?text=Hi%20Arafat,%20I%20am%20interested%20in%20the%20"${encodeURIComponent(service.title)}"%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-[#0d7a3a] text-[#0d7a3a] group-hover:bg-[#0d7a3a] group-hover:text-white font-bold text-sm transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    <span>Inquire or Order Service</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RealEstateServices;
