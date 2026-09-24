import React from 'react';

interface SatuLamanLogoProps {
  className?: string;
  size?: number;
}

export const SatuLamanLogo: React.FC<SatuLamanLogoProps> = ({
  className = 'w-9 h-9',
  size,
}) => {
  return (
    <img
      src="/satulaman-logo.svg"
      alt="Satu Laman Logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};
