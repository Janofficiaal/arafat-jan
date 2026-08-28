import FadeIn from './FadeIn';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Alexander Wright',
    role: 'Founder & CEO, Apex DTC Brands (USA)',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    content: 'Arafat delivered exceptional video ad creatives that directly slashed our customer acquisition cost by 38% and scaled our Meta ad ROAS to 4.2x. His pacing, sound design, and speed are world-class.',
    rating: 5,
    project: 'E-Commerce Video Ads & Funnels',
  },
  {
    name: 'David Sterling',
    role: 'Operations Director, Sterling Tech Solutions (UK)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    content: 'Arafat conducted a thorough cybersecurity audit and rebuilt our agency landing page from scratch. Communication was seamless across time zones and the delivery exceeded every expectation.',
    rating: 5,
    project: 'Cybersecurity Audit & Web Redesign',
  },
  {
    name: 'Marcus Vance',
    role: 'Head of Growth, Momentum Media (Canada)',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    content: 'The custom Zapier & Make.com automated workflows Arafat built saved our marketing team over 25 hours every single week. Highly reliable, deeply skilled, and great to work with.',
    rating: 5,
    project: 'Business & CRM Automation',
  },
];

const ReviewsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#0d7a3a] font-bold text-sm sm:text-base uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Client Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d7a3a] tracking-tight">
              What Global Clients Say
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-5" />
            <p className="text-gray-600 text-base sm:text-lg">
              Hear directly from founders, marketing leads, and directors who achieved tangible business results.
            </p>
          </div>
        </FadeIn>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <FadeIn key={rev.name} delay={idx * 0.1} y={30}>
              <div className="bg-[#F8FAF9] rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#0d7a3a]/30 transition-all duration-300 flex flex-col justify-between h-full relative">
                
                <Quote className="text-[#0d7a3a]/20 w-10 h-10 mb-4" />

                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  &ldquo;{rev.content}&rdquo;
                </p>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={17} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200/70">
                    <img
                      src={rev.image}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#0d7a3a]"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{rev.name}</h4>
                      <p className="text-xs text-gray-500">{rev.role}</p>
                      <p className="text-[11px] text-[#0d7a3a] font-semibold">{rev.project}</p>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;


