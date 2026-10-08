import React from 'react';
import { ArrowRight, Instagram, MessageCircle, Globe, ShoppingBag, MapPin, Store, CheckCircle2 } from 'lucide-react';
import { MASTER_COPY } from '../data/landingData';

export const ValuePropSection: React.FC = () => {
  const { valueProposition } = MASTER_COPY;

  const hubFeatures = [
    {
      title: 'Katalog & Harga',
      desc: 'Tampilkan produk, menu, atau layanan dengan harga transparan.',
      icon: ShoppingBag,
    },
    {
      title: 'Titik Lokasi & Maps',
      desc: 'Google Maps terhubung agar pelanggan mudah menemukan outlet fisik.',
      icon: MapPin,
    },
    {
      title: 'Profil & Kredibilitas',
      desc: 'Informasi jam buka, kelebihan usaha, dan bukti kualitas produk.',
      icon: Store,
    },
    {
      title: 'WhatsApp Langsung',
      desc: '1 tombol membawa format pesanan siap kirim tanpa langkah berbelit.',
      icon: MessageCircle,
    },
  ];

  return (
    <section id="sistem" className="bg-stone-50 py-16 sm:py-20 lg:py-24 border-t border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 rounded-full px-3.5 py-1 text-xs font-semibold mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Value Proposition</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            {valueProposition.headline}
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-3xl">
            {valueProposition.subHeadline}
          </p>
        </div>

        {/* FLOW VISUAL ELEMENT (Instagram/TikTok ➔ SatuLaman Page ➔ Langsung Chat WhatsApp) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-sm mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full inline-block mb-3">
              Alur Konversi Cepat
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
              {valueProposition.flowText}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1: Sosmed */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80 flex flex-col justify-between relative group hover:border-gray-300 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-red-500 to-amber-500 text-white flex items-center justify-center mb-4 shadow-xs">
                  <Instagram size={24} />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-400">LANGKAH 01</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  Instagram / TikTok
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Calon pembeli menemukan konten Anda di feed/FYP, lalu mengklik tautan di bio profil Anda.
                </p>
              </div>
            </div>

            {/* Step 2: SatuLaman Page (Central Hub) */}
            <div className="bg-[#FFFDFB] rounded-2xl p-6 border-2 border-[#F26522] shadow-md flex flex-col justify-between relative">
              <span className="absolute -top-3 left-6 bg-[#F26522] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs">
                Titik Kumpul Utama
              </span>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F26522] text-white flex items-center justify-center mb-4 shadow-xs mt-1">
                  <Globe size={24} />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#F26522]">LANGKAH 02</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  SatuLaman Page (Katalog &amp; Info)
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Dalam hitungan detik, pelanggan langsung melihat katalog produk, harga pasti, dan lokasi tanpa kebingungan.
                </p>
              </div>
            </div>

            {/* Step 3: Chat WhatsApp */}
            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200/80 flex flex-col justify-between relative hover:border-emerald-300 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-4 shadow-xs">
                  <MessageCircle size={24} />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-600">LANGKAH 03</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  Langsung Chat WhatsApp
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Tinggal 1 sentuhan, pembeli masuk ke chat WhatsApp dengan format nama barang yang sudah terisi siap dikirim.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars of SatuLaman Titik Kumpul */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {hubFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-xs hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center mb-3">
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1.5">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
