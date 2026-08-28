import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowLeft } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Strategy', href: '#strategy-matrix' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'AI Videos', href: '#ai-faceless' },
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#sample-form' },
];

const RealEstateNavbar = () => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0d7a3a] shadow-xl py-2.5' : 'bg-[#0d7a3a] py-3.5'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left Side: Main Profile Link + Logo (Unbreakable single line) */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <a 
              href="/" 
              className="inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition-colors py-1 px-2.5 rounded-md bg-white/10 hover:bg-white/20 whitespace-nowrap"
            >
              <ArrowLeft size={13} />
              <span>Main Profile</span>
            </a>

            <a 
              href="#hero" 
              className="flex items-center gap-2 text-white font-extrabold text-lg sm:text-xl tracking-wide uppercase whitespace-nowrap"
            >
              <span className="bg-white text-[#0d7a3a] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-black shadow-md text-xs sm:text-sm flex-shrink-0">
                RE
              </span>
              <span className="whitespace-nowrap">ARAFAT JAN</span>
            </a>
          </div>

          {/* Desktop Navigation Links (Unbreakable Single Line) */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6 flex-shrink">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white font-medium text-sm 2xl:text-[15px] whitespace-nowrap transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Compact Desktop Navigation Links for medium screens (lg to xl) */}
          <div className="hidden lg:flex xl:hidden items-center gap-3">
            {[
              { name: 'Home', href: '#hero' },
              { name: 'Strategy', href: '#strategy-matrix' },
              { name: 'Portfolio', href: '#portfolio' },
              { name: 'AI Videos', href: '#ai-faceless' },
              { name: 'Services', href: '#services' },
              { name: 'Packages', href: '#packages' },
              { name: 'FAQ', href: '#faq' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white font-medium text-xs whitespace-nowrap transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side: CTA Button (Unbreakable single line) */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="#sample-form"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border-2 border-white text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-[#0d7a3a] transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              <MessageCircle size={15} />
              <span>Free Sample Reel</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a632e] border-t border-white/15 px-4 pt-3 pb-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/90 hover:text-white font-medium py-2 px-3 rounded-md hover:bg-white/10 text-base transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#sample-form"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 mt-3 px-5 py-2.5 rounded-md bg-white text-[#0d7a3a] font-bold text-center hover:bg-gray-100 transition-colors shadow-md"
            >
              <MessageCircle size={18} />
              <span>Claim Free Sample Reel</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default RealEstateNavbar;
