import { useState } from 'react';
import FadeIn from './FadeIn';
import { MessageCircle, Phone, Mail, Send, CheckCircle2, Clock, Globe2 } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Video Editing & Motion');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(
      `Hi Arafat Jan,\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\nMessage: ${message}`
    );
    window.open(`https://wa.me/8801930537776?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F4F9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#0d7a3a] font-bold text-sm sm:text-base uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d7a3a] tracking-tight">
              Let&apos;s Build Something Exceptional
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-5" />
            <p className="text-gray-600 text-base sm:text-lg">
              Have an upcoming project, freelance requirement, or ongoing contract? Reach out directly for an instant response.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column - Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={0.1} y={20}>
              <div className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Direct Global Channels
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Available for contracts, full-scale freelance projects, and agency support with flexible global timezone overlap.
                </p>

                {/* WhatsApp Info Card */}
                <a
                  href="https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-200 hover:bg-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0d7a3a] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">WhatsApp (Instant Response)</p>
                    <p className="text-lg font-bold text-[#0d7a3a]">+880 1930-537776</p>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#0d7a3a]/10 text-[#0d7a3a] flex items-center justify-center flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Direct Phone</p>
                    <p className="text-base font-bold text-gray-900">+880 1930-537776</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#0d7a3a]/10 text-[#0d7a3a] flex items-center justify-center flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Email</p>
                    <p className="text-base font-bold text-gray-900">mdeasinarafatjan@gmail.com</p>
                  </div>
                </div>

                {/* Global Availability Badges */}
                <div className="pt-2 border-t border-gray-100 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Clock size={15} className="text-[#0d7a3a]" />
                    <span>Response Time: Typically under 15 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Globe2 size={15} className="text-[#0d7a3a]" />
                    <span>Serving Clients in USA, UK, Canada, Australia & Worldwide</span>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Right Column - Project Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={20}>
              <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send a Direct Project Brief
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Fill out the quick form below to initiate a structured project discussion directly on WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Your Name / Company
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan / Apex Media"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Required Service
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all bg-white"
                      >
                        <option value="Video Editing & Motion">Video Editing & Motion Graphics</option>
                        <option value="Ethical Hacking & Security">Ethical Hacking & Cyber Security</option>
                        <option value="Digital Marketing & Ads">Digital Marketing & Paid Ads</option>
                        <option value="Website Design & Development">Website Design & Development</option>
                        <option value="Graphic Design & Branding">Graphic Design & Brand Identity</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Business Automation">Workflow & Business Automation</option>
                        <option value="Full-Service Bundle">Full-Service Multi-Discipline Project</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Estimated Budget (USD)
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all bg-white"
                      >
                        <option value="< $500">&lt; $500</option>
                        <option value="$500 - $1,500">$500 - $1,500</option>
                        <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                        <option value="$3,000 - $5,000+">$3,000 - $5,000+</option>
                        <option value="Monthly Retainer">Monthly Retainer Basis</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      Project Details & Goals
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your deliverables, timeline, or current challenge..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d7a3a] focus:ring-2 focus:ring-[#0d7a3a]/20 outline-none text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0d7a3a] text-white font-bold rounded-lg hover:bg-[#0a632e] hover:shadow-lg transition-all text-base shadow-md cursor-pointer"
                  >
                    <Send size={18} />
                    Send Inquiry to WhatsApp (+880 1930-537776)
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                    <CheckCircle2 size={14} className="text-[#0d7a3a]" />
                    <span>Free Consultation & 100% Confidentiality Guaranteed</span>
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

export default ContactSection;


