import React from 'react';
import { ArrowUp, MessageCircle, Instagram, Mail, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { MASTER_COPY, getWhatsAppUrl, CONTACT, BRAND_NAME } from '../data/landingData';

export const AxionFooter: React.FC = () => {
  const { finalCta } = MASTER_COPY;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="bg-[#111111] text-white pt-16 sm:pt-20 lg:pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* FINAL CTA SECTION */}
        <div className="bg-[#1a1a1a] border border-neutral-800 rounded-3xl p-6 sm:p-10 lg:p-14 mb-16 sm:mb-20 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-800/60 px-3 py-1 rounded-full inline-block mb-4">
              SatuLaman Beta Sprint
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              {finalCta.headline}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              {finalCta.subHeadline}
            </p>

            {/* CTA Button */}
            <div className="mb-4">
              <a
                href={getWhatsAppUrl(finalCta.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#F26522] hover:bg-[#d95315] active:scale-[0.98] text-white px-7 py-4 rounded-full text-sm sm:text-base font-bold transition-all duration-200 shadow-lg hover:shadow-orange-500/20 cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>{finalCta.buttonCta}</span>
              </a>
            </div>

            {/* Microcopy under CTA */}
            <p className="text-xs sm:text-sm text-neutral-400 font-medium mb-8">
              {finalCta.microcopy}
            </p>

            {/* Contact Channels */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-6 border-t border-neutral-800">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>WA: {CONTACT.whatsappDisplay}</span>
              </a>

              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors"
              >
                <Instagram size={15} className="text-pink-400" />
                <span>{CONTACT.instagramHandle}</span>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors"
              >
                <Mail size={15} className="text-blue-400" />
                <span>{CONTACT.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-800 text-neutral-400 text-xs sm:text-sm">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center font-bold text-sm">
                S
              </div>
              <span className="font-bold text-lg text-white tracking-tight">{BRAND_NAME}</span>
            </div>
            <p className="leading-relaxed text-neutral-400 max-w-sm">
              Sistem Halaman Jualan Digital &amp; WhatsApp Sales Kit untuk UMKM &amp; Bisnis Lokal.
            </p>
            <p className="leading-relaxed text-neutral-400 max-w-sm">
              Membantu bisnis Anda lebih mudah dipahami dan dihubungi calon pembeli dari media sosial.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#cara-kerja" className="hover:text-white transition-colors">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="#penawaran" className="hover:text-white transition-colors">
                  Penawaran Beta (Rp499.000)
                </a>
              </li>
              <li>
                <a href="#contoh" className="hover:text-white transition-colors">
                  Demo Toko Beras Pak Kadi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Program Beta Note */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">
              Status Program Beta
            </h4>
            <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400">
                <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
                <span>Sisa 5 Slot Tersedia</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Slot diberikan berurutan bagi pemilik bisnis yang sudah siap data dan mengisi intake form.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {BRAND_NAME}. Hak Cipta Dilindungi. Sistem Halaman Jualan Digital UMKM.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
