import FadeIn from '../FadeIn';
import { BookOpen, Sparkles, Download, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

const sampleHooks = [
  {
    category: 'Relocation & Neighborhood Hook',
    hook: '"If you’re moving to [City] in 2026, DO NOT rent or buy in this neighborhood until you know this one thing..."',
    type: 'Highest Save & Share Rate',
  },
  {
    category: 'First-Time Buyer Authority Hook',
    hook: '"Your landlord is secretly hoping you never learn about these 3 down-payment grant programs available right now..."',
    type: 'Viral Inbound Buyer DMs',
  },
  {
    category: 'Seller Listing Magnet Hook',
    hook: '"We had 47 buyers tour this home in 72 hours and sold for $35k over asking. Here are the 2 staging fixes that made it happen..."',
    type: 'Motivated Seller Converter',
  },
];

const RealEstateHooksLeadMagnet = () => {
  return (
    <section id="free-guide" className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-[#0d7a3a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn delay={0} y={25}>
          <div className="bg-gradient-to-tr from-[#F3F9F5] via-[#FAFDFB] to-white rounded-3xl border-2 border-[#0d7a3a]/25 p-8 sm:p-12 md:p-14 shadow-xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column (6 cols): Hook Description & Download */}
              <div className="lg:col-span-6 text-center lg:text-left">
                
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0d7a3a]/10 text-[#0d7a3a] text-xs font-bold uppercase tracking-wider mb-4">
                  <BookOpen size={15} />
                  <span>Free Realtor Resource • Instant Access</span>
                </span>

                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                  Never Wonder What to Say on Camera Again.
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Download our curated swipe-file of <strong className="text-gray-900 font-bold">50 proven real estate video hooks and short scripts</strong> engineered specifically to stop the scroll and generate qualified buyer and seller DMs.
                </p>

                <div className="space-y-2.5 mb-8 text-xs sm:text-sm text-gray-700 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0d7a3a] flex-shrink-0" />
                    <span>Categorized for Buyers, Sellers, Investors & Relocation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0d7a3a] flex-shrink-0" />
                    <span>Plug-and-play fill-in-the-blank script templates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0d7a3a] flex-shrink-0" />
                    <span>Tested across 300+ viral real estate Reels & Shorts</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start">
                  <a
                    href="https://wa.me/8801930537776?text=Hi%20Arafat,%20please%20send%20me%20the%20Free%20'50%20Viral%20Real%20Estate%20Hooks%20%26%20Scripts'%20PDF."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0d7a3a] text-white font-bold rounded-xl hover:bg-[#0a632e] hover:shadow-lg transition-all text-sm sm:text-base shadow-md group"
                  >
                    <Download size={18} />
                    <span>Download Free Script Bank (PDF)</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#sample-form"
                    className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#0d7a3a] text-[#0d7a3a] font-bold rounded-xl hover:bg-[#0d7a3a] hover:text-white transition-all text-sm sm:text-base bg-white"
                  >
                    <MessageCircle size={16} />
                    <span>Request Free Sample Reel</span>
                  </a>
                </div>

              </div>

              {/* Right Column (6 cols): 3 Hook Preview Cards */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between px-2 mb-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#0d7a3a]" />
                    <span>Preview of Included Hooks:</span>
                  </span>
                  <span className="text-[11px] font-bold text-[#0d7a3a] bg-[#0d7a3a]/10 px-2.5 py-0.5 rounded-full">
                    3 of 50 Shown
                  </span>
                </div>

                {sampleHooks.map((sample, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-sm hover:border-[#0d7a3a]/40 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-[#0d7a3a] uppercase tracking-wide">
                        {sample.category}
                      </span>
                      <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                        {sample.type}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug italic bg-gray-50/80 p-3 rounded-xl border border-gray-100">
                      {sample.hook}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default RealEstateHooksLeadMagnet;
