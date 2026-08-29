import { ArrowLeft, ArrowUp, Phone, Mail } from 'lucide-react';
import FadeIn from '../FadeIn';

const pageLinks = [
  { label: 'Hero', href: '#hero' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#sample-form' },
];

const deliverables = [
  'TikTok Spark Ads',
  'Meta Feed & Stories Ads',
  'YouTube Shorts Ads',
  'Product Unboxing Videos',
  'A/B Hook Variation Packs',
  '24–48h Turnaround',
];

function UgcFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#7C3AED] text-white text-xs font-bold tracking-wider">
                  UGC
                </span>
                <span className="text-white font-bold text-lg">
                  Arafat Jan Media
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Scroll-stopping UGC ad creatives for DTC brands and e-commerce
                businesses. From concept to conversion-ready videos — delivered
                in 24–48 hours.
              </p>
              <div className="w-10 h-0.5 bg-[#7C3AED] rounded-full mt-5" />
            </div>
          </FadeIn>

          {/* Column 2 — Page Links */}
          <FadeIn delay={0.05}>
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-5">
                Page Links
              </h4>
              <ul className="space-y-3">
                {pageLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-[#7C3AED] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Column 3 — Deliverables */}
          <FadeIn delay={0.1}>
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-5">
                Deliverables
              </h4>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Column 4 — Direct Contact */}
          <FadeIn delay={0.15}>
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-5">
                Direct Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#7C3AED] flex-shrink-0" />
                  <a
                    href="tel:+8801930537776"
                    className="text-sm hover:text-[#7C3AED] transition-colors duration-200"
                  >
                    +880 1930-537776
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#7C3AED] flex-shrink-0" />
                  <a
                    href="mailto:mdeasinarafatjan@gmail.com"
                    className="text-sm hover:text-[#7C3AED] transition-colors duration-200 break-all"
                  >
                    mdeasinarafatjan@gmail.com
                  </a>
                </li>
              </ul>
              <a
                href="#sample-form"
                className="inline-flex items-center justify-center mt-6 px-5 py-2.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold transition-colors duration-200 shadow-lg shadow-[#7C3AED]/25"
              >
                Claim Free Sample Ad
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left — Back to Portfolio */}
            <a
              href="/"
              className="flex items-center gap-2 text-sm hover:text-[#7C3AED] transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Main Portfolio
            </a>

            {/* Center — Copyright */}
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Arafat Jan Media. All rights reserved.
            </p>

            {/* Right — Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm hover:text-[#7C3AED] transition-colors duration-200 cursor-pointer"
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default UgcFooter;
