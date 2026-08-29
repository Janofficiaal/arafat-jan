import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#sample-form' },
];

const UgcNavbar = () => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#7C3AED] ${
        scrolled ? 'shadow-xl py-2' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Back link + Brand */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            {/* Back to Main Profile */}
            <a
              href="/"
              className="flex items-center gap-1 text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0"
            >
              <ArrowLeft size={15} />
              <span className="hidden sm:inline">Main Profile</span>
            </a>

            {/* Divider */}
            <span className="w-px h-6 bg-white/25 shrink-0" />

            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 text-white font-extrabold text-lg sm:text-xl tracking-wide uppercase group whitespace-nowrap"
            >
              <span className="bg-white text-[#7C3AED] w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-black text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform shrink-0">
                UGC
              </span>
              <span>ARAFAT JAN</span>
            </a>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white font-medium text-[15px] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Free Sample Ad CTA */}
            <a
              href="#sample-form"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-md border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-[#7C3AED] transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              <Sparkles size={16} />
              Free Sample Ad
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#6D28D9] border-t border-white/15 px-4 pt-3 pb-5 shadow-2xl animate-in slide-in-from-top duration-200">
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
              className="inline-flex items-center justify-center gap-2 mt-3 px-5 py-2.5 rounded-md bg-white text-[#7C3AED] font-bold text-center hover:bg-gray-100 transition-colors shadow-md"
            >
              <Sparkles size={18} />
              Free Sample Ad
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default UgcNavbar;
