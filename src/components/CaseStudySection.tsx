import React from 'react';
import { MapPin, Phone, CheckCircle, ExternalLink, ArrowRight, Store } from 'lucide-react';
import { getWhatsAppUrl } from '../data/landingData';

interface CaseStudySectionProps {
  onOpenDemo?: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="contoh" className="bg-white py-16 sm:py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 border border-gray-200 rounded-full px-3.5 py-1 text-xs font-semibold mb-4">
            <Store size={14} />
            <span>Studi Kasus &amp; Contoh Nyata</span>
          </div>
          <h2 className="text-[clamp(1.8rem,5vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
            Seperti Apa Hasilnya?
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-3xl">
            Lihat contoh landing page yang kami buat untuk bisnis nyata.
            Bersih, informatif, dan langsung mengarahkan pelanggan ke pesanan WhatsApp.
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
                    Studi Kasus Bisnis Nyata
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    Toko Retail / Beras Medium Hingga Premium
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Toko Beras Pak Kadi
                </h3>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 mb-5">
                  <MapPin size={16} className="text-[#F26522] shrink-0 mt-0.5" />
                  <span>Jalan Raya Garuda, Bendo, Pakisaji, Kab. Malang, Jawa Timur</span>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  Landing page untuk membantu pelanggan melihat katalog beras medium hingga premium,
                  mengetahui lokasi toko di Pakisaji Malang, dan melakukan pemesanan langsung melalui WhatsApp.
                </p>

                <div className="bg-white rounded-2xl p-5 border border-gray-200/80 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                    Apa yang ditampilkan di halaman ini:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>Katalog beras medium hingga premium &amp; harga per sak/kg</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>Lokasi tepat di Jalan Raya Garuda, Bendo, Pakisaji, Malang</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>Tombol pesan WhatsApp terhubung langsung ke 088217872159</span>
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
                    className="inline-flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#d95315] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    <span>Lihat Full Demo</span>
                    <ExternalLink size={15} />
                  </button>
                )}

                <span className="text-xs text-gray-500 font-medium">
                  Bisa dicoba langsung dalam simulasi interaktif
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Mockup */}
            <div className="lg:col-span-5">
              <div
                onClick={onOpenDemo}
                className="bg-white rounded-2xl p-5 border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
              >
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-bold text-base flex items-center justify-center">
                      PK
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900 leading-tight">
                        Toko Beras Pak Kadi
                      </div>
                      <div className="text-[11px] text-gray-500">
                        Buka • 07:30 - 20:00
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                    Preview
                  </span>
                </div>

                <div className="space-y-2.5 mb-4">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-bold text-stone-900">Beras Premium Pandan Wangi</div>
                      <div className="text-[11px] text-stone-500">Pulen wangi • 5 kg</div>
                    </div>
                    <span className="font-extrabold text-stone-900">Rp72.000</span>
                  </div>

                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-bold text-stone-900">Beras Medium Super Pakisaji</div>
                      <div className="text-[11px] text-stone-500">Pulen harian • 5 kg</div>
                    </div>
                    <span className="font-extrabold text-stone-900">Rp64.000</span>
                  </div>
                </div>

                <div className="text-[11px] text-gray-600 mb-4 bg-gray-50 p-2.5 rounded-lg text-center font-medium">
                  Siap antar area Pakisaji, Kepanjen &amp; Kab. Malang
                </div>

                <div className="bg-emerald-600 group-hover:bg-emerald-700 text-white rounded-xl py-2.5 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
                  <span>Coba Klik &amp; Buka Halaman Demo</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note Below Case Study */}
        <p className="text-center text-xs sm:text-sm text-gray-600 font-medium mt-6 max-w-2xl mx-auto">
          Setiap landing page disesuaikan dengan foto produk, warna brand, dan gaya bisnis Anda sendiri.
          Bukan template yang dipaksakan sama rata.
        </p>
      </div>
    </section>
  );
};
