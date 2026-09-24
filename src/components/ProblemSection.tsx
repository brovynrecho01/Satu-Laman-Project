import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Package, MapPin, Info, MessageSquare } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200/80 rounded-full px-3.5 py-1 text-xs font-semibold mb-4">
            <AlertCircle size={14} />
            <span>Kondisi Yang Sering Terjadi</span>
          </div>
          <h2 className="text-[clamp(1.8rem,5vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-5">
            Pelanggan Jangan Dibuat Ribet Mencari Informasi.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-3xl">
            Instagram bagus untuk mengenalkan bisnis. WhatsApp bagus untuk ngobrol
            dengan pelanggan. Tapi kalau informasi produk, lokasi, harga, dan kontak
            tersebar di banyak tempat, pelanggan bisa bingung atau malah pergi ke toko lain.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Sebelum Ada Landing Page */}
          <div className="bg-stone-50/90 rounded-3xl p-6 sm:p-8 border border-stone-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Sebelum Ada Landing Page
                </span>
                <span className="text-xs font-semibold text-red-600 bg-red-100/70 px-2.5 py-0.5 rounded-full">
                  Informasi Tersebar
                </span>
              </div>

              <p className="text-sm font-semibold text-stone-800 mb-6">
                Calon pembeli harus bolak-balik buka banyak tempat hanya untuk tahu harga dan cara pesan:
              </p>

              <ol className="space-y-3.5 mb-6 text-sm text-stone-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>Lihat postingan di Instagram</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>Buka highlight atau feed cari produk &amp; harga</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span>Cari info lokasi toko &amp; jangkauan ongkir</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-bold text-xs flex items-center justify-center shrink-0">
                    4
                  </span>
                  <span>Klik bio cari nomor WhatsApp yang pas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-bold text-xs flex items-center justify-center shrink-0">
                    5
                  </span>
                  <span>Baru tanya-tanya di chat (banyak yang batal karena lelah)</span>
                </li>
              </ol>
            </div>

            <div className="bg-red-50 text-red-800 text-xs sm:text-sm font-medium p-3.5 rounded-xl border border-red-200/70">
              <strong>Akibatnya:</strong> Banyak pelanggan enggan bertanya karena langkahnya terlalu panjang.
            </div>
          </div>

          {/* Card 2: Dengan Landing Page */}
          <div className="bg-[#FFFDFB] rounded-3xl p-6 sm:p-8 border-2 border-[#F26522]/30 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -z-10" />

            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-orange-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F26522]">
                  Solusi Praktis
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                  Dengan Landing Page
                </span>
              </div>

              <p className="text-sm font-semibold text-gray-900 mb-6">
                Semua terpusat dalam satu tautan rapi yang mudah diakses dari bio sosmed maupun chat:
              </p>

              {/* Central Flow Diagram */}
              <div className="space-y-3 mb-6">
                <div className="bg-gray-100 rounded-xl px-4 py-2.5 text-xs font-medium text-gray-700 text-center">
                  Instagram / Sosmed / Bio Link
                </div>

                <div className="flex justify-center text-gray-400">
                  <ArrowRight className="rotate-90" size={16} />
                </div>

                <div className="bg-gray-900 text-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-orange-400 text-center mb-2">
                    Satu Landing Page Resmi
                  </div>
                  <div className="text-xs text-center text-gray-300 font-medium mb-3">
                    Semua Info Terbuka
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-medium text-gray-200">
                    <div className="bg-gray-800/80 p-2 rounded-lg flex flex-col items-center gap-1">
                      <span>📦</span>
                      <span>Produk &amp; Harga</span>
                    </div>
                    <div className="bg-gray-800/80 p-2 rounded-lg flex flex-col items-center gap-1">
                      <span>📍</span>
                      <span>Lokasi &amp; Peta</span>
                    </div>
                    <div className="bg-gray-800/80 p-2 rounded-lg flex flex-col items-center gap-1">
                      <span>ℹ️</span>
                      <span>Info Bisnis</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center text-gray-400">
                  <ArrowRight className="rotate-90" size={16} />
                </div>

                <div className="bg-emerald-600 text-white rounded-xl p-3 text-center text-xs font-semibold shadow-xs">
                  <div>WhatsApp Langsung</div>
                  <div className="text-[11px] text-emerald-100 font-normal mt-0.5">
                    Pelanggan sudah tahu apa yang mau dipesan
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 text-emerald-900 text-xs sm:text-sm font-medium p-3.5 rounded-xl border border-emerald-200/70">
              <strong>Hasilnya:</strong> Pelanggan lebih cepat memahami produk dan langsung chat dengan niat beli yang jelas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
