'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`mr-8 text-[18px] font-bold relative text-[#333333] flex items-center h-[18px]`}>
      {children}
      {isActive && <span className="absolute bottom-[-13px] left-1/2 -translate-x-1/2 w-[36px] h-[5px] bg-[#009DDA]"></span>}
    </Link>
  );
};

export default NavLink;