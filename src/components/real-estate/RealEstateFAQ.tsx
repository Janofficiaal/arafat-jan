import { useState } from 'react';
import FadeIn from '../FadeIn';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How fast is your editing turnaround time?',
    answer: 'Vertical Reels & Talking-Head videos are delivered within 24 to 48 hours guaranteed. If you have an upcoming Open House or fresh listing hitting the MLS on Thursday, send me the raw clips by Tuesday and your edited assets will be ready before the weekend rush.',
  },
  {
    question: 'How do I send you my raw video footage?',
    answer: 'You can upload your files directly to a shared Google Drive, Dropbox, iCloud, or Frame.io folder. You can record directly from your iPhone (4K 60fps recommended) or upload high-res drone / camera files. No sorting or renaming needed on your end.',
  },
  {
    question: 'What is your revision policy if I need a tweak?',
    answer: 'I offer 100% Unlimited Revisions on all retainer packages. If you want to swap a piece of text, adjust a price callout, tweak the music, or re-time a clip, I will implement your changes immediately until the video is exactly how you envisioned.',
  },
  {
    question: 'How does the 100% Free Sample Video work?',
    answer: 'Simply fill out the form below or send me 1 raw video clip via Google Drive. I will edit it into a full, high-retention vertical Reel with animated subtitles, sound design, and color grading for free. No credit card, no contract, zero obligation. If you love it, we can partner up.',
  },
  {
    question: 'Are your edits MLS and Fair Housing compliant?',
    answer: 'Yes, absolutely. For property tours and YouTube walkthroughs, I provide both a branded version (with your headshot, brokerage logo, and contact info) and an MLS-compliant unbranded version with zero agent branding for MLS syndication.',
  },
  {
    question: 'Do you use copyright-free, commercial music?',
    answer: 'Yes! All background audio tracks and sound effects used in our edits come with full commercial rights for social media advertising and organic posting on Instagram, TikTok, YouTube, and Facebook with zero copyright strikes.',
  },
];

const RealEstateFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F4F9F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center mb-14 sm:mb-18">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base">
              Everything you need to know about partnering on your real estate video production.
            </p>
          </div>
        </FadeIn>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={idx} delay={idx * 0.05} y={15}>
                <div className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-xs hover:border-[#0d7a3a]/40 transition-colors">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <span className="font-bold text-gray-900 text-base sm:text-lg flex items-center gap-3">
                      <HelpCircle size={19} className="text-[#0d7a3a] flex-shrink-0" />
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#0d7a3a] text-white' : ''
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Quick Help WhatsApp Prompt */}
        <FadeIn delay={0.3} y={15}>
          <div className="mt-10 text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="font-bold text-gray-900 text-sm sm:text-base">Have a specific question not covered here?</p>
              <p className="text-xs text-gray-500">Ask me directly on WhatsApp for an immediate answer.</p>
            </div>
            <a
              href="https://wa.me/8801930537776?text=Hi%20Arafat,%20I%20have%20a%20question%20about%20your%20real%20estate%20video%20editing%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d7a3a] text-white font-bold text-xs sm:text-sm hover:bg-[#0a632e] transition-colors flex-shrink-0"
            >
              <MessageCircle size={16} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default RealEstateFAQ;

