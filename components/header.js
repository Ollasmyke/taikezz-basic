import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

  const navMenu = [
    {
      name: 'About Us',
      link: '/about',
    },
    {
      name: 'Services',
      link: '/pages/services',
    },
    {
      name: 'Press',
      link: '/pages/press',
    },
    {
      name: 'Team',
      link: '/pages/team',
    },
    {
      name: 'Contact',
      link: '/pages/contact',
    },
  ];

  const headerStyle = isScrolled
    ? { filter: 'drop-shadow(0px 2px 1px rgb(0 0 0 / .04))' }
    : {};

  const router = useRouter();

  return (
    <header
      style={headerStyle}
      className="sticky top-0 z-50 w-full h-24 flex justify-between px-16 border-b bg-white"
    >
      {/* Logo section */}
      <div className="w-[28%] h-full">
        <Link href="/" className="mt-4 flex">
          <Image
            src={monoColorLogo}
            alt="Taikez logo"
            className="w-[120px] h-[120px] p-2 rounded-full bg-white"
          />
          <h2 className="font-jost text-[26px] absolute bottom-0 left-48 font-medium text-secondary">
            Taikez Consultancy
          </h2>
        </Link>
      </div>

      {/* Menu section */}
      <div className="flex w-[40%] justify-end items-end pb-0 h-full">
        <nav className="w-full space-x-12 font-jost flex justify-between text-[16px] text-myBlack font-normal">
            {navMenu.map((link, name) => (
              <Link
                key={name}
                href={link.link}
                className={` ${
                  router.pathname === link.link ? 'activeLink' : 'notActiveLink'
                }`}
              >
                {link.name}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
