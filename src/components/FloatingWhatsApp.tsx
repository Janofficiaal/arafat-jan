import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/8801930537776?text=Hi%20Arafat%20Jan,%20I%20am%20visiting%20your%20portfolio%20website%20and%20want%20to%20talk%20about%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageCircle size={24} className="fill-white text-[#25D366]" />
      <span className="hidden sm:inline font-bold text-sm">Chat on WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;


