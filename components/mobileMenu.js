import React from 'react';
import Link from 'next/link';

export default function MobileMenu({ isOpen }) {
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

  return (
    <nav
      className={`${
        isOpen ? 'flex lg:hidden' : 'hidden'
      } fixed top-16 flex-col md:top-20 left-0 text-center py-10 w-full h-fit bg-white transition-all duration-300 ease-in-out`}
    >
      {navMenu.map((link, name) => {
        return (
          <Link
            key={name}
            href={link.link}
            className="flex-col font-jost text-base font-medium border-t border-b px-6 py-3 my-2 hover:bg-gray-100"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
