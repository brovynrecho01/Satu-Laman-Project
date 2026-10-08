import React from 'react';
import { AlertCircle, XCircle } from 'lucide-react';
import { MASTER_COPY } from '../data/landingData';

export const ProblemSection: React.FC = () => {
  const { problemAgitation } = MASTER_COPY;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200/80 rounded-full px-3.5 py-1 text-xs font-semibold mb-4">
            <AlertCircle size={14} />
            <span>Problem Agitation</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1.15] tracking-[-0.02em] text-gray-900 mb-5">
            {problemAgitation.headline}
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-700 leading-relaxed max-w-3xl">
            {problemAgitation.intro}
          </p>
        </div>

        {/* Pain Points & Agitation Presentation */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50/90 rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm relative overflow-hidden">
            {/* Visual Red Alert Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {problemAgitation.painPoints.map((point: string, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-red-100/80 shadow-xs flex items-start gap-3.5 hover:border-red-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500 block mb-1">
                      Hambatan 0{index + 1}
                    </span>
                    <p className="text-sm sm:text-base font-medium text-gray-800 leading-snug">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Conclusion Alert Box */}
            <div className="bg-red-50/90 text-red-900 text-sm sm:text-base font-semibold p-4 sm:p-5 rounded-2xl border border-red-200/80 flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                {problemAgitation.conclusion}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
