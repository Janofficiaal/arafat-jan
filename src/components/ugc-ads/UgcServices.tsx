import React from 'react';
import { Video, Package, MessageSquare, Layers, CheckCircle2 } from 'lucide-react';
import FadeIn from '../FadeIn';

interface ServiceCard {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

const services: ServiceCard[] = [
  {
    title: 'TikTok & Reels UGC Ads',
    icon: <Video className="w-6 h-6 text-[#7C3AED]" />,
    description:
      'Native-looking UGC-style video ads optimized for TikTok Spark Ads, Instagram Reels, and Facebook Feed. Authentic feel, professional finish.',
    features: [
      'Hook-first 3-second openers',
      'Native captions & trending audio sync',
      'Platform-specific aspect ratios (9:16, 1:1, 4:5)',
    ],
  },
  {
    title: 'Product Showcase & Unboxing',
    icon: <Package className="w-6 h-6 text-[#7C3AED]" />,
    description:
      'High-retention product demos, unboxing reveals, and lifestyle B-roll compilations that make viewers want to buy immediately.',
    features: [
      'Cinematic close-up transitions',
      'Before/After transformation reveals',
      'Dynamic text overlays & price callouts',
    ],
  },
  {
    title: 'Testimonial & Social Proof Ads',
    icon: <MessageSquare className="w-6 h-6 text-[#7C3AED]" />,
    description:
      'Turn customer reviews, screenshots, and testimonial clips into trust-building video ads that overcome objections and drive conversions.',
    features: [
      'Review highlight animations',
      'Star rating motion graphics',
      'Split-screen comparison layouts',
    ],
  },
  {
    title: 'A/B Creative Variation Packs',
    icon: <Layers className="w-6 h-6 text-[#7C3AED]" />,
    description:
      'Get 3-5 hook variations of the same ad to test what converts best. Different openers, CTAs, and pacing — same core message.',
    features: [
      'Multiple hook & CTA variations',
      'Data-driven iteration support',
      'Winning creative identification framework',
    ],
  },
];

const UgcServices: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFE] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-semibold rounded-full mb-4">
              Specialized UGC Ad Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ad Creatives That Convert, Not Just Impress
            </h2>
            <div className="w-16 h-1 bg-[#7C3AED] mx-auto rounded-full mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              From scroll-stopping hooks to conversion-focused CTAs, every creative
              is engineered to drive real results across paid social platforms.
            </p>
          </div>
        </FadeIn>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#7C3AED]/30 transition-all h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#7C3AED]/10 flex items-center justify-center mb-5">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#7C3AED] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcServices;
