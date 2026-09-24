import React from 'react';
import { ShoppingBag, ShieldCheck, MessageCircle, MapPin, Share2, Smartphone, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/landingData';

export const RealSolutionSection: React.FC = () => {
  const solutions = [
    {
      badge: 'Katalog Rapi',
      title: 'Produk / Menu',
      description: 'Tampilkan produk, menu, katalog, atau layanan dengan lebih rapi dan jelas harganya.',
      integrated: 'Terintegrasi di website Anda',
      icon: ShoppingBag,
    },
    {
      badge: 'Bangun Kepercayaan',
      title: 'Tentang Bisnis',
      description: 'Bantu pelanggan memahami siapa Anda, kelebihan bisnis Anda, dan kenapa mereka bisa percaya.',
      integrated: 'Terintegrasi di website Anda',
      icon: ShieldCheck,
    },
    {
      badge: 'Fokus Chat Pembeli',
      title: 'WhatsApp Langsung',
      description: 'Berikan jalur langsung dari website menuju WhatsApp Anda tanpa alur yang berbelit-belit.',
      integrated: 'Terintegrasi di website Anda',
      icon: MessageCircle,
    },
    {
      badge: 'Google Maps Ready',
      title: 'Lokasi & Maps',
      description: 'Tampilkan lokasi fisik toko atau cakupan area pengiriman melalui Google Maps yang mudah dibuka.',
      integrated: 'Terintegrasi di website Anda',
      icon: MapPin,
    },
    {
      badge: 'Terhubung Sosmed',
      title: 'Social Media',
      description: 'Hubungkan akun Instagram, Facebook, TikTok, atau marketplace yang sudah aktif Anda gunakan.',
      integrated: 'Terintegrasi di website Anda',
      icon: Share2,
    },
    {
      badge: 'Ringan & Responsif',
      title: 'Mobile Friendly',
      description: 'Website nyaman dibuka dari smartphone karena mayoritas pelanggan mencari info lewat HP.',
      integrated: 'Terintegrasi di website Anda',
      icon: Smartphone,
    },
  ];

  return (
    <section className="bg-stone-50 py-16 sm:py-20 lg:py-24 border-t border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 rounded-full px-3.5 py-1 text-xs font-semibold mb-4 shadow-2xs">
            <span>Solusi Nyata UMKM</span>
          </div>
          <h2 className="text-[clamp(1.8rem,5vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
            Satu Halaman. Semua Informasi Penting Bisnis Anda.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-3xl">
            Kami membuat landing page yang dirancang sesuai bisnis Anda,
            bukan sekadar memasang template kaku yang membingungkan.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-[#F26522] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                      {item.badge}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] font-medium text-emerald-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{item.integrated}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Mau konsultasi halaman apa yang paling pas untuk bisnis Anda?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Tim kami siap mendengarkan cerita produk Anda dan memberikan rekomendasi struktur halaman.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Halo SatuLaman, saya mau konsultasi struktur halaman apa yang paling pas untuk bisnis saya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#d95315] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-3 rounded-full transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
          >
            <span>Konsultasi Sekarang</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
