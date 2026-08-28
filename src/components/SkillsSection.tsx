import FadeIn from './FadeIn';
import { 
  Video, 
  ShieldCheck, 
  Globe, 
  TrendingUp, 
  Palette, 
  Bot, 
  CheckCircle2 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Video Editing & Motion Post-Production',
    icon: Video,
    skills: [
      { name: 'Adobe Premiere Pro', level: 95 },
      { name: 'Adobe After Effects', level: 90 },
      { name: 'DaVinci Resolve & Color Grading', level: 88 },
      { name: 'Sound Design & Audio Engineering', level: 86 },
    ],
  },
  {
    title: 'Ethical Hacking & Cyber Security',
    icon: ShieldCheck,
    skills: [
      { name: 'Vulnerability Assessment & PenTesting', level: 92 },
      { name: 'Web Application Security & OWASP Top 10', level: 90 },
      { name: 'Server Hardening & Firewall Architecture', level: 88 },
      { name: 'Malware Analysis, Cleanup & Audits', level: 94 },
    ],
  },
  {
    title: 'Web Design & Modern Front-End',
    icon: Globe,
    skills: [
      { name: 'React.js, Next.js & TypeScript', level: 90 },
      { name: 'Tailwind CSS, HTML5 & Modern Responsive UI', level: 96 },
      { name: 'Custom WordPress & High-Speed CMS', level: 95 },
      { name: 'Conversion-Optimized Landing Pages', level: 94 },
    ],
  },
  {
    title: 'Digital Marketing & Growth Scaling',
    icon: TrendingUp,
    skills: [
      { name: 'Meta Ads (Facebook & Instagram Scaling)', level: 94 },
      { name: 'Google Ads & Search Intent PPC', level: 88 },
      { name: 'Technical SEO & Content Strategy', level: 86 },
      { name: 'Sales Funnel Architecture & Lead Gen', level: 92 },
    ],
  },
  {
    title: 'Graphic Design & Brand Architecture',
    icon: Palette,
    skills: [
      { name: 'Adobe Photoshop & Photo Manipulation', level: 92 },
      { name: 'Adobe Illustrator & Vector Brand Kits', level: 90 },
      { name: 'High-CTR Ad Creatives & Social Banners', level: 96 },
      { name: 'Figma UI/UX Wireframing & Prototyping', level: 88 },
    ],
  },
  {
    title: 'Workflow & Business Automation',
    icon: Bot,
    skills: [
      { name: 'Zapier & Make.com Complex Automations', level: 94 },
      { name: 'AI Chatbots, ManyChat & WhatsApp APIs', level: 90 },
      { name: 'CRM & Lead Routing Integrations', level: 92 },
      { name: 'Real-time Data Sync & Webhooks', level: 90 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F4F9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#0d7a3a] font-bold text-sm sm:text-base uppercase tracking-widest bg-[#0d7a3a]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Core Competencies
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d7a3a] tracking-tight">
              Technical Skills & Proficiencies
            </h2>
            <div className="w-20 h-1.5 bg-[#0d7a3a] mx-auto mt-4 rounded-full mb-5" />
            <p className="text-gray-600 text-base sm:text-lg">
              A comprehensive toolkit of industry-standard software, platforms, and methodologies mastered over 10+ years of professional practice.
            </p>
          </div>
        </FadeIn>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <FadeIn key={cat.title} delay={idx * 0.08} y={30}>
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-100 hover:border-[#0d7a3a]/30 transition-all duration-300">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="w-11 h-11 rounded-xl bg-[#0d7a3a]/10 text-[#0d7a3a] flex items-center justify-center font-bold">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Progress Bars */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                          <span className="text-gray-800 flex items-center gap-1.5">
                            <CheckCircle2 size={13} className="text-[#0d7a3a]" />
                            {skill.name}
                          </span>
                          <span className="text-[#0d7a3a] font-bold font-['Plus_Jakarta_Sans']">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-[#0d7a3a] h-full rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;


