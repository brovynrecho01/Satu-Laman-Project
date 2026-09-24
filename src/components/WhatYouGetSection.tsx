import React from 'react';
import {
  Palette,
  Smartphone,
  Layers,
  FileText,
  ShoppingBag,
  MessageCircle,
  MapPin,
  Share2,
  Search,
  Server,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  const features = [
    {
      title: 'Custom Landing Page',
      description: 'Desain khusus sesuai warna & jenis usaha Anda',
      icon: Palette,
    },
    {
      title: 'Responsive Mobile Design',
      description: 'Tampilan presisi dan nyaman di layar smartphone',
      icon: Smartphone,
    },
    {
      title: 'Struktur Halaman Bisnis',
      description: 'Susunan urutan info yang mengarahkan pembeli',
      icon: Layers,
    },
    {
      title: 'Copywriting Dasar',
      description: 'Teks penjelasan bisnis yang natural dan mudah dipahami',
      icon: FileText,
    },
    {
      title: 'Product / Menu / Service Section',
      description: 'Bagian daftar produk, foto, keterangan, & harga',
      icon: ShoppingBag,
    },
    {
      title: 'WhatsApp CTA',
      description: 'Tombol chat WhatsApp di titik-titik strategis halaman',
      icon: MessageCircle,
    },
    {
      title: 'Google Maps Integration',
      description: 'Peta lokasi toko & rute petunjuk arah langsung',
      icon: MapPin,
    },
    {
      title: 'Social Media Links',
      description: 'Tautan resmi Instagram, TikTok, Facebook, dll',
      icon: Share2,
    },
    {
      title: 'Basic SEO Setup',
      description: 'Nama bisnis mudah ditemukan di pencarian Google',
      icon: Search,
    },
    {
      title: 'Website Deployment',
      description: 'Proses hosting dan setup teknis sampai website aktif',
      icon: Server,
    },
    {
      title: 'Revisi Sesuai Paket',
      description: 'Pengecekan dan perbaikan sebelum website go-live',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="bg-stone-50 py-16 sm:py-20 lg:py-24 border-t border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 rounded-full px-3.5 py-1 text-xs font-semibold mb-4 shadow-2xs">
            <Sparkles size={14} className="text-[#F26522]" />
            <span>Lengkap &amp; Siap Pakai</span>
          </div>
          <h2 className="text-[clamp(1.8rem,5vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
            Bukan Cuma Website. Ini Digital Storefront untuk Bisnis Anda.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-3xl">
            Kami mengurus bagian yang sering bikin pemilik bisnis bingung:
            struktur halaman, tampilan, copy, informasi bisnis, sampai website
            siap digunakan dan dibagikan ke calon pembeli.
          </p>
        </div>

        {/* 11 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 hover:border-[#F26522]/40 shadow-xs hover:shadow-sm transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
