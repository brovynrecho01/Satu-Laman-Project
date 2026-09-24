import React from 'react';
import { ArrowRight, Sparkles, MapPin, Clock, Check, Eye } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden"
    >
      {/* Soft natural background accents - strictly subtle, non-excessive */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-50/50 via-neutral-100/30 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-emerald-800">
              <Sparkles size={14} className="text-emerald-600 shrink-0" />
              <span>Jasa Landing Page untuk UMKM & Bisnis Lokal</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.18] sm:leading-[1.16]">
              Bisnis Anda Sudah Jalan.{' '}
              <span className="text-emerald-700 block mt-1 sm:mt-2">
                Sekarang Bikin Pelanggan Lebih Mudah Menemukannya.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-normal">
              Satu landing page untuk menampilkan produk, informasi bisnis, lokasi, dan WhatsApp Anda dalam satu tempat yang rapi dan mudah dipahami pelanggan.
            </p>

            {/* CTA Group */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <WhatsAppButton
                id="hero-wa-primary-cta"
                label="Konsultasi Gratis via WhatsApp"
                message="Halo SatuLaman, saya tertarik konsultasi gratis untuk pembuatan landing page bisnis saya."
                variant="primary"
                className="w-full sm:w-auto shadow-sm"
              />

              <a
                href="#contoh"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-semibold px-5 py-3.5 rounded-xl transition-all duration-150 text-center"
              >
                <span>Lihat Contoh</span>
                <ArrowRight size={16} className="text-neutral-500" />
              </a>
            </div>

            {/* Quick reassurance */}
            <p className="text-xs text-neutral-500 flex items-center gap-2 pt-1 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Konsultasi santai & 100% gratis. Mari diskusikan kebutuhan bisnis Anda dengan nyaman, tanpa keharusan langsung memesan.</span>
            </p>
          </div>

          {/* Right Column: Visual Mockup of Real UMKM Business Website (Not a SaaS dashboard) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl border border-neutral-200/90 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Mockup Browser/Phone Bar */}
              <div className="bg-neutral-100/90 px-4 py-2.5 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                </div>
                <div className="text-[11px] font-mono text-neutral-500 bg-white/90 px-3 py-0.5 rounded-md border border-neutral-200 truncate max-w-[190px]">
                  tokoberaspakkadi.id
                </div>
                <span className="text-[10px] font-medium bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                  Live
                </span>
              </div>

              {/* Mockup Content - Real UMKM Business Storefront */}
              <div className="p-4 sm:p-5 space-y-4 bg-[#fdfdfc]">
                {/* Store Header Banner */}
                <div className="bg-gradient-to-r from-amber-50 to-emerald-50/60 p-4 rounded-xl border border-neutral-200/80 flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                      Beras Medium & Premium
                    </span>
                    <h3 className="font-bold text-neutral-900 text-base sm:text-lg leading-tight">
                      Toko Beras Pak Kadi
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-neutral-500 pt-0.5">
                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <Clock size={12} />
                        Buka • 07:30 - 20:00
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        Pakisaji, Malang
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    PK
                  </div>
                </div>

                {/* Micro announcement banner */}
                <div className="bg-neutral-50 border border-neutral-200/70 p-2.5 rounded-lg flex items-center gap-2 text-xs text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">Siap antar area Bendo Pakisaji & sekitarnya di Kab. Malang</span>
                </div>

                {/* Catalog snippet */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-neutral-700 px-0.5">
                    <span>Katalog Medium & Premium</span>
                    <span className="text-emerald-700">Stok Siap Kirim</span>
                  </div>

                  {/* Product items */}
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-neutral-200 flex items-center justify-between hover:border-emerald-300 transition-colors">
                      <div className="space-y-0.5">
                        <p className="font-semibold text-neutral-900">Beras Premium Pandan Wangi</p>
                        <p className="text-[11px] text-neutral-500">Pulen wangi alami • Kemasan 5 kg</p>
                      </div>
                      <span className="font-bold text-neutral-900 bg-neutral-100 px-2 py-1 rounded-md">
                        Rp72.000
                      </span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-neutral-200 flex items-center justify-between hover:border-emerald-300 transition-colors">
                      <div className="space-y-0.5">
                        <p className="font-semibold text-neutral-900">Beras Medium Super Pakisaji</p>
                        <p className="text-[11px] text-neutral-500">Pulen & bersih harian • Kemasan 5 kg</p>
                      </div>
                      <span className="font-bold text-neutral-900 bg-neutral-100 px-2 py-1 rounded-md">
                        Rp64.000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mockup WhatsApp direct order button */}
                <div className="pt-1">
                  <button
                    onClick={onOpenDemo}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-xs group"
                  >
                    <span>Pesan Langsung via WhatsApp</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <p className="text-[11px] text-center text-neutral-400 mt-1.5">
                    Pelanggan tinggal 1 klik langsung masuk chat jualan
                  </p>
                </div>

                {/* Interactive demo prompt */}
                <div className="pt-2 border-t border-neutral-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-600">
                    Contoh halaman nyata UMKM
                  </span>
                  <button
                    onClick={onOpenDemo}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline"
                  >
                    <Eye size={13} />
                    <span>Buka Demo Interaktif</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
