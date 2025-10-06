'use client';

import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white text-black px-[31px] py-[32px] flex justify-between items-center border-b border-gray-200 h-[90px]">
      <div className="flex items-center">
        <Image src="/logo.png" alt="BEDRIJFSFITNESS NEDERLAND" width={134} height={27} className="h-auto" priority />
        <nav className="flex items-center ml-[84px]">
          <NavLink href="/">Sport Venues</NavLink>
          <NavLink href="/about">About us</NavLink>
          <NavLink href="/signup">Sign-up</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;