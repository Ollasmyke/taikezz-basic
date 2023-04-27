import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import monoColorLogo from '../public/logos/taikezMonoColorLogo.svg';

import AnimatedMenuIcon from './animatedMenuIcon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Define state for dropdown

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
      className="sticky top-0 z-50 w-full h-16 md:h-20 lg:h-24 flex justify-between px-4 md:px-18 md:px-14 lg:px-16 border-b bg-white"
    >
      {/* Logo section */}
      <div className="w-[80%] md:w-[24%] lg:w-[28%] h-full">
        <Link href="/" className="flex w-fit mt-2 md:mt-1.5 lg:mt-3.5">
          <Image
            src={monoColorLogo}
            alt="Taikez logo"
            className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] p-2 rounded-full bg-white"
          />
          <h2 className="font-jost text-[20px] md:text-[26px] absolute bottom-0 left-[107px] md:left-44 lg:left-[205px] font-medium text-myBlack">
            Taikez Consultancy
          </h2>
        </Link>
      </div>

      {/* Menu section */}
      <div className="flex w-[41%] justify-end items-end pb-0 h-full">
        <AnimatedMenuIcon />
        <nav className="hidden w-full font-jost lg:flex justify-between text-[16px] text-myBlack font-normal">
          {navMenu.map((link, name) => {
            if (link.name === 'Services') {
              // Add onMouseEnter and onMouseLeave events to the Services link
              return (
                <div
                  key={name}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="relative"
                >
                  <Link
                    href={link.link}
                    className={`${
                      router.pathname === link.link
                        ? 'activeLink'
                        : 'notActiveLink'
                    }`}
                  >
                    {link.name}
                    <ExpandMoreIcon
                      className={`${
                        isDropdownOpen ? 'rotate-180 ease-in' : ''
                      } group-hover:rotate-180 ease-in transition-all duration-150`}
                    />
                  </Link>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-md rounded-lg -mt-2">
                      <Link
                        href="/service1"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Service 1
                      </Link>
                      <Link
                        href="/service2"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Service 2
                      </Link>
                      <Link
                        href="/service3"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Service 3
                      </Link>
                      <Link
                        href="/service4"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Service 4
                      </Link>
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <Link
                  key={name}
                  href={link.link}
                  className={`${
                    router.pathname === link.link
                      ? 'activeLink'
                      : 'notActiveLink'
                  }`}
                >
                  {link.name}
                </Link>
              );
            }
          })}
        </nav>
      </div>
    </header>
  );
}
