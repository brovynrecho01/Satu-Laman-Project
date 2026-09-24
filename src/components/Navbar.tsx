import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_NAME, NAV_ITEMS, getWhatsAppUrl } from '../data/landingData';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#fafaf9]/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs py-3.5'
          : 'bg-[#fafaf9] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-neutral-900 transition-colors"
          id="nav-brand-logo"
        >
          <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
            <img
              src="/satulaman-logo.svg"
              alt="Satu Laman Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-none text-neutral-900 group-hover:text-emerald-700 transition-colors">
              Satu Laman
            </span>
            <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">
              Landing Page UMKM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav-links">
          {NAV_ITEMS.map((item: any) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          {onOpenDemo && (
            <button
              onClick={onOpenDemo}
              className="text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Demo Toko Beras</span>
              <ArrowRight size={12} />
            </button>
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-whatsapp-cta"
            href={getWhatsAppUrl('Halo SatuLaman, saya ingin konsultasi gratis untuk landing page bisnis saya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs hover:shadow-sm transition-all duration-150"
          >
            <MessageCircle size={16} className="fill-current opacity-90" />
            <span>Konsultasi via WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          aria-label="Buka menu navigasi"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden bg-[#fafaf9] border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-2 py-2">
            {NAV_ITEMS.map((item: any) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
            {onOpenDemo && (
              <button
                onClick={() => {
                  closeMenu();
                  onOpenDemo();
                }}
                className="text-left px-3 py-2.5 rounded-lg text-base font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 flex items-center justify-between"
              >
                <span>Lihat Demo Toko Beras Pak Kadi</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>

          <div className="pt-2 border-t border-neutral-200">
            <a
              href={getWhatsAppUrl('Halo SatuLaman, saya ingin konsultasi via WhatsApp.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl shadow-xs text-base"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
