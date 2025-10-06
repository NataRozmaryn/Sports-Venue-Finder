import React from 'react';
import Image from 'next/image';

interface ViewLocationButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ViewLocationButton: React.FC<ViewLocationButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-[140px] h-[26px] bg-cover bg-center border-none cursor-pointer transform transition-transform hover:scale-105 origin-left"
      style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/button-bg.svg)` }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white text-[14px]">
        <span className="mr-2">view location</span>
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/arrow-right.svg`} alt="arrow" width={16} height={8} className="w-4 h-2" />
      </div>
    </button>
  );
};

export default ViewLocationButton;