import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';

interface PackageCard {
  badge: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  whatsAppMessage: string;
}

const packages: PackageCard[] = [
  {
    badge: 'QUICK START',
    price: '$99',
    priceSuffix: '/per ad',
    description:
      'Perfect for testing UGC ads on a single product or offer.',
    features: [
      '1 UGC-Style Video Ad (15-60s)',
      '2 Hook Variations Included',
      'Platform-Optimized Export (TikTok/Meta/YouTube)',
      'Kinetic Subtitles & Sound Design',
      '48-Hour Rush Delivery',
      '1 Round of Revisions',
    ],
    cta: 'Order Single Ad',
    popular: false,
    whatsAppMessage:
      "Hi! I'm interested in the Single Ad Creative package ($99). Let's discuss my project!",
  },
  {
    badge: 'MOST POPULAR • BEST VALUE',
    price: '$399',
    priceSuffix: '/month',
    description:
      'The complete monthly growth engine: 30 UGC Images + 8 UGC Video Ads + Full Social Media Management.',
    features: [
      '30 UGC Product & Lifestyle Ad Images',
      '8 UGC Video Ad Creatives (15–60s)',
      'Complete Social Media Management & Posting',
      '3 Hook Variations Per Video Ad',
      'A/B Creative Testing & Copywriting',
      '24–48h Priority Turnaround',
      'Dedicated WhatsApp VIP Channel',
      'Unlimited Revisions on All Creatives',
      'Monthly Performance & Creative Brief',
    ],
    cta: 'Start Growth Pack',
    popular: true,
    whatsAppMessage:
      "Hi! I'm interested in the Growth Pack ($399/month with 30 UGC Images + 8 UGC Videos + Social Media). Let's get started!",
  },
  {
    badge: 'HIGH-VOLUME TEAMS',
    price: 'Custom',
    priceSuffix: '/team pricing',
    description:
      'For agencies and brands needing dedicated creative capacity with unlimited queue.',
    features: [
      'Unlimited ad creative queue',
      'Full product launch video campaigns',
      'Custom brand kit & motion templates',
      'Influencer UGC editing & repurposing',
      'Weekly creative strategy calls',
      'Dedicated senior editor & Slack channel',
    ],
    cta: 'Discuss Custom Retainer',
    popular: false,
    whatsAppMessage:
      "Hi! I'm interested in the Agency / Brand Suite for my team. Let's discuss a custom retainer!",
  },
];

const UgcPackages: React.FC = () => {
  return (
    <section
      id="packages"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFE] to-white overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-sm font-semibold text-[#7C3AED]">
              <Sparkles className="h-4 w-4" />
              Transparent Pricing
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              UGC Ad Packages Built for{' '}
              <span className="text-[#7C3AED]">Growth</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#7C3AED]" />

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              No long-term contracts. Pause or cancel anytime. Get your first
              sample ad{' '}
              <span className="font-semibold text-[#7C3AED]">100% free</span>{' '}
              before committing.
            </p>
          </div>
        </FadeIn>

        {/* Packages Grid */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <FadeIn key={pkg.cta} delay={index * 0.15}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                  pkg.popular
                    ? 'scale-105 border-2 border-[#7C3AED] bg-gradient-to-br from-[#7C3AED]/5 via-white to-[#7C3AED]/5 shadow-2xl'
                    : 'border border-gray-200 bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Popular pill */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#7C3AED] px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-[#7C3AED]/30">
                      <Sparkles className="h-3.5 w-3.5" />
                      MOST POPULAR • BEST VALUE
                    </span>
                  </div>
                )}

                {/* Badge */}
                <span
                  className={`mt-2 inline-block w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                    pkg.popular
                      ? 'bg-[#7C3AED]/10 text-[#7C3AED]'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {pkg.badge}
                </span>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${
                      pkg.popular ? 'text-[#7C3AED]' : 'text-gray-900'
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {pkg.priceSuffix}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {pkg.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-gray-200" />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href={`https://wa.me/8801930537776?text=${encodeURIComponent(
                      pkg.whatsAppMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30 hover:bg-[#6D28D9] hover:shadow-xl hover:shadow-[#7C3AED]/40'
                        : 'border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white'
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Note */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <a
              href={`https://wa.me/8801930537776?text=${encodeURIComponent(
                'Hi! I run a high-volume brand/agency and would like to discuss custom volume rates.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-[#7C3AED]"
            >
              Running a high-volume brand or agency? Contact me for custom
              volume rates
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default UgcPackages;
