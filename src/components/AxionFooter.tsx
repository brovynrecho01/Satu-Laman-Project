import React from 'react';
import { ArrowUp, MessageCircle, Instagram, Mail, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, CONTACT } from '../data/landingData';

export const AxionFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="bg-[#111111] text-white pt-16 sm:pt-20 lg:pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* PRE-FOOTER CTA CARD */}
        <div className="bg-[#1a1a1a] border border-neutral-800 rounded-3xl p-6 sm:p-10 lg:p-14 mb-16 sm:mb-20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-800/60 px-3 py-1 rounded-full inline-block mb-4">
              Langkah Pertama Digital Storefront Anda
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Bisnis Anda Sudah Siap.
              <br className="hidden sm:block" />
              {' '}Sekarang Bikin Pelanggan Lebih Mudah Menemukannya.
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-2xl">
              Ceritakan bisnis Anda. Kami bantu tentukan landing page yang paling
              sesuai dengan kebutuhan dan target pelanggan Anda.
            </p>

            {/* Contact Chips */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
              <a
                href={getWhatsAppUrl('Halo SatuLaman, saya ingin konsultasi landing page untuk bisnis saya.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#d95315] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>WA: {CONTACT.whatsappDisplay}</span>
              </a>

              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors"
              >
                <Instagram size={16} />
                <span>{CONTACT.instagramHandle}</span>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors"
              >
                <Mail size={16} />
                <span>{CONTACT.email}</span>
              </a>
            </div>

            <p className="text-xs text-neutral-400 font-medium mb-6">
              Tidak perlu langsung beli. Tanya dulu, kita lihat apakah kebutuhan bisnis Anda cocok.
            </p>

            {/* 3 Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-neutral-800 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Obrolan Santai &amp; Ramah</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Tanpa Komitmen Di Awal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Saran Desain Langsung</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-800 text-neutral-400 text-xs sm:text-sm">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center font-bold text-sm">
                S
              </div>
              <span className="font-bold text-lg text-white tracking-tight">SatuLaman</span>
            </div>
            <p className="leading-relaxed text-neutral-400 max-w-sm">
              Landing Page &amp; Digital Experience untuk UMKM dan bisnis kecil di Indonesia.
            </p>
            <p className="leading-relaxed text-neutral-400 max-w-sm">
              Membantu bisnis Anda lebih mudah ditemukan, dipercaya, dan dihubungi pelanggan.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-200 mb-3">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#contoh" className="hover:text-white transition-colors">
                  Contoh
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:text-white transition-colors">
                  Paket
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Info */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-200 mb-3">
              Kontak &amp; Sosmed
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={getWhatsAppUrl('Halo SatuLaman, saya ingin bertanya.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: {CONTACT.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors"
                >
                  Email: {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>© 2026 SatuLaman. All rights reserved.</div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
