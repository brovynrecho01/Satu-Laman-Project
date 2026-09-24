import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/landingData';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Pertanyaan Yang Sering Diajukan
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            FAQ — Seputar Landing Page UMKM
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Semua yang perlu Anda ketahui sebelum memulai pembuatan website bisnis Anda.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={item.question}
                className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden transition-all duration-150 shadow-2xs"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-neutral-900 text-sm sm:text-base hover:text-emerald-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : ''
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 text-center text-xs text-neutral-500">
          Ada pertanyaan lain yang belum terjawab?{' '}
          <a
            href="#final-cta"
            className="font-bold text-emerald-700 hover:underline"
          >
            Tanyakan langsung lewat WhatsApp kami
          </a>
        </div>
      </div>
    </section>
  );
};
