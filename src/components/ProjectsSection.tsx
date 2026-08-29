import { useState } from 'react';
import FadeIn from './FadeIn';
import { MessageCircle, Play, Eye } from 'lucide-react';

const categories = [
  'All',
  'UGC Video Ads',
  'Video Editing',
  'Web Design',
  'Graphics Design',
  'Digital Marketing',
  'Automation & Security'
];

const projectsData = [
  {
    title: 'High-Converting TikTok & Meta UGC Ad Creative',
    category: 'UGC Video Ads',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80',
    fallback: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80',
    desc: 'Scroll-stopping UGC ad creative engineered with hook scripting, kinetic typography, dynamic pacing, and platform optimization for DTC brands.',
    tags: ['TikTok Spark Ads', 'Meta Reels', 'UGC Editing', 'Hook Scripting'],
    linkText: 'Explore UGC Ads Page 📱',
    customLink: '/ugc-ads',
  },
  {
    title: 'Luxury Real Estate Video Tours & Faceless AI Media',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    fallback: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80',
    desc: 'High-converting listing cinematic reels, luxury walkthroughs, and faceless AI market updates designed for top-producing real estate agents & brokerages.',
    tags: ['Luxury Walkthroughs', 'AI Faceless Reels', 'Real Estate Media'],
    linkText: 'Explore Real Estate Page 🏠',
    customLink: '/real-estate',
  },
  {
    title: 'E-Commerce Brand High-Converting Video Ad',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80',
    fallback: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80',
    desc: 'Dynamic commercial video with cinematic transitions, custom sound FX, and color grading for a premier DTC fashion brand.',
    tags: ['Premiere Pro', 'After Effects', 'Sound Design', 'Color Grading'],
    linkText: 'Order Similar Video Ad',
  },
  {
    title: 'Modern SaaS Landing Page & Web Platform',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    fallback: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    desc: 'Ultra-fast, fully responsive business landing page featuring clean UI/UX, seamless animations, and maximum conversion architecture.',
    tags: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Next.js'],
    linkText: 'Request Web Project',
  },
  {
    title: 'Corporate Brand Identity & Visual Guidelines',
    category: 'Graphics Design',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&auto=format&fit=crop&q=80',
    fallback: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    desc: 'Comprehensive visual branding package including vector logo design, custom typography, color systems, and marketing collaterals.',
    tags: ['Adobe Illustrator', 'Photoshop', 'Brand Guide'],
    linkText: 'Get Brand Package',
  },
  {
    title: 'Multi-Channel Paid Ads Lead Generation',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
    fallback: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    desc: 'Performance-driven Meta & Google Ads campaign that delivered 450+ qualified B2B leads in 30 days with an average 4.8x ROAS.',
    tags: ['Meta Ads', 'Google Ads', 'Funnel Optimization'],
    linkText: 'Scale Your Ads',
  },
  {
    title: 'Multi-App CRM & WhatsApp Automated Pipeline',
    category: 'Automation & Security',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    fallback: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    desc: 'Automated workflow connecting Facebook Leads, WhatsApp API, Google Sheets, and HubSpot CRM via Zapier & Make.com.',
    tags: ['Make.com', 'Zapier', 'WhatsApp API', 'CRM'],
    linkText: 'Automate Workflow',
  },
  {
    title: 'YouTube Long-form & Viral Shorts Package',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    fallback: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80',
    desc: 'Engaging storytelling edit with custom sound effects, captions, and motion graphics that generated 250k+ views and 15k+ subscribers.',
    tags: ['YouTube Growth', 'Viral Shorts', 'Motion Design'],
    linkText: 'Order Video Edit',
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#0d7a3a] font-bold text-sm sm:text-base uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Featured Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d7a3a] tracking-tight">
              Selected Recent Projects
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-5" />
            <p className="text-gray-600 text-base sm:text-lg">
              Explore a curated selection of high-performing projects delivered for international clients and brands.
            </p>
          </div>
        </FadeIn>

        {/* Filter Categories */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#0d7a3a] text-white shadow-md shadow-[#0d7a3a]/25 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredProjects.map((proj, idx) => (
            <FadeIn key={proj.title} delay={idx * 0.08} y={30}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#0d7a3a]/40 transition-all duration-300 flex flex-col h-full group">
                
                {/* Image Area with Fallback & Overlay Icon */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== proj.fallback) {
                        target.src = proj.fallback;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#0d7a3a] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                    {proj.category}
                  </div>

                  {/* Hover Overlay with Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#0d7a3a] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      {proj.category === 'Video Editing' ? <Play size={20} className="fill-[#0d7a3a] ml-0.5" /> : <Eye size={20} />}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0d7a3a] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {proj.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#0d7a3a]/10 text-[#0d7a3a] font-medium px-2.5 py-0.5 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button (Internal Page Link or WhatsApp Inquire) */}
                  {proj.customLink ? (
                    <a
                      href={proj.customLink}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#0d7a3a] text-white hover:bg-[#0a632e] font-bold text-sm transition-all duration-300 shadow-sm"
                    >
                      <span>{proj.linkText}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  ) : (
                    <a
                      href={`https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20saw%20your%20project:%20${encodeURIComponent(proj.title)}%20and%20want%20to%20hire%20you%20for%20similar%20work.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border-2 border-[#0d7a3a] text-[#0d7a3a] group-hover:bg-[#0d7a3a] group-hover:text-white font-bold text-sm transition-all duration-300"
                    >
                      <MessageCircle size={16} />
                      {proj.linkText}
                    </a>
                  )}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;

