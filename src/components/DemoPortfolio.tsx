import React from 'react';
import {
  Store,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Eye,
  ShoppingBag,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { DEMO_DATA } from '../data/landingData';

interface DemoPortfolioProps {
  onOpenDemo: () => void;
}

export const DemoPortfolio: React.FC<DemoPortfolioProps> = ({ onOpenDemo }) => {
  return (
    <section id="contoh" className="py-16 sm:py-24 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Studi Kasus & Contoh Nyata
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Seperti Apa Hasilnya?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Lihat contoh landing page yang kami buat untuk bisnis nyata. Bersih, informatif, dan langsung mengarahkan pelanggan ke pesanan WhatsApp.
          </p>
        </div>

        {/* Flagship Demo Showcase Card */}
        <div className="bg-white rounded-3xl border-2 border-neutral-200/90 shadow-md overflow-hidden hover:border-emerald-300 transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Column: Details & Value */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Sparkles size={13} className="text-emerald-600" />
                    {DEMO_DATA.badge}
                  </span>
                  <span className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-md">
                    {DEMO_DATA.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                    {DEMO_DATA.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <MapPin size={14} className="text-emerald-600 shrink-0" />
                    <span>{DEMO_DATA.location}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {DEMO_DATA.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                    Apa yang ditampilkan di halaman ini:
                  </span>
                  <div className="space-y-2">
                    {DEMO_DATA.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="btn-open-full-demo"
                  onClick={onOpenDemo}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-xs hover:shadow-sm transition-all duration-150 text-sm"
                >
                  <Eye size={18} />
                  <span>Lihat Full Demo</span>
                </button>
                <span className="text-xs text-neutral-500 text-center sm:text-left">
                  Bisa dicoba langsung dalam simulasi interaktif
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Visual Preview */}
            <div className="lg:col-span-5 bg-gradient-to-br from-neutral-50 to-emerald-50/40 p-6 sm:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-neutral-200">
              <div className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                      PK
                    </div>
                    <div>
                      <span className="font-bold text-xs text-neutral-900 block">
                        Toko Beras Pak Kadi
                      </span>
                      <span className="text-[10px] text-emerald-700 font-medium">
                        Buka • 07:30 - 20:00
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded font-mono">
                    Preview
                  </span>
                </div>

                {/* Interactive Mini Products */}
                <div className="space-y-2 text-xs">
                  <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-neutral-900">Beras Premium Pandan Wangi</p>
                      <p className="text-[10px] text-neutral-500">Pulen wangi • 5 kg</p>
                    </div>
                    <span className="font-bold text-neutral-900">Rp72.000</span>
                  </div>

                  <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-neutral-900">Beras Medium Super Pakisaji</p>
                      <p className="text-[10px] text-neutral-500">Pulen harian • 5 kg</p>
                    </div>
                    <span className="font-bold text-neutral-900">Rp64.000</span>
                  </div>
                </div>

                {/* Delivery Area Pill */}
                <div className="bg-emerald-50/70 border border-emerald-200/80 p-2.5 rounded-xl text-xs text-emerald-900 flex items-center gap-2">
                  <MapPin size={14} className="text-emerald-700 shrink-0" />
                  <span className="truncate">Siap antar area Pakisaji, Kepanjen & Kab. Malang</span>
                </div>

                {/* Tap to try prompt */}
                <button
                  onClick={onOpenDemo}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors group"
                >
                  <span>Coba Klik & Buka Halaman Demo</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reassurance text */}
        <div className="mt-8 text-center text-xs text-neutral-500 max-w-xl mx-auto">
          Setiap landing page disesuaikan dengan foto produk, warna brand, dan gaya bisnis Anda sendiri. Bukan template yang dipaksakan sama rata.
        </div>
      </div>
    </section>
  );
};
