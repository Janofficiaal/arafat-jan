import FadeIn from '../FadeIn';
import { MessageCircle, Film, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Share Your Product & Brief',
    description: 'Send your product details, target audience, platform preferences, and any raw footage or photos via WhatsApp or the form below. Takes 2 minutes.',
    color: 'bg-[#7C3AED]',
  },
  {
    step: '02',
    icon: Film,
    title: 'I Create Your Ad Creatives',
    description: 'I script the hooks, edit the footage, add kinetic captions, sound design, and platform-optimized exports. Multiple hook variations included.',
    color: 'bg-[#6D28D9]',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Launch & Scale What Works',
    description: 'Receive your polished UGC ads within 24–48 hours. Test them, scale the winners, and request fresh variations for your next campaign.',
    color: 'bg-[#5B21B6]',
  },
];

const UgcWorkflow = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#7C3AED] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#7C3AED]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              From Brief to Live Ad in 48 Hours
            </h2>
            <div className="w-20 h-1.5 bg-[#7C3AED] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base">
              No complicated onboarding. No back-and-forth emails. Just fast, high-converting ad creatives.
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <FadeIn key={item.step} delay={idx * 0.15} y={25}>
              <div className="relative text-center group">
                {/* Step Number */}
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={28} className="text-white" />
                </div>

                {/* Connector Line (hidden on last item & mobile) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-[#7C3AED]/30 to-[#7C3AED]/10" />
                )}

                <span className="text-[#7C3AED] font-black text-sm uppercase tracking-widest mb-2 block">
                  Step {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} y={20}>
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-[#7C3AED]/5 px-5 py-2.5 rounded-xl border border-[#7C3AED]/15">
              <CheckCircle2 size={16} className="text-[#7C3AED]" />
              <span>Average delivery time: <strong className="text-gray-900">24–48 hours</strong> from approved brief</span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default UgcWorkflow;
