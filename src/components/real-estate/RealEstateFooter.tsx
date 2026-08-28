import { ArrowUp, ArrowLeft, Mail, Phone, ShieldCheck } from 'lucide-react';

const RealEstateFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white font-extrabold text-xl tracking-tight">
              <span className="bg-[#0d7a3a] text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm">
                RE
              </span>
              <span>Arafat Jan Media</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Dedicated short-form video editing and media growth partner for US Realtors, Luxury Agents, and Brokerage Teams.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-green-400">
              <ShieldCheck size={16} />
              <span>MLS & Fair Housing Compliant Edits</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 mb-4 pb-1 border-b border-gray-800 inline-block">
              Page Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Hero & Overview</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Video Portfolio (Reels & Tours)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Specialized Services</a></li>
              <li><a href="#before-after" className="hover:text-white transition-colors">Before vs After</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Monthly Retainer Packs</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Deliverables */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 mb-4 pb-1 border-b border-gray-800 inline-block">
              Deliverables
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>Vertical Instagram & TikTok Reels (9:16)</li>
              <li>Cinematic 4K Drone Property Tours (16:9)</li>
              <li>Agent Talking-Head Educational Shorts</li>
              <li>Just Listed & Sold Carousel Graphics</li>
              <li>MLS-Compliant Unbranded Exports</li>
              <li>24–48h Turnaround Guaranteed</li>
            </ul>
          </div>

          {/* Col 4: Contact & Free Trial */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 mb-4 pb-1 border-b border-gray-800 inline-block">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-300 mb-4">
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-[#0d7a3a]" />
                <span>+880 1930-537776</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-[#0d7a3a]" />
                <span>mdeasinarafatjan@gmail.com</span>
              </p>
            </div>
            <a
              href="#sample-form"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d7a3a] text-white font-bold text-xs hover:bg-[#0a632e] transition-colors"
            >
              <span>Claim Free Sample Reel</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <a href="/" className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={13} />
              <span>Return to Main Developer & Digital Creator Portfolio</span>
            </a>
          </div>
          
          <p>© {new Date().getFullYear()} Arafat Jan. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default RealEstateFooter;

