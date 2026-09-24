import React from 'react';
import {
  CheckCircle2,
  Layout,
  Smartphone,
  Layers,
  FileText,
  ShoppingBag,
  MessageCircle,
  MapPin,
  Share2,
  Search,
  Rocket,
  RefreshCw,
} from 'lucide-react';
import { WHAT_YOU_GET } from '../data/landingData';

export const WhatYouGet: React.FC = () => {
  const getIcon = (index: number) => {
    const icons = [
      <Layout key="1" size={20} className="text-emerald-600" />,
      <Smartphone key="2" size={20} className="text-emerald-600" />,
      <Layers key="3" size={20} className="text-emerald-600" />,
      <FileText key="4" size={20} className="text-emerald-600" />,
      <ShoppingBag key="5" size={20} className="text-emerald-600" />,
      <MessageCircle key="6" size={20} className="text-emerald-600" />,
      <MapPin key="7" size={20} className="text-emerald-600" />,
      <Share2 key="8" size={20} className="text-emerald-600" />,
      <Search key="9" size={20} className="text-emerald-600" />,
      <Rocket key="10" size={20} className="text-emerald-600" />,
      <RefreshCw key="11" size={20} className="text-emerald-600" />,
    ];
    return icons[index] || <CheckCircle2 size={20} className="text-emerald-600" />;
  };

  return (
    <section id="what-you-get-section" className="py-16 sm:py-24 bg-white border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Lengkap & Siap Pakai
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Bukan Cuma Website. Ini Digital Storefront untuk Bisnis Anda.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Kami mengurus bagian yang sering bikin pemilik bisnis bingung: struktur halaman, tampilan, copy, informasi bisnis, sampai website siap digunakan dan dibagikan ke calon pembeli.
          </p>
        </div>

        {/* 11 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {WHAT_YOU_GET.map((item: any, idx: number) => (
            <div
              key={item.title}
              className="bg-[#fafaf9] rounded-2xl p-5 border border-neutral-200/80 hover:border-emerald-300 hover:bg-white transition-all duration-150 flex items-start gap-3.5 group shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                {getIcon(idx)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
