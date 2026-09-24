import React from 'react';
import { RollButton } from './RollButton';
import { Smartphone, MessageSquare, Palette, Globe } from 'lucide-react';
import { getWhatsAppUrl } from '../data/landingData';

export const AxionAbout: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      desc: 'Tampilan cepat & rapi saat dibuka di HP pembeli.',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Ready',
      desc: 'Tombol order langsung membuka chat dengan template pesan otomatis.',
    },
    {
      icon: Palette,
      title: 'Custom Design',
      desc: 'Disesuaikan dengan identitas brand, warna, dan jenis produk Anda.',
    },
    {
      icon: Globe,
      title: 'Siap Online',
      desc: 'Termasuk hosting aman, domain, dan panduan penggunaan.',
    },
  ];

  return (
    <section
      id="studio"
      className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge Row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            1
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 text-gray-700 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Introducing Satu Laman
          </div>
        </div>

        {/* Heading H2 */}
        <div className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28 max-w-5xl">
            Satu Halaman. Semua Informasi Penting Bisnis Anda
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Rapi, Terpercaya, dan Siap Jualan.
          </h2>
        </div>

        {/* MOBILE/TABLET CONTENT (lg:hidden) */}
        <div className="px-5 sm:px-8 lg:hidden flex flex-col gap-8">
          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900">
            Banyak bisnis sudah punya Instagram dan WhatsApp, tetapi pembeli
            masih kesulitan mencari katalog produk, jam buka, dan titik lokasi
            Google Maps yang valid. Kami merancang satu landing page elegan yang
            langsung mengonversi pengunjung menjadi pesan WhatsApp.
          </p>

          <div>
            <RollButton
              text="About our studio"
              href={getWhatsAppUrl(
                'Halo SatuLaman, saya ingin tahu lebih banyak tentang layanan pembuatan landing page.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="orange"
            />
          </div>

          {/* Two Images Mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-2">
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
              alt="Axion SatuLaman Studio Process"
              className="w-full sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl object-cover bg-gray-100"
              loading="lazy"
            />
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
              alt="Axion SatuLaman Digital Workspace"
              className="w-full sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl object-cover bg-gray-100"
              loading="lazy"
            />
          </div>
        </div>

        {/* DESKTOP CONTENT (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12">
          {/* Left Column: Small image */}
          <div className="self-end">
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
              alt="Axion SatuLaman Studio Process"
              className="w-full aspect-[438/346] rounded-2xl object-cover bg-gray-100"
              loading="lazy"
            />
          </div>

          {/* Center Column: Paragraph + Orange Roll Button */}
          <div className="self-start flex flex-col justify-end pb-4">
            <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium text-gray-900 mb-8">
              Satu halaman ringkas dengan navigasi
              <br />
              cepat yang memikat calon pembeli.
              <br />
              Semua produk, jam operasional,
              <br />
              dan kontak tersaji rapi dan jelas.
            </p>

            <div>
              <RollButton
                text="About our studio"
                href={getWhatsAppUrl(
                  'Halo SatuLaman, saya ingin tahu lebih banyak tentang layanan pembuatan landing page.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="orange"
              />
            </div>
          </div>

          {/* Right Column: Large Image */}
          <div className="self-end">
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
              alt="Axion SatuLaman Digital Workspace"
              className="w-full aspect-[3/2] rounded-2xl object-cover bg-gray-100 shadow-sm"
              loading="lazy"
            />
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="mt-16 sm:mt-24 px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-gray-100">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 mb-1">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
