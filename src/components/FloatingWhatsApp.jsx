import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={WHATSAPP_CONFIG.getLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-3 rounded-full font-semibold text-sm shadow-lg animate-pulse-green transition-all hover:-translate-y-0.5 hover:scale-[1.02]"
        aria-label="Hubungi kami via WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
