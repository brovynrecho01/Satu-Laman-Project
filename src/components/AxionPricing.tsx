import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS, getWhatsAppUrl } from '../data/landingData';
import { RollButton } from './RollButton';

export const AxionPricing: React.FC = () => {
  return (
    <section
      id="paket"
      className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-t border-gray-100"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge Row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            3
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 text-gray-700 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Transparent Pricing
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-6 max-w-4xl">
          Pilihan Paket Investasi
        </h2>
        <p className="text-[15px] sm:text-[17px] text-gray-600 max-w-2xl font-normal leading-relaxed mb-12 sm:mb-16">
          Biaya transparan sekali bayar tanpa langganan tersembunyi. Termasuk
          panduan pemakaian dan pendampingan WhatsApp.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING_PLANS.map((pkg) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#18181B] text-white shadow-xl ring-1 ring-black/5'
                    : 'bg-[#F9F9F9] text-gray-900 border border-gray-200/80 hover:border-gray-300'
                }`}
              >
                <div>
                  {/* Top row: Name & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h3
                      className={`text-lg font-semibold tracking-tight ${
                        isPopular ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    {isPopular && (
                      <span className="text-[11px] font-medium bg-[#F26522] text-white px-2.5 py-0.5 rounded-full">
                        Paling Populer
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-xs sm:text-sm mb-6 ${
                      isPopular ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gray-200/20">
                    <span
                      className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                        isPopular ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {pkg.priceDisplay}
                    </span>
                    <span
                      className={`text-xs ml-2 ${
                        isPopular ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      / sekali bayar
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-xs sm:text-sm"
                      >
                        <div
                          className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center shrink-0 ${
                            isPopular
                              ? 'bg-white/20 text-white'
                              : 'bg-gray-200 text-gray-900'
                          }`}
                        >
                          <Check size={11} strokeWidth={2.5} />
                        </div>
                        <span
                          className={
                            isPopular ? 'text-gray-200' : 'text-gray-700'
                          }
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Roll Button */}
                <div className="pt-2">
                  <RollButton
                    text={pkg.ctaLabel}
                    href={getWhatsAppUrl(
                      pkg.waMessage ||
                        `Halo SatuLaman, saya tertarik dengan paket ${pkg.name} untuk bisnis saya.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isPopular ? 'orange' : 'dark'}
                    className="w-full justify-between"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
