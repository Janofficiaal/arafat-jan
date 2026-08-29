import React from 'react';
import type { BlogPost } from '../../data/blogData';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Cybersecurity & Bio':
      return 'bg-[#0d7a3a] text-white';
    case 'UGC Ads':
      return 'bg-[#7C3AED] text-white';
    case 'Real Estate Media':
      return 'bg-[#00875A] text-white';
    case 'Video Editing':
      return 'bg-blue-600 text-white';
    default:
      return 'bg-gray-800 text-white';
  }
};

const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  return (
    <FadeIn delay={index * 0.08} y={25}>
      <article className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#0d7a3a]/40 transition-all duration-300 flex flex-col h-full group">
        
        {/* Cover Image */}
        <a href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-gray-900 block">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Category Pill */}
          <div className="absolute top-3 left-3 z-10">
            <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
          </div>

          {/* Reading Time */}
          <div className="absolute bottom-3 right-3 z-10 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </div>
        </a>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow">
          
          {/* Date */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-2.5">
            <Calendar size={13} />
            <span>{post.publishedDate}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5 group-hover:text-[#0d7a3a] transition-colors leading-snug">
            <a href={`/blog/${post.slug}`}>
              {post.title}
            </a>
          </h3>

          {/* Subtitle / Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
            {post.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[11px] bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>

          {/* Card Footer: Author & Read CTA */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2.5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover border border-gray-200"
              />
              <div>
                <p className="text-xs font-bold text-gray-900 leading-tight">{post.author.name}</p>
                <p className="text-[10px] text-gray-500 leading-tight">Author</p>
              </div>
            </div>

            <a
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0d7a3a] group-hover:translate-x-0.5 transition-transform"
            >
              <span>Read Article</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>

      </article>
    </FadeIn>
  );
};

export default BlogCard;
