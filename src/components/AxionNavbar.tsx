import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/landingData';

interface AxionNavbarProps {
  onOpenDemo?: () => void;
}

export const AxionNavbar: React.FC<AxionNavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: Array<{ label: string; href: string }> = [
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Paket', href: '#paket' },
    { label: 'Contoh', href: '#contoh' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className="relative z-30 w-full max-w-[1440px] mx-auto p-2.5 sm:p-4">
        <div className="bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-5 py-2.5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-200/80 flex items-center justify-between">
          {/* LEFT: Logo & Subtitle */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                <span className="text-[13px] sm:text-[14px] font-bold tracking-tight">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[15px] sm:text-base text-gray-900 tracking-tight leading-none">
                  SatuLaman
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-gray-500 leading-tight mt-0.5">
                  Landing Page UMKM
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-7">
              {navLinks.map((item: any) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[13px] sm:text-[14px] text-gray-700 hover:text-gray-950 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT: Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenDemo && (
              <button
                type="button"
                onClick={onOpenDemo}
                className="text-[13px] font-semibold text-gray-700 hover:text-gray-950 bg-gray-100 hover:bg-gray-200 px-3.5 py-2 rounded-full transition-colors cursor-pointer"
              >
                Demo Toko Beras
              </button>
            )}

            <a
              href={getWhatsAppUrl('Halo SatuLaman, saya ingin konsultasi via WhatsApp untuk pembuatan landing page bisnis saya.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#d95315] text-white text-[13px] font-medium rounded-full px-4 py-2 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
            >
              <MessageCircle size={15} />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-gray-900 text-white rounded-full p-2 flex items-center justify-center transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-300">
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="bg-white rounded-t-3xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300 flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  S
                </div>
                <div>
                  <span className="font-bold text-sm text-gray-900 block leading-tight">SatuLaman</span>
                  <span className="text-[10px] text-gray-500 leading-tight">Landing Page UMKM</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-800"
              >
                <X size={16} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 py-1">
              {navLinks.map((link: any) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-gray-800 hover:text-[#F26522] py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-gray-100">
              {onOpenDemo && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full text-center py-2.5 rounded-full border border-gray-300 font-semibold text-sm text-gray-800 hover:bg-gray-50"
                >
                  Demo Toko Beras
                </button>
              )}

              <a
                href={getWhatsAppUrl('Halo SatuLaman, saya ingin konsultasi via WhatsApp untuk pembuatan landing page bisnis saya.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#F26522] text-white rounded-full py-3 text-sm font-medium shadow-sm"
              >
                <MessageCircle size={16} />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
