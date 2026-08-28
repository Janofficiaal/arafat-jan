import { useState, useRef } from 'react';
import FadeIn from '../FadeIn';
import { 
  Play, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';

interface RealEstateVideo {
  id: string;
  videoSrc: string;
  title: string;
  category: 'Vertical Reels (9:16)' | 'Luxury Property Tours (16:9)' | 'Agent Talking-Head Shorts';
  aspectRatio: '9/16' | '16/9';
  location: string;
  price?: string;
  tags: string[];
  metrics: string;
  description: string;
}

const videosData: RealEstateVideo[] = [
  {
    id: 'vid-1',
    videoSrc: '/realstate/video1.mp4',
    title: 'Austin Luxury Waterfront Villa Tour',
    category: 'Vertical Reels (9:16)',
    aspectRatio: '9/16',
    location: 'Austin, TX',
    price: '$2,450,000',
    tags: ['#LuxuryTour', '#Drone', '#CinematicBroll'],
    metrics: '128.4k Views • 84 Saves',
    description: 'High-energy vertical tour featuring speed ramps, sound effects, and color graded pool shots.',
  },
  {
    id: 'vid-2',
    videoSrc: '/realstate/video2.mp4',
    title: "Market Update Talking-Head: 'Austin Housing Market'",
    category: 'Agent Talking-Head Shorts',
    aspectRatio: '9/16',
    location: 'Downtown Austin',
    tags: ['#DynamicCaptions', '#HookRate', '#AgentBranding'],
    metrics: '89.2k Views • 42 Leads',
    description: 'Animated Alex Hormozi-style subtitles, zoom cuts, sound design, and custom market charts.',
  },
  {
    id: 'vid-3',
    videoSrc: '/realstate/video3.mp4',
    title: 'Modern Downtown Penthouse Full Walkthrough',
    category: 'Luxury Property Tours (16:9)',
    aspectRatio: '16/9',
    location: 'Miami, FL',
    price: '$3,800,000',
    tags: ['#16x9Tour', '#MLSCompliant', '#4KDrone'],
    metrics: 'Full 4K Listing Showcase',
    description: 'Cinematic landscape tour with custom lower-thirds, floorplan callouts, and twilight drone footage.',
  },
  {
    id: 'vid-4',
    videoSrc: '/realstate/video4.mp4',
    title: 'Client Testimonial & Case Study Reel',
    category: 'Agent Talking-Head Shorts',
    aspectRatio: '9/16',
    location: 'Dallas, TX',
    tags: ['#SocialProof', '#Subtitles', '#BuyerStory'],
    metrics: 'High Trust Converter',
    description: 'Emotional client storytelling with background B-roll, pop-up text graphics, and brand colors.',
  },
  {
    id: 'vid-5',
    videoSrc: '/realstate/video5.mp4',
    title: 'New Construction Modern Farmhouse Feature',
    category: 'Vertical Reels (9:16)',
    aspectRatio: '9/16',
    location: 'Nashville, TN',
    price: '$1,290,000',
    tags: ['#Farmhouse', '#TrendingAudio', '#OpenHouse'],
    metrics: '94.5k Views • 200+ DMs',
    description: 'Fast-paced rhythmic walkthrough synced to trending Instagram beats with kitchen feature callouts.',
  },
  {
    id: 'vid-6',
    videoSrc: '/realstate/video6.mp4',
    title: 'Neighborhood Lifestyle & Local Amenities Reel',
    category: 'Vertical Reels (9:16)',
    aspectRatio: '9/16',
    location: 'Scottsdale, AZ',
    tags: ['#RelocationGuide', '#NeighborhoodTour', '#RealtorBrand'],
    metrics: 'Ideal for Out-of-State Buyers',
    description: 'Showcasing local coffee shops, parks, golf courses, and luxury community lifestyle.',
  },
  {
    id: 'vid-7',
    videoSrc: '/realstate/video7.mp4',
    title: 'Cinematic 4K Twilight Estate Drone Showcase',
    category: 'Luxury Property Tours (16:9)',
    aspectRatio: '16/9',
    location: 'Beverly Hills, CA',
    price: '$7,900,000',
    tags: ['#TwilightDrone', '#MegaMansion', '#Architectural'],
    metrics: 'Premium YouTube Listing',
    description: 'Sunset twilight drone transitions, interior gimbal stabilization, and architectural sound design.',
  },
  {
    id: 'vid-8',
    videoSrc: '/realstate/video8.mp4',
    title: "'3 Things I Love About This Chef's Kitchen' Reel",
    category: 'Vertical Reels (9:16)',
    aspectRatio: '9/16',
    location: 'Denver, CO',
    tags: ['#ViralHook', '#KitchenGoals', '#Pacing'],
    metrics: '142.1k Organic Views',
    description: 'Strong 3-second visual hook, dynamic text popups, and ASMR refrigerator/marble sound effects.',
  },
  {
    id: 'vid-9',
    videoSrc: '/realstate/video9.mp4',
    title: "First-Time Homebuyer Series: 'Escrow Explained in 30s'",
    category: 'Agent Talking-Head Shorts',
    aspectRatio: '9/16',
    location: 'Tampa, FL',
    tags: ['#Educational', '#BuyerTips', '#VoiceEnhancement'],
    metrics: 'Lead Generating Authority Reel',
    description: 'Clear audio enhancement, animated icons, engaging progression bar, and strong call-to-action.',
  },
  {
    id: 'vid-10',
    videoSrc: '/realstate/video10.mp4',
    title: 'Just Sold in 4 Days! Behind The Scenes Agent Reel',
    category: 'Vertical Reels (9:16)',
    aspectRatio: '9/16',
    location: 'Atlanta, GA',
    tags: ['#JustSold', '#ListingWin', '#SocialProof'],
    metrics: 'Seller Lead Magnet',
    description: 'Celebratory motion graphics, stats overlays, and energetic pacing celebrating a fast listing closing.',
  },
];

const categories = [
  'All Videos',
  'Vertical Reels (9:16)',
  'Luxury Property Tours (16:9)',
  'Agent Talking-Head Shorts'
] as const;

const RealEstateVideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Videos');
  const [modalVideo, setModalVideo] = useState<RealEstateVideo | null>(null);

  const filteredVideos = selectedCategory === 'All Videos'
    ? videosData
    : videosData.filter(v => v.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Real Estate Video Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Proven High-Retention Video Formats
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Hover over any video to preview instantly, or click to play in full screen.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter Tabs */}
        <FadeIn delay={0.1} y={15}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#0d7a3a] text-white shadow-md shadow-[#0d7a3a]/25 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredVideos.map((video, idx) => (
            <FadeIn key={video.id} delay={idx * 0.06} y={25}>
              <VideoCard 
                video={video} 
                onOpenModal={() => setModalVideo(video)} 
              />
            </FadeIn>
          ))}
        </div>

        {/* Bottom Portfolio Banner CTA */}
        <FadeIn delay={0.3} y={20}>
          <div className="mt-16 text-center bg-[#F3F9F5] border border-[#0d7a3a]/20 rounded-2xl p-8 max-w-3xl mx-auto shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Want a Custom Edit in Your Brand Colors & Font Style?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Send me your raw iPhone clips or listing footage. I&apos;ll build a customized sample Reel with your exact typography, logo, and subtitle animation style.
            </p>
            <a
              href="#sample-form"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0d7a3a] text-white font-bold rounded-xl hover:bg-[#0a632e] hover:shadow-lg transition-all text-sm sm:text-base"
            >
              <Sparkles size={18} className="text-yellow-300" />
              <span>Claim Free Sample Reel (24h Turnaround)</span>
            </a>
          </div>
        </FadeIn>

      </div>

      {/* Fullscreen Video Modal Lightbox */}
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
                  {modalVideo.category}
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
                className={`max-h-[65vh] w-auto rounded-lg shadow-2xl ${
                  modalVideo.aspectRatio === '9/16' ? 'aspect-[9/16]' : 'aspect-[16/9] w-full max-w-3xl'
                }`}
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-4 bg-gray-900 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-300">
                {modalVideo.description}
              </p>
              <a
                href={`https://wa.me/8801930537776?text=Hi%20Arafat,%20I%20loved%20the%20edit%20on%20"${encodeURIComponent(modalVideo.title)}"%20and%20want%20a%20similar%20video%20edited.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d7a3a] text-white font-bold rounded-lg text-xs sm:text-sm hover:bg-[#0a632e] transition-all flex-shrink-0"
              >
                <MessageCircle size={16} />
                <span>Order Similar Edit</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

// Clean Reusable Video Card with Auto-Play On Mouse Hover
const VideoCard = ({ video, onOpenModal }: { video: RealEstateVideo; onOpenModal: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Hover triggers instant play
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  // Leaving mouse pauses
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
      
      {/* Video Preview Container with Hover to Play */}
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onOpenModal}
        className={`relative overflow-hidden bg-gray-950 cursor-pointer select-none ${
          video.aspectRatio === '9/16' ? 'aspect-[9/13]' : 'aspect-[16/10]'
        }`}
      >
        
        {/* Real User Video Element */}
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
          <span className="bg-[#0d7a3a] text-white text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow">
            {video.category === 'Vertical Reels (9:16)' ? '9:16 Reel' : video.category === 'Luxury Property Tours (16:9)' ? '16:9 Tour' : 'Talking Head'}
          </span>

          {video.price && (
            <span className="bg-black/70 backdrop-blur-md text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-white/20">
              {video.price}
            </span>
          )}
        </div>

        {/* Center Play Button Overlay (fades out when mouse hovers and video plays) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
            <div className="w-13 h-13 rounded-full bg-[#0d7a3a] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play size={22} className="fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Bottom Overlay Info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white z-10">
          <div>
            <p className="text-[10px] text-green-300 font-bold uppercase tracking-wider">
              {isPlaying ? '▶ Playing on Hover' : video.metrics}
            </p>
            <p className="text-xs font-semibold text-gray-200">
              {video.location}
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleSound}
              className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#0d7a3a] transition-colors cursor-pointer"
              title={isMuted ? 'Click to Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
            <button
              onClick={onOpenModal}
              className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#0d7a3a] transition-colors cursor-pointer"
              title="Fullscreen Lightbox"
            >
              <Maximize2 size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 group-hover:text-[#0d7a3a] transition-colors leading-snug">
          {video.title}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
          {video.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {video.tags.map((tag) => (
            <span key={tag} className="text-[11px] bg-[#0d7a3a]/10 text-[#0d7a3a] font-semibold px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Order Button */}
        <a
          href={`https://wa.me/8801930537776?text=Hi%20Arafat,%20I%20want%20an%20edit%20similar%20to%20"${encodeURIComponent(video.title)}".`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border-2 border-[#0d7a3a] text-[#0d7a3a] group-hover:bg-[#0d7a3a] group-hover:text-white font-bold text-xs sm:text-sm transition-all duration-300"
        >
          <MessageCircle size={15} />
          <span>Order Similar Edit</span>
        </a>

      </div>

    </div>
  );
};

export default RealEstateVideoGallery;

