import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/landingData';

export const StickyMobileBar: React.FC = () => {
  return (
    <div
      id="sticky-mobile-cta-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200/90 p-3 shadow-2xl animate-in slide-in-from-bottom duration-200"
    >
      <div className="max-w-md mx-auto flex items-center gap-3">
        <a
          id="mobile-sticky-whatsapp-btn"
          href={getWhatsAppUrl('Halo SatuLaman, saya mau konsultasi via WhatsApp untuk landing page bisnis saya.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl shadow-md text-sm transition-all"
        >
          <MessageCircle size={18} className="fill-current shrink-0" />
          <span>💬 Konsultasi via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
