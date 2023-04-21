import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import monoColorLogo from '../public/logos/taikezMonoColorLogo.svg';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex item justify-between h-20 px-16 border-b bg-white">
      {/* Logo section */}
      <div className="w-[33%] h-full">
        <Link href="/" className="flex justify-between items-end">
          <Image
            src={monoColorLogo}
            alt="Taikez logo"
            className="w-[120px] h-[120px] -mb-[50px] rounded-full bg-white"
          />
          <h2 className="text-[21px] font-medium text-myBlack">Taikez Consultancy</h2>
        </Link>
      </div>

      {/* Menu section */}
      <div className="flex items-center h-full">
        <nav>
          <ul className="font-jost flex space-x-10 text-[16px] text-myBlack font-normal">
            <li>
              <Link href="/pages/about">About Us</Link>
            </li>
            <li>
              <Link href="/pages/services">Services</Link>
            </li>
            <li>
              <Link href="/pages/press">Press</Link>
            </li>
            <li>
              <Link href="/pages/team">Team</Link>
            </li>
            <li>
              <Link href="/pages/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
}
