import { ArrowLeft, ArrowUp, MessageCircle, Mail, Sparkles, BookOpen } from 'lucide-react';

const BlogFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand & Author Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0d7a3a] text-white flex items-center justify-center font-black text-lg shadow-lg">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Arafat Jan Blog & Insights
                </h3>
                <p className="text-xs text-[#0d7a3a] font-semibold uppercase tracking-wider">
                  Cybersecurity • UGC Video Ads • Real Estate Media
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              In-depth articles, actionable case studies, and growth strategies written by <strong>Yasin Arafat Jan</strong> — CEO at Hackers Heaven and Senior Digital Specialist with 10+ years of global experience.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs bg-white/10 text-white px-3 py-1.5 rounded-full">
                <Sparkles size={13} className="text-green-400" />
                <span>Sonadanga, Khulna, Bangladesh</span>
              </span>
            </div>
          </div>

          {/* Col 2: Blog Topics (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Blog Topics
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/blog" className="hover:text-white transition-colors">Cybersecurity & Bio</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">UGC & TikTok Ads</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Real Estate Media</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Video Editing Trends</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Business Automation</a></li>
            </ul>
          </div>

          {/* Col 3: Dedicated Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Dedicated Pages
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Main Portfolio</a></li>
              <li><a href="/ugc-ads" className="hover:text-white transition-colors">UGC Ads Page 📱</a></li>
              <li><a href="/real-estate" className="hover:text-white transition-colors">Real Estate Suite 🏠</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">All Services</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Have a project, guest post idea, or want to consult with Yasin Arafat Jan directly?
            </p>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#0d7a3a]" />
                <a href="mailto:mdeasinarafatjan@gmail.com" className="hover:text-white underline">
                  mdeasinarafatjan@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle size={14} className="text-green-400" />
                <span>+880 1930-537776</span>
              </p>
            </div>
            <a
              href="https://wa.me/8801930537776?text=Hi%20Yasin%20Arafat%20Jan,%20I%20saw%20your%20blog%20and%20want%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#0d7a3a] hover:bg-[#0a632e] text-white text-xs font-bold rounded-xl transition-all shadow-md"
            >
              <MessageCircle size={15} />
              <span>Chat with Yasin Arafat Jan</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Return to Main Portfolio</span>
          </a>

          <p className="text-center">
            &copy; {new Date().getFullYear()} Yasin Arafat Jan (Arafat Jan). All Rights Reserved. Hackers Heaven, Sonadanga, Khulna.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default BlogFooter;
