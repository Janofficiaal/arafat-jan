import { useState } from 'react';
import FadeIn from '../FadeIn';
import { Calculator, Clock, DollarSign, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const RealEstateRoiCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8);
  const [hourlyRate, setHourlyRate] = useState<number>(150);

  // Real-time calculation: Hours/week * Hourly Rate * 4 weeks/month
  const monthlyLostValue = hoursPerWeek * hourlyRate * 4;
  const yearlyLostValue = monthlyLostValue * 12;
  const hoursSavedPerMonth = hoursPerWeek * 4;

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Background Subtle Green Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#0d7a3a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
              <Calculator size={15} />
              <span>Interactive ROI & Time Calculator</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              How Much is Manual Video Editing Costing You?
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Your highest-value task is meeting buyers, pitching listings, and negotiating contracts — not wrestling with editing apps at 11 PM.
            </p>
          </div>
        </FadeIn>

        {/* Calculator Widget Container */}
        <FadeIn delay={0.15} y={25}>
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#FAFDFB] to-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden p-6 sm:p-10 md:p-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (7 cols): Interactive Sliders */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Slider 1: Hours per week */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="hours-slider" className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
                      <Clock size={18} className="text-[#0d7a3a]" />
                      <span>Hours spent per week on editing & socials:</span>
                    </label>
                    <span className="text-xl font-black text-[#0d7a3a] bg-[#0d7a3a]/10 px-3 py-1 rounded-xl">
                      {hoursPerWeek} hrs/wk
                    </span>
                  </div>
                  
                  <input
                    id="hours-slider"
                    type="range"
                    min="2"
                    max="25"
                    step="1"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0d7a3a]"
                  />
                  
                  <div className="flex justify-between text-[11px] font-semibold text-gray-500 mt-1.5">
                    <span>2 hrs (Minimal)</span>
                    <span>8 hrs (Average Agent)</span>
                    <span>25 hrs (Heavy DIY)</span>
                  </div>
                </div>

                {/* Slider 2: Estimated Hourly Commission Value */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="rate-slider" className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
                      <DollarSign size={18} className="text-[#0d7a3a]" />
                      <span>Your estimated hourly commission value:</span>
                    </label>
                    <span className="text-xl font-black text-[#0d7a3a] bg-[#0d7a3a]/10 px-3 py-1 rounded-xl">
                      ${hourlyRate}/hr
                    </span>
                  </div>
                  
                  <input
                    id="rate-slider"
                    type="range"
                    min="50"
                    max="500"
                    step="25"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0d7a3a]"
                  />
                  
                  <div className="flex justify-between text-[11px] font-semibold text-gray-500 mt-1.5">
                    <span>$50/hr</span>
                    <span>$150/hr (Standard)</span>
                    <span>$500/hr (Top Producer)</span>
                  </div>
                </div>

                {/* Value Checkmarks */}
                <div className="pt-2 space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0d7a3a] flex-shrink-0" />
                    <span>Get back <strong>~{hoursSavedPerMonth} hours every single month</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0d7a3a] flex-shrink-0" />
                    <span>Re-invest your free hours into closing <strong>1–2 extra listings</strong></span>
                  </div>
                </div>

              </div>

              {/* Right Column (5 cols): Real-Time Lost Value Display Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#0d7a3a] text-white rounded-2xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
                  
                  <div className="relative z-10">
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-green-200 bg-white/15 px-3 py-1 rounded-full mb-3">
                      Estimated Lost Opportunity
                    </span>
                    
                    <p className="text-xs text-white/80 font-medium mb-1">
                      Monthly Value of DIY Editing Time:
                    </p>
                    
                    <h3 className="text-4xl sm:text-5xl font-black text-white mb-2 font-['Plus_Jakarta_Sans'] tracking-tight">
                      ${monthlyLostValue.toLocaleString()}
                      <span className="text-sm font-semibold text-white/80">/mo</span>
                    </h3>

                    <p className="text-xs text-green-100/90 mb-5">
                      That equals <strong className="text-yellow-300 font-bold">${yearlyLostValue.toLocaleString()}</strong> of lost client time per year.
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/20">
                    <a
                      href="#sample-form"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-white text-[#0d7a3a] font-extrabold text-sm rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all shadow-md group"
                    >
                      <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                      <span>Reclaim Your Time ($500/mo)</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default RealEstateRoiCalculator;
