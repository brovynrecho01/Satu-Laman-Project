import React from 'react';
import { Check, ArrowRight, ShieldCheck, PlusCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/landingData';

export const PricingSectionNew: React.FC = () => {
  const tiers = [
    {
      id: 'starter',
      name: 'STARTER',
      tag: null,
      description: 'Untuk bisnis yang membutuhkan website sederhana dan profesional.',
      price: 'Rp750.000',
      period: 'Pembayaran satu kali untuk setup awal',
      features: [
        '1 halaman terpadu',
        'Hingga 5 section',
        'Responsive mobile',
        'WhatsApp CTA',
        'Google Maps',
        'Social media link',
        'Deployment & siap tayang',
        '1x revisi minor',
      ],
      buttonText: 'Pilih Starter',
      featured: false,
      msg: 'Halo SatuLaman, saya tertarik memilih paket STARTER (Rp750.000) untuk bisnis saya.',
    },
    {
      id: 'business',
      name: 'BUSINESS',
      tag: 'Paling Banyak Dipilih',
      description: 'Untuk bisnis yang ingin menampilkan produk, layanan, dan informasi bisnis dengan lebih lengkap.',
      price: 'Rp1.250.000',
      period: 'Paket paling lengkap untuk usaha aktif',
      features: [
        'Semua fitur Starter',
        'Hingga 8 section',
        'Catalog / menu showcase',
        'Custom UI design khas bisnis',
        'Copywriting dasar lengkap',
        'Section FAQ (tanya jawab)',
        'Testimonial section',
        'CTA optimization',
        '2x revisi',
      ],
      buttonText: 'Pilih Business',
      featured: true,
      msg: 'Halo SatuLaman, saya tertarik memilih paket BUSINESS (Rp1.250.000) untuk bisnis saya.',
    },
    {
      id: 'pro',
      name: 'PRO',
      tag: 'Fleksibel',
      description: 'Untuk bisnis dengan kebutuhan informasi dan katalog yang lebih kompleks.',
      price: 'Mulai Rp1.750.000',
      period: 'Disesuaikan dengan kebutuhan khusus',
      features: [
        'Semua fitur Business',
        'Katalog produk lebih besar',
        'Custom layout khusus',
        'Advanced sections',
        'Custom interaction & flow',
        'Additional CTA flow',
        'Analytics setup',
        '3x revisi',
      ],
      buttonText: 'Diskusikan Kebutuhan Saya',
      featured: false,
      msg: 'Halo SatuLaman, saya tertarik mendiskusikan paket PRO untuk kebutuhan bisnis khusus saya.',
    },
  ];

  const futureAddons = [
    'WhatsApp automation & auto-reply pesan order',
    'Katalog produk dengan varian dan filter yang lebih banyak',
    'Form pemesanan mandiri dengan rekap otomatis',
    'Pengukuran statistik pengunjung (analytics)',
    'Integrasi konten promosi dan update berkala',
  ];

  return (
    <section id="paket" className="bg-white py-16 sm:py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 border border-gray-200 rounded-full px-3.5 py-1 text-xs font-semibold mb-4">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Biaya Jelas &amp; Transparan</span>
          </div>
          <h2 className="text-[clamp(1.8rem,5vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
            Pilih Sesuai Kebutuhan Bisnis Anda
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-3xl">
            Tidak ada biaya tersembunyi. Investasi terjangkau dengan hasil profesional
            yang langsung membantu penjualan produk Anda.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {tiers.map((tier: any) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                tier.featured
                  ? 'bg-gray-900 text-white shadow-xl ring-2 ring-[#F26522] relative'
                  : 'bg-[#FAF9F6] text-gray-900 border border-gray-200/90 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                {/* Tag & Name */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3
                    className={`font-bold tracking-wider text-sm ${
                      tier.featured ? 'text-orange-400' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.tag && (
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        tier.featured
                          ? 'bg-[#F26522] text-white'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {tier.tag}
                    </span>
                  )}
                </div>

                <p
                  className={`text-xs sm:text-sm mb-6 ${
                    tier.featured ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-200/20">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {tier.price}
                  </div>
                  <div
                    className={`text-xs mt-1.5 ${
                      tier.featured ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {tier.period}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <div
                    className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                      tier.featured ? 'text-gray-300' : 'text-gray-900'
                    }`}
                  >
                    Fitur yang didapatkan:
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    {tier.features.map((feat: any) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className={`shrink-0 mt-0.5 ${
                            tier.featured ? 'text-[#F26522]' : 'text-emerald-600'
                          }`}
                        />
                        <span className={tier.featured ? 'text-gray-200' : 'text-gray-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppUrl(tier.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-5 rounded-full text-center text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  tier.featured
                    ? 'bg-[#F26522] hover:bg-[#d95315] text-white shadow-md'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                <span>{tier.buttonText}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Catatan Transparansi */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 sm:p-6 mb-16 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900">Catatan Transparansi:</strong>{' '}
          Harga dapat menyesuaikan jumlah katalog, kebutuhan desain, dan fitur tambahan.
          Kami akan jelaskan scope dan harga terlebih dahulu sebelum pengerjaan. Tanpa biaya tersembunyi.
        </div>

        {/* PENGEMBANGAN BERTAHAP */}
        <div className="bg-[#FAF9F6] border border-gray-200/90 rounded-3xl p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100 inline-block mb-3">
              Pengembangan Bertahap
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Bisa Dikembangkan Lagi
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Mulai dari yang sederhana. Tambahkan fitur lanjutan ketika bisnis Anda memang sudah membutuhkannya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {futureAddons.map((item: any) => (
              <div
                key={item}
                className="bg-white rounded-xl p-4 border border-gray-200/80 flex items-start gap-3 text-xs sm:text-sm text-gray-800"
              >
                <PlusCircle size={16} className="text-[#F26522] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
