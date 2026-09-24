import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/landingData';

export const FAQSectionNew: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah saya harus punya domain?',
      a: 'Tidak harus. Kami bisa membantu menjelaskan opsi domain dan hosting yang sesuai dengan kebutuhan dan anggaran bisnis Anda.',
    },
    {
      q: 'Apakah website bisa dibuka dari HP?',
      a: 'Ya. Semua landing page dirancang responsive untuk smartphone, tablet, dan desktop. Mayoritas pelanggan UMKM membuka lewat HP, jadi ini prioritas utama kami.',
    },
    {
      q: 'Apakah saya harus punya materi sendiri?',
      a: 'Tidak harus lengkap dari awal. Cukup kirim foto produk yang Anda punya dan info dasar bisnis, tim kami akan membantu menyusun kalimat penjelasannya agar mudah dipahami pembeli.',
    },
    {
      q: 'Apakah bisa langsung terhubung ke WhatsApp?',
      a: 'Ya, tentu saja. Tombol WhatsApp akan langsung mengarahkan pelanggan ke chat Anda, lengkap dengan teks pesan awal otomatis seperti jenis produk yang ingin dipesan.',
    },
    {
      q: 'Apakah saya bisa meminta revisi?',
      a: 'Ya, setiap paket sudah mencakup revisi minor (teks, foto, susunan info) sebelum website resmi di-publish agar Anda benar-benar puas dengan hasilnya.',
    },
    {
      q: 'Berapa lama pengerjaannya?',
      a: 'Rata-rata pengerjaan sekitar 2–4 hari kerja setelah bahan dan info produk dari Anda lengkap diterima.',
    },
    {
      q: 'Apakah setelah selesai website langsung online?',
      a: 'Ya, setelah review selesai dan disetujui, website langsung tayang secara online dan tautannya langsung bisa Anda pasang di bio Instagram atau dibagikan ke pelanggan.',
    },
    {
      q: 'Bisa dibuat untuk bisnis apa saja?',
      a: 'Bisa untuk toko sembako/beras, kuliner & cafe, katering, fashion & butik, salon & kecantikan, jasa servis, bengkel, konveksi, hingga kursus/pelatihan lokal.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 border border-gray-200 rounded-full px-3.5 py-1 text-xs font-semibold mb-4">
            <HelpCircle size={14} />
            <span>Pertanyaan Yang Sering Diajukan</span>
          </div>
          <h2 className="text-[clamp(1.8rem,5vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
            FAQ — Seputar Landing Page UMKM
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-3xl">
            Semua yang perlu Anda ketahui sebelum memulai pembuatan website bisnis Anda.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl space-y-3.5 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:text-[#F26522] transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                  <div
                    className={`w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-orange-100 text-[#F26522]' : 'text-gray-500'
                    }`}
                  >
                    <ChevronDown size={15} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Reassurance */}
        <div className="max-w-3xl bg-[#FAF9F6] border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-gray-700">
            Ada pertanyaan lain yang belum terjawab? Tanyakan langsung lewat WhatsApp kami
          </div>

          <a
            href={getWhatsAppUrl('Halo SatuLaman, saya punya pertanyaan yang belum tercantum di FAQ.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#d95315] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors shrink-0 shadow-2xs"
          >
            <MessageCircle size={14} />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
