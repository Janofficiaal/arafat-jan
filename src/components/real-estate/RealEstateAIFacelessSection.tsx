import { useState, useRef } from 'react';
import FadeIn from '../FadeIn';
import { 
  Bot, 
  Sparkles, 
  Play, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  MessageCircle, 
  VideoOff, 
  Mic, 
  Zap, 
  Clock 
} from 'lucide-react';

interface AIVideoItem {
  id: string;
  videoSrc: string;
  title: string;
  badge: string;
  description: string;
  useCase: string;
  tags: string[];
}

const aiVideos: AIVideoItem[] = [
  {
    id: 'ai-1',
    videoSrc: '/realstate/ai1 (1).mp4',
    title: 'Hyper-Realistic AI Avatar Market Update',
    badge: 'AI Avatar Presenter',
    description: 'Ultra-realistic digital avatar delivering timely local housing market statistics with dynamic kinetic captions and charts.',
    useCase: 'Weekly Market Updates & Price Drop Alerts',
    tags: ['#AIAvatar', '#MarketUpdate', '#ZeroFilming'],
  },
  {
    id: 'ai-2',
    videoSrc: '/realstate/ai1 (2).mp4',
    title: 'Faceless Luxury Listing Highlight Reel',
    badge: '100% Faceless B-Roll',
    description: 'Cinematic property photos & drone footage transformed into a fast-paced vertical tour with AI voiceover and trending music.',
    useCase: 'New Listings, Open Houses & Price Reductions',
    tags: ['#FacelessReel', '#ListingBroll', '#FastCuts'],
  },
  {
    id: 'ai-3',
    videoSrc: '/realstate/ai1 (3).mp4',
    title: 'AI Buyer & Seller Advice Series',
    badge: 'Educational Short',
    description: 'Engaging real estate tips (First-Time Buyer Checklist, Staging Secrets) presented by AI avatars to build local authority on autopilot.',
    useCase: 'Inbound Lead Generation & SEO Shorts',
    tags: ['#BuyerAdvice', '#SellerTips', '#AIVoice'],
  },
  {
    id: 'ai-4',
    videoSrc: '/realstate/ai1 (4).mp4',
    title: 'Neighborhood & Lifestyle Faceless Showcase',
    badge: 'Relocation Guide',
    description: 'Showcasing top school districts, coffee shops, parks, and local amenities using curated footage, AI voice narration, and motion graphics.',
    useCase: 'Attracting Out-of-State Relocating Buyers',
    tags: ['#RelocationGuide', '#NeighborhoodTour', '#ViralFormat'],
  },
];

