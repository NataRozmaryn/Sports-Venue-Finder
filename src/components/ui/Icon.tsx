import React from 'react';
import Image from 'next/image';

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <Image src={src} alt={alt} width={16} height={16} className="h-4 w-4" />
    </div>
  );
};

export default Icon;