import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { MASTER_COPY, getWhatsAppUrl } from '../data/landingData';

export const FAQSectionNew: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { faq } = MASTER_COPY;

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
          <h2 className="text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-3xl">
            Jawaban lengkap seputar sistem, pengerjaan, dan program Beta SatuLaman.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl space-y-3.5 mb-12">
          {faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.question}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:text-[#F26522] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">{item.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-orange-100 text-[#F26522]' : 'text-gray-500'
                    }`}
                  >
                    <ChevronDown size={15} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout */}
        <div className="max-w-3xl bg-[#FAF9F6] border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-gray-700">
            Punya pertanyaan lain seputar kebutuhan jenis bisnis Anda?
          </div>
          <a
            href={getWhatsAppUrl('Halo SatuLaman, saya ada pertanyaan sebelum mendaftar program Beta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <MessageCircle size={15} />
            <span>Tanya Langsung ke WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
