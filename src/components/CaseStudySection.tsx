import React from 'react';
import { MapPin, CheckCircle, ExternalLink, ArrowRight, Store } from 'lucide-react';
import { MASTER_COPY, TOKO_PAK_KADI } from '../data/landingData';

interface CaseStudySectionProps {
  onOpenDemo?: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenDemo }) => {
  const { demo } = MASTER_COPY;

  return (
    <section id="contoh" className="bg-white py-16 sm:py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 border border-gray-200 rounded-full px-3.5 py-1 text-xs font-semibold mb-4">
            <Store size={14} />
            <span>Contoh Nyata UMKM</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            {demo.headline}
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-3xl">
            {demo.bodyCopy}
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-[#FAF9F6] rounded-3xl border border-gray-200/90 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Business Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-[#F26522] px-2.5 py-1 rounded-md">
                    Portfolio Nyata
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    {TOKO_PAK_KADI.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {TOKO_PAK_KADI.name}
                </h3>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 mb-5">
                  <MapPin size={16} className="text-[#F26522] shrink-0 mt-0.5" />
                  <span>{TOKO_PAK_KADI.address}</span>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  {demo.bodyCopy}
                </p>

                <div className="bg-white rounded-2xl p-5 border border-gray-200/80 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                    Fitur Nyata Pada Halaman Ini:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>Katalog beras medium hingga premium dengan harga transparan per sak/kg</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>Lokasi akurat di Google Maps (Jalan Raya Garuda, Bendo, Pakisaji, Malang)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>Tombol pesan WhatsApp 1-klik terhubung langsung dengan format order otomatis</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {onOpenDemo && (
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="inline-flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#d95315] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer hover:shadow-md"
                  >
                    <span>{demo.buttonText}</span>
                    <ExternalLink size={15} />
                  </button>
                )}

                <a
                  href={TOKO_PAK_KADI.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 text-sm font-semibold px-5 py-3 rounded-full transition-colors cursor-pointer"
                >
                  <span>Kunjungi Web Asli ({TOKO_PAK_KADI.displayUrl})</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Mockup */}
            <div className="lg:col-span-5">
              <div
                onClick={onOpenDemo}
                className="bg-white rounded-2xl border-2 border-gray-300 shadow-md p-4 sm:p-5 hover:border-[#F26522] transition-all cursor-pointer group relative"
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span className="font-semibold text-gray-700 font-mono">{TOKO_PAK_KADI.displayUrl}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#F26522] bg-orange-50 px-2 py-0.5 rounded-full">
                    Buka Demo Interaktif
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-100/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-amber-600 text-white font-bold text-sm flex items-center justify-center">
                        PK
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-gray-900">Toko Beras Pak Kadi</h5>
                        <p className="text-[11px] text-gray-500">Buka • 07:30 - 20:00 • Pakisaji</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/50">
                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <span className="font-bold text-gray-900 block">Beras Premium Pandan Wangi</span>
                        <span className="text-[10px] text-gray-500">Pulen wangi • 5 kg</span>
                      </div>
                      <span className="font-bold text-gray-900">Rp72.000</span>
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/50">
                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <span className="font-bold text-gray-900 block">Beras Medium Super Pakisaji</span>
                        <span className="text-[10px] text-gray-500">Pulen harian • 5 kg</span>
                      </div>
                      <span className="font-bold text-gray-900">Rp64.000</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 text-emerald-800 text-[11px] font-medium p-2.5 rounded-xl border border-emerald-200/60 text-center">
                    Siap antar area Pakisaji, Kepanjen &amp; Kab. Malang
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                  <span className="text-xs font-semibold text-[#F26522] group-hover:underline inline-flex items-center gap-1">
                    Coba Klik &amp; Buka Halaman Demo
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
