import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Real Estate 🏠', href: '/real-estate' },
  { name: 'UGC Ads 📱', href: '/ugc-ads' },
  { name: 'Blog ✍️', href: '/blog' },
  { name: 'Skills', href: '#skills' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 text-white font-extrabold text-xl sm:text-2xl tracking-wide uppercase group">
            <span className="bg-white text-[#0d7a3a] w-9 h-9 rounded-full flex items-center justify-center font-black shadow-md group-hover:scale-105 transition-transform">
              AJ
            </span>
            <span>ARAFAT JAN</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white font-medium text-[15px] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* WhatsApp Direct Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-md border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-[#0d7a3a] transition-all duration-300 shadow-sm"
            >
              <MessageCircle size={17} />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
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
              href="https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 mt-3 px-5 py-2.5 rounded-md bg-white text-[#0d7a3a] font-bold text-center hover:bg-gray-100 transition-colors shadow-md"
            >
              <MessageCircle size={18} />
              WhatsApp: +880 1930-537776
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


