import { useState } from 'react';
import FadeIn from '../FadeIn';
import { 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

const RealEstateFreeSampleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brokerageCity, setBrokerageCity] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [goal, setGoal] = useState('Vertical Reel (9:16) for Instagram/TikTok');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(
      `🏠 FREE SAMPLE REEL CLAIM:\n\n` +
      `Agent Name: ${name}\n` +
      `Email: ${email}\n` +
      `Brokerage & City: ${brokerageCity}\n` +
      `Raw Video/Drive Link: ${videoLink}\n` +
      `Primary Goal: ${goal}\n` +
      `Additional Notes: ${notes || 'N/A'}`
    );
    window.open(`https://wa.me/8801930537776?text=${encodedText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="sample-form" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0d7a3a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={25}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-[#0d7a3a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Zero Risk • 100% Free Trial
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Ready to Scale Your Real Estate Brand with Video?
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Send me 1 raw clip or a link to your current listing, and I&apos;ll edit a high-retention sample Reel within 24 hours — 100% Free.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Offer Details & Direct Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={0.1} y={20}>
              <div className="bg-[#FAFDFB] rounded-3xl p-7 sm:p-8 border border-[#0d7a3a]/25 shadow-md space-y-6">
                
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#0d7a3a] bg-white border border-[#0d7a3a]/20 px-3 py-1 rounded-full mb-3 shadow-xs">
                    <Sparkles size={14} className="text-yellow-400" />
                    <span>Free Sample Guarantee</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 leading-tight">
                    What You Get in Your Free Sample Edit:
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {[
                    '1 Fully Edited Vertical Reel (9:16) with viral hook',
                    'Kinetic animated word-by-word subtitles & emojis',
                    'HDR Interior Color Grading & Contrast Fix',
                    'Audio enhancement, noise cleanup & trending sound FX',
                    'Fast 24-Hour turnaround delivered straight to your inbox',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 size={17} className="text-[#0d7a3a] flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 space-y-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                    <Clock size={16} className="text-[#0d7a3a]" />
                    <span>24h Turnaround Priority Queue</span>
                  </div>
                  <p>
                    No credit card required. No ongoing obligation. If you don&apos;t love the edit, you keep the video file anyway.
                  </p>
                </div>

                {/* Direct Alternative Links */}
                <div className="pt-2 border-t border-gray-200/80 space-y-3">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Or Contact Arafat Directly:
                  </p>
                  
                  <a
                    href="https://wa.me/8801930537776?text=Hi%20Arafat,%20I%20am%20a%20Realtor%20and%20want%20to%20claim%20my%20free%20sample%20edit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-200 hover:bg-green-100 transition-colors text-xs sm:text-sm font-bold text-[#0d7a3a]"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp: +880 1930-537776</span>
                  </a>

                  <a
                    href="mailto:mdeasinarafatjan@gmail.com?subject=Real%20Estate%20Video%20Editing%20Inquiry"
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors text-xs sm:text-sm font-bold text-gray-700"
                  >
                    <Mail size={18} className="text-gray-500" />
                    <span>Email: mdeasinarafatjan@gmail.com</span>
                  </a>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Right Column: Submission Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={20}>
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200 shadow-xl">
                
                <h3 className="text-2xl font-black text-gray-900 mb-1">
                  Claim Your Free Sample Video
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-6">
                  Fill in your details below and paste your Google Drive / Dropbox link with 1 raw video clip.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                    <span>Thank you! Your request opened in WhatsApp. I will begin reviewing your raw clip immediately.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Agent Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@compass.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Brokerage & City */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Brokerage & City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Compass Real Estate, Austin TX"
                      value={brokerageCity}
                      onChange={(e) => setBrokerageCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Raw Video Link */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Link to Raw Video / Google Drive / Dropbox / Listing URL *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://drive.google.com/drive/folders/..."
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all"
                    />
                    <p className="text-[11px] text-gray-400 mt-1">Make sure Google Drive link sharing is set to &ldquo;Anyone with link can view&rdquo;.</p>
                  </div>

                  {/* Preferred Format Goal */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Preferred Video Format / Goal
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all bg-white"
                    >
                      <option value="Vertical Reel (9:16) for Instagram/TikTok">Vertical Reel (9:16) for Instagram & TikTok</option>
                      <option value="Agent Talking-Head Educational Short">Agent Talking-Head Educational Short</option>
                      <option value="Cinematic Landscape Property Tour (16:9)">Cinematic Landscape Property Tour (16:9)</option>
                      <option value="Just Listed / Just Sold Announcement Reel">Just Listed / Just Sold Announcement Reel</option>
                    </select>
                  </div>

                  {/* Optional Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Specific Notes, Brand Colors or Listing Price (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Listing price $1.2M, highlight chef's kitchen and pool, use black & gold subtitle style..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0d7a3a] text-white font-extrabold rounded-xl hover:bg-[#0a632e] hover:shadow-xl hover:shadow-[#0d7a3a]/25 transition-all text-base shadow-md cursor-pointer group"
                  >
                    <Sparkles size={18} className="text-yellow-300" />
                    <span>Claim My Free Sample Reel 🚀</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                    <ShieldCheck size={15} className="text-[#0d7a3a]" />
                    <span>100% Free • No Credit Card • 24h Guaranteed Turnaround</span>
                  </div>

                </form>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RealEstateFreeSampleForm;