const RealEstateAIFacelessSection = () => {
  const [modalVideo, setModalVideo] = useState<AIVideoItem | null>(null);

  return (
    <section id="ai-faceless" className="py-20 md:py-28 bg-[#FAFDFB] relative overflow-hidden border-t border-gray-100">
      
      {/* Background Subtle Green Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#0d7a3a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
              <Bot size={16} />
              <span>Camera-Shy? No Problem!</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              AI Avatar & Faceless Video Creation
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Don&apos;t want to record yourself on camera? I create hyper-realistic AI Avatar market updates, automated listing tours, and viral faceless reels — <strong className="text-gray-900">zero filming required from you.</strong>
            </p>
          </div>
        </FadeIn>

        {/* 4 Feature Value Pillars */}
        <FadeIn delay={0.1} y={20}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                icon: VideoOff,
                title: 'Zero Camera Time',
                desc: 'Never worry about lighting, makeup, awkward pauses, or setting up a tripod again.',
              },
              {
                icon: Mic,
                title: 'Hyper-Realistic AI Voices',
                desc: 'Studio-grade natural voices and avatars delivering scripts with flawless pacing.',
              },
              {
                icon: Clock,
                title: '24-Hour Turnaround',
                desc: 'Send me an MLS link or market topic — get a ready-to-post Reel within 24 hours.',
              },
              {
                icon: Zap,
                title: 'Inbound Lead Magnet',
                desc: 'Dominate Instagram, TikTok & YouTube Shorts with consistent weekly video content.',
              },
            ].map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <div key={pIdx} className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#0d7a3a]/30 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[#0d7a3a]/10 text-[#0d7a3a] flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* AI Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {aiVideos.map((video, idx) => (
            <FadeIn key={video.id} delay={idx * 0.08} y={25}>
              <AIVideoCard 
                video={video} 
                onOpenModal={() => setModalVideo(video)} 
              />
            </FadeIn>
          ))}
        </div>

        {/* Custom AI Video CTA Banner */}
        <FadeIn delay={0.3} y={20}>
          <div className="mt-16 bg-gradient-to-r from-[#0d7a3a] to-[#15803d] rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={14} className="text-yellow-300" />
                <span>100% Done-For-You AI Media Service</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Want a Free Sample AI Video for Your Market or Listing?
              </h3>
              <p className="text-white/90 text-sm sm:text-base mb-6">
                Send me your city name or a property link. I&apos;ll generate a customized AI Avatar market Reel branded with your brokerage logo — completely free.
              </p>
              <a
                href="#sample-form"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-[#0d7a3a] font-extrabold rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <Sparkles size={18} />
                <span>Claim Free Sample AI Reel (24h Turnaround)</span>
              </a>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Fullscreen Video Lightbox Modal */}
      {modalVideo && (
        <div 
          onClick={() => setModalVideo(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-gray-950 rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-gray-800"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800 text-white">
              <div>
                <span className="text-xs font-bold text-[#10b981] uppercase tracking-wider">
                  {modalVideo.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-lg">
                  {modalVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setModalVideo(null)}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Video Player */}
            <div className="flex-1 bg-black flex items-center justify-center min-h-[360px] sm:min-h-[480px] p-3">
              <video
                src={modalVideo.videoSrc}
                controls
                autoPlay
                playsInline
                className="max-h-[65vh] w-auto aspect-[9/16] rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-4 bg-gray-900 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-300">
                {modalVideo.description}
              </p>
              <a
                href={`https://wa.me/8801930537776?text=Hi%20Arafat,%20I%20am%20interested%20in%20an%20AI%20video%20edit%20like%20"${encodeURIComponent(modalVideo.title)}".`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d7a3a] text-white font-bold rounded-lg text-xs sm:text-sm hover:bg-[#0a632e] transition-all flex-shrink-0"
              >
                <MessageCircle size={16} />
                <span>Order AI Video</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

// Reusable AI Video Card with Auto Play On Hover
const AIVideoCard = ({ video, onOpenModal }: { video: AIVideoItem; onOpenModal: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0d7a3a]/40 transition-all duration-300 flex flex-col h-full group">
      
      {/* Video Container with Hover Play */}
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onOpenModal}
        className="relative overflow-hidden bg-gray-950 aspect-[9/13] cursor-pointer select-none"
      >
        <video
          ref={videoRef}
          src={video.videoSrc}
          playsInline
          muted={isMuted}
          loop
          preload="metadata"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="bg-[#0d7a3a] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow flex items-center gap-1">
            <Bot size={12} />
            <span>{video.badge}</span>
          </span>

          <span className="bg-black/70 backdrop-blur-md text-green-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-white/20">
            AI Powered
          </span>
        </div>

        {/* Center Play Button Overlay (Fades out when hovered and playing) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-[#0d7a3a] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play size={20} className="fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Bottom Overlay Info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white z-10">
          <div>
            <p className="text-[10px] text-green-300 font-bold uppercase tracking-wider">
              {isPlaying ? '▶ Playing on Hover' : 'Hover to Play'}
            </p>
            <p className="text-xs font-semibold text-gray-200">
              {video.useCase}
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleSound}
              className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#0d7a3a] transition-colors cursor-pointer"
              title={isMuted ? 'Click to Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
            <button
              onClick={onOpenModal}
              className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#0d7a3a] transition-colors cursor-pointer"
              title="Fullscreen Lightbox"
            >
              <Maximize2 size={13} />
            </button>
          </div>
        </div>

      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-[#0d7a3a] transition-colors leading-snug">
          {video.title}
        </h3>

        <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow">
          {video.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {video.tags.map((tag) => (
            <span key={tag} className="text-[10px] bg-[#0d7a3a]/10 text-[#0d7a3a] font-semibold px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Order Button */}
        <a
          href={`https://wa.me/8801930537776?text=Hi%20Arafat,%20I%20want%20to%20order%20an%20AI%20video%20edit%20similar%20to%20"${encodeURIComponent(video.title)}".`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border-2 border-[#0d7a3a] text-[#0d7a3a] group-hover:bg-[#0d7a3a] group-hover:text-white font-bold text-xs transition-all duration-300"
        >
          <MessageCircle size={14} />
          <span>Order AI Video</span>
        </a>
      </div>

    </div>
  );
};

export default RealEstateAIFacelessSection;

