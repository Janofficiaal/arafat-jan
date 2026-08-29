import { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogData';
import BlogNavbar from '../components/blog/BlogNavbar';
import BlogCard from '../components/blog/BlogCard';
import BlogFooter from '../components/blog/BlogFooter';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import FadeIn from '../components/FadeIn';
import { Search, Sparkles, BookOpen, ArrowRight, Flame } from 'lucide-react';

const categories = [
  'All',
  'Cybersecurity & Bio',
  'UGC Ads',
  'Real Estate Media',
  'Video Editing',
  'Digital Marketing'
];

const BlogListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'SEO Blog & Insights by Yasin Arafat Jan | Cybersecurity, UGC & Video Strategy';
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFDFB] text-gray-800 selection:bg-[#0d7a3a] selection:text-white flex flex-col">
      {/* Blog Navbar */}
      <BlogNavbar />

      {/* Hero Header Section */}
      <header className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-gradient-to-b from-[#F3F9F5] via-[#FAFDFB] to-[#FAFDFB] border-b border-gray-100 relative overflow-hidden">
        {/* Subtle glow decor */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#0d7a3a]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 left-10 w-80 h-80 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <FadeIn delay={0.1} y={20}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d7a3a]/10 border border-[#0d7a3a]/20 text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
                <Sparkles size={15} />
                Insights & Thought Leadership
              </span>
            </FadeIn>

            <FadeIn delay={0.2} y={20}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-5">
                The <span className="text-[#0d7a3a]">Arafat Jan</span> Journal
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                Proven strategies, technical breakdowns, and growth frameworks on <strong>Cybersecurity</strong>, <strong>UGC Video Ads</strong>, and <strong>Digital Media</strong> by Yasin Arafat Jan.
              </p>
            </FadeIn>
          </div>

          {/* Search Bar */}
          <FadeIn delay={0.4} y={20}>
            <div className="max-w-xl mx-auto relative">
              <div className="relative flex items-center">
                <Search size={20} className="absolute left-4 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search articles, keywords, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 focus:border-[#0d7a3a] focus:ring-4 focus:ring-[#0d7a3a]/10 rounded-2xl text-sm sm:text-base outline-none transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-xs font-bold text-gray-400 hover:text-gray-600"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </FadeIn>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex-grow w-full">
        
        {/* Featured Post Banner (Only shown if no search active) */}
        {!searchQuery && selectedCategory === 'All' && featuredPost && (
          <FadeIn delay={0.1} y={25}>
            <section className="mb-16 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                
                {/* Featured Cover Image (5 cols) */}
                <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[380px] bg-gray-900 overflow-hidden">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#0d7a3a] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg">
                      <Flame size={14} className="fill-white" />
                      Featured Spotlight
                    </span>
                  </div>
                </div>

                {/* Featured Content (7 cols) */}
                <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold mb-3">
                    <span className="text-[#0d7a3a] uppercase font-bold">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span>{featuredPost.publishedDate}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4 hover:text-[#0d7a3a] transition-colors">
                    <a href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </a>
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredPost.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#0d7a3a]/30"
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-900">{featuredPost.author.name}</p>
                        <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d7a3a] hover:bg-[#0a632e] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all group"
                    >
                      <span>Read Full Biography</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            </section>
          </FadeIn>
        )}

        {/* Category Filter Tabs */}
        <FadeIn delay={0.2} y={20}>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-gray-200">
            
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-[#0d7a3a] text-white shadow-md shadow-[#0d7a3a]/25 scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Post Count Indicator */}
            <span className="text-xs sm:text-sm font-semibold text-gray-500">
              Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
            </span>

          </div>
        </FadeIn>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
            <BookOpen size={48} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-1">No articles found</h3>
            <p className="text-sm text-gray-500 mb-5">
              Try adjusting your search query or switching to another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#0d7a3a] text-white font-bold text-xs rounded-xl shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Blog Footer */}
      <BlogFooter />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogListPage;
