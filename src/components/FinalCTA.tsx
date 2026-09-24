import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { MessageCircle, Instagram, Mail, Check } from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  EMAIL_CONTACT,
  getWhatsAppUrl,
} from '../data/landingData';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-16 sm:py-24 bg-white border-t border-neutral-200/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-neutral-800 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-800/90 border border-neutral-700 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Langkah Pertama Digital Storefront Anda</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-snug">
            Bisnis Anda Sudah Siap. Sekarang Bikin Pelanggan Lebih Mudah Menemukannya.
          </h2>

          {/* Supporting Copy */}
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Ceritakan bisnis Anda. Kami bantu tentukan landing page yang paling sesuai dengan kebutuhan dan target pelanggan Anda.
          </p>

          {/* Primary CTA */}
          <div className="pt-2 flex flex-col items-center gap-3">
            <WhatsAppButton
              id="final-wa-cta-btn"
              label="Konsultasi Gratis via WhatsApp"
              message="Halo, saya ingin konsultasi gratis untuk pembuatan landing page bisnis saya."
              variant="primary"
              className="text-base px-8 py-4 shadow-lg shadow-emerald-900/40 hover:scale-[1.02]"
              iconSize={22}
            />

            {/* Direct Contact Details Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-neutral-300">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-lg transition-colors text-emerald-400"
              >
                <MessageCircle size={14} />
                <span>WA: {WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-lg transition-colors text-pink-400"
              >
                <Instagram size={14} />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="inline-flex items-center gap-1.5 bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-lg transition-colors text-amber-300"
              >
                <Mail size={14} />
                <span>{EMAIL_CONTACT}</span>
              </a>
            </div>

            {/* Secondary reassuring text */}
            <p className="text-xs text-neutral-400 max-w-md pt-1 font-normal">
              Konsultasi santai & 100% gratis. Diskusikan dulu kebutuhan bisnis Anda dengan nyaman, tanpa keharusan langsung memesan.
            </p>
          </div>

          {/* Value tags */}
          <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-400" />
              Obrolan Santai & Ramah
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-400" />
              Tanpa Komitmen Di Awal
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-400" />
              Saran Desain Langsung
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
