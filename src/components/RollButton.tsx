import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RollButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'orange' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  target?: string;
  rel?: string;
}

export const RollButton: React.FC<RollButtonProps> = ({
  text,
  href,
  onClick,
  variant = 'orange',
  size = 'md',
  className = '',
  target,
  rel,
}) => {
  const isOrange = variant === 'orange';
  const isDark = variant === 'dark';
  const isWhite = variant === 'white';

  const baseBg = isOrange
    ? 'bg-[#F26522] hover:bg-[#e05a1a] text-white'
    : isDark
    ? 'bg-gray-900 hover:bg-gray-800 text-white'
    : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200';

  const circleBg = isOrange
    ? 'bg-white text-[#F26522]'
    : isDark
    ? 'bg-white text-gray-900'
    : 'bg-gray-900 text-white';

  const padding =
    size === 'sm'
      ? 'pl-4 pr-1.5 py-1.5 text-[12px] sm:text-[13px]'
      : size === 'lg'
      ? 'pl-6 pr-2.5 py-2.5 text-[14px] sm:text-[15px]'
      : 'pl-5 sm:pl-6 pr-2 py-2 text-[13px] sm:text-[14px]';

  const circleSize =
    size === 'sm'
      ? 'w-6 h-6'
      : size === 'lg'
      ? 'w-8 h-8 sm:w-9 sm:h-9'
      : 'w-7 h-7 sm:w-8 sm:h-8';

  const iconSize = size === 'sm' ? 13 : size === 'lg' ? 16 : 14;

  const content = (
    <>
      <div className="h-[20px] overflow-hidden flex flex-col justify-start">
        <span className="block h-[20px] leading-[20px] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
          {text}
        </span>
        <span className="block h-[20px] leading-[20px] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full select-none">
          {text}
        </span>
      </div>
      <div
        className={`${circleSize} rounded-full ${circleBg} flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]`}
      >
        <ArrowRight
          size={iconSize}
          className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45"
        />
      </div>
    </>
  );

  const containerClasses = `group inline-flex items-center gap-3 font-medium rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] select-none ${baseBg} ${padding} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={containerClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={containerClasses}>
      {content}
    </button>
  );
};
