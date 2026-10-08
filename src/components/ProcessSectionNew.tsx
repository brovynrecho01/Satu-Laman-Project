import React from 'react';
import {
  CreditCard,
  ClipboardList,
  Hammer,
  Smartphone,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { MASTER_COPY } from '../data/landingData';

export const ProcessSectionNew: React.FC = () => {
  const { workflow } = MASTER_COPY;

  const stepIcons = [
    CreditCard, // 1. Pilih Slot & Pembayaran
    ClipboardList, // 2. Isi Formulir (Intake Form)
    Hammer, // 3. Kami Bangun Sistemnya
    Smartphone, // 4. Review & Revisi
    Rocket, // 5. Go Live & Handoff
  ];

  return (
    <section id="cara-kerja" className="bg-stone-50 py-16 sm:py-20 lg:py-28 border-t border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 rounded-full px-3.5 py-1 text-xs font-semibold mb-4 shadow-2xs">
            <span>Alur Pengerjaan</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            {workflow.headline}
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-3xl">
            Dari pemilihan slot hingga sistem live, seluruh alur dirancang praktis agar Anda bisa fokus melayani pembeli.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {workflow.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle2;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group hover:border-[#F26522]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-orange-200 group-hover:text-[#F26522] transition-colors">
                      0{step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F26522] flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-gray-400 group-hover:text-emerald-700 transition-colors">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  <span>Langkah {step.number}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
