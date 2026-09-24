import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PROCESS_STEPS, FAQ_ITEMS } from '../data/landingData';

export const AxionProcessFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#FBFBFB] border-t border-gray-100">
      {/* SECTION 4: PROCESS */}
      <section className="pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge Row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            4
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 text-gray-700 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Step-by-Step Workflow
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 max-w-4xl">
          Alur Pengerjaan Praktis
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step: any) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 border border-gray-200/70 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-bold text-gray-300 font-mono">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-gray-900 mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section
        id="faq"
        className="pt-8 pb-20 sm:pb-28 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 border-t border-gray-200/50"
      >
        {/* Badge Row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            5
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 text-gray-700 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Common Questions
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 max-w-4xl">
          Pertanyaan yang Sering Diajukan
        </h2>

        {/* Accordion list */}
        <div className="max-w-3xl space-y-3">
          {FAQ_ITEMS.map((faq: any, idx: number) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gray-200' : ''
                    }`}
                  >
                    <ChevronDown size={14} className="text-gray-700" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
