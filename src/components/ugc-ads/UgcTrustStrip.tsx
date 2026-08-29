import React from 'react';
import { Zap, TrendingUp, Target, Star } from 'lucide-react';
import FadeIn from '../FadeIn';

const stats = [
  { icon: Zap, label: 'Avg. Turnaround', value: '24–48h', delay: 0 },
  { icon: TrendingUp, label: 'Avg. ROAS Lift', value: '2.4x', delay: 0.1 },
  { icon: Target, label: 'CPA Reduction', value: '67%', delay: 0.2 },
  { icon: Star, label: 'Client Satisfaction', value: '100%', delay: 0.3 },
];

const UgcTrustStrip: React.FC = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <FadeIn key={stat.label} delay={stat.delay}>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#7C3AED]/10 flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <span className="font-black text-2xl text-gray-900">{stat.value}</span>
                <span className="text-xs text-gray-500 mt-1">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcTrustStrip;
