import FadeIn from '../FadeIn';
import { XCircle, CheckCircle2 } from 'lucide-react';

const RealEstateBeforeAfter = () => {
  return (
    <section id="before-after" className="py-20 md:py-28 bg-[#F4F9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              The Retention Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Raw Footage vs. High-Converting Reel
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              See how professional editing, dynamic pacing, and sound design turn a boring walkthrough into a viral listing showcase.
            </p>
          </div>
        </FadeIn>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Card: The RAW Unedited Clip */}
          <FadeIn delay={0.1} x={-20} y={0}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-red-200/80 shadow-md flex flex-col h-full relative">
              
              {/* Top Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 font-extrabold text-xs uppercase px-3 py-1 rounded-full">
                  <XCircle size={14} />
                  Raw Footage (Before)
                </span>
                <span className="text-xs text-gray-400 font-medium">Poor 3s Retention</span>
              </div>

              {/* Visual Simulated Mockup */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[9/10] mb-6 grayscale opacity-80 border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80"
                  alt="Raw real estate video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                  <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl text-white max-w-xs border border-white/10">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Unedited Mobile Recording</p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Silent pauses, shaky transitions, unreadable flat lighting, zero captions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Points List */}
              <div className="space-y-2.5 flex-grow mb-6">
                {[
                  'Flat camera colors with bad shadows & blown-out windows',
                  'Awkward 3–5s pauses & zero pattern interrupts',
                  'No animated captions (80% of viewers scroll on mute)',
                  'Viewer drops off in the first 2 seconds',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                    <XCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 text-red-800 p-3 rounded-xl text-xs font-bold text-center">
                ❌ Average View Duration: 2.1s (Underperforming)
              </div>

            </div>
          </FadeIn>

          {/* Right Card: The POLISHED High-Retention Reel */}
          <FadeIn delay={0.2} x={20} y={0}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#0d7a3a] shadow-xl flex flex-col h-full relative">
              
              {/* Highlight Ribbon */}
              <div className="absolute -top-3.5 right-6 bg-[#0d7a3a] text-white text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-full shadow-md">
                ⚡ 10x More Engagement
              </div>

              {/* Top Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 bg-[#0d7a3a]/10 text-[#0d7a3a] font-extrabold text-xs uppercase px-3 py-1 rounded-full">
                  <CheckCircle2 size={14} />
                  Arafat&apos;s Pro Edit (After)
                </span>
                <span className="text-xs text-[#0d7a3a] font-bold">+85% Retention Rate</span>
              </div>

              {/* Visual Simulated Mockup with Live Video preview */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-950 aspect-[9/10] mb-6 border border-[#0d7a3a]/30 shadow-inner">
                <video
                  src="/realstate/video2.mp4"
                  poster="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80"
                  playsInline
                  autoPlay
                  muted
                  loop
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('mixkit')) {
                      target.src = 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-living-room-with-large-windows-43408-large.mp4';
                      target.play().catch(() => {});
                    }
                  }}
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Elements on Top */}
                <div className="absolute top-3 left-3 bg-[#0d7a3a] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                  🔥 Viral Hook Applied
                </div>

                <div className="absolute bottom-3 inset-x-3 bg-black/75 backdrop-blur-md p-2.5 rounded-xl text-white flex items-center justify-between text-xs">
                  <div>
                    <p className="font-extrabold text-yellow-300">Kinetic Captions + Sound FX</p>
                    <p className="text-[10px] text-gray-300">HDR Color Grading • Austin, TX</p>
                  </div>
                  <span className="bg-green-500 text-black font-black text-[10px] px-2 py-0.5 rounded">
                    PRO
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 flex-grow mb-6">
                {[
                  'Fast-action visual hook in first 1.5 seconds to stop the scroll',
                  'Alex Hormozi-style animated captions with emoji highlights',
                  'HDR interior color grading & sky replacement for dusk/daylight',
                  'Sound effects (whooshes, pop-ups) & trending royalty-free audio',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 size={16} className="text-[#0d7a3a] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#0d7a3a]/10 text-[#0d7a3a] p-3 rounded-xl text-xs font-black text-center border border-[#0d7a3a]/20">
                ✅ Average View Duration: 24.8s (Viral Reach & Direct DMs)
              </div>

            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export default RealEstateBeforeAfter;

