import React from 'react';
import {
  ShoppingBag,
  ShieldCheck,
  MessageCircle,
  MapPin,
  Share2,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { SOLUTION_FEATURES } from '../data/landingData';
import { WhatsAppButton } from './WhatsAppButton';

export const SolutionSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShoppingBag':
        return <ShoppingBag className="text-emerald-600" size={24} />;
      case 'ShieldCheck':
        return <ShieldCheck className="text-emerald-600" size={24} />;
      case 'MessageCircle':
        return <MessageCircle className="text-emerald-600" size={24} />;
      case 'MapPin':
        return <MapPin className="text-emerald-600" size={24} />;
      case 'Share2':
        return <Share2 className="text-emerald-600" size={24} />;
      case 'Smartphone':
        return <Smartphone className="text-emerald-600" size={24} />;
      default:
        return <ShoppingBag className="text-emerald-600" size={24} />;
    }
  };

  return (
    <section id="solution-section" className="py-16 sm:py-24 bg-white border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Solusi Nyata UMKM
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Satu Halaman. Semua Informasi Penting Bisnis Anda.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Kami membuat landing page yang dirancang sesuai bisnis Anda, bukan sekadar memasang template kaku yang membingungkan.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTION_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#fafaf9] hover:bg-white rounded-2xl p-6 border border-neutral-200/90 transition-all duration-200 hover:shadow-md hover:border-emerald-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-200/60 px-2 py-0.5 rounded-md">
                    {feature.tag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-neutral-900 text-lg group-hover:text-emerald-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center text-xs font-semibold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Terintegrasi di website Anda</span>
                <ArrowRight size={14} className="ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Direct CTA after solution */}
        <div className="mt-12 text-center bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-neutral-900 text-base sm:text-lg">
              Mau konsultasi halaman apa yang paling pas untuk bisnis Anda?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              Tim kami siap mendengarkan cerita produk Anda dan memberikan rekomendasi struktur halaman.
            </p>
          </div>

          <WhatsAppButton
            label="Tanya Dulu, Gratis"
            message="Halo SatuLaman, saya mau tanya-tanya dulu soal rekomendasi landing page untuk bisnis saya."
            variant="primary"
            className="w-full sm:w-auto shrink-0"
          />
        </div>
      </div>
    </section>
  );
};
