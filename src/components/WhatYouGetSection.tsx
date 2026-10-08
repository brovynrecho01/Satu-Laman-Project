import React from 'react';
import {
  Smartphone,
  ShoppingBag,
  MessageCircle,
  MapPin,
  FileText,
  Gift,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { MASTER_COPY, getWhatsAppUrl } from '../data/landingData';

export const WhatYouGetSection: React.FC = () => {
  const { deliverables } = MASTER_COPY;

  const featureIcons = [
    Smartphone, // Mobile-First Sales Page
    ShoppingBag, // Katalog Produk/Jasa
    MessageCircle, // WhatsApp CTA Terintegrasi
    MapPin, // Google Maps & Social Link
    FileText, // Basic Copywriting & FAQ
  ];

  return (
    <section id="deliverables" className="bg-stone-50 py-16 sm:py-20 lg:py-28 border-t border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 rounded-full px-3.5 py-1 text-xs font-semibold mb-4 shadow-2xs">
            <Sparkles size={14} className="text-[#F26522]" />
            <span>Deliverables</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            {deliverables.headline}
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-3xl">
            {deliverables.bodyCopy}
          </p>
        </div>

        {/* 5 Core Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {deliverables.features.map((item, idx) => {
            const Icon = featureIcons[idx] || Sparkles;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Termasuk dalam Starter System</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* BONUS BOX / HIGHLIGHT: [BONUS] WhatsApp Sales Kit */}
        <div className="bg-gradient-to-br from-amber-500 via-[#F26522] to-orange-600 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4">
              <Gift size={15} />
              <span>{deliverables.bonus.badge}</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              {deliverables.bonus.title}
            </h3>

            <p className="text-sm sm:text-base text-orange-50/95 leading-relaxed mb-6 max-w-2xl">
              {deliverables.bonus.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/20 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-200 shrink-0" />
                <span>Script Sapaan Awal Ramah</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-200 shrink-0" />
                <span>Format Follow-Up Halus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-200 shrink-0" />
                <span>Taktik Cross-Selling Closing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
