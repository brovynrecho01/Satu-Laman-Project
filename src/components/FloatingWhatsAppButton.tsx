import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../data/landingData';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);

  // Auto-hide the mini tooltip badge after a few seconds or allow dismiss, keeping the button visible
  useEffect(() => {
    const timer = setTimeout(() => {
      // Keep button, subtle badge transition
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = getWhatsAppUrl(
    'Halo SatuLaman, saya ingin cek kuota Beta (Rp499.000) dan konsultasi landing page untuk bisnis saya.'
  );

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none select-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Optional Mini Status Callout */}
      {showNotificationBadge && (
        <div className="pointer-events-auto mb-2 flex items-center gap-1.5 bg-gray-900/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium py-1 px-3 rounded-full shadow-lg border border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>Cek Kuota Beta via WA</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowNotificationBadge(false);
            }}
            className="ml-1 text-gray-400 hover:text-white text-xs leading-none cursor-pointer"
            aria-label="Tutup pesan"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Action Button (FAB) */}
      <a
        id="mobile-floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat langsung dengan SatuLaman via WhatsApp di ${WHATSAPP_DISPLAY}`}
        className="pointer-events-auto group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ea950] text-white font-bold py-3 px-4 sm:py-3.5 sm:px-5 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)] border border-white/30 transition-all duration-300 active:scale-95 cursor-pointer touch-manipulation"
      >
        {/* Authentic WhatsApp SVG Icon */}
        <span className="relative shrink-0 w-6 h-6 flex items-center justify-center">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.275-.101-.475-.15-.676.15-.2.301-.776.978-.951 1.178-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.201.051-.376-.025-.527-.075-.15-.676-1.63-.927-2.232-.244-.587-.492-.507-.676-.516-.175-.01-.376-.01-.577-.01-.201 0-.526.075-.802.376-.275.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.201 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.579-.086 1.78-.727 2.03-1.43.251-.702.251-1.304.175-1.43-.075-.125-.276-.201-.577-.351zM12.04 2C6.495 2 2 6.495 2 12.04c0 1.947.558 3.765 1.524 5.305L2 22l4.802-1.483a9.986 9.986 0 005.238 1.523c5.545 0 10.04-4.495 10.04-10.04C22.08 6.495 17.585 2 12.04 2zm0 18.069c-1.644 0-3.17-.492-4.453-1.336l-.32-.208-2.854.882.898-2.782-.228-.337A8.04 8.04 0 014.015 12.04c0-4.425 3.6-8.025 8.025-8.025s8.025 3.6 8.025 8.025-3.6 8.029-8.025 8.029z" />
          </svg>
        </span>

        {/* Text Label */}
        <span className="text-[13px] sm:text-[14px] font-bold tracking-tight whitespace-nowrap">
          Chat WhatsApp
        </span>

        {/* Live Pulse Indicator Dot */}
        <span className="relative flex h-2.5 w-2.5 ml-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-xs"></span>
        </span>
      </a>
    </aside>
  );
};
