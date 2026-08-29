import { useState, useRef } from 'react';
import FadeIn from '../FadeIn';
import {
  CheckCircle2,
  ArrowRight,
  Play,
  Volume2,
  VolumeX,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const coreHighlights = [
  '24–48h Guaranteed Turnaround',
  'Scroll-Stopping Hook Edits',
  'TikTok, Meta & YouTube Optimized',
  '1 Free Sample Ad — Zero Risk',
  'A/B Creative Variations Included',
  'Unlimited Revisions on All Edits'
];

const UgcHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
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
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFE] to-white pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#A78BFA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Headline & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            
            {/* Top Badge Pill */}
            <FadeIn delay={0.1} y={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] font-semibold text-sm mb-4">
                <Sparkles size={16} className="text-[#7C3AED] animate-pulse" />
                <span>Dedicated UGC & Ad Creative Partner for DTC Brands</span>
              </div>
            </FadeIn>

            {/* Intro text */}
            <FadeIn delay={0.2} y={20}>
              <p className="text-gray-700 font-semibold text-xl sm:text-2xl md:text-3xl mb-1 font-['Plus_Jakarta_Sans']">
                Hi There,
              </p>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.3} y={20}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-[#7C3AED] leading-[1.12] tracking-tight mb-5 font-['Plus_Jakarta_Sans']">
                I&apos;m Arafat Jan
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.4} y={20}>
              <p className="text-gray-700 font-normal text-base sm:text-lg md:text-[19px] leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                A specialized <strong className="text-[#7C3AED] font-bold">UGC & Ad Creative Editor</strong> helping e-commerce brands, DTC companies, and Amazon sellers turn raw product footage into <strong className="text-[#7C3AED]">scroll-stopping TikTok ads</strong>, <strong className="text-[#7C3AED]">Instagram Reels</strong>, and <strong className="text-[#7C3AED]">high-converting Meta & YouTube ad creatives</strong> that drive sales and lower CPA.
              </p>
            </FadeIn>

            {/* Feature Pills */}
            <FadeIn delay={0.45} y={20}>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-8">
                {coreHighlights.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium bg-white text-gray-700 px-3 py-1.5 rounded-md border border-gray-200 shadow-sm">
                    <CheckCircle2 size={14} className="text-[#7C3AED]" />
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Dual CTAs */}
            <FadeIn delay={0.5} y={20}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#sample-form"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#7C3AED] text-white font-bold rounded-lg hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/25 transition-all duration-300 text-base shadow-md group"
                >
                  <Sparkles size={18} className="text-yellow-300" />
                  <span>Claim Free Sample Ad</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#7C3AED] text-[#7C3AED] font-bold rounded-lg hover:bg-[#7C3AED] hover:text-white transition-all duration-300 text-base bg-white"
                >
                  View Ad Portfolio
                </a>
              </div>
            </FadeIn>

          </div>

          {/* Right Column (5 cols): Card Frame with UGC Ad Demo */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <FadeIn delay={0.25} x={30} y={0} duration={0.8}>
              <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
                
                {/* Decorative Purple Glow Backdrop */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] rounded-[40px] opacity-15 transform -rotate-2 blur-sm" />
                <div className="absolute inset-0 bg-[#7C3AED] rounded-[32px] transform rotate-1 opacity-10" />

                {/* Main Card Container */}
                <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[32px] shadow-2xl border border-gray-100/80">
                  <div 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={togglePlay}
                    className="overflow-hidden rounded-[24px] bg-gray-950 aspect-[9/13] relative cursor-pointer group select-none"
                  >
                    {/* Video element */}
                    <video
                      ref={videoRef}
                      src="/ugc/video1.mp4"
                      playsInline
                      muted={isMuted}
                      loop
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75 pointer-events-none" />

                    {/* Top Info Overlay */}
                    <div className="absolute top-4 left-4 right-4 text-white z-10 pointer-events-none">
                      <span className="inline-block bg-[#7C3AED] text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1">
                        {isPlaying ? '▶ Playing' : 'Hover to Play'}
                      </span>
                      <h4 className="text-sm font-extrabold leading-tight text-white drop-shadow-md">
                        Scroll-Stopping Ad Creative
                      </h4>
                    </div>

                    {/* Center Play Button Overlay */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-300">
                        <div className="w-14 h-14 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play size={24} className="fill-white ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Floating Bottom Info Bar */}
                    <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-bold">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-medium">UGC & Ad Creative Partner</p>
                          <p className="text-xs font-bold text-gray-900">Arafat Jan</p>
                        </div>
                      </div>

                      <button
                        onClick={toggleMute}
                        className="p-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#7C3AED] hover:text-white transition-colors cursor-pointer"
                        title={isMuted ? 'Click to Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      </button>
                    </div>

                  </div>
                </div>

                {/* Floating Badge Top-Left */}
                <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-[#7C3AED] text-white py-2 px-4 rounded-xl shadow-xl z-20 flex items-center gap-2 text-xs sm:text-sm font-bold">
                  <span>★</span>
                  <span>Scroll-Stopping Ads in 24-48h</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UgcHero;
