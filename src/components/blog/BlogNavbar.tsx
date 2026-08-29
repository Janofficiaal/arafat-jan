import { useState, useEffect } from 'react';
import { ArrowLeft, Menu, X, Sparkles, BookOpen } from 'lucide-react';

const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d7a3a] shadow-xl py-2.5' : 'bg-[#0d7a3a] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Back Link & Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-all"
            >
              <ArrowLeft size={16} />
              <span className="hidden xs:inline">Main Portfolio</span>
            </a>

            <div className="h-5 w-px bg-white/20" />

            <a href="/blog" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-white text-[#0d7a3a] flex items-center justify-center font-black text-sm shadow-md group-hover:scale-105 transition-transform">
                <BookOpen size={16} />
              </div>
              <div>
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white block leading-none">
                  BLOG
                </span>
                <span className="text-[10px] text-white/70 font-semibold uppercase tracking-widest leading-none block mt-0.5">
                  by Yasin Arafat Jan
                </span>
              </div>
            </a>
          </div>

          {/* Center / Right: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/90">
            <a href="/blog" className="hover:text-white transition-colors">
              All Articles
            </a>
            <a href="/ugc-ads" className="hover:text-white transition-colors">
              UGC Ads 📱
            </a>
            <a href="/real-estate" className="hover:text-white transition-colors">
              Real Estate 🏠
            </a>
            <a href="/#about" className="hover:text-white transition-colors">
              About Author
            </a>
          </div>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/8801930537776?text=Hi%20Yasin%20Arafat%20Jan,%20I%20read%20your%20blog%20and%20want%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#0d7a3a] hover:bg-gray-100 font-bold text-xs sm:text-sm shadow-md transition-all duration-300"
            >
              <Sparkles size={14} className="text-[#0d7a3a]" />
              <span>Contact Author</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 p-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0a632e] border-t border-white/10 px-4 pt-3 pb-5 space-y-3">
          <a
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="block text-white font-semibold py-2 px-3 rounded-md hover:bg-white/10"
          >
            All Articles
          </a>
          <a
            href="/ugc-ads"
            onClick={() => setIsOpen(false)}
            className="block text-white font-semibold py-2 px-3 rounded-md hover:bg-white/10"
          >
            UGC Ads 📱
          </a>
          <a
            href="/real-estate"
            onClick={() => setIsOpen(false)}
            className="block text-white font-semibold py-2 px-3 rounded-md hover:bg-white/10"
          >
            Real Estate Media 🏠
          </a>
          <a
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="block text-white font-semibold py-2 px-3 rounded-md hover:bg-white/10"
          >
            About Author
          </a>
          <a
            href="https://wa.me/8801930537776?text=Hi%20Yasin%20Arafat%20Jan,%20I%20read%20your%20blog%20and%20want%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2.5 bg-white text-[#0d7a3a] font-bold rounded-lg mt-2"
          >
            Contact on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default BlogNavbar;
