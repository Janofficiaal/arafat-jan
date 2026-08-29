import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../FadeIn';

const faqItems = [
  {
    question: 'What exactly is a UGC-style ad?',
    answer:
      'UGC (User-Generated Content) ads are designed to look like authentic, organic social media content rather than traditional polished commercials. They feel native to platforms like TikTok, Instagram, and Facebook — which is why they consistently outperform traditional ads in engagement and conversion rates.',
  },
  {
    question: 'Do I need to send you raw footage?',
    answer:
      "You can! But it's not required. I can work with your existing product photos, screen recordings, lifestyle clips, or even stock footage. I'll handle all the editing, pacing, subtitles, sound design, and hook scripting to create a scroll-stopping final ad.",
  },
  {
    question: 'Which platforms do you optimize ads for?',
    answer:
      "I create ads optimized for TikTok (including Spark Ads), Meta (Facebook & Instagram — Feed, Stories, Reels), YouTube Shorts, and Pinterest Video Pins. Each export is tailored to the platform's specific aspect ratio, safe zones, and best practices.",
  },
  {
    question: 'How fast is the turnaround?',
    answer:
      'Standard turnaround is 24–48 hours for single ad creatives. Monthly retainer clients get priority queue with same-day delivery available for urgent campaigns.',
  },
  {
    question: 'Can I get a free sample before committing?',
    answer:
      'Absolutely! I offer 1 free sample UGC ad so you can evaluate my style, quality, and speed before spending a single dollar. No credit card, no contracts — just fill out the form below.',
  },
  {
    question: "What if I don't like the final ad?",
    answer:
      'All packages include revision rounds (unlimited for monthly retainer clients). I work closely with you until the creative matches your brand vision. My goal is your complete satisfaction.',
  },
  {
    question: 'Do you write the ad scripts and hooks?',
    answer:
      "Yes! Every ad comes with a custom-written hook and script based on your product, target audience, and platform. I research trending hooks and proven copywriting frameworks to maximize your ad's stopping power.",
  },
  {
    question: 'How do I communicate with you during projects?',
    answer:
      "I'm available 24/7 via WhatsApp and Slack. Monthly retainer clients get a dedicated channel for real-time feedback, revision requests, and creative briefings.",
  },
];

function UgcFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFE] to-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-semibold tracking-wide mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything Brands Ask Before Getting Started
            </h2>
            <div className="w-16 h-1 bg-[#7C3AED] rounded-full mx-auto" />
          </div>
        </FadeIn>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={index} delay={index * 0.05}>
                <div
                  className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'border-l-4 border-[#7C3AED] bg-[#F5F3FF] shadow-md'
                      : 'border border-gray-200 bg-white hover:shadow-sm'
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-gray-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7C3AED] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UgcFAQ;
