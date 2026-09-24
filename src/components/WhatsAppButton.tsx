import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/landingData';

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'sticky';
  className?: string;
  id?: string;
  iconSize?: number;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = 'Konsultasi Gratis via WhatsApp',
  message,
  variant = 'primary',
  className = '',
  id,
  iconSize = 19,
}) => {
  const href = getWhatsAppUrl(message);

  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-[0.98] select-none text-center';

  const variants = {
    primary:
      'bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md gap-2.5',
    secondary:
      'bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3.5 rounded-xl shadow-sm gap-2.5',
    outline:
      'border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-5 py-2.5 rounded-xl gap-2',
    sticky:
      'w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl shadow-lg gap-2 text-base font-semibold',
  };

  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={iconSize} className="shrink-0 fill-current opacity-90" />
      <span>{label}</span>
    </a>
  );
};
