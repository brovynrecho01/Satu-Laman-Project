import React, { useState } from 'react';
import {
  X,
  Smartphone,
  Monitor,
  ExternalLink,
  RotateCcw,
  ShieldCheck,
  MessageCircle,
  Lock,
  Globe,
  Store,
  Loader2,
} from 'lucide-react';
import { WHATSAPP_NUMBER, TOKO_PAK_KADI } from '../data/landingData';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [viewport, setViewport] = useState<'mobile' | 'desktop'>('mobile');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [iframeKey, setIframeKey] = useState<number>(1);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev: number) => prev + 1);
  };

  const liveUrl = TOKO_PAK_KADI.liveUrl || 'https://tokopakkadi.lovable.app/';
  const displayUrl = TOKO_PAK_KADI.displayUrl || 'tokopakkadi.lovable.app';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl border border-neutral-300 overflow-hidden flex flex-col max-h-[96vh]">
        {/* Modal Top Control Bar */}
        <div className="bg-[#121212] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0 border-b border-neutral-800">
          {/* Left: Brand / Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              PK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-white">
                  Demo Web Asli: Toko Beras Pak Kadi
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-700/60 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Aktif
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 hidden sm:block">
                Menampilkan langsung website operasional nyata di{' '}
                <span className="text-orange-400 font-mono">{displayUrl}</span>
              </p>
            </div>
          </div>

          {/* Center/Right: Viewport Switcher & Controls */}
          <div className="flex items-center gap-2">
            {/* Viewport switch */}
            <div className="flex items-center bg-neutral-800 p-1 rounded-xl border border-neutral-700 text-xs">
              <button
                type="button"
                onClick={() => setViewport('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  viewport === 'mobile'
                    ? 'bg-[#F26522] text-white font-semibold shadow-xs'
                    : 'text-neutral-300 hover:text-white'
                }`}
                title="Tampilan Layar HP (Mobile)"
              >
                <Smartphone size={14} />
                <span className="hidden xs:inline">Versi HP</span>
              </button>
              <button
                type="button"
                onClick={() => setViewport('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  viewport === 'desktop'
                    ? 'bg-[#F26522] text-white font-semibold shadow-xs'
                    : 'text-neutral-300 hover:text-white'
                }`}
                title="Tampilan Layar Komputer / Desktop"
              >
                <Monitor size={14} />
                <span className="hidden xs:inline">Versi Komputer</span>
              </button>
            </div>

            {/* Refresh button */}
            <button
              type="button"
              onClick={handleRefresh}
              className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title="Muat ulang halaman"
              aria-label="Muat ulang website"
            >
              <RotateCcw size={15} />
            </button>

            {/* Open direct tab */}
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold px-3 py-1.5 rounded-xl transition-colors cursor-pointer shadow-xs"
              title="Buka website asli di tab baru"
            >
              <span>Buka di Tab Baru</span>
              <ExternalLink size={13} />
            </a>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup demo"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body Container with Simulated Viewport */}
        <div className="flex-1 overflow-y-auto bg-stone-100 p-3 sm:p-6 flex flex-col items-center justify-center min-h-[500px]">
          {/* Subtitle helper */}
          <div className="w-full flex items-center justify-between text-xs text-stone-500 mb-3 px-1 max-w-5xl">
            <div className="flex items-center gap-2">
              <Globe size={13} className="text-[#F26522]" />
              <span>
                Pratinjau responsif dari{' '}
                <strong className="text-stone-700">{displayUrl}</strong>
              </span>
            </div>
            <span className="hidden sm:inline text-stone-400">
              Mode saat ini: {viewport === 'mobile' ? 'Layar HP (Mobile 390px)' : 'Layar Komputer (Desktop)'}
            </span>
          </div>

          {/* VIEWPORT 1: MOBILE FRAME */}
          {viewport === 'mobile' && (
            <div className="relative mx-auto transition-all duration-300 flex flex-col items-center my-auto">
              {/* Smartphone Outer Chassis */}
              <div className="w-[360px] sm:w-[390px] h-[640px] sm:h-[690px] max-h-[72vh] bg-neutral-900 rounded-[44px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border-4 border-neutral-700 flex flex-col relative overflow-hidden">
                {/* Phone Speaker & Camera Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-950 rounded-full z-30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-neutral-900 mr-2 border border-neutral-800" />
                  <div className="w-8 h-1 bg-neutral-800 rounded-full" />
                </div>

                {/* Top Phone Status Bar Simulation */}
                <div className="w-full bg-[#1e293b] text-white px-5 pt-1.5 pb-1 flex items-center justify-between text-[11px] font-semibold shrink-0 z-20 rounded-t-[34px]">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Inner Screen holding the real iframe */}
                <div className="flex-1 w-full bg-white rounded-b-[34px] overflow-hidden relative flex flex-col">
                  {isLoading && (
                    <div className="absolute inset-0 bg-stone-50 flex flex-col items-center justify-center gap-2 z-10 text-stone-600">
                      <Loader2 className="w-6 h-6 text-[#F26522] animate-spin" />
                      <span className="text-xs font-medium">Memuat website asli Pak Kadi...</span>
                    </div>
                  )}

                  <iframe
                    key={`mobile-${iframeKey}`}
                    src={liveUrl}
                    title="Website Asli Toko Beras Pak Kadi (Versi Mobile)"
                    className="w-full h-full border-0 rounded-b-[34px]"
                    onLoad={() => setIsLoading(false)}
                    allow="clipboard-write; geolocation"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                  />
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-neutral-500/60 rounded-full z-30 pointer-events-none" />
              </div>

              <div className="mt-3 text-[11px] text-stone-500 font-medium text-center">
                Geser / scroll ke bawah di dalam layar HP untuk melihat seluruh isi halaman &amp; katalog.
              </div>
            </div>
          )}

          {/* VIEWPORT 2: DESKTOP BROWSER FRAME */}
          {viewport === 'desktop' && (
            <div className="w-full max-w-5xl transition-all duration-300 mx-auto my-auto flex flex-col">
              {/* Browser Window Chassis */}
              <div className="w-full bg-white rounded-2xl shadow-xl border border-stone-300 overflow-hidden flex flex-col h-[620px] max-h-[72vh]">
                {/* Browser Address Bar Chrome */}
                <div className="bg-stone-100 border-b border-stone-200 px-4 py-2.5 flex items-center gap-3 shrink-0">
                  {/* Window traffic lights */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block border border-red-500/40" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block border border-amber-500/40" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block border border-emerald-500/40" />
                  </div>

                  {/* Browser URL Input Bar */}
                  <div className="flex-1 bg-white border border-stone-300 rounded-lg px-3 py-1 flex items-center gap-2 text-xs text-stone-600 shadow-2xs">
                    <Lock size={12} className="text-emerald-600 shrink-0" />
                    <span className="font-mono text-stone-700 truncate">
                      https://{displayUrl}/
                    </span>
                    <span className="ml-auto text-[10px] text-stone-400 font-sans hidden sm:inline">
                      Aman &amp; Terverifikasi
                    </span>
                  </div>

                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-stone-500 hover:text-stone-900 transition-colors p-1"
                    title="Buka tab baru"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Inner Screen holding the real iframe */}
                <div className="flex-1 w-full bg-white relative flex flex-col overflow-hidden">
                  {isLoading && (
                    <div className="absolute inset-0 bg-stone-50 flex flex-col items-center justify-center gap-2 z-10 text-stone-600">
                      <Loader2 className="w-6 h-6 text-[#F26522] animate-spin" />
                      <span className="text-xs font-medium">Memuat website asli Pak Kadi...</span>
                    </div>
                  )}

                  <iframe
                    key={`desktop-${iframeKey}`}
                    src={liveUrl}
                    title="Website Asli Toko Beras Pak Kadi (Versi Komputer)"
                    className="w-full h-full border-0"
                    onLoad={() => setIsLoading(false)}
                    allow="clipboard-write; geolocation"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                  />
                </div>
              </div>

              <div className="mt-3 text-[11px] text-stone-500 font-medium text-center">
                Scroll halaman pada layar komputer di atas untuk melihat katalog produk, peta lokasi, dan form pemesanan WhatsApp.
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-stone-50 px-4 sm:px-6 py-3.5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span className="font-bold text-stone-900">
              Tertarik memiliki landing page seprofesional Toko Beras Pak Kadi?
            </span>{' '}
            <span className="hidden sm:inline">
              Bisnis Anda bisa langsung tayang rapi dengan penawaran spesial program perdana kami.
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-full transition-colors cursor-pointer"
            >
              <span>Kunjungi Web Asli</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo SatuLaman, saya baru saja mencoba demo live Toko Beras Pak Kadi dan tertarik membuatkan untuk bisnis saya.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#F26522] hover:bg-[#d95315] text-white text-xs font-bold px-4 py-2 rounded-full shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle size={14} className="fill-current" />
              <span>Konsultasi Pembuatan Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
