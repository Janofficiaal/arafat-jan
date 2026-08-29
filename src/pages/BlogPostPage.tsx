import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import BlogNavbar from '../components/blog/BlogNavbar';
import BlogFooter from '../components/blog/BlogFooter';
import BlogCard from '../components/blog/BlogCard';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import FadeIn from '../components/FadeIn';
import { 
  Calendar, 
  Clock, 
  Share2, 
  Check, 
  MessageCircle, 
  BookOpen, 
  Tag, 
  ChevronRight,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Find the post by slug or fallback
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  useEffect(() => {
    if (post) {
      document.title = `${post.metaTitle} | Arafat Jan`;
      // Update meta description if present
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.metaDescription);
      }
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#FAFDFB] text-gray-800 selection:bg-[#0d7a3a] selection:text-white flex flex-col">
      
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-gray-200">
        <div
          className="h-full bg-[#0d7a3a] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Blog Navbar */}
      <BlogNavbar />

      {/* Main Article Container */}
      <main className="pt-24 sm:pt-32 pb-20 flex-grow">
        
        {/* Article Header & Hero */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          
          {/* Breadcrumbs */}
          <FadeIn delay={0} y={15}>
            <nav className="flex items-center gap-2 text-xs text-gray-500 font-semibold mb-6 flex-wrap">
              <a href="/" className="hover:text-[#0d7a3a] transition-colors">Home</a>
              <ChevronRight size={14} />
              <a href="/blog" className="hover:text-[#0d7a3a] transition-colors">Blog</a>
              <ChevronRight size={14} />
              <span className="text-gray-900 line-clamp-1">{post.category}</span>
            </nav>
          </FadeIn>

          {/* Category Badge & Metadata */}
          <FadeIn delay={0.1} y={15}>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-600 mb-4 flex-wrap">
              <span className="bg-[#0d7a3a] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} className="text-gray-400" />
                {post.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={14} className="text-gray-400" />
                {post.readTime}
              </span>
            </div>
          </FadeIn>

          {/* Article Title */}
          <FadeIn delay={0.2} y={20}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-5">
              {post.title}
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.3} y={20}>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 font-normal">
              {post.subtitle}
            </p>
          </FadeIn>

          {/* Author Bar & Share Button */}
          <FadeIn delay={0.35} y={15}>
            <div className="flex items-center justify-between py-4 border-y border-gray-200 gap-4 flex-wrap">
              
              <div className="flex items-center gap-3.5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0d7a3a]/30 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{post.author.name}</h4>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold rounded-xl shadow-sm transition-all"
                  title="Share Article"
                >
                  {copied ? <Check size={14} className="text-green-600" /> : <Share2 size={14} />}
                  <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
                </button>
              </div>

            </div>
          </FadeIn>

        </header>

        {/* Featured Cover Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <FadeIn delay={0.2} y={25}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/9] bg-gray-950">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </FadeIn>
        </div>

        {/* Article Layout Grid (Content + Sidebar) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            
            {/* Left Main Content (8 cols) */}
            <div className="lg:col-span-8">
              
              <article className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-200/90 shadow-lg">
                {/* Render Rich HTML Content */}
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                      <Tag size={13} />
                      Tags:
                    </span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#0d7a3a]/10 text-[#0d7a3a] font-semibold px-3 py-1 rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Bio Box at Bottom */}
                <div className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-[#F3F9F5] to-white rounded-2xl border border-[#0d7a3a]/20 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0d7a3a] shadow-md flex-shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      Written by {post.author.name}
                    </h4>
                    <p className="text-xs font-bold text-[#0d7a3a] uppercase tracking-wider mb-2">
                      CEO at Hackers Heaven • Senior Digital Specialist • 10+ Years Experience
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      <strong>Yasin Arafat Jan</strong> is an Ethical Hacker, Cyber Security Instructor, and Video Creative Specialist based in Sonadanga, Khulna. He helps brands scale with cyber defense, viral UGC ads, and real estate media.
                    </p>
                    <a
                      href="https://wa.me/8801930537776?text=Hi%20Yasin%20Arafat%20Jan,%20I%20read%20your%20article%20and%20want%20to%20connect."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d7a3a] text-white text-xs font-bold rounded-xl hover:bg-[#0a632e] shadow-md transition-all"
                    >
                      <MessageCircle size={15} />
                      <span>Chat Directly on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </article>

            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Sticky Container */}
              <div className="sticky top-28 space-y-8">
                
                {/* Table of Contents */}
                {post.tableOfContents && post.tableOfContents.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md">
                    <h4 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                      <BookOpen size={18} className="text-[#0d7a3a]" />
                      <span>Table of Contents</span>
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      {post.tableOfContents.map((item, idx) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-gray-600 hover:text-[#0d7a3a] font-medium flex items-start gap-2 transition-colors"
                          >
                            <span className="text-xs text-[#0d7a3a] font-bold mt-0.5">{idx + 1}.</span>
                            <span className="leading-snug">{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Author Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md text-center">
                  <img
                    src="/arafat-jan.jpg"
                    alt="Yasin Arafat Jan"
                    className="w-24 h-24 rounded-2xl object-cover mx-auto mb-4 border-2 border-[#0d7a3a] shadow-lg"
                  />
                  <h4 className="text-lg font-bold text-gray-900">Yasin Arafat Jan</h4>
                  <p className="text-xs text-[#0d7a3a] font-bold uppercase tracking-wider mb-2">
                    CEO, Hackers Heaven
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    Sonadanga, Khulna, Bangladesh
                  </p>
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <a
                      href="https://wa.me/8801930537776?text=Hi%20Yasin%20Arafat%20Jan,%20I%20want%20to%20hire%20you%20for%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 bg-[#0d7a3a] text-white text-xs font-bold rounded-xl hover:bg-[#0a632e] transition-all shadow-sm"
                    >
                      Hire Yasin Arafat Jan &rarr;
                    </a>
                  </div>
                </div>

                {/* Quick Navigation / Explore Other Pages */}
                <div className="bg-gradient-to-br from-[#0d7a3a] to-[#0a632e] text-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-base font-bold mb-2 flex items-center gap-2">
                    <Sparkles size={16} />
                    <span>Explore Specialized Pages</span>
                  </h4>
                  <p className="text-xs text-white/80 mb-4">
                    Check out dedicated portfolio showcases for specific industries:
                  </p>
                  <div className="space-y-2.5">
                    <a
                      href="/ugc-ads"
                      className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-all"
                    >
                      <span>UGC & TikTok Ads Page 📱</span>
                      <span>&rarr;</span>
                    </a>
                    <a
                      href="/real-estate"
                      className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-all"
                    >
                      <span>Real Estate Media Suite 🏠</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>

              </div>

            </aside>

          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0d7a3a] bg-[#0d7a3a]/10 px-3 py-1 rounded-full">
                  Keep Reading
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
                  Related Insights & Guides
                </h3>
              </div>
              <a
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0d7a3a] hover:underline"
              >
                <span>View All Articles</span>
                <ArrowLeft size={16} className="rotate-180" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rPost, idx) => (
                <BlogCard key={rPost.id} post={rPost} index={idx} />
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Blog Footer */}
      <BlogFooter />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogPostPage;
