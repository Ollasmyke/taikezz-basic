import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import monoColorLogo from '../public/logos/taikezMonoColorLogo.svg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  function handleScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const headerStyle = isScrolled
  ? {
      filter: 'drop-shadow(0px 2.5px 2px rgb(0 0 0 / .06))',
    }
  : {};
  return (
    <header 
      style={headerStyle}
      className="sticky top-0 z-50 w-full h-24 flex justify-between px-16 border-b bg-white">
      {/* Logo section */}
      <div className="w-[28%] h-full">
        <Link href="/" className="mt-4 flex">
          <Image
            src={monoColorLogo}
            alt="Taikez logo"
            className="w-[120px] h-[120px] p-2 rounded-full bg-white"
          />
          <h2 className="font-jost text-[26px] absolute bottom-0 left-48 font-medium text-secondary">Taikez Consultancy</h2>
        </Link>
      </div>

      {/* Menu section */}
      <div className="flex w-[65%] justify-end items-end pb-1 h-full">
        <nav>
          <ul className="w-[100%] space-x-12 font-jost flex justify-between text-[16px] text-myBlack font-normal">
            <li className="headerLi">
              <Link href="/about">About Us</Link>
            </li>
            <li className="headerLi">
              <Link href="/pages/services">Services</Link>
            </li>
            <li className="headerLi">
              <Link href="/pages/press">Press</Link>
            </li>
            <li className="headerLi">
              <Link href="/pages/team">Team</Link>
            </li>
            <li className="headerLi">
              <Link href="/pages/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
}
