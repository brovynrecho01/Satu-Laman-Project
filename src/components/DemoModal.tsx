import React, { useState } from 'react';
import {
  X,
  Smartphone,
  Monitor,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Minus,
  MessageCircle,
  Truck,
} from 'lucide-react';
import { WHATSAPP_NUMBER, TOKO_PAK_KADI } from '../data/landingData';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProductItem {
  id: string;
  name: string;
  category: 'medium' | 'premium' | 'sehat';
  weight: string;
  price: number;
  badge?: string;
  desc: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [viewport, setViewport] = useState<'mobile' | 'desktop'>('mobile');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [cart, setCart] = useState<{ [id: string]: number }>({
    'pandan-wangi': 1,
    'medium-super': 1,
  });

  if (!isOpen) return null;

  const products: ProductItem[] = [
    {
      id: 'pandan-wangi',
      name: 'Beras Premium Pandan Wangi',
      category: 'premium',
      weight: '5 kg (Kemasan Karung)',
      price: 72000,
      badge: 'Premium Favorit',
      desc: 'Wangi daun pandan alami, bulir utuh bening, tekstur pulen nikmat tanpa pengawet.',
    },
    {
      id: 'mentik-wangi',
      name: 'Beras Premium Mentik Wangi / Rojolele Super',
      category: 'premium',
      weight: '5 kg (Kemasan Karung)',
      price: 70000,
      badge: 'Best Seller',
      desc: 'Beras kualitas premium super pulen khas Jawa Timur, butiran bersih tanpa kerikil.',
    },
    {
      id: 'medium-super',
      name: 'Beras Medium Super Pakisaji',
      category: 'medium',
      weight: '5 kg (Kemasan Karung)',
      price: 64000,
      badge: 'Hemat Harian',
      desc: 'Beras medium kualitas super untuk konsumsi keluarga harian & usaha warung makan.',
    },
    {
      id: 'medium-c4',
      name: 'Beras Medium C4 / IR64 Pilihan',
      category: 'medium',
      weight: '5 kg (Kemasan Karung)',
      price: 60000,
      desc: 'Beras standar harian, mekar sedang, tidak cepat basi, cocok untuk katering & rumah tangga.',
    },
    {
      id: 'beras-merah',
      name: 'Beras Merah Organik Pilihan',
      category: 'sehat',
      weight: '2 kg (Kemasan Vakum)',
      price: 36000,
      badge: 'Rendah Gula',
      desc: 'Kaya serat & nutrisi alami, sangat baik untuk diet sehat dan penderita diabetes.',
    },
  ];

  const filteredProducts =
    selectedFilter === 'all'
      ? products
      : products.filter((p: any) => p.category === selectedFilter);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev: Record<string, number>) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const totalItems = Object.values(cart).reduce((a: number, b: number) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((sum: number, [id, qty]: [string, number]) => {
    const product = products.find((p: any) => p.id === id);
    return sum + (product ? product.price * qty : 0);
  }, 0);

  const generateOrderWaLink = () => {
    const lines = Object.entries(cart).map(([id, qty]: [string, number]) => {
      const p = products.find((prod: any) => prod.id === id);
      return `- ${p?.name} (${qty} sak): Rp${((p?.price || 0) * qty).toLocaleString('id-ID')}`;
    });

    const msg = `Halo Toko Beras Pak Kadi, saya ingin pesan beras:\n\n${lines.join('\n')}\n\n*Total Estimasi: Rp${totalPrice.toLocaleString('id-ID')}*\n\nMohon info ketersediaan stok dan konfirmasi pengiriman ke alamat saya. Terima kasih!`;
    return `https://wa.me/${TOKO_PAK_KADI.waNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-neutral-300 overflow-hidden flex flex-col max-h-[95vh]">
        {/* Modal Top Control Bar */}
        <div className="bg-neutral-900 text-white px-4 py-3 flex items-center justify-between shrink-0 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <span className="font-bold text-sm sm:text-base">
                Demo Toko Beras Pak Kadi
              </span>
              <span className="text-[11px] text-neutral-400 block hidden sm:inline sm:ml-2">
                • Bendo, Pakisaji, Kab. Malang
              </span>
            </div>
          </div>

          {/* Viewport toggle & Close button */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-neutral-800 p-1 rounded-lg border border-neutral-700 text-xs">
              <button
                onClick={() => setViewport('mobile')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                  viewport === 'mobile'
                    ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Smartphone size={14} />
                <span>HP (Mobile)</span>
              </button>
              <button
                onClick={() => setViewport('desktop')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                  viewport === 'desktop'
                    ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Monitor size={14} />
                <span>Layar Komputer</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
              aria-label="Tutup demo"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body Container with Simulated Viewport */}
        <div className="flex-1 overflow-y-auto bg-neutral-100 p-3 sm:p-6 flex justify-center items-start">
          <div
            className={`w-full bg-white transition-all duration-300 ${
              viewport === 'mobile'
                ? 'max-w-md rounded-2xl shadow-xl border-4 border-neutral-800 overflow-hidden my-auto'
                : 'max-w-4xl rounded-xl shadow-md border border-neutral-200'
            }`}
          >
            {/* Simulated Live Business Website of Toko Beras Pak Kadi */}
            <div className="bg-white text-neutral-900 text-left">
              {/* Store Header */}
              <div className="border-b border-neutral-200 bg-white sticky top-0 z-20 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                    PK
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-neutral-900 leading-tight">
                      Toko Beras Pak Kadi
                    </h3>
                    <p className="text-[11px] text-neutral-500">
                      Beras Medium & Premium • Pakisaji Malang
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="font-medium">Buka Hari Ini</span>
                </div>
              </div>

              {/* Store Hero */}
              <div className="p-4 sm:p-6 bg-gradient-to-b from-amber-50/70 to-white border-b border-neutral-100">
                <span className="text-[10px] font-bold tracking-wider text-amber-900 uppercase bg-amber-100/70 px-2 py-0.5 rounded">
                  Beras Medium Hingga Premium
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-neutral-900 mt-2 leading-snug">
                  Beras Berkualitas untuk Keluarga & Usaha Kuliner Malang
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed">
                  Menyediakan pilihan beras medium hingga premium terbaik. Bersih dari kerikil, butiran utuh, tanpa pemutih, dan tanpa pewangi sintetis.
                </p>

                {/* Micro info badges */}
                <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-neutral-700">
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-neutral-200">
                    <Truck size={14} className="text-emerald-600 shrink-0" />
                    <span>Siap antar area Pakisaji & sekitarnya</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-neutral-200">
                    <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                    <span>Kualitas terjamin & timbangan pas</span>
                  </div>
                </div>
              </div>

              {/* Product Catalog Section */}
              <div className="p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm sm:text-base text-neutral-900">
                      Pilihan Beras Medium & Premium
                    </h5>
                    <p className="text-xs text-neutral-500">
                      Pilih beras untuk hitung estimasi dan langsung pesan via WhatsApp
                    </p>
                  </div>
                </div>

                {/* Filter tags */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  <button
                    onClick={() => setSelectedFilter('all')}
                    className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                      selectedFilter === 'all'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Semua
                  </button>
                  <button
                    onClick={() => setSelectedFilter('medium')}
                    className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                      selectedFilter === 'medium'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Beras Medium
                  </button>
                  <button
                    onClick={() => setSelectedFilter('premium')}
                    className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                      selectedFilter === 'premium'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Beras Premium
                  </button>
                  <button
                    onClick={() => setSelectedFilter('sehat')}
                    className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                      selectedFilter === 'sehat'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Beras Sehat
                  </button>
                </div>

                {/* Products list */}
                <div className="space-y-3">
                  {filteredProducts.map((product: any) => {
                    const qty = cart[product.id] || 0;
                    return (
                      <div
                        key={product.id}
                        className="bg-white p-3 rounded-xl border border-neutral-200 hover:border-emerald-300 transition-all shadow-2xs space-y-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="font-bold text-xs sm:text-sm text-neutral-900">
                                {product.name}
                              </span>
                              {product.badge && (
                                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">
                                  {product.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-neutral-500 mt-0.5">
                              {product.weight}
                            </p>
                            <p className="text-xs text-neutral-600 mt-1">
                              {product.desc}
                            </p>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="font-extrabold text-sm text-neutral-900 block">
                              Rp{product.price.toLocaleString('id-ID')}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Quantity Counter */}
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                          <span className="text-[11px] text-neutral-500">
                            {qty > 0 ? `Subtotal: Rp${(product.price * qty).toLocaleString('id-ID')}` : 'Belum dipilih'}
                          </span>

                          <div className="flex items-center gap-2">
                            {qty === 0 ? (
                              <button
                                onClick={() => updateQuantity(product.id, 1)}
                                className="text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200 transition-colors"
                              >
                                + Tambah
                              </button>
                            ) : (
                              <div className="flex items-center gap-2 bg-neutral-100 rounded-lg p-0.5 border border-neutral-200">
                                <button
                                  onClick={() => updateQuantity(product.id, -1)}
                                  className="w-6 h-6 rounded bg-white text-neutral-700 hover:bg-neutral-200 flex items-center justify-center font-bold text-xs shadow-2xs"
                                  aria-label="Kurang"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="text-xs font-bold text-neutral-900 px-1">
                                  {qty}
                                </span>
                                <button
                                  onClick={() => updateQuantity(product.id, 1)}
                                  className="w-6 h-6 rounded bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center font-bold text-xs shadow-2xs"
                                  aria-label="Tambah"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Cart & WhatsApp Checkout Simulation */}
                {totalItems > 0 && (
                  <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl space-y-2.5 animate-in fade-in">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-emerald-900">
                        Total Pesanan ({totalItems} sak):
                      </span>
                      <span className="font-extrabold text-base text-emerald-950">
                        Rp{totalPrice.toLocaleString('id-ID')}
                      </span>
                    </div>

                    <a
                      href={generateOrderWaLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <MessageCircle size={15} className="fill-current" />
                      <span>Pesan ke WhatsApp ({TOKO_PAK_KADI.phone})</span>
                    </a>
                    <p className="text-[10px] text-center text-emerald-700">
                      Otomatis merapikan format pemesanan ke nomor WhatsApp Toko Beras Pak Kadi
                    </p>
                  </div>
                )}

                {/* Store Info & Location Block */}
                <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200 space-y-2 text-xs">
                  <span className="font-bold text-neutral-900 block">
                    Informasi Toko & Lokasi
                  </span>
                  <div className="flex items-start gap-2 text-neutral-600">
                    <MapPin size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                    <span>{TOKO_PAK_KADI.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Clock size={14} className="text-emerald-700 shrink-0" />
                    <span>{TOKO_PAK_KADI.operationalHours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Phone size={14} className="text-emerald-700 shrink-0" />
                    <span>Nomor WhatsApp: {TOKO_PAK_KADI.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-neutral-50 px-4 py-3 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-neutral-600 text-center sm:text-left">
            <span className="font-semibold text-neutral-900">
              Suka dengan format landing page seperti ini?
            </span>{' '}
            Bisnis Anda juga bisa dibuatkan halaman rapi seperti Toko Beras Pak Kadi.
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-200 rounded-lg transition-colors"
            >
              Tutup
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo, saya baru saja melihat contoh landing page Toko Beras Pak Kadi dan tertarik membuatkan untuk bisnis saya.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xs transition-colors"
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
