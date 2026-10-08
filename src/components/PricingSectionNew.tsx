import React from 'react';
import {
  Check,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  Flame,
} from 'lucide-react';
import { MASTER_COPY, getWhatsAppUrl } from '../data/landingData';

export const PricingSectionNew: React.FC = () => {
  const { offer, deliverables } = MASTER_COPY;

  const offerFeatures = [
    'Mobile-First Sales Page responsif di semua tipe smartphone',
    'Katalog produk / menu / jasa lengkap dengan harga jelas',
    'Integrasi tombol WhatsApp CTA langsung bawa format pemesanan',
    'Integrasi titik Google Maps & seluruh akun media sosial',
    'Basic copywriting penjelasan usaha & section FAQ',
    '[BONUS] WhatsApp Sales Kit (Template script sapaan & closing)',
    'Setup hosting, domain sublink & teknis sampai online terima beres',
    'Garansi revisi perbaikan sebelum dipublikasikan',
  ];

  return (
    <section id="penawaran" className="bg-white py-16 sm:py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#F26522] border border-orange-200/80 rounded-full px-3.5 py-1 text-xs font-semibold mb-4">
            <Flame size={14} className="text-[#F26522]" />
            <span>Program Beta Terbatas</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            {offer.headline}
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-3xl">
            {offer.bodyCopy}
          </p>
        </div>

        {/* SINGLE BETA OFFER CARD */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FFFDFB] rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#F26522] shadow-[0_12px_40px_rgba(242,101,34,0.12)] relative overflow-hidden">
            {/* Top Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-orange-100 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F26522] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#F26522]">
                  Program Beta Terbatas — 5 Slot Tersedia
                </span>
              </div>
              <div className="bg-orange-100 text-[#F26522] text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5">
                <Users size={13} />
                <span>{offer.remainingSlotsText}</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-orange-100 shadow-2xs mb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                    Harga Normal
                  </span>
                  <span className="text-lg sm:text-xl text-gray-400 line-through font-semibold">
                    {offer.normalPrice}
                  </span>
                </div>

                <div className="sm:text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] block mb-1">
                    Harga Khusus Program Beta
                  </span>
                  <div className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                    {offer.betaPrice}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-600 font-medium">
                <span>{offer.priceNote}</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <ShieldCheck size={16} /> Tanpa Biaya Tersembunyi
                </span>
              </div>
            </div>

            {/* Inclusions List */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
                Apa Yang Sudah Termasuk Dalam Paket Beta:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {offerFeatures.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={item.includes('[BONUS]') ? 'font-bold text-[#F26522]' : ''}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-6 border-t border-orange-100 flex flex-col items-center gap-3">
              <a
                href={getWhatsAppUrl(offer.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#F26522] hover:bg-[#d95315] active:scale-[0.99] text-white text-base sm:text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group text-center cursor-pointer"
              >
                <span>{offer.buttonCta}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-xs text-gray-500 text-center font-medium">
                Hanya untuk 5 bisnis pertama. Konfirmasi cepat via WhatsApp langsung dengan tim kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
