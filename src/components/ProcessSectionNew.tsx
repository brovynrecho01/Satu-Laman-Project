import React from 'react';
import { MessageSquare, LayoutTemplate, Hammer, Eye, Rocket, CheckCircle } from 'lucide-react';

export const ProcessSectionNew: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Ceritakan Bisnis Anda',
      description:
        'Kami memahami produk, target pelanggan, dan kebutuhan website bisnis Anda lewat obrolan santai di WhatsApp.',
      icon: MessageSquare,
    },
    {
      num: '02',
      title: 'Tentukan Struktur',
      description:
        'Kami menyusun alur halaman dan informasi apa saja yang paling penting ditampilkan kepada calon pembeli.',
      icon: LayoutTemplate,
    },
    {
      num: '03',
      title: 'Kami Bangun',
      description:
        'Tim kami mengerjakan desain, penataan copy teks, development teknis, dan setting agar website siap online.',
      icon: Hammer,
    },
    {
      num: '04',
      title: 'Anda Review',
      description:
        'Anda mencoba membuka website langsung dari HP, memeriksa informasi, dan memberikan masukan bila ada yang perlu disesuaikan.',
      icon: Eye,
    },
    {
      num: '05',
      title: 'Go Live',
      description:
        'Website resmi siap digunakan, dapat ditaruh di bio Instagram, link status WhatsApp, dan dibagikan ke pelanggan.',
      icon: Rocket,
    },
  ];

  const pills = [
    'Brief Santai',
    'Design Struktur',
    'Build & Copy',
    'Review Bersama',
    'Go Live!',
  ];

  return (
    <section id="cara-kerja" className="bg-stone-50 py-16 sm:py-20 lg:py-28 border-t border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 rounded-full px-3.5 py-1 text-xs font-semibold mb-4 shadow-2xs">
            <span>Alur Pengerjaan</span>
          </div>
          <h2 className="text-[clamp(1.8rem,5vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
            Cara Kerjanya Sederhana.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-3xl">
            Anda tidak perlu pusing dengan urusan teknis coding atau server.
            Cukup ceritakan bisnis Anda, kami yang siapkan sisanya.
          </p>
        </div>

        {/* Workflow Summary Pills */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {pills.map((pill, idx) => (
            <React.Fragment key={pill}>
              <span className="bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-2xs">
                {pill}
              </span>
              {idx < pills.length - 1 && (
                <span className="text-gray-400 text-xs">→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-gray-300">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F26522] flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
