import React from 'react';
import { Star, CheckCircle, Store, Utensils, Coffee, ShoppingBag } from 'lucide-react';
import { RollButton } from './RollButton';
import { getWhatsAppUrl } from '../data/landingData';

interface AxionTestimonialsProps {
  onOpenDemo?: () => void;
}

export const AxionTestimonials: React.FC<AxionTestimonialsProps> = ({
  onOpenDemo,
}) => {
  const testimonials = [
    {
      id: 'pak-kadi',
      name: 'Pak Kadi',
      business: 'Toko Beras Sumber Rejeki',
      category: 'Toko Sembako & Beras',
      location: 'Pakisaji, Malang',
      icon: Store,
      rating: 5,
      impact: 'Pesanan WhatsApp naik & hemat waktu balas chat',
      quote:
        'Dulu pelanggan sering bolak-balik tanya stok beras lewat WA dan kurir pengantaran suka nyasar. Sekarang tinggal kasih 1 link website Satu Laman: pembeli langsung cek daftar harga per sak, titik Google Maps akurat, dan format order masuk otomatis ke WA kami. Sangat praktis dan hemat waktu!',
      hasDemo: true,
    },
    {
      id: 'dapur-rasa',
      name: 'Bu Ratna S.',
      business: 'Dapur Rasa Nusantara',
      category: 'Katering & Nasi Kotak',
      location: 'Surabaya',
      icon: Utensils,
      rating: 5,
      impact: 'Deal pesanan kantor & hajatan jauh lebih cepat',
      quote:
        'Awalnya ragu bikin website karena takut ribet biaya bulanan dan setting teknis. Di Satu Laman cukup sekali bayar dan semuanya disiapkan lewat obrolan WA yang ramah. Foto nasi kotak dan paket menu tertata rapi. Klien kantor jadi jauh lebih percaya dan langsung order partai besar.',
      hasDemo: false,
    },
    {
      id: 'kopi-seduh',
      name: 'Hendra Kusuma',
      business: 'Kopi Seduh Sahabat',
      category: 'Coffee Shop & Roastery',
      location: 'Malang',
      icon: Coffee,
      rating: 5,
      impact: 'Bio Instagram terlihat profesional & berkelas',
      quote:
        'Desainnya bersih, minimalis, dan sangat cepat dibuka di HP pengunjung. Link di bio Instagram kami sekarang tampak profesional setara brand nasional. Pengunjung baru bisa langsung cek menu seasonal, jam buka, dan alamat outlet dalam hitungan detik.',
      hasDemo: false,
    },
    {
      id: 'griya-batik',
      name: 'Siti Nurhaliza',
      business: 'Griya Modest Wear',
      category: 'Fashion & Butik Lokal',
      location: 'Solo',
      icon: ShoppingBag,
      rating: 5,
      impact: 'Tidak perlu kirim puluhan foto katalog berulang',
      quote:
        'Dulu capek kirim puluhan foto baju satu per satu setiap ada calon pembeli baru di WhatsApp. Sekarang semua koleksi terbaru rapi di satu halaman. Pembeli tinggal pilih model yang disukai, lalu tombol beli langsung menghubungkan ke chat saya.',
      hasDemo: false,
    },
  ];

  return (
    <section
      id="testimoni"
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-t border-gray-200/60"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge Row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            2
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 text-gray-700 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 bg-white/70">
            Cerita &amp; Testimoni Klien
          </div>
        </div>

        {/* Heading H2 */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-4">
            Dipercaya Pelaku Usaha Lokal
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 font-normal leading-relaxed">
            Pengalaman nyata pemilik toko, kuliner, dan brand lokal yang kini
            lebih mudah ditemukan, dipercaya pelanggan, dan kebanjiran chat WhatsApp.
          </p>
        </div>

        {/* Testimonials Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {testimonials.map((item: any) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header: Business Category & Star Rating */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
                        <Icon size={15} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-900 block leading-tight">
                          {item.business}
                        </span>
                        <span className="text-[11px] text-gray-500 leading-tight">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#F59E0B] text-[#F59E0B]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Impact Highlight Badge */}
                  <div className="mb-4 inline-flex items-center gap-1.5 bg-[#FFF4EE] border border-[#F26522]/20 text-[#D04D0D] text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
                    <CheckCircle size={12} className="text-[#F26522] shrink-0" />
                    <span>{item.impact}</span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed font-normal mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Footer: Author Info & Action */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-sm font-semibold text-gray-900 block">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {item.category}
                    </span>
                  </div>

                  {/* If item has demo action */}
                  {item.hasDemo && onOpenDemo && (
                    <button
                      type="button"
                      onClick={onOpenDemo}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F26522] hover:text-[#d34d0e] transition-colors cursor-pointer"
                    >
                      <span>Lihat Demo Toko Ini</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Testimonials */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
              Ingin landing page seperti ini untuk bisnis Anda?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Diskusikan gratis tanpa ikatan. Kami siapkan desain yang pas dengan karakter produk Anda.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <RollButton
              text="Konsultasi Sekarang"
              href={getWhatsAppUrl(
                'Halo SatuLaman, saya tertarik membuat landing page seperti cerita testimoni di website.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="orange"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
