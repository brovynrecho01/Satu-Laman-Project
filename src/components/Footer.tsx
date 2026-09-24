import React from 'react';
import { MessageCircle, Instagram, Mail, ArrowUp } from 'lucide-react';
import {
  BRAND_NAME,
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  EMAIL_CONTACT,
  getWhatsAppUrl,
} from '../data/landingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#171717] text-white border-t border-neutral-800 pt-12 pb-24 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-10 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-800/80 p-1 flex items-center justify-center border border-neutral-700">
                <img
                  src="/satulaman-logo.svg"
                  alt="Satu Laman Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Satu Laman
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Landing Page & Digital Experience untuk UMKM dan bisnis kecil di Indonesia.
            </p>
            <p className="text-xs text-neutral-500">
              Membantu bisnis Anda lebih mudah ditemukan, dipercaya, dan dihubungi pelanggan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex flex-wrap gap-8 justify-start md:justify-end text-sm">
            <div className="space-y-2">
              <span className="font-bold text-xs uppercase tracking-wider text-neutral-400 block">
                Navigasi
              </span>
              <ul className="space-y-1.5 text-neutral-300">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#contoh" className="hover:text-emerald-400 transition-colors">
                    Contoh
                  </a>
                </li>
                <li>
                  <a href="#paket" className="hover:text-emerald-400 transition-colors">
                    Paket
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-xs uppercase tracking-wider text-neutral-400 block">
                Kontak & Sosmed
              </span>
              <ul className="space-y-2 text-neutral-300">
                <li>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                  >
                    <MessageCircle size={15} className="text-emerald-500" />
                    <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                  >
                    <Instagram size={15} className="text-emerald-500" />
                    <span>Instagram: {INSTAGRAM_HANDLE}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                  >
                    <Mail size={15} className="text-emerald-500" />
                    <span>Email: {EMAIL_CONTACT}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 {BRAND_NAME}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
