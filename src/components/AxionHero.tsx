import React from 'react';
import { ArrowRight, Smartphone, MessageCircle, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { HeroShader } from './HeroShader';
import { MASTER_COPY, TRUST_INDICATORS, TOKO_PAK_KADI } from '../data/landingData';

interface AxionHeroProps {
  onOpenDemo?: () => void;
}

export const AxionHero: React.FC<AxionHeroProps> = ({ onOpenDemo }) => {
  const { hero } = MASTER_COPY;

  return (
    <section className="relative z-10 w-full pt-4 pb-14 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background Animated Shader */}
      <HeroShader />

      <div className="relative z-20 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* TOP HERO TEXT */}
        <div className="max-w-4xl pt-4 sm:pt-8">
          {/* Category Tag / Kicker */}
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-xs border border-gray-300/80 rounded-full px-4 py-1.5 mb-5 sm:mb-7 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
            <span className="text-[12px] sm:text-[13px] font-semibold text-gray-800 tracking-wide">
              {hero.kicker}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.1rem,5.5vw,4.2rem)] font-medium leading-[1.1] tracking-[-0.03em] text-gray-900 mb-5 sm:mb-6">
            Bisnis Anda Sudah Jalan.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Sekarang Bikin Pelanggan Lebih Mudah Memahami dan Menghubungi Anda.
          </h1>

          {/* Subheadline */}
          <p className="text-[15px] sm:text-[18px] lg:text-[20px] text-gray-700 leading-relaxed max-w-3xl mb-8">
            {hero.subHeadline}
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <a
              href="#penawaran"
              className="inline-flex items-center justify-center gap-3 bg-[#F26522] hover:bg-[#d95315] text-white text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 pr-2.5 py-2.5 transition-all duration-300 shadow-md hover:shadow-lg group w-fit cursor-pointer"
            >
              <span>{hero.buttonCtaPrimary}</span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#F26522] group-hover:rotate-[-45deg] transition-transform duration-300 shrink-0">
                <ArrowRight size={16} />
              </div>
            </a>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 font-medium">
              <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
              <span>{hero.microcopy}</span>
            </div>
          </div>
        </div>

        {/* HERO INTERACTIVE SHOWCASE CARD: Toko Beras Pak Kadi */}
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-200/90 mb-12 sm:mb-16">
          {/* Card Top Bar */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4 text-xs font-mono text-gray-500">
            <a
              href={TOKO_PAK_KADI.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#F26522] transition-colors group cursor-pointer"
              title="Kunjungi website asli Toko Pak Kadi"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="font-semibold text-gray-800 group-hover:underline">
                {TOKO_PAK_KADI.displayUrl}
              </span>
              <ExternalLink size={12} className="opacity-60 group-hover:opacity-100" />
            </a>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-sans font-medium text-[11px]">
              Website Aktif UMKM
            </span>
          </div>

          {/* Store Header Preview */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/80 rounded-2xl p-4 sm:p-5 border border-gray-100 mb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-xs">
                PK
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 block">
                  Beras Medium &amp; Premium
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                  Toko Beras Pak Kadi
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                  <span className="text-emerald-700 font-medium">Buka • 07:30 - 20:00</span>
                  <span>•</span>
                  <span>Pakisaji, Malang</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-medium text-gray-600 sm:text-right bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-xl border sm:border-0 border-gray-200">
              Siap antar area Bendo Pakisaji &amp; sekitarnya di Kab. Malang
            </div>
          </div>

          {/* Products Preview */}
          <div className="mb-5">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-3 px-1">
              <span>Katalog Medium &amp; Premium</span>
              <span className="text-[#F26522]">Stok Siap Kirim</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Product 1 */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white hover:border-[#F26522]/40 transition-colors">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Beras Premium Pandan Wangi</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Pulen wangi alami • Kemasan 5 kg</p>
                  </div>
                  <span className="font-extrabold text-sm text-gray-900 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                    Rp72.000
                  </span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white hover:border-[#F26522]/40 transition-colors">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Beras Medium Super Pakisaji</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Pulen &amp; bersih harian • Kemasan 5 kg</p>
                  </div>
                  <span className="font-extrabold text-sm text-gray-900 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                    Rp64.000
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card Actions */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <div>
                <strong className="text-gray-900">Pesan Langsung via WhatsApp</strong> — Pelanggan tinggal 1 klik langsung masuk chat jualan
              </div>
            </div>

            {onOpenDemo && (
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span>Contoh nyata UMKM — Buka Demo Interaktif</span>
                <ExternalLink size={13} />
              </button>
            )}
          </div>
        </div>

        {/* 4 CORE PILLARS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TRUST_INDICATORS.map((indicator, idx) => (
            <div
              key={indicator.label}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-5 border border-gray-200/90 shadow-2xs hover:shadow-sm transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center mb-3">
                {idx === 0 && <Smartphone size={18} />}
                {idx === 1 && <MessageCircle size={18} />}
                {idx === 2 && <Sparkles size={18} />}
                {idx === 3 && <ShieldCheck size={18} />}
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">{indicator.label}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {indicator.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
