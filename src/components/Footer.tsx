import { MessageCircle, ArrowUp, ShieldCheck, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b632e] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1 - Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-extrabold text-2xl tracking-wide uppercase">
              <span className="bg-white text-[#0d7a3a] w-8 h-8 rounded-full flex items-center justify-center font-black">
                AJ
              </span>
              <span>Arafat Jan</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Senior Digital Specialist & Multi-Disciplinary Creator delivering high-retention Video Editing, Cyber Security, Performance Marketing, Web Design, and Workflow Automation worldwide.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-green-200">
              <ShieldCheck size={16} />
              <span>Verified Global Freelancer</span>
            </div>
          </div>

          {/* Col 2 - Quick Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4 pb-1 border-b border-white/20 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Stack</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 pb-1 border-b border-white/20 inline-block">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Video Editing & Motion Graphics</li>
              <li>Ethical Hacking & Penetration Testing</li>
              <li>Performance Meta & Google Ads</li>
              <li>Conversion Website UI/UX & Dev</li>
              <li>Brand Identity & Graphic Design</li>
              <li>Zapier & Make.com Automations</li>
            </ul>
          </div>

          {/* Col 4 - Direct Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 pb-1 border-b border-white/20 inline-block">
              Direct Contact
            </h4>
            <p className="text-sm text-white/80 mb-4">
              Have an urgent inquiry? Contact directly via WhatsApp or phone for immediate availability.
            </p>
            <div className="space-y-2 text-sm text-white/90 mb-4">
              <p className="flex items-center gap-2">
                <Phone size={15} />
                <span>+880 1930-537776</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} />
                <span>mdeasinarafatjan@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe size={15} />
                <span>Global Remote Service</span>
              </p>
            </div>
            <a
              href="https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#0d7a3a] font-bold text-sm hover:bg-gray-100 transition-all shadow-md"
            >
              <MessageCircle size={17} />
              WhatsApp: +880 1930-537776
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/75">
          <p>© {new Date().getFullYear()} Arafat Jan. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-white hover:text-green-200 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


