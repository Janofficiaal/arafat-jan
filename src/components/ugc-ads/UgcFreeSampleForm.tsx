import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';
import FadeIn from '../FadeIn';

const platformOptions = [
  'TikTok',
  'Instagram Reels',
  'Facebook Feed',
  'YouTube Shorts',
  'Multiple Platforms',
];

const bulletPoints = [
  '24–48h turnaround on every project',
  'Scroll-stopping hooks that drive clicks',
  '100% satisfaction or unlimited revisions',
  'Direct WhatsApp access for real-time updates',
  'No contracts — scale up or pause anytime',
];

function UgcFreeSampleForm() {
  const [form, setForm] = useState({
    brand: '',
    name: '',
    email: '',
    product: '',
    platform: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = [
      `🎬 *Free UGC Sample Request*`,
      ``,
      `*Brand / Company:* ${form.brand}`,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Product:* ${form.product}`,
      `*Platform:* ${form.platform}`,
      `*Message:* ${form.message || 'N/A'}`,
    ].join('\n');

    const url = `https://wa.me/8801930537776?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="sample-form"
      className="relative py-24 bg-gradient-to-b from-[#F5F3FF] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-semibold tracking-wide mb-4">
              Zero Risk • 100% Free
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free UGC Sample Ad
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out this quick form and I&apos;ll create a free sample UGC ad for your
              product — no credit card, no commitment.
            </p>
            <div className="w-16 h-1 bg-[#7C3AED] rounded-full mx-auto mt-6" />
          </div>
        </FadeIn>

        {/* Grid: Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column — Form */}
          <FadeIn className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Brand */}
              <div>
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Brand / Company Name
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  required
                  value={form.brand}
                  onChange={handleChange}
                  placeholder="e.g. GlowSkin Co."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition"
                />
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Johnson"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition"
                />
              </div>

              {/* Product URL / Description */}
              <div>
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Product URL or Description
                </label>
                <textarea
                  id="product"
                  name="product"
                  required
                  rows={3}
                  value={form.product}
                  onChange={handleChange}
                  placeholder="Paste your product link or briefly describe it…"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition resize-none"
                />
              </div>

              {/* Platform Select */}
              <div>
                <label
                  htmlFor="platform"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Target Platform
                </label>
                <select
                  id="platform"
                  name="platform"
                  required
                  value={form.platform}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition bg-white appearance-none"
                >
                  <option value="" disabled>
                    Select a platform…
                  </option>
                  {platformOptions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message / Special Instructions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any specific style, tone, or details you'd like me to know…"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-[#7C3AED]/25 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Request Free Sample Ad
              </button>
            </form>
          </FadeIn>

          {/* Right Column — Sidebar */}
          <FadeIn delay={0.15} className="lg:col-span-6 space-y-6">
            {/* Benefits Card */}
            <div className="rounded-2xl border border-[#7C3AED]/15 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Why Brands Love Working With Me
              </h3>
              <ul className="space-y-4">
                {bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/8801930537776"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#7C3AED]/15 bg-[#F5F3FF] p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#7C3AED]/10 group-hover:bg-[#7C3AED]/20 transition">
                <MessageCircle className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Prefer WhatsApp?
                </p>
                <p className="text-sm text-[#7C3AED] font-medium">
                  Chat directly →
                </p>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default UgcFreeSampleForm;
